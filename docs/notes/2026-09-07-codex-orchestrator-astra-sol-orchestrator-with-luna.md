# Codex Orchestrator: Astra/Sol Orchestrator with Luna Subagents

Melvin Vivas · X post · 2026-09-07 · [Open on X](https://x.com/melvindvivas/status/2096869975869018166)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas updated his open-source setup script for running multiple agents in Codex. Astra or Sol acts as the orchestrator and Luna runs the subagents. A new option for Codex Plus users makes the orchestrator default to Luna max, so you avoid burning scarce Astra credits.

## Key points

- Pattern: use a stronger model (Astra or Sol) as the orchestrator and a cheaper model (Luna) for worker subagents.
- On the Plus plan, the orchestrator now defaults to Luna max to save usage limits.
- For pure Luna execution, you also have to change the reviewer agent to Luna.
- The setup script in the repo has been updated with the Plus option.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../notes/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../notes/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../notes/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)) and 26 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] If you're on Codex Plus and want pure Luna execution, change the reviewer to Luna too.
- [ ] Re-run the updated setup script from the repo.
- [ ] Set up a Codex orchestrator/worker/reviewer agent system that mixes expensive and cheap models to manage cost.
