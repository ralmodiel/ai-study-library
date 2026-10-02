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
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Claude Max plan](https://claude.com/pricing)** · tool · claude.com · paid  
  Anthropic's highest-tier paid Claude subscription, which gets the Cowork mobile/web beta first.  
  Also in: Claude Cowork Comes to Mobile and Web (Beta Announcement) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089765017449316717) · [notes](../../notes/13-ai-tools/2026-08-18-claude-cowork-comes-to-mobile-and-web-beta-announcement.md))
- [ ] **[HERMES.md](https://hermes-agent.nousresearch.com/docs/user-guide/features/context-files)** · other · hermes-agent.nousresearch.com · free  
  A convention in AI agent projects for a file that specifies the system prompt.

## Try this

- [ ] Monitor usage and billing when running Claude Code on paid plans.
