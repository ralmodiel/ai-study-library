# Codex Losing Task Context After Compaction

Melvin Vivas · X post · 2026-09-11 · [Open on X](https://x.com/melvindvivas/status/2098373293158138177)

**Topics:** Prompt & Context Engineering, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas reports that Codex forgot what he had asked it to do after context compaction. He wonders whether an experimental context-management setting is the cause, which is a reminder that compaction can drop task instructions.

## Key points

- Context compaction in coding agents can drop the original task instructions.
- Suspected cause: the experimental context-management config `[features.context_management] experimental_mode = true`.
- If an agent loses track after compaction, try turning experimental context settings off or restating the task.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
