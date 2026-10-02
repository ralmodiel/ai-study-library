# Unsloth MTP GGUFs make Qwen3.6 run 1.4x faster locally

Melvin Vivas · X post · 2026-05-15 · [Open on X](https://x.com/melvindvivas/status/2054997812346343505)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Unsloth released experimental GGUFs of Qwen3.6 that use Multi-Token Prediction (MTP). They report a speed-up of more than 1.4x over the original GGUFs with no change in accuracy. The creator says he got about 200 tokens/s, which shows how speculative or multi-token decoding speeds up local inference.

## Key points

- MTP (Multi-Token Prediction) GGUFs let a model predict several tokens per step, so generation is faster.
- Qwen3.6 27B MTP: about 140 tokens/s.
- Qwen3.6 35B-A3B (MoE, about 3B active parameters) MTP: about 220 tokens/s on a single GPU.
- Reported speed-up of more than 1.4x over the original GGUFs, with the same accuracy.
- The creator got about 200 tok/s in his own test.
- The release is experimental. Unsloth published a guide along with the GGUFs.

## Resources mentioned

- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../../notes/09-llmops/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../../notes/09-llmops/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Qwen3.6-27B](https://huggingface.co/collections/Qwen/qwen36)** · tool · huggingface.co · free  
  Dense open-weight Qwen model. The MTP GGUF version runs at about 140 tokens/s.  
  Also in: Meta Muse Glimmer-30B: Open Weights Model That Beats Qwen3.6 37B on Agentic Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086778584744817009) · [notes](../../notes/16-trends/2026-08-10-meta-muse-glimmer-30b-open-weights-model-that-beats-qwen3-6.md)), Running Qwen3.6-27B Fully in the Browser With WebGPU and wllama (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056416824192094603) · [notes](../../notes/09-llmops/2026-05-19-running-qwen3-6-27b-fully-in-the-browser-with-webgpu-and.md)), Qwen 3.6 27B: An Open Local Model with Benchmarks Near Claude Opus 4.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046992524833955902) · [notes](../../notes/16-trends/2026-04-23-qwen-3-6-27b-an-open-local-model-with-benchmarks-near.md)), Run Qwen3.6-27B Locally in 18GB RAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046986431646896464) · [notes](../../notes/03-llm-fundamentals/2026-04-23-run-qwen3-6-27b-locally-in-18gb-ram-with-unsloth-ggufs.md)) and 1 more
- [ ] **[Qwen 3.6 35B (MTP)](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** · tool · huggingface.co · free  
  Qwen 3.6 mixture-of-experts model (35B total, about 3B active parameters) with multi-token prediction for local inference.  
  Also in: Use a Local Model for Confidential Data with Your Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085345530251735193) · [notes](../../notes/11-safety/2026-08-06-use-a-local-model-for-confidential-data-with-your-agent.md)), Running Qwen 3.6 35B locally on an RTX 3090 for agent tool calling (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084140795653976196) · [notes](../../notes/07-agents/2026-08-03-running-qwen-3-6-35b-locally-on-an-rtx-3090-for-agent-tool.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../../notes/07-agents/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Run Hermes Agent locally with Qwen 3.6 35B MTP in LM Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079169631802314881) · [notes](../../notes/07-agents/2026-07-20-run-hermes-agent-locally-with-qwen-3-6-35b-mtp-in-lm-studio.md)) and 4 more

## Try this

- [ ] Try Unsloth's MTP GGUFs and follow their guide to speed up local inference.
