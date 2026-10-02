# Running a Local Ornith Model as the Backend for a Hermes Agent

Melvin Vivas · X post · 2026-08-20 · [Open on X](https://x.com/melvindvivas/status/2090390994168734063)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Shows a split setup: a Hermes agent runs on a Mac and connects to a PC on the network that serves the Ornith-1.5-35B-A3B model with llama.cpp. The creator rates it as a good alternative to Qwen3.8 27B but notes it has no vision, so a separate vision model is still needed.

## Key points

- The agent runs on one machine (Mac) and model inference runs on a GPU PC through a llama.cpp server.
- Ornith-1.5-35B-A3B is a mixture-of-experts model (35B total, about 3B active parameters).
- He considers it a good alternative to Qwen3.8 27B.
- It has no vision support, so multimodal tasks need a separate vision model.

## Resources mentioned

- [ ] **[Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** · tool · huggingface.co · free  
  An open-weight mixture-of-experts language model (35B total, about 3B active parameters), run here as a Q4\_K\_M GGUF quantization.  
  Also in: Serving Ornith-1.5-35B-A3B at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381418136555542) · [notes](../notes/2026-08-20-serving-ornith-1-5-35b-a3b-at-128k-context-on-an-rtx-3090.md)), Running Ornith-1.5-35B-A3B (Q4\_K\_M) at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381415557021767) · [notes](../notes/2026-08-20-running-ornith-1-5-35b-a3b-q4-k-m-at-128k-context-on-an-rtx.md))
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../notes/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../notes/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../notes/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)), Qwen3.8-27B Is Free on Infron: 256K-Context Multimodal Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099437312124072202) · [notes](../notes/2026-09-14-qwen3-8-27b-is-free-on-infron-256k-context-multimodal-model.md)) and 22 more

## Try this

- [ ] Serve a local LLM on a GPU PC with llama.cpp and point an agent running on another machine at it.
