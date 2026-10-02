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
  Also in: ChatGPT Voice Update: Plugins, Model Switching and ChatGPT Work (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102848983655956911) · [notes](../notes/2026-09-24-chatgpt-voice-update-plugins-model-switching-and-chatgpt.md)), Hermes (Grok 4.6) vs ChatGPT Work on a text-to-PDF task (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088271030666305728) · [notes](../notes/2026-08-14-hermes-grok-4-6-vs-chatgpt-work-on-a-text-to-pdf-task.md)), ChatGPT Voice on Desktop: Directing Codex and Agents by Voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2080385485999063342) · [notes](../notes/2026-07-23-chatgpt-voice-on-desktop-directing-codex-and-agents-by-voice.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[ChatGPT](https://chatgpt.com/#usage)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's updated image generation model in ChatGPT, with faster generation, better fidelity, consistent edits and comment-based editing.  
  Also in: ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../notes/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), Use Your ChatGPT Plus/Pro Subscription to Run Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105133960296898826) · [notes](../notes/2026-09-30-use-your-chatgpt-plus-pro-subscription-to-run-devin.md)) and 21 more

## Try this

- [ ] Try ChatGPT Work (Codex in the cloud) on a real task that takes several steps on the web.
- [ ] Give the agent a task with clear limits (dates, budget, preferences) and check its results before letting it book or pay.
- [ ] Build a travel-booking agent that searches flights and stays, checks loyalty miles, and asks for human approval before it books.
