# 自动发布（每日3篇）配置说明

## 已落地内容
- 定时工作流：`.github/workflows/auto-publish-ai-news.yml`
- 生成脚本：`scripts/auto-generate-daily-ai-news.js`
- 发布链路：自动改写 `app.js` -> 运行 `scripts/generate-static.js` -> 自动提交推送到 `master` -> 触发 Pages 部署

## 需要你在 GitHub 仓库里配置的 Secrets
1. `OPENAI_API_KEY`（必填）
2. `OPENAI_MODEL`（可选，默认 `gpt-4.1-mini`）
3. `OPENAI_BASE_URL`（可选，默认 `https://api.openai.com/v1`）

## 运行时间
- 当前定时：每天北京时间 09:00（UTC `01:00`）
- 修改位置：`.github/workflows/auto-publish-ai-news.yml` 的 `cron`

## 手动触发
1. 打开 GitHub 仓库 -> `Actions`
2. 选择 `Auto Publish AI News`
3. 点击 `Run workflow`

## 常见问题
- 如果日志提示缺少 `OPENAI_API_KEY`，说明 Secret 未配置或名称不一致。
- 如果当天已生成过自动稿，脚本会自动去重并跳过写入。
