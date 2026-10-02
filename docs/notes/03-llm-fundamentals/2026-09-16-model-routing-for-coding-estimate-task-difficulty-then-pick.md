# Model Routing for Coding: Estimate Task Difficulty, Then Pick a Model

Melvin Vivas · X post · 2026-09-16 · [Open on X](https://x.com/melvindvivas/status/2100171885745143994)

**Topics:** LLM Fundamentals, AI System Design & Architecture, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas suggests using the newly announced Jev model for coding by first estimating how hard a task is and then sending it to a suitable model. The quoted launch post says Jev was trained with a new method called RLCD and claims it is 20-200x faster. The lesson is the model-routing pattern: cheap or fast models handle easy tasks and stronger models handle hard ones.

## Key points

- Routing pattern: estimate a task's difficulty first, then send it to the model that fits.
- Proposed use of Jev: act as a fast classifier or router in front of coding models.
- The quoted launch post says Jev is trained with a new method called RLCD and claims it is 20-200x faster.
- The launch post is from a self-described co-inventor of ChatGPT who spent 2 years in stealth.
- Routing can lower cost and latency because the strongest model is only used where it's needed.

## Resources mentioned

- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../../notes/06-rag/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)) and 12 more

## Try this

- [ ] Try putting a difficulty-estimation step in front of your coding agent and routing easy and hard tasks to different models.
- [ ] Build a coding-task router that scores how hard a task is and sends it to a cheap, fast model or a frontier model.
