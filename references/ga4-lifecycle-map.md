# GA4 lifecycle map

This reference expands the skill from tag installation into a complete measurement operating model. Read the relevant sections for the requested surface; do not load the whole file for a small event-name edit.

## Contents

- [1. Strategy and architecture](#1-strategy-and-architecture)
- [2. Collection surfaces](#2-collection-surfaces)
- [3. Event and schema governance](#3-event-and-schema-governance)
- [4. Privacy and data controls](#4-privacy-and-data-controls)
- [5. Integrations and APIs](#5-integrations-and-apis)
- [6. QA and observability](#6-qa-and-observability)
- [7. Reporting and optimization](#7-reporting-and-optimization)
- [8. Operations and change management](#8-operations-and-change-management)

## 1. Strategy and architecture

Start with business questions, not tags:

```text
business question
  -> user journey
  -> observable interaction or outcome
  -> event + parameter contract
  -> collection surface
  -> key event / audience / report destination
  -> owner, test, and retention decision
```

Document for each host or app:

- business model: marketing, lead generation, content, commerce, SaaS, community, or internal tool;
- primary journeys and success definitions;
- public host, app package/bundle ID, environment, release owner, and data owner;
- property and stream strategy;
- consent jurisdiction and data-sharing posture;
- key events, audiences, dashboards, export destinations, and open risks.

Default architecture:

- independent public Web host: independent Web data stream;
- one intentional multi-domain journey: same Web stream and configured cross-domain measurement;
- Android/iOS/macOS native app: Firebase app stream and platform SDK;
- desktop WebView: Web stream for the measured Web surface, plus a native bridge only for native-only actions;
- server/offline outcome: client tag or Firebase first, then Measurement Protocol as a supplement with secure server-side credentials.

Do not create a roll-up or shared property merely because products have the same owner. Share only when the reporting identity, consent, retention, access, and journey boundaries are intentionally compatible.

## 2. Collection surfaces

### Web and WebApp

- Choose one implementation owner: `gtag.js`, Google Tag Manager, or a framework integration that renders one Google tag.
- Preserve automatic collection and Enhanced Measurement unless the plan explicitly disables a feature.
- For SPAs, verify history/state changes create the intended page views without a duplicate manual `page_view`.
- Keep the Measurement ID in environment configuration when deployment differs by environment; the ID itself is not a secret, but secrets must never be placed beside it.
- Instrument component-level CTAs with stable semantic IDs, not translated text or CSS class guesses.

### Android, iOS, and macOS

- Register the Firebase app and use the platform-supported Analytics SDK.
- Map native navigation to `screen_view` and native-only actions to the shared event vocabulary.
- Verify debug builds on a real device or approved simulator with DebugView; separate debug traffic from production reporting where applicable.
- Treat app instance identifiers, user IDs, and advertising identifiers as privacy-sensitive data.

### Server-side and offline

- Use Measurement Protocol for offline conversions, server-confirmed outcomes, kiosks, or device contexts that cannot collect automatically.
- It supplements rather than replaces gtag, Tag Manager, or Firebase collection.
- Keep the `api_secret` on a controlled server or secret manager. Never put it in a Web bundle, mobile binary, public issue, skill, log, or README.
- Join events with the correct `client_id` or `app_instance_id` and verify timestamp, deduplication, consent, and attribution behavior.

## 3. Event and schema governance

For every event define:

| Field | Question |
| --- | --- |
| Name | Is it lower snake case, stable, non-PII, and within GA4 limits? |
| Meaning | What user action or confirmed outcome does it represent? |
| Trigger | Which code path or UI state fires it? |
| Parameters | Which dimensions are required, optional, or prohibited? |
| Identity | Is the event user-, session-, device-, or anonymous-scoped? |
| Destination | GA4 only, Google Ads, BigQuery, CRM, or another system? |
| Owner | Who reviews changes and reports anomalies? |
| QA | Which Realtime, DebugView, network, or API assertion proves it? |
| Lifecycle | Planned, implemented, verified, deprecated, or migrated? |

Use recommended events when their meaning matches. Use custom events only when automatic, Enhanced Measurement, or recommended events do not fit. Keep intent and outcome separate: `cta_click` is not `generate_lead`; `begin_checkout` is not `purchase`.

Register only useful custom dimensions and metrics, with a naming owner and archival plan. Avoid turning every UI label, URL, database key, or internal implementation detail into a permanent reporting field.

## 4. Privacy and data controls

Before production:

- complete a PII review for event names, parameters, URLs, User-ID, app identifiers, and server payloads;
- define Consent Mode defaults, consent banner/CMP integration, regional behavior, and verification evidence;
- choose data retention and deletion procedures appropriate to the product and jurisdiction;
- define internal traffic and developer/test traffic filters without accidentally excluding real users;
- review unwanted referrals, cookie settings, session timeout, Google Signals, personalized advertising, and data-sharing settings;
- document user access, property roles, least privilege, credential rotation, and incident response;
- record legal review as a dependency, not as an implicit assumption. This skill is not legal advice.

Do not encode email, phone, person name, postal address, access token, password, payment details, or a URL query string containing identifiers as analytics parameters.

## 5. Integrations and APIs

Choose integrations from a reporting need:

- Google Ads: key events, audiences, campaign attribution, and conversion import;
- Search Console: organic search query and landing-page context;
- BigQuery: event-level export, durable analysis, anomaly detection, and warehouse joins;
- Looker Studio or another BI layer: stakeholder dashboards and scheduled reporting;
- Firebase: app streams, mobile debugging, and app/web product journeys;
- CRM/commerce/offline systems: server-confirmed outcomes through a controlled integration;
- Google Analytics Admin API: account/property/stream configuration, access, links, change history, and governance automation;
- Google Analytics Data API: reports, realtime reports, funnels, audience exports, and programmatic dashboards;
- Measurement Protocol: server/offline supplementation, never a substitute for basic tagging.

API automation needs an authorization model, rate/quota plan, audit log, retry policy, dry-run mode, and secret manager. Prefer visible Computer Use for an authorized admin action when no approved API path exists; prefer an official API for repeatable read/reporting jobs when credentials and permissions are properly governed.

## 6. QA and observability

Test the full path, not only the script tag:

1. source/build inspection: exactly one loader and expected ID per surface;
2. production runtime: tag request, page URL/title, consent state, and no duplicate `page_view`;
3. Realtime: page load and controlled navigation;
4. DebugView: CTA parameters, recommended event parameters, and native screen events;
5. business outcome: accepted lead, successful signup, paid order, refund, or confirmed offline status;
6. data quality: no unexpected PII, duplicate events, self-referrals, `(not set)`, or test traffic contamination;
7. reporting: key event, audience, funnel, and dashboard query return the intended result;
8. regression: repeat the same assertions after framework, consent, routing, payment, or domain changes.

Use Tag Assistant, browser network inspection, platform logs, Firebase DebugView, GA4 DebugView, Realtime reports, and API validation where available. Record evidence with timestamps and environment; an event appearing once is not proof of correct deduplication.

## 7. Reporting and optimization

Separate:

- acquisition: source/medium, campaign, landing page, first user source;
- engagement: active users, engaged sessions, content selection, downloads, feature use;
- activation: onboarding completion, first successful action, account creation;
- conversion: qualified lead, checkout, purchase, subscription, refund;
- retention: returning usage, cohort behavior, churn or reactivation;
- product quality: errors, failed forms, abandoned flows, latency, and support contacts.

Mark only true business outcomes as key events. Build funnels from confirmed stages, compare by product/host/platform, and use annotations or a change log for releases and measurement changes. Do not optimize a campaign against a noisy click event when the actual goal is a confirmed outcome.

## 8. Operations and change management

Maintain a versioned measurement plan with:

- schema diff and migration notes;
- property/stream inventory;
- consent and privacy review status;
- integration/credential ownership;
- UI action log or API audit record;
- QA run and production timestamp;
- deprecation date for renamed events or parameters;
- rollback and incident procedure.

Review monthly during active growth and at every major release. Re-run host checks after domain changes, routing changes, checkout changes, consent/CMP changes, app release changes, or analytics configuration changes.
