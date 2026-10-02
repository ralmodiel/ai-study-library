# Run Laya Decision models locally with Unsloth on 4GB RAM

Melvin Vivas · X post · 2026-09-29 · [Open on X](https://x.com/melvindvivas/status/2104744976089579549)

**Topics:** LLMOps, Deployment & Monitoring, Fine-tuning & Model Customization · **Level:** intermediate

## Summary

Unsloth now lets you run Laya Decision models, described as an alternative to Jev, on your own machine with as little as 4GB of RAM. It works on CPU, Mac, Windows, Linux and GPU. Unsloth Desktop can serve Laya through a Jev-compatible API.

## Key points

- Laya Decision models can run locally on about 4GB of RAM.
- Supported setups: CPU, Mac, Windows, Linux and GPU.
- Unsloth Desktop serves Laya through a Jev-compatible API, so code written for Jev can point to it instead.
- Unsloth publishes a setup guide in its documentation.

## Resources mentioned

- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)), QLoRA fine-tune Gemma 4 E2B with Unsloth as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101525110196945095) · [notes](../notes/2026-09-20-qlora-fine-tune-gemma-4-e2b-with-unsloth-as-a-model-router.md)) and 29 more
- [ ] **[Unsloth Documentation: Decision Laya guide](https://unsloth.ai/docs/models/decision-laya)** · docs · unsloth.ai · free  
  Unsloth's guide to running and serving Laya Decision models locally.
- [ ] **[Unsloth Desktop](https://unsloth.ai/docs/desktop)** · tool · unsloth.ai · free  
  Unsloth's desktop app for running local models and serving them through compatible APIs.
- [ ] **[Laya Decision models](https://laya.convaiinnovations.com/)** · tool · laya.convaiinnovations.com · free  
  A model family pitched as an alternative to Jev that can run locally on low-memory hardware.
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)) and 10 more

## Try this

- [ ] Follow the Unsloth guide to run Laya locally.
- [ ] Serve Laya locally through Unsloth Desktop and point an existing Jev-based app at the compatible API.
