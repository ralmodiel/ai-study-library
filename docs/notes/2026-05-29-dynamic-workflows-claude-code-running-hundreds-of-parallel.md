# Dynamic workflows: Claude Code running hundreds of parallel subagents

Melvin Vivas · X post · 2026-05-29 · [Open on X](https://x.com/melvindvivas/status/2060062931975610677)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Explains Claude Code's dynamic workflows. Claude writes its own orchestration scripts that run tens to hundreds of parallel subagents in one session and check their own work. According to the post, this is how Bun was rewritten in Rust, turning work usually planned in quarters into days.

## Key points

- Claude writes orchestration scripts on the fly instead of following a fixed plan.
- One session can run tens to hundreds of subagents in parallel.
- The workflow includes Claude checking its own work.
- The post says it was used to rewrite Bun in Rust.
- The claim: work usually planned in quarters finishes in days.

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Bun](https://bun.sh)** · tool · bun.sh · free  
  A fast JavaScript runtime and toolkit, cited here as a large codebase rewritten in Rust.

## Try this

- [ ] Try a large migration or refactor (such as porting a module to another language) using Claude Code dynamic workflows with parallel subagents.
