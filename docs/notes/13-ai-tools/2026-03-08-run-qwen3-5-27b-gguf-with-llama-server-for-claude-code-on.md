# Run Qwen3.5-27B GGUF with llama-server for Claude Code on an RTX 3090

Melvin Vivas · X post · 2026-03-08 · [Open on X](https://x.com/melvindvivas/status/2030331920933069251)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

The creator gives the exact llama.cpp command for serving Unsloth's Qwen3.5-27B GGUF (Q4_K_M) on one RTX 3090. He then uses it as the model behind Claude Code with the frontend skill to build UI, and calls local coding on a consumer GPU promising.

## Key points

- Command: llama-server -hf unsloth/Qwen3.5-27B-GGUF:Q4_K_M -ngl 99 -c 262144 -fa on
- -hf downloads the model straight from the Hugging Face repo unsloth/Qwen3.5-27B-GGUF.
- Q4_K_M is a 4-bit quantization that lets a 27B model fit on a 24 GB RTX 3090.
- -ngl 99 offloads all layers to the GPU.
- -c 262144 sets a 256K-token context window.
- -fa on turns on flash attention.
- The local server was used with Claude Code plus the frontend skill to generate frontend output.

## Resources mentioned

- [ ] **[Qwen3.5-27B-GGUF (Unsloth)](https://huggingface.co/unsloth/Qwen3.5-27B-GGUF)** · tool · huggingface.co · free  
  Unsloth's GGUF quantizations of Qwen3.5-27B, made for llama.cpp.
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../../notes/09-llmops/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../../notes/09-llmops/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Claude Code frontend skill](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design)** · tool · github.com · free  
  A Claude Code skill that guides frontend and UI generation.

## Try this

- [ ] Run: llama-server -hf unsloth/Qwen3.5-27B-GGUF:Q4\_K\_M -ngl 99 -c 262144 -fa on
- [ ] Point Claude Code at the local server and try the frontend skill
- [ ] Set up a fully local coding assistant: llama.cpp with Qwen3.5-27B as the model behind Claude Code on a 24 GB GPU
