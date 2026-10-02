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
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Read the LoopsBench paper and check the full leaderboard.
- [ ] Run several model + harness pairs on a small set of real PR-based tasks and compare their resolve rates.
