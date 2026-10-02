# Docker Template Bundling Coding Agents for GPU Cloud Hosting

Melvin Vivas · X post · 2026-09-02 · [Open on X](https://x.com/melvindvivas/status/2095072457174745159)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity, Portfolio Projects · **Level:** intermediate

## Summary

Melvin Vivas is using Codex to build a Docker image for GPU hosts like Runpod or QuickPod. The image bundles PyTorch, CUDA, several coding agents (Codex, Claude Code, Pi) and a CUDA-enabled llama.cpp. His reasoning is that coding agents are also good at AI/ML work, so a ready-made GPU environment with them already installed saves setup time.

## Key points

- Coding agents can do AI/ML work, so it helps to have them installed next to the GPU.
- Template contents: PyTorch + CUDA, Codex, Claude Code, Pi and CUDA-enabled llama.cpp.
- Built to run on rented GPU hosts such as Runpod and QuickPod.
- Targets the RTX 3090 and other supported GPUs.
- He used a coding agent (Codex) to write the Docker template itself.

## Resources mentioned

- [ ] **[Runpod](https://x.com/runpod)** · tool · x.com · paid  
  GPU cloud platform for running, training and serving AI models; Flash deploys workloads to it.  
  Also in: AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Why LLM data agents need solid data foundations (Runpod) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102442716420600068) · [notes](../notes/2026-09-23-why-llm-data-agents-need-solid-data-foundations-runpod.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../notes/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../notes/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)) and 5 more
- [ ] **[QuickPod](https://console.quickpod.io/?affiliate=4a11b63f-79e6-46a7-aa63-c78fde82d70a)** · tool · console.quickpod.io · paid  
  A cloud service for renting GPU pods to host and run your own models.  
  Also in: Reusable GPU devbox: PyTorch/CUDA plus six coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095138320481390772) · [notes](../notes/2026-09-02-reusable-gpu-devbox-pytorch-cuda-plus-six-coding-agents.md)), Self-Host a Coding Model on QuickPod with llama-swap and Use It in Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2050556844666724354) · [notes](../notes/2026-05-02-self-host-a-coding-model-on-quickpod-with-llama-swap-and.md))
- [ ] **[PyTorch](https://pytorch.org/)** · tool · pytorch.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Deep-learning framework. Its built-in scaled dot-product attention (SDP) was the baseline in this benchmark.  
  Also in: Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../notes/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../notes/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md)) and 4 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Build a Docker image for a GPU cloud that comes with PyTorch, CUDA, llama.cpp and coding agents already installed.
