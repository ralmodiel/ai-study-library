# Codex: Orchestrating Big Tasks with a Skill and Subagents

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097149803356717096)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** intermediate

## Summary

The creator reports that for big tasks Codex now reliably uses his 'astra orchestrator' skill, which hands work to subagents. Codex started following the skill properly once he revised the skill's instructions. He is thinking about using stronger models (Sol or Terra) for the subagents while he still has usage limits left.

## Key points

- For large tasks, an orchestrator skill can have the main agent split the work and hand it to subagents.
- If the agent isn't following a skill well, rewrite the skill's instructions. That fixed it for the creator.
- Choose subagent models based on your remaining usage limits: stronger subagents use up quota faster.
- Astra, Sol and Terra are model names the creator mentions. The post doesn't explain them, so check them yourself.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] If an agent doesn't follow a skill well, rewrite the skill's instructions and test again.
- [ ] Pick subagent model strength based on how much usage quota you have left.
