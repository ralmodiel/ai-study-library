# How Cursor cut agent token costs by 7% without losing quality

Melvin Vivas · X post · 2026-09-24 · [Open on X](https://x.com/melvindvivas/status/2102797586398871655)

**Topics:** LLMOps, Deployment & Monitoring, Prompt & Context Engineering, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas quotes Cursor's announcement that it cut token costs by 7% with no drop in agent quality. The savings came from four practical techniques that apply to any LLM agent: tighter prompts, selective tool loading, better caching and compressed file reads.

## Key points

- Cursor cut token costs by 7% with no drop in agent quality.
- Tighter prompts: remove unnecessary instructions and wording.
- Selective tool loading: give the agent only the tool definitions it needs instead of all of them.
- Better caching: reuse cached prompt prefixes to cut input-token cost.
- Compressed file reads: send condensed file contents into context instead of whole raw files.
- Measure agent quality before and after each cost optimization.

## Resources mentioned

- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: GLM 5.3 and GLM 5.3 Flash now in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105952116930163074) · [notes](../../notes/13-ai-tools/2026-10-02-glm-5-3-and-glm-5-3-flash-now-in-cursor.md)), Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../../notes/13-ai-tools/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)) and 121 more

## Try this

- [ ] Audit your agent's prompts, tool definitions, caching and file-reading to find token savings.
- [ ] Re-run quality checks after each optimization to confirm there is no regression.
- [ ] Build a small coding agent, then measure the token savings from selective tool loading and prompt caching against a quality baseline.
