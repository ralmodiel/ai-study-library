# Cutting Codex Subagent Costs: Luna Orchestrator, Astra Reviewer

Melvin Vivas · X post · 2026-09-07 · [Open on X](https://x.com/melvindvivas/status/2096837648166039631)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas suggests a cheaper Codex multi-agent setup for Plus users. Usage was high mainly because the expensive Astra model ran as the root orchestrator at high reasoning effort. His fix is to make GPT-5.6 Luna at max reasoning the orchestrator and use Astra only as a reviewer.

## Key points

- Heavy usage in the Astra-Luna subagents setup likely came from Astra running as the root orchestrator with reasoning effort set to high by default.
- Cheaper option: set the root orchestrator in config.toml to model = "gpt-5.6-luna" with model_reasoning_effort = "max".
- Keep the stronger Astra model only for the reviewer role, so it runs less often.
- Pick each role's model and reasoning effort on purpose, because these settings drive cost and usage limits.
- The creator said a guide on how to measure usage was coming.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Codex Orchestrator Pattern: Astra/Sol Orchestrator with Luna Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105726702894936297) · [notes](../../notes/07-agents/2026-10-02-codex-orchestrator-pattern-astra-sol-orchestrator-with-luna.md)), Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../../notes/07-agents/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../../notes/07-agents/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../../notes/07-agents/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)) and 27 more

## Try this

- [ ] If usage is high on a Plus plan, set the root orchestrator to gpt-5.6-luna with model\_reasoning\_effort = "max" and keep Astra as the reviewer.
- [ ] Check what reasoning effort your orchestrator model uses by default.
