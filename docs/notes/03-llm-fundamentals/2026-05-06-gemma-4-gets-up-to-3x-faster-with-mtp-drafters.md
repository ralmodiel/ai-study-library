# Gemma 4 Gets Up to 3x Faster with MTP Drafters

Melvin Vivas · X post · 2026-05-06 · [Open on X](https://x.com/melvindvivas/status/2051722037857771972)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Gemma 4 now has Multi-Token Prediction (MTP) drafters for speculative decoding. They give up to 3x more tokens per second with the same reasoning output. Support was available from day one in Transformers, MLX and vLLM, under an Apache 2.0 license.

## Key points

- MTP drafters use speculative decoding to speed up generation.
- Up to 3x more tokens/sec than normal Gemma 4.
- Same reasoning output, just faster.
- Day-0 support in Hugging Face Transformers, MLX and vLLM.
- Apache 2.0 license.

## Resources mentioned

- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../../notes/07-agents/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../../notes/16-trends/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../../notes/03-llm-fundamentals/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more
- [ ] **[Hugging Face Transformers](https://github.com/huggingface/transformers)** · tool · github.com · free  
  Open-source library for loading and running pretrained models, which now supports GGUF directly.  
  Also in: Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), Run GGUF models directly in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102408393105551373) · [notes](../../notes/09-llmops/2026-09-22-run-gguf-models-directly-in-hugging-face-transformers.md)), AIBackends 0.4.0: Liquid AI LFM2.5 Models on llama.cpp and Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088665588189311348) · [notes](../../notes/09-llmops/2026-08-16-aibackends-0-4-0-liquid-ai-lfm2-5-models-on-llama-cpp-and.md))
- [ ] **[MLX](https://github.com/ml-explore/mlx)** · repo · github.com · free  
  Apple's open-source array and ML framework for efficient inference on Apple Silicon.  
  Also in: LM Studio MLX v1.8.1: Vision Model Batching and Better Caching (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054975356730495041) · [notes](../../notes/09-llmops/2026-05-15-lm-studio-mlx-v1-8-1-vision-model-batching-and-better.md)), 1-bit Bonsai 8B Runs On-Device on iPhone at 40+ tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2039283700828082207) · [notes](../../notes/03-llm-fundamentals/2026-04-01-1-bit-bonsai-8b-runs-on-device-on-iphone-at-40-tok-s.md)), Qwen 3.5 2B Runs On-Device on iPhone with MLX (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028891298665775355) · [notes](../../notes/03-llm-fundamentals/2026-03-04-qwen-3-5-2b-runs-on-device-on-iphone-with-mlx.md))
- [ ] **[vLLM](https://github.com/vllm-project/vllm)** · repo · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source, high-throughput LLM inference and serving engine with continuous batching and efficient KV-cache management (PagedAttention).  
  Also in: Ollama vs vLLM: From Local AI Demo to Production Inference Serving (Bashiri Smith on [Facebook](https://www.facebook.com/reel/924011213633345) · [notes](../../notes/09-llmops/2026-09-01-ollama-vs-vllm-from-local-ai-demo-to-production-inference.md)), Serve GLM-5.2 NVFP4 with vLLM on NVIDIA Blackwell (Melvin Vivas on [X](https://x.com/melvindvivas/status/2070716408745574749) · [notes](../../notes/09-llmops/2026-06-27-serve-glm-5-2-nvfp4-with-vllm-on-nvidia-blackwell.md))

## Try this

- [ ] Compare Gemma 4's tokens/sec with and without MTP speculative decoding in Transformers, MLX or vLLM.
- [ ] Benchmark Gemma 4 speed with and without MTP drafters on your own hardware.
