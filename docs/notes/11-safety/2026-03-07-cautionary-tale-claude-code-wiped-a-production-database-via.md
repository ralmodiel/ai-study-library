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
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more
- [ ] **[Terraform](https://www.terraform.io)** · tool · terraform.io · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Infrastructure-as-code tool for creating and managing cloud infrastructure.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md))
- [ ] **[DataTalksClub](https://datatalks.club)** · community · datatalks.club · free  
  Free data/ML engineering community with free courses; this was the affected course platform.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Read the DataTalksClub newsletter post-mortem for the full timeline and lessons.
- [ ] Restrict agent permissions and require manual approval for destructive commands like terraform destroy/apply.
- [ ] Keep off-system backups that are protected from deletion.
