# 3 AI Portfolio Projects That Get Past the 6-Second Resume Scan

Bashiri Smith · Facebook reel · 2026-09-22 · 0:12 · 85,252 views · [Open on Facebook](https://www.facebook.com/reel/1396616845322191)

**Topics:** Portfolio Projects, Resume, Job Search & Interviews, AI System Design & Architecture · **Level:** intermediate

## Summary

Most AI projects on resumes get skipped because they're basic demos like a chatbot over a single PDF. The creator suggests three production-style projects instead: a hybrid-search RAG pipeline, a multi-agent orchestration system, and an LLM gateway with fallback routing. Each one tackles a real problem AI teams face, and if you document it well you'll have enough to talk about for a 45-minute interview. Note: the spoken transcript is just unrelated background audio, so everything here comes from the caption.

## Key points

- Recruiters skip most AI resume projects in about 6 seconds. Single-PDF chatbots and single-agent demos are too common to stand out.
- Project 1, RAG with hybrid search: combine dense vectors with BM25 keyword search, add reranking, and check citations. This tackles retrieval quality, which is what actually breaks in production.
- Project 2, agent orchestration: a supervisor agent, tool use, persistent memory, and handing off to a human when needed. This shows you can design the multi-agent systems teams are shipping now.
- Project 3, LLM gateway with fallback routing: per-team budgets, rate limits, circuit breakers, and switching to another provider when one fails. This is infrastructure engineering applied to AI.
- The LLM gateway lets software engineers reuse the experience they already have in an area where AI teams are short on people.
- Documenting the project matters as much as building it. The goal is one project you can discuss in depth for 45 minutes without running out of things to say.
- These are 3 of the 27 projects in the creator's guide. The guide covers the architecture, build steps phase by phase, interview talking points, and the stack for each project.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more
- [ ] **[Bashiri Smith's AI Projects Guide](https://drive.google.com/drive/folders/1juyW1jEWgVNw12la8twx53PhwMhkrnK3)** · pdf · drive.google.com · free  
  The creator's guide to 27 AI projects, with full architecture, build steps phase by phase, interview talking points, and the stack for each project.  
  Also in: 6-Step Framework for Building AI Projects Target Companies Care About (Bashiri Smith on [Facebook](https://www.facebook.com/reel/4074702829504077) · [notes](../notes/2026-09-23-6-step-framework-for-building-ai-projects-target-companies.md)), Generate Job-Worthy AI Project Ideas from Recent Research Papers + ChatGPT (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1972990223365519) · [notes](../notes/2026-09-22-generate-job-worthy-ai-project-ideas-from-recent-research.md)), 15 Production-Grade AI Projects to Go from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1722750759026422) · [notes](../notes/2026-09-16-15-production-grade-ai-projects-to-go-from-software.md)), 5 Weekend AI Engineering Projects: Cost Routing, Caching, Evals & Observability (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1987763505269220) · [notes](../notes/2026-09-14-5-weekend-ai-engineering-projects-cost-routing-caching.md)) and 3 more

## Try this

- [ ] Pick one of the three projects and build it to production quality instead of making a simple demo.
- [ ] Document the architecture and your design decisions so you can talk about the project for 45 minutes in an interview.
- [ ] Check the slides for the full tech stack of each project.
- [ ] Optional: join the BASWE community if you want a roadmap and daily calls while you build.
- [ ] RAG pipeline with hybrid search: dense vectors + BM25 + reranking + verified citations
- [ ] Agent orchestration system: supervisor agent, tool use, persistent memory, handing off to a human when needed
- [ ] LLM gateway with fallback routing: per-team budgets, rate limits, circuit breakers, switching providers on failure
