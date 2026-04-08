#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const {
  sections,
  sanitizeSectionId,
  formatDate,
  buildArticleSlug,
} = require(path.join(__dirname, "..", "app.js"));

const SITE_NAME = "寂川日报";
const SITE_URL = (process.env.SITE_URL || "https://cenerinichristos115-art.github.io/bokes").replace(/\/$/, "");
const SITE_REPO_URL = "https://github.com/cenerinichristos115-art/bokes";
const OUTPUT_DIR = path.join(__dirname, "..", "articles");
const SECTION_DIR = path.join(__dirname, "..", "sections");
const ROOT_DIR = path.join(__dirname, "..");
const SITE_BASE_PATH = (() => {
  try {
    const parsed = new URL(SITE_URL);
    return parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "");
  } catch {
    return "";
  }
})();

const withBasePath = (pathname = "/") => {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_BASE_PATH}${cleanPath}`;
};
const RSS_PATH = "/rss.xml";
const RSS_HREF_PATH = withBasePath(RSS_PATH);
const RSS_ABS_URL = `${SITE_URL}${RSS_PATH}`;
const HOME_HREF_PATH = withBasePath("/");
const GOOGLE_SITE_VERIFICATION = String(process.env.GOOGLE_SITE_VERIFICATION || "").trim();
const BING_SITE_VERIFICATION = String(process.env.BING_SITE_VERIFICATION || "").trim();
const TRUST_PAGES = [
  {
    filename: "about.html",
    title: "关于我们",
    description: "寂川日报是一个聚焦 AI新闻、AI使用教程与开源项目的持续更新站点。",
    sections: [
      {
        heading: "我们做什么",
        paragraphs: [
          "寂川日报聚焦三类内容：AI新闻、AI使用教程、开源项目。目标是把高频更新的信息整理为可追踪、可复核的内容。",
          "我们优先选择带时间、主体、动作和关键数字的信息，并保留原始来源链接，方便读者自行核验。",
        ],
      },
      {
        heading: "更新机制",
        paragraphs: [
          "站点通过自动化工作流每日更新，栏目配额为：AI新闻2篇、AI使用教程1篇、开源项目2篇。",
          "若自动生成失败，工作流会记录失败并在后续发布中继续补齐更新。",
        ],
      },
    ],
  },
  {
    filename: "editorial-policy.html",
    title: "编辑规范",
    description: "寂川日报编辑与来源说明，包含来源标准、校对流程与更正原则。",
    sections: [
      {
        heading: "来源与核验标准",
        paragraphs: [
          "每篇文章至少包含可点击来源链接。我们优先使用官方公告、机构报告与主流媒体原文。",
          "对关键事实（时间、金额、产品动作、政策条款）进行交叉核对；无法核验的信息不会作为结论写入摘要。",
        ],
      },
      {
        heading: "AI生成与人工复核",
        paragraphs: [
          "自动化系统负责候选信息整理与初稿生成，编辑流程会对结构、事实一致性和来源可访问性进行复核。",
          "若发现描述偏差或链接失效，会优先修订原文并保留更新时间。",
        ],
      },
      {
        heading: "更正机制",
        paragraphs: [
          "如你发现错误或遗漏，可通过联系方式页面提交反馈。我们会在核实后修订并更新页面日期。",
        ],
      },
    ],
  },
  {
    filename: "privacy.html",
    title: "隐私政策",
    description: "寂川日报隐私政策说明，涵盖数据收集范围、用途与第三方服务。",
    sections: [
      {
        heading: "收集范围",
        paragraphs: [
          "本站不提供注册登录，不主动收集姓名、手机号等个人身份信息。",
          "网站托管平台可能记录基础访问日志（如IP、浏览器类型、访问时间）用于安全与运维。",
        ],
      },
      {
        heading: "数据用途",
        paragraphs: [
          "访问日志仅用于站点稳定性分析、故障排查与安全防护，不用于个人画像或广告定向。",
          "若后续新增订阅表单、统计脚本或第三方服务，本页面会同步更新说明。",
        ],
      },
    ],
  },
  {
    filename: "contact.html",
    title: "联系方式",
    description: "寂川日报联系方式与反馈渠道。",
    sections: [
      {
        heading: "反馈与合作",
        paragraphs: [
          "内容纠错、选题建议、合作沟通可通过 GitHub Issues 提交，我们会定期处理。",
          "联系地址：GitHub 仓库 Issues（公开）：https://github.com/cenerinichristos115-art/bokes/issues",
        ],
      },
      {
        heading: "站点收录相关",
        paragraphs: [
          "搜索引擎收录基于 sitemap.xml 与 robots.txt 持续更新。若你是站点维护者，可在 Search Console 与 Bing Webmaster 中提交站点地图。",
        ],
      },
    ],
  },
];

const now = new Date();
const currentDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(now);
const HERO_IMAGE_REQUIRED_FROM = "2026-04-02";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });

const escapeAttr = (value = "") => escapeHtml(value).replace(/`/g, "&#96;");
const renderVerificationMeta = () =>
  [GOOGLE_SITE_VERIFICATION ? `<meta name="google-site-verification" content="${escapeAttr(GOOGLE_SITE_VERIFICATION)}" />` : ""]
    .concat(BING_SITE_VERIFICATION ? [`<meta name="msvalidate.01" content="${escapeAttr(BING_SITE_VERIFICATION)}" />`] : [])
    .filter(Boolean)
    .join("\n");
