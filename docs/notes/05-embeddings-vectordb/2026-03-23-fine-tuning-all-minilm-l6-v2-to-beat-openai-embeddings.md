# Fine-tuning all-MiniLM-L6-v2 to Beat OpenAI Embeddings

Melvin Vivas · X post · 2026-03-23 · [Open on X](https://x.com/melvindvivas/status/2035940011934449952)

**Topics:** Embeddings & Vector Databases, Fine-tuning & Model Customization · **Level:** intermediate

## Summary

The creator trained a custom embedding model starting from the small open-source all-MiniLM-L6-v2. For their own use case, its embeddings worked better than OpenAI's small embedding model. The lesson: a small model fine-tuned on your own domain can beat a general-purpose paid embedding API.

## Key points

- The base model was all-MiniLM-L6-v2, a small and fast open-source sentence-transformer.
- After custom training, it beat OpenAI text-embedding-3-small on the creator's own task.
- Fine-tuning for your domain can beat bigger general-purpose embedding APIs.
- A self-hosted embedding model removes per-call API costs and keeps data private.
- Test embedding quality on your own data, not only on public benchmarks.

## Resources mentioned

- [ ] **[all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** · tool · huggingface.co · free  
  A small open-source sentence-transformers embedding model that maps text to 384-dimensional vectors.  
  Also in: Fine-Tuning MiniLM Embeddings with Synthetic Data, Running on CPU (Melvin Vivas on [X](https://x.com/melvindvivas/status/2037352956023202198) · [notes](../../notes/05-embeddings-vectordb/2026-03-27-fine-tuning-minilm-embeddings-with-synthetic-data-running.md))
- [ ] **[OpenAI text-embedding-3-small](https://platform.openai.com/docs/guides/embeddings)** · tool · platform.openai.com · paid  
  OpenAI's small paid embedding model, available through its API.  
  Also in: Fine-Tuning MiniLM Embeddings with Synthetic Data, Running on CPU (Melvin Vivas on [X](https://x.com/melvindvivas/status/2037352956023202198) · [notes](../../notes/05-embeddings-vectordb/2026-03-27-fine-tuning-minilm-embeddings-with-synthetic-data-running.md))

## Try this

- [ ] Try fine-tuning a small open-source embedding model on your own domain data and compare it with API embeddings.
- [ ] Fine-tune all-MiniLM-L6-v2 on domain-specific pairs and compare retrieval quality against OpenAI text-embedding-3-small.
