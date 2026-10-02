# Idea: A Benchmark for Codex Usage-Limit Consumption

Melvin Vivas · X post · 2026-08-24 · [Open on X](https://x.com/melvindvivas/status/2091750806940999945)

**Topics:** Evaluation (Evals) & Testing, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Proposes a benchmark that gives Codex the exact same tasks over time and measures how much of the usage limit each run uses. The goal is to catch regressions in cost with data instead of guesses.

## Key points

- Run a fixed set of identical tasks through Codex again and again.
- Measure how much of the usage limit each run consumes.
- Comparing results over time shows when token or usage cost gets worse.
- This applies regression-testing ideas to cost: rely on data, not vibes.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Build a usage and cost regression benchmark: run a fixed task suite through a coding agent on a schedule and track how much of the usage limit or how many tokens each task consumes.
