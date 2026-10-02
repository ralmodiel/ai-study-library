# Pre-built Installable Profiles for Hermes Agent (hermes-profiles)

Melvin Vivas · X post · 2026-07-19 · [Open on X](https://x.com/melvindvivas/status/2078561353019838514)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator released hermes-profiles, a repo of ready-made profiles you can install into Hermes Agent, for example a 'legal-person' profile. For now you clone the repo and install a profile from a local folder; a later release will make profiles installable straight from their own repo. All of it was built with Cursor Cloud agents.

## Key points

- Clone the repo: git clone https://github.com/donvito/hermes-profiles
- Install a profile: hermes profile install ./hermes-profiles/profiles/<profile-name> --alias -y
- Example: hermes profile install ./hermes-profiles/profiles/legal-person --alias -y
- Profiles are pre-built agent personas/configs for Hermes Agent
- Planned: install each profile directly from its own repo
- The whole project was built with Cursor Cloud agents

## Resources mentioned

- [ ] **[hermes-profiles](https://github.com/donvito/hermes-profiles)** · repo · github.com · free  
  The creator's repo of pre-built profiles you can install into Hermes Agent.
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)) and 120 more

## Try this

- [ ] Clone hermes-profiles and install a profile, such as legal-person, into Hermes Agent
- [ ] Write your own profile for a specific domain persona and package it so others can install it
