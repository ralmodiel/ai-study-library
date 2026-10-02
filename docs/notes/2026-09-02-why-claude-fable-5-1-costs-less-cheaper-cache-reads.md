# Why Claude Fable 5.1 Costs Less: Cheaper Cache Reads

Melvin Vivas · X post · 2026-09-02 · [Open on X](https://x.com/melvindvivas/status/2095036304455319651)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

According to Cursor Bench, Claude Fable 5.1 is cheaper to run than Fable 5. The creator links this to a 25% price cut on cache reads. Anthropic says highly agentic workloads, which re-read cached context heavily, can save much more, up to about 45%.

## Key points

- Fable 5.1 cost less than Fable 5 on Cursor Bench.
- The price of cache reads (prompt caching) dropped 25%.
- Anthropic says highly agentic work can save up to about 45%.
- Agent loops re-read large cached contexts, so cache pricing drives a big share of their cost.

## Resources mentioned

- [ ] **[Claude Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)** · tool · anthropic.com · paid  
  An Anthropic Claude model used as the performance reference for Opus 5.5.  
  Also in: Claude Opus 5.5 Released: Fable 5.1-Level Performance at 40% Lower Cost (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102437827778933090) · [notes](../notes/2026-09-23-claude-opus-5-5-released-fable-5-1-level-performance-at-40.md)), GPT-6 Astra Tops Vending-Bench, Beating Claude Fable 5.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097570716757750125) · [notes](../notes/2026-09-09-gpt-6-astra-tops-vending-bench-beating-claude-fable-5-1.md)), Claude Fable 5.1 Runs a 38-Hour Unattended ML Task (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095039454994157985) · [notes](../notes/2026-09-02-claude-fable-5-1-runs-a-38-hour-unattended-ml-task.md)), Claude Fable 5.1 Scores 73.4% on CursorBench 3.2 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095038190881243502) · [notes](../notes/2026-09-02-claude-fable-5-1-scores-73-4-on-cursorbench-3-2.md))
- [ ] **[CursorBench](https://cursor.com/blog/cursorbench)** · other · cursor.com · free  
  Cursor's benchmark for comparing model performance on coding tasks.  
  Also in: Claude Opus 5.5 in Cursor: top of CursorBench at 40% lower cost (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102454194754224588) · [notes](../notes/2026-09-23-claude-opus-5-5-in-cursor-top-of-cursorbench-at-40-lower.md)), Claude Fable 5.1 Scores 73.4% on CursorBench 3.2 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095038190881243502) · [notes](../notes/2026-09-02-claude-fable-5-1-scores-73-4-on-cursorbench-3-2.md))
