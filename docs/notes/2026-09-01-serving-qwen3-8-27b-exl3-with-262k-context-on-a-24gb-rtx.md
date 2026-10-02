# Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090

Melvin Vivas · X video post · 2026-09-01 · 0:12 · 102,962 views · [Open on X](https://x.com/melvindvivas/status/2094687609910128781)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

Melvin Vivas shares his results running Mia's (@MiaAI_lab) experimental Qwen3.8-27B EXL3 release on one 24GB RTX 3090. He posts the .env settings he used: MTP draft decoding, a 262K context window, 8/4-bit KV cache quantization and a 22GB GPU memory budget. With those settings he got about 64.5 tokens/s on average. The quoted post says this setup is a way to serve 200K+ context with dflash2 on 24GB-VRAM cards (RTX 3090/4090/5090).

## Key points

- Hardware: a single RTX 3090 (24GB VRAM). The quoted post says RTX 4090 and 5090 owners can run it too.
- Model: Qwen3.8-27B in EXL3 format (the ExLlamaV3 quantization format). It is an experimental release, so expect bugs.
- .env config: DRAFT=mtp, CONTEXT_SIZE=262144, CACHE_QUANT=8,4, GPU_MEM_GB=22.
- DRAFT=mtp appears to turn on multi-token-prediction draft decoding (speculative decoding) to speed up generation.
- CACHE_QUANT=8,4 seems to set the KV cache quantization (probably 8-bit keys and 4-bit values), which is what lets a 262K context fit in 24GB.
- GPU_MEM_GB=22 caps VRAM use below the full 24GB to leave some headroom.
- Measured speed at 262K context: 65.98, 63.23 and 64.41 tok/s over three runs, about 64.5 tok/s on average.
- The quoted post says this is the only known way to serve Qwen3.8-27B with 200K+ context using dflash2 on 24GB VRAM.

## Resources mentioned

- [ ] **[MiaAI\_lab (@MiaAI\_lab on X)](https://x.com/MiaAI_lab)** · person · x.com · free  
  X account that published the experimental Qwen3.8-27B EXL3 release for serving long contexts on 24GB GPUs.  
  Also in: Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099754504292114785) · [notes](../notes/2026-09-15-running-qwen3-8-27b-exl3-on-an-rtx-3090-with-262k-context.md)), Long-Context Local LLM on an RTX 3090: .env Config and ~64 tok/s Benchmark (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095350341999227217) · [notes](../notes/2026-09-03-long-context-local-llm-on-an-rtx-3090-env-config-and-64-tok.md)), Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../notes/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md))
- [ ] **[Qwen3.8-27B EXL3](https://huggingface.co/Mia-AiLab/Qwen3.8-27B-EXL3-3.5bpw)** · tool · huggingface.co · free  
  Experimental EXL3-quantized build of the Qwen3.8-27B model that can run with 200K+ context on a single 24GB GPU.  
  Also in: Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099754504292114785) · [notes](../notes/2026-09-15-running-qwen3-8-27b-exl3-on-an-rtx-3090-with-262k-context.md))
- [ ] **[ExLlamaV3 (EXL3)](https://github.com/turboderp-org/exllamav3)** · repo · github.com · free  
  turboderp's inference library and the EXL3 quantization format it uses to run quantized LLMs on consumer NVIDIA GPUs.  
  Also in: Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099754504292114785) · [notes](../notes/2026-09-15-running-qwen3-8-27b-exl3-on-an-rtx-3090-with-262k-context.md)), Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../notes/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md))
- [ ] **[dflash2](https://github.com/z-lab/dflash)** · repo · github.com · free  
  Open-source speculative decoding method that uses a block-diffusion drafter to speed up LLM inference, with support for Gemma 4.  
  Also in: Speeding Up Gemma 4 Inference: MTP (3x) vs. DFlash Speculative Decoding (6x) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052014299351261402) · [notes](../notes/2026-05-06-speeding-up-gemma-4-inference-mtp-3x-vs-dflash-speculative.md))

## Try this

- [ ] Use this .env config on a 24GB GPU: DRAFT=mtp, CONTEXT\_SIZE=262144, CACHE\_QUANT=8,4, GPU\_MEM\_GB=22.
- [ ] Benchmark tokens/s over several runs and average them, as Melvin did.
- [ ] Self-host a long-context (262K) 27B model on one consumer GPU and benchmark tokens/s with different KV cache quantization and speculative decoding settings.
