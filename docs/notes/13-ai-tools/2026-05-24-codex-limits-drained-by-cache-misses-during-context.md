# Codex limits drained by cache misses during context compaction

Melvin Vivas · X post · 2026-05-24 · [Open on X](https://x.com/melvindvivas/status/2058384558178136462)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A joke post quoting OpenAI's Tibo (@thsottiaux), who said Codex usage limits drained faster because an optimization lowered cache hit rates when compacting context in long-running sessions. OpenAI rolled the change back and reset everyone's usage limits. The lesson: prompt-cache hit rates directly affect cost and quota in long agent sessions.

## Key points

- Codex users saw usage limits drain faster than normal.
- Root cause: an optimization that hurt cache hit rates when compacting context in long-running sessions.
- OpenAI rolled back the optimization and reset usage limits for all accounts.
- Takeaway: context compaction can break prompt caching, so long agent sessions get more expensive. Watch cache hit rates when you change how context is managed.

## Resources mentioned

- [ ] **[Tibo (@thsottiaux)](https://x.com/thsottiaux)** · person · x.com · free  
  X account of the OpenAI Codex team member who posts Codex updates and usage-limit announcements.  
  Also in: Codex Tip: Ask Codex to Organize Your Recent Chats (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093892897934582258) · [notes](../../notes/13-ai-tools/2026-08-30-codex-tip-ask-codex-to-organize-your-recent-chats.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../../notes/07-agents/2026-08-22-an-x-research-bot-built-with-hermes.md)), Why Codex Usage Drains Faster: Prompt Cache Hit Rate (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091047491785687183) · [notes](../../notes/09-llmops/2026-08-22-why-codex-usage-drains-faster-prompt-cache-hit-rate.md)), Codex safeguards against accidental destructive actions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089963993372979672) · [notes](../../notes/11-safety/2026-08-19-codex-safeguards-against-accidental-destructive-actions.md)) and 1 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
