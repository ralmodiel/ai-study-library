# Measuring Codex Usage Burn Rate: Astra (high) Without Subagents

Melvin Vivas · X post · 2026-09-10 · [Open on X](https://x.com/melvindvivas/status/2097912903823470740)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A quick, hands-on cost test of Codex with the Astra model at the 'high' reasoning level and no subagents, covering a review, plan and code workflow. Over 17 minutes the weekly limit dropped from 64% to 62%. The post works out the burn rate and how long a full weekly limit would last. It also shows a simple way to estimate the cost of your own coding-agent setup.

## Key points

- Test setup: Codex with Astra at high reasoning, no subagents, doing a review → plan → code workflow.
- Weekly usage went from 64% to 62% between 12:37 and 12:54, so 2% in 17 minutes.
- That is about 0.118% per minute, or roughly 7.1% per hour.
- At that rate a full 100% weekly limit lasts about 850 minutes (around 14h 10m) of active work.
- Next test: Astra at xhigh reasoning, which is reported to be cheaper.
- Method: note the usage % at a start and end time, then extrapolate to estimate how long your limits will last.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more

## Try this

- [ ] Track the usage % at a start and end time to calculate your own burn rate.
- [ ] Compare reasoning levels (high vs xhigh) to see which is cheaper for your workflow.
