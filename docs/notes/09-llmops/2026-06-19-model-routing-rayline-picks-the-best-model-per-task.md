# Model routing: Rayline picks the best model per task

Melvin Vivas · X post · 2026-06-19 · [Open on X](https://x.com/melvindvivas/status/2067675124497797132)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

This post introduces model routing: sending each task to whichever LLM handles it best. It names Rayline as a router that does this and works with Claude Code.

## Key points

- A model router chooses the best model for each task automatically instead of using one fixed model.
- Rayline offers this kind of routing.
- It reportedly works with Claude Code.

## Resources mentioned

- [ ] **[Rayline (@RaylineAI) on X](https://x.com/RaylineAI)** · tool · x.com · check price  
  A model router that sends each task to the best-suited model.
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] Build a simple router that classifies each task and sends it to the best-suited model.
