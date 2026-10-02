# Run Qwen3.8-Flash-Next (125B MoE) Locally with Unsloth GGUFs

Melvin Vivas · X post · 2026-08-27 · [Open on X](https://x.com/melvindvivas/status/2092664202116911294)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Shares news that Qwen3.8-Flash-Next, a 125B mixture-of-experts model, can now run locally using Unsloth's GGUF quantizations. The post says it needs about 75GB of RAM and that the model is built so CPU RAM or unified-memory setups get close to VRAM speeds. It links Unsloth's guide and the GGUF files.

## Key points

- Qwen3.8-Flash-Next is a 125B-parameter Mixture-of-Experts (MoE) model.
- The post says it outperforms Claude-Opus-4.6 (Max). This is a claim from the quoted post, not independently verified.
- Unsloth GGUF quantizations let it run in about 75GB of RAM.
- The model is designed so CPU RAM or unified-memory machines (e.g., Macs) reach near-VRAM inference speeds.
- Unsloth publishes step-by-step docs for running new models locally.

## Resources mentioned

- [ ] **[Unsloth LLM Tutorials (Unsloth Documentation)](https://unsloth.ai/docs/models/tutorials)** · docs · unsloth.ai · free  
  Unsloth's guides for running and fine-tuning open LLMs locally, including the Qwen3.8-Next guide.  
  Also in: Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Run Qwen3.6-27B Locally in 18GB RAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046986431646896464) · [notes](../notes/2026-04-23-run-qwen3-6-27b-locally-in-18gb-ram-with-unsloth-ggufs.md))
- [ ] **[Unsloth Qwen3.8-Flash-Next-GGUF (Hugging Face)](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** · tool · huggingface.co · free  
  Quantized GGUF weights of Qwen3.8-Flash-Next published by Unsloth on Hugging Face.
- [ ] **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** · tool · huggingface.co · free  
  Open 125B MoE model from Qwen that is tuned to run fast on CPU RAM or unified memory.
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more

## Try this

- [ ] Follow the Unsloth guide to run Qwen3.8-Flash-Next locally if you have about 75GB of RAM or unified memory.
