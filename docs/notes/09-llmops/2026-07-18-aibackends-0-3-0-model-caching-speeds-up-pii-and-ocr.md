# aibackends 0.3.0: Model Caching Speeds Up PII and OCR Inference

Melvin Vivas · X post · 2026-07-18 · [Open on X](https://x.com/melvindvivas/status/2078472621386248356)

**Topics:** LLMOps, Deployment & Monitoring, AI Safety, Security & Guardrails · **Level:** intermediate

## Summary

The creator's Python library aibackends now caches models. GLiNER-PII inference is about 20x faster, and OCR with Qwen 4B VL saves about 9 seconds per call once the model has loaded the first time. The main lesson is that loading a model once and reusing it removes most of the per-call delay.

## Key points

- Install: pip install aibackends==0.3.0
- Model caching makes GLiNER-PII inference about 20x faster
- Qwen 4B VL OCR saves about 9 seconds per call after a one-time model load
- Lesson: load the model once and reuse it instead of reloading it on every request

## Resources mentioned

- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../../notes/13-ai-tools/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../../notes/13-ai-tools/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../../notes/09-llmops/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../../notes/13-ai-tools/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[GLiNER-PII](https://huggingface.co/nvidia/gliner-PII)** · tool · huggingface.co · free  
  NVIDIA's GLiNER-based model that finds personal data (PII) in text, so it can be redacted locally.  
  Also in: Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2048445624148992148) · [notes](../../notes/09-llmops/2026-04-26-running-ai-locally-rebuilding-aibackends-as-a-python.md)), Detect PII and PHI with NVIDIA's GLiNER-PII Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044428898763764219) · [notes](../../notes/11-safety/2026-04-15-detect-pii-and-phi-with-nvidia-s-gliner-pii-model.md))
- [ ] **[Qwen 4B VL](https://huggingface.co/Qwen/Qwen3-VL-4B-Instruct-GGUF)** · tool · huggingface.co · free  
  Qwen's small 4B vision-language model, used here for OCR.

## Try this

- [ ] Install aibackends with pip install aibackends==0.3.0
- [ ] Cache loaded models in your own inference code to cut latency
