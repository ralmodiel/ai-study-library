# Codex orchestrator/subagents setup: Astra or Sol + Luna

Melvin Vivas · X post · 2026-09-11 · [Open on X](https://x.com/melvindvivas/status/2098250571472072756)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** advanced

## Summary

The creator updated his open-source setup for Codex. A stronger model (Astra or Sol) acts as the orchestrator and hands work to cheaper Luna subagents. The code now supports profiles, so you can easily switch between different orchestrator/subagent configurations.

## Key points

- Pattern: a capable model orchestrates the task and delegates subtasks to cheaper subagent models.
- Astra or Sol is used as the orchestrator and Luna for the subagents inside Codex.
- The repo now uses profiles to manage different orchestrator/subagent config setups.
- Profiles make it easy to swap model combinations without rewriting the config.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Codex Orchestrator Pattern: Astra/Sol Orchestrator with Luna Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105726702894936297) · [notes](../../notes/07-agents/2026-10-02-codex-orchestrator-pattern-astra-sol-orchestrator-with-luna.md)), Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../../notes/07-agents/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../../notes/07-agents/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../../notes/07-agents/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)) and 27 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Clone the codex-astra-luna-orchestrator repo and try different orchestrator/subagent profiles.
- [ ] Set up a multi-agent Codex workflow where an expensive orchestrator model delegates work to cheap subagent models, with switchable config profiles.
