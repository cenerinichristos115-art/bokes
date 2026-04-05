#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const APP_JS_PATH = path.join(__dirname, "..", "app.js");
const TARGET_COUNT = Number.parseInt(process.env.AUTO_NEWS_COUNT || "3", 10);
const TIMEZONE = process.env.AUTO_NEWS_TIMEZONE || "Asia/Shanghai";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";
const OPENAI_BASE_URL = (process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");

const FALLBACK_HERO = {
  url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  alt: "AI 新闻配图",
  credit: "图片来源：Wikimedia Commons",
};

if (!Number.isInteger(TARGET_COUNT) || TARGET_COUNT <= 0 || TARGET_COUNT > 6) {
  throw new Error("AUTO_NEWS_COUNT 必须是 1-6 的整数");
}

const todayInTimezone = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const toDateToken = (date) => String(date).replace(/-/g, "");

const decodeXml = (text = "") =>
  String(text)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();

const stripTags = (text = "") => decodeXml(String(text).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());

const extractTag = (xml = "", tagName) => {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const match = String(xml).match(regex);
  return match ? decodeXml(match[1]) : "";
};

const safeUrl = (value = "") => {
  try {
    const parsed = new URL(String(value));
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
    return "";
  } catch {
    return "";
  }
};

const pubDateToIso = (value = "") => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toISOString();
};

const fetchText = async (url) => {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; boke-bot/1.0)",
      accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
    },
  });
  if (!response.ok) {
    throw new Error(`请求失败 ${response.status}: ${url}`);
  }
  return response.text();
};

const parseRssItems = (xml, feedName) => {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const title = stripTags(extractTag(itemXml, "title"));
    const link = safeUrl(extractTag(itemXml, "link"));
    const source = stripTags(extractTag(itemXml, "source")) || feedName;
    const description = stripTags(extractTag(itemXml, "description"));
    const pubDateRaw = extractTag(itemXml, "pubDate");
    const pubDate = pubDateToIso(pubDateRaw);
    if (!title || !link) {
      continue;
    }
    items.push({
      title,
      link,
      source,
      description,
      pubDate,
      feed: feedName,
    });
  }
  return items;
};

const dedupeCandidates = (items) => {
  const seen = new Set();
  const output = [];
  for (const item of items) {
    const key = `${item.title.toLowerCase()}|${item.link}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    output.push(item);
  }
  return output;
};

const fetchNewsCandidates = async () => {
  const feeds = [
    {
      name: "Google News US AI",
      url: "https://news.google.com/rss/search?q=artificial+intelligence+when:1d&hl=en-US&gl=US&ceid=US:en",
    },
    {
      name: "Google News US GenAI",
      url: "https://news.google.com/rss/search?q=(OpenAI+OR+Anthropic+OR+Google+AI+OR+Microsoft+AI)+when:1d&hl=en-US&gl=US&ceid=US:en",
    },
    {
      name: "Google News CN AI",
      url: "https://news.google.com/rss/search?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD+when:1d&hl=zh-CN&gl=CN&ceid=CN:zh-Hans",
    },
  ];

  const results = [];
  for (const feed of feeds) {
    try {
      const xml = await fetchText(feed.url);
      const parsed = parseRssItems(xml, feed.name);
      results.push(...parsed);
    } catch (error) {
      console.warn(`[auto-news] 拉取失败: ${feed.name} -> ${error.message}`);
    }
  }

  const deduped = dedupeCandidates(results)
    .sort((a, b) => String(b.pubDate).localeCompare(String(a.pubDate)))
    .slice(0, 24);

  return deduped;
};

const buildPrompt = (candidates, dateText, count) => {
  const sourceList = candidates
    .map((item, index) => {
      const bits = [
        `#${index + 1}`,
        `标题: ${item.title}`,
        `来源: ${item.source}`,
        item.pubDate ? `时间: ${item.pubDate}` : "",
        `链接: ${item.link}`,
        item.description ? `摘要: ${item.description}` : "",
      ].filter(Boolean);
      return bits.join(" | ");
    })
    .join("\n");

  return `请基于以下候选新闻，生成 ${count} 篇中文 AI 新闻稿（用于网站发布）。\n\n输出 JSON 对象，格式为:\n{\n  "articles": [\n    {\n      "title": "",\n      "summary": "",\n      "source": "",\n      "source_url": "",\n      "references": [{"label":"","url":""}],\n      "content": {\n        "intro": "",\n        "blocks": [\n          {"heading":"", "paragraphs":["", "", ""]},\n          {"heading":"", "paragraphs":["", "", ""]},\n          {"heading":"", "paragraphs":["", "", ""]}\n        ]\n      }\n    }\n  ]\n}\n\n硬性要求:\n1) 必须是 ${count} 篇，且是不同事件。\n2) title 控制在 20 个中文字符以内；summary 控制在 50 个中文字符以内。\n3) source_url 与 references.url 必须只使用候选列表里的链接。\n4) 每篇 references 恰好 3 条。\n5) 每篇 blocks 恰好 3 个，每个 block 的 paragraphs 恰好 3 段。\n6) 语气客观，避免夸张词。\n7) 发布日期语境是 ${dateText}（北京时间）。\n\n候选新闻列表:\n${sourceList}`;
};

