# ComfyUI workflow with LM Studio nodes for local Ideogram v4

Melvin Vivas · X post · 2026-06-20 · [Open on X](https://x.com/melvindvivas/status/2068049034531717377)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** intermediate

## Summary

The creator shows their ComfyUI setup: custom LM Studio nodes create JSON prompts, which then feed Ideogram v4 running locally. It shows how to chain a local LLM into an image-generation pipeline.

## Key points

- Custom LM Studio nodes inside ComfyUI generate JSON prompts.
- A local LLM served by LM Studio writes the structured prompts.
- Ideogram v4 runs locally in the same ComfyUI graph.

## Resources mentioned

- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../notes/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../notes/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../notes/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../notes/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)) and 23 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../notes/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../notes/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more
- [ ] **[Ideogram](https://x.com/ideogram_ai)** · tool · x.com · free  
  AI image generation platform with paid plans and an API for generating images with Ideogram models.  
  Also in: Running the open-source Ideogram 4 locally in ComfyUI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2068024122530312402) · [notes](../notes/2026-06-20-running-the-open-source-ideogram-4-locally-in-comfyui.md)), Ideogram 4.0 Released as an Open-Weights Image Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2064613303951765768) · [notes](../notes/2026-06-10-ideogram-4-0-released-as-an-open-weights-image-model.md))

## Try this

- [ ] Connect LM Studio to ComfyUI with custom nodes so a local LLM writes JSON prompts for Ideogram v4.
- [ ] A ComfyUI workflow that uses a local LLM to expand prompts before image generation.
