# Sentence Transformers v6: ColBERT-Style Multi-Vector Models Fully Supported

Melvin Vivas · X post · 2026-08-20 · [Open on X](https://x.com/melvindvivas/status/2090291993402597855)

**Topics:** Embeddings & Vector Databases, Retrieval-Augmented Generation (RAG) · **Level:** intermediate

## Summary

Sentence Transformers v6.0 has been released. It adds MultiVectorEncoder, which makes ColBERT-style late-interaction models a full model type alongside dense, sparse and reranker models. Training, inference and interpretation are all supported.

## Key points

- Sentence Transformers v6.0 adds the MultiVectorEncoder model type.
- ColBERT-style late interaction stores one vector per token instead of one vector per document.
- Multi-vector models can now be trained, run and interpreted inside the library.
- The library now covers four model families: dense, sparse, reranker (cross-encoder) and multi-vector.

## Resources mentioned

- [ ] **[Sentence Transformers](https://www.sbert.net)** · tool · sbert.net · free  
  Open-source Python library for training and running embedding, sparse, reranker and (from v6) multi-vector models.
- [ ] **[ColBERT](https://arxiv.org/pdf/2004.12832)** · paper · arxiv.org · free  
  Late-interaction retrieval model that scores documents by matching their token embeddings against the query's token embeddings.

## Try this

- [ ] Upgrade to Sentence Transformers v6 and try MultiVectorEncoder for late-interaction retrieval.
- [ ] Compare dense, sparse and ColBERT-style multi-vector retrieval on your own RAG dataset.
