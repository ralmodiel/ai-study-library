# Cost-Saving Model Fallback Chain: Grok → Codex → OpenRouter DeepSeek

Melvin Vivas · X post · 2026-07-15 · [Open on X](https://x.com/melvindvivas/status/2077235607118684426)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin describes a cost-saving fallback chain for his Hermes agent. It uses Grok 4.5 (xAI) first, checks usage limits regularly, falls back to Codex when the xAI limits run out, and then to DeepSeek V4 through OpenRouter when Codex runs out. The idea is to use up flat-rate subscriptions before paying per token.

## Key points

- Primary model: Grok 4.5 through his xAI subscription.
- The agent itself is told to check usage limits regularly.
- First fallback: Codex (OpenAI subscription) when the xAI limits are used up.
- Second fallback: DeepSeek V4 via OpenRouter (pay per use) when Codex runs out.
- Use up prepaid subscriptions before pay-as-you-go APIs to keep costs down.
- Switch back to the primary model once its limits reset.

## Resources mentioned

- [ ] **[Hermes (AI agent)](https://github.com/nousresearch/hermes-agent)** · tool · github.com · free  
  The personal AI agent Melvin runs for daily work, set up to switch between model providers.
- [ ] **[Grok 4.5](https://x.ai/news/grok-4-5)** · tool · x.ai · paid  
  An LLM said to be trained in partnership with SpaceXAI, pitched as a general model beyond software engineering.  
  Also in: Grok 4.5 Works Well as the Model Behind Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082662373400412296) · [notes](../../notes/07-agents/2026-07-30-grok-4-5-works-well-as-the-model-behind-hermes-agent.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../../notes/07-agents/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Agent-Made Video in 10 Minutes: Hermes Agent + Grok 4.5 + Hyperframes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078761137001443365) · [notes](../../notes/07-agents/2026-07-19-agent-made-video-in-10-minutes-hermes-agent-grok-4-5.md)), Personal Assistant Agent on Hermes: Morning Briefings and Inbox Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078760898102219148) · [notes](../../notes/07-agents/2026-07-19-personal-assistant-agent-on-hermes-morning-briefings-and.md)) and 9 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../../notes/03-llm-fundamentals/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../../notes/03-llm-fundamentals/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../../notes/16-trends/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)) and 42 more
- [ ] **[DeepSeek V4](https://huggingface.co/collections/deepseek-ai/deepseek-v4)** · tool · huggingface.co · free  
  A DeepSeek LLM, accessed through OpenRouter as the final fallback.  
  Also in: Multi-Teacher On-Policy Distillation (MOPD) in 2026 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095322105172885931) · [notes](../../notes/10-fine-tuning/2026-09-03-multi-teacher-on-policy-distillation-mopd-in-2026.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../../notes/07-agents/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md))

## Try this

- [ ] Set up a model fallback chain for your agent that checks usage limits and moves from subscription models to pay-per-use APIs.
- [ ] Use up subscription quotas before switching to per-token providers.
- [ ] Build a model router that tracks provider usage limits and fails over automatically: Grok → Codex → OpenRouter.
