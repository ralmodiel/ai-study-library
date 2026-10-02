# Run an abliterated Qwen3.8-27B GGUF locally with llama-server

Melvin Vivas · X post · 2026-09-09 · [Open on X](https://x.com/melvindvivas/status/2097667937624871381)

**Topics:** AI Safety, Security & Guardrails, LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

The creator shares an uncensored (abliterated) GGUF build of Qwen3.8-27B on Hugging Face and says to use it only for education or red teaming. He shows how to serve it locally with llama.cpp's llama-server and a models.ini preset file. He tested it on an RTX 3090.

## Key points

- Abliteration removes a model's refusal behavior without full retraining, which gives you an 'uncensored' variant.
- The model is huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF on Hugging Face, in GGUF format for llama.cpp.
- Intended use: education or red teaming only.
- Serve command: ./build/bin/llama-server.exe --models-preset "models.ini" --models-max 1 --host 127.0.0.1 --port 8080
- --models-preset loads model settings from a models.ini file. --models-max 1 keeps only one model loaded at a time.
- A 27B GGUF model ran on one RTX 3090 (24 GB VRAM).

## Resources mentioned

- [ ] **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** · other · huggingface.co · free  
  An abliterated (uncensored) GGUF build of Qwen3.8-27B on Hugging Face that runs locally with llama.cpp.
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)) and 24 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Download the GGUF model from Hugging Face.
- [ ] Build llama.cpp and start llama-server with a models.ini preset on 127.0.0.1:8080.
- [ ] Use the uncensored model only for education or red teaming.
- [ ] Use the abliterated model for local red-teaming experiments and compare its refusals with the original Qwen model.
