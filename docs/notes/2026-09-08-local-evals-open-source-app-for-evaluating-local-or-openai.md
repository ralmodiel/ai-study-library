# Local Evals: Open-Source App for Evaluating Local or OpenAI-Compatible Models

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097278690023415841)

**Topics:** Evaluation (Evals) & Testing, LLM Fundamentals, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas released local-evals, an open-source evaluation app that runs locally. It works with local models or any OpenAI-compatible API. It evaluates document/image-to-JSON, text-to-JSON and tool calling. He built it entirely with Codex, using GPT-6 Astra as orchestrator and Luna as subagents, and tested it with LM Studio and OpenRouter.

## Key points

- local-evals runs on your own machine and talks to any OpenAI-compatible endpoint, so you can compare local and hosted models with the same harness.
- Supported eval types: document/image → JSON extraction, text → JSON (structured output), and tool calling.
- It was tested with LM Studio for local models and OpenRouter for hosted models.
- He built the whole app with Codex using an Astra/Luna combo (Astra orchestrates, Luna subagents do the work).
- Structured-output and tool-calling accuracy are useful evals when you pick a small or local model for agent tasks.

## Resources mentioned

- [ ] **[donvito/local-evals](https://github.com/donvito/local-evals)** · repo · github.com · free  
  Eval app that runs locally and tests local models or any OpenAI-compatible API on JSON extraction and tool calling.  
  Also in: Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../notes/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), local-evals: A Local LLM Eval App Built by Codex Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097980517589393770) · [notes](../notes/2026-09-10-local-evals-a-local-llm-eval-app-built-by-codex-subagents.md)), Measure Your Own Codex Token Burn: Orchestrator+Subagents vs Single Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097968112612306986) · [notes](../notes/2026-09-10-measure-your-own-codex-token-burn-orchestrator-subagents-vs.md))
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101111328714993970) · [notes](../notes/2026-09-19-lora-fine-tune-qwen3-5-2b-on-your-tweets-with-unsloth-studio.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../notes/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)) and 31 more
- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Clone local-evals and run it against a local model in LM Studio or a hosted model via OpenRouter.
- [ ] Build a local eval harness that compares models on JSON extraction and tool-calling accuracy.
