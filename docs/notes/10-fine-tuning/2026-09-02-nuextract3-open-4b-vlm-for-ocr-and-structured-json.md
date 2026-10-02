# NuExtract3: Open 4B VLM for OCR and Structured JSON Extraction

Melvin Vivas · X post · 2026-09-02 · [Open on X](https://x.com/melvindvivas/status/2095045886984556547)

**Topics:** Fine-tuning & Model Customization, Prompt & Context Engineering, LLM Fundamentals · **Level:** intermediate

## Summary

NuExtract3 is NuMind's open-source (Apache 2.0) 4B vision-language model with reasoning. It was built from Qwen3.5 4B using SFT and then RL. It converts documents (PDFs, scans, spreadsheets) into Markdown and pulls structured JSON out of documents using a schema. The creator tried it in a free Hugging Face Space and got good results on JSON extraction and on OCR of a receipt.

## Key points

- NuExtract3 is a 4B open-source (Apache 2.0) reasoning VLM for OCR and structured extraction.
- It was built from Qwen3.5 4B through supervised fine-tuning (SFT) followed by reinforcement learning (RL).
- OCR use: turns PDFs, scans and spreadsheets into Markdown.
- Extraction use: turns a document into JSON that follows a given schema.
- The creator tested it on a receipt (image to Markdown) and on text-to-JSON, with good results.
- You can try it for free in a Hugging Face Space.

## Resources mentioned

- [ ] **[NuExtract 3 - a Hugging Face Space by numind](https://huggingface.co/spaces/numind/NuExtract3)** · tool · huggingface.co · free  
  Free web demo for trying NuExtract3 OCR and structured extraction.
- [ ] **[numind (NuMind) Spaces](https://huggingface.co/numind/spaces)** · website · huggingface.co · free  
  NuMind's Hugging Face page listing its Spaces.
- [ ] **[NuExtract3](https://huggingface.co/numind/NuExtract3)** · tool · huggingface.co · free  
  Open-source 4B reasoning VLM for OCR to Markdown and schema-based JSON extraction.
- [ ] **[Qwen3.5 4B](https://huggingface.co/collections/Qwen/qwen35)** · tool · huggingface.co · free  
  Open-weight base model from Alibaba's Qwen family.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more

## Try this

- [ ] Try NuExtract3 in the free Hugging Face Space: extract JSON from text and OCR an image such as a receipt.
- [ ] Build a receipt/document parser that uses NuExtract3 to output Markdown or schema-based JSON.
