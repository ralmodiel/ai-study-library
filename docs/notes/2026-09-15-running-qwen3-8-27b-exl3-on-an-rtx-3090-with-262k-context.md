# Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s

Melvin Vivas · X video post · 2026-09-15 · 0:12 · 356 views · [Open on X](https://x.com/melvindvivas/status/2099754504292114785)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

A short post sharing a working local-inference setup for Qwen3.8-27B quantized in the EXL3 format on one 24 GB RTX 3090. Credit for the setup goes to @MiaAI_lab. The post gives the exact .env settings: MTP draft decoding, a 262,144-token context, a quantized KV cache and a 22 GB GPU memory budget. It reports about 64.5 tokens/s on average and says RTX 4090 or newer GPUs could run faster because they support NVFP4.

## Key points

- Target hardware: a single NVIDIA RTX 3090 (24 GB VRAM) running Qwen3.8-27B quantized in the EXL3 format.
- .env config used: DRAFT=mtp, CONTEXT_SIZE=262144, CACHE_QUANT=8,4, GPU_MEM_GB=22.
- DRAFT=mtp turns on multi-token-prediction (speculative) drafting to speed up generation.
- CACHE_QUANT=8,4 quantizes the KV cache. It most likely means 8-bit keys and 4-bit values, which is what lets a 262K context fit in VRAM.
- GPU_MEM_GB=22 caps memory use below the card's 24 GB, leaving some headroom.
- Measured speed at 262K context: 65.98, 63.23 and 64.41 tok/s across three runs, about 64.5 tok/s on average.
- RTX 4090 and newer GPUs may be faster because they support the NVFP4 low-precision format.

## Resources mentioned

- [ ] **[Qwen3.8-27B EXL3](https://huggingface.co/Mia-AiLab/Qwen3.8-27B-EXL3-3.5bpw)** · tool · huggingface.co · free  
  Experimental EXL3-quantized build of the Qwen3.8-27B model that can run with 200K+ context on a single 24GB GPU.  
  Also in: Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../notes/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))
- [ ] **[ExLlamaV3 (EXL3)](https://github.com/turboderp-org/exllamav3)** · repo · github.com · free  
  turboderp's inference library and the EXL3 quantization format it uses to run quantized LLMs on consumer NVIDIA GPUs.  
  Also in: Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../notes/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md)), Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../notes/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))
- [ ] **[MiaAI\_lab (@MiaAI\_lab on X)](https://x.com/MiaAI_lab)** · person · x.com · free  
  X account that published the experimental Qwen3.8-27B EXL3 release for serving long contexts on 24GB GPUs.  
  Also in: Long-Context Local LLM on an RTX 3090: .env Config and ~64 tok/s Benchmark (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095350341999227217) · [notes](../notes/2026-09-03-long-context-local-llm-on-an-rtx-3090-env-config-and-64-tok.md)), Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../notes/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md)), Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../notes/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))

## Try this

- [ ] If you have an RTX 3090, try running Qwen3.8-27B EXL3 with MiaAI\_lab's setup.
- [ ] Use this .env config: DRAFT=mtp, CONTEXT\_SIZE=262144, CACHE\_QUANT=8,4, GPU\_MEM\_GB=22.
- [ ] Benchmark tokens/s over several runs and average them.
- [ ] On an RTX 4090 or newer, try NVFP4 for possibly faster inference.
- [ ] Run a 27B model locally with a 262K context on one consumer GPU, then compare tokens/s with and without MTP drafting and at different KV-cache quantization settings.
