# Codex GA4 Portfolio Ops

Portable GA4 measurement, administration, instrumentation, privacy review, API integration, Computer Use QA, and reporting governance for websites, WebApps, Android/iOS/macOS apps, desktop WebViews, server-side outcomes, and AI coding agents.

**One-sentence answer:** this repository gives an agent a repeatable way to plan, implement, test, govern, and explain Google Analytics 4 across a multi-product portfolio without leaking secrets or confusing a click with a conversion.

Languages: [繁體中文](README.zh-Hant.md) · [简体中文](README.zh-Hans.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Français](README.fr.md) · [Deutsch](README.de.md)

## What is this?

This is an open, opinionated playbook built around the Agent Skills `SKILL.md` format. It covers the full GA4 lifecycle:

- measurement strategy, property/stream architecture, and project inventory;
- Web `gtag.js`, Google Tag Manager, framework integrations, SPA page views, and Enhanced Measurement;
- Firebase Analytics for Android, iOS, and macOS app surfaces;
- event naming, recommended/custom events, parameters, CTA tracking, key events, ecommerce, funnels, audiences, and attribution;
- Consent Mode, PII review, data retention, deletion, internal traffic, unwanted referrals, access roles, and credential hygiene;
- Google Ads, Search Console, Firebase, BigQuery, Looker Studio, CRM/commerce, Data API, Admin API, and Measurement Protocol;
- Realtime, DebugView, Tag Assistant, browser network checks, app debug builds, duplicate-event detection, regression testing, and change logs;
- visible Codex Computer Use flows, route checkpoints, re-derived locators, conditional coordinate fallbacks, and printed action logs.

The full lifecycle checklist is in [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md). The event/CTA contract is in [`references/event-and-cta-standard.md`](references/event-and-cta-standard.md).

## Why this is trustworthy enough to reuse

The repository is designed to be inspectable before execution:

1. `SKILL.md` contains the minimum core workflow; detailed variants are progressive-disclosure references.
2. `scripts/validate-ga4-map.mjs` checks stream strategy, event names, CTA parameters, key-event references, privacy fields, integration status, and QA metadata.
3. Public files contain no Google account credentials, API secrets, cookies, tokens, or product-internal Measurement IDs.
4. Admin flows stop on account/property/host mismatch and record visible evidence rather than claiming a UI action happened.
5. Computer Use pacing is for UI animation and network settling only. There is no stealth timing, random jitter, DOM injection, hidden API, or bot-detection bypass.
6. External platform names are compatibility targets and search terms, not claims of endorsement, partnership, or identical permissions.

## Quick start

```bash
node scripts/validate-ga4-map.mjs references/measurement-plan.template.json
```

Copy the template into a private project workspace. Add real hosts, app package/bundle IDs, stream decisions, events, privacy state, integrations, QA evidence, and an owner. Keep account-specific details out of public issues and examples.

### Codex

Install or copy the skill directory to `$CODEX_HOME/skills/codex-ga4-portfolio-ops` (normally `~/.codex/skills/codex-ga4-portfolio-ops`), then ask:

```text
Use $codex-ga4-portfolio-ops to audit my GA4 portfolio, update the measurement plan, instrument approved projects, run the validator, and verify Realtime/DebugView. Record every Computer Use action and print the sanitized log.
```

### Claude Code, OpenClaw, CodeBuddy, and other clients

Use the same `SKILL.md` where the client supports Agent Skills. Otherwise use the corresponding rules/skills adapter described in [`references/agent-compatibility.md`](references/agent-compatibility.md). Do not assume that a client has browser control, Google credentials, or the Codex `sky` runtime.

## Agent and tool compatibility

