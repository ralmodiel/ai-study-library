# Demo: Qwen3.8-27B Running Locally with Pi and llama.cpp

Melvin Vivas · X video post · 2026-08-14 · 0:28 · 502 views · [Open on X](https://x.com/melvindvivas/status/2088292028329378131)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

A short reaction post with a silent 28-second video. It shows output made by Alibaba's Qwen3.8-27B open-weight model, which was run locally with llama.cpp and driven by Pi (@pidotdev). There is no narration or tutorial. Its main value is pointing to a local open-model coding setup you can try yourself.

## Key points

- The quoted post calls this the 'first test' of Qwen3.8-27B, a 27-billion-parameter model from Alibaba's Qwen team.
- The model was run locally with llama.cpp, an open-source engine for running LLMs (usually quantized GGUF files) on your own hardware.
- Pi (@pidotdev) was the tool used to drive the model and produce the output.
- The creator's reaction ('wtf') suggests a mid-sized local model gave surprisingly strong results. The video has no speech, so no specific numbers or steps are given.
- Takeaway: open-weight models of about 27B parameters running locally are now an option for agent-style work without a cloud API.

## Resources mentioned

- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../notes/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../notes/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../notes/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)), Qwen3.8-27B Is Free on Infron: 256K-Context Multimodal Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099437312124072202) · [notes](../notes/2026-09-14-qwen3-8-27b-is-free-on-infron-256k-context-multimodal-model.md)) and 22 more
- [ ] **[Qwen (@Alibaba\_Qwen) on X](https://x.com/Alibaba_Qwen)** · person · x.com · free  
  Official X account of Alibaba's Qwen team, which posts model releases and demos.  
  Also in: Qwen-Audio-3.1: Alibaba's Five-Model Audio Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102726628048810098) · [notes](../notes/2026-09-23-qwen-audio-3-1-alibaba-s-five-model-audio-stack.md)), Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2048445624148992148) · [notes](../notes/2026-04-26-running-ai-locally-rebuilding-aibackends-as-a-python.md)), Audio-Visual Vibe Coding with Qwen 3.5 Omni: Spoken Specs to Web App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2038678318787317959) · [notes](../notes/2026-03-30-audio-visual-vibe-coding-with-qwen-3-5-omni-spoken-specs-to.md))
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Run Qwen3.8-27B locally with llama.cpp, connect it to Pi, and compare its output on a coding task with a cloud model.
