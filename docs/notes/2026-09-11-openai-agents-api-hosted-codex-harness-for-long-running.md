# OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents

Melvin Vivas · X video post · 2026-09-11 · 2:17 · 617 views · [Open on X](https://x.com/melvindvivas/status/2098352790745838067)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, Prompt & Context Engineering · **Level:** intermediate

## Summary

Melvin Vivas shares OpenAI's launch video for the Agents API, now in public beta. The API gives your own apps a hosted version of the Codex harness, and OpenAI manages orchestration, sessions and context. The demo builds an incident-investigation agent. It connects tools through MCP, adds a runbook as a skill, runs in a sandbox, and uses programmatic tool calling, sub-agents and compaction to produce a root-cause report.

## Key points

- Getting a long-running agent into production is hard even with a capable model. You have to connect tools, track progress, manage context, and secure and maintain the infrastructure.
- The Agents API (public beta) is a hosted Codex harness. OpenAI handles orchestration, long-running sessions and context management.
- Tools such as observability data and recent code changes connect through MCP servers. Team procedures, like an outage runbook, go to the agent as a skill.
- You choose the execution environment. The sandbox can come from OpenAI, a third-party provider or your own infrastructure.
- Programmatic tool calling lets the agent filter large data like logs in code, so fewer tokens go to raw data that wouldn't fit in the context window.
- Multi-agent orchestration splits up big tasks. For example, one sub-agent checks recent changes, another checks telemetry, and a lead agent combines their findings.
- Compaction summarizes earlier work so a single long-running session can keep going without running out of context.
- The output is a shareable report with the likely root cause, supporting evidence and suggested next steps for the on-call team.

## Resources mentioned

- [ ] **[OpenAI Agents API](https://developers.openai.com/api/docs/guides/agents-api/overview)** · tool · developers.openai.com · paid  
  OpenAI's managed API for building and running cloud agents on a hosted Codex harness, with orchestration, sessions and context management built in.  
  Also in: OpenAI DevDay 2026 Recap: Dots, Agents API, Codex Cloud & Marketplace (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105173002740695356) · [notes](../notes/2026-09-30-openai-devday-2026-recap-dots-agents-api-codex-cloud.md)), Creator's favorite OpenAI DevDay announcements (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105021153379275030) · [notes](../notes/2026-09-30-creator-s-favorite-openai-devday-announcements.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), OpenAI DevDay 2026 Replay: Timestamped Guide to the Announcements (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105015301180182833) · [notes](../notes/2026-09-30-openai-devday-2026-replay-timestamped-guide-to-the.md)) and 1 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../notes/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../notes/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../notes/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), Grok Bot Templates: How to Share, Publish, Install and Check Bot Blueprints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093514063955558664) · [notes](../notes/2026-08-29-grok-bot-templates-how-to-share-publish-install-and-check.md)) and 6 more

## Try this

- [ ] Try the Agents API (public beta) to build and run a cloud agent without maintaining your own agent infrastructure.
- [ ] Connect your agent's tools through MCP and package your team's procedures (e.g., runbooks) as skills.
- [ ] Use programmatic tool calling to filter large data like logs in code instead of passing raw data into context.
- [ ] Build an incident-investigation agent. It connects to observability data and recent code changes through MCP, follows an outage runbook skill, uses sub-agents for telemetry and code changes, and outputs a root-cause report with evidence and next steps.
- [ ] Build a 'Software Factory': agents running Codex inside sandboxes to automate software development.
