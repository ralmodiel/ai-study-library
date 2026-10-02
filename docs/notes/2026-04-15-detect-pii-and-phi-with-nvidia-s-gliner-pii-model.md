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
  Also in: aibackends 0.3.0: Model Caching Speeds Up PII and OCR Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078472621386248356) · [notes](../notes/2026-07-18-aibackends-0-3-0-model-caching-speeds-up-pii-and-ocr.md)), Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2048445624148992148) · [notes](../notes/2026-04-26-running-ai-locally-rebuilding-aibackends-as-a-python.md))
- [ ] **[PII Guardian (Hugging Face Space)](https://huggingface.co/spaces/narasimha-m/pii-guardian)** · website · huggingface.co · free  
  A Hugging Face Space where you can try the GLiNER-PII model in your browser.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Hugging Face Cache Deduplication with Xet in huggingface\_hub v1.32 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100983401818046770) · [notes](../notes/2026-09-19-hugging-face-cache-deduplication-with-xet-in-huggingface.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)) and 34 more

## Try this

- [ ] Test nvidia/gliner-PII on sample text in the PII Guardian Space.
- [ ] Look for other PII/PHI detection models to compare against it.
- [ ] Build a PII/PHI redaction guardrail that cleans user input before it reaches an LLM.
