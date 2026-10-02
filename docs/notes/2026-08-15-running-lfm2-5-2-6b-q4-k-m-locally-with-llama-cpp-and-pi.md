# Running LFM2.5-2.6B Q4_K_M Locally with llama.cpp and Pi

Melvin Vivas · X post · 2026-08-15 · [Open on X](https://x.com/melvindvivas/status/2088478626266398786)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator runs Liquid AI's LFM2.5-2.6B at Q4_K_M quantization through llama.cpp's llama-server and connects it to the Pi agent. On a 16GB M1 MacBook it uses about 2.4GB of RAM, and it can read a website and turn the content into markdown. He includes the llama-server command to start router mode before configuring Pi.

## Key points

- Model: LFM2.5-2.6B quantized to Q4_K_M (GGUF) and served with llama.cpp.
- Hardware: MacBook M1 with 16GB RAM; memory use is about 2.4GB.
- Working task: read a website's content and convert it into markdown.
- Start llama-server in router mode before configuring Pi: llama-server --host 127.0.0.1 --port 8080 --models-max 1
- --models-max 1 keeps only one model loaded at a time in router mode.

## Resources mentioned

- [ ] **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · tool · huggingface.co · free  
  Liquid AI's small language model, which can be paired with the LFM2.5-VL-3B vision model.  
  Also in: Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../notes/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Coworker with Liquid AI LFM2.5-2.6B via LM Studio on a Mac (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092602149440196867) · [notes](../notes/2026-08-26-coworker-with-liquid-ai-lfm2-5-2-6b-via-lm-studio-on-a-mac.md)), Zero-Cost Coworker Setup: OpenRouter Free Models + Local LFM2.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092562143443034155) · [notes](../notes/2026-08-26-zero-cost-coworker-setup-openrouter-free-models-local-lfm2-5.md)), Coworker: A Subscription-Free AI Agent on Local LFM2.5-2.6B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092525819084386315) · [notes](../notes/2026-08-26-coworker-a-subscription-free-ai-agent-on-local-lfm2-5-2-6b.md)) and 9 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Start llama-server with --host 127.0.0.1 --port 8080 --models-max 1, then configure Pi to use it.
- [ ] Try a Q4\_K\_M quant of LFM2.5-2.6B on a laptop.
- [ ] Build a local web-to-markdown agent using a small quantized model with llama.cpp and Pi.
