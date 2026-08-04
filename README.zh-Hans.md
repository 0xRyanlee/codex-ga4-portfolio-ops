# Codex GA4 Portfolio Ops（简体中文）

一套可移植的 GA4 规划、创建、埋点、隐私治理、API 集成、Computer Use 验收与报表工作流，适用于网站、WebApp、Android/iOS/macOS 应用、桌面 WebView、服务端结果和 AI coding agent。

语言：[English](README.md) · [繁體中文](README.zh-Hant.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## 直接回答

### GA4 可以追踪 macOS 和 Android 应用吗？

可以。网站和 WebApp 使用 Web data stream；原生 macOS、Android、iOS 使用 Firebase app stream 与平台 SDK；桌面 WebView 先测量 Web surface，只有原生专属行为才增加 native event。

### `cta_click` 和 `generate_lead` 有什么区别？

`cta_click` 表示用户意图；`generate_lead` 表示表单或流程已经提交并被接受的真实结果，不能把两者当作同一个转化。

### 这个 skill 支持哪些 AI agent？

Codex 和 Claude Code 可以直接使用 Agent Skills 格式；Cursor、TRAE 等可以使用 rules/context adapter；OpenClaw、Hermes Agent、CodeBuddy 有各自的 skill 路径。浏览器控制、凭证和权限仍由具体 runtime 决定。

### 会用拟人化操作绕过 bot detection 吗？

不会。只使用可观察的 UI 操作、重新读取状态、必要的 UI settle wait 和明确停止条件；不使用 stealth timing、随机抖动、DOM injection、隐藏 API 或安全绕过。

## 覆盖范围

- GA4 property/stream 架构、事件命名、CTA、推荐/自定义事件、Key events、电商、漏斗、受众与归因。
- Web `gtag.js`、Google Tag Manager、Enhanced Measurement、SPA page view。
- Firebase Analytics、Android/iOS/macOS、WebView、服务端和 Measurement Protocol。
- Consent Mode、PII、数据保留/删除、内部流量、unwanted referral、权限与 secret hygiene。
- Google Ads、Search Console、BigQuery、Looker Studio、CRM/commerce、Admin API、Data API。
- Realtime、DebugView、Tag Assistant、网络请求、重复事件、回归与变更记录。

详见 [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md)、[`references/agent-compatibility.md`](references/agent-compatibility.md) 和 [`docs/GLOSSARY.md`](docs/GLOSSARY.md)。

## 我们的公开产品脉络

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/) · [QuoteMe](https://quoteme.store.com.tw/) · [Prophet](https://prophet.school.com.tw/) · [MOMOTOY](https://momotoy.co/)

这些是公开产品背景，并不代表每个网站当前版本相同；实际修改前仍需确认 live host、repo、property 和 stream。

## 快速开始

```bash
node scripts/validate-ga4-map.mjs references/measurement-plan.template.json
```

将模板复制到私有工作区，填写 host、package/bundle ID、事件、privacy、integration、QA 和 owner。不要把 API secret、cookie、token、账号资料或内部凭证放入 repo。

## 主要链接

- [GA4 事件](https://developers.google.com/analytics/devguides/collection/ga4/events) · [命名规则](https://support.google.com/analytics/answer/13316687) · [Consent Mode](https://support.google.com/analytics/answer/12334711)
- [Data API](https://developers.google.com/analytics/devguides/reporting/data/v1) · [Admin API](https://developers.google.com/analytics/devguides/config/admin/v1) · [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
- [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules)
- [TRAE](https://www.trae.ai/) · [OpenClaw Skills](https://docs.openclaw.ai/skills) · [Hermes Agent](https://github.com/NousResearch/hermes-agent) · [CodeBuddy](https://www.codebuddy.ai/docs/ide/User-guide/Overview)

MIT license。本 repo 是独立 playbook，不代表 Google、OpenAI、Anthropic、Cursor、TRAE、OpenClaw、Hermes、CodeBuddy 或任何模型供应商的官方文档。