const parseJsonPayload = (rawText) => {
  const stripCodeFence = (text = "") =>
    String(text)
      .replace(/^\s*```(?:json)?\s*/i, "")
      .replace(/\s*```\s*$/i, "")
      .trim();

  const tryParse = (text) => {
    if (!text) {
      return null;
    }
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  };

  const trimmed = stripCodeFence(String(rawText || "").trim());
  if (!trimmed) {
    throw new Error("模型返回为空");
  }

  const direct = tryParse(trimmed);
  if (direct) {
    return direct;
  }

  const first = trimmed.indexOf("{");
  const last = trimmed.lastIndexOf("}");
  if (first >= 0 && last > first) {
    const sliced = trimmed.slice(first, last + 1);
    const parsed = tryParse(sliced);
    if (parsed) {
      return parsed;
    }

    // Common recovery for near-valid JSON produced by models.
    const withoutTrailingCommas = sliced.replace(/,\s*([}\]])/g, "$1");
    const repaired = tryParse(withoutTrailingCommas);
    if (repaired) {
      return repaired;
    }
  }

  throw new Error("模型返回不是合法 JSON");
};

const callOpenAIForDrafts = async (candidates, dateText, count) => {
  if (!OPENAI_API_KEY) {
    throw new Error("缺少 OPENAI_API_KEY，无法自动生成新闻稿");
  }

  const maxAttempts = 3;
  let lastError = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const payload = {
        model: OPENAI_MODEL,
        temperature: 0.2,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "你是严格遵循结构化输出的中文AI新闻编辑，只输出JSON，不输出Markdown，不添加额外解释，确保JSON语法100%合法（双引号、无多余逗号）。",
          },
          {
            role: "user",
            content: buildPrompt(candidates, dateText, count),
          },
        ],
      };

      const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const raw = await response.text();
      if (!response.ok) {
        throw new Error(`OpenAI 接口失败 ${response.status}: ${raw.slice(0, 400)}`);
      }

      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        throw new Error("OpenAI 返回不是合法 JSON");
      }

      const text = parsed?.choices?.[0]?.message?.content;
      const data = parseJsonPayload(text);
      const articles = Array.isArray(data?.articles) ? data.articles : [];
      if (articles.length < count) {
        throw new Error(`模型返回文章数不足，期望 ${count}，实际 ${articles.length}`);
      }

      if (attempt > 1) {
        console.log(`[auto-news] 第 ${attempt} 次尝试成功`);
      }
      return articles.slice(0, count);
    } catch (error) {
      lastError = error;
      console.warn(`[auto-news] 第 ${attempt} 次模型生成失败: ${error.message}`);
    }
  }

  throw lastError || new Error("模型生成失败");
};

const shortText = (value, limit) => {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  return text.length > limit ? text.slice(0, limit) : text;
};

