# Agent adapters

The core package stays in `skill/SKILL.md`. These small adapters tell each runtime where to load it and which parts of the workflow are available. They do not grant browser, shell, Google Analytics, or API permissions.

| Adapter | File | Runtime surface |
| --- | --- | --- |
| Codex | `skill/SKILL.md` + `skill/agents/openai.yaml` | Native Agent Skills and Codex Computer Use in the reference environment |
| Claude Code | [`claude-code/README.md`](claude-code/README.md) | `.claude/skills/<name>/SKILL.md` |
| Cursor | [`cursor/ga4-measurement.mdc`](cursor/ga4-measurement.mdc) | `.cursor/rules/*.mdc` |
| TRAE | [`trae/project_rules.md`](trae/project_rules.md) | project rules/context adapter; verify current import support |
| OpenClaw | [`openclaw/README.md`](openclaw/README.md) | workspace/personal/managed skills with allowlists |
| Hermes Agent | [`hermes/README.md`](hermes/README.md) | `skills/` or `optional-skills/` with Hermes metadata |
| CodeBuddy | [`codebuddy/README.md`](codebuddy/README.md) | `.codebuddy/skills/` and plugin surfaces |

Use the adapter that matches the runtime, then keep the same measurement plan, event contract, privacy controls, and QA evidence.
