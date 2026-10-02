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
  Also in: jsonl-viewer: Live Traces for Codex Orchestrator and Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099753117504172186) · [notes](../notes/2026-09-15-jsonl-viewer-live-traces-for-codex-orchestrator-and.md)), See live Codex traces with the jsonl-viewer tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099750877653618700) · [notes](../notes/2026-09-15-see-live-codex-traces-with-the-jsonl-viewer-tool.md)), Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../notes/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), Analyzing Codex Traces with jsonl-viewer (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097582799448580323) · [notes](../notes/2026-09-09-analyzing-codex-traces-with-jsonl-viewer.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)), Running a Local Ornith Model as the Backend for a Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090390994168734063) · [notes](../notes/2026-08-20-running-a-local-ornith-model-as-the-backend-for-a-hermes.md)) and 55 more

## Try this

- [ ] Install JSONL Viewer from the donvito/jsonl-viewer GitHub repo.
- [ ] Open the live trace of a Codex or Claude Code session and follow the agent's steps and tool calls as they happen.
