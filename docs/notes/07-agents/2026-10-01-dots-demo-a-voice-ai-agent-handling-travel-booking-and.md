# Dots Demo: A Voice AI Agent Handling Travel Booking and Feedback Triage

Melvin Vivas · X video post · 2026-10-01 · 9:09 · 248 views · [Open on X](https://x.com/melvindvivas/status/2105717848928866390)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** beginner

## Summary

This is a replayed launch demo of "dots", a personal AI agent product. In it, a user talks to their dot on a voice call and gives it several real work tasks at the same time. The dot books a refundable, in-policy flight and a hotel, shows hotel screenshots and map locations, checks LA travel times, and analyzes a busy Slack user-feedback channel against Linear tickets and PRs. It is mainly a product showcase, but it gives a concrete picture of how a multi-task, tool-using agent with a "close the loop" feedback workflow can work.

## Key points

- The dot takes several tasks at once over a live voice call and works in the background. The user can check its progress in the Dots browser and in chat.
- The travel task had hard limits: the flight had to follow company travel policy and be refundable. The dot said it would check the checkout total and the policy before booking.
- It added visuals so the human could decide: hotel screenshots and Google Maps locations. The human then picked the hotel.
- It estimated travel time: about 30–45 minutes to get out of LAX plus 45–75 minutes of driving. It suggested an earlier flight (landing 11:20) to leave a buffer.
- The feedback workflow it described: read Slack channel reports, add each item to a master list, classify and group them, link real issues to verified Linear tickets, match tickets to PRs, and track each fix as in flight, shipped or retested.
- The 'close the loop' step: when a PR fixes a major feedback theme, the agent replies in the Slack thread with the PR link and asks users to try again. The retest confirms the issue is actually fixed.
- The agent ranks the biggest issues that have no credible fix yet. In this demo the top theme was reliability (a dot looks active but doesn't reply or can't reach its tools), followed by mobile and notification UX polish.
- The agent also collects the top unanswered Slack messages and drafts replies for the human to review.

## Resources mentioned

- [ ] **[OpenAI Dots](https://openai.com/index/introducing-dots/)** · tool · openai.com · paid  
  Always-on agents in ChatGPT, each with its own cloud computer and browser, that take on ongoing work and personal responsibilities.  
  Also in: OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../../notes/07-agents/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay 2026 Recap: Dots, Agents API, Codex Cloud & Marketplace (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105173002740695356) · [notes](../../notes/16-trends/2026-09-30-openai-devday-2026-recap-dots-agents-api-codex-cloud.md)), Creator's favorite OpenAI DevDay announcements (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105021153379275030) · [notes](../../notes/16-trends/2026-09-30-creator-s-favorite-openai-devday-announcements.md)) and 1 more
- [ ] **[Google Maps](https://maps.google.com)** · tool · maps.google.com · free  
  Mapping service; the agent used it to show where the hotel options are.
- [ ] **[Linear](https://linear.app)** · tool · linear.app · free  
  Issue-tracking tool that the feedback workflow links verified issues to.  
  Also in: Theo's YouTube Packaging Masterclass: Thumbnails, Titles and the Algorithm (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099731305567322378) · [notes](../../notes/15-career/2026-09-15-theo-s-youtube-packaging-masterclass-thumbnails-titles-and.md)), Conductor Walkthrough: Running Parallel Coding Agents in Isolated Git Worktrees (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069521472742404424) · [notes](../../notes/13-ai-tools/2026-06-23-conductor-walkthrough-running-parallel-coding-agents-in.md))
- [ ] **[Slack](https://slack.com)** · tool · slack.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Team chat app where the user-feedback channel lives and where the agent replies to close the loop.  
  Also in: Grok Team Bots: Shared AI Teammates in Slack and Grok (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104743446116552838) · [notes](../../notes/07-agents/2026-09-29-grok-team-bots-shared-ai-teammates-in-slack-and-grok.md)), ChatGPT Voice Update: Plugins, Model Switching and ChatGPT Work (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102848983655956911) · [notes](../../notes/16-trends/2026-09-24-chatgpt-voice-update-plugins-model-switching-and-chatgpt.md)), Devin Gets a Mac VM: AI Agent Builds and Ships iOS Apps (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099894857523454458) · [notes](../../notes/13-ai-tools/2026-09-16-devin-gets-a-mac-vm-ai-agent-builds-and-ships-ios-apps.md)), 5 Weekend AI Engineering Projects: Cost Routing, Caching, Evals & Observability (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1987763505269220) · [notes](../../notes/14-projects/2026-09-14-5-weekend-ai-engineering-projects-cost-routing-caching.md)) and 4 more
- [ ] **[ChatGPT](https://chatgpt.com/)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's AI assistant (web, desktop and mobile apps), used for chat, coding, writing and image generation.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../../notes/13-ai-tools/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../../notes/07-agents/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)) and 23 more
- [ ] **[Microsoft Teams](https://www.microsoft.com/microsoft-teams)** · tool · microsoft.com · check price  
  Microsoft's team chat app, mentioned among the related launches.

## Try this

- [ ] Build a voice-driven travel-booking agent that follows constraints (company policy, refundable fares), checks the total before checkout, and sends screenshots and map links so the user can choose.
- [ ] Build a feedback-triage agent: pull messages from a Slack channel, cluster them into themes, link them to Linear tickets and PRs, rank the themes that have no fix yet, and post replies with the PR link asking users to retest once a fix ships.
- [ ] Build an agent that finds the top unanswered Slack messages and drafts replies for a human to review.
