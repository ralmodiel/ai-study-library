# Plan With a Frontier Model, Code With a Local Quantized Qwen

Melvin Vivas · X post · 2026-08-30 · [Open on X](https://x.com/melvindvivas/status/2094068904981360779)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator thinks about a hybrid coding setup: use Codex with a frontier model (Sol) for planning, and hand the coding to Qwen3.8-27B quantized to Q4_K_M running locally. A local model has no usage limits, so it can run in a loop for free even if it is slower.

## Key points

- Split the work: a strong hosted model does the planning, a local model does the coding.
- Qwen3.8-27B at Q4_K_M quantization is the local model being considered.
- Local inference has no rate or usage limits, so you can run agent loops without paying per token.
- The trade-off is slower coding in exchange for free, unlimited runs.
- The creator asked ChatGPT whether the local model compares to the hosted 'Luna' model, which is not a real benchmark.

## Resources mentioned

- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../notes/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../notes/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../notes/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)), Qwen3.8-27B Is Free on Infron: 256K-Context Multimodal Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099437312124072202) · [notes](../notes/2026-09-14-qwen3-8-27b-is-free-on-infron-256k-context-multimodal-model.md)) and 22 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Build a planner/executor coding loop: a hosted frontier model writes the plan and a locally hosted quantized Qwen carries it out.
