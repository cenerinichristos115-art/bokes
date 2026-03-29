// Default draft template:
// See ./DEFAULT_DRAFT_TEMPLATE.md
// Required article fields:
// ---
// title: 文章标题（20字以内，简洁有力）
// category: AI新闻 | AI使用教程 | 开源项目
// date: YYYY-MM-DD
// source: 来源名称（可写多来源缩写，如 36氪 / 量子位 / 21经济网）
// source_url: 主来源链接（正文中再列完整来源清单）
// summary: 摘要（50字以内，必须包含事实结论，不写空泛判断）
// featured: true | false （是否作为 MAIN STORY 主推）
// ---
// Title rule: prefer latest project-specific action headline; avoid generic "一周全纪录" default style.
// Content rule: not title aggregation only.
// Each section must include verified facts (time, actor, action, numbers/metrics).
// Must include: source-content extraction + cross-source synthesis + objective analysis.
// Body style: de-source narrative. Do not lead with media-attribution phrases; put links in final sources section.
// Pre-publish check: >=2 facts per section, include consensus+uncertainty+why-it-matters, and keep full clickable links in final sources list.
// Trend words require dated timeline points; conclusions must follow explicit facts, and all selected sources must be substantively used.
// Writing style: vary sentence patterns and news leads; avoid repetitive opener templates.
const sections = [
  {
    id: "ai-news",
    title: "AI新闻",
    items: [
      {
        title: "Claude Code自动模式进入预览",
        category: "AI新闻",
        date: "2026-03-29",
        summary: "3月24-25日两次更新连发，Claude Code从辅助写码转向连续执行任务。",
        featured: true,
        content: {
          intro:
            "过去一周（2026 年 3 月 22 日至 3 月 29 日），Claude Code 的关键变化集中在两天：3 月 24 日打通电脑接管与跨端派单，3 月 25 日自动模式进入研究预览。两次更新叠加后，产品重心开始从“辅助写代码”转向“持续完成任务”。",
          blocks: [
            {
              heading: "目录",
              paragraphs: [
                "一、自动模式上线：从“辅助写代码”走向“可连续执行”",
                "二、桌面接管与任务派单打通：执行链路开始闭环",
                "三、落地边界与企业采用门槛：能力进步与风险并存",
              ],
            },
            {
              heading: "一、自动模式上线：从“辅助写代码”走向“可连续执行”",
              paragraphs: [
                "3 月 25 日，Claude Code 的 auto mode 进入研究预览，首批面向团队计划用户开放。系统在安全层审查后可自动处理低风险步骤，减少逐步确认造成的流程中断。",
                "这次变化把交互形态从“单轮指令”推进到“多步执行”：需求拆解、改写、运行、回传可以连续发生。对开发者来说，节省的不只是输入时间，更是等待与反复确认的时间。",
                "与此同时，权限边界仍是硬前提。自动执行并非全放开机制，而是按风险等级逐层放权，重点目标是提高吞吐而不是牺牲可控性。",
              ],
            },
            {
              heading: "二、桌面接管与任务派单打通：执行链路开始闭环",
              paragraphs: [
                "时间回到 3 月 24 日，电脑接管能力与 Dispatch 派单机制被放进同一工作流：任务可在手机端发起，由桌面端继续执行，再回传进度和结果。",
                "执行路径因此形成闭环。过去分散在多个工具里的“下发指令、操作界面、调用工具、回传结果”被串成一条链，对长时任务和跨地协作更友好。",
                "当前可用范围也很明确：优先面向 Pro/Max 与 macOS 桌面端，Windows 版本仍在后续计划内。平台覆盖尚未齐平，是这阶段最直观的限制条件。",
              ],
            },
            {
              heading: "三、落地边界与企业采用门槛：能力进步与风险并存",
              paragraphs: [
                "两次更新共同指向一个变化：评价标准正在从“生成质量”转向“执行可靠性”。企业看重的不再只是会不会写代码，而是能否稳定跑完整条任务链。",
                "现实门槛同样清晰。复杂网页与多步骤任务中，速度波动和误操作仍可能出现；一旦缺少细粒度权限、异常回滚和过程审计，自动模式的效率收益会被故障成本反噬。",
                "因此，短期竞争焦点不在参数，而在工程化能力：谁能把自动执行做得更稳、更可控，谁更可能率先进入企业的长期生产流程。",
              ],
            },
          ],
        },
        references: [
          {
            label: "新浪网（网易科技，2026-03-25）",
            url: "https://k.sina.com.cn/article_5953741034_162dee0ea06703dwdo.html?from=tech",
          },
          {
            label: "TechWeb（新浪科技转载，2026-03-24）",
            url: "https://finance.sina.com.cn/tech/roll/2026-03-24/doc-inhsarqu1746363.shtml",
          },
          {
            label: "凤凰网科技（智东西，2026-03-24）",
            url: "https://tech.ifeng.com/c/8rktLuQIXIl",
          },
        ],
        source: "新浪网（网易科技）/ TechWeb / 凤凰网智东西",
        source_url: "https://k.sina.com.cn/article_5953741034_162dee0ea06703dwdo.html?from=tech",
      },
      {
        title: "AI智能体进驻一线业务",
        category: "AI新闻",
        date: "2026-03-26",
        summary: "客服与销售开始规模化接入AI智能体，企业把可回滚、可审计和监控能力放在首位。",
        featured: false,
        content: {
          intro:
            "本周多家企业在客服和销售场景上线了面向真实用户的 AI 智能体，不再停留在内部演示。项目负责人普遍把“可回滚、可审计、可监控”作为第一优先级，而不是单次回答的惊艳程度。",
          blocks: [
            {
              heading: "部署方式",
              paragraphs: [
                "在落地方式上，团队通常采用“规则系统 + 模型决策”的双轨结构：高风险动作由规则层兜底，模型负责检索、归纳和对话。这样可以在保证体验的同时，把误操作风险控制在可接受范围内。",
              ],
            },
            {
              heading: "关键结论",
              paragraphs: [
                "企业侧反馈显示，真正影响效果的并不是模型参数规模，而是业务知识接入质量、权限边界定义和异常处理流程。能够把这些基础能力跑通的团队，才更容易实现稳定的成本下降和效率提升。",
              ],
            },
          ],
        },
        source: "Signal Fold 编辑部",
        source_url: "https://example.com/ai-news-1",
      },
      {
        title: "推理算力成采购新焦点",
        category: "AI新闻",
        date: "2026-03-24",
        summary: "训练扩容放缓，预算转向推理效率与单位成本，基础设施进入长期运营比拼。",
        featured: false,
        content: {
          intro:
            "今年一季度，多家云厂商和大型应用公司把新增预算从“训练集群扩容”转向“推理集群优化”。核心目标是降低单位请求成本，并提升高峰时段的响应稳定性。",
          blocks: [
            {
              heading: "采购指标变化",
              paragraphs: [
                "采购决策也更加偏向长期运营指标，例如每千次请求成本、缓存命中率、模型切换时延和灰度发布成功率。相比过去只看峰值性能，现在更强调全链路可观测和可运维性。",
              ],
            },
            {
              heading: "行业影响",
              paragraphs: [
                "行业分析认为，这种变化意味着 AI 基础设施进入“运营效率竞争”阶段。能在推理侧实现更高吞吐和更低故障率的团队，将在商业化落地上获得更明显优势。",
              ],
            },
          ],
        },
        source: "Infra Watch",
        source_url: "https://example.com/ai-news-2",
      },
      {
        title: "开源模型加速应用普及",
        category: "AI新闻",
        date: "2026-03-22",
        summary: "模型可得性提升后，竞争重心转向流程设计、数据治理与场景化体验。",
        featured: false,
        content: {
          intro:
            "开源模型社区在最近几个月保持高频更新，围绕长上下文、工具调用和指令跟随能力持续改进。对中小团队而言，获得“够用且可定制”的模型方案变得更容易。",
          blocks: [
            {
              heading: "竞争重心迁移",
              paragraphs: [
                "随着模型可得性提升，产品差异化不再主要来自底层模型本身，而是来自流程设计、数据治理和交互体验。谁能把业务知识沉淀成稳定流程，谁就更容易形成壁垒。",
              ],
            },
            {
              heading: "实践趋势",
              paragraphs: [
                "不少团队已从“追最新模型”转为“按任务选模型”，在成本、速度和效果之间做组合优化。这种工程化思路正在成为行业默认做法。",
              ],
            },
          ],
        },
        source: "Tech Field Notes",
        source_url: "https://example.com/ai-news-3",
      },
    ],
  },
  {
    id: "ai-guide",
    title: "AI使用教程",
    items: [
      {
        title: "个人AI新闻流实战指南",
        category: "AI使用教程",
        date: "2026-03-25",
        summary: "从信息源分层、提示词模板到发布复核，搭建可持续的个人内容生产流程。",
        featured: false,
        content: {
          intro:
            "第一步先明确信息源边界，把资讯渠道分成“官方公告、行业媒体、社区讨论”三类，并为每类设置固定采集时间。这样可以减少无效浏览，保证输入质量。",
          blocks: [
            {
              heading: "模板固化",
              paragraphs: [
                "第二步是建立统一提示词模板，要求模型输出来源、关键结论、潜在偏差和可验证点。模板固定后，内容生产会从“临场发挥”变成“流程执行”。",
              ],
            },
            {
              heading: "发布前复核",
              paragraphs: [
                "第三步加入人工复核清单，包括事实核对、措辞风险和发布时间窗口。通过“机器初稿 + 人工校对”的模式，个人创作者也能稳定产出高质量内容。",
              ],
            },
          ],
        },
        source: "Boke Lab",
        source_url: "https://example.com/ai-guide-1",
      },
      {
        title: "会议纪要自动化落地法",
        category: "AI使用教程",
        date: "2026-03-23",
        summary: "用结构化提示词统一纪要格式，自动提取负责人和截止时间，提升协作追踪效率。",
        featured: false,
        content: {
          intro:
            "会议纪要场景的关键不是“写得像人”，而是“结构一致、可追踪”。建议固定输出为：结论、行动项、负责人、截止时间、阻塞风险五个模块。",
          blocks: [
            {
              heading: "产出流程",
              paragraphs: [
                "在实践中，可先让模型基于录音转写生成初稿，再由主持人快速补充上下文和优先级。这样既能减少整理时间，也能避免信息丢失。",
              ],
            },
            {
              heading: "跟踪机制",
              paragraphs: [
                "行动项跟踪建议接入表格或任务系统，按周回顾完成率与延期原因。持续复盘后，团队会逐步形成更清晰的协作节奏。",
              ],
            },
          ],
        },
        source: "Workflow Journal",
        source_url: "https://example.com/ai-guide-2",
      },
      {
        title: "高质量提示词五步法",
        category: "AI使用教程",
        date: "2026-03-21",
        summary: "明确目标、补齐上下文、约束输出并设验收标准，显著降低无效生成与返工。",
        featured: false,
        content: {
          intro:
            "第一步先写清任务目标和使用场景，避免把多个目标塞进同一条提示词。目标越具体，模型输出越稳定。",
          blocks: [
            {
              heading: "边界约束",
              paragraphs: [
                "第二步提供必要上下文与边界条件，例如受众、语气、禁用内容和引用要求。边界清楚后，返工率会明显下降。",
              ],
            },
            {
              heading: "验收标准",
              paragraphs: [
                "第三步定义输出结构和验收标准，比如字段顺序、字数范围和质量检查项。最后通过小样本迭代持续修正，形成可复用模板库。",
              ],
            },
          ],
        },
        source: "Prompt Practice",
        source_url: "https://example.com/ai-guide-3",
      },
    ],
  },
  {
    id: "open-source",
    title: "开源项目",
    items: [
      {
        title: "本地RAG最小模板发布",
        category: "开源项目",
        date: "2026-03-26",
        summary: "开箱覆盖切分、向量检索与问答接口，适合作为内部知识库原型起点。",
        featured: false,
        content: {
          intro:
            "该模板聚焦“本地可跑通”与“依赖最少”，默认提供文档导入、切分、向量化、检索与问答五个基础模块，适合作为内部知识库原型的起点。",
          blocks: [
            {
              heading: "可替换设计",
              paragraphs: [
                "项目结构按职责拆分，便于替换组件：你可以独立更换嵌入模型、向量数据库或重排策略，而不需要重写整条链路。",
              ],
            },
            {
              heading: "落地建议",
              paragraphs: [
                "维护者建议先用小规模文档验证召回质量，再逐步扩大数据量并加入监控指标，这样能更快定位性能瓶颈和答案偏差。",
              ],
            },
          ],
        },
        source: "GitHub",
        source_url: "https://example.com/open-source-1",
      },
      {
        title: "AI代理编排脚手架开源",
        category: "开源项目",
        date: "2026-03-24",
        summary: "支持任务拆分、状态追踪与失败重试，便于快速搭建可回放的自动化流程。",
        featured: false,
        content: {
          intro:
            "这个脚手架提供任务分解、状态机调度和失败重试机制，适合搭建“多步骤、可回放”的代理流程。开发者可以清晰看到每一步的输入、输出和耗时。",
          blocks: [
            {
              heading: "风险控制",
              paragraphs: [
                "框架内置了人工接管节点，当模型置信度不足或触发高风险动作时，流程会自动转入人工审批，降低自动化系统的事故概率。",
              ],
            },
            {
              heading: "实施路径",
              paragraphs: [
                "实际使用中，团队通常先从 2 到 3 步的简单流程开始，跑通后再增加分支和工具调用，避免一次性把系统复杂度拉满。",
              ],
            },
          ],
        },
        source: "GitHub",
        source_url: "https://example.com/open-source-2",
      },
      {
        title: "中文提示词评测集上线",
        category: "开源项目",
        date: "2026-03-20",
        summary: "覆盖摘要改写与问答任务，帮助团队评估模板稳定性并沉淀可复用资产。",
        featured: false,
        content: {
          intro:
            "该评测集覆盖摘要、改写、信息抽取和问答等常见任务，重点关注中文语境下的稳定性差异。每个样本都提供了可复现的评分维度和参考输出。",
          blocks: [
            {
              heading: "评测维度",
              paragraphs: [
                "相比只看单次效果，这套评测更强调“多轮、多模型、多温度”的一致性表现，有助于识别提示词在真实生产环境中的波动风险。",
              ],
            },
            {
              heading: "团队价值",
              paragraphs: [
                "对于内容团队和应用团队来说，这类基准可以帮助快速筛选可复用模板，把经验从个人技巧沉淀为团队资产。",
              ],
            },
          ],
        },
        source: "Open Dataset Hub",
        source_url: "https://example.com/open-source-3",
      },
    ],
  },
];

