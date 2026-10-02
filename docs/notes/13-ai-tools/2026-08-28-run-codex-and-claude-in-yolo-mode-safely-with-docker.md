# Run Codex and Claude in YOLO Mode Safely with Docker Sandboxes

Melvin Vivas · X post · 2026-08-28 · [Open on X](https://x.com/melvindvivas/status/2093335392015794596)

**Topics:** AI Dev Tools & Productivity, AI Safety, Security & Guardrails, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

The creator tries Docker Sandboxes (the sbx CLI) to run coding agents in YOLO mode, meaning without permission prompts, inside an isolated sandbox. The post gives install commands for Mac and Windows and the commands to launch Codex or Claude.

## Key points

- Docker Sandboxes lets you run agents in YOLO mode (no approval prompts) safely isolated from your machine.
- Mac install: brew trust docker/tap && brew install docker/tap/sbx
- Windows install: winget install Docker.sbx
- Run Codex: sbx run codex
- Run Claude: sbx run claude

## Resources mentioned

- [ ] **[Docker Sandboxes](https://www.docker.com/products/docker-sandboxes/)** · tool · docker.com · free  
  Local microVM-isolated sandboxes for safely running AI coding agents on your laptop.  
  Also in: Docker Sandboxes for Running Coding Agents Locally (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105612765323055169) · [notes](../../notes/07-agents/2026-10-01-docker-sandboxes-for-running-coding-agents-locally.md)), Docker Cloud Sandboxes: Run AI Agents in Local or Cloud microVMs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103310977878073835) · [notes](../../notes/07-agents/2026-09-25-docker-cloud-sandboxes-run-ai-agents-in-local-or-cloud.md)), Docker Sandboxes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093363509405044767) · [notes](../../notes/13-ai-tools/2026-08-28-docker-sandboxes.md)), Docker Sandboxes Include an Interactive Dashboard (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093337808656339425) · [notes](../../notes/13-ai-tools/2026-08-28-docker-sandboxes-include-an-interactive-dashboard.md)) and 1 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] Install sbx: brew trust docker/tap && brew install docker/tap/sbx (Mac) or winget install Docker.sbx (Windows).
- [ ] Start an agent in YOLO mode with 'sbx run codex' or 'sbx run claude'.
