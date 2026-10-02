# Running Qwen3.8 27B Locally on an RTX 3090 with llama.cpp and the Pi Harness

Melvin Vivas · X video post · 2026-08-31 · 0:23 · 6,224 views · [Open on X](https://x.com/melvindvivas/status/2094355129768296765)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity, LLM Fundamentals · **Level:** intermediate

## Summary

A 23-second demo with no speech. It shows Unsloth's Qwen3.8 27B model, quantized to Q4_K_M in GGUF format, running locally through llama.cpp on one RTX 3090. The creator says Pi (@pidotdev) is the best harness he has used with this model so far. His point is that the whole setup is local and free.

## Key points

- Model: Qwen3.8 27B in Unsloth's GGUF release, using the Q4_K_M quantization.
- Inference engine: llama.cpp, which runs GGUF models on local hardware.
- Hardware: one NVIDIA RTX 3090 (24 GB VRAM) runs the 27B model at 4-bit Q4_K_M quantization.
- Harness: the creator found Pi (@pidotdev) the best harness to pair with this local model so far.
- Q4_K_M is a 4-bit k-quant. It cuts memory use enough to fit a 27B model on a single consumer GPU, and is usually a good trade-off between quality and size.
- The setup costs nothing to run: it is local, with no API fees.

## Resources mentioned

- [ ] **[Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantized versions of the Qwen3.8 27B model, ready for llama.cpp and other GGUF runtimes.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen3.8-27B locally with llama.cpp (llama-server) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088286931230884120) · [notes](../../notes/09-llmops/2026-08-14-run-qwen3-8-27b-locally-with-llama-cpp-llama-server.md)), Unsloth releases Qwen3.8-27B GGUF quantizations (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088282753313993016) · [notes](../../notes/09-llmops/2026-08-14-unsloth-releases-qwen3-8-27b-gguf-quantizations.md))
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../../notes/09-llmops/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../../notes/09-llmops/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Download the Q4\_K\_M file from unsloth/Qwen3.8-27B-GGUF on Hugging Face.
- [ ] Run it with llama.cpp on a GPU with about 24 GB of VRAM, such as an RTX 3090.
- [ ] Connect the local model to the Pi harness to use it as a free local coding assistant.
- [ ] Build a fully local, free AI coding assistant: Qwen3.8 27B (Unsloth Q4\_K\_M GGUF) served by llama.cpp on a single RTX 3090 and driven by the Pi harness.
