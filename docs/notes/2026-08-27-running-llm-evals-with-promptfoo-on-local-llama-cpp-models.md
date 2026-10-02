# Running LLM evals with promptfoo on local llama.cpp models

Melvin Vivas · X post · 2026-08-27 · [Open on X](https://x.com/melvindvivas/status/2092862288072253675)

**Topics:** Evaluation (Evals) & Testing, AI Safety, Security & Guardrails, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator found promptfoo, an open-source tool for running evals (tests that measure model quality). He uses it with local models served from his llama.cpp installation. promptfoo tests prompts, agents and RAG apps with simple config files, compares models side by side, and also does red-team security testing.

## Key points

- promptfoo is an open-source tool for evaluating prompts, agents and RAG pipelines.
- You set up tests in a simple config file instead of writing custom test code.
- It compares results across GPT, Claude, Gemini, DeepSeek and other models.
- It also does red teaming and vulnerability scanning for AI apps.
- It can test local models, such as ones served by llama.cpp, so evals cost nothing in API fees.

## Resources mentioned

- [ ] **[promptfoo](https://github.com/promptfoo/promptfoo)** · repo · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Listed under eval frameworks for defining and running evaluations, offline and in CI.
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Install promptfoo and point it at local models served by llama.cpp to run evals.
- [ ] Set up a local eval harness: compare several llama.cpp-hosted models on your own test prompts using promptfoo.
