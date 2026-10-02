# Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone

Melvin Vivas · X video post · 2026-09-30 · 0:11 · 861 views · [Open on X](https://x.com/melvindvivas/status/2105149871577792909)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, Industry Trends & Job Market · **Level:** intermediate

## Summary

Melvin Vivas shares a real-world use case of Jev, which the post calls a "decision model." In the quoted post, Jev was given 2,029 real phone calls from an AI receptionist. It had no transcripts or audio, only the structure of each call: turns, tool calls, workflow stages and timing. It made turn-level forecasts quickly enough to run during live calls. The 11-second video's machine transcript is unusable, so this note is based only on the caption.

## Key points

- Jev is described as a 'decision model' used alongside a voice-agent (AI receptionist) system.
- Dataset: 2,029 real phone calls handled by an AI receptionist.
- No transcripts or audio were used. Calls were reduced to structure only: conversation turns, tool calls, workflow stages and timing.
- Jev made 38,012 turn-level forecasts across those calls, about 19 per call.
- Median forecast latency was 118 ms, fast enough to run in real time during live calls.
- Takeaway: agent metadata such as tool-call traces, workflow state and timing can be enough to predict call behavior, and it avoids handling sensitive conversation content.
- The caption is cut off, so the quoted post doesn't show what Jev was predicting (for example, outcomes or escalations) or how accurate it was.

## Resources mentioned

- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../../notes/06-rag/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)) and 12 more

## Try this

- [ ] Log structural traces from a voice or chat agent (turns, tool calls, workflow stage, timing) and train a lightweight model to forecast call outcomes turn by turn without using transcript content.
- [ ] Measure the latency of a real-time per-turn prediction model and aim for a median around 100 ms so it can run during live calls.
