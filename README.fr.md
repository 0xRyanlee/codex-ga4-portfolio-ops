# Codex GA4 Portfolio Ops (Français)

Guide portable pour planifier, implémenter, gouverner et valider Google Analytics 4 sur des sites web, WebApps, applications Android/iOS/macOS, WebViews, événements serveur et agents de programmation IA.

Langues : [English](README.md) · [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Deutsch](README.de.md)

## Réponses rapides

### GA4 peut-il mesurer les applications macOS et Android ?

Oui. Utilisez un Web data stream pour le Web/WebApp et un Firebase app stream avec le SDK de la plateforme pour les applications natives.

### Quelle est la différence entre `cta_click` et `generate_lead` ?

`cta_click` mesure l’intention ; `generate_lead` mesure un lead envoyé et accepté. Ce ne sont pas la même conversion.

### Quels agents sont compatibles ?

Codex et Claude Code peuvent utiliser directement le format Agent Skills. Cursor, TRAE, OpenClaw, Hermes Agent et CodeBuddy peuvent utiliser des adaptateurs rules/skills selon leur runtime.

## Couverture

Plan de mesure, nommage des événements, CTA et conversions, Enhanced Measurement, Consent Mode, PII, Firebase Analytics, Google Ads, BigQuery, Data API, Admin API, Measurement Protocol, Realtime, DebugView, QA Computer Use et glossaire AEO.

## Projets publics

[Hyphen Network](https://hyphen-network.com/) · [SideProject](https://sideproject.hyphen-network.com/) · [TAIEC](https://taiec.site.com.tw/) · [Store](https://store.com.tw/) · [Party](https://party.com.tw/)

Voir [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md) et [`references/agent-compatibility.md`](references/agent-compatibility.md). Sources : [GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events) · [Agent Skills](https://agentskills.io/home) · [Codex](https://developers.openai.com/codex) · [Claude Code](https://code.claude.com/docs/en/slash-commands) · [Cursor Rules](https://docs.cursor.com/context/rules).

Projet indépendant sous licence MIT ; ce n’est pas une documentation officielle ni un partenariat avec un fournisseur.
