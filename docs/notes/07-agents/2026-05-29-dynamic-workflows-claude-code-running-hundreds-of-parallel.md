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
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Bun](https://bun.sh)** · tool · bun.sh · free  
  A fast JavaScript runtime and toolkit, cited here as a large codebase rewritten in Rust.

## Try this

- [ ] Try a large migration or refactor (such as porting a module to another language) using Claude Code dynamic workflows with parallel subagents.
