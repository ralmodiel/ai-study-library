# Zero-Shot Prompt Routing by Task Complexity with LFM2.5-Encoder

Melvin Vivas · X video post · 2026-08-09 · 2:16 · 143 views · [Open on X](https://x.com/melvindvivas/status/2086292950125040027)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP, AI System Design & Architecture · **Level:** intermediate

## Summary

Melvin Vivas demos zero-shot prompt routing with the LFM2.5-Encoder bidirectional encoders. The router sends each request to the right model or agent based on how complex it is or what topic it covers, so simple requests don't use expensive large models. Categories are passed in at runtime. That means you can add, remove or rewrite routes without retraining a classifier. This can save tokens and money for coding agents and non-coding agents alike.

## Key points

- Not every request needs the largest, most expensive model. Route simple tasks (weather query, set a timer = a simple function call) away from complex ones (planning and booking a trip = a multi-step agentic task).
- LFM2.5-Encoder reads the full prompt and scores it against every candidate category in a single forward pass. It runs locally and almost immediately.
- Zero-shot: categories are supplied at runtime, so you can add, remove or rewrite them without training a new classifier.
- Demo: 'Who won the 2026 FIFA World Cup?' first went to the complex agentic route. After a 'soccer agent' category was added at runtime, soccer questions went to it, while 'set a timer' still went to the simple route.
- Other routing dimensions: send code prompts to the right programming language, route math prompts, or classify prompts by topic.
- The same mechanism can catch off-topic or low-value requests and send them to a cheaper model or a safe default, or decline them altogether.
- Quoted release figures: LFM2.5-Encoder-230M is about 3.7x faster than ModernBERT-base on CPU at 8,192 tokens (under 30s per forward pass vs. over 1.5 minutes). Both encoders stay fast at long context, even on CPU.
- The routing policy is tailored to your own use case.

## Resources mentioned

- [ ] **[LFM2.5-Encoder-230M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-230M)** · tool · huggingface.co · free  
  A small bidirectional encoder model from the LFM2.5 family. It stays fast at long context on CPU and can be used for zero-shot classification and prompt routing.
- [ ] **[LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** · tool · huggingface.co · free  
  A 350M-parameter encoder model from Liquid AI that does zero-shot prompt classification and routing against categories you supply at runtime.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), AIBackends v0.7.0: Prompt Routing with Liquid AI's LFM2.5 Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092949343510958223) · [notes](../../notes/09-llmops/2026-08-27-aibackends-v0-7-0-prompt-routing-with-liquid-ai-s-lfm2-5.md)), Model Routing Fine-Tuned on Your Agent Harness Traces (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092917641421996433) · [notes](../../notes/10-fine-tuning/2026-08-27-model-routing-fine-tuned-on-your-agent-harness-traces.md)), Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092904020239421888) · [notes](../../notes/09-llmops/2026-08-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md))
- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103467817156886893) · [notes](../../notes/10-fine-tuning/2026-09-25-train-your-own-llm-model-router-by-fine-tuning-modernbert.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../../notes/10-fine-tuning/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Fine-Tune ModernBERT-base as a Task-Routing Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101110603909873800) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tune-modernbert-base-as-a-task-routing-classifier.md)), Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100961076237971918) · [notes](../../notes/10-fine-tuning/2026-09-18-train-modernbert-as-a-prompt-router-between-two-models.md)) and 2 more

## Try this

- [ ] Define routing categories for your app (e.g., simple function call vs. complex multi-step agentic task) and score incoming prompts against them with an encoder.
- [ ] Add new categories at runtime (e.g., a domain-specific agent) instead of retraining a classifier.
- [ ] Send off-topic or low-value requests to a cheaper model or a safe default, or decline them.
- [ ] A device-assistant router that sends simple requests (weather, timers) to a small model and trip planning/booking to a complex agent.
- [ ] A domain-agent router, e.g., a soccer agent added as a runtime category to handle World Cup questions.
- [ ] A coding router that sends prompts to the agent for the right programming language, or a math/topic classifier router.
- [ ] A cost-saving gateway that catches off-topic or low-value requests and sends them to a cheap model or declines them.
