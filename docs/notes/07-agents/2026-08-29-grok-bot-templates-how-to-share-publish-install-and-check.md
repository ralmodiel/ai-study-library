# Grok Bot Templates: How to Share, Publish, Install and Check Bot Blueprints

Melvin Vivas · X video post · 2026-08-29 · 7:27 · 574 views · [Open on X](https://x.com/melvindvivas/status/2093514063955558664)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, AI Safety, Security & Guardrails · **Level:** beginner

## Summary

This walkthrough explains Templates in Grok Bot. A template is a blueprint that another user's bot uses to rebuild its own copy of your bot. It is not an exact clone. The video covers sharing a bot as a template, publishing it to the public or to your team only, and installing one from a link. It also covers setup for complex templates that need MCP servers or API keys, and why you should check a template before installing it.

## Key points

- A template is like a recipe, not a shared meal. The receiving bot builds its own independent version, which may come out slightly different from the original.
- Templates include instructions, relevant memories, skills and first-party plugins or connectors. They leave out secrets, personal or private memories, custom code and scripts, and custom MCP servers.
- To share, open the bot's settings and click 'Share as template'. Nothing goes live at this step. The bot packages itself and decides on its own what to keep, leaving out personal or internal memories.
- Click 'View details' to see what the template contains: context, memories and integrations. Then publish it to the public or to your team only, and copy the link it gives you.
- To install, open the link and click 'Add to GrokBot'. Review the context and integrations, then click 'Add to bot'. The new bot sets itself up, but you may need to reinstall plugins.
- Non-standard parts such as MCP servers, scripts and custom code must be rebuilt or carried over by hand.
- For complex templates, ask the original bot to include all setup and configuration instructions, so it thinks through what a user needs to copy your workflow. This matters most for bots that need API keys or MCP servers.
- Check templates the way you would check skills or software: read the context and integrations before installing, because you are adding them to your bot.

## Resources mentioned

- [ ] **[Grok Bot](https://x.ai/bot)** · tool · x.ai · paid  
  An early-beta AI agent product from the Grok family that runs in its own computer and browser instance and does tasks in your tools.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Organizing Grok Bot Lead Collection in One Google Sheet (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105928546699092061) · [notes](../../notes/07-agents/2026-10-02-organizing-grok-bot-lead-collection-in-one-google-sheet.md)) and 14 more
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../../notes/13-ai-tools/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../../notes/07-agents/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)) and 7 more
- [ ] **[pstack](https://github.com/cursor/plugins/tree/main/pstack)** · tool · github.com · free  
  An integration used by the speaker's coding bot. The name comes from the machine-generated transcript and may be misspelled.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md))
- [ ] **[GitHub](https://github.com)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Code hosting platform whose CI runs and pull requests the Cursor agents monitor and open.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../../notes/13-ai-tools/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)) and 9 more
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: GLM 5.3 and GLM 5.3 Flash now in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105952116930163074) · [notes](../../notes/13-ai-tools/2026-10-02-glm-5-3-and-glm-5-3-flash-now-in-cursor.md)), Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../../notes/13-ai-tools/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)) and 121 more

## Try this

- [ ] Use 'Share as template' in your bot's settings, then click 'View details' to see what it included before you publish.
- [ ] Choose 'team only' for bots built for internal or company-specific work, and 'public' only for bots that work for anyone.
- [ ] For complex bots, ask the bot to 'include all instructions for setup and configuration in the template' and to think through what a user would need to copy your workflow.
- [ ] After installing a template, reinstall its plugins and set up any MCP servers, scripts or API keys by hand.
- [ ] Before installing someone else's template, read its context and integrations and check them as carefully as you would any software.
- [ ] Turn one of your own workflow bots (for example a coding assistant using GitHub and Cursor) into a template that installs itself, with clear setup instructions for MCP servers and API keys.
