# Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes

Bashiri Smith · Facebook reel · 2026-09-27 · 0:51 · 5,631 views · [Open on Facebook](https://www.facebook.com/reel/28509399318713823)

**Topics:** Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP, Start Here: Roadmaps & Strategy · **Level:** intermediate

## Summary

A quick comparison of how a beginner and a senior AI engineer approach the same tasks. Basic RAG and LLM-in-a-loop agents are fine for demos but not for real products. Production RAG needs hybrid search, re-ranking, query rewriting and measured retrieval quality. Agents need narrowly scoped tools and deterministic steps, with state managed by LangGraph. Context engineering and evals matter more than prompt tweaking, and fine-tuning comes last.

## Key points

- Basic RAG (chunk, embed, store in a vector DB, return the top match) is a demo, not a product.
- Production RAG: hybrid search plus re-ranking, rewriting the query before it reaches the index, and measuring retrieval quality before trusting answers.
- An 'LLM in a loop with tools' left to figure things out burns tokens and ships chaos.
- Better agents: keep tools narrowly scoped, keep deterministic parts deterministic, and manage state with LangGraph.
- Prompts are only about 10% of the job. The real work is making sure the model has the right context.
- Don't start by training models from scratch in PyTorch. Fine-tuning should come last, not first.
- Retrieval, context and evals solve about 90% of problems. Only change model weights when nothing else improves a measured number.

## Resources mentioned

- [ ] **[The Complete AI Engineer Roadmap for 2026 (Exact Courses + Step-by-Step)](https://www.youtube.com/watch?v=ZSOecQCdea4)** · video · youtube.com · free  
  Bashiri Smith's free YouTube training on upgrading your skills and becoming competitive for AI engineering roles, with specific courses listed step by step.  
  Also in: Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../../notes/01-roadmap/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 Free Videos to Move from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1615291686990735) · [notes](../../notes/01-roadmap/2026-09-28-6-free-videos-to-move-from-software-engineer-to-ai-engineer.md)) and 18 more
- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more
- [ ] **[LangGraph](https://www.langchain.com/langgraph)** · tool · langchain.com · free  
  Open-source library for building stateful LLM workflows as graphs, with branching, loops and human-in-the-loop pauses.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), LangChain vs. LangGraph Explained with One RAG Chatbot (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1394445942341422) · [notes](../../notes/06-rag/2026-09-29-langchain-vs-langgraph-explained-with-one-rag-chatbot.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)) and 2 more
- [ ] **[PyTorch](https://pytorch.org)** · tool · pytorch.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Deep-learning framework. Its built-in scaled dot-product attention (SDP) was the baseline in this benchmark.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../../notes/13-ai-tools/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../../notes/13-ai-tools/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../../notes/15-career/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md)) and 5 more

## Try this

- [ ] Go beyond basic RAG: add hybrid search, re-ranking and query rewriting.
- [ ] Measure retrieval quality before trusting any answer.
- [ ] Keep agent tools narrowly scoped, keep deterministic steps deterministic, and manage state with a framework like LangGraph.
- [ ] Focus on giving the model the right context rather than over-polishing prompts.
- [ ] Solve problems with retrieval, context and evals first. Only fine-tune when nothing else improves a measured number.
- [ ] Comment '200k' to get the creator's AI engineer roadmap.
- [ ] Upgrade a basic RAG app to production quality with hybrid search, re-ranking, query rewriting and retrieval-quality evals.
- [ ] Build a LangGraph agent with narrowly scoped tools and deterministic steps instead of an open-ended LLM loop.
