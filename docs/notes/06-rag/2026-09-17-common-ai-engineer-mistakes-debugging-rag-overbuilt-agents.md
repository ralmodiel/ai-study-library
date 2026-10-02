# Common AI Engineer Mistakes: Debugging RAG, Overbuilt Agents and Weak Evals

Bashiri Smith · Facebook reel · 2026-09-17 · 1:02 · 17,325 views · [Open on Facebook](https://www.facebook.com/reel/28289912680668788)

**Topics:** Retrieval-Augmented Generation (RAG), Evaluation (Evals) & Testing, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The video compares "wannabe" habits with how experienced AI engineers work. When a RAG app gives wrong answers, find the failing stage before swapping to a bigger model. Measure a simple workflow before adding more agents. Set clear pass criteria and test with real questions, edge cases and past failures, not 10 happy-path questions. It ends with a pitch for the creator's paid Skool community, which offers a roadmap and coaching.

## Key points

- Don't switch to a smarter, more expensive model when RAG answers are wrong until you know which stage is broken.
- Measure retrieval and generation separately.
- Debug RAG by looking at the retrieved chunks, checking that the right evidence reaches the model, and checking that the answer is supported by that evidence.
- Fix the failing stage first. Only then think about a more expensive model.
- More agents means more places for things to go wrong. Adding agents doesn't automatically give better results.
- Benchmark a simple workflow first on accuracy, cost and latency. Only add agents when the results justify the extra complexity.
- Ten questions that look good is not proof you're ready for production. Define what a passing answer looks like, then test real questions, edge cases and previous failures (regression cases).

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] When a RAG app fails, look at the retrieved chunks and evaluate retrieval and generation separately before changing models.
- [ ] Check that each answer is supported by the evidence that was retrieved.
- [ ] Benchmark a simple single-agent or non-agent workflow on accuracy, cost and latency before building a multi-agent system.
- [ ] Write down pass criteria for answers, then build a test set with real questions, edge cases and previous failures.
- [ ] Comment 'join' to get the link to the creator's community (promotional).
- [ ] Build an evaluation harness for a RAG app that scores retrieval (whether the right chunks were found) and generation (whether the answer is grounded) separately.
- [ ] Compare a simple workflow with a multi-agent researcher, writer and checker setup on accuracy, cost and latency.
