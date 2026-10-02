# Cut Hermes Agent Token Costs with Gemini Flash as an Auxiliary Model

Melvin Vivas · X post · 2026-07-08 · [Open on X](https://x.com/melvindvivas/status/2074575936952119462)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

A cost-saving tip for Hermes Agent (Nous Research): set a cheap, fast model (Gemini Flash, accessed through OpenRouter) as the auxiliary model for web and vision tasks. The main model stays in charge of reasoning, while the cheaper model handles the token-heavy side tasks. The creator says he now uses this setup himself.

## Key points

- Hermes Agent lets you set an auxiliary model separate from the main model.
- Send web browsing and vision (image) tasks to the auxiliary model.
- Gemini Flash is suggested for this because it is cheap and fast, which saves a lot of tokens.
- OpenRouter can be used as the provider to reach Gemini Flash.
- General pattern: route simple, high-volume subtasks to cheaper models to cut agent costs.
- The setup is covered in the Hermes Agent user guide under 'Configuring Models'. The link in the post is cut off and returned a 404.

## Resources mentioned

- [ ] **[Hermes Agent Docs – Configuring Models](https://hermes-agent.nousresearch.com/docs/user-guide/configuring-models)** · docs · hermes-agent.nousresearch.com · free  
  Hermes Agent user guide page on setting the main and auxiliary models.
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[Gemini Flash](https://deepmind.google/models/gemini/flash/)** · tool · deepmind.google · free  
  Google's fast, low-cost Gemini model, suited to auxiliary tasks like web browsing and vision.  
  Also in: Testing Gemini 3.8 Flash in Cursor with a CRM Smoke Test (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095386598871638086) · [notes](../notes/2026-09-03-testing-gemini-3-8-flash-in-cursor-with-a-crm-smoke-test.md)), Gemini 3.8 Flash Available in Cursor CLI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095378823995117944) · [notes](../notes/2026-09-03-gemini-3-8-flash-available-in-cursor-cli.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md))
- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more

## Try this

- [ ] In Hermes Agent, set Gemini Flash (for example through OpenRouter) as the auxiliary model for web and vision tasks.
- [ ] Compare token usage and cost before and after the change.
