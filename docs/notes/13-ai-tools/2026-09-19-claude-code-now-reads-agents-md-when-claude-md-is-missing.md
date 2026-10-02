# Claude Code Now Reads AGENTS.md When CLAUDE.md Is Missing

Melvin Vivas · X post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2101108647174750481)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** beginner

## Summary

Claude Code added support for AGENTS.md in version 2.1.277. If a folder has no CLAUDE.md, Claude checks for AGENTS.md and uses it instead. You can turn this on or off in /config.

## Key points

- Available starting in Claude Code version 2.1.277.
- If a folder has no CLAUDE.md, Claude Code falls back to AGENTS.md.
- Toggle the behavior with /config.
- You can keep one shared AGENTS.md for several coding agents instead of separate files.

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[AGENTS.md](https://agents.md)** · docs · agents.md · free  
  Instruction file format that gives coding agents project context such as the tech stack, skills and MCP servers.  
  Also in: Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../../notes/07-agents/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Updating Skills and AGENTS.md for Astra with OpenAI's Guidance (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098607254622838978) · [notes](../../notes/07-agents/2026-09-12-updating-skills-and-agents-md-for-astra-with-openai-s.md)), How to Prompt GPT-6 Astra in Codex: Simpler Instructions, Leaner AGENTS.md (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098593105276739917) · [notes](../../notes/04-prompting/2026-09-12-how-to-prompt-gpt-6-astra-in-codex-simpler-instructions.md)), OpenAI Guide: Rethinking Skills and Prompts for GPT-6 Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098482107983249916) · [notes](../../notes/04-prompting/2026-09-12-openai-guide-rethinking-skills-and-prompts-for-gpt-6-astra.md)) and 5 more

## Try this

- [ ] Update Claude Code to 2.1.277 or later and check the AGENTS.md setting in /config.
