# Detect PII and PHI with NVIDIA's GLiNER-PII Model

Melvin Vivas · X post · 2026-04-15 · [Open on X](https://x.com/melvindvivas/status/2044428898763764219)

**Topics:** AI Safety, Security & Guardrails · **Level:** intermediate

## Summary

Melvin shares NVIDIA's GLiNER-PII model on Hugging Face. It finds Personally Identifiable Information (PII) and Protected Health Information (PHI) in text. He also links a Hugging Face Space where you can test it in the browser.

## Key points

- PII means Personally Identifiable Information. PHI means Protected Health Information.
- nvidia/gliner-PII is a GLiNER-based named-entity model built to classify PII and PHI.
- You can try it with no setup in the 'PII Guardian' Hugging Face Space.
- Models like this work well as a privacy guardrail: redact sensitive data before you send text to an LLM or store it.

## Resources mentioned

- [ ] **[GLiNER-PII](https://huggingface.co/nvidia/gliner-PII)** · tool · huggingface.co · free  
  NVIDIA's GLiNER-based model that finds personal data (PII) in text, so it can be redacted locally.  
  Also in: aibackends 0.3.0: Model Caching Speeds Up PII and OCR Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078472621386248356) · [notes](../../notes/09-llmops/2026-07-18-aibackends-0-3-0-model-caching-speeds-up-pii-and-ocr.md)), Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2048445624148992148) · [notes](../../notes/09-llmops/2026-04-26-running-ai-locally-rebuilding-aibackends-as-a-python.md))
- [ ] **[PII Guardian (Hugging Face Space)](https://huggingface.co/spaces/narasimha-m/pii-guardian)** · website · huggingface.co · free  
  A Hugging Face Space where you can try the GLiNER-PII model in your browser.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more

## Try this

- [ ] Test nvidia/gliner-PII on sample text in the PII Guardian Space.
- [ ] Look for other PII/PHI detection models to compare against it.
- [ ] Build a PII/PHI redaction guardrail that cleans user input before it reaches an LLM.
