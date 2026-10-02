# Codex Orchestrator/Subagent Setup: Astra (medium) + Luna (max)

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097242361747411421)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

A real report on a Codex multi-agent setup used to build an eval app. GPT-6 Astra at medium reasoning acted as orchestrator and Luna at max reasoning ran as subagents. The build took about 8 dev hours and used about 27% of his weekly limit.

## Key points

- Orchestrator: GPT-6 Astra with medium reasoning effort.
- Subagents: Luna with max reasoning effort.
- Cost: about 27% of the weekly Codex limit. Time: about 8 dev hours.
- Result: an eval app that works with local models or any OpenAI-compatible API (later released as local-evals).
- Pattern: a strong model plans and delegates, while subagents do the implementation work.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../notes/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), Picking models for orchestrator and subagent roles in Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103678315274133931) · [notes](../notes/2026-09-26-picking-models-for-orchestrator-and-subagent-roles-in-codex.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../notes/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../notes/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)) and 14 more

## Try this

- [ ] Try a Codex setup with a strong orchestrator model and subagents, and track the share of your weekly limit it uses.
- [ ] Build an eval app for local or OpenAI-compatible models with a Codex orchestrator/subagent workflow.
