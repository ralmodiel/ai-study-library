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
  Also in: Codex Orchestrator Pattern: Astra/Sol Orchestrator with Luna Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105726702894936297) · [notes](../../notes/07-agents/2026-10-02-codex-orchestrator-pattern-astra-sol-orchestrator-with-luna.md)), Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../../notes/07-agents/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../../notes/07-agents/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../../notes/07-agents/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)) and 27 more
- [ ] **[Devin Fusion](https://cognition.com/blog/devin-fusion)** · tool · cognition.com · free  
  Cognition's write-up of the approach and architecture behind Devin Fusion, its multi-model routing for agentic coding.  
  Also in: Pointer: How Devin Fusion Works (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102297372223258716) · [notes](../../notes/07-agents/2026-09-22-pointer-how-devin-fusion-works.md)), Devin Fusion: Multi-Model Routing to Cut Agentic Coding Costs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102248561002110988) · [notes](../../notes/09-llmops/2026-09-22-devin-fusion-multi-model-routing-to-cut-agentic-coding-costs.md)), Devin Fusion: A Hybrid-Model Harness for Agentic Coding (Melvin Vivas on [X](https://x.com/melvindvivas/status/2072033826784862287) · [notes](../../notes/13-ai-tools/2026-07-01-devin-fusion-a-hybrid-model-harness-for-agentic-coding.md)), Devin Fusion: A Hybrid-Model Harness for Agentic Coding (Melvin Vivas on [X](https://x.com/melvindvivas/status/2071646266522734844) · [notes](../../notes/07-agents/2026-06-30-devin-fusion-a-hybrid-model-harness-for-agentic-coding.md))
- [ ] **[Claude Advisor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool)** · docs · platform.claude.com · free  
  Official documentation for Anthropic's Advisor tool, where an advisor model guides cheaper executor models.  
  Also in: Claude Advisor Pattern: Routing Work to Cheaper Executor Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102298561413349447) · [notes](../../notes/07-agents/2026-09-22-claude-advisor-pattern-routing-work-to-cheaper-executor.md))
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Read about the Devin Fusion and Claude Advisor patterns and compare them.
- [ ] Study the Astra-Luna orchestrator repo.
- [ ] Build a more advanced orchestration skill that combines the best parts of the Fusion, Advisor and orchestrator/subagent patterns, possibly on the Pi harness.
