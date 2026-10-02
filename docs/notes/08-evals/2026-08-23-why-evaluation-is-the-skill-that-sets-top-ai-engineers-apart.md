# Why Evaluation Is the Skill That Sets Top AI Engineers Apart

Bashiri Smith · Facebook reel · 2026-08-23 · 0:49 · 17,402 views · [Open on Facebook](https://www.facebook.com/reel/28946891811584061)

**Topics:** Evaluation (Evals) & Testing, LLMOps, Deployment & Monitoring, Resume, Job Search & Interviews · **Level:** intermediate

## Summary

The creator argues that many people learn to build RAG systems, agents and AI apps, but the AI engineers who earn the most are paid to evaluate these systems and keep them reliable. Most companies hiring today already have agents and RAG in place. LLM outputs are unpredictable and can drift over time, so engineers need to measure quality, catch failures and monitor systems in production. The post also promotes a free evaluation guide and the creator's AI engineering community.

## Key points

- Building RAG, agents and AI apps is common. Evaluation is the skill that sets you apart.
- Most companies hiring AI engineers already have agents and RAG systems running, so the work is about keeping them reliable.
- LLM outputs are non-deterministic: a system that worked yesterday can give different results tomorrow, and RAG can retrieve the wrong context.
- Core eval skills: measure output quality, evaluate retrieval performance, and detect failures and hallucinations.
- Build automated eval pipelines and test agents across edge cases.
- Monitor AI systems in production and balance quality, latency and cost.
- The goal is to prove the system works, understand when it fails, and keep it reliable in production.
- The creator says AI engineers paid $200K-$500K+ are paid to build systems that keep agents and AI apps in check.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more

## From the PDF shared here: Evaluation Field Guide (baswe.ai engineer accelerator – Ops and Evaluation module)

[Open the original](https://drive.google.com/file/d/1BQwIzI5tWC4Rd6jmloCQMueQnwAYuM1M/view?usp=sharing) · 41 pages

Bashiri Smith's 41-page practitioner's guide to evaluating AI systems. It covers eval fundamentals (eval-driven development, golden datasets, metric types, basic statistics), deterministic and overlap metrics for LLM outputs, LLM-as-a-judge (rubric design, judge biases, checking judges against human labels), RAG evaluation (retrieval metrics and the RAG triad), agent trajectory evaluation, model benchmarking and fine-tune evaluation, and production evals (tracing, online signals, A/B tests, drift, guardrails, CI eval gates). It ends with a map of the eval tool stack, four portfolio projects and interview signals. Read it once end to end, then use it as a reference, and build one of the portfolio projects.

- [ ] **[Langfuse](https://langfuse.com)** · tool · langfuse.com · free  
  Listed under platforms that combine tracing and evaluation.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), Taking a RAG App to Production: Evals, Guardrails, Cost and Tracing (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1223253343329020) · [notes](../../notes/06-rag/2026-09-12-taking-a-rag-app-to-production-evals-guardrails-cost-and.md))
- [ ] **[LangSmith](https://www.langchain.com/langsmith)** · tool · langchain.com · free  
  Listed under platforms that combine tracing and evaluation.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md))
- [ ] **[OpenAI Evals](https://github.com/openai/evals)** · repo · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Listed under eval frameworks for defining and running evaluations.  
  Also in: Is OpenAI Evals Still Maintained? (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092886423674507462) · [notes](../../notes/08-evals/2026-08-27-is-openai-evals-still-maintained.md))
- [ ] **[promptfoo](https://github.com/promptfoo/promptfoo)** · repo · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Listed under eval frameworks for defining and running evaluations, offline and in CI.  
  Also in: Running LLM evals with promptfoo on local llama.cpp models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092862288072253675) · [notes](../../notes/08-evals/2026-08-27-running-llm-evals-with-promptfoo-on-local-llama-cpp-models.md))
- [ ] **[Ragas](https://github.com/vibrantlabsai/ragas)** · tool · github.com · free  
  Listed under RAG evaluation tools in the guide's evaluation stack.  
  Also in: Taking a RAG App to Production: Evals, Guardrails, Cost and Tracing (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1223253343329020) · [notes](../../notes/06-rag/2026-09-12-taking-a-rag-app-to-production-evals-guardrails-cost-and.md))
- [ ] **[Arize Phoenix](https://github.com/Arize-ai/phoenix)** · tool · github.com · free  
  Listed under platforms that combine tracing and evaluation.
- [ ] **[Braintrust](https://www.braintrust.dev)** · tool · braintrust.dev · free  
  Listed under platforms that combine tracing and evaluation.
- [ ] **[DeepEval](https://github.com/confident-ai/deepeval)** · tool · github.com · free  
  Listed under eval frameworks for defining and running evaluations, offline and in CI.
- [ ] **[Guardrails AI](https://github.com/guardrails-ai/guardrails)** · tool · github.com · free  
  Listed under guardrails tools for enforcing quality and safety on every request at runtime.
- [ ] **[NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails)** · tool · github.com · free  
  Listed under guardrails tools for enforcing quality and safety on every request at runtime.
- [ ] **[TruLens](https://www.trulens.org)** · tool · trulens.org · free  
  Listed under RAG evaluation tools in the guide's evaluation stack.
- [ ] **[Weights & Biases Weave](https://github.com/wandb/weave)** · tool · github.com · free  
  Listed under platforms that combine tracing and evaluation.

## Try this

- [ ] Download the free AI evaluation guide (or comment 'eval' on the reel to get it).
- [ ] Make evaluation part of your skill set: learn to measure output quality, evaluate retrieval, and detect hallucinations.
- [ ] Build automated eval pipelines and test agents across edge cases.
- [ ] Monitor AI systems in production, keeping track of quality, latency and cost.
