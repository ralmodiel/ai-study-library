# Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5

Melvin Vivas · X video post · 2026-10-02 · 0:30 · 489 views · [Open on X](https://x.com/melvindvivas/status/2105947598104449202)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas shows a 30-second motion video he made by running his custom "motion-reel" skill with Claude Sonnet 5.5 on a GitHub repo (donvito/jev-dev). He says Sonnet 5.5's output is comparable to Opus 5.5's and costs less. The takeaway is that a reusable agent skill plus a cheaper model can do repeatable creative work, like promo reels for a codebase.

## Key points

- The creator wrote his own reusable skill, "motion-reel", that turns a code repository into a short motion video (reel).
- He ran the skill on the donvito/jev-dev repo (a UI tool for experimenting with Jev by Typesafe.ai) to make the 30-second video.
- In his view, Claude Sonnet 5.5's output with this skill is comparable to Opus 5.5's.
- Sonnet 5.5 is cheaper than Opus 5.5, so for a well-defined, skill-driven task, try the smaller model before paying for the bigger one.
- Wrapping a repeatable workflow in a skill lets you reuse it on any repo and compare models on the same task.
- The video has no speech. The details of how the skill works are not shared, and the motion-reel skill itself is not linked.

## Resources mentioned

- [ ] **[donvito/jev-dev](https://github.com/donvito/jev-dev)** · repo · github.com · free  
  UI tool for experimenting with Jev by Typesafe.ai that keeps a history of past runs.  
  Also in: JevDev: Open-Source UI Tool for Experimenting with Jev (Typesafe.ai) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105945215991488696) · [notes](../../notes/13-ai-tools/2026-10-02-jevdev-open-source-ui-tool-for-experimenting-with-jev.md)), jev-dev: A UI Tool to Keep Run History When Experimenting with Jev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105347987098755186) · [notes](../../notes/13-ai-tools/2026-10-01-jev-dev-a-ui-tool-to-keep-run-history-when-experimenting.md)), JevDev: Open-Source UI for Experimenting with Jev by Typesafe.ai (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104951800256397330) · [notes](../../notes/13-ai-tools/2026-09-29-jevdev-open-source-ui-for-experimenting-with-jev-by.md))
- [ ] **motion-reel skill** · tool · check price  
  The creator's custom agent skill that makes short motion videos (reels) from a code repository.
- [ ] **[Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)** · tool · anthropic.com · paid  
  Anthropic's newly released mid-tier Claude model, reported to be strong at agentic coding.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), GPT-6.1 and Sonnet 5.5 Released the Same Week (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105320549127954629) · [notes](../../notes/16-trends/2026-09-30-gpt-6-1-and-sonnet-5-5-released-the-same-week.md)), Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../../notes/13-ai-tools/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)) and 2 more
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Comparing Coding Models on the Same Task in Devin iOS (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105882889653248435) · [notes](../../notes/13-ai-tools/2026-10-02-comparing-coding-models-on-the-same-task-in-devin-ios.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), LLM Council Agent in Pi Using Codex and Claude Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105623208875761959) · [notes](../../notes/07-agents/2026-10-01-llm-council-agent-in-pi-using-codex-and-claude-models.md)), Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)) and 52 more
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../../notes/06-rag/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../../notes/07-agents/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)) and 12 more

## Try this

- [ ] Try running the same skill or task on Sonnet 5.5 and Opus 5.5 and compare output quality against cost.
- [ ] Check out the donvito/jev-dev repo.
- [ ] Build an agent skill that reads a GitHub repo and generates a short motion-graphics promo reel for it.
