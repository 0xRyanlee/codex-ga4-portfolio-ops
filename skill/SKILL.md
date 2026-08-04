---
name: codex-ga4-portfolio-ops
description: Use when creating, administering, instrumenting, auditing, or testing GA4 across a portfolio of websites, web apps, macOS desktop apps, Android apps, or WebViews. This Codex skill standardizes property and stream naming, lower_snake_case events, CTA parameters, cross-domain decisions, Computer Use admin actions, action-position logging, and Realtime/DebugView acceptance.
---

# Codex GA4 Portfolio Ops

## Overview

Use this skill as the portfolio-level operating procedure for GA4. It separates the reusable measurement contract from product-specific implementation, and it records every admin-console action so a later run can reproduce or audit the work. The admin-console portion is explicitly for Codex Computer Use; code changes belong in the target repository.

## Operating rules

- Inspect the real host, repository, runtime, and existing tags before creating a stream. Do not infer a production domain from a local preview or deployment provider.
- Use one Web data stream per independent public host unless the same user journey intentionally crosses domains. Use Firebase app streams for native Android, iOS, and macOS apps. A macOS or Android app can use GA4; native-only apps should not be treated as ordinary web pages.
- Keep exactly one GA4 loader/config per runtime surface. Preserve Enhanced Measurement where appropriate, and check for duplicate tags before adding another.
- Never put a Measurement Protocol `api_secret`, service-account credential, or browser credential in source, a mobile bundle, a public repository, or a client-side environment variable.
- GA4 event names are `lower_snake_case`, at most 40 characters, and must not start with reserved prefixes such as `firebase_`, `google_`, or `ga_`. Do not send email addresses, names, phone numbers, full URLs containing identifiers, or other direct PII as event parameters.
- Treat an intent event and a success event as different things: `cta_click` means a click; `generate_lead`, `sign_up`, `begin_checkout`, and `purchase` mean a later business outcome.
- Record Computer Use evidence as structured rows: timestamp, project, page, visible label, semantic locator or `element_index`, coordinate fallback, action, result, and verification state. Re-query the live UI before every action; element indices are not stable.
- Use `apply_patch` for repository edits and run the target repository's available lint/build/runtime checks. Do not widen a patch to fix unrelated worktree errors.

## Workflow

### 1. Inventory and scope

Create or update a measurement-plan JSON using `references/measurement-plan.template.json`. For every project record:

`project_key`, public host or app package/bundle ID, surface type (`web`, `webapp`, `android`, `ios`, `macos`, or `desktop_webview`), owner, intended journey, stream strategy, current tag/SDK state, and open questions.

Resolve these decisions before admin work:

- Independent marketing/product site: its own Web stream.
- One journey intentionally crossing domains: one stream with documented cross-domain configuration.
- Android/iOS/macOS native app: Firebase app stream and native SDK, with `screen_view` and app lifecycle events.
- Desktop app built around a web surface: instrument the web surface first; add a native bridge only when native-only actions matter.

### 2. Define the reusable contract

Start with the baseline event set and extend only when a product decision needs it:

| Intent or lifecycle | Event | Required parameters when applicable |
| --- | --- | --- |
| CTA interaction | `cta_click` | `cta_id`, `cta_location`, `destination_type` |
| Contact intent | `contact_open` / `contact_click` | `channel`, `cta_location` |
| Lead outcome | `generate_lead` | `lead_type`, `source_surface` |
| Content selection | `select_content` | `content_type`, `content_id` |
| Download intent | `download_click` | `product_id`, `platform`, `cta_location` |
| Account outcome | `sign_up` / `login` | `method` |
| Commerce | `begin_checkout` / `purchase` / `refund` | product/value fields per GA4 commerce rules |
| Native navigation | `screen_view` | `screen_name`, `screen_class` |
| Onboarding | `tutorial_begin` / `tutorial_complete` | `tutorial_id` |

Use the detailed naming and CTA rules in `references/event-and-cta-standard.md`. Run `scripts/validate-ga4-map.mjs` against the plan before implementation.

### 3. Implement the smallest useful layer

For a Web or WebApp surface:

1. Load `gtag.js` once from the approved Measurement ID, normally through the framework's supported script component.
2. Set the document URL/title through the normal GA4 config path; do not manually duplicate automatic `page_view` unless there is a documented reason.
3. Add a small client-safe `trackEvent` wrapper with no secrets and a no-op fallback when `window.gtag` is unavailable.
4. Instrument meaningful CTA components with stable semantic IDs and locations. Prefer component-level instrumentation over a brittle global selector.
5. Keep success events at the point where the outcome is confirmed, not merely when the user opens a form or checkout page.

For Android, iOS, or macOS:

1. Use the Firebase/GA4 app stream and the platform SDK supported by the app's current release toolchain.
2. Map screen navigation to `screen_view`; map native-only actions to the same product event vocabulary used on the web.
3. Keep the app instance ID and SDK configuration appropriate for the platform. Never ship a Measurement Protocol secret.
4. Verify on a debug build/device with the platform's debug mechanism and GA4 DebugView.

### 4. Admin-console work with Codex Computer Use

Use the local Computer Use skill and the persistent `mcp__node_repl__js` session. The canonical pattern is:

```javascript
const state = await sky.get_app_state({app: "com.apple.Safari", disableDiff: true});
// Derive the current visible control from this state, then act.
```

For each click or typing action:

1. Capture the current UI state and derive a fresh `element_index` from visible text/role.
2. Prefer the semantic element index. Use coordinates only as a documented fallback, and record viewport coordinates plus visible context.
3. Execute one action, then capture the resulting state.
4. Append a structured row to the run log. The log is evidence, not a replacement for GA4 Realtime/DebugView verification.
5. Stop and surface a mismatch if the account, property, host, or stream shown by the UI is not the expected target.

Never use hidden browser APIs, DOM injection, or guessed stale indices to bypass the visible UI. The reusable action-log shape is in `references/computer-use-runbook.md`.

### 5. Verify and hand off

Acceptance requires both code/runtime and admin-console evidence:

- Production or an explicitly documented staging host renders exactly one GA4 tag with the expected ID.
- A clean page load appears as `page_view` in Realtime; a controlled CTA click appears as `cta_click` with the expected parameters in DebugView.
- A success path produces the intended outcome event once. Check for duplicate events, not just event presence.
- Enhanced Measurement is intentionally on or off and the decision is documented.
- Only true business outcomes are marked as key events.
- Cross-domain behavior is tested only where the journey actually crosses domains.
- Build/lint/runtime results are reported with pre-existing failures separated from changes made by this skill.

## Deliverables

Every run should leave:

1. An inventory/measurement plan.
2. A naming and event map, including CTA locations.
3. A code diff or explicit no-code decision.
4. A Computer Use action log for admin changes, including button labels/positions when used.
5. Realtime/DebugView evidence and unresolved follow-ups.

Use the public playbook repository's README as a shareable introduction, but keep account-specific IDs and internal project notes in the target workspace's private contract.
