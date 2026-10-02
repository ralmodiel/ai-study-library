# How RAG Finds the Right Document Fast: Graph-Based Vector Search

Bashiri Smith · Facebook reel · 2026-09-25 · 1:08 · 12,921 views · [Open on Facebook](https://www.facebook.com/reel/1986738085332313)

**Topics:** Embeddings & Vector Databases, Retrieval-Augmented Generation (RAG), Resume, Job Search & Interviews · **Level:** intermediate

## Summary

A skit about an interview question: how does a RAG app find the right document for a question? Embedding every document and comparing the query to every vector is a full linear scan, which is too slow at 10 million documents. The better answer is a layered nearest-neighbor graph (the HNSW approach, though the video doesn't name it). The search starts at a sparse top layer, takes big hops toward the query, then drops down to denser layers and moves in smaller steps. It only checks a few hundred vectors, so search time grows roughly logarithmically instead of linearly.

## Key points

- Step 1 of a RAG retriever: embed every document (or chunk) as a vector.
- The naive answer, comparing the question's vector to every document vector and taking the best match, is a brute-force full scan. That's O(n) and too slow for 10 million documents.
- The answer interviewers want: an approximate nearest-neighbor index built as a graph, where each vector links to its nearest neighbors.
- Add a few sparse 'express' layers on top of the base graph so the search can make long jumps.
- Search starts at the top layer with big hops toward the query, then moves down a layer at a time, taking smaller hops each time.
- At each step, the search jumps to whichever neighbor is closest to the query (greedy search). Most vectors are never visited.
- One search touches only a few hundred vectors instead of millions, so linear search becomes roughly logarithmic.
- This layered-graph design is HNSW (Hierarchical Navigable Small World), used by most vector databases. The video describes it but never says the name; the name is added here so you can look it up.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] Prepare to explain why brute-force vector comparison doesn't scale and how approximate nearest-neighbor graph indexes avoid a full scan.
- [ ] Practice explaining the layered graph search: big hops at the top layer, smaller hops lower down, greedy moves to the nearest neighbor.
- [ ] Optional (creator's pitch): join the creator's community for a learning plan, mock interviews and coaching.
