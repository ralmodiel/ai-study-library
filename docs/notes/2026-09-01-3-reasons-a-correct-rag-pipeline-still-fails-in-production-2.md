# 3 Reasons a "Correct" RAG Pipeline Still Fails in Production

Bashiri Smith · Facebook reel · 2026-09-01 · 1:03 · 6,751 views · [Open on Facebook](https://www.facebook.com/reel/1796373545032695)

**Topics:** Retrieval-Augmented Generation (RAG), LLMOps, Deployment & Monitoring, AI System Design & Architecture · **Level:** intermediate

## Summary

A RAG pipeline can retrieve well and still give bad answers. The video gives three causes: outdated documents, vague queries, and answers whose truth depends on context. For each one it gives a fix: lifecycle management for documents, a clarification loop before retrieval, and metadata that decides which source applies.

## Key points

- Perfect retrieval is useless if the document it finds is outdated, for example an old policy that was never updated or removed.
- Fix for outdated documents: add document versioning, expiration dates and approval states, and remove superseded documents from the index.
- Vague queries like "applesauce?" should not go straight to retrieval.
- Fix for vague queries: add a clarification loop that checks whether the query shows enough intent. If it doesn't, the system asks the user what they meant before retrieving.
- Context-dependent truth: several documents can all be correct at once, such as federal policy, state policy and a company's internal guideline.
- Fix for context-dependent truth: attach metadata (jurisdiction, source type, scope) and use the user's context to decide which source applies.
- Building a demo RAG app is easy. Making one work in production is a different skill.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] Audit your RAG knowledge base for outdated or superseded documents, then add versioning, expiration dates and approval states.
- [ ] Add a query clarification loop that checks intent before retrieval and asks the user what they meant when a query is vague.
- [ ] Tag documents with metadata such as jurisdiction (federal, state or company) so the system can pick the source that applies.
- [ ] Comment "RAG" on the video to join the creator's community.
- [ ] Build a policy Q&A RAG system that handles document versions and expiration, and filters by jurisdiction metadata (federal, state or company), with a clarification step for vague queries.
