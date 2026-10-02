# Cost-Aware Model Routing in Codex: Default to Luna, Escalate to Sol

Melvin Vivas · X post · 2026-08-18 · [Open on X](https://x.com/melvindvivas/status/2089577961393631245)

**Topics:** LLM Fundamentals, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Compares two GPT-5.6 variants in Codex: Luna scores about 52 on intelligence at about $0.05 per task, and Sol scores about 61 at about $1.30 per task. Sol is 9 points smarter but costs 25x more. So the creator uses the cheap model by default and switches to the expensive one only when stuck.

## Key points

- GPT-5.6 Luna: ~52 intelligence score, ~$0.05 per task
- GPT-5.6 Sol: ~61 intelligence score, ~$1.30 per task
- Sol gains ~9 points of intelligence for ~25x the cost
- Strategy: use the cheaper model for most coding tasks
- Switch to the stronger model only when the cheap one gets stuck
- Compare cost per task against capability before picking a default model

## Resources mentioned

- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../../notes/13-ai-tools/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../../notes/13-ai-tools/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../../notes/13-ai-tools/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../../notes/07-agents/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more
- [ ] **[GPT 5.6 Sol](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/)** · tool · openai.com · paid  
  A GPT-family model available through an API, whose API and credit pricing was cut by over 20% for three months.  
  Also in: Creator's Top 3 Closed Models: Fable 5, GPT 5.6 Sol, Grok 4.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093532238583587170) · [notes](../../notes/03-llm-fundamentals/2026-08-29-creator-s-top-3-closed-models-fable-5-gpt-5-6-sol-grok-4-6.md)), Coworker v0.3.1: Telegram Streaming Sync, Built Fast with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093380464056950902) · [notes](../../notes/13-ai-tools/2026-08-29-coworker-v0-3-1-telegram-streaming-sync-built-fast-with.md)), Coworker: Open-Source Grok Bot Clone Built on Pi and CopilotKit (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091565948256109004) · [notes](../../notes/07-agents/2026-08-24-coworker-open-source-grok-bot-clone-built-on-pi-and.md)), GPT 5.6 Sol (medium) in ChatGPT for planning tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091398192718086336) · [notes](../../notes/03-llm-fundamentals/2026-08-23-gpt-5-6-sol-medium-in-chatgpt-for-planning-tasks.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Default to GPT-5.6 Luna for most Codex tasks
- [ ] Switch to GPT-5.6 Sol only when Luna gets stuck
