# Default Draft Template

## Goal
Produce compact, factual Chinese AI news drafts that synthesize source content, not just headline aggregation.

## Source Strategy (default)
1. Prioritize high-quality active Chinese sources: `36氪` / `量子位` / `21经济网` / `知乎`.
2. If fewer than 3 qualified items, supplement with: `IT之家` / `界面` / `澎湃` / `财联社` / `新浪科技`.
3. Cross-check key facts with official pages when available (company blog, release notes, docs).

## Minimum Input
- Topic title/keyword
- Time window (default: past 7 days)

## Required Output Structure (article body)
```text
主标题（20字内，优先使用“项目最新动作/发布点”的信息型标题，不使用“X周全纪录”作为默认标题）
寂川日报 | 发布日期：YYYY-MM-DD | 来源：JICHUAN DAILY 编辑部
头图：图片URL（必须可访问）| alt文案（简明准确）| 来源说明（可追溯）

目录
一、章节标题
二、章节标题
三、章节标题

一、章节标题
（1）事件时间 + 主体 + 核心动作
（2）关键事实与数字（参数、价格、评分、发布时间、版本号等）
（3）该章节小结（1句，客观）

二、章节标题
（同上）

三、章节标题
（同上）

信息来源
媒体A：《标题》— 链接
媒体B：《标题》— 链接
媒体C：《标题》— 链接
```

## Hard Rules
- Choose exactly 3 most relevant and highest-weight reports.
- Each chapter must contain concrete extracted content, not only source names or headline restatement.
- Include at least 2 verifiable facts per chapter; include numbers when available.
- Keep tone neutral and factual; avoid hype words and unverifiable claims.
- Provide one suitable hero image for every article and place it at the beginning of the article body.
- If latest week has insufficient directly relevant reports, state the date range and fallback window explicitly.
- Treat this site as a synthesis newsroom: combine source facts + cross-source integration + editorial analysis.
- Headline policy: use the latest project-specific news point as title anchor (release/upgrade/pricing/partnership), not generic period-summary phrasing.

## Content Depth Requirements (mandatory)
- Do not only paraphrase headlines. Extract useful details from source body text (time, actor, product change, metrics, pricing, rollout scope, limitations).
- For each selected source, output at least one high-value fact that is not a generic statement.
- Add a dedicated integration layer:
  - `What all sources agree on` (common signal)
  - `Where sources differ or leave uncertainty` (boundary/risk)
  - `Our analysis` (objective inference based on cited facts)
- Analysis must be evidence-linked: every core judgment should be traceable to one or more listed sources.
- Keep analysis concise: explain why the facts matter for adoption, cost, competition, or execution risk.
- Use de-source writing style in body: do not write media-led phrases like "XX媒体披露/称/报道显示" as the main sentence pattern.
- Body should present synthesized facts directly; source attribution is centralized in the final `信息来源` section.
- Allow source names in body only when strictly necessary for disambiguation; avoid repetitive attribution noise.
- Sentence-style diversity is required: vary lead patterns, clause structure, and transition verbs; avoid repetitive paragraph openers and uniform rhythm.
- Use standard news phrasing flexibly (event lead, data lead, contrast lead, implication lead), while keeping factual precision.
- Keep fact density high: avoid generic capability wording without concrete numbers.
- If writing terms like "连续上涨/连续提价/持续下滑", provide a dated timeline with at least two explicit points.
- Fully use selected sources: each source must contribute at least one concrete detail reflected in body text.
- Preserve market/business reaction when present in core sources (e.g., pricing deltas, stock moves, adoption signals).
- Separate fact and inference: mark facts first, then give synthesis; do not mix unsupported conclusions into fact paragraphs.

## Pre-Publish Checklist (mandatory)
- Each chapter contains at least 2 verifiable facts.
- The draft includes at least 1 cross-source consensus and at least 1 disagreement/uncertainty.
- The draft includes at least 1 objective "why this matters" analysis.
- Body text avoids media-led phrases such as "某媒体称/披露/报道显示".
- Final `信息来源` section includes complete and clickable source links.
- Hero image is present and suitable to the topic, with valid `URL + alt + credit`.
- Every major claim in body has at least one explicit anchor fact (date, value, version, scope, or event).
- Any "trend" claim has a visible timeline and at least two dated data points.
- Check source-utilization coverage: all selected 3 sources are substantively reflected in body, not only listed at the end.
- Check fact-judgment ratio: no conclusion sentence without prior factual basis in the same section.

## Mapping to Site Data (`app.js`)
- `title`: strong, concise headline.
- `summary`: <= 50 Chinese characters, include one factual conclusion.
- `hero_image.url`: required image URL shown at top of article detail page.
- `hero_image.alt`: concise and accurate alt text.
- `hero_image.credit`: image source/credit line shown below the image.
- `content.intro`: one-paragraph thesis with explicit date range.
- `content.blocks[0]`: `三条核心报道` (integrated facts from 3 sources).
- `content.blocks[1]`: `信息整合结论` (objective synthesis + boundary/risk).
- `source`: short source bundle label (e.g., `36氪 / 量子位 / 21经济网`).
- `source_url`: primary source URL; full source list goes to standalone HTML article.
