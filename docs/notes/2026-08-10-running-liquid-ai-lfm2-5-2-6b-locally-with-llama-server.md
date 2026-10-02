# Running Liquid AI LFM2.5-2.6B Locally with llama-server

Melvin Vivas · X post · 2026-08-10 · [Open on X](https://x.com/melvindvivas/status/2086721262030872624)

**Topics:** LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

This post shares a llama.cpp `llama-server` command for serving Liquid AI's LFM2.5-2.6B from its Q8_0 GGUF. The server exposes the model on port 8000 with a 128k context. It uses about 6.9 GB of VRAM, so it fits on modest GPUs.

## Key points

- Model: LiquidAI/LFM2.5-2.6B-GGUF:Q8_0, using about 6.9 GB VRAM.
- Command: llama-server -hf LiquidAI/LFM2.5-2.6B-GGUF:Q8_0 --alias LiquidAI/LFM2.5-2.6B --port 8000
- --jinja uses the model's chat template; --reasoning-format auto handles the model's reasoning output.
- -ngl all puts all layers on the GPU; -fa on turns on flash attention; -c 128000 sets a 128k context.
- The -hf flag downloads the GGUF straight from Hugging Face.

## Resources mentioned

- [ ] **[LFM2.5-2.6B GGUF on Hugging Face (Liquid AI)](https://huggingface.co/LiquidAI/LFM2)** · tool · huggingface.co · free · open in a browser to verify  
  Liquid AI's official GGUF files for the LFM2.5-2.6B small model.
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Run the llama-server command to serve LFM2.5-2.6B locally on port 8000.
