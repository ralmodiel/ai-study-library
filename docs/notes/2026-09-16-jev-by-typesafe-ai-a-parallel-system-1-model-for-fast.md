# Jev by TypeSafe.AI: a parallel "System 1" model for fast structured decisions

Melvin Vivas · X video post · 2026-09-16 · 2:56 · 1,147 views · [Open on X](https://x.com/melvindvivas/status/2100053526022123977)

**Topics:** Industry Trends & Job Market, LLM Fundamentals · **Level:** intermediate

## Summary

Melvin Vivas reshares the launch video for Jev, which TypeSafe.AI calls the first public "System 1" model. In the video, founder Diego Almeida argues that RLHF-trained chat LLMs are tuned to human preferences. He says this makes them overconfident, unreliable and dependent on humans in the loop. TypeSafe's answer is a model trained with a new method, RLCD (reinforcement learning for calibrated decisions), that answers structured questions all at once and returns decisions with confidence scores instead of free text. This is a launch ad, so all speed, cost and "can't hallucinate" claims come from the company and have not been checked independently.

## Key points

- The main criticism: RLHF tunes LLMs to human preferences, which causes mode dropping, overconfidence and poor reliability, so real automation still needs humans in the loop.
- LLMs write one token at a time (autoregression, "the tiny straw"). That suits conversation but is slow for software-to-software decisions.
- TypeSafe's claimed fix has three parts: a new architecture, a new sampler and a new training algorithm, RLCD (Reinforcement Learning for Calibrated Decisions).
- They compare it to transformers replacing RNNs: sequential computation gives way to parallel computation, and many structured questions are answered almost instantly.
- Outputs are decisions with probabilities and confidence, not words. The company says this makes them reliable, self-consistent and type-safe, more like code (its claim, unverified).
- Claimed numbers: about 100x faster and 100x cheaper, input at $42 per billion tokens, output tokens free. The quoted post says 20-200x faster, so the figures don't match.
- Target uses are high-volume background work inside software loops: moderating messages, routing tickets, reviewing documents, with fewer retries, parsers and broken schemas.
- Tagline: "building prod, not god". The product is aimed at automation, not AGI.

## Resources mentioned

- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)) and 10 more
- [ ] **[Diego Almeida](https://x.com/CompleteSkeptic)** · person · x.com · free  
  Founder of TypeSafe.AI, who says he co-created ChatGPT and RLHF at OpenAI.
- [ ] **[Jev (TypeSafe AI)](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** · tool · typesafe.ai · free  
  TypeSafe's new post-training algorithm for calibrated, confidence-scored decisions, pitched as a replacement for RLHF.  
  Also in: jev-dev: A UI Tool to Keep Run History When Experimenting with Jev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105347987098755186) · [notes](../notes/2026-10-01-jev-dev-a-ui-tool-to-keep-run-history-when-experimenting.md)), JevDev: Open-Source UI for Experimenting with Jev by Typesafe.ai (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104951800256397330) · [notes](../notes/2026-09-29-jevdev-open-source-ui-for-experimenting-with-jev-by.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)), Model Routing: Fine-Tune Your Own Router on Your Prompts (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101867588183830864) · [notes](../notes/2026-09-21-model-routing-fine-tune-your-own-router-on-your-prompts.md)) and 6 more
