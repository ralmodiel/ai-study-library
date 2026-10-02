# Monitor GPU Usage With nvtop Instead of nvidia-smi

Melvin Vivas · X post · 2026-07-18 · [Open on X](https://x.com/melvindvivas/status/2078412668726378563)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** beginner

## Summary

The creator recommends nvtop, an interactive, htop-style GPU monitor, instead of running nvidia-smi to check GPU usage. It's a handy tool for anyone running local models.

## Key points

- nvidia-smi gives a one-off snapshot of GPU usage
- nvtop is an interactive, htop-style monitor showing GPU use, memory and processes over time
- Useful when running local model inference or training

## Resources mentioned

- [ ] **[nvtop](https://github.com/Syllo/nvtop)** · tool · github.com · free  
  An open-source, top-style monitor for GPU usage in the terminal.  
  Also in: GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../notes/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../notes/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md))
- [ ] **[nvidia-smi](https://developer.nvidia.com/system-management-interface)** · tool · developer.nvidia.com · free  
  An NVIDIA command-line tool that shows the attached GPU, its VRAM and how much is in use.  
  Also in: Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../notes/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md))

## Try this

- [ ] Install nvtop to monitor GPU usage while running local models
