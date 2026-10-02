# Connecting the X (Twitter) MCP Server to Cursor via an OAuth 2.0 App

Melvin Vivas · X video post · 2026-07-01 · 0:14 · 200 views · [Open on X](https://x.com/melvindvivas/status/2072197770031812887)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** beginner

## Summary

In this short post, Melvin Vivas shows that he connected X's official MCP server to the Cursor code editor. He did it in two steps: he created a new OAuth 2.0 app in the X Developer Portal, then pasted in the Cursor configuration from the official X MCP docs page. The post is a quick demo plus a link to that guide, not a full tutorial.

## Key points

- X publishes official MCP servers for the X API and for the X developer docs, documented at docs.x.com/tools/mcp.
- Step 1: create a new OAuth 2.0 app in the X Developer Portal to get credentials.
- Step 2: use the Cursor-specific configuration from the X MCP docs to add the server to Cursor.
- Once connected, Cursor's AI agent can call the X API as a tool (for example, to read or post content). The creator jokes about 'AI replies'.
- The creator says he just followed the official guide, so it is an easy first MCP integration to practice on.

## Resources mentioned

- [ ] **[MCP servers for the X API and X developer docs (X Docs)](https://docs.x.com/tools/mcp)** · docs · docs.x.com · free  
  Official X guide to the MCP servers for the X API and developer docs, including setup configs for clients like Cursor.
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)) and 120 more
- [ ] **[X Developer Portal](https://developer.x.com)** · website · developer.x.com · check price  
  X's portal for creating API apps and getting OAuth credentials.

## Try this

- [ ] Create a new OAuth 2.0 app in the X Developer Portal.
- [ ] Follow the X MCP guide at docs.x.com/tools/mcp and copy the Cursor configuration.
- [ ] Add the X MCP server to Cursor and check that the tools appear.
