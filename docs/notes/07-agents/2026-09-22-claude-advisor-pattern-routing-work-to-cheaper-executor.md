# Claude Advisor Pattern: Routing Work to Cheaper Executor Models

Melvin Vivas · X post · 2026-09-22 · [Open on X](https://x.com/melvindvivas/status/2102298561413349447)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

This post explains Anthropic's Advisor tool pattern for cutting cost. A smarter, more expensive advisor model guides the work, and cheaper executor models do most of it. The post links to the official Claude Platform documentation.

## Key points

- Advisor model: the smartest and most expensive model, used for guidance.
- Executor models: cheaper models that do most of the work.
- The goal is to send most tokens to cheaper models while keeping strong-model judgment.
- The Advisor tool is documented under Agents and Tools > Tool use on the Claude Platform.

## Resources mentioned

- [ ] **[Claude Advisor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool)** · docs · platform.claude.com · free  
  Official documentation for Anthropic's Advisor tool, where an advisor model guides cheaper executor models.  
  Also in: Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../../notes/07-agents/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md))
- [ ] **[Claude Platform Documentation](https://platform.claude.com/docs/en/agents)** · docs · platform.claude.com · free  
  Anthropic's main documentation for building with Claude.

## Try this

- [ ] Read the Advisor tool documentation.
- [ ] Build an agent where an expensive advisor model guides cheaper executor models, then compare cost and quality against a single-model setup.
