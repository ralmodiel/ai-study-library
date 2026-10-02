# Cost-aware agents: big model plans, small subagents execute

Melvin Vivas · X post · 2026-09-09 · [Open on X](https://x.com/melvindvivas/status/2097643447637455309)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI System Design & Architecture · **Level:** intermediate

## Summary

The creator pushes back on 'just use Astra for everything,' because people paying for their own usage face real cost and limit constraints. He points out that OpenAI's own docs recommend using the larger model for planning and coordination and delegating narrower tasks to smaller subagents.

## Key points

- Cost and rate limits matter when you pay for your own usage.
- Recommended pattern: the larger model handles planning and coordination.
- Narrow, well-scoped tasks go to smaller, cheaper subagents.
- OpenAI's subagent configuration docs describe this pattern.

## Resources mentioned

- [ ] **[OpenAI docs: Agent configuration – Subagents](https://developers.openai.com/codex/subagents)** · docs · developers.openai.com · free  
  OpenAI documentation on setting up subagents, which recommends using a larger model to plan and smaller ones for delegated tasks.

## Try this

- [ ] Use a large model for planning and coordination, and hand narrow tasks to smaller subagents to control cost.
