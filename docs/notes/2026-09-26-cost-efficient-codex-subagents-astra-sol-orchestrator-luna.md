# Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers

Melvin Vivas · X post · 2026-09-26 · [Open on X](https://x.com/melvindvivas/status/2103516418117718313)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

How to set up subagents in Codex without using up usage limits too fast. Set each subagent's model and reasoning level explicitly. Use a strong model (Astra or Sol) to orchestrate and a lighter model (Luna) for the subagents. The creator's GitHub repo has a ready-made setup.

## Key points

- Set each subagent's model and reasoning level explicitly instead of relying on defaults.
- Use Astra or Sol as the orchestrator model.
- Use Luna for the subagents that do the work.
- If you leave defaults in place, subagents burn through your usage limits fast.
- The donvito/codex-astra-luna-orchestrator repo has a ready-made version of this pattern.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../notes/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../notes/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Codex orchestrator + subagents setup with configurable profiles (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100098330407936019) · [notes](../notes/2026-09-16-codex-orchestrator-subagents-setup-with-configurable.md)) and 26 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Set the model and reasoning level explicitly for every Codex subagent.
- [ ] Use Astra or Sol to orchestrate and Luna for subagents.
- [ ] Try the codex-astra-luna-orchestrator repo.
