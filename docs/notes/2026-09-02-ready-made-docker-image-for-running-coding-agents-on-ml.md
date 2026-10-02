# Ready-made Docker image for running coding agents on ML/fine-tuning jobs

Melvin Vivas · X post · 2026-09-02 · [Open on X](https://x.com/melvindvivas/status/2095142245561462928)

**Topics:** Fine-tuning & Model Customization, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

For ML work like fine-tuning with coding agents, the creator offers a ready-made Docker image with PyTorch/CUDA and the agents already installed. You run it with GPU access, log in to the agents, and start working. It also includes herdr for persistent sessions.

## Key points

- Run: docker run --rm -it --gpus all melvindave/runpod-pytorch:1.1.0
- --gpus all exposes your NVIDIA GPUs to the container; --rm removes the container when it exits
- Nothing to install after starting it: just log in to the coding agents
- herdr is included to keep sessions running
- Meant for ML tasks like fine-tuning done with coding agents

## Resources mentioned

- [ ] **[melvindave/runpod-pytorch Docker image](https://hub.docker.com/r/melvindave/runpod-pytorch)** · tool · hub.docker.com · free  
  Docker image for GPU ML development with coding agents, the Hugging Face CLI and nvtop pre-installed.  
  Also in: GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../notes/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)), Reusable GPU devbox: PyTorch/CUDA plus six coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095138320481390772) · [notes](../notes/2026-09-02-reusable-gpu-devbox-pytorch-cuda-plus-six-coding-agents.md))
- [ ] **[herdr](https://x.com/herdrdev)** · tool · x.com · check price  
  A runtime that keeps real terminals open for coding agents on a local or rented machine, so agent sessions keep running when you disconnect.  
  Also in: Terminal Tool Recommendation: herdr (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098382801351639235) · [notes](../notes/2026-09-11-terminal-tool-recommendation-herdr.md)), herdr 0.9.0: Control Agents Across Multiple Machines (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097306208474636329) · [notes](../notes/2026-09-08-herdr-0-9-0-control-agents-across-multiple-machines.md)), GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../notes/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../notes/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md)) and 7 more

## Try this

- [ ] Run melvindave/runpod-pytorch:1.1.0 with --gpus all when using coding agents for ML tasks like fine-tuning
- [ ] Log in to your coding agents inside the container
- [ ] Use a coding agent inside the GPU container to run a fine-tuning job
