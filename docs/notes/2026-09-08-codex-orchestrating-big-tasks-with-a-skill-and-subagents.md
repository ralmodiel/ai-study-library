# Codex: Orchestrating Big Tasks with a Skill and Subagents

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097149803356717096)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** intermediate

## Summary

The creator reports that for big tasks Codex now reliably uses his 'astra orchestrator' skill, which hands work to subagents. Codex started following the skill properly once he revised the skill's instructions. He is thinking about using stronger models (Sol or Terra) for the subagents while he still has usage limits left.

## Key points

- For large tasks, an orchestrator skill can have the main agent split the work and hand it to subagents.
- If the agent isn't following a skill well, rewrite the skill's instructions. That fixed it for the creator.
- Choose subagent models based on your remaining usage limits: stronger subagents use up quota faster.
- Astra, Sol and Terra are model names the creator mentions. The post doesn't explain them, so check them yourself.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] If an agent doesn't follow a skill well, rewrite the skill's instructions and test again.
- [ ] Pick subagent model strength based on how much usage quota you have left.
