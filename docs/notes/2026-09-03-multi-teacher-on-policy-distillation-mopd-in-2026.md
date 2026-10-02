# Multi-Teacher On-Policy Distillation (MOPD) in 2026

Melvin Vivas · X post · 2026-09-03 · [Open on X](https://x.com/melvindvivas/status/2095322105172885931)

**Topics:** Fine-tuning & Model Customization, Industry Trends & Job Market · **Level:** advanced

## Summary

The creator shares a compilation of model distillation papers, quoting a post about Multi-Teacher On-Policy Distillation (MOPD). MOPD is a new post-training approach where one student model learns capabilities from several specialized RL teacher models. According to the quoted post, it's used in frontier models such as MiMo-V2-Flash, Kimi K3 and DeepSeek-V4. The paper list itself isn't linked in the material.

## Key points

- MOPD = Multi-Teacher On-Policy Distillation, an emerging post-training paradigm in 2026.
- A single student model absorbs capabilities from multiple specialized RL-trained teacher models.
- On-policy: the student learns from its own generated outputs, with teachers giving guidance on them.
- According to the quoted post, it's used in MiMo-V2-Flash, Kimi K3 and DeepSeek-V4.

## Resources mentioned

- [ ] **[MiMo-V2-Flash](https://github.com/XiaomiMiMo/MiMo-V2-Flash)** · tool · github.com · free  
  Xiaomi's MiMo model, cited as using multi-teacher on-policy distillation.
- [ ] **[Kimi K3](https://huggingface.co/moonshotai/Kimi-K3)** · tool · huggingface.co · free  
  Moonshot AI's large multimodal LLM with a 1M-token context window and Kimi Delta Attention.  
  Also in: Qwen3.8-Max on the Frontend Code Arena cost-performance frontier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084174074201416042) · [notes](../notes/2026-08-03-qwen3-8-max-on-the-frontend-code-arena-cost-performance.md)), 1-bit Kimi K3 GGUF Running Locally vs Claude Opus 5 and GPT 5.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082651738109338036) · [notes](../notes/2026-07-30-1-bit-kimi-k3-gguf-running-locally-vs-claude-opus-5-and-gpt.md)), Code Arena Fullstack Benchmark: Kimi K3 Ranks #1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082362914447729141) · [notes](../notes/2026-07-29-code-arena-fullstack-benchmark-kimi-k3-ranks-1.md)), Kimi K3 ranks #1 on Design Arena for frontend building (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079280968675012809) · [notes](../notes/2026-07-21-kimi-k3-ranks-1-on-design-arena-for-frontend-building.md)) and 1 more
- [ ] **[DeepSeek V4](https://huggingface.co/collections/deepseek-ai/deepseek-v4)** · tool · huggingface.co · free  
  A DeepSeek LLM, accessed through OpenRouter as the final fallback.  
  Also in: Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Cost-Saving Model Fallback Chain: Grok → Codex → OpenRouter DeepSeek (Melvin Vivas on [X](https://x.com/melvindvivas/status/2077235607118684426) · [notes](../notes/2026-07-15-cost-saving-model-fallback-chain-grok-codex-openrouter.md))

## Try this

- [ ] Read up on on-policy distillation and multi-teacher distillation, for example the technical reports of the models named.