const sectionLabels = {
  "ai-news": "AI NEWS",
  "ai-guide": "AI GUIDES",
  "open-source": "OPEN SOURCE",
};

const allowedCategories = ["AI新闻", "AI使用教程", "开源项目"];

const today = new Date();
const todayText = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, "0")}-${`${today.getDate()}`.padStart(2, "0")}`;

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

const sanitizeUrl = (value) => {
  if (typeof value !== "string") {
    return "#";
  }
  try {
    const parsed = new URL(value, window.location.origin);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.href;
    }
  } catch {
    return "#";
  }
  return "#";
};

const sanitizeSectionId = (value = "") => {
  const normalized = String(value).toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  return normalized || "section";
};

const formatDate = (value) => {
  if (typeof value !== "string") {
    return todayText;
  }
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return todayText;
  }
  return `${match[1]}-${match[2]}-${match[3]}`;
};

const normalizeCategory = (value, fallback = "") => {
  const category = typeof value === "string" ? value.trim() : "";
  if (allowedCategories.includes(category)) {
    return category;
  }
  const fallbackCategory = typeof fallback === "string" ? fallback.trim() : "";
  if (allowedCategories.includes(fallbackCategory)) {
    return fallbackCategory;
  }
  return "AI新闻";
};

const normalizeContent = (item = {}) => {
  if (item.content && typeof item.content === "object" && !Array.isArray(item.content)) {
    const intro =
      typeof item.content.intro === "string" && item.content.intro.trim().length > 0
        ? item.content.intro
        : item.summary ?? "暂无正文。";

    const blocks = Array.isArray(item.content.blocks)
      ? item.content.blocks
          .map((block) => {
            if (!block || typeof block !== "object") {
              return null;
            }
            const heading =
              typeof block.heading === "string" && block.heading.trim().length > 0
                ? block.heading
                : "小标题";
            const paragraphs = Array.isArray(block.paragraphs)
              ? block.paragraphs.filter((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0)
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

  if (Array.isArray(item.content) && item.content.length > 0) {
    const paragraphs = item.content.filter((paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0);
    const [intro, ...rest] = paragraphs;
    return {
      intro: intro ?? item.summary ?? "暂无正文。",
      blocks: rest.length > 0 ? [{ heading: "正文", paragraphs: rest }] : [],
    };
  }

  return { intro: item.summary ?? "暂无正文。", blocks: [] };
};

const sanitizeItem = (item = {}, fallbackCategory = "") => {
  const normalizedContent = normalizeContent(item);
  const references = Array.isArray(item.references)
    ? item.references
        .map((reference) => {
          if (!reference || typeof reference !== "object") {
            return null;
          }
          const label =
            typeof reference.label === "string" && reference.label.trim().length > 0 ? reference.label : "来源链接";
          const url = sanitizeUrl(reference.url);
          if (url === "#") {
            return null;
          }
          return {
            label: escapeHtml(label),
            url,
          };
        })
        .filter(Boolean)
    : [];

  return {
    title: escapeHtml(item.title ?? "暂无标题"),
    category: escapeHtml(normalizeCategory(item.category, fallbackCategory)),
    date: formatDate(item.date),
    summary: escapeHtml(item.summary ?? ""),
    featured: item.featured === true,
    content: {
      intro: escapeHtml(normalizedContent.intro),
      blocks: normalizedContent.blocks.map((block) => ({
        heading: escapeHtml(block.heading),
        paragraphs: block.paragraphs.map((paragraph) => escapeHtml(paragraph)),
      })),
    },
    source: escapeHtml(item.source ?? "未知来源"),
    source_url: sanitizeUrl(item.source_url ?? item.url),
    references,
  };
};

const emptyItem = {
  title: "暂无内容",
  category: "AI新闻",
  date: todayText,
  summary: "该栏目暂未更新。",
  featured: false,
  content: {
    intro: "该栏目暂未更新。",
    blocks: [],
  },
  source: "寂川日报",
  source_url: "#",
  references: [],
};

const getSectionItems = (section) => (section && Array.isArray(section.items) ? section.items : []);

const getFrontLeadData = (section) => {
  const items = getSectionItems(section);
  const firstItem = items[0];
  if (!section || !firstItem) {
    return {
      href: "#",
      item: sanitizeItem(emptyItem, section?.title ?? ""),
    };
  }
  return {
    href: buildArticleHref(section.id, 0, firstItem),
    item: sanitizeItem(firstItem, section.title),
  };
};

const findMainStoryRecord = () => {
  let fallback = null;
  for (const section of sections) {
    const items = getSectionItems(section);
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      if (!item) {
        continue;
      }
      if (!fallback) {
        fallback = { section, item, index };
      }
      if (item.featured === true) {
        return { section, item, index };
      }
    }
  }
  return fallback;
};

const createSlugSeed = (value = "") => {
  let hash = 0;
  for (const char of String(value)) {
    hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
  }
  return hash.toString(36);
};

const slugifyTitle = (value = "") => {
  const normalized = String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "article";
};

const buildArticleSlug = (sectionId, index, item = {}) => {
  const sectionToken = sanitizeSectionId(sectionId);
  const dateToken = formatDate(item.date).replace(/-/g, "");
  const titleToken = slugifyTitle(item.title).slice(0, 40);
  const seed = createSlugSeed(`${sectionToken}-${dateToken}-${index}-${item.title ?? ""}`);
  return `${sectionToken}-${dateToken}-${index + 1}-${titleToken}-${seed}`;
};

const buildArticleHref = (sectionId, index, item = {}) => `/articles/${buildArticleSlug(sectionId, index, item)}.html`;

const buildDetailHash = (sectionId, index) => `#detail-${encodeURIComponent(sectionId)}-${index}`;

