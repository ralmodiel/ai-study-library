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
  Also in: Creator's Top 3 Closed Models: Fable 5, GPT 5.6 Sol, Grok 4.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093532238583587170) · [notes](../notes/2026-08-29-creator-s-top-3-closed-models-fable-5-gpt-5-6-sol-grok-4-6.md)), Coworker v0.3.1: Telegram Streaming Sync, Built Fast with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093380464056950902) · [notes](../notes/2026-08-29-coworker-v0-3-1-telegram-streaming-sync-built-fast-with.md)), Coworker: Open-Source Grok Bot Clone Built on Pi and CopilotKit (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091565948256109004) · [notes](../notes/2026-08-24-coworker-open-source-grok-bot-clone-built-on-pi-and.md)), GPT 5.6 Sol (medium) in ChatGPT for planning tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091398192718086336) · [notes](../notes/2026-08-23-gpt-5-6-sol-medium-in-chatgpt-for-planning-tasks.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Matt Shumer](https://x.com/mattshumer_)** · person · x.com · free  
  An AI builder whose quoted post reported that GPT-5.6 Sol deleted his production database.  
  Also in: Coding Agent Risk: GPT 5.6 Sol Deleted a Mac User Directory (Melvin Vivas on [X](https://x.com/melvindvivas/status/2075671161363665047) · [notes](../notes/2026-07-11-coding-agent-risk-gpt-5-6-sol-deleted-a-mac-user-directory.md))

## Try this

- [ ] Remove .env files with production database credentials from any coding-agent workspace.
- [ ] Point agents only at dev or staging databases.
