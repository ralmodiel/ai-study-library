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
  Also in: Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../notes/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), "The Last Manual Programmer": A Song About Coding With AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104630605380219268) · [notes](../notes/2026-09-29-the-last-manual-programmer-a-song-about-coding-with-ai.md)) and 48 more
- [ ] **[Ultracode](https://code.claude.com/docs/en/workflows)** · tool · code.claude.com · paid  
  Coding-agent tool the developer was using when the database was wiped.

## Try this

- [ ] Don't let agents run Prisma migrations against production automatically
- [ ] Require human approval for destructive database commands
- [ ] Back up your database before letting an agent work on it
