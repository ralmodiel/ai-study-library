# Smoke-Testing LFM Fine-tuning with Codex and Liquid AI's LEAP

Melvin Vivas · X post · 2026-08-11 · [Open on X](https://x.com/melvindvivas/status/2087135593822294020)

**Topics:** Fine-tuning & Model Customization, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator is trying out fine-tuning Liquid AI's LFM models with the LEAP framework, using Codex as a coding assistant. He starts with a 100-row smoke-test dataset to get a feel for the workflow. It shows a cheap way to check a fine-tuning pipeline before scaling up.

## Key points

- Run a smoke test with a tiny dataset (about 100 rows) before a full fine-tuning run.
- A smoke test checks data format, the training loop and outputs quickly and cheaply.
- Liquid AI's LEAP framework can be used to train and fine-tune LFM models.
- A coding agent like Codex can help write and run the fine-tuning scripts.

## Resources mentioned

- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../../notes/05-embeddings-vectordb/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../../notes/10-fine-tuning/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../../notes/16-trends/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[LEAP (Liquid AI)](https://leap.liquid.ai/)** · tool · leap.liquid.ai · check price  
  Liquid AI's framework for fine-tuning and customizing its small models.  
  Also in: Small Local Models + Fine-Tuning Instead of More Compute (Liquid AI, LEAP) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086156825297318213) · [notes](../../notes/10-fine-tuning/2026-08-09-small-local-models-fine-tuning-instead-of-more-compute.md)), LFM2.5-2.6B Matches DeepSeek-V4-Flash on Tool Calling; LEAP Fine-Tuning (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086086945055363569) · [notes](../../notes/07-agents/2026-08-08-lfm2-5-2-6b-matches-deepseek-v4-flash-on-tool-calling-leap.md))
- [ ] **[Liquid Foundation Models (LFM)](https://www.liquid.ai/models)** · tool · liquid.ai · free  
  Liquid AI's family of efficient foundation models that can be fine-tuned.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Smoke-test your fine-tuning pipeline on about 100 rows before a full training run.
- [ ] Fine-tune a small Liquid AI LFM model on a custom dataset using LEAP, with a coding agent writing the training scripts.
