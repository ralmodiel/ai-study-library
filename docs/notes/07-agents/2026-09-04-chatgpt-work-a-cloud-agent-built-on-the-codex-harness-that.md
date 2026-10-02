# ChatGPT Work: A Cloud Agent Built on the Codex Harness That Books Travel

Melvin Vivas · X video post · 2026-09-04 · 1:00 · 385 views · [Open on X](https://x.com/melvindvivas/status/2095707805202456704)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** beginner

## Summary

Melvin Vivas reshares an OpenAI demo of ChatGPT Work, a cloud agent that runs on the Codex harness. In the demo, the agent goes to travel websites, signs in with the user's accounts, finds a flight paid for with miles and a beach apartment within budget, and books both after the user approves. It shows how a coding-agent harness can run general browser tasks for users who aren't developers.

## Key points

- ChatGPT Work runs in the cloud on the Codex agent harness, so the same agent loop used for coding also handles general web tasks.
- Example request: find a flight from New York to Punta Cana on October 17 and check whether the user has enough miles to cover it.
- The agent goes to the website itself. When it needs a login, the user types the credentials, then the agent keeps searching using the user's miles and preferences.
- If a site session already exists, the agent skips the login and goes straight to the task. In the demo, this was an apartment near the beach that was available on the dates and within budget.
- Human in the loop: the agent shows the flight and the stay for review, and books only after the user approves.
- The agent returns booking confirmations at the end. The demo presents this as planning and booking in one place, even while away from a desk.
- Design point for agent builders: handling login, reusing sessions and asking for approval before money is spent all matter for agents that take real actions.

## Resources mentioned

- [ ] **[ChatGPT Work](https://chatgpt.com/work/)** · tool · chatgpt.com · check price  
  ChatGPT workspace on web and mobile for creating docs, decks, sites and spreadsheets and handling complex tasks.  
  Also in: ChatGPT Voice Update: Plugins, Model Switching and ChatGPT Work (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102848983655956911) · [notes](../../notes/16-trends/2026-09-24-chatgpt-voice-update-plugins-model-switching-and-chatgpt.md)), Hermes (Grok 4.6) vs ChatGPT Work on a text-to-PDF task (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088271030666305728) · [notes](../../notes/07-agents/2026-08-14-hermes-grok-4-6-vs-chatgpt-work-on-a-text-to-pdf-task.md)), ChatGPT Voice on Desktop: Directing Codex and Agents by Voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2080385485999063342) · [notes](../../notes/13-ai-tools/2026-07-23-chatgpt-voice-on-desktop-directing-codex-and-agents-by-voice.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[ChatGPT](https://chatgpt.com/)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's AI assistant (web, desktop and mobile apps), used for chat, coding, writing and image generation.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Dots Demo: A Voice AI Agent Handling Travel Booking and Feedback Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105717848928866390) · [notes](../../notes/07-agents/2026-10-01-dots-demo-a-voice-ai-agent-handling-travel-booking-and.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../../notes/13-ai-tools/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../../notes/07-agents/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)) and 23 more

## Try this

- [ ] Try ChatGPT Work (Codex in the cloud) on a real task that takes several steps on the web.
- [ ] Give the agent a task with clear limits (dates, budget, preferences) and check its results before letting it book or pay.
- [ ] Build a travel-booking agent that searches flights and stays, checks loyalty miles, and asks for human approval before it books.
