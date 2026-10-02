# Agent Harness Efficiency: Scaffolding Beats MCP vs. CLI

Melvin Vivas · X post · 2026-08-21 · [Open on X](https://x.com/melvindvivas/status/2090772830120222890)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin comments on an academic benchmark that ran one software task across 7 agents and 5 models. Where a mature CLI ecosystem exists, agents without built-in MCP were just as reliable and 5-28x cheaper. The biggest savings came from the scaffolding around the model, and the lightweight Pi harness used the fewest tokens.

## Key points

- Benchmark setup: one software task across 7 agents and 5 models.
- In domains with a mature CLI ecosystem, agents without MCP were just as reliable and 5-28x cheaper.
- The biggest efficiency gains came from the harness or scaffolding, not from MCP vs. CLI.
- Pi was the most efficient harness, at 14,660 median input tokens per completed run.
- Lightweight agents like Pi or Tau can cost as little as $0.0141 per run with hosted models.
- Local 27B models can make runs even cheaper.

## Resources mentioned

- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[Tau](https://github.com/huggingface/tau)** · tool · github.com · free  
  Minimalist coding agent written in Python, a port of Pi's design, with native local-model support and extensions that can change its interface.  
  Also in: Herdr Crash Course: A Terminal Multiplexer for Running Many Coding Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092969422709571882) · [notes](../../notes/13-ai-tools/2026-08-27-herdr-crash-course-a-terminal-multiplexer-for-running-many.md))
- [ ] **[arXiv paper: MCP vs. CLI agents benchmark (7 agents, 5 models)](https://arxiv.org/abs/2608.08654)** · paper · arxiv.org · free  
  Academic study comparing agents with and without MCP on a software task, measuring reliability and cost.
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../../notes/13-ai-tools/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../../notes/07-agents/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)) and 7 more

## Try this

- [ ] Use lightweight agent harnesses like Pi to cut token costs.
- [ ] Prefer CLI tools over MCP in domains with a mature CLI ecosystem.
- [ ] Benchmark several agent harnesses on the same task, comparing median input tokens and cost per completed run.
