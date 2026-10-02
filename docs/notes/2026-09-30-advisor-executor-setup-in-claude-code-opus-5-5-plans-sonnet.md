# Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs

Melvin Vivas · X post · 2026-09-30 · [Open on X](https://x.com/melvindvivas/status/2105168803428802821)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator sets up Claude Code with Opus 5.5 as the 'Advisor' (planning and reasoning) and Sonnet 5.5 as the 'Executor' (doing the work). Splitting the work this way gets strong reasoning from the large model and speed and lower cost from the smaller one.

## Key points

- Use Opus 5.5 as the Advisor model in Claude Code for planning and hard reasoning.
- Use Sonnet 5.5 as the Executor model to carry out the plan.
- Pairing a strong planner with a fast executor balances quality, speed and cost.
- This is a general multi-model agent pattern (planner/executor).

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)), Make App Product Videos with Claude Code and Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103898579136020973) · [notes](../notes/2026-09-27-make-app-product-videos-with-claude-code-and-opus-5-5.md)) and 96 more
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../notes/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), "The Last Manual Programmer": A Song About Coding With AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104630605380219268) · [notes](../notes/2026-09-29-the-last-manual-programmer-a-song-about-coding-with-ai.md)), Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../notes/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)) and 48 more
- [ ] **[Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)** · tool · anthropic.com · check price  
  Anthropic's newly released mid-tier Claude model, reported to be strong at agentic coding.  
  Also in: GPT-6.1 and Sonnet 5.5 Released the Same Week (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105320549127954629) · [notes](../notes/2026-09-30-gpt-6-1-and-sonnet-5-5-released-the-same-week.md)), Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../notes/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Guide: Building with Claude Sonnet 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104941533372010918) · [notes](../notes/2026-09-29-guide-building-with-claude-sonnet-5-5.md)), Claude Sonnet 5.5 release beats Opus 5.5 on Terminal-Bench (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104638616677085236) · [notes](../notes/2026-09-29-claude-sonnet-5-5-release-beats-opus-5-5-on-terminal-bench.md))

## Try this

- [ ] In Claude Code, set Opus 5.5 as the Advisor and Sonnet 5.5 as the Executor.
