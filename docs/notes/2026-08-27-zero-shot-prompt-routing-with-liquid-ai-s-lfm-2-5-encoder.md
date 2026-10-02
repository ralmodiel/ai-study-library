# Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M

Melvin Vivas · X video post · 2026-08-27 · 2:16 · 839 views · [Open on X](https://x.com/melvindvivas/status/2092904020239421888)

**Topics:** LLMOps, Deployment & Monitoring, AI System Design & Architecture, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

This demo shows how a small encoder model, Liquid AI's LFM 2.5-Encoder-350M, can route prompts zero-shot. It sends simple requests to cheap models and complex ones to expensive models. You set the categories at runtime, so you can add, remove or rewrite routes without retraining a classifier. The demo adds a "soccer agent" category on the fly, and the router sends soccer questions to it right away.

## Key points

- Not every request needs the largest, most expensive model. Send complex tasks to frontier models and simple ones to smaller, cheaper (or free) models.
- Example routes for a device assistant: weather queries or setting a timer are simple function calls, while planning and booking a trip is a complex multi-step agentic task.
- Routing can also be done by domain, for example sending code prompts to the right programming-language handler, handling math separately, or classifying by topic.
- LFM 2.5-Encoder reads the full prompt and scores it against every category in a single forward pass. It runs locally and responds almost instantly.
- Categories are given at runtime, so you can add, remove or rewrite them without training a new classifier.
- Demo: 'Who won the 2026 FIFA World Cup?' first went to the complex agentic route. After a 'soccer agent' category was added at runtime, soccer questions went there, and 'set a timer' still routed correctly.
- The same mechanism can catch off-topic or low-value requests and send them to a cheaper model or a safe default, or decline them, so routing policy fits your use case.
- The creator argues that changing categories at runtime is the key feature for self-optimizing systems.

## Resources mentioned

- [ ] **[LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** · tool · huggingface.co · free  
  A 350M-parameter encoder model from Liquid AI that does zero-shot prompt classification and routing against categories you supply at runtime.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), AIBackends v0.7.0: Prompt Routing with Liquid AI's LFM2.5 Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092949343510958223) · [notes](../notes/2026-08-27-aibackends-v0-7-0-prompt-routing-with-liquid-ai-s-lfm2-5.md)), Model Routing Fine-Tuned on Your Agent Harness Traces (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092917641421996433) · [notes](../notes/2026-08-27-model-routing-fine-tuned-on-your-agent-harness-traces.md)), Zero-Shot Prompt Routing by Task Complexity with LFM2.5-Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086292950125040027) · [notes](../notes/2026-08-09-zero-shot-prompt-routing-by-task-complexity-with-lfm2-5.md))
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../notes/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[Original LFM 2.5-Encoder prompt routing demo video (YouTube)](https://www.youtube.com/watch?v=DkJ3-XLuk0c)** · video · youtube.com · free  
  The full original YouTube demo of zero-shot prompt routing with LFM 2.5-Encoder. The caption link appears truncated and looked broken when checked.

## Try this

- [ ] Route requests by complexity: send simple ones to small or cheap models and complex agentic tasks to the expensive models.
- [ ] Define routing categories at runtime and update them as you add new agents, with no retraining needed.
- [ ] Add routes that catch off-topic or low-value requests and send them to a cheaper model or a safe default, or decline them.
- [ ] Build a device-assistant router that sends simple function calls (weather, timers) to a small model and multi-step agentic tasks (trip planning and booking) to a larger model.
- [ ] Build a code router that sends each prompt to a handler or model for the right programming language.
- [ ] Add a new domain agent (for example a soccer agent) by adding its category to the router at runtime.
