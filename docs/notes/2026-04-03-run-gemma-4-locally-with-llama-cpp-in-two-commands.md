# Run Gemma 4 Locally with llama.cpp in Two Commands

Melvin Vivas · X post · 2026-04-03 · [Open on X](https://x.com/melvindvivas/status/2039790248721588283)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

The post gives a quick way to run Gemma 4 locally with llama.cpp on macOS. You install the latest build of llama.cpp with Homebrew, then start llama-server with a quantized GGUF version of Gemma 4 26B-A4B pulled from Hugging Face.

## Key points

- Install the latest development build: `brew install llama.cpp --HEAD`.
- Run: `llama-server -hf ggml-org/gemma-4-26B-A4B-it-GGUF:Q4_K_M`.
- The `-hf` flag downloads the GGUF model straight from Hugging Face.
- Q4_K_M is a 4-bit quantization that trades a little quality for much lower memory use.
- 26B-A4B means a Mixture of Experts model with 26B total parameters, of which about 4B are active per token.

## Resources mentioned

- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[ggml-org/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/ggml-org/gemma-4-26B-A4B-it-GGUF)** · tool · huggingface.co · free  
  Quantized GGUF build of the Gemma 4 26B-A4B instruction-tuned model, made for llama.cpp.
- [ ] **[Homebrew](https://brew.sh)** · tool · brew.sh · free  
  Package manager for macOS and Linux.

## Try this

- [ ] Run \`brew install llama.cpp --HEAD\`.
- [ ] Run \`llama-server -hf ggml-org/gemma-4-26B-A4B-it-GGUF:Q4\_K\_M\` to serve Gemma 4 locally.
