# Long-Context Local LLM on an RTX 3090: .env Config and ~64 tok/s Benchmark

Melvin Vivas · X video post · 2026-09-03 · 0:12 · 841 views · [Open on X](https://x.com/melvindvivas/status/2095350341999227217)

**Topics:** LLMOps, Deployment & Monitoring · **Level:** advanced

## Summary

Melvin Vivas shares a short post saying a local LLM setup from @MiaAI_lab runs on a single 24 GB RTX 3090. He gives the .env settings he used: an MTP draft for speculative decoding, a 262K-token context, a quantized KV cache and a 22 GB GPU memory limit. He measured about 64.5 tokens/s on average over three runs. The post doesn't name the model or the inference engine, so you'd need to open the original @MiaAI_lab post to get those.

## Key points

- Hardware: a single NVIDIA RTX 3090 (24 GB VRAM) was enough to run the setup.
- The .env config used: DRAFT=mtp, CONTEXT_SIZE=262144, CACHE_QUANT=8,4, GPU_MEM_GB=22.
- DRAFT=mtp most likely turns on multi-token prediction (MTP) as the draft method for speculative decoding, which speeds up generation.
- CONTEXT_SIZE=262144 sets a 262K-token context window.
- CACHE_QUANT=8,4 probably quantizes the KV cache (for example 8-bit keys and 4-bit values) so the long context fits in VRAM. This is an interpretation; the post doesn't say.
- GPU_MEM_GB=22 caps GPU memory at 22 GB, leaving some headroom on the 24 GB card.
- Benchmark at 262K context: 65.98, 63.23 and 64.41 tok/s, for an average of about 64.5 tok/s.
- The model and serving stack aren't named here. They're in the quoted @MiaAI_lab post, whose link is cut off in the caption.

## Resources mentioned

- [ ] **[MiaAI\_lab (@MiaAI\_lab on X)](https://x.com/MiaAI_lab)** · person · x.com · free  
  X account that published the experimental Qwen3.8-27B EXL3 release for serving long contexts on 24GB GPUs.  
  Also in: Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099754504292114785) · [notes](../../notes/09-llmops/2026-09-15-running-qwen3-8-27b-exl3-on-an-rtx-3090-with-262k-context.md)), Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../../notes/09-llmops/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md)), Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../../notes/09-llmops/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))
- [ ] **[NVIDIA GeForce RTX 3090](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090/)** · tool · nvidia.com · paid  
  Consumer GPU with 24 GB of VRAM, used here to run a long-context LLM locally.  
  Also in: Portable Computer Now Runs AI Agents and Models Locally on NVIDIA RTX PCs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099558149305024711) · [notes](../../notes/07-agents/2026-09-15-portable-computer-now-runs-ai-agents-and-models-locally-on.md)), Running Ornith-1.5-35B-A3B (Q4\_K\_M) at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381415557021767) · [notes](../../notes/09-llmops/2026-08-20-running-ornith-1-5-35b-a3b-q4-k-m-at-128k-context-on-an-rtx.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../../notes/13-ai-tools/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax H3 Locally on a Single RTX 3090 (Demo) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085439986699223322) · [notes](../../notes/16-trends/2026-08-06-running-minimax-h3-locally-on-a-single-rtx-3090-demo.md)) and 2 more

## Try this

- [ ] If you have an RTX 3090, find the original @MiaAI\_lab post to get the model and inference setup.
- [ ] Use the .env config: DRAFT=mtp, CONTEXT\_SIZE=262144, CACHE\_QUANT=8,4, GPU\_MEM\_GB=22.
- [ ] Run several generations and average the tok/s to benchmark your own throughput.
- [ ] Benchmark local LLM throughput on your own GPU at different context sizes and KV-cache quantization settings, with and without MTP speculative decoding.
