# Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor

Melvin Vivas · X post · 2026-09-22 · [Open on X](https://x.com/melvindvivas/status/2102300798768005283)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, AI System Design & Architecture · **Level:** advanced

## Summary

The creator compares his Codex Astra-Luna orchestration skill with Devin's Fusion pattern and Anthropic's Advisor pattern. In his skill, a strong model (Astra or Sol) orchestrates and a cheaper model (Luna) runs the subagents. He plans to combine the best parts of these patterns and is thinking about using the Pi harness to experiment.

## Key points

- Orchestrator/worker pattern: a strong, expensive model plans and hands off work, and cheaper models carry it out as subagents.
- The codex-astra-luna-orchestrator repo uses Astra or Sol as the orchestrator and Luna for subagents in Codex.
- Devin Fusion and the Claude Advisor tool solve the same problem in different ways and are worth comparing.
- A customizable agent harness (Pi) could be used to try out mixed patterns. The creator asks whether Pi supports subagents natively.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../notes/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../notes/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../notes/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)), Codex orchestrator + subagents setup with configurable profiles (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100098330407936019) · [notes](../notes/2026-09-16-codex-orchestrator-subagents-setup-with-configurable.md)) and 26 more
- [ ] **[Devin Fusion](https://cognition.com/blog/devin-fusion)** · tool · cognition.com · free  
  Cognition's write-up of the approach and architecture behind Devin Fusion, its multi-model routing for agentic coding.  
  Also in: Pointer: How Devin Fusion Works (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102297372223258716) · [notes](../notes/2026-09-22-pointer-how-devin-fusion-works.md)), Devin Fusion: Multi-Model Routing to Cut Agentic Coding Costs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102248561002110988) · [notes](../notes/2026-09-22-devin-fusion-multi-model-routing-to-cut-agentic-coding-costs.md)), Devin Fusion: A Hybrid-Model Harness for Agentic Coding (Melvin Vivas on [X](https://x.com/melvindvivas/status/2072033826784862287) · [notes](../notes/2026-07-01-devin-fusion-a-hybrid-model-harness-for-agentic-coding.md)), Devin Fusion: A Hybrid-Model Harness for Agentic Coding (Melvin Vivas on [X](https://x.com/melvindvivas/status/2071646266522734844) · [notes](../notes/2026-06-30-devin-fusion-a-hybrid-model-harness-for-agentic-coding.md))
- [ ] **[Claude Advisor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool)** · docs · platform.claude.com · free  
  Official documentation for Anthropic's Advisor tool, where an advisor model guides cheaper executor models.  
  Also in: Claude Advisor Pattern: Routing Work to Cheaper Executor Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102298561413349447) · [notes](../notes/2026-09-22-claude-advisor-pattern-routing-work-to-cheaper-executor.md))
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)), Agent Monitor: Track Token Usage and Cost for Codex and Claude Code Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100152172549959815) · [notes](../notes/2026-09-16-agent-monitor-track-token-usage-and-cost-for-codex-and.md)) and 33 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Read about the Devin Fusion and Claude Advisor patterns and compare them.
- [ ] Study the Astra-Luna orchestrator repo.
- [ ] Build a more advanced orchestration skill that combines the best parts of the Fusion, Advisor and orchestrator/subagent patterns, possibly on the Pi harness.
