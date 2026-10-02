# Intent Classification and Routing in a Multi-Agent Desktop App

Melvin Vivas · X post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100617893625163993)

**Topics:** AI Agents, Tool Use & MCP, AI System Design & Architecture · **Level:** intermediate

## Summary

Melvin Vivas describes a routing pattern in his Coworker app. A generalist agent called Jev, from TypeSafe AI, works out what the user wants, classifies the task and hands it to the bot best suited to handle it. This is a short example of a router or orchestrator in a multi-agent system.

## Key points

- The user asks one generalist entry point instead of choosing a specialist bot.
- Jev works out the user's intent and classifies the task.
- The classified task goes to the specialist bot best able to handle it.
- This is the common router/orchestrator pattern in multi-agent systems.

## Resources mentioned

- [ ] **[Jev (TypeSafe AI)](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** · tool · typesafe.ai · free  
  TypeSafe's new post-training algorithm for calibrated, confidence-scored decisions, pitched as a replacement for RLHF.  
  Also in: jev-dev: A UI Tool to Keep Run History When Experimenting with Jev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105347987098755186) · [notes](../notes/2026-10-01-jev-dev-a-ui-tool-to-keep-run-history-when-experimenting.md)), JevDev: Open-Source UI for Experimenting with Jev by Typesafe.ai (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104951800256397330) · [notes](../notes/2026-09-29-jevdev-open-source-ui-for-experimenting-with-jev-by.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)), Model Routing: Fine-Tune Your Own Router on Your Prompts (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101867588183830864) · [notes](../notes/2026-09-21-model-routing-fine-tune-your-own-router-on-your-prompts.md)) and 6 more
- [ ] **[TypeSafe AI (@typesafeai) on X](https://x.com/typesafeai)** · person · x.com · free  
  The X account of TypeSafe AI, the company that makes Jev and the System One models.  
  Also in: Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)), Not every problem needs an LLM: small fine-tuned models (Jev by TypeSafe AI) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101203821754249398) · [notes](../notes/2026-09-19-not-every-problem-needs-an-llm-small-fine-tuned-models-jev.md)), Jev model added to the AIBackends API via Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101199012615561488) · [notes](../notes/2026-09-19-jev-model-added-to-the-aibackends-api-via-vercel-ai-gateway.md)) and 6 more
- [ ] **[Coworker (donvito/coworker)](https://github.com/donvito/coworker)** · repo · github.com · free  
  The creator's local-first desktop app where you pick an AI coworker and have it produce work such as invoices as finished PDFs.  
  Also in: Claude Opus 5.5 for Video Making: Creator's Showcase Thread (Coworker) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386225612415297) · [notes](../notes/2026-09-28-claude-opus-5-5-for-video-making-creator-s-showcase-thread.md)), Coworker: free open-source desktop AI coworker app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103533091117736005) · [notes](../notes/2026-09-26-coworker-free-open-source-desktop-ai-coworker-app.md)), Coworker: Open-Source Desktop App for AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101347063820955903) · [notes](../notes/2026-09-20-coworker-open-source-desktop-app-for-ai-agents.md)), Using Devin AI to Test the Coworker Desktop App on Windows (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100651879219044800) · [notes](../notes/2026-09-18-using-devin-ai-to-test-the-coworker-desktop-app-on-windows.md)) and 38 more

## Try this

- [ ] Build a generalist agent that classifies each user request and routes it to a specialist sub-agent.
