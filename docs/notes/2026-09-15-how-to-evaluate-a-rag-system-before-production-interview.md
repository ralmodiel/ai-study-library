# How to Evaluate a RAG System Before Production (Interview Answer)

Bashiri Smith · Facebook reel · 2026-09-15 · 1:23 · 6,463 views · [Open on Facebook](https://www.facebook.com/reel/1099672623011301)

**Topics:** Evaluation (Evals) & Testing, Retrieval-Augmented Generation (RAG), Resume, Job Search & Interviews · **Level:** intermediate

## Summary

This skit shows two candidates answering the same RAG evaluation interview question. One gives a theory answer and the other gives a production answer. The strong answer builds a test set from real user questions, checks retrieval and generation separately, adds questions the documents can't answer, and points out that a high faithfulness score doesn't mean the answer is correct. The video ends with a pitch for the creator's paid Skool community.

## Key points

- Start with what you're testing: test questions should look like what real users actually ask, and each one needs a verified answer plus the documents that support it.
- Evaluate retrieval and generation separately so you can tell where a failure comes from.
- Include questions your documents can't answer. This tests whether the system admits it doesn't know or makes something up.
- Faithfulness only checks whether the answer is supported by the retrieved context. If the system retrieves an outdated document (e.g., last year's refund policy), the answer can be fully faithful and still wrong.
- Check retrieved sources for versions and effective dates, and measure correctness against verified current answers as a separate metric.
- Don't just use a stronger LLM grader. Compare LLM-as-judge scores against human reviews before trusting them.
- Having a working implementation (a repo with evaluation results) sets you apart in interviews.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] Build a RAG evaluation test set from real user questions, with verified answers and supporting documents.
- [ ] Add questions your documents can't answer to test whether the system refuses or makes things up.
- [ ] Measure retrieval and generation quality separately, and track correctness on its own, not just faithfulness.
- [ ] Check LLM-judge scores against human reviews before relying on them.
- [ ] Build a working RAG eval repo you can show in interviews.
- [ ] Comment 'interview' to get the community link (creator's call to action).
- [ ] A RAG evaluation pipeline that scores retrieval and generation separately, includes questions with no answer in the documents, checks document versions and effective dates, and calibrates its LLM judge against human labels, with the results published in a repo.
