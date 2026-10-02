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
  Also in: Liquid AI Cookbook: Fine-Tuning LFMs with CPT, SFT, DPO and GRPO (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086998197264945489) · [notes](../notes/2026-08-11-liquid-ai-cookbook-fine-tuning-lfms-with-cpt-sft-dpo-and.md))
- [ ] **[LFM2.5-350M (Liquid AI)](https://huggingface.co/LiquidAI/LFM2.5-350M)** · tool · huggingface.co · free  
  Tiny 350M-parameter language model from Liquid AI, used as the base model for fine-tuning.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Hugging Face Cache Deduplication with Xet in huggingface\_hub v1.32 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100983401818046770) · [notes](../notes/2026-09-19-hugging-face-cache-deduplication-with-xet-in-huggingface.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)) and 34 more

## Try this

- [ ] Find the Hugging Face blog tutorial and follow it to fine-tune LFM2.5-350M with GRPO in TRL.
- [ ] Fine-tune a small (~350M) model with GRPO in TRL so it reliably outputs JSON matching your own schema, then compare valid-output rates before and after.
