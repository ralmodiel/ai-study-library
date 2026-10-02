# 2.3x Faster Ideogram 4 in ComfyUI with INT8 and SageAttention

Melvin Vivas · X post · 2026-06-20 · [Open on X](https://x.com/melvindvivas/status/2068287222152036529)

**Topics:** LLMOps, Deployment & Monitoring · **Level:** advanced

## Summary

A quoted benchmark shows how to speed up Ideogram 4.0 image generation in ComfyUI: switch from FP8 weights to INT8, and from PyTorch SDP attention to SageAttention. On an RTX 3090 this made generation about 2.3x faster, and it costs nothing.

## Key points

- Drop PyTorch SDP attention and FP8 weights; use INT8 weights with SageAttention instead.
- Benchmark setup: RTX 3090, same JSON prompt, 48 steps.
- INT8 + SageAttention: 78s.
- INT8 + PyTorch SDP: 104s.
- FP8 + SageAttention: 155s. FP8 + PyTorch SDP was the slowest (the number is cut off).
- The overall speedup is about 2.3x, at no cost.

## Resources mentioned

- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../notes/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../notes/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../notes/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../notes/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)) and 23 more
- [ ] **[Ideogram 4.0](https://ideogram.ai/blog/ideogram-4.0/)** · tool · ideogram.ai · free  
  Ideogram's text-to-image model, released with open weights that you can download, fine-tune and run yourself.  
  Also in: Ideogram 4.0 Released as an Open-Weights Image Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2064613303951765768) · [notes](../notes/2026-06-10-ideogram-4-0-released-as-an-open-weights-image-model.md))
- [ ] **[SageAttention](https://github.com/thu-ml/SageAttention)** · tool · github.com · free  
  An optimized attention kernel that speeds up inference.
- [ ] **[PyTorch](https://pytorch.org/)** · tool · pytorch.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Deep-learning framework. Its built-in scaled dot-product attention (SDP) was the baseline in this benchmark.  
  Also in: Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../notes/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../notes/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md)) and 4 more

## Try this

- [ ] In ComfyUI, switch Ideogram 4 from FP8 to INT8 weights.
- [ ] Use SageAttention instead of PyTorch SDP attention.
- [ ] Benchmark on your own GPU with a fixed prompt and step count.
- [ ] Benchmark different weight-precision and attention-kernel combinations on your own GPU for a diffusion model.
