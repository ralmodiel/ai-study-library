# LoopsBench: Testing Coding Agents on Long-Horizon Tasks

Melvin Vivas · X post · 2026-08-20 · [Open on X](https://x.com/melvindvivas/status/2090134531621998622)

**Topics:** Evaluation (Evals) & Testing, AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** advanced

## Summary

LoopsBench evaluates coding agents (a model plus its harness) on 112 long-horizon coding tasks built from real pull requests. Claude Opus 4.7 with Claude Code had the highest resolve rate at 25.00%. GPT-5.5 with Codex reached 21.43%. The low scores show long-horizon coding is still hard for agents.

## Key points

- 112 long-horizon coding tasks built from real pull requests.
- The benchmark scores a model and its harness together (for example Opus 4.7 + Claude Code).
- Top resolve rate: Opus 4.7 with Claude Code, 25.00%.
- GPT-5.5 with Codex: 21.43%.
- The paper (10 Aug) frames this as moving from 'harness engineering' to 'loop engineering'.
- The creator hopes the benchmark will be updated with newer models and harnesses.

## Resources mentioned

- [ ] **[LoopsBench Leaderboard](https://loopsbench.ai/)** · website · loopsbench.ai · free  
  Leaderboard of coding agent resolve rates on LoopsBench.
- [ ] **[LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation](https://alphaxiv.org/abs/2608.00267)** · paper · alphaxiv.org · free  
  Paper introducing LoopsBench, a benchmark of 112 long-horizon coding tasks from real pull requests.
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Read the LoopsBench paper and check the full leaderboard.
- [ ] Run several model + harness pairs on a small set of real PR-based tasks and compare their resolve rates.
