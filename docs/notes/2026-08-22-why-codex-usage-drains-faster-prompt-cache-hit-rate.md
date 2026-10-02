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
  Also in: Codex Tip: Ask Codex to Organize Your Recent Chats (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093892897934582258) · [notes](../notes/2026-08-30-codex-tip-ask-codex-to-organize-your-recent-chats.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Codex safeguards against accidental destructive actions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089963993372979672) · [notes](../notes/2026-08-19-codex-safeguards-against-accidental-destructive-actions.md)), Run OpenAI Codex with Open-Source and Local Models (OSS Mode) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067193292828348811) · [notes](../notes/2026-06-17-run-openai-codex-with-open-source-and-local-models-oss-mode.md)) and 1 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
