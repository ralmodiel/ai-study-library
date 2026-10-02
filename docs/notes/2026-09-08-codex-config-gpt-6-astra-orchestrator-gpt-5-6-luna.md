# Codex Config: GPT-6 Astra Orchestrator + GPT-5.6 Luna Subagents at Medium

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097015169771839874)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas shares the .codex/config.toml he uses in OpenAI Codex. The orchestrator is GPT-6 Astra and the subagents are GPT-5.6 Luna. He found Astra at low reasoning effort handed the app back before it was finished, so he raised the reasoning effort to medium, and it now works well.

## Key points

- The Codex config file lives at .codex/config.toml.
- The root/orchestrator uses model = "gpt-6-astra" with model_reasoning_effort = "medium".
- Subagents use model = "gpt-5.6-luna" with model_reasoning_effort = "medium".
- At low reasoning effort, Astra declared the task done too early and handed over an unfinished app.
- Raising the orchestrator's reasoning effort from low to medium fixed the early handoffs.
- Caution: the snippet repeats the `model` key at the top level, which is invalid TOML. In a real config, subagent settings must go in their own section or profile, so check the Codex docs.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../notes/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../notes/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../notes/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../notes/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more

## Try this

- [ ] If the orchestrator hands work back before it is finished, raise its model\_reasoning\_effort from low to medium.
