# Set Codex subagent model and reasoning to save usage limits

Melvin Vivas · X post · 2026-09-25 · [Open on X](https://x.com/melvindvivas/status/2103466507531665428)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A practical tip for people using the Sol or Astra models in OpenAI Codex. Set the model and reasoning level for each subagent on purpose, so subagents don't use your usage limits too fast.

## Key points

- When you use Sol or Astra in Codex, set the subagent's model yourself instead of relying on defaults.
- Also set the subagent's reasoning level (effort).
- Choosing cheaper models or lower reasoning for subagents helps you avoid using up your plan limits.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../notes/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../notes/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../notes/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)), Codex Config: GPT-6 Astra Orchestrator + GPT-5.6 Luna Subagents at Medium (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097015169771839874) · [notes](../notes/2026-09-08-codex-config-gpt-6-astra-orchestrator-gpt-5-6-luna.md)) and 24 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more

## Try this

- [ ] In Codex, set each subagent's model and reasoning level so you don't use up your usage limits.
