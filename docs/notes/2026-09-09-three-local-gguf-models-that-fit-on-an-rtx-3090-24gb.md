# Three Local GGUF Models That Fit on an RTX 3090 (24GB)

Melvin Vivas · X post · 2026-09-09 · [Open on X](https://x.com/melvindvivas/status/2097627753935929670)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator lists three quantized GGUF models he has run on one RTX 3090 with 24GB of VRAM. The list shows which model sizes and quantization levels (Q4_K_M, Q4_K_XL) fit on a consumer GPU, including a 35B mixture-of-experts model with about 3B active parameters.

## Key points

- Hardware: one RTX 3090 with 24GB of VRAM.
- ggml-org/Qwen3.8-27B-GGUF at Q4_K_M quantization.
- unsloth/Muse-Glimmer-30B-GGUF at Q4_K_XL quantization.
- ornith-ai/Ornith-1.5-35B-A3B-GGUF: a 35B mixture-of-experts model with about 3B active parameters (A3B).
- At around 4-bit quantization, models of roughly 27-35B parameters can fit in 24GB of VRAM.

## Resources mentioned

- [ ] **[ggml-org/Qwen3.8-27B-GGUF](https://huggingface.co/ggml-org/Qwen3.8-27B-GGUF)** · tool · huggingface.co · free  
  A GGUF-quantized build of Qwen3.8 27B for llama.cpp-style local inference.
- [ ] **[unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantizations of Meta's Muse Glimmer 30B open-weights model, used here with the UD-Q4\_K\_XL quant.  
  Also in: Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087923865813193027) · [notes](../notes/2026-08-13-run-muse-glimmer-30b-locally-on-an-rtx-3090-with-llama-cpp.md)), Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087041258766413927) · [notes](../notes/2026-08-11-running-muse-glimmer-30b-locally-with-llama-cpp-and-the.md)), Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087038764136972499) · [notes](../notes/2026-08-11-run-muse-glimmer-30b-locally-with-llama-cpp-and-connect-it.md))
- [ ] **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** · tool · huggingface.co · free  
  A GGUF build of Ornith 1.5, a 35B mixture-of-experts model with about 3B active parameters.
