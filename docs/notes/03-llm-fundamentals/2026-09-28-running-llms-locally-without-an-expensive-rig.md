# Running LLMs Locally Without an Expensive Rig

Melvin Vivas · X post · 2026-09-28 · [Open on X](https://x.com/melvindvivas/status/2104363353045123168)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** beginner

## Summary

A beginner path to running LLMs locally on ordinary hardware. Start with Ollama or LM Studio and a small 3B–8B model on CPU, try quantized GGUF models, then move to llama.cpp once comfortable.

## Key points

- You don't need a $5,000 AI rig to run models locally
- Install Ollama or LM Studio as an easy starting point
- Start with small models of 3B–8B parameters
- A CPU is fine for learning
- Try GGUF-format (quantized) models
- Move to llama.cpp once comfortable
- Start small, run something today, learn by experimenting

## Resources mentioned

- [ ] **[Ollama](https://x.com/ollama)** · tool · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source tool for downloading and running LLMs on your own machine with minimal setup.  
  Also in: Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../../notes/07-agents/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 12 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../../notes/10-fine-tuning/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)), Post-training Qwen3.5-2B on your own X posts with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099679217839677724) · [notes](../../notes/10-fine-tuning/2026-09-15-post-training-qwen3-5-2b-on-your-own-x-posts-with-unsloth.md)) and 31 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../../notes/07-agents/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 28 more

## Try this

- [ ] Install Ollama or LM Studio
- [ ] Run a small 3B–8B model on your CPU
- [ ] Try GGUF models
- [ ] Move to llama.cpp once comfortable
- [ ] Run something today and experiment
- [ ] Set up a local LLM on your own laptop with Ollama or LM Studio and compare several small GGUF models
