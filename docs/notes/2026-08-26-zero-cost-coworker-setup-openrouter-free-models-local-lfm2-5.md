# Zero-Cost Coworker Setup: OpenRouter Free Models + Local LFM2.5

Melvin Vivas · X post · 2026-08-26 · [Open on X](https://x.com/melvindvivas/status/2092562143443034155)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** beginner

## Summary

Shows how to run the Coworker agent app for free. It combines free models from OpenRouter with local models such as Liquid AI's LFM2.5-2.6B running on your own machine.

## Key points

- OpenRouter offers free models that agent apps can call.
- Small local models such as LFM2.5-2.6B run on your own machine with no API cost.
- Mixing free cloud models and local models lets you run Coworker at zero cost.
- The creator plans to tune this setup for work use.

## Resources mentioned

- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../notes/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · tool · huggingface.co · free  
  Liquid AI's small language model, which can be paired with the LFM2.5-VL-3B vision model.  
  Also in: Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../notes/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Coworker with Liquid AI LFM2.5-2.6B via LM Studio on a Mac (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092602149440196867) · [notes](../notes/2026-08-26-coworker-with-liquid-ai-lfm2-5-2-6b-via-lm-studio-on-a-mac.md)), Coworker: A Subscription-Free AI Agent on Local LFM2.5-2.6B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092525819084386315) · [notes](../notes/2026-08-26-coworker-a-subscription-free-ai-agent-on-local-lfm2-5-2-6b.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 9 more
- [ ] **[Coworker (donvito/coworker)](https://github.com/donvito/coworker)** · repo · github.com · free  
  The creator's local-first desktop app where you pick an AI coworker and have it produce work such as invoices as finished PDFs.  
  Also in: Claude Opus 5.5 for Video Making: Creator's Showcase Thread (Coworker) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386225612415297) · [notes](../notes/2026-09-28-claude-opus-5-5-for-video-making-creator-s-showcase-thread.md)), Coworker: free open-source desktop AI coworker app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103533091117736005) · [notes](../notes/2026-09-26-coworker-free-open-source-desktop-ai-coworker-app.md)), Coworker: Open-Source Desktop App for AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101347063820955903) · [notes](../notes/2026-09-20-coworker-open-source-desktop-app-for-ai-agents.md)), Using Devin AI to Test the Coworker Desktop App on Windows (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100651879219044800) · [notes](../notes/2026-09-18-using-devin-ai-to-test-the-coworker-desktop-app-on-windows.md)) and 38 more

## Try this

- [ ] Set up Coworker with free OpenRouter models and a local LFM2.5-2.6B model for a zero-cost agent.
