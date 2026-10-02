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
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../../notes/06-rag/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)) and 12 more

## Try this

- [ ] Try Jev as a reranker after vector retrieval in your RAG pipeline.
- [ ] For small datasets, compare Jev scores with dot-product similarity.
- [ ] Benchmark retrieval quality of dot-product similarity vs. Jev reranking on a small RAG dataset.
