# LFM2.5-2.6B Matches DeepSeek-V4-Flash on Tool Calling; LEAP Fine-Tuning

Melvin Vivas · X post · 2026-08-08 · [Open on X](https://x.com/melvindvivas/status/2086086945055363569)

**Topics:** AI Agents, Tool Use & MCP, Fine-tuning & Model Customization, Evaluation (Evals) & Testing · **Level:** intermediate

## Summary

The creator is trying Liquid AI's LEAP framework for fine-tuning and says it looks like it has everything you need. He quotes a benchmark where Liquid AI's LFM2.5-2.6B was run against DeepSeek-V4-Flash on one machine with 4x RTX 5090. Each job only counted as complete if the model made every required tool call, and the small model reportedly matched DeepSeek-V4 on tool calling while running 3.7x faster.

## Key points

- LFM2.5-2.6B is a small Liquid AI model that reportedly reaches DeepSeek-V4 level on tool calling.
- It reportedly ran 3.7x faster than DeepSeek-V4-Flash on the same hardware (4x RTX 5090).
- Test method: both models got the same three jobs, and a job only completed if the model made every tool call.
- Example job topics included a weather task.
- LEAP is Liquid AI's fine-tuning framework, which the creator says looks like it has everything you need.

## Resources mentioned

- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../../notes/05-embeddings-vectordb/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../../notes/10-fine-tuning/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../../notes/16-trends/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[LEAP (Liquid AI)](https://leap.liquid.ai/)** · tool · leap.liquid.ai · check price  
  Liquid AI's framework for fine-tuning and customizing its small models.  
  Also in: Smoke-Testing LFM Fine-tuning with Codex and Liquid AI's LEAP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087135593822294020) · [notes](../../notes/10-fine-tuning/2026-08-11-smoke-testing-lfm-fine-tuning-with-codex-and-liquid-ai-s.md)), Small Local Models + Fine-Tuning Instead of More Compute (Liquid AI, LEAP) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086156825297318213) · [notes](../../notes/10-fine-tuning/2026-08-09-small-local-models-fine-tuning-instead-of-more-compute.md))
- [ ] **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · tool · huggingface.co · free  
  Liquid AI's small language model, which can be paired with the LFM2.5-VL-3B vision model.  
  Also in: Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../../notes/07-agents/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Coworker with Liquid AI LFM2.5-2.6B via LM Studio on a Mac (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092602149440196867) · [notes](../../notes/07-agents/2026-08-26-coworker-with-liquid-ai-lfm2-5-2-6b-via-lm-studio-on-a-mac.md)), Zero-Cost Coworker Setup: OpenRouter Free Models + Local LFM2.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092562143443034155) · [notes](../../notes/07-agents/2026-08-26-zero-cost-coworker-setup-openrouter-free-models-local-lfm2-5.md)), Coworker: A Subscription-Free AI Agent on Local LFM2.5-2.6B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092525819084386315) · [notes](../../notes/07-agents/2026-08-26-coworker-a-subscription-free-ai-agent-on-local-lfm2-5-2-6b.md)) and 9 more
- [ ] **[DeepSeek V4 Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** · tool · huggingface.co · free  
  DeepSeek model used as the comparison baseline in the tool-calling benchmark.  
  Also in: Low-Cost Agent Run: DeepSeek V4 Flash via OpenRouter in ohmypi (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094115198772863000) · [notes](../../notes/09-llmops/2026-08-31-low-cost-agent-run-deepseek-v4-flash-via-openrouter-in.md)), Running Codex with DeepSeek V4 Flash through OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089313703707701502) · [notes](../../notes/13-ai-tools/2026-08-17-running-codex-with-deepseek-v4-flash-through-openrouter.md)), DeepSeek V4 Flash at 90% Off on Nous Portal (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084839294531997716) · [notes](../../notes/03-llm-fundamentals/2026-08-05-deepseek-v4-flash-at-90-off-on-nous-portal.md)), Qwen3.8-Max on the Frontend Code Arena cost-performance frontier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084174074201416042) · [notes](../../notes/03-llm-fundamentals/2026-08-03-qwen3-8-max-on-the-frontend-code-arena-cost-performance.md)) and 3 more

## Try this

- [ ] Check out Liquid AI's LEAP framework for fine-tuning.
- [ ] Try LFM2.5-2.6B for tool-calling tasks.
- [ ] Build a small tool-calling benchmark: give a small model and a large model the same multi-tool jobs, count a job as passed only if every required tool call is made, and compare pass rate and speed.
