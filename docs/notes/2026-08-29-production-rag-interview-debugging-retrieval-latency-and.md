# Production RAG Interview: Debugging Retrieval, Latency and Cost Like an Engineer

Bashiri Smith · Facebook reel · 2026-08-29 · 1:47 · 69,314 views · [Open on Facebook](https://www.facebook.com/reel/1593772339116225)

**Topics:** Retrieval-Augmented Generation (RAG), AI System Design & Architecture, Resume, Job Search & Interviews · **Level:** intermediate

## Summary

This skit shows two candidates answering the same RAG system-design interview questions. One gives the textbook answer, and the other answers like a working AI engineer. The video covers how to design a production RAG pipeline as separately measurable components, how to diagnose confident but wrong answers by first separating retrieval failures from generation failures, and how to cut latency and cost after a 10x traffic jump by profiling before optimizing. It ends by promoting the creator's AI engineering community.

## Key points

- Start with data and retrieval requirements, not the tech stack: ask what documents are being indexed, how often they change, and what queries users actually make.
- Build ingestion, chunking, embedding, indexing, retrieval, re-ranking, generation and evaluation as separate components, so you can measure and improve each one on its own.
- When the system gives confident wrong answers, first work out whether it is a retrieval failure or a generation failure. Just changing the prompt or retrieving more chunks is the weak answer.
- For debugging, log the query, the retrieved documents, their relevance scores, the context sent to the model, and the final response.
- To fix retrieval, add metadata filters, hybrid search, query rewriting or re-ranking. To fix generation, improve the generation prompt, add citations, or make the model abstain when the context doesn't support an answer.
- For latency and cost at 10x traffic, profile the pipeline first. Embedding, vector search, re-ranking and generation each have different latency profiles.
- Optimization tactics: cache repeated queries or retrieval results, batch embeddings during ingestion, limit unnecessary context, run independent retrieval calls in parallel, and route simpler requests to cheaper models.
- Having already built a RAG system that you can show from a repo is a strong signal in interviews.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] In RAG design interviews, start from data and query requirements before naming tools.
- [ ] Debug wrong answers by logging every pipeline stage and separating retrieval failures from generation failures.
- [ ] Profile each pipeline stage before optimizing for latency or cost.
- [ ] Build a working RAG project and keep it in a repo you can show interviewers.
- [ ] Comment 'interview' on the video to get the link to the creator's community.
- [ ] Build a production-style RAG pipeline with modular ingestion, chunking, embedding, indexing, retrieval, re-ranking, generation and evaluation components, then show it from a repo in interviews.
- [ ] Add hybrid search, query rewriting, metadata filters and re-ranking to a RAG system, and measure how much each one improves retrieval.
- [ ] Optimize a RAG app for scale using caching, batched embeddings, parallel retrieval and routing requests to models by cost.
