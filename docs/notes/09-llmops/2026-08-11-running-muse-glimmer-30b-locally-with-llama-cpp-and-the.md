# Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent

Melvin Vivas · X post · 2026-08-11 · [Open on X](https://x.com/melvindvivas/status/2087041258766413927)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas tests Meta's Muse Glimmer 30B open model with the Hermes agent. He runs it locally through llama.cpp using Unsloth's 4-bit GGUF quant. The quoted guide lists his hardware and setup, so you can judge whether your own machine can run it.

## Key points

- Model: unsloth/Muse-Glimmer-30B-GGUF:UD-Q4_K_XL (Unsloth dynamic 4-bit quant).
- Served with llama.cpp and used as the backend for the Hermes agent.
- Setup: WSL Ubuntu 24.04.1 on Windows 11 Pro with an RTX 3090.
- VRAM use is about 23 GB at full context, so it fits on a single 24 GB card.
- He says it should also work with OpenClaw and Pi, but he hasn't tested those.

## Resources mentioned

- [ ] **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantizations of Meta's Muse Glimmer 30B open-weights model, used here with the UD-Q4\_K\_XL quant.  
  Also in: Three Local GGUF Models That Fit on an RTX 3090 (24GB) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097627753935929670) · [notes](../../notes/03-llm-fundamentals/2026-09-09-three-local-gguf-models-that-fit-on-an-rtx-3090-24gb.md)), Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087923865813193027) · [notes](../../notes/09-llmops/2026-08-13-run-muse-glimmer-30b-locally-on-an-rtx-3090-with-llama-cpp.md)), Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087038764136972499) · [notes](../../notes/09-llmops/2026-08-11-run-muse-glimmer-30b-locally-with-llama-cpp-and-connect-it.md))
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../../notes/07-agents/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../../notes/07-agents/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../../notes/07-agents/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../../notes/07-agents/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[OpenClaw](https://github.com/openclaw/openclaw)** · tool · github.com · free  
  An open-source, self-hostable personal AI agent that can run on local or hosted LLMs.  
  Also in: Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087923865813193027) · [notes](../../notes/09-llmops/2026-08-13-run-muse-glimmer-30b-locally-on-an-rtx-3090-with-llama-cpp.md)), Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087038764136972499) · [notes](../../notes/09-llmops/2026-08-11-run-muse-glimmer-30b-locally-with-llama-cpp-and-connect-it.md)), Running Local Models for Agents: Tool Use, Context and Quantization (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067585799252836556) · [notes](../../notes/03-llm-fundamentals/2026-06-18-running-local-models-for-agents-tool-use-context-and.md)), Ollama Is Now an Official Provider for OpenClaw (Melvin Vivas on [X](https://x.com/melvindvivas/status/2033504191252177046) · [notes](../../notes/07-agents/2026-03-16-ollama-is-now-an-official-provider-for-openclaw.md)) and 2 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more

## Try this

- [ ] Follow the guide to serve Muse Glimmer 30B (UD-Q4\_K\_XL) with llama.cpp and connect it to an agent such as Hermes.
- [ ] Build a fully local agent stack: llama.cpp serving Muse Glimmer 30B on a 24 GB GPU, driven by Hermes, OpenClaw or Pi.
