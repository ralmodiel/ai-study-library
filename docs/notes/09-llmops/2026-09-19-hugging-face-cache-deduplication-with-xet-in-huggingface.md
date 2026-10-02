# Hugging Face Cache Deduplication with Xet in huggingface_hub v1.32

Melvin Vivas · X post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2100983401818046770)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

A quoted post explains that huggingface_hub v1.32 stores identical Xet-backed files only once, even when several repos share them. If five repos share the same 20 GB weights file, disk use drops from about 100 GB to about 20 GB. This matters if you download many fine-tunes or variants that share base weights.

## Key points

- huggingface_hub v1.32 deduplicates identical Xet-backed files across repos in the local cache.
- Example: 5 repos sharing one 20 GB weights file used about 100 GB before and about 20 GB after.
- The Hugging Face cache is a content-addressed store, not just a folder of downloaded models.
- Upgrade huggingface_hub to get the disk savings, which are biggest when you keep many related model repos locally.

## Resources mentioned

- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more
- [ ] **[Xet (Hugging Face storage backend)](https://huggingface.co/docs/hub/en/storage-backends)** · tool · huggingface.co · free  
  Hugging Face's chunk-based storage backend for large files on the Hub, which makes deduplication possible.

## Try this

- [ ] Upgrade huggingface\_hub to v1.32 or later to free up disk space in the model cache.
