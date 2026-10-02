# Taking a RAG App to Production: Evals, Guardrails, Cost and Tracing

Bashiri Smith · Facebook reel · 2026-09-12 · 1:10 · 5,089 views · [Open on Facebook](https://www.facebook.com/reel/1223253343329020)

**Topics:** Retrieval-Augmented Generation (RAG), Evaluation (Evals) & Testing, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A working RAG demo is only step one. To get it ready for production, you need to stop hallucinations, private-data leaks and runaway API costs. The video covers four areas: an evaluation dataset tested with Ragas, guardrails (permission-filtered retrieval and limits on agent steps and tokens), ways to cut cost and latency (prompt caching, smaller models, parallel tool calls), and tracing with Langfuse.

## Key points

- Production risks to plan for: hallucinations, leaking private data, and burning through your API budget.
- Build an evaluation dataset of verified question-and-answer pairs.
- Use Ragas to check two things: whether retrieval returns the right information, and whether the answer is supported by what was retrieved.
- Rerun the evals every time you change prompts, the model, or the retrieval pipeline (regression testing).
- Guardrails: filter retrieved documents by the user's permissions before they reach the model, and before any tools run.
- Set limits on agent steps, retries and token usage so one request can't turn into an endless loop.
- Cost and latency: use prompt caching for repeated context, move simpler tasks to smaller models once they pass your evals, and run independent tool calls in parallel.
- Trace requests with Langfuse to see which retrieval step, model call or tool is slow, expensive or failing.

## Resources mentioned

- [ ] **[Ragas](https://github.com/vibrantlabsai/ragas)** · tool · github.com · free  
  Listed under RAG evaluation tools in the guide's evaluation stack.
- [ ] **[Langfuse](https://langfuse.com)** · tool · langfuse.com · free  
  Listed under platforms that combine tracing and evaluation.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md))
- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Build an evaluation dataset of verified questions and answers for your RAG app.
- [ ] Use Ragas to measure retrieval relevance and whether answers are supported by the retrieved context.
- [ ] Rerun your evals whenever you change prompts, models or the retrieval pipeline.
- [ ] Filter retrieval by user permissions before documents reach the model or tools run.
- [ ] Set limits on agent steps, retries and token usage.
- [ ] Use prompt caching for repeated context, and move simpler tasks to smaller models once they pass your evals.
- [ ] Run independent tool calls in parallel.
- [ ] Trace requests with Langfuse to find slow, expensive or failing steps.
- [ ] Comment 'production' on the video to get the community link.
- [ ] Upgrade an existing RAG app into a production-level portfolio project, adding a Ragas eval suite, permission-aware retrieval, agent/token limits, prompt caching, model routing to smaller models, and Langfuse tracing.
