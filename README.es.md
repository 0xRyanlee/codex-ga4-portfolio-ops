# Codex GA4 Portfolio Ops (Español)

Playbook portátil para planificar, implementar, gobernar y validar Google Analytics 4 en sitios web, WebApps, aplicaciones Android/iOS/macOS, WebViews, eventos de servidor y agentes de programación con IA.

Idiomas: [English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## Respuestas rápidas

### ¿GA4 puede medir aplicaciones macOS y Android?

Sí. Usa un Web data stream para Web/WebApp y un Firebase app stream con el SDK de la plataforma para aplicaciones nativas.

### ¿Qué diferencia hay entre `cta_click` y `generate_lead`?

`cta_click` mide intención; `generate_lead` mide un lead enviado y aceptado. No son la misma conversión.

### ¿Qué agentes son compatibles?

Codex y Claude Code pueden usar directamente el formato Agent Skills. Cursor, TRAE, OpenClaw, Hermes Agent y CodeBuddy pueden usar adaptadores de rules/skills según su runtime.

## Incluye

Plan de medición, nomenclatura de eventos, CTA y conversiones, Enhanced Measurement, Consent Mode, PII, Firebase Analytics, Google Ads, BigQuery, Data API, Admin API, Measurement Protocol, Realtime, DebugView, QA de Computer Use y glosario AEO.

## Nuestros proyectos públicos

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/)

Consulta [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md) y [`references/agent-compatibility.md`](references/agent-compatibility.md). Enlaces oficiales: [GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules).

Proyecto independiente con licencia MIT; no es documentación oficial ni una asociación con ningún proveedor.
