# Codex Losing Task Context After Compaction

Melvin Vivas · X post · 2026-09-11 · [Open on X](https://x.com/melvindvivas/status/2098373293158138177)

**Topics:** Prompt & Context Engineering, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas reports that Codex forgot what he had asked it to do after context compaction. He wonders whether an experimental context-management setting is the cause, which is a reminder that compaction can drop task instructions.

## Key points

- Context compaction in coding agents can drop the original task instructions.
- Suspected cause: the experimental context-management config `[features.context_management] experimental_mode = true`.
- If an agent loses track after compaction, try turning experimental context settings off or restating the task.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
