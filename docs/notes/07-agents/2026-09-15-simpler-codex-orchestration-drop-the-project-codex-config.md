# Simpler Codex orchestration: drop the project .codex/config.toml

Melvin Vivas · X post · 2026-09-15 · [Open on X](https://x.com/melvindvivas/status/2099565617607246167)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** advanced

## Summary

Defining the root model in a project's .codex/config.toml stops you from picking a different orchestrator model or reasoning level. The creator removed the .codex/ folder entirely. Codex still respects the subagent model settings from the skill, and the orchestrator is whatever you pick in the main agent, such as Astra High.

## Key points

- Problem: a root model set in .codex/config.toml locks the orchestrator's model and reasoning level.
- New setup: no .codex/ folder in the project.
- Codex still applies the subagent model settings defined in the orchestrator skill.
- The orchestrator is the model picked in the main agent (e.g. Astra High), which is more flexible.
- Next step: test whether copying .codex/ into each project can be dropped entirely.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Codex Orchestrator Pattern: Astra/Sol Orchestrator with Luna Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105726702894936297) · [notes](../../notes/07-agents/2026-10-02-codex-orchestrator-pattern-astra-sol-orchestrator-with-luna.md)), Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../../notes/07-agents/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../../notes/07-agents/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../../notes/07-agents/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)) and 27 more

## Try this

- [ ] Remove the project-level .codex/ folder so you can pick the orchestrator model in the main agent.
- [ ] Keep the subagent model settings in the skill.