const renderTrustLinks = () =>
  `<nav class="site-links" aria-label="站点信息"><ul>${TRUST_PAGES.map((item) => `<li><a href="${escapeAttr(withBasePath(`/${item.filename}`))}">${escapeHtml(item.title)}</a></li>`).join("")}</ul></nav>`;
const renderSubscribeCta = () => `<section class="subscribe-cta subscribe-cta-detail" aria-label="订阅入口">
<p class="subscribe-kicker">SUBSCRIBE</p>
<h2 class="subscribe-title">免费订阅寂川日报</h2>
<p class="subscribe-desc">每天更新 AI新闻、AI使用教程、开源项目，支持 RSS 订阅。</p>
<p class="subscribe-actions">
<a class="subscribe-btn" href="${escapeAttr(RSS_HREF_PATH)}" target="_blank" rel="noopener noreferrer">订阅 RSS</a>
<a class="subscribe-link" href="${escapeAttr(HOME_HREF_PATH)}">返回首页</a>
</p>
</section>`;

const normalizeContent = (item = {}) => {
  if (item.content && typeof item.content === "object" && !Array.isArray(item.content)) {
    const intro =
      typeof item.content.intro === "string" && item.content.intro.trim().length > 0
        ? item.content.intro.trim()
        : (item.summary || "").trim();

    const blocks = Array.isArray(item.content.blocks)
      ? item.content.blocks
          .map((block) => {
            if (!block || typeof block !== "object") {
              return null;
            }
            const heading =
              typeof block.heading === "string" && block.heading.trim().length > 0
                ? block.heading.trim()
                : "小标题";
            const paragraphs = Array.isArray(block.paragraphs)
              ? block.paragraphs
                  .filter((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0)
                  .map((paragraph) => paragraph.trim())
              : [];
            if (paragraphs.length === 0) {
              return null;
            }
            return { heading, paragraphs };
          })
          .filter(Boolean)
      : [];

    return { intro, blocks };
  }

  return {
    intro: (item.summary || "").trim(),
    blocks: [],
  };
};

const sanitizeUrl = (value) => {
  if (typeof value !== "string") {
    return null;
  }
  try {
    const parsed = new URL(value);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
  } catch {
    return null;
  }
  return null;
};

const normalizeHeroImage = (item = {}, fallbackAlt = "") => {
  if (!item.hero_image || typeof item.hero_image !== "object" || Array.isArray(item.hero_image)) {
    return null;
  }
  const imageUrl = sanitizeUrl(item.hero_image.url);
  if (!imageUrl) {
    return null;
  }
  const altText =
    typeof item.hero_image.alt === "string" && item.hero_image.alt.trim().length > 0
      ? item.hero_image.alt.trim()
      : fallbackAlt || "文章头图";
  const creditText =
    typeof item.hero_image.credit === "string" && item.hero_image.credit.trim().length > 0
      ? item.hero_image.credit.trim()
      : "";
  return {
    url: imageUrl,
    alt: altText,
    credit: creditText,
  };
};

const makeAnchorId = (prefix, index) => `${prefix}-${index + 1}`;

const ensureDir = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true });
};

const cleanHtmlFiles = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    return;
  }
  const entries = fs.readdirSync(dirPath);
  for (const entry of entries) {
    if (entry.endsWith(".html")) {
      fs.unlinkSync(path.join(dirPath, entry));
    }
  }
};

ensureDir(OUTPUT_DIR);
ensureDir(SECTION_DIR);
cleanHtmlFiles(OUTPUT_DIR);
cleanHtmlFiles(SECTION_DIR);

const articleRecords = [];
const sectionRecords = [];
const sectionRecordMap = new Map();
const heroImageWarnings = [];
const sourceWarnings = [];

