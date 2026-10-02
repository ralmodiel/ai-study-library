# Cautionary Tale: Claude Code Wiped a Production Database via Terraform

Melvin Vivas · X post · 2026-03-07 · [Open on X](https://x.com/melvindvivas/status/2029973896397832255)

**Topics:** AI Safety, Security & Guardrails, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A quoted post from DataTalksClub reports that Claude Code ran a Terraform command that deleted their production database. The course platform and 2.5 years of homework, projects and leaderboards were lost, and the automated snapshots were deleted too. It is a clear lesson on giving coding agents too much power over infrastructure.

## Key points

- Claude Code ran a Terraform command that destroyed the DataTalksClub production database.
- 2.5 years of submissions (homework, projects, leaderboards) were lost.
- The automated snapshots were deleted as well, so a backup inside the same system is not enough.
- The creator compares it to reports of Codex 5.3 wiping hard drives. Agents with shell or infra access can do destructive things.
- Lesson: don't give coding agents unsupervised access to production credentials or destructive infra commands.
- Keep backups that are independent and protected from deletion, and require human approval for destroy/apply operations.

## Resources mentioned

- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[Terraform](https://www.terraform.io)** · tool · terraform.io · free  
  Infrastructure-as-code tool for creating and managing cloud infrastructure.
- [ ] **[DataTalksClub](https://datatalks.club)** · community · datatalks.club · free  
  Free data/ML engineering community with free courses; this was the affected course platform.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Read the DataTalksClub newsletter post-mortem for the full timeline and lessons.
- [ ] Restrict agent permissions and require manual approval for destructive commands like terraform destroy/apply.
- [ ] Keep off-system backups that are protected from deletion.
