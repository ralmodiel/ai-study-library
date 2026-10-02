# Wannabe vs $200K AI Engineer: Fixing RAG, Agent Tools and Model Choice

Bashiri Smith · Facebook reel · 2026-09-02 · 1:00 · 5,197 views · [Open on Facebook](https://www.facebook.com/reel/1644439303783782)

**Topics:** Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A short skit comparing a beginner's habits with a senior AI engineer's habits in three areas of production AI. Retrieving more chunks doesn't fix bad RAG answers; measuring retrieval quality and reranking does. Agents work more reliably with a small set of tools, and sending simple tasks to cheaper models protects margins and latency. The last third promotes the creator's AI-engineering community, which you join by commenting "JOIN".

## Key points

- Retrieving more chunks doesn't automatically improve a RAG app. Often it just gives the model more irrelevant context.
- To fix bad RAG answers, measure retrieval quality, rerank the results and send only the most relevant context to the model.
- Giving an agent every tool (for example 30 of them) makes it less reliable, not more capable.
- Give each agent only the tools it needs and control exactly when those tools can be called.
- Using the biggest model for everything hurts margins and latency.
- Send simple tasks to smaller models and save the expensive large models for tasks that really need them.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Measure retrieval quality in your RAG app before changing how many chunks you retrieve.
- [ ] Add a reranking step and send only the most relevant chunks to the model.
- [ ] Cut each agent's toolset down to what it needs and control when each tool can be called.
- [ ] Set up model routing: smaller models for simple tasks, large models only when needed.
- [ ] Comment "JOIN" to get the community link (promotional call to action).
