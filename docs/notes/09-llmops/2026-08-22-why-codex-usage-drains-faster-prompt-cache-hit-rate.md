# Why Codex Usage Drains Faster: Prompt Cache Hit Rate

Melvin Vivas · X post · 2026-08-22 · [Open on X](https://x.com/melvindvivas/status/2091047491785687183)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin shares an OpenAI Codex update from Tibo (@thsottiaux): some users drained their Codex rate limits faster because the prompt-cache hit rate dropped that week. The lesson is that cache hits count heavily toward how much usage a coding agent burns.

## Key points

- OpenAI saw a lower cache hit rate for some Codex users that week than in the stable weeks before.
- A lower cache hit rate can make usage limits drain faster.
- Hitting the prompt cache consistently is a big part of keeping agent usage cheap.
- OpenAI says it is working on a fix.

## Resources mentioned

- [ ] **[Tibo (@thsottiaux)](https://x.com/thsottiaux)** · person · x.com · free  
  X account of the OpenAI Codex team member who posts Codex updates and usage-limit announcements.  
  Also in: Codex Tip: Ask Codex to Organize Your Recent Chats (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093892897934582258) · [notes](../../notes/13-ai-tools/2026-08-30-codex-tip-ask-codex-to-organize-your-recent-chats.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../../notes/07-agents/2026-08-22-an-x-research-bot-built-with-hermes.md)), Codex safeguards against accidental destructive actions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089963993372979672) · [notes](../../notes/11-safety/2026-08-19-codex-safeguards-against-accidental-destructive-actions.md)), Run OpenAI Codex with Open-Source and Local Models (OSS Mode) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067193292828348811) · [notes](../../notes/13-ai-tools/2026-06-17-run-openai-codex-with-open-source-and-local-models-oss-mode.md)) and 1 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
