# RepoPrompt 2.0 Agent: Context Builder + Oracle for Code Review and Planning

Melvin Vivas · X video post · 2026-03-01 · 4:35 · 210 views · [Open on X](https://x.com/melvindvivas/status/2028082935371558974)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas shares a demo of RepoPrompt 2.0, an agent with RepoPrompt's MCP tools built in. In the demo, the Review workflow checks uncommitted changes. A "context builder" collects the relevant files and diffs (12 files, about 50k tokens) into one prompt. An "oracle" model then reviews that prompt and writes a plan for the agent to carry out. The video's main lesson is context engineering: give a stuck agent a clean, well-chosen context and a second opinion so it stops going in circles.

## Key points

- RepoPrompt 2.0 has built-in workflows: Plan & Build, Review, Refactor and Investigate.
- Review workflow: the model first confirms the review scope (here, only uncommitted changes), then runs the context builder.
- The context builder searches the repo, picks the relevant files and diffs, and packs them into one context prompt. In the demo that was 12 files and about 50k tokens, sent to the review model.
- The oracle's answer gives prioritized findings (P0/P1) and concrete suggestions. It also gives a compact map of the context it used, so the agent knows which files to open.
- You can mix models. A chat agent (Codex, Claude or Gemini) can call the context builder and oracle, which can run on GPT models: one model to talk to, a stronger one to reason.
- When an agent is deep in a chat or going in circles, asking the oracle for a second opinion with fresh context gives it a bird's-eye view of the problem.
- RepoPrompt runs the agent CLIs already installed on your machine with your existing subscriptions. The creator says this avoids OAuth-token tricks that break terms of service. For Codex it uses the Codex app server.
- Typical loop: review, then ask the oracle for a plan that covers all review recommendations, then tell the agent to 'get to work'.

## Resources mentioned

- [ ] **[RepoPrompt](https://repoprompt.com)** · tool · repoprompt.com · check price  
  Context-engineering app for coding agents. It has MCP tools, a context builder, an oracle, and Review/Plan/Refactor/Investigate workflows.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** · tool · github.com · free  
  Google's open-source terminal AI agent, which the creator says has been discontinued.  
  Also in: Google Retires Gemini CLI, Launches Antigravity CLI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2072791133323948329) · [notes](../../notes/13-ai-tools/2026-07-03-google-retires-gemini-cli-launches-antigravity-cli.md)), Google Shuts Down Gemini CLI and Firebase Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069100263231885595) · [notes](../../notes/16-trends/2026-06-23-google-shuts-down-gemini-cli-and-firebase-studio.md)), Gemini CLI sunset for individual tiers: migrate to Antigravity CLI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067700189163651507) · [notes](../../notes/13-ai-tools/2026-06-19-gemini-cli-sunset-for-individual-tiers-migrate-to.md)), Gemini CLI Adds Subagents with Separate Context Windows (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044753853158248552) · [notes](../../notes/07-agents/2026-04-16-gemini-cli-adds-subagents-with-separate-context-windows.md))
- [ ] **[Codex app server](https://developers.openai.com/codex/app-server)** · tool · developers.openai.com · free  
  Part of OpenAI Codex that lets you build your own UI or client on top of the Codex agent.
- [ ] **[Model Context Protocol (MCP)](https://modelcontextprotocol.io)** · docs · modelcontextprotocol.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open standard for connecting LLM apps and agents to tools and data sources. The official docs explain how it works and how to build servers and clients.  
  Also in: Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../../notes/07-agents/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../../notes/01-roadmap/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), Paste Documentation URLs into Codex Instead of Using MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099439011534368806) · [notes](../../notes/13-ai-tools/2026-09-14-paste-documentation-urls-into-codex-instead-of-using-mcp.md)), OpenAI Agents API: Hosted Codex Harness for Long-Running Cloud Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098352790745838067) · [notes](../../notes/07-agents/2026-09-11-openai-agents-api-hosted-codex-harness-for-long-running.md)) and 7 more

## Try this

- [ ] Try RepoPrompt with the coding agent CLI you already use (Codex, Claude or Gemini).
- [ ] Before trusting a complex AI-generated change, run a Review limited to uncommitted changes.
- [ ] When your agent goes in circles, ask an oracle or stronger model for a plan using a fresh, curated context.
- [ ] Build your own UI or client on top of the Codex app server.