const pickValidUrl = (url, fallback = "") => {
  const safe = safeUrl(url);
  return safe || fallback;
};

const normalizeReferences = (references, fallbackCandidates = []) => {
  const list = [];
  if (Array.isArray(references)) {
    for (const ref of references) {
      if (!ref || typeof ref !== "object") {
        continue;
      }
      const url = pickValidUrl(ref.url);
      if (!url) {
        continue;
      }
      const label = shortText(ref.label || "来源链接", 120) || "来源链接";
      if (list.some((item) => item.url === url)) {
        continue;
      }
      list.push({ label, url });
      if (list.length >= 3) {
        break;
      }
    }
  }

  for (const candidate of fallbackCandidates) {
    if (list.length >= 3) {
      break;
    }
    if (!candidate || !candidate.link) {
      continue;
    }
    if (list.some((item) => item.url === candidate.link)) {
      continue;
    }
    list.push({
      label: `${candidate.source}：${shortText(candidate.title, 70)}`,
      url: candidate.link,
    });
  }

  return list.slice(0, 3);
};

const normalizeBlocks = (blocks) => {
  const normalized = [];
  if (Array.isArray(blocks)) {
    for (const block of blocks) {
      if (!block || typeof block !== "object") {
        continue;
      }
      const heading = shortText(block.heading || "小标题", 40) || "小标题";
      const paragraphs = Array.isArray(block.paragraphs)
        ? block.paragraphs
            .map((item) => shortText(item, 220))
            .filter((item) => item)
            .slice(0, 3)
        : [];
      if (paragraphs.length === 0) {
        continue;
      }
      while (paragraphs.length < 3) {
        paragraphs.push(paragraphs[paragraphs.length - 1]);
      }
      normalized.push({ heading, paragraphs });
      if (normalized.length >= 3) {
        break;
      }
    }
  }

  while (normalized.length < 3) {
    normalized.push({
      heading: `补充要点${normalized.length + 1}`,
      paragraphs: ["更多细节待官方披露。", "行业影响仍在观察中。", "建议持续跟踪后续公告。"],
    });
  }

  return normalized;
};

const makeSlug = (dateToken, index, title) => {
  const seed = crypto
    .createHash("md5")
    .update(`${dateToken}-${index + 1}-${title}`)
    .digest("hex")
    .slice(0, 6);
  return `ai-news-${dateToken}-auto-${index + 1}-${seed}`;
};

const toArticleObject = (raw, index, dateText, dateToken, candidates) => {
  const title = shortText(raw?.title || `AI快讯${index + 1}`, 20) || `AI快讯${index + 1}`;
  const summary = shortText(raw?.summary || "AI行业出现新的产品与商业化动向。", 50) || "AI行业出现新的产品与商业化动向。";

  const refs = normalizeReferences(raw?.references, candidates);
  const sourceUrl = pickValidUrl(raw?.source_url, refs[0]?.url || "https://news.google.com/");

  return {
    slug: makeSlug(dateToken, index, title),
    title,
    category: "AI新闻",
    date: dateText,
    summary,
    hero_image: {
      url: FALLBACK_HERO.url,
      alt: `${title} 配图`,
      credit: FALLBACK_HERO.credit,
    },
    featured: index === 0,
    content: {
      intro: shortText(raw?.content?.intro || `${dateText} 最新 AI 动态聚焦于模型发布、产品策略和商业化推进。`, 180),
      blocks: normalizeBlocks(raw?.content?.blocks),
    },
    references: refs,
    source: shortText(raw?.source || refs.map((item) => item.label.split("：")[0]).join(" / ") || "综合整理", 80),
    source_url: sourceUrl,
  };
};

