# AI One-Shot Rust Rewrite of TerminalTextEffects: 43x Faster Startup

Melvin Vivas · X post · 2026-08-10 · [Open on X](https://x.com/melvindvivas/status/2086674472455831859)

**Topics:** AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** intermediate

## Summary

An AI model called Fable rewrote the Python library TerminalTextEffects in Rust in one shot, using 11M tokens. Startup time dropped from 87 ms to 2 ms and rendering got 9.6x faster. The result has zero dependencies and ships as a single 3 MB executable. Melvin's takeaway is that AI now makes performance rewrites practical.

## Key points

- The whole TerminalTextEffects library was rewritten from Python to Rust in one shot, using 11M tokens.
- Startup time fell from 87 ms to 2 ms.
- Rendering speed improved 9.6x.
- The rewrite has zero dependencies and is a single 3 MB executable.
- Lesson: coding agents make rewriting libraries for speed much cheaper.

## Resources mentioned

- [ ] **[Claude Code artifact: Rust rewrite of TerminalTextEffects](https://x.com/dhh/status/2086590006898958752)** · other · x.com · free  
  Shared Claude Code artifact showing the AI-generated Rust rewrite.
- [ ] **[TerminalTextEffects](https://github.com/ChrisBuilds/terminaltexteffects)** · repo · github.com · free  
  Python library for visual text effects in the terminal; the original that was rewritten.
- [ ] **[Fable](https://www.anthropic.com/claude/fable)** · tool · anthropic.com · paid  
  Named as what the creator used with Devin for this build; the post gives no details about what it is.  
  Also in: Demo: One-Shotting a Flappy Bird iPhone App with Devin and Fable 5.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100633836480798746) · [notes](../../notes/13-ai-tools/2026-09-18-demo-one-shotting-a-flappy-bird-iphone-app-with-devin-and.md)), Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../../notes/07-agents/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Cognition's SWE-2 Coding Model Now in Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098135543259541847) · [notes](../../notes/13-ai-tools/2026-09-11-cognition-s-swe-2-coding-model-now-in-devin.md)), GPT-6 Astra Access Across Plans vs Fable on Claude Max (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095860011062952272) · [notes](../../notes/16-trends/2026-09-04-gpt-6-astra-access-across-plans-vs-fable-on-claude-max.md)) and 10 more

## Try this

- [ ] Use a coding agent to rewrite a slow Python CLI or library in Rust, and measure startup and runtime speedups.
