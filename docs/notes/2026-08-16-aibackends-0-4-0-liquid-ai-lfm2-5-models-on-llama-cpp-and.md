# AIBackends 0.4.0: Liquid AI LFM2.5 Models on llama.cpp and Transformers

Melvin Vivas · X post · 2026-08-16 · [Open on X](https://x.com/melvindvivas/status/2088665588189311348)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Release notes for version 0.4.0 of AIBackends, the creator's open-source Python package. It adds support for Liquid AI's LFM2.5-2.6B (on llama.cpp and Transformers) and LFM2.5-VL-3B (vision, on llama.cpp), plus CPU benchmark reports for both models.

## Key points

- Install with: pip install aibackends
- LFM2.5-2.6B runs on both the llama.cpp and Transformers backends.
- LFM2.5-VL-3B adds vision support through llama.cpp.
- The release includes CPU benchmark reports for both models, useful for choosing a model for CPU-only deployment.

## Resources mentioned

- [ ] **[AIBackends (PyPI 0.4.0)](https://pypi.org/project/aibackends/0.4.0/)** · tool · pypi.org · free  
  The creator's Python package for running local AI model backends.
- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../notes/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../notes/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../notes/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../notes/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · tool · huggingface.co · free  
  Liquid AI's small language model, which can be paired with the LFM2.5-VL-3B vision model.  
  Also in: Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../notes/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Coworker with Liquid AI LFM2.5-2.6B via LM Studio on a Mac (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092602149440196867) · [notes](../notes/2026-08-26-coworker-with-liquid-ai-lfm2-5-2-6b-via-lm-studio-on-a-mac.md)), Zero-Cost Coworker Setup: OpenRouter Free Models + Local LFM2.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092562143443034155) · [notes](../notes/2026-08-26-zero-cost-coworker-setup-openrouter-free-models-local-lfm2-5.md)), Coworker: A Subscription-Free AI Agent on Local LFM2.5-2.6B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092525819084386315) · [notes](../notes/2026-08-26-coworker-a-subscription-free-ai-agent-on-local-lfm2-5-2-6b.md)) and 9 more
- [ ] **[LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)** · tool · huggingface.co · free  
  Liquid AI's lightweight vision-language model for screen and document understanding, grounding and tool calling.  
  Also in: OCR Testing a Small Vision Model with LLM-Made Ground Truth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088677363798413510) · [notes](../notes/2026-08-16-ocr-testing-a-small-vision-model-with-llm-made-ground-truth.md)), AIBackends Adds Support for LFM2.5-VL-3B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088564446138638560) · [notes](../notes/2026-08-15-aibackends-adds-support-for-lfm2-5-vl-3b.md)), Using LFM2.5-VL-3B's Vision Capabilities (Liquid AI Guide) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088111916128575849) · [notes](../notes/2026-08-14-using-lfm2-5-vl-3b-s-vision-capabilities-liquid-ai-guide.md)), Quick test of Liquid AI's LFM2.5-VL-3B vision model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087594748500750826) · [notes](../notes/2026-08-13-quick-test-of-liquid-ai-s-lfm2-5-vl-3b-vision-model.md)) and 1 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Hugging Face Transformers](https://github.com/huggingface/transformers)** · tool · github.com · free  
  Open-source library for loading and running pretrained models, which now supports GGUF directly.  
  Also in: Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), Run GGUF models directly in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102408393105551373) · [notes](../notes/2026-09-22-run-gguf-models-directly-in-hugging-face-transformers.md)), Gemma 4 Gets Up to 3x Faster with MTP Drafters (Melvin Vivas on [X](https://x.com/melvindvivas/status/2051722037857771972) · [notes](../notes/2026-05-06-gemma-4-gets-up-to-3x-faster-with-mtp-drafters.md))

## Try this

- [ ] Install with pip install aibackends and try the LFM2.5 models.
