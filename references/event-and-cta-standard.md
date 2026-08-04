# GA4 event and CTA standard

This is the reusable v0.1 contract. Product-specific plans may add events, but they should not rename the baseline without documenting a migration.

## Event names

- Use lower snake case: `cta_click`, not `ctaClick`, `CTA_Click`, or a UI label.
- Keep names at 40 characters or fewer.
- Do not use reserved prefixes (`firebase_`, `google_`, `ga_`) or direct identifiers.
- Prefer one event for one business meaning. Do not overload `button_click` with unrelated outcomes.
- Use GA4 recommended events where the meaning matches: `sign_up`, `login`, `generate_lead`, `begin_checkout`, `purchase`, `refund`, `select_content`, and `tutorial_complete`.
- Use custom events only when the recommended vocabulary does not express the action.

## Baseline parameters

| Parameter | Meaning | Example |
| --- | --- | --- |
| `cta_id` | Stable semantic control ID | `hero_start_trial` |
| `cta_location` | Component or page region | `home_hero`, `pricing_monthly` |
| `destination_type` | Where the CTA goes | `internal`, `external`, `email`, `download`, `anchor` |
| `product_id` | Stable product identifier | `mindset` |
| `platform` | Normalized platform value | `macos`, `windows`, `android`, `web` |
| `channel` | Contact channel | `email`, `whatsapp`, `telegram` |
| `method` | Auth or signup method | `email`, `google`, `apple` |

Avoid raw button copy, full query strings, email addresses, phone numbers, names, access tokens, or database IDs that can identify a person. If a product needs an internal ID, use a non-PII opaque identifier and document retention/aggregation needs.

## CTA design

Every measurable CTA should have:

```text
cta_id          stable across copy/localization changes
cta_location    page or component region
destination_type internal | external | email | download | anchor
```

Good examples:

```javascript
trackEvent("cta_click", {
  cta_id: "hero_start_trial",
  cta_location: "home_hero",
  destination_type: "internal",
});

trackEvent("download_click", {
  product_id: "sparkie",
  platform: "macos",
  cta_location: "sparkie_download_hero",
});
```

Do not call a click `generate_lead` unless the lead has actually been submitted and accepted. A form-open event is an intent; a successful server response is an outcome.

## Surface mapping

- Web/WebApp: `gtag.js` or the framework integration, one loader per runtime surface.
- Android/iOS/macOS: Firebase app stream and native SDK; use `screen_view` for native navigation.
- Desktop WebView: begin with the web stream only if the host is the measured web experience. Add native events only for actions not represented in the WebView.
- Cross-domain: configure only when a single journey really moves between domains; do not merge unrelated products merely because one person owns them.