for (const section of sections) {
  const sectionId = sanitizeSectionId(section.id);
  const sectionTitle = section.title || "未命名栏目";
  const items = Array.isArray(section.items) ? section.items : [];
  const sectionPath = `/sections/${sectionId}.html`;
  const sectionHrefPath = withBasePath(sectionPath);

  let sectionRecord = sectionRecordMap.get(sectionId);
  if (!sectionRecord) {
    sectionRecord = {
      id: sectionId,
      title: sectionTitle,
      path: sectionHrefPath,
      absUrl: `${SITE_URL}${sectionPath}`,
      items: [],
    };
    sectionRecordMap.set(sectionId, sectionRecord);
    sectionRecords.push(sectionRecord);
  }

  items.forEach((item, index) => {
    const slug = buildArticleSlug(sectionId, index, item);
    const relPath = `/articles/${slug}.html`;
    const relHrefPath = withBasePath(relPath);
    const absUrl = `${SITE_URL}${relPath}`;

    const title = (item.title || "暂无标题").trim();
    const summary = (item.summary || "").trim();
    const date = formatDate(item.date);
    const source = (item.source || SITE_NAME).trim();
    const sourceUrl = sanitizeUrl(item.source_url);
    const content = normalizeContent(item);
    const heroImage = normalizeHeroImage(item, title);
    if (date >= HERO_IMAGE_REQUIRED_FROM && !heroImage) {
      heroImageWarnings.push(`${sectionId}/${slug}`);
    }

    const references = [];
    if (sourceUrl) {
      references.push({ label: `${source}（原始来源）`, url: sourceUrl });
    }
    if (Array.isArray(item.references)) {
      for (const reference of item.references) {
        if (!reference || typeof reference !== "object") {
          continue;
        }
        const label =
          typeof reference.label === "string" && reference.label.trim().length > 0
            ? reference.label.trim()
            : "来源链接";
        const url = sanitizeUrl(reference.url);
        if (!url) {
          continue;
        }
        if (references.some((entry) => entry.url === url)) {
          continue;
        }
        references.push({ label, url });
      }
    }
    if (references.length === 0) {
      sourceWarnings.push(`${sectionId}/${slug}: 缺少可核验来源链接`);
    } else if (references.some((entry) => /^https?:\/\/example\.com/i.test(entry.url))) {
      sourceWarnings.push(`${sectionId}/${slug}: 使用了示例来源(example.com)，建议替换为真实来源`);
    }

    const blocksForBody = content.blocks.filter((block) => block.heading !== "目录");

    const tocItems = blocksForBody
      .map((block, blockIndex) => {
        const anchor = makeAnchorId("section", blockIndex);
        return `<li><a href="#${anchor}">${escapeHtml(block.heading)}</a></li>`;
      })
      .join("\n");

    const bodyHtml = blocksForBody
      .map((block, blockIndex) => {
        const anchor = makeAnchorId("section", blockIndex);
        const paragraphs = block.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n");
        return `<section>\n<h2 id="${anchor}">${escapeHtml(block.heading)}</h2>\n${paragraphs}\n</section>`;
      })
      .join("\n");

    const sourcesHtml = references
      .map((reference) => `<li><a href="${escapeAttr(reference.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(reference.label)}</a></li>`)
      .join("\n");

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      datePublished: date,
      dateModified: currentDate,
      description: summary || content.intro || `${SITE_NAME} AI新闻稿`,
      inLanguage: "zh-CN",
      articleSection: sectionTitle,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absUrl,
      },
      author: {
        "@type": "Organization",
        name: `${SITE_NAME} 编辑部`,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      url: absUrl,
    };
    if (heroImage) {
      articleJsonLd.image = [heroImage.url];
    }

    const heroImageHtml = heroImage
      ? `<figure class="detail-hero">
<img src="${escapeAttr(heroImage.url)}" alt="${escapeAttr(heroImage.alt)}" loading="eager" decoding="async" fetchpriority="high" width="1200" height="675" />
${heroImage.credit ? `<figcaption>${escapeHtml(heroImage.credit)}</figcaption>` : ""}
</figure>`
      : "";

    const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(title)} | ${SITE_NAME}</title>
<meta name="description" content="${escapeAttr(summary || content.intro || `${SITE_NAME} AI新闻稿`)}" />
<meta name="keywords" content="AI新闻,${escapeAttr(sectionTitle)},${escapeAttr(source)}" />
<meta name="robots" content="index,follow,max-image-preview:large" />
<link rel="canonical" href="${escapeAttr(absUrl)}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${escapeAttr(title)}" />
<meta property="og:description" content="${escapeAttr(summary || content.intro || `${SITE_NAME} AI新闻稿`)}" />
<meta property="og:url" content="${escapeAttr(absUrl)}" />
${heroImage ? `<meta property="og:image" content="${escapeAttr(heroImage.url)}" />` : ""}
<meta property="og:site_name" content="${SITE_NAME}" />
<meta property="article:published_time" content="${escapeAttr(date)}" />
<meta property="article:section" content="${escapeAttr(sectionTitle)}" />
<meta name="twitter:card" content="${heroImage ? "summary_large_image" : "summary"}" />
<meta name="twitter:title" content="${escapeAttr(title)}" />
<meta name="twitter:description" content="${escapeAttr(summary || content.intro || `${SITE_NAME} AI新闻稿`)}" />
${heroImage ? `<meta name="twitter:image" content="${escapeAttr(heroImage.url)}" />` : ""}
<link rel="alternate" type="application/rss+xml" title="${SITE_NAME} RSS" href="${escapeAttr(RSS_HREF_PATH)}" />
${renderVerificationMeta()}
<link rel="stylesheet" href="../styles.css" />
<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>
</head>
<body>
<main class="detail-main">
<article class="detail-article">
<h1 class="detail-title">${escapeHtml(title)}</h1>
<p class="meta">${SITE_NAME} | 发布日期：<time datetime="${escapeAttr(currentDate)}">${escapeHtml(currentDate)}</time> | 文章日期：<time datetime="${escapeAttr(date)}">${escapeHtml(date)}</time> | 来源：${escapeHtml(source)}</p>
${heroImageHtml}
<nav aria-label="目录">
<h2>目录</h2>
<ul>
${tocItems}
</ul>
</nav>
<p class="detail-intro">${escapeHtml(content.intro || summary)}</p>
${bodyHtml}
<section>
<h2 id="sources">信息来源</h2>
<ul>
${sourcesHtml}
</ul>
</section>
${renderSubscribeCta()}
${renderTrustLinks()}
</article>
</main>
</body>
</html>
`;

    const filePath = path.join(OUTPUT_DIR, `${slug}.html`);
    fs.writeFileSync(filePath, html, "utf8");

    articleRecords.push({
      slug,
      relPath: relHrefPath,
      absUrl,
      title,
      summary,
      source,
      date,
      sectionId,
      sectionTitle,
    });

    sectionRecord.items.push({
      title,
      summary,
      source,
      date,
      relPath: relHrefPath,
    });
  });
}

articleRecords.sort((a, b) => b.date.localeCompare(a.date));

for (const sectionRecord of sectionRecords) {
  sectionRecord.items.sort((a, b) => b.date.localeCompare(a.date));
  const listHtml = sectionRecord.items
    .map(
      (item) => `<li>
<article>
<h2><a href="${escapeAttr(item.relPath)}">${escapeHtml(item.title)}</a></h2>
<p class="meta">发布日期：<time datetime="${escapeAttr(item.date)}">${escapeHtml(item.date)}</time> | 来源：${escapeHtml(item.source)}</p>
<p class="summary">${escapeHtml(item.summary)}</p>
</article>
</li>`,
    )
    .join("\n");

  const sectionPageHtml = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(sectionRecord.title)} | ${SITE_NAME}</title>
<meta name="description" content="${escapeAttr(`${SITE_NAME}${sectionRecord.title}栏目`)}" />
<meta name="robots" content="index,follow,max-image-preview:large" />
<link rel="canonical" href="${escapeAttr(sectionRecord.absUrl)}" />
<link rel="alternate" type="application/rss+xml" title="${SITE_NAME} RSS" href="${escapeAttr(RSS_HREF_PATH)}" />
${renderVerificationMeta()}
<link rel="stylesheet" href="../styles.css" />
</head>
<body>
<main class="detail-main">
<article class="detail-article">
<h1 class="detail-title">${escapeHtml(sectionRecord.title)}</h1>
<p class="meta">${SITE_NAME} | 页面日期：<time datetime="${escapeAttr(currentDate)}">${escapeHtml(currentDate)}</time></p>
<ul class="story-list">
${listHtml}
</ul>
${renderSubscribeCta()}
${renderTrustLinks()}
</article>
</main>
</body>
</html>
`;

  fs.writeFileSync(path.join(SECTION_DIR, `${sectionRecord.id}.html`), sectionPageHtml, "utf8");
}

