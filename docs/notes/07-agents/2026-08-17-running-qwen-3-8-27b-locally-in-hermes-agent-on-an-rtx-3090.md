# Running Qwen 3.8 27B locally in Hermes agent on an RTX 3090

Melvin Vivas · X post · 2026-08-17 · [Open on X](https://x.com/melvindvivas/status/2089247916485734673)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals · **Level:** intermediate

## Summary

The creator is impressed with Qwen 3.8 27B running in the Hermes agent on a single RTX 3090. He had the agent search the web for recently released open models in the same size class that fit his GPU. It shows that a mid-size open model can do useful agentic research locally.

## Key points

- Qwen 3.8 27B, an open-weight 27B model, runs on a single RTX 3090 (24GB VRAM).
- Hermes agent can use a local model for tool-using tasks such as web search.
- Example task: ask the agent to find currently released open models in its class that fit your GPU.

## Resources mentioned

- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)) and 24 more
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../../notes/07-agents/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../../notes/07-agents/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../../notes/07-agents/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../../notes/07-agents/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more

## Try this

- [ ] Try running a ~27B open model locally in an agent and give it a research task.
- [ ] Use a local agent to research and compare open models that fit your GPU's VRAM.
