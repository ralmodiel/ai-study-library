# The 8 Layers of Evaluating Production RAG and Agent Systems

Bashiri Smith · Facebook reel · 2026-08-26 · 0:07 · 7,817 views · [Open on Facebook](https://www.facebook.com/reel/893844780188585)

**Topics:** Evaluation (Evals) & Testing, Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Building a RAG app or agent demo is only half of an AI engineer's job. The other half is showing the system actually works, using a repeatable evaluation process that catches improvements, regressions and quiet failures before users do. The video lists the questions a strong AI engineer should be able to answer and eight layers of evaluation, from retrieval evals to online production monitoring.

## Key points

- To get hired, you need to show you can prove a system works, not just build a demo.
- Questions to answer: Is the retriever finding the right info? Is the answer grounded in the retrieved context? Does the agent pick the right tools and arguments? Does the workflow finish the task?
- Test how the system behaves with missing data, conflicting instructions and unexpected inputs.
- Catch regressions after any change to the prompt, model, chunking strategy or agent workflow.
- Weigh accuracy against latency and cost when you evaluate.
- Eight evaluation layers: (1) retrieval evals, (2) response quality and faithfulness, (3) tool-calling and agent trajectory evals, (4) end-to-end task success, (5) deterministic checks and unit tests, (6) LLM-as-a-judge, (7) human evaluation, (8) online monitoring and production feedback.
- Aim for a repeatable evaluation system that tells you whether the app is improving, getting worse or failing in ways users would eventually notice.

## Resources mentioned

- [ ] **[Evaluation Field Guide (baswe.ai engineer accelerator – Ops and Evaluation module)](https://drive.google.com/file/d/1BQwIzI5tWC4Rd6jmloCQMueQnwAYuM1M/view?usp=sharing)** · pdf · drive.google.com · free  
  Bashiri Smith's 41-page practitioner's guide to evaluating AI systems.  
  Also in: 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Evaluation for AI Engineering: Free Full Guide (Resource Share) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1752298882486280) · [notes](../notes/2026-08-28-evaluation-for-ai-engineering-free-full-guide-resource-share.md))

## Try this

- [ ] Comment "EVALS" on the reel to get the creator's full evaluation guide.
- [ ] For your RAG or agent project, set up evals for retrieval, faithfulness, tool calls and agent trajectories, and end-to-end task success.
- [ ] Add deterministic checks and unit tests, LLM-as-a-judge scoring, and human evaluation.
- [ ] Set up regression testing so you can measure the effect of changes to prompts, models, chunking or workflows.
- [ ] Track accuracy, latency and cost together, and add online monitoring with production feedback.
- [ ] Take a basic RAG app or agent and add a repeatable evaluation suite that covers all eight layers, so you can show it works and catch regressions.
