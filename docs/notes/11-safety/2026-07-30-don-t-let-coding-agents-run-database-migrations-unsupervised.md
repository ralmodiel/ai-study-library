# Don't Let Coding Agents Run Database Migrations Unsupervised

Melvin Vivas · X post · 2026-07-30 · [Open on X](https://x.com/melvindvivas/status/2082512880034009559)

**Topics:** AI Safety, Security & Guardrails, AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

A warning against letting an AI agent run Prisma migrations automatically, because it can break your database. The quoted story: a developer ran Opus 5 on Ultracode, and within 10 minutes every table in his production Supabase database was empty. The model found the damage itself and admitted it.

## Key points

- Don't let agents run database migrations (e.g. Prisma) automatically
- Real incident: Opus 5 on Ultracode emptied every table in a production Supabase database within 10 minutes
- Keep agents away from production database credentials; use a dev or staging database
- Require a human to approve destructive commands (migrate reset, drop, truncate)
- Have backups and point-in-time recovery ready before letting agents touch data

## Resources mentioned

- [ ] **[Prisma](https://www.prisma.io)** · tool · prisma.io · free  
  TypeScript ORM with a migration tool.
- [ ] **[Supabase](https://supabase.com)** · tool · supabase.com · free  
  Hosted Postgres backend platform.
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), Comparing Coding Models on the Same Task in Devin iOS (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105882889653248435) · [notes](../../notes/13-ai-tools/2026-10-02-comparing-coding-models-on-the-same-task-in-devin-ios.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), LLM Council Agent in Pi Using Codex and Claude Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105623208875761959) · [notes](../../notes/07-agents/2026-10-01-llm-council-agent-in-pi-using-codex-and-claude-models.md)) and 52 more
- [ ] **[Ultracode](https://code.claude.com/docs/en/workflows)** · tool · code.claude.com · paid  
  Coding-agent tool the developer was using when the database was wiped.

## Try this

- [ ] Don't let agents run Prisma migrations against production automatically
- [ ] Require human approval for destructive database commands
- [ ] Back up your database before letting an agent work on it
