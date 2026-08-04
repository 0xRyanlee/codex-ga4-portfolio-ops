# Codex GA4 Portfolio Ops（繁體中文）

一套可攜式的 GA4 規劃、建立、植入、隱私治理、API 整合、Computer Use 驗收與報表工作流，適用於網站、WebApp、Android/iOS/macOS App、桌面 WebView、伺服器端結果與 AI coding agent。

語言： [English](README.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## 直接回答

### GA4 可以追蹤 macOS 與 Android App 嗎？

可以。網站與 WebApp 使用 Web data stream；原生 macOS、Android、iOS 使用 Firebase app stream 與平台 SDK；桌面 WebView 先量測 Web surface，只有原生專屬行為才增加 native event。

### `cta_click` 和 `generate_lead` 有什麼不同？

`cta_click` 是使用者意圖；`generate_lead` 是表單或流程已送出並被接受的實際結果，兩者不可混成同一個轉換。

### 這個 skill 能給哪些 AI agent 使用？

Codex 與 Claude Code 可直接使用 Agent Skills 形式；Cursor、TRAE 等可透過 rules/context adapter；OpenClaw、Hermes Agent、CodeBuddy 有各自的 skill 路徑。瀏覽器控制、憑證與權限仍由各 runtime 決定。

### 會用人類化操作繞過 bot detection 嗎？

不會。只使用可觀察的 UI 操作、重新取得狀態、必要的 UI settle wait 與明確停止條件，不使用 stealth timing、隨機抖動、DOM injection、隱藏 API 或安全繞過。

## 覆蓋範圍

- GA4 property/stream 架構、事件命名、CTA、推薦/自訂事件、Key events、電商、漏斗、受眾、歸因。
- Web `gtag.js`、Google Tag Manager、Enhanced Measurement、SPA page view。
- Firebase Analytics、Android/iOS/macOS、WebView、伺服器端與 Measurement Protocol。
- Consent Mode、PII、資料保留/刪除、內部流量、unwanted referral、權限與 secret hygiene。
- Google Ads、Search Console、BigQuery、Looker Studio、CRM/commerce、Admin API、Data API。
- Realtime、DebugView、Tag Assistant、網路請求、重複事件、回歸與變更紀錄。

完整生命週期見 [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md)，跨 agent adapter 見 [`references/agent-compatibility.md`](references/agent-compatibility.md)，詞條見 [`docs/GLOSSARY.md`](docs/GLOSSARY.md)。

## 我們的公開產品脈絡

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/) · [QuoteMe](https://quoteme.store.com.tw/) · [Prophet](https://prophet.school.com.tw/) · [MOMOTOY](https://momotoy.co/)

這些是公開產品脈絡，不代表每個網站目前都處於相同版本；實際修改前仍要確認 live host、repo、property 與 stream。

## 快速開始

```bash
node scripts/validate-ga4-map.mjs references/measurement-plan.template.json
```

將 template 複製到私有工作區，填入 host、package/bundle ID、事件、privacy、integration、QA 與 owner。不要把 API secret、cookie、token、帳號資料或內部憑證放進 repo。

## 主要連結

- [Google Analytics 事件](https://developers.google.com/analytics/devguides/collection/ga4/events) · [命名規則](https://support.google.com/analytics/answer/13316687) · [Consent Mode](https://support.google.com/analytics/answer/12334711)
- [Data API](https://developers.google.com/analytics/devguides/reporting/data/v1) · [Admin API](https://developers.google.com/analytics/devguides/config/admin/v1) · [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
- [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules)
- [TRAE](https://www.trae.ai/) · [OpenClaw Skills](https://docs.openclaw.ai/skills) · [Hermes Agent](https://github.com/NousResearch/hermes-agent) · [CodeBuddy](https://www.codebuddy.ai/docs/ide/User-guide/Overview)

MIT license。本 repo 是獨立 playbook，不代表 Google、OpenAI、Anthropic、Cursor、TRAE、OpenClaw、Hermes、CodeBuddy 或任何模型供應商官方文件。
