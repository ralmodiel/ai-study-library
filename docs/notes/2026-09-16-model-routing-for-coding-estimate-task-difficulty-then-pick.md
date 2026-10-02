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
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)) and 10 more

## Try this

- [ ] Try putting a difficulty-estimation step in front of your coding agent and routing easy and hard tasks to different models.
- [ ] Build a coding-task router that scores how hard a task is and sends it to a cheap, fast model or a frontier model.
