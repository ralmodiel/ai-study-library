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
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] Before increasing how many chunks your RAG app retrieves, measure retrieval quality.
- [ ] Add a reranking step and send only the most relevant context to the model.
- [ ] Check your agents' toolsets: cut each agent down to the tools it actually needs and control when each tool can be called.
- [ ] Set up model routing: send simple tasks to small models and keep large models for complex ones.
- [ ] Comment "join" to get the community link (the creator's CTA).
- [ ] Upgrade a basic RAG app with retrieval-quality metrics and a reranker. Compare answer quality against simply retrieving more chunks.
- [ ] Build a model router that sends simple requests to a small model and harder ones to a large model, then measure the savings in cost and latency.
