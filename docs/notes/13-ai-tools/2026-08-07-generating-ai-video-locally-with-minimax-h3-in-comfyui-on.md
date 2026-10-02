# Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090

Melvin Vivas · X video post · 2026-08-07 · 0:15 · 290 views · [Open on X](https://x.com/melvindvivas/status/2085553403846078669)

**Topics:** AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** intermediate

## Summary

Melvin Vivas shares a 15-second war-scene clip he made on his own computer with the MiniMax H3 video model, running in ComfyUI on one RTX 3090 GPU. He says the main appeal is that it's free to run locally. He also gives real numbers: 22 minutes to generate the clip at a low test resolution of 864x480. He likes how closely the model follows prompts. The post is a quick hands-on report, not a tutorial.

## Key points

- The MiniMax H3 video model can run locally in ComfyUI on a consumer RTX 3090 GPU (24 GB of VRAM).
- Running it locally is free, which the creator gives as his main reason for liking it.
- A ~15-second clip took about 22 minutes to generate on the RTX 3090.
- He kept the resolution low (864x480) while testing prompts, then plans to go higher once a prompt works.
- He says the model follows prompts well (good prompt adherence).
- The sample clip is an action/war scene with spoken dialogue ("Move! Off the boat!"), which suggests the output can include audio.

## Resources mentioned

- [ ] **[MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** · tool · huggingface.co · free  
  MiniMax video generation model that turns a starting image and an audio track into a lip-synced video.  
  Also in: MiniMax H3 Image + Audio-to-Video Lip-Sync Demo (with Irodori-TTS v3) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085587083633348892) · [notes](../../notes/13-ai-tools/2026-08-07-minimax-h3-image-audio-to-video-lip-sync-demo-with-irodori.md)), Running MiniMax H3 Locally on a Single RTX 3090 (Demo) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085439986699223322) · [notes](../../notes/16-trends/2026-08-06-running-minimax-h3-locally-on-a-single-rtx-3090-demo.md))
- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../../notes/13-ai-tools/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../../notes/09-llmops/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../../notes/13-ai-tools/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)), Demo: Real-Time VFX Compositing Inside ComfyUI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079931091109269800) · [notes](../../notes/13-ai-tools/2026-07-22-demo-real-time-vfx-compositing-inside-comfyui.md)) and 23 more
- [ ] **[NVIDIA GeForce RTX 3090](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090/)** · tool · nvidia.com · paid  
  Consumer GPU with 24 GB of VRAM, used here to run a long-context LLM locally.  
  Also in: Portable Computer Now Runs AI Agents and Models Locally on NVIDIA RTX PCs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099558149305024711) · [notes](../../notes/07-agents/2026-09-15-portable-computer-now-runs-ai-agents-and-models-locally-on.md)), Long-Context Local LLM on an RTX 3090: .env Config and ~64 tok/s Benchmark (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095350341999227217) · [notes](../../notes/09-llmops/2026-09-03-long-context-local-llm-on-an-rtx-3090-env-config-and-64-tok.md)), Running Ornith-1.5-35B-A3B (Q4\_K\_M) at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381415557021767) · [notes](../../notes/09-llmops/2026-08-20-running-ornith-1-5-35b-a3b-q4-k-m-at-128k-context-on-an-rtx.md)), Running MiniMax H3 Locally on a Single RTX 3090 (Demo) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085439986699223322) · [notes](../../notes/16-trends/2026-08-06-running-minimax-h3-locally-on-a-single-rtx-3090-demo.md)) and 2 more

## Try this

- [ ] Test prompts at low resolution (e.g., 864x480) first to save time, then render at higher resolution.
- [ ] Set up a local text-to-video workflow in ComfyUI with MiniMax H3 on a 24 GB GPU and measure how long generation takes at different resolutions.
