# Claude Code headless mode (claude -p) now uses plan credits

Melvin Vivas · X post · 2026-06-16 · [Open on X](https://x.com/melvindvivas/status/2066645219567919499)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A short billing update: running Claude Code in non-interactive (print/headless) mode with `claude -p` now draws from your subscription plan credits. It is no longer charged as extra usage. This matters for anyone scripting or automating Claude Code.

## Key points

- `claude -p` runs Claude Code non-interactively (print/headless mode), which is useful for scripts and automation.
- According to the creator, `claude -p` usage now comes out of plan credits rather than additional/extra billing.
- Check your plan's usage limits before running heavy automated `claude -p` jobs.

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more

## Try this

- [ ] If you automate with \`claude -p\`, keep an eye on how it uses up your plan credits.
