# Hermes Agent adapter

Hermes Agent supports built-in and optional skill surfaces and uses additional metadata such as `version`, `author`, `license`, `platforms`, and `metadata.hermes`. Package the portable workflow under `skills/` for a lightweight default skill or `optional-skills/` when heavier tools or permissions are required.

Add Hermes-specific frontmatter in the adapter package rather than changing the portable core. Keep the same measurement plan, privacy contract, API secret rules, and QA evidence.

Official reference: [Hermes Agent skill guidance](https://github.com/NousResearch/hermes-agent/blob/main/AGENTS.md)
