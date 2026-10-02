# Tracking LLM Spend, Tokens & Guardrails with OpenRouter's Activity Explorer

Melvin Vivas · X video post · 2026-06-10 · 2:15 · 28 views · [Open on X](https://x.com/melvindvivas/status/2064806890370900018)

**Topics:** LLMOps, Deployment & Monitoring, AI Safety, Security & Guardrails · **Level:** beginner

## Summary

Melvin Vivas shares OpenRouter's launch video for its new Activity Explorer, a real-time dashboard for AI usage across a team. It covers four tabs: Overview, Trends, Explore and Guardrails. Together they show spend, requests, tokens, cache hit rate, which models and users drive costs, and what security rules are blocking. The main lesson is that you control and optimize LLM costs by first measuring usage in detail.

## Key points

- You can filter every tab by Workspace, User, Model or API key, over any date range you choose.
- The Overview tab shows 4 KPIs (Spend, Requests, Token Volume, Cache Hit Rate). Each has a sparkline and a change versus the previous period.
- Overview also has leaderboards for top users and apps, plus usage by model, OpenRouter spend vs. bring-your-own-provider-key spend, request volume per model, token type breakdown and caching.
- Every card links to a more detailed view, so you can click through when something looks unusual.
- The Trends tab switches between Spend, Requests and Tokens. It shows new models and apps trending in your organization and which users or keys drive spend.
- The Explore tab is for deep dives: 11 metrics × 11 dimensions. You can view a breakdown over time or where two dimensions intersect.
- The Guardrails tab is the enforcement report for rules such as prompt injection defense and sensitive info detection. It shows blocked, redacted and flagged events by type and rule, and links to the specific generations in your logs.
- Main idea: the first step to controlling AI costs and optimizing usage is understanding them.

## Resources mentioned

- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../../notes/03-llm-fundamentals/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../../notes/03-llm-fundamentals/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../../notes/16-trends/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)) and 42 more
- [ ] **[OpenRouter Activity Explorer](https://openrouter.ai/blog/announcements/activity-dashboard/)** · tool · openrouter.ai · check price  
  OpenRouter's real-time usage dashboard with Overview, Trends, Explore and Guardrails tabs for analyzing LLM spend, tokens, caching and security events.
- [ ] **[Fable](https://www.anthropic.com/claude/fable)** · tool · anthropic.com · paid  
  Named as what the creator used with Devin for this build; the post gives no details about what it is.  
  Also in: Demo: One-Shotting a Flappy Bird iPhone App with Devin and Fable 5.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100633836480798746) · [notes](../../notes/13-ai-tools/2026-09-18-demo-one-shotting-a-flappy-bird-iphone-app-with-devin-and.md)), Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../../notes/07-agents/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Cognition's SWE-2 Coding Model Now in Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098135543259541847) · [notes](../../notes/13-ai-tools/2026-09-11-cognition-s-swe-2-coding-model-now-in-devin.md)), GPT-6 Astra Access Across Plans vs Fable on Claude Max (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095860011062952272) · [notes](../../notes/16-trends/2026-09-04-gpt-6-astra-access-across-plans-vs-fable-on-claude-max.md)) and 10 more

## Try this

- [ ] Open the Activity Explorer in your OpenRouter account and check the four Overview KPIs: spend, requests, token volume and cache hit rate.
- [ ] Filter by workspace, user, model or API key to find out what is driving spend.
- [ ] Use the Trends and Explore tabs to look into cost changes over time and across dimensions.
- [ ] If you've set up guardrail rules (prompt injection defense, sensitive info detection), check the Guardrails tab for blocked, redacted and flagged events.
