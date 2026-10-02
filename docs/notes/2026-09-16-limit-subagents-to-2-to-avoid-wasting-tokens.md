# Limit subagents to 2 to avoid wasting tokens

Melvin Vivas · X post · 2026-09-16 · [Open on X](https://x.com/melvindvivas/status/2100093016644169951)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The post quotes a claim that running more than 2 subagents at once mostly burns tokens with no quality gain, because agents keep double-checking each other's work. The creator's Codex Astra orchestrator + Luna subagents setup now includes profiles capped at 2 subagents.

## Key points

- Quoted claim: more than 2 concurrent subagents usually burns tokens for no quality gain
- Reason: agents don't trust each other, so they re-check each other's work
- codex-astra-luna-orchestrator now has profiles with a maximum of 2 subagents
- Pick a max-2-subagents profile when running the setup

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../notes/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../notes/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../notes/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)) and 26 more

## Try this

- [ ] Choose a profile with at most 2 subagents when running the orchestrator setup
- [ ] Cap concurrent subagents to avoid wasting tokens
