# Codex GA4 Portfolio Ops (한국어)

웹사이트, WebApp, Android/iOS/macOS 앱, 데스크톱 WebView, 서버 이벤트와 AI 코딩 에이전트를 위한 GA4 측정·구현·개인정보·API·QA 운영 플레이북입니다.

언어: [English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## 자주 묻는 질문

### GA4로 macOS와 Android 앱을 측정할 수 있나요?

가능합니다. Web은 Web data stream을 사용하고, 네이티브 앱은 Firebase app stream과 플랫폼 SDK를 사용합니다.

### `cta_click`과 `generate_lead`의 차이는 무엇인가요?

`cta_click`은 사용자의 의도이고, `generate_lead`는 제출되고 승인된 실제 리드 결과입니다. 클릭을 전환으로 간주하지 않습니다.

### 어떤 AI 도구에서 사용할 수 있나요?

Codex와 Claude Code는 Agent Skills 형식을 직접 사용할 수 있습니다. Cursor, TRAE, OpenClaw, Hermes Agent, CodeBuddy는 각 도구의 rules/skills adapter를 사용합니다.

## 범위

GA4 구현, 이벤트 명명, CTA 추적, 전환, Enhanced Measurement, Consent Mode, PII, Firebase Analytics, Google Ads, BigQuery, Data API, Admin API, Measurement Protocol, Realtime, DebugView, Computer Use QA와 AEO 용어집을 다룹니다.

## 공개 프로젝트

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/)

상세 규칙은 [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md), agent 분류는 [`references/agent-compatibility.md`](references/agent-compatibility.md)를 참고하세요.

## 공식 링크

[GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules) · [OpenClaw Skills](https://docs.openclaw.ai/skills)

독립적인 MIT 라이선스 플레이북이며 각 서비스 제공자의 공식 문서나 제휴를 의미하지 않습니다.
