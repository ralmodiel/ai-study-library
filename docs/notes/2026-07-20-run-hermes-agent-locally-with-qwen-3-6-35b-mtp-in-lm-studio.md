# Run Hermes Agent locally with Qwen 3.6 35B MTP in LM Studio

Melvin Vivas · X post · 2026-07-20 · [Open on X](https://x.com/melvindvivas/status/2079169631802314881)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator runs Hermes Agent on a local Qwen 3.6 35B model (MTP variant) served through LM Studio. The point is that you can run a capable agent fully locally, for free.

## Key points

- Stack: Hermes Agent + Qwen 3.6 35B (MTP) + LM Studio
- LM Studio serves the local model that the agent uses
- Fully local: no API costs and your data stays on your machine
- MTP (multi-token prediction) variants can speed up generation

## Resources mentioned

- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[Qwen 3.6 35B (MTP)](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** · tool · huggingface.co · free  
  Qwen 3.6 mixture-of-experts model (35B total, about 3B active parameters) with multi-token prediction for local inference.  
  Also in: Use a Local Model for Confidential Data with Your Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085345530251735193) · [notes](../notes/2026-08-06-use-a-local-model-for-confidential-data-with-your-agent.md)), Running Qwen 3.6 35B locally on an RTX 3090 for agent tool calling (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084140795653976196) · [notes](../notes/2026-08-03-running-qwen-3-6-35b-locally-on-an-rtx-3090-for-agent-tool.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Local Personal AI Agent to Explain Your Investment Portfolio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079076309175791706) · [notes](../notes/2026-07-20-local-personal-ai-agent-to-explain-your-investment-portfolio.md)) and 4 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../notes/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../notes/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more

## Try this

- [ ] Serve Qwen 3.6 35B MTP in LM Studio and connect Hermes Agent to it
- [ ] Build a fully local, free personal AI agent with Hermes Agent and LM Studio
