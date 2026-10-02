# How Anthropic's data team automated 95% of analytics queries with Claude

Melvin Vivas · X post · 2026-06-04 · [Open on X](https://x.com/melvindvivas/status/2062488741835342106)

**Topics:** Evaluation (Evals) & Testing, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator shares Anthropic's announcement that its data team automated 95% of business analytics queries with Claude, calling it the way to automate. The linked blog post explains how they used evals, ablations and online validation to make the automation reliable.

## Key points

- Anthropic's data team reports that Claude automates 95% of its business analytics queries.
- The blog post covers their evaluation approach (evals) for the analytics agent.
- They used ablations to work out which parts of the system add value.
- Online validation was used to check quality in production after offline evals.
- Pattern: pair agent automation with offline evals plus online monitoring before trusting it.

## Resources mentioned

- [ ] **[Anthropic blog post: automating business analytics queries with Claude](https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude)** · article · claude.com · free  
  How Anthropic's data team automated 95% of analytics queries with Claude, including evals, ablations and online validation.
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../notes/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), "The Last Manual Programmer": A Song About Coding With AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104630605380219268) · [notes](../notes/2026-09-29-the-last-manual-programmer-a-song-about-coding-with-ai.md)) and 48 more
- [ ] **[ClaudeDevs (@ClaudeDevs) on X](https://x.com/ClaudeDevs)** · person · x.com · free  
  Anthropic's developer account on X, which shared the analytics automation post.  
  Also in: Claude Code Agents Can Now Talk to Each Other Natively (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085947833287659680) · [notes](../notes/2026-08-08-claude-code-agents-can-now-talk-to-each-other-natively.md)), Follow @ClaudeDevs for Claude Developer Updates (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044972495183511883) · [notes](../notes/2026-04-17-follow-claudedevs-for-claude-developer-updates.md))

## Try this

- [ ] Read Anthropic's blog post on how they evaluate and validate their analytics automation.
- [ ] Build a text-to-SQL analytics agent with Claude and measure it with an eval set, ablations and online validation.
