# Herdr Crash Course: A Terminal Multiplexer for Running Many Coding Agents

Melvin Vivas · X video post · 2026-08-27 · 16:43 · 437 views · [Open on X](https://x.com/melvindvivas/status/2092969422709571882)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

A beginner's walkthrough of Herdr, a terminal multiplexer built to run several coding agents at once and keep track of them. It covers installing Herdr, how workspaces, tabs and panes fit together, and how a multiplexer and its prefix key work. It also shows how to keep agents running on a VPS with `herdr --remote`, and how to let an agent control Herdr through its CLI using the official agent skill.

## Key points

- Install Herdr with the copy-paste command on herdr.dev, then run `herdr`. Many workspaces, tabs and panes all run inside one terminal window.
- Suggested layout: one workspace per project and one tab per process or agent (for example implementer, reviewer, and `npm run dev`). Tabs can be split into vertical or horizontal panes.
- Herdr spots running agents (Pi, Tau and others) and lists them in a sidebar. Yellow means the agent is working and blue means it is done, with an optional notification. Notifications are off by default, so turn them on in settings.
- A multiplexer sits between your terminal and its subprocesses. They run in the background, so agents keep going after you close the app. Ctrl-B then Q detaches, and running `herdr` again re-attaches.
- The prefix key is Ctrl-B. Keys typed after the prefix control Herdr; keys without it go to the app inside (for example, Ctrl-D closes the agent). Shortcuts: Ctrl-B C opens a new tab, Ctrl-B ? lists shortcuts, Ctrl-B S opens settings.
- Remote work: running Herdr over SSH on the VPS adds lag, because the whole interface is streamed back to you. Instead run `herdr --remote <ssh-host>`. The interface stays on your machine and all processes run on the VPS, so you can turn your computer off.
- `herdr session list` shows local and remote sessions. `herdr --remote <host>` reconnects to a remote one.
- Herdr has a CLI that agents can use. Install the official Herdr agent skill (from the docs, with `npx skills` or by copying it into your skills folder) so an agent can create sessions, tabs and panes and start sub-agents.

## Resources mentioned

- [ ] **[herdr](https://x.com/herdrdev)** · tool · x.com · check price  
  A runtime that keeps real terminals open for coding agents on a local or rented machine, so agent sessions keep running when you disconnect.  
  Also in: Terminal Tool Recommendation: herdr (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098382801351639235) · [notes](../../notes/13-ai-tools/2026-09-11-terminal-tool-recommendation-herdr.md)), herdr 0.9.0: Control Agents Across Multiple Machines (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097306208474636329) · [notes](../../notes/13-ai-tools/2026-09-08-herdr-0-9-0-control-agents-across-multiple-machines.md)), GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../../notes/13-ai-tools/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../../notes/13-ai-tools/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md)) and 7 more
- [ ] **[Herdr documentation – Agent Skill](https://herdr.dev/docs/agent-skill/)** · docs · herdr.dev · free  
  Official Herdr docs page with the agent skill file that teaches agents to control Herdr through its CLI.
- [ ] **[tmux](https://github.com/tmux/tmux)** · tool · github.com · free  
  Classic open-source terminal multiplexer that also uses a prefix key for shortcuts.
- [ ] **[cmux](https://cmux.com/)** · tool · cmux.com · free  
  Terminal tool for managing coding agents, which the speaker used before Herdr.
- [ ] **[Ghostty](https://ghostty.org)** · tool · ghostty.org · free  
  Terminal emulator used in the demo to host Herdr.
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[Tau](https://github.com/huggingface/tau)** · tool · github.com · free  
  Minimalist coding agent written in Python, a port of Pi's design, with native local-model support and extensions that can change its interface.  
  Also in: Agent Harness Efficiency: Scaffolding Beats MCP vs. CLI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090772830120222890) · [notes](../../notes/07-agents/2026-08-21-agent-harness-efficiency-scaffolding-beats-mcp-vs-cli.md))
- [ ] **[tau-herdr extension (by Ryan Dolphin)](https://github.com/rian-dolphin/tau-herdr)** · tool · github.com · free  
  Tau extension that adds Herdr integration.
- [ ] **[npx skills](https://github.com/vercel-labs/skills)** · tool · github.com · free  
  Command-line tool for installing agent skills into your skills directory.
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[OpenCode](https://x.com/opencode)** · tool · x.com · free  
  Open-source terminal coding agent that can be configured with different model providers, including open models.  
  Also in: T3Code: a better interface for terminal coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099695364345639176) · [notes](../../notes/13-ai-tools/2026-09-15-t3code-a-better-interface-for-terminal-coding-agents.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../../notes/13-ai-tools/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Trying OpenCode Go After Upgrading OpenCode (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098595863111332145) · [notes](../../notes/13-ai-tools/2026-09-12-trying-opencode-go-after-upgrading-opencode.md)), Orchestrator + Subagents in opencode with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098410568680177970) · [notes](../../notes/07-agents/2026-09-11-orchestrator-subagents-in-opencode-with-open-models.md)) and 10 more
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more

## Try this

- [ ] Install Herdr from herdr.dev and start it with \`herdr\`.
- [ ] Set up one workspace per project and one tab per agent or process.
- [ ] Turn on notifications in settings (Ctrl-B S), since they are off by default.
- [ ] Use the mouse at first, check the key bindings with Ctrl-B ?, then move to keyboard shortcuts over time.
- [ ] Detach with Ctrl-B Q so agents keep running in the background.
- [ ] Run agents on a VPS with \`herdr --remote <ssh-host>\` instead of running Herdr over SSH, and check sessions with \`herdr session list\`.
- [ ] Install the official Herdr agent skill so your agents can control Herdr.
- [ ] Try Tau, especially if you like Pi, and install the tau-herdr extension.
- [ ] Build skills and workflows where one agent uses the Herdr CLI to start sub-agents in separate sessions or tabs and have them talk to each other.
- [ ] Set up a VPS where agents keep working after you turn your computer off, and check on them from your laptop or phone.
