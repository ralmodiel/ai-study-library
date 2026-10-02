# Local Text-Only Workflows in ComfyUI with LM Studio and Gemma 4 E2B

Melvin Vivas · X post · 2026-05-20 · [Open on X](https://x.com/melvindvivas/status/2056947654148661472)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals · **Level:** intermediate

## Summary

The creator built custom ComfyUI nodes that call Gemma 4 E2B served locally by LM Studio. He uses them for text-only workflows, which shows ComfyUI's node graph can chain local LLMs as well as generate images.

## Key points

- ComfyUI custom nodes can call a local LLM server such as LM Studio
- Gemma 4 E2B is a small model that can run locally for text tasks
- ComfyUI's node graph can be used for text-only LLM pipelines, not just image generation
- Everything runs locally, with no API costs

## Resources mentioned

- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../../notes/13-ai-tools/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../../notes/09-llmops/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../../notes/13-ai-tools/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../../notes/13-ai-tools/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)) and 23 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../../notes/10-fine-tuning/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more
- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../../notes/07-agents/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../../notes/16-trends/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../../notes/03-llm-fundamentals/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more

## Try this

- [ ] Build custom ComfyUI nodes that call a local LM Studio model for text-only workflows
