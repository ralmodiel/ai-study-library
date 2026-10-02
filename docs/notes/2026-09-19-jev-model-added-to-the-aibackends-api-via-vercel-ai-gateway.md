# Jev model added to the AIBackends API via Vercel AI Gateway

Melvin Vivas · X post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2101199012615561488)

**Topics:** LLMOps, Deployment & Monitoring, AI System Design & Architecture · **Level:** intermediate

## Summary

The creator added support for TypeSafe AI's Jev model to his open-source AIBackends API server, routed through Vercel AI Gateway. Jev was free on the Gateway until Sept 25. The post shows how a gateway lets one backend switch between models and providers.

## Key points

- AIBackends (github.com/donvito/ai-backends) is an API server runtime for common AI use cases that supports multiple models and providers.
- It runs locally with Ollama or LM Studio, or in the cloud via OpenRouter, OpenAI, Anthropic and others.
- Jev by TypeSafe AI is now usable in AIBackends through Vercel AI Gateway.
- Vercel AI Gateway offered Jev free until Sept 25 (that promotion has now ended).
- A model gateway lets you add new models to an app without writing separate provider integrations.

## Resources mentioned

- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../notes/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../notes/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../notes/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[Vercel](https://x.com/vercel)** · tool · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Vercel's unified gateway for many LLM providers; the source of the open vs closed token-volume stats.  
  Also in: OpenAI DevDay 2026 Recap: Dots, Agents API, Codex Cloud & Marketplace (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105173002740695356) · [notes](../notes/2026-09-30-openai-devday-2026-recap-dots-agents-api-codex-cloud.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../notes/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), Open models now dominate token volume on Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101188319703134335) · [notes](../notes/2026-09-19-open-models-now-dominate-token-volume-on-vercel-ai-gateway.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 7 more
- [ ] **[TypeSafe AI (@typesafeai) on X](https://x.com/typesafeai)** · person · x.com · free  
  The X account of TypeSafe AI, the company that makes Jev and the System One models.  
  Also in: Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)), Not every problem needs an LLM: small fine-tuned models (Jev by TypeSafe AI) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101203821754249398) · [notes](../notes/2026-09-19-not-every-problem-needs-an-llm-small-fine-tuned-models-jev.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../notes/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 6 more
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)) and 10 more

## Try this

- [ ] Try Jev through the AIBackends API via Vercel AI Gateway (the free period ended Sept 25).
