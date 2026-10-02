# Claude Code Billing Gotcha: 'HERMES.md' String in Git Commits

Melvin Vivas · X post · 2026-04-27 · [Open on X](https://x.com/melvindvivas/status/2048655308483080416)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator shares a report that a Claude Max 20x subscriber ($200/month) lost about $200 in one day because the string "HERMES.md" appeared in his git commits and Claude Code handled it unexpectedly. The quoted post is cut off, so the exact cause isn't explained; the claim is unverified and the creator calls it shady behavior by Anthropic. The lesson is to watch usage and billing closely when running AI coding agents on paid plans.

## Key points

- Reported incident: a Claude Max 20x user ($200/month) lost about $200 in a day after "HERMES.md" appeared in his git commits.
- HERMES.md is a convention in AI agent projects: a file that specifies the system prompt.
- The quoted post is cut off, so the exact mechanism isn't explained; treat it as an unverified claim.
- Check your usage dashboards and billing when coding agents read your repo history.
- Unexpected strings in repo content can change how an agent tool behaves or bills.

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Claude Max plan](https://claude.com/pricing)** · tool · claude.com · paid  
  Anthropic's highest-tier paid Claude subscription, which gets the Cowork mobile/web beta first.  
  Also in: Claude Cowork Comes to Mobile and Web (Beta Announcement) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089765017449316717) · [notes](../notes/2026-08-18-claude-cowork-comes-to-mobile-and-web-beta-announcement.md))
- [ ] **[HERMES.md](https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files)** · other · hermes-agent.nousresearch.com · free  
  A convention in AI agent projects for a file that specifies the system prompt.

## Try this

- [ ] Monitor usage and billing when running Claude Code on paid plans.
