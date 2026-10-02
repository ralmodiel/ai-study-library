# Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework

Melvin Vivas · X post · 2026-09-25 · [Open on X](https://x.com/melvindvivas/status/2103367260568224039)

**Topics:** Fine-tuning & Model Customization · **Level:** advanced

## Summary

Melvin Vivas shares Halo, a new fine-tuning framework, along with Liquid AI's two official recipes for fine-tuning their Mixture-of-Experts models. One recipe is an SFT notebook for LFM2.5-8B-A1B in the Liquid4All cookbook. The other is a Halo cookbook for LFM2-24B-A2B.

## Key points

- Halo is a newly released fine-tuning framework.
- Liquid AI published recipes for fine-tuning two of its MoE models with Halo: LFM2.5-8B-A1B and LFM2-24B-A2B.
- The names show total vs. active parameters: 8B total with about 1B active, and 24B total with about 2B active.
- The LFM2.5-8B-A1B recipe is a supervised fine-tuning (SFT) notebook in Liquid4All's cookbook repo.
- The LFM2-24B-A2B recipe is a markdown cookbook in Halo's own docs (human-docs/cookbooks).

## Resources mentioned

- [ ] **[Halo](https://github.com/whitecircle/halo)** · tool · github.com · check price  
  A new fine-tuning framework that has recipes for MoE models like Liquid AI's LFM2 family.
- [ ] **[SFT MoE with Halo notebook (LFM2.5-8B-A1B) - Liquid4All cookbook](https://github.com/Liquid4All/cookbook/blob/main/finetuning/notebooks/sft_moe_with_halo.ipynb)** · repo · github.com · free  
  Notebook showing supervised fine-tuning of the LFM2.5-8B-A1B MoE model with Halo.
- [ ] **[Halo LFM2 MoE cookbook (LFM2-24B-A2B)](https://github.com/whitecircle/halo/blob/main/human-docs/cookbooks/halo-lfm2-moe-cookbook.md)** · docs · github.com · free  
  Halo cookbook explaining how to fine-tune the LFM2-24B-A2B MoE model.
- [ ] **[LFM2.5-8B-A1B](https://www.liquid.ai/blog/lfm2-5-8b-a1b)** · tool · liquid.ai · free  
  Liquid AI's Mixture-of-Experts model with 8B total and about 1B active parameters.
- [ ] **[LFM2-24B-A2B](https://huggingface.co/LiquidAI/LFM2-24B-A2B)** · tool · huggingface.co · free  
  Liquid AI's Mixture-of-Experts model with 24B total and about 2B active parameters.
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)), Local Speech-to-Text with LFM2.5-Audio-1.5B and llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097041003681399127) · [notes](../notes/2026-09-08-local-speech-to-text-with-lfm2-5-audio-1-5b-and-llama-cpp.md)) and 19 more

## Try this

- [ ] Run the SFT MoE with Halo notebook to fine-tune LFM2.5-8B-A1B.
- [ ] Follow the Halo cookbook to fine-tune LFM2-24B-A2B.
