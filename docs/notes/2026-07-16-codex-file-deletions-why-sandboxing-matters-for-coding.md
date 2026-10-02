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
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../notes/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../notes/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../notes/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../notes/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more

## Try this

- [ ] Avoid running Codex in Full access mode without sandboxing.
- [ ] Keep auto review turned on when an agent can modify files.
