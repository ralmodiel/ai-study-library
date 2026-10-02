# 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails

Bashiri Smith · Facebook reel · 2026-09-30 · 0:33 · 11,414 views · [Open on Facebook](https://www.facebook.com/reel/2589891101436330)

**Topics:** Evaluation (Evals) & Testing, Retrieval-Augmented Generation (RAG), AI Safety, Security & Guardrails · **Level:** beginner

## Summary

A quick checklist of the five parts of an AI system that engineers should evaluate, and the two metrics to check for each: RAG, agents, models, datasets and guardrails. The creator says evaluation is one of the most important skills for building production AI systems. He points viewers to his free AI Evaluation Guide and his BASWE AI Engineer community.

## Key points

- RAG: check retrieval quality (did it find the right context?) and generation quality (is the answer good and grounded?) as separate things.
- Agents: measure task success (was the goal completed?) and tool accuracy (were the right tools called with the right arguments?).
- Models: measure output accuracy and efficiency (e.g., latency and cost).
- Datasets: check coverage (does the data represent the cases you care about?) and accuracy (are the labels and content correct?).
- Guardrails: track missed violations (harmful content that got through) and false blocks (safe content that was wrongly refused). This is a tradeoff between the two errors.
- The creator calls evaluation a top skill for production AI work and claims it pays top AI engineers over $300K.

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

- [ ] Download the AI Evaluation Guide from the Google Drive link (or comment "eval" on the video to get it).
- [ ] For each AI system you build, pick metrics for all five areas: RAG, agents, models, datasets and guardrails.
- [ ] Optionally, join the BASWE AI Engineer community on Skool.