const trustPageRecords = TRUST_PAGES.map((page) => {
  const pagePath = `/${page.filename}`;
  const absUrl = `${SITE_URL}${pagePath}`;
  const sectionsHtml = page.sections
    .map(
      (section) => `<section class="detail-block">
<h2 class="detail-subtitle">${escapeHtml(section.heading)}</h2>
${section.paragraphs.map((paragraph) => `<p class="detail-body">${escapeHtml(paragraph)}</p>`).join("\n")}
</section>`,
    )
    .join("\n");
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    inLanguage: "zh-CN",
    url: absUrl,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(page.title)} | ${SITE_NAME}</title>
<meta name="description" content="${escapeAttr(page.description)}" />
<meta name="robots" content="index,follow,max-image-preview:large" />
<link rel="canonical" href="${escapeAttr(absUrl)}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${escapeAttr(page.title)}" />
<meta property="og:description" content="${escapeAttr(page.description)}" />
<meta property="og:url" content="${escapeAttr(absUrl)}" />
<meta property="og:site_name" content="${SITE_NAME}" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${escapeAttr(page.title)}" />
<meta name="twitter:description" content="${escapeAttr(page.description)}" />
<link rel="alternate" type="application/rss+xml" title="${SITE_NAME} RSS" href="${escapeAttr(RSS_HREF_PATH)}" />
${renderVerificationMeta()}
<link rel="stylesheet" href="./styles.css" />
<script type="application/ld+json">${JSON.stringify(webPageJsonLd)}</script>
</head>
<body>
<main class="detail-main">
<article class="detail-article">
<h1 class="detail-title">${escapeHtml(page.title)}</h1>
<p class="meta">${SITE_NAME} | 页面日期：<time datetime="${escapeAttr(currentDate)}">${escapeHtml(currentDate)}</time></p>
${sectionsHtml}
${renderSubscribeCta()}
${renderTrustLinks()}
</article>
</main>
</body>
</html>
`;

  fs.writeFileSync(path.join(ROOT_DIR, page.filename), html, "utf8");
  return {
    loc: absUrl,
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.7",
  };
});

const sitemapEntries = [
  {
    loc: `${SITE_URL}/`,
    lastmod: currentDate,
    changefreq: "daily",
    priority: "1.0",
  },
  ...sectionRecords.map((record) => ({
    loc: record.absUrl,
    lastmod: currentDate,
    changefreq: "daily",
    priority: "0.9",
  })),
  ...trustPageRecords,
  ...articleRecords.map((record) => ({
    loc: record.absUrl,
    lastmod: record.date,
    changefreq: "weekly",
    priority: "0.8",
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>\n    <loc>${escapeHtml(entry.loc)}</loc>\n    <lastmod>${escapeHtml(entry.lastmod)}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT_DIR, "sitemap.xml"), sitemapXml, "utf8");

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${escapeHtml(SITE_NAME)}</title>
<link>${escapeHtml(`${SITE_URL}/`)}</link>
<description>${escapeHtml("每日更新 AI新闻、AI使用教程、开源项目。")}</description>
<language>zh-CN</language>
<lastBuildDate>${escapeHtml(now.toUTCString())}</lastBuildDate>
${articleRecords
  .map((record) => {
    const description = record.summary || `${record.sectionTitle}｜${SITE_NAME}`;
    const pubDate = new Date(`${record.date}T09:00:00+08:00`);
    const pubDateText = Number.isNaN(pubDate.getTime()) ? now.toUTCString() : pubDate.toUTCString();
    return `<item>
<title>${escapeHtml(record.title)}</title>
<link>${escapeHtml(record.absUrl)}</link>
<guid isPermaLink="true">${escapeHtml(record.absUrl)}</guid>
<description>${escapeHtml(description)}</description>
<pubDate>${escapeHtml(pubDateText)}</pubDate>
<category>${escapeHtml(record.sectionTitle)}</category>
</item>`;
  })
  .join("\n")}
</channel>
</rss>
`;

fs.writeFileSync(path.join(ROOT_DIR, "rss.xml"), rssXml, "utf8");

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(ROOT_DIR, "robots.txt"), robotsTxt, "utf8");

console.log(
  `Generated ${articleRecords.length} article pages, ${sectionRecords.length} section pages, ${trustPageRecords.length} trust pages, sitemap.xml, rss.xml, and robots.txt`,
);
if (heroImageWarnings.length > 0) {
  console.warn(
    `[workflow-check] 缺少头图(hero_image)的文章（日期>=${HERO_IMAGE_REQUIRED_FROM}）：${heroImageWarnings.join(", ")}`,
  );
}
if (sourceWarnings.length > 0) {
  console.warn(`[workflow-check] 来源可核验性提醒：${sourceWarnings.join(", ")}`);
}
