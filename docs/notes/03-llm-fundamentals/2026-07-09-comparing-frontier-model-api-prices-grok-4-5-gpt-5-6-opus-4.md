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
  Also in: Grok 4.5 Works Well as the Model Behind Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082662373400412296) · [notes](../../notes/07-agents/2026-07-30-grok-4-5-works-well-as-the-model-behind-hermes-agent.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../../notes/07-agents/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Agent-Made Video in 10 Minutes: Hermes Agent + Grok 4.5 + Hyperframes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078761137001443365) · [notes](../../notes/07-agents/2026-07-19-agent-made-video-in-10-minutes-hermes-agent-grok-4-5.md)), Personal Assistant Agent on Hermes: Morning Briefings and Inbox Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078760898102219148) · [notes](../../notes/07-agents/2026-07-19-personal-assistant-agent-on-hermes-morning-briefings-and.md)) and 9 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../../notes/13-ai-tools/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../../notes/13-ai-tools/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../../notes/13-ai-tools/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../../notes/07-agents/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), Comparing Coding Models on the Same Task in Devin iOS (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105882889653248435) · [notes](../../notes/13-ai-tools/2026-10-02-comparing-coding-models-on-the-same-task-in-devin-ios.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), LLM Council Agent in Pi Using Codex and Claude Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105623208875761959) · [notes](../../notes/07-agents/2026-10-01-llm-council-agent-in-pi-using-codex-and-claude-models.md)) and 52 more
- [ ] **[Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)** · tool · anthropic.com · paid  
  A frontier model used as the comparison point in the Claude Opus 5 announcement; the post gives no other details about it.  
  Also in: Claude Opus 5.5 in Devin: #1 on FrontierCode 1.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102453435144736968) · [notes](../../notes/13-ai-tools/2026-09-23-claude-opus-5-5-in-devin-1-on-frontiercode-1-1.md)), Creator's Top 3 Closed Models: Fable 5, GPT 5.6 Sol, Grok 4.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093532238583587170) · [notes](../../notes/03-llm-fundamentals/2026-08-29-creator-s-top-3-closed-models-fable-5-gpt-5-6-sol-grok-4-6.md)), Opus 5 vs Fable 5: Cost per Task in Cursor Benchmarks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2080733336423788872) · [notes](../../notes/03-llm-fundamentals/2026-07-25-opus-5-vs-fable-5-cost-per-task-in-cursor-benchmarks.md)), Opus 5 Beats Fable 5 on Cost per Task and Tokens (Melvin Vivas on [X](https://x.com/melvindvivas/status/2080729419396850027) · [notes](../../notes/03-llm-fundamentals/2026-07-25-opus-5-beats-fable-5-on-cost-per-task-and-tokens.md)) and 7 more

## Try this

- [ ] Compare input and output token prices against your workload before you choose a model
