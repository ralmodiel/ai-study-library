# Comparing Frontier Model API Prices: Grok 4.5, GPT 5.6, Opus 4.8, Fable 5

Melvin Vivas · X post · 2026-07-09 · [Open on X](https://x.com/melvindvivas/status/2075246588851827029)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** beginner

## Summary

Lists API prices per million tokens for four frontier models. Use it to compare cost when you choose a model, and notice that output tokens cost much more than input tokens.

## Key points

- Grok 4.5: $2 input / $6 output per million tokens (the cheapest of the four)
- GPT 5.6: $5 input / $30 output
- Claude Opus 4.8: $5 input / $25 output
- Fable 5: $10 input / $50 output (the most expensive)
- Output tokens cost 3-6x more than input tokens, so output-heavy workloads such as agents and code generation change the cost a lot

## Resources mentioned

- [ ] **[Grok 4.5](https://x.ai/news/grok-4-5)** · tool · x.ai · paid  
  An LLM said to be trained in partnership with SpaceXAI, pitched as a general model beyond software engineering.  
  Also in: Grok 4.5 Works Well as the Model Behind Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082662373400412296) · [notes](../notes/2026-07-30-grok-4-5-works-well-as-the-model-behind-hermes-agent.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Agent-Made Video in 10 Minutes: Hermes Agent + Grok 4.5 + Hyperframes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078761137001443365) · [notes](../notes/2026-07-19-agent-made-video-in-10-minutes-hermes-agent-grok-4-5.md)), Personal Assistant Agent on Hermes: Morning Briefings and Inbox Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078760898102219148) · [notes](../notes/2026-07-19-personal-assistant-agent-on-hermes-morning-briefings-and.md)) and 9 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../notes/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../notes/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../notes/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../notes/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../notes/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), "The Last Manual Programmer": A Song About Coding With AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104630605380219268) · [notes](../notes/2026-09-29-the-last-manual-programmer-a-song-about-coding-with-ai.md)) and 48 more
- [ ] **[Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)** · tool · anthropic.com · paid  
  A frontier model used as the comparison point in the Claude Opus 5 announcement; the post gives no other details about it.  
  Also in: Claude Opus 5.5 in Devin: #1 on FrontierCode 1.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102453435144736968) · [notes](../notes/2026-09-23-claude-opus-5-5-in-devin-1-on-frontiercode-1-1.md)), Creator's Top 3 Closed Models: Fable 5, GPT 5.6 Sol, Grok 4.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093532238583587170) · [notes](../notes/2026-08-29-creator-s-top-3-closed-models-fable-5-gpt-5-6-sol-grok-4-6.md)), Opus 5 vs Fable 5: Cost per Task in Cursor Benchmarks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2080733336423788872) · [notes](../notes/2026-07-25-opus-5-vs-fable-5-cost-per-task-in-cursor-benchmarks.md)), Opus 5 Beats Fable 5 on Cost per Task and Tokens (Melvin Vivas on [X](https://x.com/melvindvivas/status/2080729419396850027) · [notes](../notes/2026-07-25-opus-5-beats-fable-5-on-cost-per-task-and-tokens.md)) and 7 more

## Try this

- [ ] Compare input and output token prices against your workload before you choose a model
