# Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M

Melvin Vivas · X video post · 2026-09-27 · 2:16 · 510 views · [Open on X](https://x.com/melvindvivas/status/2103886593413247485)

**Topics:** LLMOps, Deployment & Monitoring, AI System Design & Architecture, LLM Fundamentals · **Level:** intermediate

## Summary

This short demo shows how Liquid AI's LFM 2.5-Encoder-350M routes prompts zero-shot. It sends simple requests to cheap or small models and complex ones to expensive models. The categories are supplied at runtime, so you can add, remove or rewrite routes without training a new classifier. The same mechanism can catch off-topic or low-value requests and send them to a cheaper model, a safe default, or a decline.

## Key points

- Core idea: not every request needs the largest, most expensive model. Send complex tasks to strong models and simple ones to small or free models.
- Example device-assistant routes: a weather query or setting a timer is a simple function call, while planning and booking a trip is a complex multi-step agentic task.
- Other routing examples: send code prompts to the right programming language, route math prompts, or classify prompts by topic.
- How it works: the encoder reads the full prompt and scores it against every category in one forward pass. It runs locally and almost instantly.
- It is zero-shot: categories are given at runtime, so adding a new route (for example 'soccer agent') needs no retraining.
- Demo: 'Who won the 2026 FIFA World Cup?' first went to the complex agentic task route. After a 'soccer agent' category was added at runtime, it went to the soccer agent, while 'set a timer' still went to the simple route.
- Policy use: the same router can catch off-topic or low-value requests and send them to a cheaper model or a safe default, or decline them. This lets you write routing policy specific to your use case.

## Resources mentioned

- [ ] **[LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** · tool · huggingface.co · free  
  A 350M-parameter encoder model from Liquid AI that does zero-shot prompt classification and routing against categories you supply at runtime.  
  Also in: AIBackends v0.7.0: Prompt Routing with Liquid AI's LFM2.5 Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092949343510958223) · [notes](../notes/2026-08-27-aibackends-v0-7-0-prompt-routing-with-liquid-ai-s-lfm2-5.md)), Model Routing Fine-Tuned on Your Agent Harness Traces (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092917641421996433) · [notes](../notes/2026-08-27-model-routing-fine-tuned-on-your-agent-harness-traces.md)), Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092904020239421888) · [notes](../notes/2026-08-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Zero-Shot Prompt Routing by Task Complexity with LFM2.5-Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086292950125040027) · [notes](../notes/2026-08-09-zero-shot-prompt-routing-by-task-complexity-with-lfm2-5.md))
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../notes/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)), Local Speech-to-Text with LFM2.5-Audio-1.5B and llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097041003681399127) · [notes](../notes/2026-09-08-local-speech-to-text-with-lfm2-5-audio-1-5b-and-llama-cpp.md)) and 19 more

## Try this

- [ ] Try LFM 2.5-Encoder-350M as a zero-shot router that sends simple requests to cheap models and complex ones to expensive models.
- [ ] Define routing categories at runtime and add, remove or rewrite them as your use case changes, with no classifier retraining.
- [ ] Add routes that catch off-topic or low-value requests and send them to a cheaper model or a safe default, or decline them.
- [ ] A device-assistant router that sends simple function calls (weather, timers) to a small model and complex multi-step agentic tasks (trip planning and booking) to a large model.
- [ ] A topic router that sends prompts to specialist agents (for example a soccer agent) added at runtime.
- [ ] A coding or math prompt router that sends each prompt to the right language-specific or domain-specific handler.
