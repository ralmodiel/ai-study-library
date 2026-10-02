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
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)), Push Fine-Tuned Models to Hugging Face from Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099511372778532904) · [notes](../notes/2026-09-14-push-fine-tuned-models-to-hugging-face-from-unsloth-studio.md)) and 34 more
- [ ] **[Xet (Hugging Face storage backend)](https://huggingface.co/docs/hub/en/storage-backends)** · tool · huggingface.co · free  
  Hugging Face's chunk-based storage backend for large files on the Hub, which makes deduplication possible.

## Try this

- [ ] Upgrade huggingface\_hub to v1.32 or later to free up disk space in the model cache.
