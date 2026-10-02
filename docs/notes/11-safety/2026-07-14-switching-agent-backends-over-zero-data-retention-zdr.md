# Switching Agent Backends Over Zero Data Retention (ZDR) Concerns

Melvin Vivas · X post · 2026-07-14 · [Open on X](https://x.com/melvindvivas/status/2076749828839887176)

**Topics:** AI Safety, Security & Guardrails, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator moved his Hermes agent from Grok (via OAuth) to Codex. He will stay on Codex until it is clear whether Grok OAuth usage gets zero data retention (ZDR). The lesson: check a provider's data-retention policy before sending it personal data through an agent.

## Key points

- ZDR (zero data retention) means the provider does not store your prompts and outputs
- Logging in to a model through consumer OAuth may not come with the same data guarantees as an enterprise API
- If retention terms are unclear, switch your agent to another backend for now
- Agents that can swap model backends make this kind of switch easy

## Resources mentioned

- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../../notes/07-agents/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../../notes/07-agents/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../../notes/07-agents/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../../notes/07-agents/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Grok](https://x.com/grok)** · tool · x.com · free  
  xAI's AI assistant. Here it is used as a terminal coding agent that also runs with the 'agent' alias.  
  Also in: OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../../notes/07-agents/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Grok Team Bots: Shared AI Teammates in Slack and Grok (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104743446116552838) · [notes](../../notes/07-agents/2026-09-29-grok-team-bots-shared-ai-teammates-in-slack-and-grok.md)), Cue by Manus: A New Rival to the Grok Bot on X (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104635050809807248) · [notes](../../notes/13-ai-tools/2026-09-29-cue-by-manus-a-new-rival-to-the-grok-bot-on-x.md)), How to Grow an X (Twitter) Account: 9 Practical Tips from Melvin Vivas (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103672859919110290) · [notes](../../notes/15-career/2026-09-26-how-to-grow-an-x-twitter-account-9-practical-tips-from.md)) and 14 more

## Try this

- [ ] Check each model provider's data retention/ZDR terms before using it with personal data in an agent
