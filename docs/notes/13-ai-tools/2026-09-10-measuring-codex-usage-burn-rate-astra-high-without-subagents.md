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
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), Pi Agent Council: Ask Multiple LLMs in Parallel and Compare Their Advice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105645508186570807) · [notes](../../notes/13-ai-tools/2026-10-01-pi-agent-council-ask-multiple-llms-in-parallel-and-compare.md)), Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)) and 49 more

## Try this

- [ ] Track the usage % at a start and end time to calculate your own burn rate.
- [ ] Compare reasoning levels (high vs xhigh) to see which is cheaper for your workflow.
