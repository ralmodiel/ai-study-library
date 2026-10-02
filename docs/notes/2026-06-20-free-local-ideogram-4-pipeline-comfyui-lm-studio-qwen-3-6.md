# Free local Ideogram 4 pipeline: ComfyUI + LM Studio + Qwen 3.6 on RTX 3090

Melvin Vivas · X post · 2026-06-20 · [Open on X](https://x.com/melvindvivas/status/2068038798563487866)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** intermediate

## Summary

The creator runs Ideogram 4 locally on an RTX 3090 for free image generation. Inside a ComfyUI workflow, custom LM Studio nodes call the qwen3.6-35b-a3b-mtp model to turn a simple prompt into a JSON prompt, which then goes to Ideogram 4.

## Key points

- Hardware: Ideogram 4 runs well on a single RTX 3090 GPU (24GB VRAM).
- Pipeline: simple prompt -> LM Studio -> qwen3.6-35b-a3b-mtp -> Ideogram 4, all inside ComfyUI.
- Custom LM Studio nodes were added to the ComfyUI workflow template to create JSON prompts.
- Using an LLM to expand a short prompt into a structured JSON prompt improves the image model's input.
- The whole setup is local and free.

## Resources mentioned

- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../notes/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../notes/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../notes/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../notes/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)) and 23 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../notes/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../notes/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more
- [ ] **[Qwen 3.6 35B (MTP)](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** · tool · huggingface.co · free  
  Qwen 3.6 mixture-of-experts model (35B total, about 3B active parameters) with multi-token prediction for local inference.  
  Also in: Use a Local Model for Confidential Data with Your Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085345530251735193) · [notes](../notes/2026-08-06-use-a-local-model-for-confidential-data-with-your-agent.md)), Running Qwen 3.6 35B locally on an RTX 3090 for agent tool calling (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084140795653976196) · [notes](../notes/2026-08-03-running-qwen-3-6-35b-locally-on-an-rtx-3090-for-agent-tool.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Run Hermes Agent locally with Qwen 3.6 35B MTP in LM Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079169631802314881) · [notes](../notes/2026-07-20-run-hermes-agent-locally-with-qwen-3-6-35b-mtp-in-lm-studio.md)) and 4 more
- [ ] **[Ideogram 4](https://ideogram.ai/models/4.0/)** · tool · ideogram.ai · free  
  Ideogram's image generation model, which works well with structured JSON prompts.  
  Also in: Use local Qwen 3.6 to write JSON prompts for Ideogram 4 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2068065147265110074) · [notes](../notes/2026-06-20-use-local-qwen-3-6-to-write-json-prompts-for-ideogram-4.md))

## Try this

- [ ] Add LM Studio custom nodes to the ComfyUI Ideogram 4 workflow template so a local Qwen 3.6 model generates JSON prompts.
- [ ] A fully local text-to-image pipeline where a local LLM expands prompts into JSON before Ideogram 4 renders them.
