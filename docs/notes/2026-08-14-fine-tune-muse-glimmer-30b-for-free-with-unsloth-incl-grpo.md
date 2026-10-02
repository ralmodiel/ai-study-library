# Fine-Tune Muse Glimmer 30B for Free with Unsloth (incl. GRPO)

Melvin Vivas · X post · 2026-08-14 · [Open on X](https://x.com/melvindvivas/status/2088254682074628561)

**Topics:** Fine-tuning & Model Customization · **Level:** intermediate

## Summary

Shares Unsloth's announcement that Meta's Muse Glimmer 30B can now be fine-tuned for free with Unsloth notebooks. The notebooks also support GRPO reinforcement-learning training. Unsloth says it trains 1.5x faster with 50% less VRAM than FlashAttention-2 setups, so training fits locally in 24GB of VRAM.

## Key points

- Meta Muse Glimmer 30B can be fine-tuned for free with Unsloth's notebooks.
- The free notebook also supports GRPO, a reinforcement-learning training method.
- Unsloth claims 1.5x faster training and 50% less VRAM than FlashAttention-2 (FA2) setups.
- Local training is possible on a GPU with 24GB of VRAM (e.g., RTX 3090/4090).
- The guide and free notebooks are in Unsloth's docs under models/muse-glimmer/train.

## Resources mentioned

- [ ] **[Unsloth Documentation: Muse Glimmer guide](https://unsloth.ai/docs/models/muse-glimmer)** · docs · unsloth.ai · free  
  Unsloth's guide and free notebooks for fine-tuning and GRPO-training Muse Glimmer 30B.  
  Also in: Muse Glimmer 30B: Unsloth GGUF Release and Run Guide (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086784123885248876) · [notes](../notes/2026-08-10-muse-glimmer-30b-unsloth-gguf-release-and-run-guide.md))
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Meta Muse Glimmer 30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** · tool · huggingface.co · free  
  A 30B open model from Meta that can be fine-tuned and run locally.
- [ ] **[FlashAttention-2](https://github.com/Dao-AILab/flash-attention)** · tool · github.com · free  
  Optimized attention kernel, used here as the baseline for Unsloth's speed and memory claims.

## Try this

- [ ] Open the Unsloth Muse Glimmer guide and run the free fine-tuning notebook.
- [ ] Try the GRPO RL training option in the notebook.
- [ ] Fine-tune Muse Glimmer 30B locally on a 24GB GPU for your own task with Unsloth.
