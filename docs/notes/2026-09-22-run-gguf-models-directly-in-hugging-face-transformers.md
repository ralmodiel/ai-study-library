# Run GGUF models directly in Hugging Face Transformers

Melvin Vivas · X post · 2026-09-22 · [Open on X](https://x.com/melvindvivas/status/2102408393105551373)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Hugging Face Transformers can now run GGUF models directly. The work brings ggml's Metal kernels into the transformers ecosystem for better compatibility and performance, especially on Apple Silicon.

## Key points

- GGUF quantized models can now be loaded and run directly with transformers.
- ggml's Metal kernels are integrated, which speeds up inference on Apple Silicon Macs.
- This connects the llama.cpp/ggml ecosystem with the transformers ecosystem.

## Resources mentioned

- [ ] **[Hugging Face Transformers](https://github.com/huggingface/transformers)** · tool · github.com · free  
  Open-source library for loading and running pretrained models, which now supports GGUF directly.  
  Also in: Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), AIBackends 0.4.0: Liquid AI LFM2.5 Models on llama.cpp and Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088665588189311348) · [notes](../notes/2026-08-16-aibackends-0-4-0-liquid-ai-lfm2-5-models-on-llama-cpp-and.md)), Gemma 4 Gets Up to 3x Faster with MTP Drafters (Melvin Vivas on [X](https://x.com/melvindvivas/status/2051722037857771972) · [notes](../notes/2026-05-06-gemma-4-gets-up-to-3x-faster-with-mtp-drafters.md))
- [ ] **[ggml](https://github.com/ggml-org/ggml)** · repo · github.com · free  
  Tensor library behind llama.cpp and the GGUF format, with Metal kernels for Apple GPUs.

## Try this

- [ ] Try loading a GGUF model with transformers on a Mac to test the Metal kernel speedup.
