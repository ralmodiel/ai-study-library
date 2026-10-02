# 3-Month Roadmap to AI Engineering for Experienced Software Engineers

Bashiri Smith · Facebook reel · 2026-09-13 · 0:07 · 10,662 views · [Open on Facebook](https://www.facebook.com/reel/28280516228224450)

**Topics:** Start Here: Roadmaps & Strategy, Retrieval-Augmented Generation (RAG), Evaluation (Evals) & Testing · **Level:** intermediate

## Summary

A 12-week plan for software engineers who already build APIs, work with databases and ship software, and can spend 10–15 hours a week on it. Month 1 is about building one useful LLM app with RAG and evaluating it. Month 2 makes it reliable with hybrid search, reranking, safe tool use, error handling and security testing. Month 3 covers deploying, monitoring, measuring quality, latency and cost, and turning the work into a case study for the job search. The creator warns that 3 months is only realistic if you already have software engineering experience, and a job is not guaranteed.

## Key points

- Before you start: you already build APIs, work with databases and ship software, and you can commit 10–15 hours a week. Becoming an AI engineer in 3 months is very hard and does not guarantee a job.
- Month 1, build one useful LLM app. Week 1: learn tokens, context windows, structured outputs and tool calling, and connect an LLM to your backend. Week 2: pick a focused use case with real data and write 30–50 test cases.
- Month 1, continued. Week 3: build RAG with chunking, embeddings, vector search and metadata filters. Week 4: evaluate retrieval quality and answer quality separately, and find where it fails.
- Month 2, make it reliable. Week 5: compare hybrid search and reranking against your baseline. Week 6: add a useful tool, validate its inputs and enforce permissions.
- Month 2, continued. Week 7: handle retries, timeouts and invalid outputs, and limit tool calls. Week 8: test for prompt injection and unauthorized access, and turn every failure into a regression test.
- Month 3, ship it. Week 9: deploy and add tracing for retrieval, model calls and tools. Week 10: measure quality, latency and cost, and test different models and caching.
- Month 3, prove your skills. Week 11: get user feedback, fix failures and write down the tradeoffs. Week 12: publish a case study, update your resume, practice interviews and apply.
- Even if you don't have the job title after 90 days, you will have stronger skills and proof that you can build.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] Commit 10–15 hours a week for 12 weeks.
- [ ] Learn tokens, context windows, structured outputs and tool calling, then connect an LLM to your backend.
- [ ] Pick a focused use case with real data and write 30–50 test cases.
- [ ] Build RAG with chunking, embeddings, vector search and metadata filters.
- [ ] Evaluate retrieval quality and answer quality separately, and find the failures.
- [ ] Compare hybrid search and reranking against your baseline.
- [ ] Add a tool that validates inputs and enforces permissions.
- [ ] Handle retries, timeouts and invalid outputs, and limit tool calls.
- [ ] Test for prompt injection and unauthorized access, and turn failures into regression tests.
- [ ] Deploy with tracing for retrieval, model calls and tools.
- [ ] Measure quality, latency and cost, and test different models and caching.
- [ ] Get user feedback, fix failures and document the tradeoffs.
- [ ] Publish a case study, update your resume, practice interviews and apply for jobs.
- [ ] Comment "LEVEL UP" to join the creator's community.
- [ ] One production-grade LLM app with RAG for a focused use case using real data. It should include 30–50 evaluation test cases, hybrid search with reranking, a permissioned tool, regression tests for prompt injection and unauthorized access, tracing, and tracking of quality, latency and cost. Write it up as a public case study.
