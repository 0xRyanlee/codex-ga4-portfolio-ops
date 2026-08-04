# GA4 measurement adapter for TRAE

For GA4 implementation or audit tasks, load `skill/SKILL.md` plus the relevant `references/` file. Keep the portable event contract and use the current TRAE rules/MCP/Agent Skills import path for the installed version.

Required behaviors:

- inspect the real host and existing tags before changing a stream;
- use lower_snake_case events and stable CTA parameters;
- separate intent events from confirmed business outcomes;
- review consent, PII, data retention, internal traffic, and cross-domain configuration;
- verify Realtime/DebugView and duplicate tags;
- never put an API secret in source, a mobile bundle, a skill, or a public repository.

If the current TRAE runtime cannot control a visible browser or call an approved GA4 API, stop at planning/code changes and report the missing verification surface.
