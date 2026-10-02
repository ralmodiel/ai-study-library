# OpenRouter MCP: Pick, Price, and Test LLMs from Inside Your Coding Agent

Melvin Vivas · X video post · 2026-06-25 · 2:30 · 113 views · [Open on X](https://x.com/melvindvivas/status/2070171878283710858)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, AI Dev Tools & Productivity · **Level:** beginner

## Summary

This is a product demo of the OpenRouter MCP server. It gives coding agents like Claude Code live data on models: benchmarks, pricing, provider speed, and documentation. That matters because what an agent knows about models comes from training data that is about six months old. The demo filters coding models by price, finds the fastest provider for a chosen model, compares models for design work, and searches OpenRouter's docs for its Python SDK, all without leaving the agent.

## Key points

- The problem: coding agents only know the models in their training data, which is about 6 months old, while OpenRouter offers more than 300 models.
- Without the MCP, choosing a model means opening OpenRouter tabs to compare benchmarks, prices, and provider speed by hand.
- Example query: 'What are the top coding models right now, under $2 per million input?' The MCP returns live ranked results.
- You can ask which provider is fastest for a given model. In the demo, Friendli served GLM-5.2 at about 152 tokens/second.
- The MCP can also run test generations with the model you picked, directly inside Claude Code, for example building a landing page.
- A search-docs tool pulls OpenRouter documentation, such as the Python SDK, into the agent's context.
- Setup takes two steps in Claude Code: run `claude mcp add <OpenRouter MCP URL>`, then log in through the OpenRouter tool. An OAuth window opens, you approve a key, and you're done.
- Ways to save money: filter models by price per million tokens and route to cheaper, capable models instead of overspending on tokens.

## Resources mentioned

- [ ] **[OpenRouter MCP](https://openrouter.ai/docs/guides/overview/mcp-server)** · tool · openrouter.ai · free  
  An MCP server that gives agents live model benchmarks, pricing, provider speed, test inference, and OpenRouter docs search.
- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more
- [ ] **[OpenRouter Documentation](https://openrouter.ai/docs)** · docs · openrouter.ai · free  
  OpenRouter's docs explaining video generation parameters, the async request flow and the video models route.  
  Also in: OpenRouter Adds Video Generation: One API for Veo, Seedance, Wan and Sora (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044754354297782740) · [notes](../notes/2026-04-16-openrouter-adds-video-generation-one-api-for-veo-seedance.md))
- [ ] **[OpenRouter Python SDK](https://openrouter.ai/docs/client-sdks/python/overview)** · tool · openrouter.ai · free  
  OpenRouter's Python SDK for calling models from your application code.
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)) and 120 more
- [ ] **[GLM 5.2](https://huggingface.co/zai-org/GLM-5.2)** · tool · huggingface.co · free  
  A GLM-family LLM (the transcript says 'GLM-5-2') that the demo ranked as a strong, affordable model for coding and design.  
  Also in: Qwen3.8-Max on the Frontend Code Arena cost-performance frontier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084174074201416042) · [notes](../notes/2026-08-03-qwen3-8-max-on-the-frontend-code-arena-cost-performance.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Open Model GLM 5.2 Helped Mitigate OpenAI-Caused Cyberattack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079789131115487624) · [notes](../notes/2026-07-22-open-model-glm-5-2-helped-mitigate-openai-caused-cyberattack.md)), AI News Roundup: Claude Fable 5, Scientist AI, ZCode, NVIDIA RL (Melvin Vivas on [X](https://x.com/melvindvivas/status/2072785831606304801) · [notes](../notes/2026-07-03-ai-news-roundup-claude-fable-5-scientist-ai-zcode-nvidia-rl.md)) and 27 more
- [ ] **[Friendli](https://friendli.ai/)** · tool · friendli.ai · paid  
  An inference provider on OpenRouter (the transcript says 'Friendly').

## Try this

- [ ] Connect the OpenRouter MCP to Claude Code with \`claude mcp add <OpenRouter MCP URL>\`, then log in through the OpenRouter tool and approve a key in the OAuth window.
- [ ] Ask your agent for the top models for your task, filtered by price per million tokens.
- [ ] Ask which provider is fastest for the model you chose.
- [ ] Use the search-docs tool to bring OpenRouter's Python SDK docs into your agent while you integrate it.
- [ ] Build a SaaS landing page with a cheap model you picked through the OpenRouter MCP, then compare the designs from several models.
- [ ] Add the OpenRouter Python SDK to a SaaS app so it can route requests to cheaper, capable models and cut token costs.
