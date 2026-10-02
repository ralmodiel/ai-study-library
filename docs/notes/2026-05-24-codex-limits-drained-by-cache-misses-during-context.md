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
  Also in: Codex Tip: Ask Codex to Organize Your Recent Chats (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093892897934582258) · [notes](../notes/2026-08-30-codex-tip-ask-codex-to-organize-your-recent-chats.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Why Codex Usage Drains Faster: Prompt Cache Hit Rate (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091047491785687183) · [notes](../notes/2026-08-22-why-codex-usage-drains-faster-prompt-cache-hit-rate.md)), Codex safeguards against accidental destructive actions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089963993372979672) · [notes](../notes/2026-08-19-codex-safeguards-against-accidental-destructive-actions.md)) and 1 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
