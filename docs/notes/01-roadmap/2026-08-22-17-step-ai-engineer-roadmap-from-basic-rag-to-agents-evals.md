# 17-Step AI Engineer Roadmap: From Basic RAG to Agents, Evals, LLMOps & Governance

Bashiri Smith · Facebook reel · 2026-08-22 · 0:11 · 90,085 views · [Open on Facebook](https://www.facebook.com/reel/1137452818806022)

**Topics:** Start Here: Roadmaps & Strategy, Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Bashiri Smith says building a basic RAG chatbot isn't enough to become a serious AI engineer, and lays out a 17-step learning path. It starts with LLM fundamentals and RAG, then covers advanced retrieval, agents and design patterns, MCP and multi-agent systems. It continues with evaluation (including LLM-as-a-judge and agent evals), guardrails, observability, LLMOps, CI/CD, data versioning, classic ML metrics, and AI governance. The reel has no speech; all the content is in the caption.

## Key points

- Foundations first: tokens, transformers, context windows and inference. Then basic RAG: chunking, embeddings, vector databases, retrieval and generation.
- Advanced retrieval goes beyond basic RAG with hybrid search, query rewriting, metadata filtering and reranking.
- Agents run a loop of reason, act, observe, repeat. Key design patterns are ReAct, reflection, planning, routing and tool use.
- Model Context Protocol (MCP) connects agents to tools, APIs and data. Multi-agent systems have agents that specialize, delegate and collaborate.
- Evals: define what 'good' means, use LLM-as-a-judge with structured criteria at scale, and score agent trajectories, tool calls, task completion and outcomes.
- Production: guardrails (validation, moderation, PII protection, prompt-injection defenses), observability (latency, cost, failures), LLMOps lifecycle and CI/CD to test and ship changes safely.
- Reproducibility and ML basics: version datasets with DVC, and know bias/variance, overfitting, precision, recall, F1 and ROC-AUC.
- Governance: human oversight, risk management, the NIST AI RMF and the EU AI Act.

## Resources mentioned

- [ ] **[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)** · paper · arxiv.org · free  
  The paper behind the ReAct agent pattern, which interleaves reasoning steps with tool actions.
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../../notes/13-ai-tools/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../../notes/07-agents/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)) and 7 more
- [ ] **[DVC (Data Version Control)](https://dvc.org)** · tool · dvc.org · free · open in a browser to verify  
  Open-source tool for versioning datasets and ML experiments so they can be reproduced.  
  Also in: Five Core AI Engineering Topic Areas: A Study Roadmap Checklist (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1769177294097565) · [notes](../../notes/01-roadmap/2026-08-25-five-core-ai-engineering-topic-areas-a-study-roadmap.md))
- [ ] **[NIST AI Risk Management Framework (AI RMF)](https://www.nist.gov/itl/ai-risk-management-framework)** · pdf · nist.gov · free  
  US NIST framework for identifying and managing risks of AI systems.
- [ ] **[EU AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)** · pdf · eur-lex.europa.eu · free  
  The European Union's law regulating AI systems by risk level.
- [ ] **[The Complete AI Engineer Roadmap for 2026 (Exact Courses + Step-by-Step)](https://www.youtube.com/watch?v=ZSOecQCdea4)** · video · youtube.com · free  
  Bashiri Smith's free YouTube training on upgrading your skills and becoming competitive for AI engineering roles, with specific courses listed step by step.  
  Also in: Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../../notes/01-roadmap/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 Free Videos to Move from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1615291686990735) · [notes](../../notes/01-roadmap/2026-09-28-6-free-videos-to-move-from-software-engineer-to-ai-engineer.md)) and 18 more
- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## Try this

- [ ] Go beyond a basic RAG chatbot and work through the 17 steps in order.
- [ ] Learn advanced retrieval: hybrid search, query rewriting, metadata filtering and reranking.
- [ ] Build agents with the ReAct, reflection, planning, routing and tool-use patterns, and connect them to tools through MCP.
- [ ] Set up evals: define success criteria, use LLM-as-a-judge, and score agent trajectories and tool calls.
- [ ] Add guardrails, observability, CI/CD and data versioning with DVC to your LLM apps.
- [ ] Study the NIST AI RMF and the EU AI Act for governance.
- [ ] Comment 'AI' on the post to receive the full roadmap and community link.
