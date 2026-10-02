# AIBackends: An API Layer Between Your App and AI Models (Now with Jev)

Melvin Vivas · X video post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100848362648195307)

**Topics:** AI System Design & Architecture, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator's open-source AIBackends API server now supports TypeSafe AI's Jev model. AIBackends is an abstraction layer for common AI use cases, so you can change model and provider integrations outside your main app. It runs locally with Ollama or LM Studio, or in the cloud via OpenRouter, OpenAI, Anthropic and others.

## Key points

- Put AI calls behind a separate API layer to decouple them from your main app
- AIBackends supports multiple models and providers for common AI use cases
- Run locally with Ollama or LM Studio, or in the cloud via OpenRouter, OpenAI or Anthropic
- It now supports Jev by TypeSafe AI

## Resources mentioned

- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../notes/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../notes/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../notes/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[TypeSafe AI (@typesafeai) on X](https://x.com/typesafeai)** · person · x.com · free  
  The X account of TypeSafe AI, the company that makes Jev and the System One models.  
  Also in: Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)), Not every problem needs an LLM: small fine-tuned models (Jev by TypeSafe AI) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101203821754249398) · [notes](../notes/2026-09-19-not-every-problem-needs-an-llm-small-fine-tuned-models-jev.md)), Jev model added to the AIBackends API via Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101199012615561488) · [notes](../notes/2026-09-19-jev-model-added-to-the-aibackends-api-via-vercel-ai-gateway.md)) and 6 more
- [ ] **[Ollama](https://x.com/ollama)** · tool · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source tool for downloading and running LLMs on your own machine with minimal setup.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../notes/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../notes/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 12 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../notes/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), Post-training Qwen3.5-2B on your own X posts with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099679217839677724) · [notes](../notes/2026-09-15-post-training-qwen3-5-2b-on-your-own-x-posts-with-unsloth.md)) and 31 more
- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more

## Try this

- [ ] Try AIBackends as an abstraction layer between your app and AI providers
