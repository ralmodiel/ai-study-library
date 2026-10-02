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
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[GitHub Actions](https://github.com/features/actions)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  GitHub's CI/CD automation platform, used to run the self-healing docs workflow.  
  Also in: 5 Weekend AI Engineering Projects: Cost Routing, Caching, Evals & Observability (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1987763505269220) · [notes](../../notes/14-projects/2026-09-14-5-weekend-ai-engineering-projects-cost-routing-caching.md))

## Try this

- [ ] Use /loop in Claude Code to check failing CI jobs on an interval and fix them automatically
