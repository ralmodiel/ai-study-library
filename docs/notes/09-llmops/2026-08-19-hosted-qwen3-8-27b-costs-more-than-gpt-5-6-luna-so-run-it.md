# Hosted Qwen3.8 27B Costs More Than GPT 5.6 Luna, So Run It Locally

Melvin Vivas · X post · 2026-08-19 · [Open on X](https://x.com/melvindvivas/status/2089907917344690365)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

The creator found that Qwen3.8 27B costs more on OpenRouter than OpenAI's GPT 5.6 Luna, and decided to run the open-weight model on his own machine instead. The lesson: compare per-token prices across hosted providers before assuming an open model is the cheap option, and consider local inference when you have the hardware.

## Key points

- On OpenRouter, a hosted open-weight model (Qwen3.8 27B) can cost more than a small proprietary model (GPT 5.6 Luna).
- Open weights don't mean cheap: hosted price depends on the provider, not on the license.
- A 27B open model can run locally, so your only cost is your own hardware and electricity.

## Resources mentioned

- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)) and 24 more
- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../../notes/03-llm-fundamentals/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../../notes/03-llm-fundamentals/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../../notes/16-trends/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)) and 42 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../../notes/13-ai-tools/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../../notes/13-ai-tools/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../../notes/13-ai-tools/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../../notes/07-agents/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more

## Try this

- [ ] Check per-token prices on OpenRouter before picking a hosted model.
- [ ] Consider running mid-size open models locally to cut API costs.
