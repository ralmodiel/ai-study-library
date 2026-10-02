# Using Jev for RAG as a Similarity Metric and Reranker

Melvin Vivas · X post · 2026-09-25 · [Open on X](https://x.com/melvindvivas/status/2103183318149939394)

**Topics:** Retrieval-Augmented Generation (RAG), Embeddings & Vector Databases · **Level:** intermediate

## Summary

The post quotes a claim that Jev's semantic matching is more reliable than plain dot-product similarity for RAG. With small datasets it can be the direct similarity metric. With large datasets it works best as a reranker after a first retrieval step.

## Key points

- Plain dot-product embedding similarity can be less reliable than a dedicated semantic-matching model.
- Small data: use Jev directly as the similarity metric to score every candidate.
- Big data: first retrieve candidates cheaply with vector search, then use Jev as a reranker.
- This is the common two-stage RAG pattern: fast retrieval first, then more accurate reranking.

## Resources mentioned

- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)) and 10 more

## Try this

- [ ] Try Jev as a reranker after vector retrieval in your RAG pipeline.
- [ ] For small datasets, compare Jev scores with dot-product similarity.
- [ ] Benchmark retrieval quality of dot-product similarity vs. Jev reranking on a small RAG dataset.
