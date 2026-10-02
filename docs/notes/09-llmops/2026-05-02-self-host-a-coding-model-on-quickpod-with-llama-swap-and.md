# Self-Host a Coding Model on QuickPod with llama-swap and Use It in Claude Code

Melvin Vivas · X video post · 2026-05-02 · 0:24 · 457 views · [Open on X](https://x.com/melvindvivas/status/2050556844666724354)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity, LLM Fundamentals · **Level:** advanced

## Summary

This is a short demo with no narration. Melvin Vivas runs his own coding model on a rented GPU from QuickPod. He serves a Qwen 27B model distilled from Claude Opus through Aivan Monceller's (@aivandroid) fork of llama-swap, which adds some extra features. He then points Claude Code at that self-hosted model instead of Anthropic's hosted models.

## Key points

- llama-swap is a proxy that swaps models in and out for any local server that speaks the OpenAI or Anthropic API, such as llama.cpp or vLLM.
- The geocine/llama-swap fork by @aivandroid adds extra features. Because it is Anthropic-compatible, Claude Code can talk to it directly.
- The model in the demo is a Qwen 27B model distilled from Claude Opus, an open-weight model tuned to behave more like Opus.
- The model runs on a GPU pod rented from QuickPod, so you don't need a strong local GPU.
- Claude Code connects to the model hosted on QuickPod. This lets you keep the Claude Code agent workflow while running your own model.
- The video has no speech, so you need the linked repo and the QuickPod console to reproduce the setup.

## Resources mentioned

- [ ] **[geocine/llama-swap (GitHub)](https://github.com/geocine/llama-swap)** · repo · github.com · free  
  A fork of llama-swap that reliably swaps models for any local server compatible with the OpenAI or Anthropic API, such as llama.cpp or vLLM.
- [ ] **[QuickPod](https://console.quickpod.io/?affiliate=4a11b63f-79e6-46a7-aa63-c78fde82d70a)** · tool · console.quickpod.io · paid  
  A cloud service for renting GPU pods to host and run your own models.  
  Also in: Reusable GPU devbox: PyTorch/CUDA plus six coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095138320481390772) · [notes](../../notes/13-ai-tools/2026-09-02-reusable-gpu-devbox-pytorch-cuda-plus-six-coding-agents.md)), Docker Template Bundling Coding Agents for GPU Cloud Hosting (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095072457174745159) · [notes](../../notes/09-llmops/2026-09-02-docker-template-bundling-coding-agents-for-gpu-cloud-hosting.md))
- [ ] **[@aivandroid](https://x.com/aivandroid)** · person · x.com · free  
  The developer who maintains the geocine/llama-swap fork.  
  Also in: Serving LFM2.5-2.6B with llama-server: full command (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086193956598210978) · [notes](../../notes/09-llmops/2026-08-09-serving-lfm2-5-2-6b-with-llama-server-full-command.md))
- [ ] **[llama-swap (original by mostlygeek)](https://github.com/mostlygeek/llama-swap)** · repo · github.com · free  
  The original open-source llama-swap proxy for swapping models on demand on local LLM servers.
- [ ] **[Qwen 27B Opus-distilled model](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** · tool · huggingface.co · free  
  An open-weight Qwen model of about 27B parameters, distilled from Claude Opus outputs for coding.
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Rent a GPU pod on QuickPod.
- [ ] Install the geocine/llama-swap fork on the pod and configure it to serve a coding model, such as the Qwen 27B Opus-distilled model.
- [ ] Point Claude Code at the Anthropic-compatible endpoint that llama-swap exposes.
- [ ] Self-host an open-weight coding model on a rented GPU and use it as the backend for Claude Code. Compare its quality, speed and cost with hosted models.
