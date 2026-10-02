# Running Codex with DeepSeek V4 Flash through OpenRouter

Melvin Vivas · X post · 2026-08-17 · [Open on X](https://x.com/melvindvivas/status/2089313703707701502)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

While waiting for his Codex usage limit to reset, the creator switched Codex to DeepSeek V4 Flash through OpenRouter. He shares the ~/.codex/config.toml file that sets OpenRouter as the model provider. This is a practical way to keep coding agents running on cheaper or other models when your OpenAI quota runs out.

## Key points

- Edit ~/.codex/config.toml to change Codex's model provider.
- Set model_provider = "openrouter" to make OpenRouter the main provider.
- Set model to the full OpenRouter model name, e.g. "deepseek/deepseek-v4-flash-0731" (previously "gpt-5.6-sol").
- Add a [model_providers.openrouter] section with name = "OpenRouter" and base_url = "https://openrouter.ai/api/v1".
- Use env_key = "OPENROUTER_API_KEY" so Codex reads the key from an environment variable.
- Set wire_api = "responses" to use the Responses-style API.
- Use case: keep working with a different model while your Codex rate limit resets.

## Resources mentioned

- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more
- [ ] **[OpenRouter API endpoint](https://openrouter.ai/docs/cookbook/coding-agents/codex-cli)** · docs · openrouter.ai · free  
  The base URL of OpenRouter's API, used as base\_url in the Codex provider config. It is an API endpoint, not a web page.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[DeepSeek V4 Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** · tool · huggingface.co · free  
  DeepSeek model used as the comparison baseline in the tool-calling benchmark.  
  Also in: Low-Cost Agent Run: DeepSeek V4 Flash via OpenRouter in ohmypi (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094115198772863000) · [notes](../notes/2026-08-31-low-cost-agent-run-deepseek-v4-flash-via-openrouter-in.md)), LFM2.5-2.6B Matches DeepSeek-V4-Flash on Tool Calling; LEAP Fine-Tuning (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086086945055363569) · [notes](../notes/2026-08-08-lfm2-5-2-6b-matches-deepseek-v4-flash-on-tool-calling-leap.md)), DeepSeek V4 Flash at 90% Off on Nous Portal (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084839294531997716) · [notes](../notes/2026-08-05-deepseek-v4-flash-at-90-off-on-nous-portal.md)), Qwen3.8-Max on the Frontend Code Arena cost-performance frontier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084174074201416042) · [notes](../notes/2026-08-03-qwen3-8-max-on-the-frontend-code-arena-cost-performance.md)) and 3 more

## Try this

- [ ] Create an OpenRouter API key and export it as OPENROUTER\_API\_KEY.
- [ ] Add the shared OpenRouter provider block to ~/.codex/config.toml and set the model to the full OpenRouter model name.
