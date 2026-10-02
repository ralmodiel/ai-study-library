# Codex Orchestrator Profiles: Astra/Sol Lead, Luna Subagents

Melvin Vivas · X post · 2026-09-11 · [Open on X](https://x.com/melvindvivas/status/2098295126544224729)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator shares an open-source setup for Codex. Astra or Sol acts as the orchestrator, and Luna models run as subagents. Profiles assign models and reasoning levels to roles (like reviewer), and you can ask your agent to create new combinations.

## Key points

- Use Astra or Sol as the orchestrator and Luna for cheaper subagents.
- The default profiles cover Codex Pro and Plus plans.
- You can ask your agent to generate new profile combinations.
- The creator is considering setting the Pro Astra reviewer to high/xhigh reasoning.
- Even Astra on low has caught issues in code review so far.
- Fork the repo and adapt it to your plan and workflow.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Codex Orchestrator Pattern: Astra/Sol Orchestrator with Luna Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105726702894936297) · [notes](../../notes/07-agents/2026-10-02-codex-orchestrator-pattern-astra-sol-orchestrator-with-luna.md)), Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../../notes/07-agents/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../../notes/07-agents/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../../notes/07-agents/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)) and 27 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Fork codex-astra-luna-orchestrator and customize its profiles.
- [ ] Ask your agent to create new model/reasoning profile combinations.
- [ ] Consider a higher reasoning level for the reviewer role.
- [ ] Build your own multi-model orchestrator profiles for Codex, with a strong model as lead and cheaper subagents.
