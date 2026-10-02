# Debug Animated UI Bugs by Having Codex or Claude Code Watch a Screen Recording

Melvin Vivas · X video post · 2026-08-30 · 0:39 · 191 views · [Open on X](https://x.com/melvindvivas/status/2093918268209942907)

**Topics:** AI Dev Tools & Productivity, Evaluation (Evals) & Testing · **Level:** beginner

## Summary

This is a short QA tip for AI coding assistants. Some UI bugs involve animation and won't show up in a screenshot. In those cases, record a video of your manual test until the bug appears, then ask the coding agent to watch it and describe the bug. The creator first showed this with Claude Code. Here he confirms that OpenAI Codex, running a model called "Luna", also found the bug from the video, with less detail but good enough. His point is that you may not need the smartest model for this.

## Key points

- Screenshots can't capture bugs that involve animation or transitions, so a video recording works better.
- Workflow: test the feature manually, record your screen until the bug happens, then give the video to the coding agent and ask it what the bug is.
- Claude Code was shown doing this first, in the quoted post.
- OpenAI Codex also found the issue from the video, though it described it in less detail than Claude Code.
- The creator ran Codex with 'Luna', which suggests a smaller or cheaper model can handle this kind of video-based bug finding.
- Practical lesson: pick the model that fits the task. You don't always need the top model for visual QA triage.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Luna max](https://developers.openai.com/codex/models)** · tool · developers.openai.com · paid  
  The model the creator ran in Codex for this test; the post presents it as not the smartest option.  
  Also in: Watching Codex weekly limits: GPT 5.6 Sol vs Luna max cost (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089258386143769077) · [notes](../../notes/13-ai-tools/2026-08-17-watching-codex-weekly-limits-gpt-5-6-sol-vs-luna-max-cost.md))

## Try this

- [ ] When a bug involves animation, record a video of your manual test until the bug shows up instead of taking a screenshot.
- [ ] Give the recording to Claude Code or Codex and ask it to watch the video and explain the bug.
- [ ] Try a smaller or cheaper model first for video-based bug finding before moving to a stronger one.
