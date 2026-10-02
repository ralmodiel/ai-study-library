# Local Prompt-to-Image Pipeline: ComfyUI + LM Studio Gemma + Z-Image Turbo

Melvin Vivas · X post · 2026-05-20 · [Open on X](https://x.com/melvindvivas/status/2056823621851791821)

**Topics:** AI Dev Tools & Productivity, Portfolio Projects, Prompt & Context Engineering · **Level:** intermediate

## Summary

The creator built a ComfyUI custom node that uses Gemma E2B running in LM Studio to write an image prompt. The prompt then goes to Z-Image Turbo to generate the image, and the whole pipeline runs locally.

## Key points

- Step 1: a custom ComfyUI node sends a request to a local LLM (Gemma E2B in LM Studio) to write or expand the prompt
- Step 2: the generated prompt goes to Z-Image Turbo for image generation
- The whole pipeline runs locally, with no cloud APIs
- Using an LLM to enhance prompts can improve image generation results

## Resources mentioned

- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../../notes/13-ai-tools/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../../notes/09-llmops/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../../notes/13-ai-tools/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../../notes/13-ai-tools/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)) and 23 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../../notes/10-fine-tuning/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more
- [ ] **[Gemma 4 26B](https://ai.google.dev/gemma/docs/core/model_card_4)** · tool · ai.google.dev · free  
  Mid-sized multimodal open model in Google's Gemma 4 family.  
  Also in: Free gpt-oss-20b and Gemma 4 26B on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2066607092895809536) · [notes](../../notes/03-llm-fundamentals/2026-06-16-free-gpt-oss-20b-and-gemma-4-26b-on-openrouter.md)), Gemma 4 26B for OCR in LM Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2039782194278019363) · [notes](../../notes/03-llm-fundamentals/2026-04-03-gemma-4-26b-for-ocr-in-lm-studio.md))
- [ ] **[Z-Image-Turbo](https://huggingface.co/Tongyi-MAI/Z-Image-Turbo)** · tool · huggingface.co · free  
  An open image-generation model that can run on local hardware.  
  Also in: Free Local Image Generation: ComfyUI App Mode + LM Studio + Gemma (Melvin Vivas on [X](https://x.com/melvindvivas/status/2058989615554662681) · [notes](../../notes/13-ai-tools/2026-05-26-free-local-image-generation-comfyui-app-mode-lm-studio-gemma.md)), Free Local Portraits with Z-Image-Turbo in ComfyUI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2043768838043701712) · [notes](../../notes/13-ai-tools/2026-04-14-free-local-portraits-with-z-image-turbo-in-comfyui.md)), Free Local Image Generation with Z-Image-Turbo and ComfyUI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2034160862135787926) · [notes](../../notes/13-ai-tools/2026-03-18-free-local-image-generation-with-z-image-turbo-and-comfyui.md)), Local Image Generation Pipeline Built with Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2033985491197190198) · [notes](../../notes/14-projects/2026-03-18-local-image-generation-pipeline-built-with-claude-code.md))

## Try this

- [ ] Build a local ComfyUI pipeline where an LLM node writes prompts and an image model renders them
