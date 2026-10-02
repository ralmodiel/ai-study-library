# Serve LFM2.5-2.6B with vLLM and connect it to Hermes

Melvin Vivas · X post · 2026-08-09 · [Open on X](https://x.com/melvindvivas/status/2086179805431824458)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A step-by-step guide to serving Liquid AI's LFM2.5-2.6B with vLLM, with tool calling turned on, and using it as a custom provider in the Hermes agent. It also covers adding Firecrawl for web search and checking that tool calls work.

## Key points

- vllm serve "LiquidAI/LFM2.5-2.6B" --enable-auto-tool-choice --tool-call-parser lfm2 --reasoning-parser qwen3.
- If vLLM throws errors, ask Codex to set it up for you.
- In Hermes, run `hermes model`, choose "custom provider", and enter your vLLM URL; confirm the model in the dashboard.
- For web search, run `hermes tools`, select web search and scraping, and add a Firecrawl API key.
- Send a test message; seeing tools get called means the setup works.

## Resources mentioned

- [ ] **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · tool · huggingface.co · free  
  Liquid AI's small language model, which can be paired with the LFM2.5-VL-3B vision model.  
  Also in: Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../notes/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Coworker with Liquid AI LFM2.5-2.6B via LM Studio on a Mac (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092602149440196867) · [notes](../notes/2026-08-26-coworker-with-liquid-ai-lfm2-5-2-6b-via-lm-studio-on-a-mac.md)), Zero-Cost Coworker Setup: OpenRouter Free Models + Local LFM2.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092562143443034155) · [notes](../notes/2026-08-26-zero-cost-coworker-setup-openrouter-free-models-local-lfm2-5.md)), Coworker: A Subscription-Free AI Agent on Local LFM2.5-2.6B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092525819084386315) · [notes](../notes/2026-08-26-coworker-a-subscription-free-ai-agent-on-local-lfm2-5-2-6b.md)) and 9 more
- [ ] **[Liquid AI (@liquidai) on X](https://x.com/liquidai)** · website · x.com · free  
  An AI company that builds efficient foundation models. The quoted post shows its PII handling working on Japanese text.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../notes/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Liquid AI LFM 2.5 Encoder: a CPU-friendly encoder model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103885808768078071) · [notes](../notes/2026-09-27-liquid-ai-lfm-2-5-encoder-a-cpu-friendly-encoder-model.md)), Fine-tuning Liquid AI LFM2/LFM2.5 MoE models with the new Halo framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103367260568224039) · [notes](../notes/2026-09-25-fine-tuning-liquid-ai-lfm2-lfm2-5-moe-models-with-the-new.md)), Liquid AI's LFM2-Longevity models for aging-data analysis (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100626614128378309) · [notes](../notes/2026-09-18-liquid-ai-s-lfm2-longevity-models-for-aging-data-analysis.md)) and 19 more
- [ ] **[vLLM (@vllm\_project)](https://x.com/vllm_project)** · tool · x.com · free  
  An open-source, high-throughput engine for serving LLMs, with tool-call and reasoning parsers.
- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[Firecrawl](https://x.com/firecrawl)** · tool · x.com · free  
  An open-source web data API with Search, Scrape and Interact features that turn web pages into LLM-ready markdown or structured data for AI agents.  
  Also in: Firecrawl Keyless: Free Web Search & Scraping for AI Agents, No API Key (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093395106602893818) · [notes](../notes/2026-08-29-firecrawl-keyless-free-web-search-scraping-for-ai-agents-no.md)), Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../notes/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Running Coworker on Free OpenRouter Models and Its Agent Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091613394617155791) · [notes](../notes/2026-08-24-running-coworker-on-free-openrouter-models-and-its-agent.md)), Coworker: Open-Source Grok Bot Clone Built on Pi and CopilotKit (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091565948256109004) · [notes](../notes/2026-08-24-coworker-open-source-grok-bot-clone-built-on-pi-and.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[@helloiamleonie](https://x.com/helloiamleonie)** · person · x.com · free  
  The Liquid AI team member who helped with the Hermes setup.

## Try this

- [ ] Serve LFM2.5-2.6B with vLLM using the lfm2 tool-call parser.
- [ ] Add the vLLM endpoint to Hermes as a custom provider.
- [ ] Add a Firecrawl API key through \`hermes tools\` for web search.
- [ ] Send a test message and check that tools get called.
- [ ] Run a self-hosted agent on a small local model with tool calling and web search.
