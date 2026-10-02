# 3 Reasons a "Correct" RAG Pipeline Still Fails in Production

Bashiri Smith · Facebook reel · 2026-09-01 · 1:03 · 2,664 views · [Open on Facebook](https://www.facebook.com/reel/1717623592793935)

**Topics:** Retrieval-Augmented Generation (RAG), LLMOps, Deployment & Monitoring, AI System Design & Architecture · **Level:** intermediate

## Summary

A RAG pipeline can retrieve perfectly and still give wrong answers. This video covers three ways that happens in production: outdated documents, vague or low-intent queries, and truth that depends on context, where several sources are each correct in different situations. For each one it gives a fix: document lifecycle management, a clarification loop before retrieval, and metadata that tells the system which source applies.

## Key points

- Failure 1, outdated documents: perfect retrieval is useless if it returns an old or superseded policy.
- Fix for stale data: use document versioning, expiration dates and approval states, and remove superseded documents from the index.
- Failure 2, bad queries: a vague query like "applesauce?" should not go straight into retrieval.
- Fix for bad queries: add a clarification loop that checks whether the query has enough intent. If it doesn't, ask the user what they meant before retrieving.
- Failure 3, context-dependent truth: several documents can all be correct, such as federal policy, state policy and an internal company guideline.
- Fix for context-dependent truth: attach metadata (jurisdiction, source type, scope) and use the user's context so the system knows which source applies.
- Building a demo RAG app is easy. Making one work in production is a separate skill.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Audit your RAG knowledge base for stale or superseded documents, and add versioning, expiration dates and approval states.
- [ ] Add a query-intent check or clarification loop before retrieval, so vague queries lead to a follow-up question.
- [ ] Tag documents with metadata such as jurisdiction, source authority and scope, so the system can pick the source that applies.
- [ ] Comment "RAG" on the post to get access to the creator's community and learning roadmap.
- [ ] Build a policy-QA RAG system with document lifecycle management (versioning, expiry, approval state) and automatic exclusion of superseded documents.
- [ ] Build a RAG app with a pre-retrieval clarification loop that detects low-intent queries and asks the user to clarify them.
- [ ] Build a multi-jurisdiction RAG assistant (federal, state and company policy) that uses metadata filtering to pick the applicable source.
