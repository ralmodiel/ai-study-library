# Fine-Tuning MiniLM Embeddings with Synthetic Data, Running on CPU

Melvin Vivas · X post · 2026-03-27 · [Open on X](https://x.com/melvindvivas/status/2037352956023202198)

**Topics:** Embeddings & Vector Databases, Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A practical case study in text matching. Neither the default all-MiniLM-L6-v2 nor OpenAI text-embedding-3-small was accurate enough, so the creator fine-tuned MiniLM on synthetic data, hosted it on Hugging Face, and serves it on CPU in Docker. A small fine-tuned embedding model can beat a larger general-purpose API model on a narrow task.

## Key points

- Start with a default embedding model (all-MiniLM-L6-v2) and check whether it is good enough for your matching task.
- A paid API embedding (OpenAI text-embedding-3-small) may still fall short on domain-specific matching.
- Fine-tune a small embedding model on synthetic training data made for your use case.
- Host the fine-tuned model on the Hugging Face Hub.
- Serve it on CPU in a Docker container; small models like MiniLM don't need a GPU.

## Resources mentioned

- [ ] **[all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** · tool · huggingface.co · free  
  A small open-source sentence-transformers embedding model that maps text to 384-dimensional vectors.  
  Also in: Fine-tuning all-MiniLM-L6-v2 to Beat OpenAI Embeddings (Melvin Vivas on [X](https://x.com/melvindvivas/status/2035940011934449952) · [notes](../notes/2026-03-23-fine-tuning-all-minilm-l6-v2-to-beat-openai-embeddings.md))
- [ ] **[OpenAI text-embedding-3-small](https://platform.openai.com/docs/guides/embeddings)** · tool · platform.openai.com · paid  
  OpenAI's small paid embedding model, available through its API.  
  Also in: Fine-tuning all-MiniLM-L6-v2 to Beat OpenAI Embeddings (Melvin Vivas on [X](https://x.com/melvindvivas/status/2035940011934449952) · [notes](../notes/2026-03-23-fine-tuning-all-minilm-l6-v2-to-beat-openai-embeddings.md))
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Hugging Face Cache Deduplication with Xet in huggingface\_hub v1.32 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100983401818046770) · [notes](../notes/2026-09-19-hugging-face-cache-deduplication-with-xet-in-huggingface.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)) and 34 more
- [ ] **[Docker](https://www.docker.com)** · tool · docker.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  A container platform for packaging an application and its dependencies so it can be deployed reproducibly.  
  Also in: Deploying AI workflow integrations with Apache Camel in Docker (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104111742288879627) · [notes](../notes/2026-09-27-deploying-ai-workflow-integrations-with-apache-camel-in.md)), Devin's cloud Ubuntu sandbox ships with Docker pre-installed (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103521578600599928) · [notes](../notes/2026-09-26-devin-s-cloud-ubuntu-sandbox-ships-with-docker-pre-installed.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../notes/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../notes/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)) and 5 more

## Try this

- [ ] Test a baseline embedding model on your matching task before reaching for paid APIs
- [ ] Generate synthetic training pairs and fine-tune MiniLM when off-the-shelf embeddings fall short
- [ ] Deploy the small embedding model on CPU in Docker
- [ ] Fine-tune all-MiniLM-L6-v2 on synthetic pairs for a domain-specific text-matching task, publish it to Hugging Face, and serve it from a CPU-only Docker container
