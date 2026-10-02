# AIBackends v0.7.0: Prompt Routing with Liquid AI's LFM2.5 Encoder

Melvin Vivas · X post · 2026-08-27 · [Open on X](https://x.com/melvindvivas/status/2092949343510958223)

**Topics:** LLMOps, Deployment & Monitoring, AI System Design & Architecture, LLM Fundamentals · **Level:** intermediate

## Summary

Melvin Vivas released version 0.7.0 of his AIBackends Python library, which adds prompt routing with Liquid AI's LFM2.5-Encoder-350M. The router classifies each prompt zero-shot (without task-specific training), so complex tasks go to expensive, smarter models and simple ones go to small or free models.

## Key points

- Install with: pip install "aibackends[routing]".
- Routing uses Liquid AI's LFM2.5-Encoder-350M, a small encoder that classifies prompts zero-shot.
- Why it matters: as models get more expensive, save the most capable models for complex tasks.
- Send simple prompts to smaller, cheaper or free models to cut costs.

## Resources mentioned

- [ ] **[aibackends 0.7.0 (PyPI)](https://pypi.org/project/aibackends/0.7.0/)** · tool · pypi.org · free  
  PyPI page for the AIBackends Python package, version 0.7.0, which adds prompt routing.
- [ ] **[Release aibackends v0.7.0 — LFM2.5 Prompt Routing (donvito/aibackends)](https://github.com/donvito/aibackends/releases/tag/v0.7.0)** · repo · github.com · free  
  GitHub release notes for AIBackends v0.7.0 with LFM2.5 prompt routing.
- [ ] **[LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** · tool · huggingface.co · free  
  A 350M-parameter encoder model from Liquid AI that does zero-shot prompt classification and routing against categories you supply at runtime.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Model Routing Fine-Tuned on Your Agent Harness Traces (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092917641421996433) · [notes](../../notes/10-fine-tuning/2026-08-27-model-routing-fine-tuned-on-your-agent-harness-traces.md)), Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092904020239421888) · [notes](../../notes/09-llmops/2026-08-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Zero-Shot Prompt Routing by Task Complexity with LFM2.5-Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086292950125040027) · [notes](../../notes/09-llmops/2026-08-09-zero-shot-prompt-routing-by-task-complexity-with-lfm2-5.md))
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../../notes/05-embeddings-vectordb/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../../notes/10-fine-tuning/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../../notes/16-trends/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more

## Try this

- [ ] Install aibackends\[routing\] and try routing prompts to different models.
- [ ] Build a cost-aware router that sends simple prompts to a small or free model and hard prompts to a frontier model.
