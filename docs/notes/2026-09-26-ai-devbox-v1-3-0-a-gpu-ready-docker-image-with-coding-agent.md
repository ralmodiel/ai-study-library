# AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs

Melvin Vivas · X post · 2026-09-26 · [Open on X](https://x.com/melvindvivas/status/2103720219491619025)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring, Programming & ML Foundations · **Level:** intermediate

## Summary

The creator released version 1.3.0 of AI DevBox, his Docker image for machine-learning work. It comes with PyTorch 2.8, CUDA 12.8, JupyterLab and several coding-agent command-line tools already installed, and this version adds the Devin CLI. It has been tested on RunPod GPU cloud machines.

## Key points

- Download it with: docker pull melvindave/ai-devbox:1.3.0
- Already installed: PyTorch 2.8 with CUDA 12.8, so it is GPU-ready.
- Includes JupyterLab for notebook work.
- Includes these coding-agent CLIs: Codex, Claude Code, Pi, Grok, Cursor, and now Devin (new in v1.3.0).
- Tested on RunPod GPU instances, so it suits rented-GPU ML work.
- A prebuilt image saves you from setting up CUDA and tools by hand on every new GPU machine.

## Resources mentioned

- [ ] **[ai-devbox (melvindave/ai-devbox)](https://hub.docker.com/repository/docker/melvindave/ai-devbox/general)** · tool · hub.docker.com · free  
  The creator's Docker image with PyTorch, CUDA, JupyterLab and coding-agent CLIs already installed, for ML work.  
  Also in: Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../notes/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../notes/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md))
- [ ] **[Devin CLI](https://docs.devin.ai/work-with-devin/devin-cli)** · tool · docs.devin.ai · check price  
  Command-line version of the Devin AI coding agent, used in the terminal.  
  Also in: Using Devin CLI with the free SWE-2 model for sysadmin tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102991417211851138) · [notes](../notes/2026-09-24-using-devin-cli-with-the-free-swe-2-model-for-sysadmin-tasks.md)), Pointer: Subagents in Devin CLI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102404101195915506) · [notes](../notes/2026-09-22-pointer-subagents-in-devin-cli.md))
- [ ] **[PyTorch](https://pytorch.org/)** · tool · pytorch.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Deep-learning framework. Its built-in scaled dot-product attention (SDP) was the baseline in this benchmark.  
  Also in: Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../notes/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../notes/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../notes/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md)) and 4 more
- [ ] **[CUDA](https://developer.nvidia.com/cuda-toolkit)** · tool · developer.nvidia.com · free  
  NVIDIA's GPU computing platform, needed for GPU-accelerated deep learning.  
  Also in: GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../notes/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md)), Reusable GPU devbox: PyTorch/CUDA plus six coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095138320481390772) · [notes](../notes/2026-09-02-reusable-gpu-devbox-pytorch-cuda-plus-six-coding-agents.md)), Jensen Huang on NVIDIA's Long-Term Commitment to Open Nemotron Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2034093172129984515) · [notes](../notes/2026-03-18-jensen-huang-on-nvidia-s-long-term-commitment-to-open.md))
- [ ] **[Jupyter Notebook](https://jupyter.org/)** · tool · jupyter.org · free  
  An interactive notebook format (.ipynb) that mixes code and output. Colab can open these files.  
  Also in: Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../notes/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Q&A Over Your Own PDFs with LlamaIndex, OpenAI and Python (2023) (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-langchain-llama-index-generative-text-ai) · [notes](../notes/2023-04-08-q-a-over-your-own-pdfs-with-llamaindex-openai-and-python.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)), Agent Monitor: Track Token Usage and Cost for Codex and Claude Code Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100152172549959815) · [notes](../notes/2026-09-16-agent-monitor-track-token-usage-and-cost-for-codex-and.md)) and 33 more
- [ ] **[Grok CLI](https://github.com/superagent-ai/grok-cli)** · tool · github.com · free  
  A coding-agent CLI that uses xAI's Grok models.
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../notes/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)) and 120 more
- [ ] **[Runpod](https://x.com/runpod)** · tool · x.com · paid  
  GPU cloud platform for running, training and serving AI models; Flash deploys workloads to it.  
  Also in: Why LLM data agents need solid data foundations (Runpod) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102442716420600068) · [notes](../notes/2026-09-23-why-llm-data-agents-need-solid-data-foundations-runpod.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../notes/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../notes/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../notes/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md)) and 5 more

## Try this

- [ ] Run docker pull melvindave/ai-devbox:1.3.0 to get the image.
- [ ] Use the image on a GPU cloud service such as RunPod for ML work.
- [ ] Build your own Docker image with your ML stack and coding-agent tools, so any new GPU machine is ready right away.
