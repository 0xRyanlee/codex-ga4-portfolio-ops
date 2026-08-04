# Codex GA4 Portfolio Ops (Português)

Playbook portátil para planejar, implementar, governar e validar o Google Analytics 4 em sites, WebApps, apps Android/iOS/macOS, WebViews, eventos server-side e agentes de programação com IA.

Idiomas: [English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## Respostas rápidas

### O GA4 pode medir apps macOS e Android?

Sim. Use um Web data stream para Web/WebApp e um Firebase app stream com o SDK da plataforma para apps nativos.

### Qual é a diferença entre `cta_click` e `generate_lead`?

`cta_click` mede intenção; `generate_lead` mede um lead enviado e aceito. Não são a mesma conversão.

### Quais agentes são compatíveis?

Codex e Claude Code podem usar diretamente o formato Agent Skills. Cursor, TRAE, OpenClaw, Hermes Agent e CodeBuddy podem usar adaptadores de rules/skills conforme o runtime.

## Inclui

Plano de medição, nomenclatura de eventos, CTA e conversões, Enhanced Measurement, Consent Mode, PII, Firebase Analytics, Google Ads, BigQuery, Data API, Admin API, Measurement Protocol, Realtime, DebugView, QA de Computer Use e glossário AEO.

## Nossos projetos públicos

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/)

Consulte [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md) e [`references/agent-compatibility.md`](references/agent-compatibility.md). Fontes oficiais: [GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules).

Projeto independente sob licença MIT; não é documentação oficial nem parceria com nenhum fornecedor.
