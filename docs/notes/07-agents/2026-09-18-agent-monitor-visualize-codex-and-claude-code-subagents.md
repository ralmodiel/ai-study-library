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
  Also in: Monitor Codex and Claude Code Subagents with agent-monitor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103143351566643398) · [notes](../../notes/07-agents/2026-09-24-monitor-codex-and-claude-code-subagents-with-agent-monitor.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../../notes/09-llmops/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)), Agent Monitor: Visualize Coding-Agent Subagents, Traces and Costs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100192480864157709) · [notes](../../notes/07-agents/2026-09-16-agent-monitor-visualize-coding-agent-subagents-traces-and.md)), Agent Monitor: Per-Model Usage Stats for Codex and Claude Code Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100167114841833882) · [notes](../../notes/09-llmops/2026-09-16-agent-monitor-per-model-usage-stats-for-codex-and-claude.md)) and 2 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] Look at the donvito/agent-monitor repo and follow its README to connect it to your Codex or Claude Code sessions.
- [ ] Use the traces, token and cost views to see where your subagent workflows use the most tokens and money.
