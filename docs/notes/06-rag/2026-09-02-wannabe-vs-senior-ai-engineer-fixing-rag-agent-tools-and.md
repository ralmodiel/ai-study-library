# Wannabe vs. Senior AI Engineer: Fixing RAG, Agent Tools and Model Choice Mistakes

Bashiri Smith · Facebook reel · 2026-09-02 · 1:00 · 6,618 views · [Open on Facebook](https://www.facebook.com/reel/1042291235352648)

**Topics:** Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A quick skit that compares three beginner mistakes in production AI with how experienced AI engineers handle them. First, RAG answers get worse when you just retrieve more chunks; measure retrieval quality and rerank instead. Second, giving an agent many tools makes it less reliable. Third, using the biggest model for everything hurts cost and latency, so send each task to a model that fits it. The video ends with an ad for the creator's BASWE.Ai Engineer community on Skool.

## Key points

- Retrieving more chunks doesn't automatically make RAG better. It can feed the model more irrelevant context and make answers worse.
- To fix bad RAG answers, measure retrieval quality, rerank the results, and send only the most relevant context to the model.
- An agent with 30 tools is less reliable, not more capable. A large toolset adds confusion and more ways to fail.
- Give each agent the smallest set of tools it needs and control exactly when each tool can be called.
- Using the biggest model for every request hurts both margins (cost) and latency.
- Use model routing: send simple tasks to smaller, cheaper models and keep the expensive large models for tasks that need them.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Before increasing how many chunks your RAG app retrieves, measure retrieval quality.
- [ ] Add a reranking step and send only the most relevant context to the model.
- [ ] Check your agents' toolsets: cut each agent down to the tools it actually needs and control when each tool can be called.
- [ ] Set up model routing: send simple tasks to small models and keep large models for complex ones.
- [ ] Comment "join" to get the community link (the creator's CTA).
- [ ] Upgrade a basic RAG app with retrieval-quality metrics and a reranker. Compare answer quality against simply retrieving more chunks.
- [ ] Build a model router that sends simple requests to a small model and harder ones to a large model, then measure the savings in cost and latency.
