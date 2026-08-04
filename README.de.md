# Codex GA4 Portfolio Ops (Deutsch)

Ein portables Playbook für Planung, Implementierung, Governance und QA von Google Analytics 4 für Websites, WebApps, Android/iOS/macOS-Apps, WebViews, serverseitige Ereignisse und KI-Coding-Agenten.

Sprachen: [English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md)

## Schnelle Antworten

### Kann GA4 macOS- und Android-Apps messen?

Ja. Für Web/WebApp wird ein Web data stream verwendet; native Apps verwenden einen Firebase app stream und das jeweilige SDK.

### Was ist der Unterschied zwischen `cta_click` und `generate_lead`?

`cta_click` misst Absicht; `generate_lead` misst einen tatsächlich gesendeten und akzeptierten Lead. Das sind nicht dieselben Conversion-Events.

### Welche Agenten werden unterstützt?

Codex und Claude Code können das Agent-Skills-Format direkt verwenden. Cursor, TRAE, OpenClaw, Hermes Agent und CodeBuddy benötigen je nach Runtime einen Rules/Skills-Adapter.

## Umfang

Messplan, Event-Namen, CTA und Conversions, Enhanced Measurement, Consent Mode, PII, Firebase Analytics, Google Ads, BigQuery, Data API, Admin API, Measurement Protocol, Realtime, DebugView, Computer-Use-QA und AEO-Glossar.

## Öffentliche Projekte

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/)

Siehe [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md) und [`references/agent-compatibility.md`](references/agent-compatibility.md). Quellen: [GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules).

Unabhängiges MIT-lizenziertes Projekt; keine offizielle Dokumentation und keine Partnerschaft mit einem Anbieter.
