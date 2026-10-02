# Using Jev as a Reranker to Augment RAG Retrieval

Melvin Vivas · X post · 2026-10-01 · [Open on X](https://x.com/melvindvivas/status/2105472378591670420)

**Topics:** Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator shares a quoted post from Rox. Rox used Jev for retrieval and reranking over sales data instead of an LLM-based retrieval step. They report Jev was 20x faster, 10x cheaper and 12% more accurate than GPT-5 Mini when gathering context for their agents.

## Key points

- Rox agents pull context from transcripts, emails, CRM notes, news and documents for each query.
- They benchmarked LLM-based retrieval against a dedicated retrieval/reranking model (Jev).
- Reported result: Jev was 20x faster, 10x cheaper and 12% more accurate than GPT-5 Mini.
- Lesson: a specialized reranker can beat a general LLM on retrieval quality, speed and cost in a RAG pipeline.

## Resources mentioned

- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../../notes/07-agents/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)) and 12 more
- [ ] **[Rox](https://rox.com)** · tool · rox.com · paid  
  An AI sales-agent product that retrieves from transcripts, emails, CRM notes, news and documents.
- [ ] **[GPT-5 Mini](https://developers.openai.com/api/docs/models/gpt-5-mini)** · tool · developers.openai.com · paid  
  An OpenAI model used as the LLM-based retrieval baseline.

## Try this

- [ ] Benchmark LLM-based retrieval against a dedicated reranker in your own RAG pipeline on latency, cost and accuracy.
