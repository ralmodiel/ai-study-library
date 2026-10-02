# Codex file deletions: why sandboxing matters for coding agents

Melvin Vivas · X post · 2026-07-16 · [Open on X](https://x.com/melvindvivas/status/2077633401226739873)

**Topics:** AI Safety, Security & Guardrails, AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Shares OpenAI's root-cause finding on reports that GPT-5.6 in Codex unexpectedly deleted files. It happened most often when Full access mode was on and Codex ran without sandboxing protections or auto review. The lesson is to keep sandboxing and review on when coding agents have file access. OpenAI said it will fix the issue.

## Key points

- OpenAI looked into reports of GPT-5.6 deleting files unexpectedly in Codex.
- Most cases happened with Full access mode enabled and no sandboxing protections.
- Running without auto review made it worse.
- Keep the sandbox on and use review or approval modes when agents can write to your filesystem.
- Use version control or backups so you can recover from destructive agent actions.
- OpenAI identified the root cause and said a fix is coming.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../../notes/13-ai-tools/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../../notes/13-ai-tools/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../../notes/13-ai-tools/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../../notes/07-agents/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more

## Try this

- [ ] Avoid running Codex in Full access mode without sandboxing.
- [ ] Keep auto review turned on when an agent can modify files.
