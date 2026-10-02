# Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models

Melvin Vivas · X video post · 2026-04-26 · 0:07 · 485 views · [Open on X](https://x.com/melvindvivas/status/2048445624148992148)

**Topics:** LLMOps, Deployment & Monitoring, AI Safety, Security & Guardrails, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas shows a short demo of AIBackends, his project for running AI tasks locally. He rebuilt it as a Python library over a weekend, using Cursor with GPT 5.4/5.5 as coding models. It runs open models such as Google DeepMind's and Alibaba's Qwen on your own machine. One of its features is redacting personal data (PII) with NVIDIA's gliner-PII model. The caption is cut off after "Image", so the rest of the feature list is unknown.

## Key points

- Open models from Google DeepMind (likely Gemma) and Alibaba Qwen are now good enough to run AI locally, without cloud APIs.
- AIBackends was rebuilt as a Python library over a single weekend using an AI coding assistant (Cursor) with GPT 5.4/5.5.
- PII redaction is handled locally by gliner-PII, NVIDIA's model for finding personal data, so sensitive text never leaves your machine.
- Wrapping several local AI tasks (PII redaction, image tasks and others) in one Python library makes them reusable inside your own apps.
- The caption is cut off after 'Image', so the rest of the feature list is unknown. The 7-second video has no speech.

## Resources mentioned

- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../../notes/13-ai-tools/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../../notes/13-ai-tools/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../../notes/09-llmops/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../../notes/13-ai-tools/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[GLiNER-PII](https://huggingface.co/nvidia/gliner-PII)** · tool · huggingface.co · free  
  NVIDIA's GLiNER-based model that finds personal data (PII) in text, so it can be redacted locally.  
  Also in: aibackends 0.3.0: Model Caching Speeds Up PII and OCR Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078472621386248356) · [notes](../../notes/09-llmops/2026-07-18-aibackends-0-3-0-model-caching-speeds-up-pii-and-ocr.md)), Detect PII and PHI with NVIDIA's GLiNER-PII Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044428898763764219) · [notes](../../notes/11-safety/2026-04-15-detect-pii-and-phi-with-nvidia-s-gliner-pii-model.md))
- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../../notes/07-agents/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../../notes/16-trends/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../../notes/03-llm-fundamentals/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more
- [ ] **[Qwen models (Alibaba)](https://github.com/QwenLM)** · tool · github.com · free  
  Alibaba's family of open models (LLM and multimodal) that can run locally.
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: GLM 5.3 and GLM 5.3 Flash now in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105952116930163074) · [notes](../../notes/13-ai-tools/2026-10-02-glm-5-3-and-glm-5-3-flash-now-in-cursor.md)), Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../../notes/13-ai-tools/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)) and 121 more
- [ ] **[GPT 5.5](https://openai.com/index/introducing-gpt-5-5/)** · tool · openai.com · paid  
  OpenAI models the creator used as the coding model inside Cursor.  
  Also in: Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../../notes/07-agents/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Running GPT-5.5 via Codex as Hermes's Main Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2073394924549267576) · [notes](../../notes/07-agents/2026-07-04-running-gpt-5-5-via-codex-as-hermes-s-main-model.md)), Conductor Walkthrough: Running Parallel Coding Agents in Isolated Git Worktrees (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069521472742404424) · [notes](../../notes/13-ai-tools/2026-06-23-conductor-walkthrough-running-parallel-coding-agents-in.md)), Composer 2.5 as the Default Coding Model in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056633730996060252) · [notes](../../notes/13-ai-tools/2026-05-19-composer-2-5-as-the-default-coding-model-in-cursor.md)) and 2 more
- [ ] **[Qwen (@Alibaba\_Qwen) on X](https://x.com/Alibaba_Qwen)** · person · x.com · free  
  Official X account of Alibaba's Qwen team, which posts model releases and demos.  
  Also in: Qwen-Audio-3.1: Alibaba's Five-Model Audio Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102726628048810098) · [notes](../../notes/16-trends/2026-09-23-qwen-audio-3-1-alibaba-s-five-model-audio-stack.md)), Demo: Qwen3.8-27B Running Locally with Pi and llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088292028329378131) · [notes](../../notes/13-ai-tools/2026-08-14-demo-qwen3-8-27b-running-locally-with-pi-and-llama-cpp.md)), Audio-Visual Vibe Coding with Qwen 3.5 Omni: Spoken Specs to Web App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2038678318787317959) · [notes](../../notes/13-ai-tools/2026-03-30-audio-visual-vibe-coding-with-qwen-3-5-omni-spoken-specs-to.md))
- [ ] **[Google DeepMind (@GoogleDeepMind) on X](https://x.com/GoogleDeepMind)** · person · x.com · free  
  Google DeepMind's official X account, which posts research and model releases such as Gemma.  
  Also in: Gemma 4 and Google DeepMind's Open-Source Push (Melvin Vivas on [X](https://x.com/melvindvivas/status/2040392891231817956) · [notes](../../notes/16-trends/2026-04-04-gemma-4-and-google-deepmind-s-open-source-push.md)), Gemma 4 E4B: A Local Agentic Edge Model in 6GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2040291351615697159) · [notes](../../notes/07-agents/2026-04-04-gemma-4-e4b-a-local-agentic-edge-model-in-6gb-ram.md))
- [ ] **[NVIDIA AI (@NVIDIAAI) on X](https://x.com/NVIDIAAI)** · person · x.com · free  
  NVIDIA AI's official X account, which posts model releases and endpoint availability.  
  Also in: Using Free OpenRouter Models (Nemotron 3.5) With Coworker (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091735879970865259) · [notes](../../notes/13-ai-tools/2026-08-24-using-free-openrouter-models-nemotron-3-5-with-coworker.md)), AI News Roundup: Claude Fable 5, Scientist AI, ZCode, NVIDIA RL (Melvin Vivas on [X](https://x.com/melvindvivas/status/2072785831606304801) · [notes](../../notes/16-trends/2026-07-03-ai-news-roundup-claude-fable-5-scientist-ai-zcode-nvidia-rl.md)), Jensen Huang on NVIDIA's Long-Term Commitment to Open Nemotron Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2034093172129984515) · [notes](../../notes/16-trends/2026-03-18-jensen-huang-on-nvidia-s-long-term-commitment-to-open.md)), Qwen3.5 Multimodal Model Now on NVIDIA AI Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028079565323768069) · [notes](../../notes/03-llm-fundamentals/2026-03-01-qwen3-5-multimodal-model-now-on-nvidia-ai-endpoints.md))

## Try this

- [ ] Open the original X post to read the full AIBackends feature list, since the caption is cut off.
- [ ] Try running an open model (Gemma or Qwen) locally.
- [ ] Try gliner-PII to redact personal data locally before sending text to any cloud LLM.
- [ ] Build a Python library that wraps local AI tasks such as PII redaction and image processing behind one simple API, using open models like Gemma, Qwen and gliner-PII.
- [ ] Build a privacy filter that redacts PII locally with gliner-PII before forwarding prompts to a hosted LLM.
