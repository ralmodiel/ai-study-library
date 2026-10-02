# Claude Code Tip: Debug Animation Bugs From a Screen Recording

Melvin Vivas · X post · 2026-08-30 · [Open on X](https://x.com/melvindvivas/status/2093915643808735326)

**Topics:** AI Dev Tools & Productivity, Evaluation (Evals) & Testing · **Level:** beginner

## Summary

When a bug involves animation (such as a screen flicker) that a screenshot can't capture, record a video of your manual testing and ask Claude Code to watch it and describe the bug. Claude Code then sent test variants for the creator to check on his phone, narrowed down which code scenario caused the flicker, and fixed it.

## Key points

- Screenshots miss animated or timing bugs like flicker; screen recordings capture them.
- Record your manual QA session until the bug appears, then give the video to Claude Code.
- Ask the agent to watch the video and name the bug.
- Bisect with the agent: it sends test scenarios, you check them on the device (here, Telegram on an iPhone).
- Tell the agent which scenario causes the bug so it can find and fix the responsible code.
- The creator suggests turning this workflow into a reusable agent skill and plans to try it in Codex.

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] When manual QA finds an animated bug, record a video until you capture it.
- [ ] Ask Claude Code to watch the recording and identify the bug.
- [ ] Work with the agent to test scenarios on the device until the cause is isolated, then let it fix the code.
- [ ] Package video-based bug reproduction as a reusable skill for coding agents.
