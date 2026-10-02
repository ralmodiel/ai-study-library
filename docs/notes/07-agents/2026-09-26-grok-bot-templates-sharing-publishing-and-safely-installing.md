# Grok Bot Templates: Sharing, Publishing and Safely Installing Bots

Melvin Vivas · X video post · 2026-09-26 · 7:27 · 795 views · [Open on X](https://x.com/melvindvivas/status/2103697947640918283)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, AI Safety, Security & Guardrails · **Level:** beginner

## Summary

Melvin Vivas reposts an official walkthrough, presented by "Matt with SpaceX", of the new Templates feature in Grok Bot. A template is a blueprint of a bot ("a recipe, not a meal"). It packages the bot's instructions, relevant memories, skills and first-party plugins, and leaves out secrets, personal memories, custom code and custom MCP servers. The video covers sharing, publishing (public or team only), installing from a link, adding setup instructions for complex bots, and checking templates before you install them.

## Key points

- A template is a blueprint, not a one-to-one clone. The person who installs it gets their own independent copy, which may behave a little differently from the original.
- What's included: instructions, relevant memories and skills, routines (the triggers that set how often the bot runs on its own) and first-party Grok Bot plugins and connectors. What's excluded: secrets, personal or internal memories, custom code or scripts, and custom MCP servers.
- To share: open the bot's Settings and click 'Share as template' (bottom right). The bot packages itself and decides what to keep. The template stays unpublished and private until you publish it.
- Click 'View details' to check exactly which context, memories and integrations are included. Then publish it either to the public or to your team only, and copy the shareable link.
- To install: open the link and click 'Add to GrokBot'. Review the context and integrations, then click 'Add to bot'. The bot installs itself, but first-party plugins have to be reinstalled, and you have to set up any MCP servers or custom code yourself.
- For complex bots that need API keys, MCP servers or custom setups, ask the original bot to write setup steps into the template. Example prompt: 'make sure to include all instructions for setup and configuration in the template. Think through exactly what a user would need to replicate my flow.'
- Security: check a template the way you would check a skill or any software. Read its context and integrations before installing, because a template you install changes what your bot does.

## Resources mentioned

- [ ] **[Grok Bot](https://x.ai/bot)** · tool · x.ai · paid  
  An early-beta AI agent product from the Grok family that runs in its own computer and browser instance and does tasks in your tools.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Organizing Grok Bot Lead Collection in One Google Sheet (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105928546699092061) · [notes](../../notes/07-agents/2026-10-02-organizing-grok-bot-lead-collection-in-one-google-sheet.md)) and 14 more
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../../notes/13-ai-tools/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../../notes/07-agents/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)), Grok Bot Templates: How to Share, Publish, Install and Check Bot Blueprints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093514063955558664) · [notes](../../notes/07-agents/2026-08-29-grok-bot-templates-how-to-share-publish-install-and-check.md)) and 7 more
- [ ] **[pstack](https://github.com/cursor/plugins/tree/main/pstack)** · tool · github.com · free  
  An integration used by the speaker's coding bot. The name comes from the machine-generated transcript and may be misspelled.  
  Also in: Grok Bot Templates: How to Share, Publish, Install and Check Bot Blueprints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093514063955558664) · [notes](../../notes/07-agents/2026-08-29-grok-bot-templates-how-to-share-publish-install-and-check.md))
- [ ] **[GitHub](https://github.com)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Code hosting platform whose CI runs and pull requests the Cursor agents monitor and open.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../../notes/13-ai-tools/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), Cursor Projects: Long-Lived Agents That Manage Fleets of Coding Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098411199478296673) · [notes](../../notes/13-ai-tools/2026-09-11-cursor-projects-long-lived-agents-that-manage-fleets-of.md)) and 9 more
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: GLM 5.3 and GLM 5.3 Flash now in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105952116930163074) · [notes](../../notes/13-ai-tools/2026-10-02-glm-5-3-and-glm-5-3-flash-now-in-cursor.md)), Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../../notes/13-ai-tools/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../../notes/13-ai-tools/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)) and 121 more

## Try this

- [ ] Use 'Share as template' in the bot's Settings, then open 'View details' to check what was packaged before you publish.
- [ ] Choose 'team only' for bots built for internal or company-specific work, and 'public' for general-purpose bots.
- [ ] For complex bots, prompt the bot to put full setup and configuration instructions (API keys, MCP servers, custom code) into the template.
- [ ] Before installing someone else's template, read its context and integrations and only install it if everything is what you expect.
- [ ] After installing a template, reinstall its plugins and set up any MCP servers or custom scripts it needs.
- [ ] Turn one of your own workflow bots (for example, a coding assistant linked to GitHub) into a public template with clear setup instructions so others can copy your flow.
