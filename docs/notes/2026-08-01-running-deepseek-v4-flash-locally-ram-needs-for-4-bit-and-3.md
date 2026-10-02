# Running DeepSeek V4 Flash Locally: RAM Needs for 4-bit and 3-bit Quants

Melvin Vivas · X post · 2026-08-01 · [Open on X](https://x.com/melvindvivas/status/2083396193003221177)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

Quoting Unsloth, the creator jokes about the hardware needed to run DeepSeek V4 Flash 0731 locally. The lossless 4-bit quant needs about 168GB RAM and the 3-bit quant about 110GB. You can run it with Unsloth or llama.cpp from GGUF files, and smaller quants were promised.

## Key points

- DeepSeek V4 Flash 0731 can run locally as GGUF quants
- Lossless 4-bit quant needs ~168GB RAM; 3-bit needs ~110GB RAM
- Run it with Unsloth or llama.cpp
- Unsloth claims V4 Flash 0731 outperforms V4 Pro
- Smaller quants (less RAM) were announced as coming soon
- Quantization trades bits per weight for memory: fewer bits means less RAM, with some possible quality loss

## Resources mentioned

- [ ] **[Unsloth Documentation – DeepSeek V4 guide](https://unsloth.ai/docs/models/deepseek-v4)** · docs · unsloth.ai · free  
  Unsloth's guide to running DeepSeek V4 models locally with quantized GGUFs.
- [ ] **[unsloth/DeepSeek-V4-Flash-0731-GGUF (Hugging Face)](https://huggingface.co/unsloth/DeepSe)** · repo · huggingface.co · free · open in a browser to verify  
  Hugging Face repository with the GGUF quantized weights of DeepSeek V4 Flash 0731.
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[DeepSeek V4 Flash 0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** · tool · huggingface.co · free  
  DeepSeek's open-weight V4 Flash model, released as quantized GGUFs for local use.  
  Also in: DeepSeek V4 Flash 0731 Available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2083444884036579616) · [notes](../notes/2026-08-01-deepseek-v4-flash-0731-available-on-openrouter.md)), DeepSeek V4 Flash 0731 Agentic Benchmarks and Use with Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2083394496726024566) · [notes](../notes/2026-08-01-deepseek-v4-flash-0731-agentic-benchmarks-and-use-with.md))

## Try this

- [ ] Check your RAM against the quant sizes (168GB at 4-bit, 110GB at 3-bit) before trying to run it locally
- [ ] Follow the Unsloth guide to run it with Unsloth or llama.cpp
- [ ] Watch for the smaller quants if your machine has less memory
