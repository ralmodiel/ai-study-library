# Running Qwen 3.6 35B locally on an RTX 3090 for agent tool calling

Melvin Vivas · X post · 2026-08-03 · [Open on X](https://x.com/melvindvivas/status/2084140795653976196)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator runs Qwen 3.6 35B (MTP variant) locally on one RTX 3090 GPU. He calls Qwen the most affordable local AI. He says it is great at tool calling and good enough to power Hermes Agent for personal-assistant tasks.

## Key points

- Qwen 3.6 35B MTP runs on a single 24GB RTX 3090.
- He reports strong tool-calling ability, which agents depend on.
- He says it is good enough to run Hermes Agent for personal AI tasks.
- A local open-weight model avoids paying per-token API fees for personal agents.

## Resources mentioned

- [ ] **[Qwen 3.6 35B (MTP)](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** · tool · huggingface.co · free  
  Qwen 3.6 mixture-of-experts model (35B total, about 3B active parameters) with multi-token prediction for local inference.  
  Also in: Use a Local Model for Confidential Data with Your Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085345530251735193) · [notes](../notes/2026-08-06-use-a-local-model-for-confidential-data-with-your-agent.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Run Hermes Agent locally with Qwen 3.6 35B MTP in LM Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079169631802314881) · [notes](../notes/2026-07-20-run-hermes-agent-locally-with-qwen-3-6-35b-mtp-in-lm-studio.md)), Local Personal AI Agent to Explain Your Investment Portfolio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079076309175791706) · [notes](../notes/2026-07-20-local-personal-ai-agent-to-explain-your-investment-portfolio.md)) and 4 more
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more

## Try this

- [ ] Try running Qwen 3.6 35B locally on a 24GB GPU to power your agent.
- [ ] Build a personal AI agent backed by a local Qwen model on a consumer GPU.
