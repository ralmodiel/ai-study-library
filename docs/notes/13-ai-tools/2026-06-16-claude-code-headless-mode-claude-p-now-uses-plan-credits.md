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
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] If you automate with \`claude -p\`, keep an eye on how it uses up your plan credits.
