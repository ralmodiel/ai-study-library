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
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[AGENTS.md](https://agents.md)** · docs · agents.md · free  
  Instruction file format that gives coding agents project context such as the tech stack, skills and MCP servers.  
  Also in: Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../notes/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Updating Skills and AGENTS.md for Astra with OpenAI's Guidance (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098607254622838978) · [notes](../notes/2026-09-12-updating-skills-and-agents-md-for-astra-with-openai-s.md)), How to Prompt GPT-6 Astra in Codex: Simpler Instructions, Leaner AGENTS.md (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098593105276739917) · [notes](../notes/2026-09-12-how-to-prompt-gpt-6-astra-in-codex-simpler-instructions.md)), OpenAI Guide: Rethinking Skills and Prompts for GPT-6 Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098482107983249916) · [notes](../notes/2026-09-12-openai-guide-rethinking-skills-and-prompts-for-gpt-6-astra.md)) and 5 more

## Try this

- [ ] Update Claude Code to 2.1.277 or later and check the AGENTS.md setting in /config.
