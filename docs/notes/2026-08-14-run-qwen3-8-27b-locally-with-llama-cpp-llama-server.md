# Run Qwen3.8-27B locally with llama.cpp (llama-server)

Melvin Vivas · X post · 2026-08-14 · [Open on X](https://x.com/melvindvivas/status/2088286931230884120)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

A complete llama-server command for running Unsloth's Q4_K_M GGUF build of Qwen3.8-27B locally from Hugging Face. It uses a 256K context, flash attention, a 4-bit KV cache, and Qwen's recommended sampling settings. The creator has only tested it for chat so far, not yet with agent harnesses.

## Key points

- Load straight from Hugging Face: llama-server -hf unsloth/Qwen3.8-27B-GGUF:Q4_K_M
- -ngl 99 puts all layers on the GPU; -np 1 uses a single parallel slot
- -c 262144 sets a 256K context window; -fa on turns on flash attention
- --cache-type-k q4_0 and --cache-type-v q4_0 shrink the KV cache to 4-bit so the long context uses less VRAM
- Sampling: temp 0.6, top-p 0.95, top-k 20, min-p 0.00, presence_penalty 0.0, repeat_penalty 1.0
- --alias "qwen38-27b" gives the model a short name for OpenAI-compatible clients
- Tested for chat only so far, not yet with agent harnesses

## Resources mentioned

- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantized versions of the Qwen3.8 27B model, ready for llama.cpp and other GGUF runtimes.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Running Qwen3.8 27B Locally on an RTX 3090 with llama.cpp and the Pi Harness (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094355129768296765) · [notes](../notes/2026-08-31-running-qwen3-8-27b-locally-on-an-rtx-3090-with-llama-cpp.md)), Unsloth releases Qwen3.8-27B GGUF quantizations (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088282753313993016) · [notes](../notes/2026-08-14-unsloth-releases-qwen3-8-27b-gguf-quantizations.md))
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../notes/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../notes/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../notes/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)), Qwen3.8-27B Is Free on Infron: 256K-Context Multimodal Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099437312124072202) · [notes](../notes/2026-09-14-qwen3-8-27b-is-free-on-infron-256k-context-multimodal-model.md)) and 22 more

## Try this

- [ ] Run Qwen3.8-27B locally with the llama-server command shared in the post
- [ ] Use the recommended sampling settings (temp 0.6, top-p 0.95, top-k 20)
- [ ] Connect the local llama-server endpoint to an agent harness and test tool use
