# Picking models for orchestrator and subagent roles in Codex

Melvin Vivas · X post · 2026-09-26 · [Open on X](https://x.com/melvindvivas/status/2103678315274133931)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

After testing GPT-6 Sol, the creator is staying with a Codex multi-agent setup: Astra as the orchestrator and Luna as subagents. His reason is that Sol costs too much to run as a subagent and is not smart enough to be the orchestrator. The lesson is to choose a model for each role based on cost and intelligence.

## Key points

- Multi-agent setup in Codex: one orchestrator model plans and delegates the work, and subagent models carry out the tasks.
- The creator's preferred setup is Astra as orchestrator and Luna as subagents.
- GPT-6 Sol was rejected for both roles: too expensive for a subagent and less intelligent than Astra as an orchestrator.
- Subagents run many times, so cost matters most there. The orchestrator makes the key decisions, so reasoning quality matters most there.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../../notes/07-agents/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../../notes/07-agents/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../../notes/03-llm-fundamentals/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)), DigitalOcean Serverless Inference Now Serves OpenAI GPT-6 Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102970848785363330) · [notes](../../notes/09-llmops/2026-09-24-digitalocean-serverless-inference-now-serves-openai-gpt-6.md)) and 14 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), Pi Agent Council: Ask Multiple LLMs in Parallel and Compare Their Advice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105645508186570807) · [notes](../../notes/13-ai-tools/2026-10-01-pi-agent-council-ask-multiple-llms-in-parallel-and-compare.md)), Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)) and 49 more

## Try this

- [ ] When building a multi-agent setup, compare models separately for the orchestrator and subagent roles, weighing cost against intelligence.
