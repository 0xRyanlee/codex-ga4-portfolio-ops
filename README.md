# Codex GA4 Portfolio Ops

Reusable GA4 measurement, administration, instrumentation, and QA workflow for Codex. It is designed for a portfolio that contains public websites, WebApps, product landing pages, macOS/Android/iOS apps, and desktop WebViews.

The distinctive part is operational: the browser-admin workflow uses Codex Computer Use, re-derives the visible control before every action, and prints a sanitized action log with button labels, semantic locators, and coordinate fallbacks. The code workflow keeps the same event contract across products so reports remain comparable.

## What is included

- Property and data-stream naming rules.
- `lower_snake_case` event and CTA conventions.
- A reusable baseline for `cta_click`, contact, lead, download, account, commerce, content, and native-screen events.
- Web/WebApp, Firebase app-stream, macOS, Android, iOS, and desktop-WebView decisions.
- Codex Computer Use runbook for visible GA4 admin actions and position logging.
- Reusable cursor flows for property creation, Web stream edits, batch stream setup, and post-deploy verification.
- Realtime/DebugView, duplicate-event, Enhanced Measurement, and build/runtime acceptance.
- A dependency-free Node validator for measurement-plan JSON.

## The portfolio this playbook came from

This playbook is deliberately shaped by a real multi-product network rather than a single brochure site:

- [Hyphen Network](https://hyphen-network.com/) is the umbrella for a set of AI, agent, and developer-tool surfaces. Its product pages include Mindset, Sparkie, Cuckoo, D0, Paperclip, DevAssets, and related tool/console experiences. Each independent product host should remain analytically legible.
- [SideProject](https://sideproject.hyphen-network.com/) is a separate product-experiment and sharing surface. Its official domain is the measurement source of truth; deployment-provider preview hosts are not production streams.
- [TAIEC](https://taiec.site.com.tw/) is a dedicated page surface under `site.com.tw`, useful as a tenant/page-specific measurement example rather than being silently mixed into the site shell.
- [Store](https://store.com.tw/) and [Party](https://party.com.tw/) are commerce/event-oriented surfaces where CTA intent must remain distinct from lead, checkout, purchase, and refund outcomes.
- [QuoteMe](https://quoteme.store.com.tw/), [Prophet](https://prophet.school.com.tw/), and [MOMOTOY](https://momotoy.co/) illustrate why a portfolio needs an explicit host inventory before anyone creates a GA4 stream.

These examples are public-facing context, not an assertion that every listed host has the same current release state. Verify the live host and repository before changing its GA4 configuration.

## Search terms and discovery

The README uses the language practitioners actually use when looking for this workflow: `GA4`, `Google Analytics 4`, `GA4 implementation`, `GA4 setup`, `GA4 tracking`, `GA4 event tracking`, `GA4 measurement plan`, `GA4 tracking plan`, `GA4 conversion tracking`, `GA4 custom events`, `GA4 recommended events`, `CTA tracking`, `click tracking`, `Google Tag Manager`, `GTM`, `gtag.js`, `data layer`, `Enhanced Measurement`, `GA4 DebugView`, `Realtime report`, `key events`, `cross-domain tracking`, `Firebase Analytics`, `Android analytics`, `iOS analytics`, `macOS analytics`, `desktop app analytics`, `WebView analytics`, `analytics QA`, `tracking audit`, `measurement validation`, and `Codex Computer Use`.

These are discoverability and high-intent topic clusters, not a paid keyword-volume report. Before spending on SEO or ads, validate volume and competition in Google Keyword Planner or Search Console. Keep the terms in useful headings and explanations; do not turn the README into keyword stuffing.

## Use with Codex

The installed skill is `codex-ga4-portfolio-ops`. It is intended for Codex and explicitly uses Computer Use for the visible Google Analytics admin console. Start with a request such as:

```text
Use $codex-ga4-portfolio-ops to audit these projects, propose the GA4 measurement map, instrument the approved surfaces, and verify Realtime/DebugView. Record every Computer Use button and position.
```

For local skill use, place the skill directory under the Codex skills directory. This repository keeps the same `SKILL.md`, references, and validator in a browsable public layout so another agent can inspect or package it.

## Quick start

```bash
node skill/scripts/validate-ga4-map.mjs skill/references/measurement-plan.template.json
```

Then copy the template to a private project workspace and replace the example entries with real hosts, app IDs, stream decisions, events, and CTA locations. Keep account-specific Measurement IDs out of public issues and examples unless deliberately published.

## Design principles

1. One independent public host, one Web stream by default.
2. One intentional cross-domain journey, one documented cross-domain configuration.
3. Native Android, iOS, and macOS apps use Firebase app streams; a native app is not a Web stream.
4. Event names describe business meaning, not button styling or translation text.
5. `cta_click` records intent; success events record confirmed outcomes.
6. A green build is necessary but not sufficient: Realtime/DebugView and duplicate-event checks are part of acceptance.
7. No API secret, service credential, cookie, token, or PII belongs in this repository.

## FAQ

### Can GA4 track a web app, macOS app, or Android app?

Yes, but the collection surface differs. Websites and WebApps use a Web data stream; native macOS, Android, and iOS apps use a Firebase app stream and the platform SDK. A desktop app that is mostly a WebView should first measure the web surface and add native events only for actions the WebView cannot represent.

### Does this automate Google Analytics without opening every page manually?

It reuses route-aware cursor flows and batches independent property/stream forms. The flow still re-checks the visible account, property, host, label, and result at state boundaries. Element indices are refreshed; recorded coordinates are conditional fallbacks tied to a viewport, not blind replay commands.

### Does the human-like pacing bypass bot detection?

No. The runbook permits only bounded waits needed for visible UI animation, navigation, and network completion. It explicitly rejects stealth timing, random jitter, hidden APIs, DOM injection, and security-control bypass. This is observable, auditable Computer Use for an authorized account.

### What should be tested after GA4 implementation?

Check one tag, `page_view` in Realtime, a known `cta_click` in DebugView, expected parameters, a confirmed success event exactly once, and the absence of duplicate loaders/events. Also document Enhanced Measurement and any real cross-domain journey.

## Official references

- [Google Analytics event naming](https://support.google.com/analytics/answer/13316687)
- [GA4 recommended events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [GA4 Web data streams](https://support.google.com/analytics/answer/9304153)
- [GA4 DebugView](https://support.google.com/analytics/answer/7201382)
- [Firebase Analytics](https://firebase.google.com/docs/analytics)

## Status

This is a practical, opinionated v0.1 playbook. Google Analytics UI labels and platform SDK details can change; verify the current official documentation during each live admin run.
