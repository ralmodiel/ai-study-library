# MCP 2026-07-28: The Protocol Is Now Stateless

Melvin Vivas · X post · 2026-07-30 · [Open on X](https://x.com/melvindvivas/status/2082756427068911905)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator shares the announcement of MCP spec version 2026-07-28, described as the largest update since the protocol launched. MCP is now stateless, which makes remote MCP servers easier to deploy and scale. The linked Claude blog post explains how Claude supports the new version.

## Key points

- MCP spec version 2026-07-28 is the largest update since launch
- MCP is now stateless, so servers don't need to keep session state
- Stateless design makes remote MCP servers easier to deploy and scale horizontally
- Claude supports the new spec (see the Claude blog post)

## Resources mentioned

- [ ] **[Bringing MCP 2026-07-28 to Claude (Claude blog)](https://claude.com/blog/bringing-mcp-2026-07-28-to-claude)** · article · claude.com · free  
  Anthropic blog post on the stateless MCP 2026-07-28 spec update and how Claude supports it.
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../notes/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../notes/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../notes/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../notes/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)) and 6 more

## Try this

- [ ] Read the MCP 2026-07-28 changes and update your remote MCP servers to the stateless model
- [ ] Deploy a stateless remote MCP server behind a load balancer
