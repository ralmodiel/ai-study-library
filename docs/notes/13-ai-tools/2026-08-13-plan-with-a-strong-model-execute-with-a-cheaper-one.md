# Plan with a Strong Model, Execute with a Cheaper One

Melvin Vivas · X post · 2026-08-13 · [Open on X](https://x.com/melvindvivas/status/2087924416407810197)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator suggests a split workflow: use Fable for planning and Grok 4.6 for execution. The quoted post says Grok 4.6 followed Fable's plan with only a couple of nudges and finished the same work in 1h 24m. It used 8.6M tokens for about $55, roughly 1/10 the cost of the Fable-only run.

## Key points

- Split coding-agent work into planning (strong model) and execution (cheaper model).
- Grok 4.6 followed Fable's plan with only a couple of nudges.
- Result: 1h 24m, 8.6M tokens, about $55 at per-token pricing.
- That's about 10x cheaper than doing the whole job with Fable.

## Resources mentioned

- [ ] **[Fable](https://www.anthropic.com/claude/fable)** · tool · anthropic.com · paid  
  Named as what the creator used with Devin for this build; the post gives no details about what it is.  
  Also in: Demo: One-Shotting a Flappy Bird iPhone App with Devin and Fable 5.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100633836480798746) · [notes](../../notes/13-ai-tools/2026-09-18-demo-one-shotting-a-flappy-bird-iphone-app-with-devin-and.md)), Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../../notes/07-agents/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Cognition's SWE-2 Coding Model Now in Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098135543259541847) · [notes](../../notes/13-ai-tools/2026-09-11-cognition-s-swe-2-coding-model-now-in-devin.md)), GPT-6 Astra Access Across Plans vs Fable on Claude Max (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095860011062952272) · [notes](../../notes/16-trends/2026-09-04-gpt-6-astra-access-across-plans-vs-fable-on-claude-max.md)) and 10 more
- [ ] **[Grok 4.6](https://x.ai/news/grok-4-6)** · tool · x.ai · paid  
  xAI's latest frontier LLM, announced as an improvement over Grok 4.5 at the same price.  
  Also in: Creator's Top 3 Closed Models: Fable 5, GPT 5.6 Sol, Grok 4.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093532238583587170) · [notes](../../notes/03-llm-fundamentals/2026-08-29-creator-s-top-3-closed-models-fable-5-gpt-5-6-sol-grok-4-6.md)), Hermes (Grok 4.6) vs ChatGPT Work on a text-to-PDF task (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088271030666305728) · [notes](../../notes/07-agents/2026-08-14-hermes-grok-4-6-vs-chatgpt-work-on-a-text-to-pdf-task.md)), Grok 4.6 release: better than Grok 4.5 at the same price (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087569059823145103) · [notes](../../notes/16-trends/2026-08-12-grok-4-6-release-better-than-grok-4-5-at-the-same-price.md))

## Try this

- [ ] Try having a frontier model write the plan and a cheaper model carry it out, and compare cost and quality.
- [ ] Benchmark planner/executor model pairs on one coding task, tracking tokens, time and cost.
