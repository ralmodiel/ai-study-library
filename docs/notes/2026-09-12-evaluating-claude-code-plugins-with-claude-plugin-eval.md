# Evaluating Claude Code Plugins with `claude plugin eval`

Melvin Vivas · X post · 2026-09-12 · [Open on X](https://x.com/melvindvivas/status/2098588530167697523)

**Topics:** Evaluation (Evals) & Testing, AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Claude Code added a `claude plugin eval` command for measuring how much value a plugin or skill adds. You write test cases, run the plugin against them and score the runs. Then you run the same cases without the plugin to compare. The creator wants to try the same approach with Codex plugins.

## Key points

- `claude plugin eval` benchmarks plugins and skills on your own use cases
- Write test cases that reflect your real tasks
- Run the plugin or skill against them and score each run
- Run each case again without the plugin to get a baseline
- Compare the two sets of scores to see whether the plugin helps or needs more work

## Resources mentioned

- [ ] **[Claude Code \`claude plugin eval\`](https://code.claude.com/docs/en/plugin-evals)** · tool · code.claude.com · free  
  A Claude Code command that runs plugins and skills against test cases, with and without the plugin, and scores the runs.
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Write test cases for your own plugins or skills and run \`claude plugin eval\`
- [ ] Compare the scores with and without the plugin
- [ ] Try a similar with/without benchmark for Codex plugins
- [ ] Build a small with/without benchmark harness for Codex plugins or skills
