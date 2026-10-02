# Run LFM2.5-2.6B locally with llama.cpp

Melvin Vivas · X post · 2026-08-09 · [Open on X](https://x.com/melvindvivas/status/2086194481540608021)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

The creator quotes his own post that runs Liquid AI's LFM2.5-2.6B GGUF with llama-server. It uses about 6.9 GB of VRAM with a Q8_0 quant and a 128k context.

## Key points

- Load the Q8_0 GGUF straight from Hugging Face with `llama-server -hf LiquidAI/LFM2.5-2.6B-GGUF:Q8_0`.
- Key flags: --jinja, --reasoning-format auto, -ngl all, -fa on, -c 128000, --port 8000.
- VRAM usage is about 6.9 GB.

## Resources mentioned

- [ ] **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** · tool · huggingface.co · free  
  The Hugging Face repo with GGUF quantized weights of Liquid AI's LFM2.5-2.6B model.  
  Also in: Serving LFM2.5-2.6B with llama-server: full command (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086193956598210978) · [notes](../../notes/09-llmops/2026-08-09-serving-lfm2-5-2-6b-with-llama-server-full-command.md))
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Serve LFM2.5-2.6B locally with llama-server using the quoted command.
