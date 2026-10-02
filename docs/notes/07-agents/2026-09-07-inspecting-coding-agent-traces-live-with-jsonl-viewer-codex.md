# Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code)

Melvin Vivas · X video post · 2026-09-07 · 0:21 · 763 views · [Open on X](https://x.com/melvindvivas/status/2096783580596989985)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

This short post (a silent video) shows JSONL Viewer v1.3.2, a tool that streams the session trace files (JSONL logs) written by coding agents like Codex, Claude Code, Pi and Hermes and displays them live. The point is observability: Codex's UI doesn't show detailed activity, but its trace logs do. Reading these traces lets you see each step, tool call and message the agent makes behind the scenes.

## Key points

- Coding agents such as Codex, Claude Code, Pi and Hermes record their sessions as JSONL trace files (one JSON event per line).
- Codex's UI hides detailed activity, so reading its raw traces is the way to see what it is actually doing.
- JSONL Viewer v1.3.2 added live streaming of trace views, so you can watch an agent's steps as they happen, not only after the run.
- Supported agents in v1.3.2: Codex, Claude Code, Pi and Hermes.
- Use cases: understanding agent loops, debugging unexpected behavior, and seeing which tool calls the agent makes.

## Resources mentioned

- [ ] **[donvito/jsonl-viewer](https://github.com/donvito/jsonl-viewer)** · repo · github.com · free  
  Open-source tool for viewing and editing .jsonl files (fine-tuning datasets) and agent traces from Codex, Claude Code, Pi and Hermes.  
  Also in: jsonl-viewer: Live Traces for Codex Orchestrator and Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099753117504172186) · [notes](../../notes/13-ai-tools/2026-09-15-jsonl-viewer-live-traces-for-codex-orchestrator-and.md)), See live Codex traces with the jsonl-viewer tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099750877653618700) · [notes](../../notes/13-ai-tools/2026-09-15-see-live-codex-traces-with-the-jsonl-viewer-tool.md)), Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../../notes/13-ai-tools/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), Analyzing Codex Traces with jsonl-viewer (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097582799448580323) · [notes](../../notes/13-ai-tools/2026-09-09-analyzing-codex-traces-with-jsonl-viewer.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../../notes/07-agents/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../../notes/07-agents/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../../notes/07-agents/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)), Running a Local Ornith Model as the Backend for a Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090390994168734063) · [notes](../../notes/07-agents/2026-08-20-running-a-local-ornith-model-as-the-backend-for-a-hermes.md)) and 55 more

## Try this

- [ ] Install JSONL Viewer from the donvito/jsonl-viewer GitHub repo.
- [ ] Open the live trace of a Codex or Claude Code session and follow the agent's steps and tool calls as they happen.
