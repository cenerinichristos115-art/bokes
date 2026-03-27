const sections = [
  {
    id: "ai-news",
    title: "AI新闻",
    items: [
      {
        title: "多家企业将 AI 智能体接入客服与销售流程",
        date: "2026-03-26",
        summary: "企业应用重点从演示效果转向稳定交付，围绕权限、追踪和回退机制展开部署。",
        source: "Signal Fold 编辑部",
        url: "https://example.com/ai-news-1",
      },
      {
        title: "推理算力采购增长，训练预算增速放缓",
        date: "2026-03-24",
        summary: "采购方更关注推理效率和单位成本，基础设施策略向长期运营倾斜。",
        source: "Infra Watch",
        url: "https://example.com/ai-news-2",
      },
      {
        title: "开源模型迭代加快，行业应用门槛继续下降",
        date: "2026-03-22",
        summary: "产品竞争重心从模型参数转向业务流程与场景化体验。",
        source: "Tech Field Notes",
        url: "https://example.com/ai-news-3",
      },
    ],
  },
  {
    id: "ai-guide",
    title: "AI使用教程",
    items: [
      {
        title: "教程：从零搭建个人 AI 新闻工作流",
        date: "2026-03-25",
        summary: "介绍选题收集、提示词模板、摘要复核和发布节奏，适合内容创作者。",
        source: "Boke Lab",
        url: "https://example.com/ai-guide-1",
      },
      {
        title: "教程：用 AI 做会议纪要与行动项跟踪",
        date: "2026-03-23",
        summary: "通过结构化提示词让纪要输出统一格式，并自动提取责任人与截止时间。",
        source: "Workflow Journal",
        url: "https://example.com/ai-guide-2",
      },
      {
        title: "教程：构建高质量提示词的 5 步法",
        date: "2026-03-21",
        summary: "从目标定义、上下文约束、输出结构到验收标准，降低无效生成。",
        source: "Prompt Practice",
        url: "https://example.com/ai-guide-3",
      },
    ],
  },
  {
    id: "open-source",
    title: "开源项目",
    items: [
      {
        title: "项目：轻量级本地 RAG 检索模板",
        date: "2026-03-26",
        summary: "提供最小可运行示例，包含文档切分、向量检索和问答接口。",
        source: "GitHub",
        url: "https://example.com/open-source-1",
      },
      {
        title: "项目：AI 代理任务编排脚手架",
        date: "2026-03-24",
        summary: "支持多步骤任务拆分与状态追踪，便于快速搭建自动化流程。",
        source: "GitHub",
        url: "https://example.com/open-source-2",
      },
      {
        title: "项目：中文提示词评测集",
        date: "2026-03-20",
        summary: "用于比较不同提示词模板在摘要、改写和问答任务下的稳定性。",
        source: "Open Dataset Hub",
        url: "https://example.com/open-source-3",
      },
    ],
  },
];

const sectionLabels = {
  "ai-news": "AI NEWS",
  "ai-guide": "AI GUIDES",
  "open-source": "OPEN SOURCE",
};

const formatDate = (value) => {
  const [y, m, d] = value.split("-");
  return `${y}-${m}-${d}`;
};

const today = new Date();
const todayText = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, "0")}-${`${today.getDate()}`.padStart(2, "0")}`;

const renderNav = () => {
  const items = sections
    .map((section) => `<li><a href="#${section.id}">${section.title}</a></li>`)
    .join("");
  return `<nav class="top-nav" aria-label="栏目导航"><ul>${items}</ul></nav>`;
};

const renderLead = (item) => {
  return `
    <article class="lead-story">
      <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h3>
      <p class="meta">发布日期：<time datetime="${item.date}">${formatDate(item.date)}</time> ｜ 来源：${item.source}</p>
      <p class="summary">${item.summary}</p>
    </article>
  `;
};

const renderList = (items) => {
  const html = items
    .map(
      (item) => `
        <li>
          <article>
            <h4><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h4>
            <p class="meta">发布日期：<time datetime="${item.date}">${formatDate(item.date)}</time> ｜ 来源：${item.source}</p>
            <p class="summary">${item.summary}</p>
          </article>
        </li>
      `,
    )
    .join("");

  return `<ul class="story-list">${html}</ul>`;
};

const renderSection = (section) => {
  const [lead, ...rest] = section.items;
  return `
    <section class="news-section" id="${section.id}" aria-labelledby="title-${section.id}">
      <header class="section-head">
        <p class="section-label">${sectionLabels[section.id]}</p>
        <h2 id="title-${section.id}">${section.title}</h2>
      </header>
      <div class="section-grid">
        ${renderLead(lead)}
        ${renderList(rest)}
      </div>
    </section>
  `;
};

const renderFrontPage = () => {
  const [aiLead, guideLead, openLead] = sections.map((section) => section.items[0]);
  return `
    <section class="front-page" aria-labelledby="front-page-title">
      <h2 id="front-page-title" class="visually-hidden">头版要闻</h2>
      <div class="front-grid">
        <aside class="front-col front-col-left">
          <p class="front-kicker">Left Column</p>
          <h3><a href="${guideLead.url}" target="_blank" rel="noreferrer">${guideLead.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${guideLead.date}">${formatDate(guideLead.date)}</time> ｜ 来源：${guideLead.source}</p>
          <p class="summary">${guideLead.summary}</p>
        </aside>
        <article class="front-main">
          <p class="front-kicker">Main Story</p>
          <h3><a href="${aiLead.url}" target="_blank" rel="noreferrer">${aiLead.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${aiLead.date}">${formatDate(aiLead.date)}</time> ｜ 来源：${aiLead.source}</p>
          <p class="summary">${aiLead.summary}</p>
        </article>
        <aside class="front-col front-col-right">
          <p class="front-kicker">Right Column</p>
          <h3><a href="${openLead.url}" target="_blank" rel="noreferrer">${openLead.title}</a></h3>
          <p class="meta">发布日期：<time datetime="${openLead.date}">${formatDate(openLead.date)}</time> ｜ 来源：${openLead.source}</p>
          <p class="summary">${openLead.summary}</p>
        </aside>
      </div>
    </section>
  `;
};

const renderApp = () => {
  const app = document.querySelector("#app");
  const sectionHtml = sections.map(renderSection).join("");

  app.innerHTML = `
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

renderApp();
