const today = new Date();
const todayText = `${today.getFullYear()}-${`${today.getMonth() + 1}`.padStart(2, "0")}-${`${today.getDate()}`.padStart(2, "0")}`;

const featureArticle = {
  id: "china-ai-monthly",
  title: "中国AI月度快报：政策定调、产业扩容、算力升级",
  byline: `寂川日报 ｜ ${todayText}`,
  cover:
    "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80",
  coverAlt: "与人工智能计算相关的抽象光影画面",
  intro:
    "过去一个月（截至2026年3月28日），中国AI领域最关键的变化集中在政策框架、产业规模与基础设施三条主线。以下三条报道最具代表性。",
  chapters: [
    {
      id: "policy",
      title: "1) 政策层面：政府工作报告继续深化“人工智能+”",
      body: "3月5日，新华社快讯披露，2026年政府工作任务明确提出深化拓展“人工智能+”，并将智能终端、智能体推广、开源生态、智算集群与人工智能治理并列部署。3月13日，政府网发布政府工作报告全文信息，表明这一方向已进入年度政策执行框架。",
    },
    {
      id: "industry",
      title: "2) 产业层面：大模型供给能力继续上行",
      body: "3月3日《人民日报》报道指出，我国已成为发布大模型最多的国家。该信号意味着竞争焦点正在从“模型是否可用”转向“行业场景能否规模化落地”，企业端将更关注稳定交付、成本效率与行业适配。",
    },
    {
      id: "infra",
      title: "3) 基础设施层面：国产AI算力平台加速外溢",
      body: "3月2日，华为在MWC 2026发布面向智能时代的AI-Centric Network方案，并首次在中国以外展示其SuperPoD相关产品（含Atlas 950 SuperPoD）。这反映出国产AI基础设施正在从“国内可用”向“全球化方案输出”推进。",
    },
  ],
  sources: [
    {
      name: "中新网：政府工作报告提出深化拓展“人工智能+”（2026-03-05）",
      url: "https://www.chinanews.com.cn/gn/2026/03-05/10581348.shtml",
    },
    {
      name: "中国政府网英文站：China releases full text of government work report（2026-03-13）",
      url: "https://english.www.gov.cn/news/202603/13/content_WS69b4b144c6d00ca5f9a09dfd.html",
    },
    {
      name: "人民网/人民日报：我国成为发布大模型最多的国家（2026-03-03）",
      url: "https://cpc.people.com.cn/n1/2026/0303/c64387-40673540.html",
    },
    {
      name: "Huawei：Launches Enhanced AI-Centric Network Solutions at MWC 2026（2026-03-02）",
      url: "https://www.huawei.com/en/news/2026/3/mwc-ai-centric-network",
    },
  ],
};

const sections = [
  {
    id: "ai-news",
    title: "AI新闻",
    items: [
      {
        title: "专题：过去一个月中国AI三条重磅新闻",
        date: todayText,
        summary: "聚焦政策、产业、算力三条主线，正文含目录锚点与来源清单。",
        source: "寂川日报编辑部",
        url: "#china-ai-monthly",
      },
      {
        title: "快讯：政府工作报告提出促进智能终端和智能体加快推广",
        date: "2026-03-05",
        summary: "新华社快讯口径，明确“人工智能+”与智算基础设施等年度重点任务。",
        source: "中新网（据新华社）",
        url: "https://www.chinanews.com.cn/gn/2026/03-05/10581348.shtml",
      },
    ],
  },
  {
    id: "ai-guide",
    title: "AI使用教程",
    items: [
      {
        title: "Qwen 开源模型仓库与使用说明",
        date: "持续更新",
        summary: "适合快速了解中文场景模型的推理与部署入口。",
        source: "GitHub",
        url: "https://github.com/QwenLM/Qwen3",
      },
      {
        title: "vLLM 文档：高吞吐推理部署指南",
        date: "持续更新",
        summary: "面向服务化推理，覆盖离线/在线推理与并发优化。",
        source: "vLLM 官方文档",
        url: "https://docs.vllm.ai/en/latest/",
      },
    ],
  },
  {
    id: "open-source",
    title: "开源项目",
    items: [
      {
        title: "DeepSeek-R1",
        date: "持续更新",
        summary: "推理模型与技术报告，适合研究推理能力与蒸馏路线。",
        source: "GitHub",
        url: "https://github.com/deepseek-ai/DeepSeek-R1",
      },
      {
        title: "Ollama",
        date: "持续更新",
        summary: "本地运行大模型的主流开源工具，适合快速验证场景。",
        source: "GitHub",
        url: "https://github.com/ollama/ollama",
      },
    ],
  },
];

const sectionLabels = {
  "ai-news": "AI NEWS",
  "ai-guide": "AI GUIDES",
  "open-source": "OPEN SOURCE",
};

const renderNav = () => {
  const items = sections
    .map((section) => `<li><a href="#${section.id}">${section.title}</a></li>`)
    .join("");
  return `<nav class="top-nav" aria-label="栏目导航"><ul>${items}</ul></nav>`;
};

const renderFeature = () => {
  const toc = featureArticle.chapters
    .map((chapter) => `<li><a href="#${chapter.id}">${chapter.title}</a></li>`)
    .join("");

  const chapters = featureArticle.chapters
    .map(
      (chapter) => `
      <section class="feature-chapter" id="${chapter.id}">
        <h2>${chapter.title}</h2>
        <p>${chapter.body}</p>
      </section>
    `,
    )
    .join("");

  const sources = featureArticle.sources
    .map(
      (item) => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.name}</a></li>`,
    )
    .join("");

  return `
    <article class="feature" id="${featureArticle.id}">
      <header class="feature-head">
        <h2>${featureArticle.title}</h2>
        <p class="feature-byline">${featureArticle.byline}</p>
      </header>
      <img class="feature-cover" src="${featureArticle.cover}" alt="${featureArticle.coverAlt}" loading="lazy" />
      <p class="feature-intro">${featureArticle.intro}</p>
      <nav class="toc" aria-label="目录">
        <p>目录</p>
        <ul>${toc}</ul>
      </nav>
      ${chapters}
      <section class="sources">
        <h2>信息来源</h2>
        <ul>${sources}</ul>
      </section>
    </article>
  `;
};

const renderSection = (section) => {
  const list = section.items
    .map(
      (item) => `
      <li>
        <article>
          <h3><a href="${item.url}" ${item.url.startsWith("#") ? "" : 'target="_blank" rel="noreferrer"'}>${item.title}</a></h3>
          <p class="meta">发布时间：${item.date} ｜ 来源：${item.source}</p>
          <p class="summary">${item.summary}</p>
        </article>
      </li>
    `,
    )
    .join("");

  return `
    <section class="news-section" id="${section.id}" aria-labelledby="title-${section.id}">
      <header class="section-head">
        <p class="section-label">${sectionLabels[section.id]}</p>
        <h2 id="title-${section.id}">${section.title}</h2>
      </header>
      <ul class="story-list">${list}</ul>
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
      <p class="deck">China AI briefings, practical guides, and open-source signals.</p>
      <p class="issue-meta">${todayText} ｜ Newsroom Edition</p>
      ${renderNav()}
    </header>
    <main>
      ${renderFeature()}
      ${sectionHtml}
    </main>
    <footer>
      <p>内容原则：简洁、客观、可追溯。</p>
    </footer>
  `;
};

renderApp();