const parseDetailHash = (hash) => {
  if (typeof hash !== "string") {
    return null;
  }
  const match = hash.match(/^#detail-(.+)-(\d+)$/);
  if (!match) {
    return null;
  }
  try {
    const sectionId = decodeURIComponent(match[1]);
    const index = Number.parseInt(match[2], 10);
    if (!Number.isInteger(index) || index < 0) {
      return null;
    }
    return { sectionId, index };
  } catch {
    return null;
  }
};

const findArticleByRoute = (route) => {
  if (!route) {
    return null;
  }
  const section = sections.find((entry) => entry.id === route.sectionId);
  if (!section) {
    return null;
  }
  const items = getSectionItems(section);
  const item = items[route.index];
  if (!item) {
    return null;
  }
  return { section, item, index: route.index };
};

const renderNav = () => {
  const items = sections
    .map((section) => {
      const sectionId = sanitizeSectionId(section.id);
      const sectionTitle = escapeHtml(section.title ?? "未命名栏目");
      return `<li><a href="/sections/${sectionId}.html">${sectionTitle}</a></li>`;
    })
    .join("");
  return `<nav class="top-nav" aria-label="栏目导航"><ul>${items}</ul></nav>`;
};

const renderLead = (sectionId, sectionCategory, item, index) => {
  const safeItem = sanitizeItem(item, sectionCategory);
  const detailHref = buildArticleHref(sectionId, index, item);
  return `
    <article class="lead-story">
      <h3><a href="${detailHref}">${safeItem.title}</a></h3>
      <p class="meta">发布日期：<time datetime="${safeItem.date}">${safeItem.date}</time> ｜ 来源：${safeItem.source}</p>
      <p class="summary">${safeItem.summary}</p>
    </article>
  `;
};

const renderList = (sectionId, sectionCategory, items, startIndex = 0) => {
  const html = items
    .map((item, idx) => {
      const safeItem = sanitizeItem(item, sectionCategory);
      const detailHref = buildArticleHref(sectionId, startIndex + idx, item);
      return `
        <li>
          <article>
            <h4><a href="${detailHref}">${safeItem.title}</a></h4>
            <p class="meta">发布日期：<time datetime="${safeItem.date}">${safeItem.date}</time> ｜ 来源：${safeItem.source}</p>
            <p class="summary">${safeItem.summary}</p>
          </article>
        </li>
      `;
    })
    .join("");

  return `<ul class="story-list">${html}</ul>`;
};

const renderSection = (section) => {
  const sectionId = sanitizeSectionId(section.id);
  const sectionTitle = escapeHtml(section.title ?? "未命名栏目");
  const items = getSectionItems(section);
  const [lead, ...rest] = items;
  const sectionLabel = escapeHtml(sectionLabels[section.id] || "SECTION");
  return `
    <section class="news-section" id="${sectionId}" aria-labelledby="title-${sectionId}">
      <header class="section-head">
        <p class="section-label">${sectionLabel}</p>
        <h2 id="title-${sectionId}">${sectionTitle}</h2>
      </header>
      <div class="section-grid">
        ${lead ? `${renderLead(section.id, section.title, lead, 0)}${renderList(section.id, section.title, rest, 1)}` : `<p class="empty-state">本栏目暂时没有内容。</p>`}
      </div>
    </section>
  `;
};

const renderFrontPage = () => {
  const guideLeadData = getFrontLeadData(sections.find((section) => section.id === "ai-guide"));
  const openLeadData = getFrontLeadData(sections.find((section) => section.id === "open-source"));
  const mainStory = findMainStoryRecord();
  const mainStoryData = mainStory
    ? {
        href: buildArticleHref(mainStory.section.id, mainStory.index, mainStory.item),
        item: sanitizeItem(mainStory.item, mainStory.section.title),
      }
    : {
        href: "#",
        item: sanitizeItem(emptyItem),
      };

  return `
    <section class="front-page" aria-labelledby="front-page-title">
      <h2 id="front-page-title" class="visually-hidden">头版要闻</h2>
      <div class="front-grid">
        <aside class="front-col front-col-left">
          <p class="front-kicker">Left Column</p>
          <h3><a href="${guideLeadData.href}">${guideLeadData.item.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${guideLeadData.item.date}">${guideLeadData.item.date}</time> ｜ 来源：${guideLeadData.item.source}</p>
          <p class="summary">${guideLeadData.item.summary}</p>
        </aside>
        <article class="front-main">
          <p class="front-kicker">Main Story</p>
          <h3><a href="${mainStoryData.href}">${mainStoryData.item.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${mainStoryData.item.date}">${mainStoryData.item.date}</time> ｜ 来源：${mainStoryData.item.source}</p>
          <p class="summary">${mainStoryData.item.summary}</p>
        </article>
        <aside class="front-col front-col-right">
          <p class="front-kicker">Right Column</p>
          <h3><a href="${openLeadData.href}">${openLeadData.item.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${openLeadData.item.date}">${openLeadData.item.date}</time> ｜ 来源：${openLeadData.item.source}</p>
          <p class="summary">${openLeadData.item.summary}</p>
        </aside>
      </div>
    </section>
  `;
};

const renderHomePage = () => {
  const sectionHtml = sections.map(renderSection).join("");
  return `
    <header class="masthead">
      <p class="edition">JICHUAN DAILY</p>
      <h1>寂川日报</h1>
      <p class="deck">AI news, practical guides, and open-source intelligence.</p>
      <p class="issue-meta">${todayText} ｜ WSJ Direction</p>
      ${renderNav()}
    </header>
    <main>
      ${renderFrontPage()}
      ${sectionHtml}
    </main>
    <footer>
      <p>改版说明：保留三栏目，采用更接近 WSJ 的极简新闻排版。</p>
    </footer>
  `;
};

const renderDetailNotFound = () => `
  <main class="detail-main">
    <article class="detail-article">
      <h2 class="detail-title">内容不存在</h2>
      <p class="summary">这条详情可能已被删除，或链接地址不正确。</p>
    </article>
  </main>
`;

const renderDetailPage = (record) => {
  if (!record) {
    return renderDetailNotFound();
  }
  const safeItem = sanitizeItem(record.item, record.section.title);
  const sourceLink =
    safeItem.source_url === "#"
      ? ""
      : `<p class="detail-source-link"><a href="${safeItem.source_url}" target="_blank" rel="noopener noreferrer">查看原始来源</a></p>`;
  const sourcesListHtml =
    safeItem.references.length > 0
      ? `
        <section class="detail-block">
          <h3 class="detail-subtitle">信息来源</h3>
          <ul class="detail-sources">
            ${safeItem.references
              .map((reference) => `<li><a href="${reference.url}" target="_blank" rel="noopener noreferrer">${reference.label}</a></li>`)
              .join("")}
          </ul>
        </section>
      `
      : "";
  const detailBlocksHtml = safeItem.content.blocks
    .map(
      (block) => `
        <section class="detail-block">
          <h3 class="detail-subtitle">${block.heading}</h3>
          ${block.paragraphs.map((paragraph) => `<p class="detail-body">${paragraph}</p>`).join("")}
        </section>
      `,
    )
    .join("");

  return `
    <main class="detail-main">
      <article class="detail-article">
        <h2 class="detail-title">${safeItem.title}</h2>
        <p class="meta">分类：${safeItem.category} ｜ 发布日期：<time datetime="${safeItem.date}">${safeItem.date}</time> ｜ 来源：${safeItem.source}</p>
        <p class="detail-intro">${safeItem.content.intro}</p>
        ${detailBlocksHtml}
        ${sourcesListHtml}
        ${sourceLink}
      </article>
    </main>
  `;
};

const renderApp = () => {
  const app = document.querySelector("#app");
  if (!app) {
    return;
  }

  const hash = window.location.hash || "";
  const detailRoute = parseDetailHash(hash);

  if (detailRoute) {
    app.innerHTML = renderDetailPage(findArticleByRoute(detailRoute));
    return;
  }

  app.innerHTML = renderHomePage();

  if (hash.startsWith("#") && hash.length > 1) {
    const targetId = hash.slice(1);
    if (!targetId.startsWith("detail-")) {
      const target = document.getElementById(targetId);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    sections,
    sectionLabels,
    sanitizeSectionId,
    formatDate,
    buildArticleSlug,
    todayText,
  };
}

if (typeof window !== "undefined") {
  window.addEventListener("hashchange", renderApp);
  renderApp();
}
