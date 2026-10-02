# Run llama.cpp GGUF Checkpoints in Hugging Face Transformers

Melvin Vivas · X video post · 2026-09-22 · [Open on X](https://x.com/melvindvivas/status/2102409652449472740)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Hugging Face Transformers can now load the same GGUF quantized checkpoints used by llama.cpp. On Mac, ggml kernels give fast local inference. The creator plans to refactor his AIBackends project to use this.

## Key points

- GGUF checkpoints made for llama.cpp can now run directly in Hugging Face Transformers.
- You use the same quantized models without converting them.
- On Mac, fast local inference comes from ggml kernels.
- Hugging Face hosts the ggml kernels under the ggml-org organization.
- The creator plans to refactor his AIBackends project to take advantage of this.

## Resources mentioned

- [ ] **[Hugging Face Blog: Transformers + llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)** · article · huggingface.co · free  
  Hugging Face blog post announcing that llama.cpp GGUF quantized checkpoints can run in Transformers.
- [ ] **[ggml-org kernels on Hugging Face](https://huggingface.co/ggml-org/kerne)** · repo · huggingface.co · free · open in a browser to verify  
  ggml kernels on Hugging Face that power fast local inference on Mac in Transformers.
- [ ] **[Hugging Face Transformers](https://github.com/huggingface/transformers)** · tool · github.com · free  
  Open-source library for loading and running pretrained models, which now supports GGUF directly.  
  Also in: Run GGUF models directly in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102408393105551373) · [notes](../../notes/09-llmops/2026-09-22-run-gguf-models-directly-in-hugging-face-transformers.md)), AIBackends 0.4.0: Liquid AI LFM2.5 Models on llama.cpp and Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088665588189311348) · [notes](../../notes/09-llmops/2026-08-16-aibackends-0-4-0-liquid-ai-lfm2-5-models-on-llama-cpp-and.md)), Gemma 4 Gets Up to 3x Faster with MTP Drafters (Melvin Vivas on [X](https://x.com/melvindvivas/status/2051722037857771972) · [notes](../../notes/03-llm-fundamentals/2026-05-06-gemma-4-gets-up-to-3x-faster-with-mtp-drafters.md))
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../../notes/07-agents/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 28 more
- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../../notes/13-ai-tools/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../../notes/13-ai-tools/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../../notes/09-llmops/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../../notes/13-ai-tools/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more

## Try this

- [ ] Read the Hugging Face blog post on running llama.cpp quants in Transformers.
- [ ] Try loading a GGUF checkpoint in Transformers for local inference on a Mac.
- [ ] Refactor a local-inference backend so it loads GGUF models through Transformers with ggml kernels.
