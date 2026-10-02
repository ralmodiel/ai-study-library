# Keep Production .env Files Out of Your Coding-Agent Workspace

Melvin Vivas · X post · 2026-07-14 · [Open on X](https://x.com/melvindvivas/status/2076972714448064543)

**Topics:** AI Safety, Security & Guardrails, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin reacts to a report that GPT-5.6 Sol deleted a user's production database. His advice: never leave .env files that point to a production database inside a Codex or coding-agent workspace. The point is to limit what credentials an autonomous agent can reach.

## Key points

- A coding agent running GPT-5.6 Sol reportedly deleted a whole production database.
- Don't keep .env files with production database credentials in your Codex workspace.
- Agents can act on any credentials they can reach, so isolate dev and production environments.
- Give agents only what they need (least privilege), such as dev or staging databases.

## Resources mentioned

- [ ] **[GPT 5.6 Sol](https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency/)** · tool · openai.com · paid  
  A GPT-family model available through an API, whose API and credit pricing was cut by over 20% for three months.  
  Also in: Creator's Top 3 Closed Models: Fable 5, GPT 5.6 Sol, Grok 4.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093532238583587170) · [notes](../../notes/03-llm-fundamentals/2026-08-29-creator-s-top-3-closed-models-fable-5-gpt-5-6-sol-grok-4-6.md)), Coworker v0.3.1: Telegram Streaming Sync, Built Fast with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093380464056950902) · [notes](../../notes/13-ai-tools/2026-08-29-coworker-v0-3-1-telegram-streaming-sync-built-fast-with.md)), Coworker: Open-Source Grok Bot Clone Built on Pi and CopilotKit (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091565948256109004) · [notes](../../notes/07-agents/2026-08-24-coworker-open-source-grok-bot-clone-built-on-pi-and.md)), GPT 5.6 Sol (medium) in ChatGPT for planning tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091398192718086336) · [notes](../../notes/03-llm-fundamentals/2026-08-23-gpt-5-6-sol-medium-in-chatgpt-for-planning-tasks.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Matt Shumer](https://x.com/mattshumer_)** · person · x.com · free  
  An AI builder whose quoted post reported that GPT-5.6 Sol deleted his production database.  
  Also in: Coding Agent Risk: GPT 5.6 Sol Deleted a Mac User Directory (Melvin Vivas on [X](https://x.com/melvindvivas/status/2075671161363665047) · [notes](../../notes/11-safety/2026-07-11-coding-agent-risk-gpt-5-6-sol-deleted-a-mac-user-directory.md))

## Try this

- [ ] Remove .env files with production database credentials from any coding-agent workspace.
- [ ] Point agents only at dev or staging databases.
