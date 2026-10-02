# Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude

Melvin Vivas · X post · 2026-10-01 · [Open on X](https://x.com/melvindvivas/status/2105534628715270332)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP, Prompt & Context Engineering · **Level:** intermediate

## Summary

Melvin Vivas noticed that Codex tends to agree with whatever he says, so he built a 'Devil's Advocate' plugin. It adds a /challenge-ideas skill that pushes back on your ideas, shows other points of view and helps you make better decisions. The plugin is in his SkillsBento plugin marketplace and installs in both the Codex CLI and Claude Code.

## Key points

- AI coding assistants can be sycophantic: they often agree with the user and tell them what they want to hear.
- The Devil's Advocate plugin adds a /challenge-ideas skill that challenges your thinking and offers other perspectives.
- Codex install: `codex plugin marketplace add donvito/skillsbento`, then `codex plugin add devils-advocate@skillsbento`.
- Claude Code install: `/plugin marketplace add donvito/skillsbento`, then `/plugin install devils-advocate@skillsbento`.
- The plugin works in both the desktop app and the CLI.
- Skills and plugin marketplaces let you share reusable agent behaviors between tools.

## Resources mentioned

- [ ] **[skillsbento](https://www.skillsbento.com/)** · website · skillsbento.com · free  
  Melvin Vivas's GitHub plugin and skills marketplace for Codex and Claude Code, which includes the devils-advocate plugin.  
  Also in: SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Agent Skill to Analyze Your X (Twitter) Analytics Export (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099469033800442129) · [notes](../../notes/07-agents/2026-09-14-agent-skill-to-analyze-your-x-twitter-analytics-export.md)), Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../../notes/13-ai-tools/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), skillsbento: Free Open-Source Agent Skills for Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2047760206080454756) · [notes](../../notes/07-agents/2026-04-25-skillsbento-free-open-source-agent-skills-for-claude.md)) and 2 more
- [ ] **[Devil's Advocate (SkillsBento plugin)](https://skillsbento.com/plugins/devils-advocate)** · tool · skillsbento.com · free  
  A plugin whose skill challenges your ideas and shows other perspectives, to counter AI sycophancy.  
  Also in: SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../../notes/13-ai-tools/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)) and 100 more

## Try this

- [ ] Add the donvito/skillsbento marketplace and install devils-advocate@skillsbento in Codex or Claude Code.
- [ ] Use /challenge-ideas to stress-test your decisions instead of accepting answers that just agree with you.
- [ ] Build your own skill or plugin that makes an AI assistant critique your ideas instead of agreeing with them.
