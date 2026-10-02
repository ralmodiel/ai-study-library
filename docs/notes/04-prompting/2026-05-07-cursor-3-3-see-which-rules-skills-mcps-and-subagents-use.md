# Cursor 3.3: See Which Rules, Skills, MCPs and Subagents Use Your Context

Melvin Vivas · X video post · 2026-05-07 · 0:25 · 50 views · [Open on X](https://x.com/melvindvivas/status/2052211726377193927)

**Topics:** Prompt & Context Engineering, AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas shares a Cursor 3.3 feature that shows how much of an agent's context window each part of your setup uses. The quoted announcement says you can use these numbers to find context problems and improve your rules, skills, MCP servers and subagents. The lesson is about context engineering: measure what fills the context window before you try to fix it.

## Key points

- Cursor 3.3 adds a breakdown of an agent's context usage, so you can see which parts take up the context window.
- The breakdown covers four parts of an agent setup: rules, skills, MCPs (Model Context Protocol servers and their tools) and subagents.
- Use the numbers to diagnose context problems such as early truncation, degraded answers or a full window, instead of guessing.
- Practical cleanup: trim long or always-on rules, disable MCP servers you don't use (their tool definitions take context), and move large or rarely used work into skills or subagents.
- Check the breakdown again after each change to confirm that context usage actually went down.
- The general lesson applies to any agent tool: context is a limited budget, so audit what you load into it.

## Resources mentioned

- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: GLM 5.3 and GLM 5.3 Flash now in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105952116930163074) · [notes](../../notes/13-ai-tools/2026-10-02-glm-5-3-and-glm-5-3-flash-now-in-cursor.md)), Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../../notes/13-ai-tools/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)) and 121 more
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../../notes/13-ai-tools/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../../notes/07-agents/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)) and 7 more

## Try this

- [ ] Update to Cursor 3.3 or later and open the agent context usage breakdown.
- [ ] Find which rules, skills, MCPs or subagents use the most context.
- [ ] Trim or disable heavy components you don't need, then check the breakdown again.
