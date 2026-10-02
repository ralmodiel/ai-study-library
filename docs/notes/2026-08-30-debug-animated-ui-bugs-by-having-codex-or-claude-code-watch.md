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
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Luna max](https://developers.openai.com/codex/models)** · tool · developers.openai.com · paid  
  The model the creator ran in Codex for this test; the post presents it as not the smartest option.  
  Also in: Watching Codex weekly limits: GPT 5.6 Sol vs Luna max cost (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089258386143769077) · [notes](../notes/2026-08-17-watching-codex-weekly-limits-gpt-5-6-sol-vs-luna-max-cost.md))

## Try this

- [ ] When a bug involves animation, record a video of your manual test until the bug shows up instead of taking a screenshot.
- [ ] Give the recording to Claude Code or Codex and ask it to watch the video and explain the bug.
- [ ] Try a smaller or cheaper model first for video-based bug finding before moving to a stronger one.
