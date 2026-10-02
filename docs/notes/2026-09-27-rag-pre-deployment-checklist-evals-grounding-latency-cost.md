# RAG Pre-Deployment Checklist: Evals, Grounding, Latency, Cost & Monitoring

Bashiri Smith · Facebook reel · 2026-09-27 · 0:54 · 4,364 views · [Open on Facebook](https://www.facebook.com/reel/2981923282200897)

**Topics:** Retrieval-Augmented Generation (RAG), Evaluation (Evals) & Testing, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A short dialogue covering what to check before shipping a RAG app to production. It goes through an eval set of golden questions, retrieval quality with reranking, answers grounded in sources with citations, using the same embedding model for queries and documents, latency and cost targets, and observability in production. It ends with an invitation to join the creator's AI engineering community.

## Key points

- Build an eval set first: golden questions with expected answers, and run every change against it before it ships (regression testing).
- Check retrieval quality: make sure recall is good, then rerank the top hits so the model only sees the best chunks.
- Prevent hallucination: answer only from retrieved context, cite sources, and say 'I don't know' when nothing relevant is retrieved.
- Use the same embedding model and version for queries and documents. If they don't match, retrieval breaks.
- Latency target: P95 under 2 seconds.
- Control cost per query with a semantic cache so repeated or similar questions aren't paid for twice.
- Production observability: trace every query, logging retrieval scores, tokens and latency, and set alerts or reports for faithfulness drops and cost spikes.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] Build a golden-question eval set with expected answers and run it on every change before deploying.
- [ ] Add reranking on top of retrieval and measure recall.
- [ ] Make the model answer only from retrieved context, cite sources, and refuse when the context isn't relevant.
- [ ] Check that query and document embeddings use the same model and version.
- [ ] Measure P95 latency (target under 2s) and cost per query, and add a semantic cache for repeated questions.
- [ ] Trace every production query (retrieval scores, tokens, latency) and alert on faithfulness drops and cost spikes.
- [ ] Comment "Deploy" to get the link to the creator's community.
