# Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp

Melvin Vivas · X post · 2026-08-13 · [Open on X](https://x.com/melvindvivas/status/2087923865813193027)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Shares a guide to running Muse Glimmer 30B on one RTX 3090 with llama.cpp under WSL Ubuntu on Windows 11. It uses Unsloth's Q4_K_XL GGUF quantization and needs about 23GB of VRAM at full context. The guide's author tested it with the Hermes agent and expects it to work with OpenClaw and Pi.

## Key points

- Setup: Windows 11 Pro, WSL Ubuntu 24.04.1, RTX 3090 (24GB).
- Model: unsloth/Muse-Glimmer-30B-GGUF:UD-Q4_K_XL.
- VRAM usage is about 23GB at full context, so it just fits on a 24GB card.
- Serve the model with llama.cpp and connect it to an agent harness (tested with Hermes agent; OpenClaw and Pi untested).

## Resources mentioned

- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantizations of Meta's Muse Glimmer 30B open-weights model, used here with the UD-Q4\_K\_XL quant.  
  Also in: Three Local GGUF Models That Fit on an RTX 3090 (24GB) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097627753935929670) · [notes](../notes/2026-09-09-three-local-gguf-models-that-fit-on-an-rtx-3090-24gb.md)), Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087041258766413927) · [notes](../notes/2026-08-11-running-muse-glimmer-30b-locally-with-llama-cpp-and-the.md)), Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087038764136972499) · [notes](../notes/2026-08-11-run-muse-glimmer-30b-locally-with-llama-cpp-and-connect-it.md))
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[OpenClaw](https://github.com/openclaw/openclaw)** · tool · github.com · free  
  An open-source, self-hostable personal AI agent that can run on local or hosted LLMs.  
  Also in: Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087041258766413927) · [notes](../notes/2026-08-11-running-muse-glimmer-30b-locally-with-llama-cpp-and-the.md)), Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087038764136972499) · [notes](../notes/2026-08-11-run-muse-glimmer-30b-locally-with-llama-cpp-and-connect-it.md)), Running Local Models for Agents: Tool Use, Context and Quantization (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067585799252836556) · [notes](../notes/2026-06-18-running-local-models-for-agents-tool-use-context-and.md)), Ollama Is Now an Official Provider for OpenClaw (Melvin Vivas on [X](https://x.com/melvindvivas/status/2033504191252177046) · [notes](../notes/2026-03-16-ollama-is-now-an-official-provider-for-openclaw.md)) and 2 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more

## Try this

- [ ] Install llama.cpp in WSL Ubuntu and load the UD-Q4\_K\_XL GGUF on a 24GB GPU.
- [ ] Point an agent harness (e.g., Hermes agent) at the local llama.cpp server.
- [ ] Run a fully local coding agent on Muse Glimmer 30B with a single consumer GPU.
