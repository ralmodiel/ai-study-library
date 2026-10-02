# Local Speech-to-Text with LFM2.5-Audio-1.5B and llama.cpp

Melvin Vivas · X video post · 2026-09-08 · 0:16 · 600 views · [Open on X](https://x.com/melvindvivas/status/2097041003681399127)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

This is a 16-second demo with no speech. It shows a speech-to-text (audio-to-text) CLI that runs entirely on a laptop. The tool serves Liquid AI's LFM2.5-Audio-1.5B model with llama.cpp. The quoted post links to the open-source code in the Liquid4All cookbook, which was recently updated to use the LFM2.5 model family.

## Key points

- LFM2.5-Audio-1.5B is a small (1.5B-parameter) audio model from Liquid AI's LFM2.5 family that can do speech-to-text.
- llama.cpp can serve the model on a laptop, so transcription runs 100% locally with no cloud API.
- The demo is a command-line tool that transcribes any audio input you give it.
- The example code is in the Liquid4All cookbook repo under examples/audio-transcription-cli.
- The demo was recently switched to the LFM2.5 family, replacing an earlier model version.
- Small audio models plus llama.cpp are a practical way to get private, offline, low-cost transcription.

## Resources mentioned

- [ ] **[Liquid4All Cookbook – audio-transcription-cli example](https://github.com/Liquid4All/cookbook/tree/main/examples/audio-transcription-cli)** · repo · github.com · free  
  Open-source example code for a fully local audio-to-text CLI that serves LFM2.5-Audio-1.5B with llama.cpp.
- [ ] **[LFM2.5-Audio-1.5B](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B)** · tool · huggingface.co · free  
  Liquid AI's 1.5B-parameter audio model from the LFM2.5 family, used here for speech-to-text.
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../../notes/05-embeddings-vectordb/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../../notes/10-fine-tuning/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../../notes/16-trends/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more

## Try this

- [ ] Clone the Liquid4All cookbook and run the audio-transcription-cli example.
- [ ] Serve LFM2.5-Audio-1.5B with llama.cpp on your laptop and transcribe your own audio files.
- [ ] Build a fully local, private audio-to-text transcription CLI using LFM2.5-Audio-1.5B and llama.cpp.
