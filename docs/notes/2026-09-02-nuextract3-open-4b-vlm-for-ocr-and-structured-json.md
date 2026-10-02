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
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Hugging Face Cache Deduplication with Xet in huggingface\_hub v1.32 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100983401818046770) · [notes](../notes/2026-09-19-hugging-face-cache-deduplication-with-xet-in-huggingface.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)) and 34 more

## Try this

- [ ] Try NuExtract3 in the free Hugging Face Space: extract JSON from text and OCR an image such as a receipt.
- [ ] Build a receipt/document parser that uses NuExtract3 to output Markdown or schema-based JSON.
