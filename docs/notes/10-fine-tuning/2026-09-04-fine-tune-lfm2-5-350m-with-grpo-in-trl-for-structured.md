# Fine-Tune LFM2.5-350M with GRPO in TRL for Structured Outputs

Melvin Vivas · X post · 2026-09-04 · [Open on X](https://x.com/melvindvivas/status/2095897615141577108)

**Topics:** Fine-tuning & Model Customization, Prompt & Context Engineering · **Level:** advanced

## Summary

The creator points to a Hugging Face blog tutorial on fine-tuning a tiny model for better structured outputs. It fine-tunes Liquid AI's LFM2.5-350M with reinforcement learning (GRPO) for only 100 steps, using Hugging Face's TRL library. This shows that small models can be cheaply customized to produce reliable structured output.

## Key points

- Target model: LFM2.5-350M, a tiny 350M-parameter model, so it is cheap to train.
- Method: GRPO (Group Relative Policy Optimization), a reinforcement-learning fine-tuning method.
- Only 100 GRPO steps were needed to improve structured-output quality.
- Library: Hugging Face TRL, which provides a GRPO trainer.
- Use case: making a small model produce valid structured outputs (e.g. JSON matching a schema) more reliably.
- The tutorial is published on the Hugging Face blog. The link in the post is truncated.

## Resources mentioned

- [ ] **[Fine-tuning LFM2.5-350M for structured outputs with GRPO (Hugging Face blog)](https://huggingface.co/blog/grpo-with-trl-ifstruct)** · article · huggingface.co · free  
  Tutorial showing how to fine-tune LFM2.5-350M in 100 GRPO steps with TRL for better structured outputs.
- [ ] **[TRL (Hugging Face)](https://github.com/huggingface/trl)** · tool · github.com · free  
  Hugging Face's open-source library for post-training LLMs with SFT, DPO, GRPO and more.  
  Also in: Liquid AI Cookbook: Fine-Tuning LFMs with CPT, SFT, DPO and GRPO (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086998197264945489) · [notes](../../notes/10-fine-tuning/2026-08-11-liquid-ai-cookbook-fine-tuning-lfms-with-cpt-sft-dpo-and.md))
- [ ] **[LFM2.5-350M (Liquid AI)](https://huggingface.co/LiquidAI/LFM2.5-350M)** · tool · huggingface.co · free  
  Tiny 350M-parameter language model from Liquid AI, used as the base model for fine-tuning.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more

## Try this

- [ ] Find the Hugging Face blog tutorial and follow it to fine-tune LFM2.5-350M with GRPO in TRL.
- [ ] Fine-tune a small (~350M) model with GRPO in TRL so it reliably outputs JSON matching your own schema, then compare valid-output rates before and after.