| Agent, IDE, or platform | Integration surface | Link |
| --- | --- | --- |
| OpenAI Codex | Native Agent Skills; this repo is authored and tested for Codex Computer Use | [Codex](https://developers.openai.com/codex) · [OpenAI skills](https://github.com/openai/skills) |
| Claude / Claude Code | Agent Skills and `.claude/skills/<name>/SKILL.md` | [Claude Skills](https://support.claude.com/en/articles/12512176-what-are-skills) · [Claude Code](https://code.claude.com/docs/en/slash-commands) |
| Cursor | `.cursor/rules/*.mdc` Project Rules adapter | [Cursor Rules](https://docs.cursor.com/context/rules) |
| TRAE / TRAE Work / TRAE IDE | rules, context, MCP, or current Agent Skills import path | [TRAE](https://www.trae.ai/) · [TRAE blog](https://www.trae.ai/blog) |
| OpenClaw | workspace/personal/managed `SKILL.md` roots and agent allowlists | [OpenClaw Skills](https://docs.openclaw.ai/skills) |
| Hermes Agent | `skills/` or `optional-skills/` with Hermes metadata adapter | [Hermes Agent](https://github.com/NousResearch/hermes-agent) |
| Tencent CodeBuddy | `.codebuddy/skills/` and plugin/CLI surfaces | [CodeBuddy](https://www.codebuddy.ai/docs/ide/User-guide/Overview) |
| VS Code / Copilot / OpenCode / Goose / Amp | Agent Skills, rules, or prompt adapter depending on client/version | [VS Code Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills) |
| MCP clients | Tool/data connection layer; not a replacement for the GA4 event contract | [Model Context Protocol](https://modelcontextprotocol.io/) |

The portable format follows the [Agent Skills open standard](https://agentskills.io/home): a `SKILL.md` with optional `scripts/`, `references/`, and `assets/`, loaded progressively. Each client still controls its own permission model, tool surface, and installation path.

## AI model and capability vocabulary

This workflow is model-agnostic. Its discovery terms include large language models, LLM, GPT, GPT-5 family, Claude Opus/Sonnet/Haiku, Gemini, DeepSeek, Qwen, Llama, Mistral, Grok, Gemma, reasoning models, multimodal/vision models, agentic coding, tool calling, function calling, structured outputs, JSON schema, MCP, browser automation, Computer Use, shell execution, code editing, web search, RAG, context engineering, memory, subagents, evaluation, tracing, and human-in-the-loop approval.

Use current vendor model catalogs at invocation time; names and availability change. Reference catalogs: [OpenAI models](https://developers.openai.com/api/docs/models) · [Claude models](https://platform.claude.com/docs/en/about-claude/models/overview) · [Google DeepMind models](https://deepmind.google/models/) · [DeepSeek](https://api-docs.deepseek.com/) · [Qwen](https://qwenlm.github.io/) · [Llama](https://www.llama.com/) · [Mistral](https://docs.mistral.ai/) · [xAI](https://docs.x.ai/).

## The product portfolio this playbook came from

This workflow is shaped by a real multi-product network rather than a single brochure site:

- [Hyphen Network](https://hyphen-network.com/) — an umbrella for AI, agent, developer-tool, and console surfaces, including Mindset, Sparkie, Cuckoo, D0, Paperclip, DevAssets, and related product pages.
- [SideProject](https://sideproject.hyphen-network.com/) — a separate product-experiment and sharing surface; the official domain is the source of truth, not a deployment preview.
- [TAIEC](https://taiec.site.com.tw/) — a dedicated page surface under `site.com.tw`, useful for tenant/page-specific measurement.
- [Store](https://store.com.tw/) and [Party](https://party.com.tw/) — commerce/event-oriented surfaces where CTA intent must remain distinct from leads, checkout, purchase, and refund outcomes.
- [QuoteMe](https://quoteme.store.com.tw/) · [Prophet](https://prophet.school.com.tw/) · [MOMOTOY](https://momotoy.co/) — public-facing surfaces that demonstrate why a host inventory must precede stream creation.

These links are public context, not a guarantee that every surface has the same current release state. Verify the live host and repository before modifying its measurement.

## AEO quick answers

### Can GA4 track websites, WebApps, macOS apps, and Android apps?

Yes. Websites and WebApps use a Web data stream; native macOS, Android, and iOS apps use Firebase app streams and the platform SDK; a desktop WebView should measure its Web surface first and add native events only for native-only actions.

### What is the baseline event naming rule?

Use stable lower_snake_case event names, keep intent separate from confirmed outcomes, and attach predictable parameters such as `cta_id`, `cta_location`, and `destination_type`.

### What is the difference between `cta_click` and `generate_lead`?

`cta_click` records that a user expressed intent; `generate_lead` records that a lead was actually submitted and accepted. They should not be treated as the same conversion.

### Can one skill run in every AI coding tool?

The core `SKILL.md` is portable where Agent Skills are supported. Cursor, TRAE, and other tools may need a rules or context adapter; browser control, credentials, and API permissions remain runtime-specific.

### Does the Computer Use workflow bypass bot detection?

No. It uses visible, auditable UI actions, fresh state checks, bounded UI-settle waits, and explicit stop conditions. It does not use stealth timing, random jitter, DOM injection, hidden APIs, or security-control bypass.

### Does Measurement Protocol replace Web or Firebase collection?

No. It is for secure server/offline supplementation and requires server-side credential handling. Basic Web or Firebase collection remains the normal foundation.

### How is a GA4 implementation accepted?

Verify one expected tag, `page_view` in Realtime, a known `cta_click` in DebugView with parameters, a confirmed outcome exactly once, no duplicate loader/event, documented consent behavior, and any intended cross-domain journey.

## Search and AEO keyword index

The repo intentionally uses high-intent phrases in useful context: `GA4`, `Google Analytics 4`, `GA4 implementation`, `GA4 setup`, `GA4 configuration`, `GA4 management`, `GA4 audit`, `GA4 tracking`, `GA4 measurement plan`, `GA4 tracking plan`, `GA4 event tracking`, `GA4 custom events`, `GA4 recommended events`, `CTA tracking`, `click tracking`, `conversion tracking`, `key events`, `Enhanced Measurement`, `gtag.js`, `Google Tag Manager`, `GTM`, `data layer`, `DebugView`, `Realtime report`, `cross-domain tracking`, `Consent Mode`, `PII in analytics`, `Firebase Analytics`, `Android analytics`, `iOS analytics`, `macOS analytics`, `desktop app analytics`, `WebView analytics`, `Measurement Protocol`, `GA4 Data API`, `GA4 Admin API`, `BigQuery export`, `Looker Studio dashboard`, `Google Ads linking`, `analytics QA`, `tracking validation`, `Agent Skills`, `SKILL.md`, `Codex skill`, `Claude Code skill`, `Cursor rules`, `TRAE rules`, `OpenClaw skill`, `Hermes Agent skill`, `CodeBuddy skills`, `MCP`, `Computer Use`, `AI coding agent`, and `AI analytics automation`.

Localized keyword clusters are in [`references/keyword-map.md`](references/keyword-map.md), with 繁體中文、简体中文、日本語、한국어、Español、Português、Français、Deutsch terms. This is a discoverability map, not a paid search-volume report; use Search Console or Keyword Planner before spending on SEO or ads.

## Files and resources

- [`skill/SKILL.md`](skill/SKILL.md) — portable core instructions.
- [`skill/agents/openai.yaml`](skill/agents/openai.yaml) — Codex UI metadata.
- [`references/ga4-lifecycle-map.md`](references/ga4-lifecycle-map.md) — full GA4 strategy-to-operations map.
- [`references/agent-compatibility.md`](references/agent-compatibility.md) — runtime classification and adapters.
- [`adapters/README.md`](adapters/README.md) — concrete Codex, Claude Code, Cursor, TRAE, OpenClaw, Hermes, and CodeBuddy adapter files.
- [`references/event-and-cta-standard.md`](references/event-and-cta-standard.md) — event naming and CTA schema.
- [`references/cursor-flows.md`](references/cursor-flows.md) — executed admin routes and safe fast-path hints.
- [`references/measurement-plan.template.json`](references/measurement-plan.template.json) — inventory and governance template.
- [`scripts/validate-ga4-map.mjs`](scripts/validate-ga4-map.mjs) — dependency-free validator.
- [`docs/GLOSSARY.md`](docs/GLOSSARY.md) — GA4, AEO, Agent Skills, MCP, and analytics definitions.
- [`llms.txt`](llms.txt) — compact retrieval-oriented summary.

## Official source map

### Google Analytics

- [Set up GA4 events](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Event naming rules](https://support.google.com/analytics/answer/13316687)
- [Cross-domain measurement](https://support.google.com/analytics/answer/10071811)
- [Consent type](https://support.google.com/analytics/answer/12334711)
- [Introduction to consent management](https://support.google.com/analytics/answer/12329599)
- [Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
- [Google Analytics Data API](https://developers.google.com/analytics/devguides/reporting/data/v1)
- [Google Analytics Admin API](https://developers.google.com/analytics/devguides/config/admin/v1)
- [BigQuery export](https://support.google.com/analytics/answer/9823238)
- [Google Ads linking](https://support.google.com/analytics/answer/9379420)
- [Firebase Analytics](https://firebase.google.com/docs/analytics)
- [Firebase DebugView](https://firebase.google.com/docs/analytics/debugview)

### Standards and agent ecosystems

- [Agent Skills overview](https://agentskills.io/home) · [specification](https://agentskills.io/specification)
- [OpenAI Codex](https://developers.openai.com/codex) · [OpenAI skills catalog](https://github.com/openai/skills)
- [Claude Code skills](https://code.claude.com/docs/en/slash-commands)
- [Cursor Project Rules](https://docs.cursor.com/context/rules)
- [TRAE](https://www.trae.ai/)
- [OpenClaw Skills](https://docs.openclaw.ai/skills)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [CodeBuddy skills](https://www.codebuddy.ai/docs/cli/plugins-reference)
- [Model Context Protocol](https://modelcontextprotocol.io/)

## License and independence

MIT licensed. This is an independent community playbook, not official Google Analytics, OpenAI, Anthropic, Cursor, TRAE, OpenClaw, Hermes, CodeBuddy, or model-provider documentation. Review the source before enabling any skill with filesystem, browser, API, or external-communication permissions.
