# Conductor: run Claude Code, Codex, Cursor and OpenCode on one project

Melvin Vivas · X post · 2026-06-24 · [Open on X](https://x.com/melvindvivas/status/2069730172534927366)

**Topics:** AI Dev Tools & Productivity · **Level:** intermediate

## Summary

A first look at Conductor, a tool for using several coding-agent harnesses on the same project. It supports Claude Code, Codex, Cursor and OpenCode. Instead of working in your local repo folder, it appears to create a workspace that is a copy of the project.

## Key points

- Conductor lets you switch between harnesses on one project: Claude Code, Codex, Cursor and OpenCode.
- It works in a separate workspace copy of your project, not directly in your local repo folder.
- Handy for comparing or mixing coding agents on the same codebase.

## Resources mentioned

- [ ] **[Conductor](https://x.com/conductor_build)** · tool · x.com · check price  
  Desktop app for running multiple coding agents (Claude Code, Codex, Cursor) in parallel in isolated Git worktrees or in the cloud.  
  Also in: Conductor detects Claude Code/Codex and merges PRs from the app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069698166874939393) · [notes](../notes/2026-06-24-conductor-detects-claude-code-codex-and-merges-prs-from-the.md)), Conductor Walkthrough: Running Parallel Coding Agents in Isolated Git Worktrees (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069521472742404424) · [notes](../notes/2026-06-23-conductor-walkthrough-running-parallel-coding-agents-in.md))
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)) and 120 more
- [ ] **[OpenCode](https://x.com/opencode)** · tool · x.com · free  
  Open-source terminal coding agent that can be configured with different model providers, including open models.  
  Also in: T3Code: a better interface for terminal coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099695364345639176) · [notes](../notes/2026-09-15-t3code-a-better-interface-for-terminal-coding-agents.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Trying OpenCode Go After Upgrading OpenCode (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098595863111332145) · [notes](../notes/2026-09-12-trying-opencode-go-after-upgrading-opencode.md)), Orchestrator + Subagents in opencode with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098410568680177970) · [notes](../notes/2026-09-11-orchestrator-subagents-in-opencode-with-open-models.md)) and 10 more

## Try this

- [ ] Try Conductor to run different coding harnesses on the same project.
