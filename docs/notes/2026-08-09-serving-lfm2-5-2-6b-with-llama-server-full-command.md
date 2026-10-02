# Serving LFM2.5-2.6B with llama-server: full command

Melvin Vivas · X post · 2026-08-09 · [Open on X](https://x.com/melvindvivas/status/2086193956598210978)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

A full llama-server command for running Liquid AI's LFM2.5-2.6B GGUF (Q8_0) on a GPU. It uses about 6.9 GB of VRAM, a 128k context, and the recommended sampling settings. It needs a CUDA-enabled build of llama.cpp.

## Key points

- Command: llama-server -hf LiquidAI/LFM2.5-2.6B-GGUF:Q8_0 --alias LiquidAI/LFM2.5-2.6B --port 8000 --jinja --reasoning-format auto -ngl all -fa on -c 128000.
- Sampling: --temp 0.1 --top-k 50 --repeat-penalty 1.1.
- -ngl all moves every layer to the GPU; -fa on turns on flash attention.
- VRAM usage is about 6.9 GB at Q8_0 with a 128k context.
- Requires a CUDA-enabled build of llama-server.

## Resources mentioned

- [ ] **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** · tool · huggingface.co · free  
  The Hugging Face repo with GGUF quantized weights of Liquid AI's LFM2.5-2.6B model.  
  Also in: Run LFM2.5-2.6B locally with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086194481540608021) · [notes](../notes/2026-08-09-run-lfm2-5-2-6b-locally-with-llama-cpp.md))
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../notes/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[@aivandroid](https://x.com/aivandroid)** · person · x.com · free  
  The developer who maintains the geocine/llama-swap fork.  
  Also in: Self-Host a Coding Model on QuickPod with llama-swap and Use It in Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2050556844666724354) · [notes](../notes/2026-05-02-self-host-a-coding-model-on-quickpod-with-llama-swap-and.md))

## Try this

- [ ] Build llama.cpp with CUDA support.
- [ ] Run the llama-server command to serve LFM2.5-2.6B on port 8000.
