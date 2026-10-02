# Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent

Melvin Vivas · X post · 2026-08-11 · [Open on X](https://x.com/melvindvivas/status/2087038764136972499)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP, LLM Fundamentals · **Level:** intermediate

## Summary

This post is a step-by-step guide to serving Unsloth's quantized Muse Glimmer 30B GGUF model on one RTX 3090 (24 GB) using llama.cpp built with CUDA under WSL Ubuntu on Windows 11. It covers building llama-server, the launch flags and sampling settings, a health check, and pointing an agent (Hermes Agent) at the local OpenAI-compatible endpoint. The author says OpenClaw and Pi should also work but hasn't tested them.

## Key points

- Setup: Windows 11 Pro + WSL Ubuntu 24.04.1, RTX 3090. Uses about 23 GB VRAM at full 65,536-token context with the unsloth/Muse-Glimmer-30B-GGUF:UD-Q4_K_XL quantization.
- Build llama.cpp with CUDA: git clone the ggml-org/llama.cpp repo, then run `cmake -S . -B build-cuda -DGGML_CUDA=ON -DLLAMA_OPENSSL=ON` and `cmake --build build-cuda --config Release --target llama-server -j 8`.
- Launch with `./build-cuda/bin/llama-server -hf unsloth/Muse-Glimmer-30B-GGUF:UD-Q4_K_XL`. The -hf flag downloads the model straight from Hugging Face.
- Server flags: --ctx-size 65536, --parallel 1, --alias unsloth-Muse-Glimmer-30B-GGUF, --host 127.0.0.1, --port 8001. Raise ctx-size if you have spare VRAM; any port works.
- Sampling settings: --temp 1.0, --top-p 0.95, --top-k 64.
- Check the server with `curl -fsS http://localhost:8001/health`. The OpenAI-compatible base URL is http://localhost:8001/v1.
- Hermes Agent setup: choose Custom endpoint, Base URL http://localhost:8001/v1, leave the API key empty, Model = the alias (unsloth-Muse-Glimmer-30B-GGUF), Context length 65536, API mode chat_completions.
- Any agent that can use an OpenAI-compatible endpoint (the author names OpenClaw and Pi, untested) should work with the same settings.

## Resources mentioned

- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantizations of Meta's Muse Glimmer 30B open-weights model, used here with the UD-Q4\_K\_XL quant.  
  Also in: Three Local GGUF Models That Fit on an RTX 3090 (24GB) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097627753935929670) · [notes](../notes/2026-09-09-three-local-gguf-models-that-fit-on-an-rtx-3090-24gb.md)), Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087923865813193027) · [notes](../notes/2026-08-13-run-muse-glimmer-30b-locally-on-an-rtx-3090-with-llama-cpp.md)), Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087041258766413927) · [notes](../notes/2026-08-11-running-muse-glimmer-30b-locally-with-llama-cpp-and-the.md))
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[OpenClaw](https://github.com/openclaw/openclaw)** · tool · github.com · free  
  An open-source, self-hostable personal AI agent that can run on local or hosted LLMs.  
  Also in: Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087923865813193027) · [notes](../notes/2026-08-13-run-muse-glimmer-30b-locally-on-an-rtx-3090-with-llama-cpp.md)), Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087041258766413927) · [notes](../notes/2026-08-11-running-muse-glimmer-30b-locally-with-llama-cpp-and-the.md)), Running Local Models for Agents: Tool Use, Context and Quantization (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067585799252836556) · [notes](../notes/2026-06-18-running-local-models-for-agents-tool-use-context-and.md)), Ollama Is Now an Official Provider for OpenClaw (Melvin Vivas on [X](https://x.com/melvindvivas/status/2033504191252177046) · [notes](../notes/2026-03-16-ollama-is-now-an-official-provider-for-openclaw.md)) and 2 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/)** · tool · learn.microsoft.com · free  
  Runs a Linux environment such as Ubuntu on Windows, here used to build llama.cpp with CUDA.  
  Also in: Any OS works for AI dev: Mac, Windows + WSL (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100110722852409435) · [notes](../notes/2026-09-16-any-os-works-for-ai-dev-mac-windows-wsl.md)), Running Gemma 4 E2B Video Understanding Locally in WSL (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044518139329958315) · [notes](../notes/2026-04-16-running-gemma-4-e2b-video-understanding-locally-in-wsl.md)), Installing Unsloth Studio on Windows via WSL (Melvin Vivas on [X](https://x.com/melvindvivas/status/2039785611872379110) · [notes](../notes/2026-04-03-installing-unsloth-studio-on-windows-via-wsl.md))
- [ ] **[Melvin Vivas](https://x.com/melvindvivas)** · person · x.com · free  
  A creator who shares experiments with AI agents and developer tools on X.  
  Also in: How LLMs Work: A Motion-Graphics Explainer Made in One Shot with Claude Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103762693664727066) · [notes](../notes/2026-09-26-how-llms-work-a-motion-graphics-explainer-made-in-one-shot.md)), Concept Demo: An Agent Monitor Built on OpenAI Codex Traces (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100123695675212116) · [notes](../notes/2026-09-16-concept-demo-an-agent-monitor-built-on-openai-codex-traces.md)), Running MiniMax H3 Locally on a Single RTX 3090 (Demo) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085439986699223322) · [notes](../notes/2026-08-06-running-minimax-h3-locally-on-a-single-rtx-3090-demo.md))

## Try this

- [ ] Build llama.cpp's llama-server with CUDA (-DGGML\_CUDA=ON) under WSL Ubuntu.
- [ ] Start llama-server with unsloth/Muse-Glimmer-30B-GGUF:UD-Q4\_K\_XL, 65536 context, temp 1.0, top-p 0.95, top-k 64 on port 8001.
- [ ] Raise --ctx-size if your GPU has spare VRAM.
- [ ] Check the server with curl http://localhost:8001/health.
- [ ] In Hermes Agent, add a Custom endpoint: base URL http://localhost:8001/v1, empty API key, model alias, context 65536, API mode chat\_completions.
- [ ] Follow @melvindvivas for more guides.
- [ ] Run a fully local coding/agent setup: llama.cpp serving a 30B GGUF model on a 24 GB GPU, used as the backend for Hermes Agent, OpenClaw or Pi.
