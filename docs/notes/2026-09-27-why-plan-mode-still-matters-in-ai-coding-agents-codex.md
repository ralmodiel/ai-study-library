# Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor)

Melvin Vivas · X video post · 2026-09-27 · 5:54 · 553 views · [Open on X](https://x.com/melvindvivas/status/2104223654678839637)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** beginner

## Summary

Melvin Vivas argues against removing "plan mode" from AI coding tools like Codex, Claude and Cursor, even as models get smarter. In plan mode the agent can't edit code, so it works as a guardrail. You use it to agree on the architecture and implementation details first, and the agent asks clarifying questions you might skip. Planning first also saves tokens: you don't pay for code and tests you later throw away.

## Key points

- Plan mode (or ask mode) is a guardrail: the agent can discuss and plan but cannot touch your code, so a simple question doesn't trigger unwanted edits.
- Use plan mode to map out the architecture and implementation details and check they match what you want before any code is written.
- Example: decide early on SQLite instead of Postgres. Choices like this are cheap to change in a plan and costly to change after the code exists.
- Plan mode asks guiding questions, e.g. whether a new TUI installer should replace the existing setup.sh/PowerShell scripts (scripts become thin wrappers) or sit alongside them. The plan updates from your answers.
- Many requirements only surface while you iterate with the agent, so treat planning as an iterative loop, not a single prompt.
- Skipping the plan on a big feature can waste tokens: the agent builds the scaffolding, writes tests and runs them, then you reject the design and everything has to be redone and retested.
- Pure vibe coding (chat and let it implement) is fine for small things. For large technical features, plan first.
- His closing point: even if models are 'smart enough', you still have to prompt them well, and plan mode gives you a structured way to do that.

## Resources mentioned

- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../notes/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)) and 120 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)), Make App Product Videos with Claude Code and Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103898579136020973) · [notes](../notes/2026-09-27-make-app-product-videos-with-claude-code-and-opus-5-5.md)) and 96 more
- [ ] **[PostgreSQL](https://www.postgresql.org)** · tool · postgresql.org · free  
  Open-source relational database.
- [ ] **[SQLite](https://www.sqlite.org)** · tool · sqlite.org · free  
  A lightweight embedded SQL database stored in a file.  
  Also in: Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../notes/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md)), One-Shotting a Slack Clone with Fable 5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2064807455435956586) · [notes](../notes/2026-06-11-one-shotting-a-slack-clone-with-fable-5.md)), Google Antigravity 2.0: Multi-Agent Desktop App Walkthrough (Subagents, Scheduled Tasks) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056815299677290730) · [notes](../notes/2026-05-19-google-antigravity-2-0-multi-agent-desktop-app-walkthrough.md)), Local Qwen 3.5 Adds an Express API and SQLite to Make an App Full-Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2030343979829801360) · [notes](../notes/2026-03-08-local-qwen-3-5-adds-an-express-api-and-sqlite-to-make-an.md))

## Try this

- [ ] Before a large feature, start in plan or ask mode so the agent can't modify code while you discuss it.
- [ ] Settle architecture choices (e.g. SQLite vs Postgres) in the plan before implementation.
- [ ] Answer the agent's guiding questions and keep refining the plan until it matches what you want.
- [ ] Save vibe coding without a plan for small tasks; plan big technical features first to avoid wasting tokens on rework and retesting.
- [ ] Build a TUI installer that replaces or wraps existing setup.sh and PowerShell install scripts (the example used in the plan-mode demo).
