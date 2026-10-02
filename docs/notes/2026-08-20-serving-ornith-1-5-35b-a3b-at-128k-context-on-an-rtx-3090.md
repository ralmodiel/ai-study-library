# Serving Ornith-1.5-35B-A3B at 128k Context on an RTX 3090 with llama.cpp

Melvin Vivas · X post · 2026-08-20 · [Open on X](https://x.com/melvindvivas/status/2090381418136555542)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Gives an exact llama-server command for running the Q4_K_M quantization of Ornith-1.5-35B-A3B with a 128k context window, with every layer on a single RTX 3090. It also reports measured speeds, which makes it a practical reference for serving a local LLM.

## Key points

- Command: llama-server -m Ornith-1.5-35B-Q4_K_M.gguf -c 131072 -ngl 99 --port 8080 -fa on -ctk q8_0 -ctv q8_0 -np 1
- -c 131072 sets a 128k context; -ngl 99 puts all layers on the GPU.
- -fa on turns on flash attention; -ctk/-ctv q8_0 store the KV cache in 8-bit to save VRAM.
- -np 1 runs a single parallel slot, so the whole context goes to one request.
- Hardware: one RTX 3090 (24GB) running the Q4_K_M quantization.
- Speed: about 120 tok/s on short replies and about 90 tok/s with 4k output tokens.

## Resources mentioned

- [ ] **[Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** · tool · huggingface.co · free  
  An open-weight mixture-of-experts language model (35B total, about 3B active parameters), run here as a Q4\_K\_M GGUF quantization.  
  Also in: Running a Local Ornith Model as the Backend for a Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090390994168734063) · [notes](../notes/2026-08-20-running-a-local-ornith-model-as-the-backend-for-a-hermes.md)), Running Ornith-1.5-35B-A3B (Q4\_K\_M) at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381415557021767) · [notes](../notes/2026-08-20-running-ornith-1-5-35b-a3b-q4-k-m-at-128k-context-on-an-rtx.md))
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Ornith (@ornith\_)](https://x.com/ornith_)** · person · x.com · free  
  The X account of Ornith, the team credited with releasing the Ornith-1.5 model.  
  Also in: Running Ornith-1.5-35B-A3B (Q4\_K\_M) at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381415557021767) · [notes](../notes/2026-08-20-running-ornith-1-5-35b-a3b-q4-k-m-at-128k-context-on-an-rtx.md))

## Try this

- [ ] Try the posted llama-server flags (flash attention, q8\_0 KV cache, -ngl 99) to fit long context on a 24GB GPU.
- [ ] Benchmark the tokens/sec of a local quantized MoE model at different context and output lengths.
