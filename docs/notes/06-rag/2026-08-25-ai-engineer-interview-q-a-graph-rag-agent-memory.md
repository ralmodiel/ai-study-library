# AI Engineer Interview Q&A: Graph RAG, Agent Memory, Observability, Guardrails

Bashiri Smith · Facebook reel · 2026-08-25 · 1:32 · 4,434 views · [Open on Facebook](https://www.facebook.com/reel/28171450735821525)

**Topics:** Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A mock AI engineering interview with four questions and short model answers. It covers when graph RAG is a better choice than plain vector RAG, how to design agent memory and when to bring in a human, what an LLM observability and tracing stack should capture, and how to add guardrails while managing what they cost. It ends by promoting the creator's Skool community, BASWE.Ai Engineer.

## Key points

- Graph RAG beats vector RAG when the answer depends on relationships rather than semantic similarity. Example: multi-hop questions about how people, companies or events connect.
- Vector RAG is good at finding relevant chunks. Only use a graph when relationships clearly improve retrieval, because building and maintaining the graph costs a lot.
- Agent memory: keep short-term working state (the current task) separate from long-term memory, which should store only durable information that helps future tasks.
- Bring in a human when confidence is low, when the action is irreversible or high-risk, or when the agent is about to cross an important permission boundary.
- Observability: trace the whole request, including prompt, retrieval, tool calls, model responses, latency, token usage, cost and errors.
- Link traces to evaluation so you can tell whether a failure came from retrieval, the model, a tool or orchestration. The goal is to reproduce and diagnose failures, not just log them.
- Guardrails go wherever model output creates real risk: schema validation, permission checks, content filters, or a separate verifier model.
- Guardrails cost extra latency and money and can cause false positives, so make them stronger as the risk goes up.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Practice short, structured answers to these four interview questions: graph vs. vector RAG, agent memory and human-in-the-loop, LLM observability, and guardrails.
- [ ] Comment 'join' or use the caption link to join the BASWE.Ai Engineer community (optional, creator promotion).
