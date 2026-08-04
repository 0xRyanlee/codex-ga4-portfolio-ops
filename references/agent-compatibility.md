# Agent runtime compatibility and adapters

The canonical package is an Agent Skills-style directory with `SKILL.md`, optional `scripts/`, and `references/`. The procedure is platform-neutral; the admin UI tool and installation path are runtime-specific.

## Support levels

| Runtime | Level | Recommended integration | What this package can do |
| --- | --- | --- | --- |
| OpenAI Codex | Native | `$CODEX_HOME/skills/codex-ga4-portfolio-ops` | Full workflow; in this environment Computer Use uses the visible Safari session and `mcp__node_repl__js`. |
| Claude Code | Native Agent Skills | `.claude/skills/codex-ga4-portfolio-ops/SKILL.md` | Full code, docs, scripts, and API workflow; use the available browser/tool connector for visible GA4 admin work. |
| OpenClaw | Native Agent Skills | workspace `skills/`, `.agents/skills/`, or `~/.openclaw/skills/` | Load the same `SKILL.md`; use agent allowlists, sandboxing, and skill verification before enabling actions. |
| Hermes Agent | Native with metadata adapter | `skills/` or `optional-skills/` | Copy the core workflow and add Hermes `version`, `platforms`, and `metadata.hermes` fields when packaging. |
| Cursor | Rules/context adapter | `.cursor/rules/ga4-measurement.mdc` | Convert the core guardrails to Project Rules, then explicitly reference the repo `SKILL.md` and scripts. |
| TRAE | Rules/MCP adapter | project rules or supported Agent Skills import | Use the same event contract and references; verify the current TRAE import path and MCP/browser capabilities. |
| CodeBuddy | Skills adapter | `.codebuddy/skills/codex-ga4-portfolio-ops/SKILL.md` | Use the core package; keep plugin/CLI-specific manifests separate from the portable skill. |
| VS Code / Copilot / OpenCode / Goose / Amp | Portable adapter | tool-specific skills or rules directory | Use the standard package where supported, otherwise expose the references through project rules or a prompt command. |

“Supported” means the package can be adapted and the workflow has a documented path. It does not claim an official partnership, native Computer Use access, or identical tool permissions for every product.

## Runtime selection

1. If the agent can discover Agent Skills, install/copy the package and run the validator.
2. If it only loads project rules, create a small adapter that points to `SKILL.md`, `references/ga4-lifecycle-map.md`, and the validator.
3. If it has browser Computer Use, use its visible browser API and record an action log; do not assume the Codex `sky` object exists.
4. If it has only shell/API access, use official Google Analytics APIs with explicit credentials and dry-run/audit controls; do not pretend the UI was tested.
5. If it has neither browser nor API access, limit the run to planning, code instrumentation, schema validation, and a handoff checklist.

## Model and capability vocabulary

This workflow is model-agnostic and can be reasoned about by GPT, Claude, Gemini, DeepSeek, Qwen, Llama, Mistral, Grok, Gemma, and other large language models. Relevant capability terms include agentic coding, reasoning models, multimodal/vision models, tool calling, function calling, MCP, browser automation, Computer Use, shell execution, code editing, web search, RAG, context engineering, memory, subagents, structured outputs, JSON schema, evaluation, tracing, and human-in-the-loop approval.

Model names and availability change. Use the vendor's current model catalog at invocation time; the skill does not hard-code a model or claim that a model has a specific tool permission.
