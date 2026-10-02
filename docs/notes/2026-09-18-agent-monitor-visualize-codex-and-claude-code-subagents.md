# Agent Monitor: Visualize Codex and Claude Code Subagents, Traces and Costs

Melvin Vivas · X video post · 2026-09-18 · 0:04 · 3,433 views · [Open on X](https://x.com/melvindvivas/status/2100641053909143757)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas shares Agent Monitor, an open-source GitHub project that shows what subagents are doing when you run OpenAI Codex or Claude Code. Besides showing the subagents, it has an advanced traces view, a breakdown of token use, and cost tracking. The post is a short demo video with no speech, and it points to the repo.

## Key points

- Agent Monitor (github.com/donvito/agent-monitor) shows the subagents that OpenAI Codex and Claude Code start.
- It has an advanced traces view, so you can see what each subagent did, step by step.
- It breaks down token use, so you can see which agents or steps use the most tokens.
- It also tracks cost, which helps you keep coding-agent spending under control.
- This kind of observability for multi-agent coding tools makes subagent work easier to debug and tune.
- The post is only a 4-second demo video with no narration. Setup and usage details are in the repo README.

## Resources mentioned

- [ ] **[donvito/agent-monitor](https://github.com/donvito/agent-monitor)** · repo · github.com · free  
  Open-source dashboard that visualizes Codex and Claude Code subagents, with a traces view, a token breakdown and estimated cost.  
  Also in: Monitor Codex and Claude Code Subagents with agent-monitor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103143351566643398) · [notes](../notes/2026-09-24-monitor-codex-and-claude-code-subagents-with-agent-monitor.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)), Agent Monitor: Visualize Coding-Agent Subagents, Traces and Costs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100192480864157709) · [notes](../notes/2026-09-16-agent-monitor-visualize-coding-agent-subagents-traces-and.md)), Agent Monitor: Per-Model Usage Stats for Codex and Claude Code Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100167114841833882) · [notes](../notes/2026-09-16-agent-monitor-per-model-usage-stats-for-codex-and-claude.md)) and 2 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more

## Try this

- [ ] Look at the donvito/agent-monitor repo and follow its README to connect it to your Codex or Claude Code sessions.
- [ ] Use the traces, token and cost views to see where your subagent workflows use the most tokens and money.
