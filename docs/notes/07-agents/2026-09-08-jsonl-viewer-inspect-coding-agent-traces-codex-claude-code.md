# jsonl-viewer: Inspect Coding Agent Traces (Codex, Claude Code, Pi, Hermes)

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097243999874724189)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas shares jsonl-viewer, his tool for viewing and editing .jsonl files. Here he uses it to view coding-agent session traces from Codex, Claude Code, Pi and Hermes. Reading traces shows which models, settings and tool calls an agent actually used.

## Key points

- Coding agents store session traces as .jsonl files. A viewer makes them easy to read.
- Supports traces from Codex, Claude Code, Pi and Hermes.
- The same tool also views and edits .jsonl fine-tuning or training datasets.

## Resources mentioned

- [ ] **[donvito/jsonl-viewer](https://github.com/donvito/jsonl-viewer)** · repo · github.com · free  
  Open-source tool for viewing and editing .jsonl files (fine-tuning datasets) and agent traces from Codex, Claude Code, Pi and Hermes.  
  Also in: jsonl-viewer: Live Traces for Codex Orchestrator and Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099753117504172186) · [notes](../../notes/13-ai-tools/2026-09-15-jsonl-viewer-live-traces-for-codex-orchestrator-and.md)), See live Codex traces with the jsonl-viewer tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099750877653618700) · [notes](../../notes/13-ai-tools/2026-09-15-see-live-codex-traces-with-the-jsonl-viewer-tool.md)), Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../../notes/13-ai-tools/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), Analyzing Codex Traces with jsonl-viewer (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097582799448580323) · [notes](../../notes/13-ai-tools/2026-09-09-analyzing-codex-traces-with-jsonl-viewer.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[Hermes](https://hermes-agent.nousresearch.com/)** · tool · hermes-agent.nousresearch.com · free  
  The AI agent the creator uses to automate making explainer videos. It is probably Nous Research's Hermes Agent, but the post does not say so.  
  Also in: OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../../notes/16-trends/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Coworker: free open-source desktop AI coworker app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103533091117736005) · [notes](../../notes/13-ai-tools/2026-09-26-coworker-free-open-source-desktop-ai-coworker-app.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../../notes/09-llmops/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../../notes/07-agents/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 13 more

## Try this

- [ ] Load your coding agent's .jsonl session traces into jsonl-viewer and inspect them.