const buildFallbackDraftsFromCandidates = (candidates, count) =>
  candidates.slice(0, count).map((candidate, index) => {
    const titleBase = shortText(candidate.title || `AI快讯${index + 1}`, 18) || `AI快讯${index + 1}`;
    const summary =
      shortText(candidate.description || `${candidate.source} 报道了新的 AI 进展，值得持续关注。`, 50) ||
      `${candidate.source} 报道了新的 AI 进展，值得持续关注。`;
    return {
      title: titleBase,
      summary,
      source: shortText(candidate.source || "综合整理", 80),
      source_url: pickValidUrl(candidate.link, "https://news.google.com/"),
      references: [
        {
          label: `${shortText(candidate.source || "来源", 40)}：原始报道`,
          url: pickValidUrl(candidate.link, "https://news.google.com/"),
        },
      ],
      content: {
        intro: summary,
        blocks: [
          {
            heading: "事件概览",
            paragraphs: [
              summary,
              "目前公开信息主要来自媒体与官方对外发布内容。",
              "核心结论仍需结合后续公告持续验证。",
            ],
          },
          {
            heading: "行业影响",
            paragraphs: [
              "该动态可能影响相关模型能力竞争与产品节奏。",
              "企业端落地与商业化路径会随生态合作变化。",
              "短期内建议关注数据、成本与合规层面的变化。",
            ],
          },
          {
            heading: "后续观察",
            paragraphs: [
              "继续追踪官方博客、发布会与监管信息更新。",
              "若出现版本迭代，需重新评估能力边界。",
              "建议在多来源交叉验证后再形成长期判断。",
            ],
          },
        ],
      },
    };
  });

const renderArticleLiteral = (article) => {
  const json = JSON.stringify(article, null, 2)
    .split("\n")
    .map((line) => `      ${line}`)
    .join("\n");
  return `${json},`;
};

const prependArticlesToAppJs = (articles, dateToken) => {
  const current = fs.readFileSync(APP_JS_PATH, "utf8");

  const alreadyExists = new RegExp(`slug:\\s*"ai-news-${dateToken}-auto-\\d+-`, "m").test(current);
  if (alreadyExists) {
    console.log(`[auto-news] ${dateToken} 的自动稿已存在，跳过写入`);
    return false;
  }

  const aiNewsIndex = current.indexOf('id: "ai-news"');
  if (aiNewsIndex < 0) {
    throw new Error("未在 app.js 中找到 ai-news 分区");
  }

  const itemsIndex = current.indexOf("items: [", aiNewsIndex);
  if (itemsIndex < 0) {
    throw new Error("未在 ai-news 分区中找到 items 数组");
  }

  const insertAt = current.indexOf("\n", itemsIndex);
  if (insertAt < 0) {
    throw new Error("app.js items 数组格式异常");
  }

  const block = articles.map(renderArticleLiteral).join("\n");
  const next = `${current.slice(0, insertAt + 1)}${block}\n${current.slice(insertAt + 1)}`;
  fs.writeFileSync(APP_JS_PATH, next, "utf8");
  return true;
};

const main = async () => {
  const dateText = todayInTimezone();
  const dateToken = toDateToken(dateText);
  console.log(`[auto-news] date=${dateText}, target=${TARGET_COUNT}`);

  const candidates = await fetchNewsCandidates();
  if (candidates.length < TARGET_COUNT) {
    throw new Error(`候选新闻不足：需要 ${TARGET_COUNT} 条，实际 ${candidates.length} 条`);
  }

  console.log(`[auto-news] 候选新闻条数: ${candidates.length}`);

  let drafts;
  try {
    drafts = await callOpenAIForDrafts(candidates, dateText, TARGET_COUNT);
  } catch (error) {
    console.warn(`[auto-news] 模型草稿生成失败，启用模板降级: ${error.message}`);
    drafts = buildFallbackDraftsFromCandidates(candidates, TARGET_COUNT);
  }

  const articles = drafts.map((draft, index) => toArticleObject(draft, index, dateText, dateToken, candidates));

  const changed = prependArticlesToAppJs(articles, dateToken);
  if (!changed) {
    return;
  }

  console.log(`[auto-news] 已写入 ${articles.length} 篇：${articles.map((item) => item.slug).join(", ")}`);
};

main().catch((error) => {
  console.error(`[auto-news] 失败: ${error.message}`);
  process.exit(1);
});
