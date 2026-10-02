# Use Claude Code /loop to Watch and Auto-Fix Failing GitHub Actions

Melvin Vivas · X post · 2026-08-18 · [Open on X](https://x.com/melvindvivas/status/2089545024090587357)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Shows how to use the /loop command in Claude Code to repeat a task on a schedule. The creator had it check a failing GitHub Actions release job every 5 minutes and fix it when it failed, which it did. It's a handy pattern for watching CI without doing it yourself.

## Key points

- Claude Code's /loop command runs a prompt again and again at a set interval
- Use case: a GitHub Actions release job kept failing
- Set /loop to check every 5 minutes whether the job failed
- Tell Claude Code to fix the failure when it finds one
- It works well for repetitive monitor-and-fix tasks like CI

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[GitHub Actions](https://github.com/features/actions)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  GitHub's CI/CD automation platform, used to run the self-healing docs workflow.  
  Also in: 5 Weekend AI Engineering Projects: Cost Routing, Caching, Evals & Observability (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1987763505269220) · [notes](../notes/2026-09-14-5-weekend-ai-engineering-projects-cost-routing-caching.md))

## Try this

- [ ] Use /loop in Claude Code to check failing CI jobs on an interval and fix them automatically
