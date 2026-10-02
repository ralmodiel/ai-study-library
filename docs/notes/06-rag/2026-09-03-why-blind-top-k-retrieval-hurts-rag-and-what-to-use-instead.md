# Why Blind Top-K Retrieval Hurts RAG, and What to Use Instead

Bashiri Smith · Facebook reel · 2026-09-03 · 1:11 · 5,605 views · [Open on Facebook](https://www.facebook.com/reel/903339469326847)

**Topics:** Retrieval-Augmented Generation (RAG), Embeddings & Vector Databases · **Level:** intermediate

## Summary

The video explains that fixed Top-K retrieval always sends K chunks to the LLM, even when the lower-ranked chunks are weak, outdated or off-topic. That noise can make the final answer worse. A production RAG system pulls in more candidates first, then uses reranking, relevance thresholds, dynamic K and metadata filtering so that only relevant context reaches the LLM.

## Key points

- Top-K means you take the K highest-scoring chunks from vector search and pass them to the LLM. If K = 5, you always send 5 chunks.
- The problem: the 5th-best chunk can still be bad. Mixing it with good chunks can make the LLM's answer worse.
- Example query, 'How many days of PTO do I get?': '15 days PTO/year' scores 0.92, 'Holidays are separate' 0.87, '10 days PTO' (outdated/conflicting) 0.61, 'PTO approval' 0.56, 'manager approval' 0.51. Blind Top-5 sends all of them, including the conflicting 10-day chunk.
- Production pattern: retrieve more candidates than you need, then narrow them down before generation.
- Reranking: reorder the candidates with a stronger relevance model.
- Relevance threshold: drop any chunk below a minimum score, even if that leaves fewer than K.
- Dynamic K: decide per query how many chunks are worth sending. Metadata filtering removes outdated or out-of-scope documents (for example, old policy versions).
- Change the goal from 'give me the top 5' to 'give me only the relevant context'. That is a key difference between basic RAG and production RAG.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Look at the scores your retriever returns instead of always sending a fixed Top-K to the LLM.
- [ ] Retrieve a larger set of candidates, then rerank them before generation.
- [ ] Add a relevance score threshold so low-scoring chunks are dropped.
- [ ] Make the number of chunks dynamic, based on how many are actually relevant.
- [ ] Use metadata filtering to exclude outdated or irrelevant documents.
- [ ] Optional (creator's CTA): comment 'RAG' on the video to join the creator's community.
- [ ] Build an HR policy Q&A RAG bot (for example, answering PTO questions) and compare answer quality between fixed Top-5 retrieval and a pipeline that uses reranking, a relevance threshold, dynamic K and metadata filtering.
