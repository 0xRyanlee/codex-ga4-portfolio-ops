# GA4 and agent workflow glossary

## GA4 terms

| Term | Plain-language meaning |
| --- | --- |
| Google Analytics 4 (GA4) | Google's event-based analytics product for Web and app measurement. |
| Account | The top-level administrative container that can hold properties and users. |
| Property | A reporting and configuration boundary for an app, website, product, or portfolio slice. |
| Data stream | A Web, iOS, or Android collection source inside a property. |
| Measurement ID | The public Web tag identifier, usually shaped like `G-XXXXXXXXXX`; it is not an API secret. |
| Event | A named interaction or outcome, such as `cta_click`, `sign_up`, or `purchase`. |
| Parameter | Context attached to an event, such as `cta_location`, `platform`, or `value`. |
| Recommended event | Google's predefined event vocabulary for common business meanings. |
| Custom event | A product-specific event used when automatic, Enhanced Measurement, or recommended events do not fit. |
| Enhanced Measurement | Optional automatic Web events such as scrolls, outbound clicks, site search, and file downloads. |
| Key event | A business outcome selected for reporting and optimization; not every interaction should be one. |
| Custom dimension / metric | A registered reporting field derived from event or user data. |
| `gtag.js` | Google's client-side tag library for Web collection and configuration. |
| Google Tag Manager (GTM) | A tag-management layer that can deploy Google and other tags through containers and triggers. |
| Data layer | A structured browser object used to pass application state to a tag manager. |
| Consent Mode | Google tag behavior that respects consent states such as `analytics_storage` and `ad_storage`. |
| PII | Personally identifiable information such as email, phone, name, address, password, or payment data; do not send it to GA4. |
| `client_id` | A Web identifier used to associate events from the same browser/device context. |
| `app_instance_id` | An app identifier used by Firebase/GA4 app measurement. |
| DebugView | GA4's event-level debugging surface for controlled test traffic. |
| Realtime | A report for recently collected activity and events. |
| Cross-domain measurement | A configuration that preserves the journey when a user intentionally moves between domains. |
| Unwanted referral | A domain that should not become a new referral source in attribution. |
| UTM | Campaign query parameters such as `utm_source`, `utm_medium`, and `utm_campaign`. |
| Attribution | The method used to assign credit for a key event across marketing touchpoints. |
| Audience | A defined group of users used for analysis or, where permitted, advertising activation. |
| BigQuery Export | Event-level export from GA4 to Google Cloud BigQuery for warehouse analysis. |
| Data API | Google's API for programmatic GA4 reports, Realtime, funnels, and audience exports. |
| Admin API | Google's API for programmatic GA4 configuration and governance. |
| Measurement Protocol | A server-side HTTP event collection supplement for offline or server-confirmed interactions. |

## Agent terms

| Term | Plain-language meaning |
| --- | --- |
| Agent Skill | A portable `SKILL.md` package that gives an AI agent repeatable instructions, scripts, and references. |
| Agent Skills specification | The open file format and progressive-disclosure model used by a growing set of agent clients. |
| Rules adapter | A platform-specific instruction file, such as Cursor Project Rules or TRAE rules, that points to the portable workflow. |
| MCP | Model Context Protocol, a way to connect an agent to tools and data sources; it is a capability bridge, not a measurement schema. |
| Tool calling / function calling | Structured invocation of an external function by a model or agent. |
| Computer Use | Visible interaction with a graphical interface through a browser or desktop control surface. |
| Cursor flow | A stored route and state-transition recipe with re-derived locators and conditional coordinate fallbacks. |
| AEO | Answer Engine Optimization: clear, direct, structured answers that retrieval and answer systems can quote accurately. |
| RAG | Retrieval-augmented generation: grounding an agent response in retrieved documents or data. |
| Context engineering | Designing the files, rules, references, tools, and state an agent sees for a task. |
| Human-in-the-loop | A deliberate approval or review boundary before an external or irreversible action. |
