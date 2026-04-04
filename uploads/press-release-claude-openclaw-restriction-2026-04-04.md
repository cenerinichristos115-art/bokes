Claude订阅封禁OpenClaw通道
寂川日报 | 发布日期：2026-04-04 | 来源：JICHUAN DAILY 编辑部
头图：https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png | alt文案：Claude标识图形，指向订阅策略调整事件 | 来源说明：Wikimedia Commons（CC0）

目录
一、政策生效时间与计费改造
二、官方理由与用户成本变化
三、生态影响、分歧与后续观察

一、政策生效时间与计费改造
4月4日（周六）12:00 PT / 15:00 ET 起，Claude Pro 与 Max 订阅不再覆盖 OpenClaw 这类第三方 harness 的调用额度，用户不能再直接用原订阅额度跑这类外部工具链。

生效后，继续通过第三方工具调用 Claude 需要切换到两种路径：一是与 Claude 登录绑定的 extra usage（按量付费）；二是改用 Claude API key 独立计费。此次调整覆盖的核心对象是“第三方工具中的 Claude 用量”，而不是 Claude 原生产品内的基础订阅资格。

小结：本次不是“功能下线”，而是把第三方调用从包月额度迁移到按量计费轨道。

二、官方理由与用户成本变化
公开说明给出的核心理由是容量治理：第三方工具的调用模式与消费级订阅设计不匹配，已对系统形成明显压力，平台会优先保障自有产品与 API 客户的可用性。

计费侧的直接变化是：超出订阅内配额后，extra usage 按标准 API 费率单独计费，并与订阅账单分开；支持在设置页配置月度上限与预充值，且现行帮助文档披露每日充值兑换上限为 2000 美元。对依赖 OpenClaw 的重度用户，这意味着“月费可预期”转向“用量驱动成本”。

小结：平台把成本信号显性化，容量压力与高频调用将更直接体现在账单中。

三、生态影响、分歧与后续观察
已披露配套措施包括：向受影响订阅用户发放一次性信用金（金额等同其月订阅费用），并提供退款入口。该安排缓冲了短期情绪，但没有改变第三方路径的长期计费结构。

What all sources agree on（多源一致信号）：
事件时间点明确为 2026 年 4 月 4 日；变化对象是第三方 harness（含 OpenClaw）；后续可用路径是 extra usage 或 API key；调整动因集中在容量与可持续供给。

Where sources differ or leave uncertainty（分歧与不确定性）：
公开表述存在边界差异：一类表述强调“策略与容量管理”，另一类表述强调“该使用方式与条款不一致”；此外，官方尚未给出第三方工具调用在总负载中的具体占比，也未披露该类调用未来是否会出现新的套餐层。

我们的分析：
这次调整把“订阅产品”与“高频代理执行”正式拆账，行业信号是消费端包月模式正在与 agent 型重负载场景切割。接下来两个观察点最关键：
1) 4 月-5 月第三方代理生态是否出现迁移到多模型/多供应商的加速；
2) Anthropic 是否补充“面向第三方工具”的中间层套餐，以避免 API 纯按量价格对中高频个人开发者形成过高门槛。

信息来源
1. The Verge：《Anthropic essentially bans OpenClaw from Claude by making subscribers pay extra》— https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban
2. Business Insider：《Anthropic says Claude subscriptions will no longer support OpenClaw because it puts an 'outsized strain' on systems》— https://www.businessinsider.com/anthropic-cuts-off-openclaw-support-claude-subscriptions-2026-4
3. Claude Help Center：《Manage extra usage for paid Claude plans》— https://support.claude.com/en/articles/12429409-manage-extra-usage-for-paid-claude-plans
