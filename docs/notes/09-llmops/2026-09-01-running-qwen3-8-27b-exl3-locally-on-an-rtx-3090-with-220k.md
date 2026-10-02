# Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context

Melvin Vivas · X post · 2026-09-01 · [Open on X](https://x.com/melvindvivas/status/2094737166354293091)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

The creator shares the .env settings he used to run Qwen3.8-27B in EXL3 quantization on a single 24GB RTX 3090 with a 220K-token context, using a DFlash2 draft model for speculative decoding. His usual smoke test is building a CRM app with SQLite. The output was decent but needed a few iterations, and the kanban tasks were draggable. The quoted post (from @MiaAI_lab) reports about 64.5 tok/s at 262K context using MTP drafting.

## Key points

- Creator's config: GPU_MEM_GB=22, CONTEXT_SIZE=220000, CACHE_QUANT=4, DRAFT=dflash2, DRAFT_DIR=models/Qwen3.8-27B-DFlash2-EXL3-5.0bpw
- The draft model is a 5.0bpw EXL3 DFlash2 model, used for speculative decoding to speed up generation
- Quantizing the KV cache (CACHE_QUANT=4) makes very long contexts fit in 24GB of VRAM
- Quoted config: DRAFT=mtp, CONTEXT_SIZE=262144, CACHE_QUANT=8,4, GPU_MEM_GB=22 on an RTX 3090
- Reported speed at 262K context: 65.98, 63.23 and 64.41 tok/s, averaging about 64.5 tok/s
- Smoke test: ask the model to build a CRM app backed by SQLite with a draggable kanban board; it took several iterations

## Resources mentioned

- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)) and 24 more
- [ ] **[ExLlamaV3 (EXL3)](https://github.com/turboderp-org/exllamav3)** · repo · github.com · free  
  turboderp's inference library and the EXL3 quantization format it uses to run quantized LLMs on consumer NVIDIA GPUs.  
  Also in: Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099754504292114785) · [notes](../../notes/09-llmops/2026-09-15-running-qwen3-8-27b-exl3-on-an-rtx-3090-with-262k-context.md)), Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../../notes/09-llmops/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))
- [ ] **[Qwen3.8-27B-DFlash2-EXL3-5.0bpw](https://huggingface.co/Mia-AiLab/Qwen3.8-27B-DFlash2-EXL3-5.0bpw)** · tool · huggingface.co · free  
  A DFlash2 draft model for Qwen3.8-27B, used for speculative decoding.
- [ ] **[NVIDIA RTX 3090](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090-3090ti/)** · tool · nvidia.com · paid  
  A consumer GPU with 24GB of VRAM, often used to run LLMs locally.  
  Also in: Running Hermes Agent with Local Models on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2076744530456678771) · [notes](../../notes/07-agents/2026-07-14-running-hermes-agent-with-local-models-on-an-rtx-3090.md))
- [ ] **[SQLite](https://www.sqlite.org)** · tool · sqlite.org · free  
  A lightweight embedded SQL database stored in a file.  
  Also in: Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), One-Shotting a Slack Clone with Fable 5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2064807455435956586) · [notes](../../notes/13-ai-tools/2026-06-11-one-shotting-a-slack-clone-with-fable-5.md)), Google Antigravity 2.0: Multi-Agent Desktop App Walkthrough (Subagents, Scheduled Tasks) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056815299677290730) · [notes](../../notes/13-ai-tools/2026-05-19-google-antigravity-2-0-multi-agent-desktop-app-walkthrough.md)), Local Qwen 3.5 Adds an Express API and SQLite to Make an App Full-Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2030343979829801360) · [notes](../../notes/13-ai-tools/2026-03-08-local-qwen-3-5-adds-an-express-api-and-sqlite-to-make-an.md))
- [ ] **[MiaAI\_lab (@MiaAI\_lab on X)](https://x.com/MiaAI_lab)** · person · x.com · free  
  X account that published the experimental Qwen3.8-27B EXL3 release for serving long contexts on 24GB GPUs.  
  Also in: Running Qwen3.8-27B EXL3 on an RTX 3090 with 262K Context at ~64 tok/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099754504292114785) · [notes](../../notes/09-llmops/2026-09-15-running-qwen3-8-27b-exl3-on-an-rtx-3090-with-262k-context.md)), Long-Context Local LLM on an RTX 3090: .env Config and ~64 tok/s Benchmark (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095350341999227217) · [notes](../../notes/09-llmops/2026-09-03-long-context-local-llm-on-an-rtx-3090-env-config-and-64-tok.md)), Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../../notes/09-llmops/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))

## Try this

- [ ] Try the shared .env configs to run Qwen3.8-27B locally on a 24GB GPU
- [ ] Use a fixed smoke test (e.g., a CRM app with SQLite) to compare local models
- [ ] Build a CRM app with SQLite and a draggable kanban board as a smoke test for coding models
