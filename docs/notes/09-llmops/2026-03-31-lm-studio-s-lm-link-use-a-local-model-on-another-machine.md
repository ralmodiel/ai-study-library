# LM Studio's LM Link: Use a Local Model on Another Machine

Melvin Vivas · X post · 2026-03-31 · [Open on X](https://x.com/melvindvivas/status/2038825719464329687)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** beginner

## Summary

LM Link, a feature of LM Studio, connects one LM Studio instance to another. The creator writes code on a Mac while his app sends inference requests to a local model running on a PC with a GPU, so you can develop on a light machine and still use local GPU inference.

## Key points

- LM Link connects one LM Studio instance to another LM Studio instance.
- Use case: write code on a laptop or Mac and run the model on a separate PC that has a GPU.
- The app you're building calls the remote local model for inference, so no cloud API is needed.
- The creator calls it the best feature of LM Studio.

## Resources mentioned

- [ ] **[LM Link (LM Studio)](https://lmstudio.ai/link)** · tool · lmstudio.ai · check price  
  An LM Studio feature for using your local models remotely from another LM Studio instance.
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../../notes/10-fine-tuning/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more

## Try this

- [ ] Read the LM Link details at lmstudio.ai/link
- [ ] Run a model on your GPU machine and connect to it from your development machine
- [ ] Build an app on a laptop that sends inference requests to a local LLM on a separate GPU PC through LM Link
