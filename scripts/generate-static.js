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
const OUTPUT_DIR = path.join(__dirname, "..", "articles");
const SECTION_DIR = path.join(__dirname, "..", "sections");
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

const now = new Date();
const currentDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(now);

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
<meta property="og:site_name" content="${SITE_NAME}" />
<meta property="article:published_time" content="${escapeAttr(date)}" />
<meta property="article:section" content="${escapeAttr(sectionTitle)}" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${escapeAttr(title)}" />
<meta name="twitter:description" content="${escapeAttr(summary || content.intro || `${SITE_NAME} AI新闻稿`)}" />
<link rel="stylesheet" href="../styles.css" />
<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>
</head>
<body>
<main class="detail-main">
<article class="detail-article">
<h1 class="detail-title">${escapeHtml(title)}</h1>
<p class="meta">${SITE_NAME} | 发布日期：<time datetime="${escapeAttr(currentDate)}">${escapeHtml(currentDate)}</time> | 文章日期：<time datetime="${escapeAttr(date)}">${escapeHtml(date)}</time> | 来源：${escapeHtml(source)}</p>
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
</article>
</main>
</body>
</html>
`;

  fs.writeFileSync(path.join(SECTION_DIR, `${sectionRecord.id}.html`), sectionPageHtml, "utf8");
}

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

fs.writeFileSync(path.join(__dirname, "..", "sitemap.xml"), sitemapXml, "utf8");

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, "..", "robots.txt"), robotsTxt, "utf8");

console.log(`Generated ${articleRecords.length} article pages, ${sectionRecords.length} section pages, sitemap.xml, and robots.txt`);
