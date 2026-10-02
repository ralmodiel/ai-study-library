# Swapping your agent's main model when you hit API limits

Melvin Vivas · X post · 2026-07-13 · [Open on X](https://x.com/melvindvivas/status/2076532527385461230)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator normally uses Grok 4.5 as the main model in his Hermes agent and finds it excellent. When he hit Grok's API limits, he switched Hermes to his Codex model access. He plans to switch back once his limits reset. The lesson is to keep your agent model-agnostic so you can fall back to another provider.

## Key points

- Grok 4.5 works very well as the main model in Hermes.
- When API limits run out, switch the agent to another provider (here, Codex) to keep working.
- Switch back once the main provider's limits reset.
- Design tip: a model-agnostic agent setup lets you work around rate limits and outages.

## Resources mentioned

- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[Grok 4.5](https://x.ai/news/grok-4-5)** · tool · x.ai · paid  
  An LLM said to be trained in partnership with SpaceXAI, pitched as a general model beyond software engineering.  
  Also in: Grok 4.5 Works Well as the Model Behind Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082662373400412296) · [notes](../notes/2026-07-30-grok-4-5-works-well-as-the-model-behind-hermes-agent.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Agent-Made Video in 10 Minutes: Hermes Agent + Grok 4.5 + Hyperframes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078761137001443365) · [notes](../notes/2026-07-19-agent-made-video-in-10-minutes-hermes-agent-grok-4-5.md)), Personal Assistant Agent on Hermes: Morning Briefings and Inbox Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078760898102219148) · [notes](../notes/2026-07-19-personal-assistant-agent-on-hermes-morning-briefings-and.md)) and 9 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Set up a fallback model provider in your agent so you can switch when you hit rate limits.
