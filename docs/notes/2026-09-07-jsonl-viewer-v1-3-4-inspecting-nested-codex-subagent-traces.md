# JSONL Viewer v1.3.4: Inspecting Nested Codex Subagent Traces

Melvin Vivas · X video post · 2026-09-07 · 0:12 · 1,465 views · [Open on X](https://x.com/melvindvivas/status/2096867183062401173)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas announces version 1.3.4 of his open-source JSONL Viewer, a tool for reading JSONL files such as agent trace logs. This release improves the traces viewer for OpenAI Codex sessions. Subagent traces now nest under the run that spawned them, and each turn shows its model and reasoning effort. The tool is useful if you need to debug multi-agent runs.

## Key points

- JSONL Viewer v1.3.4 (GitHub repo donvito/jsonl-viewer) updates its traces viewer for agent session logs.
- Codex subagent traces now nest under the parent run that spawned them, so you see the full multi-agent run as one tree.
- Turns carry MAIN or SUBAGENT labels, so you can tell the orchestrator apart from its subagents.
- The MAIN agent's view shows subagent names, so you can see which subagent was called.
- You can move between parent and child traces.
- Each turn shows the model used and the reasoning effort setting, which helps with cost and quality debugging.
- Takeaway: in multi-agent systems, viewing traces as a tree with per-turn model metadata makes failures easier to find.

## Resources mentioned

- [ ] **[JSONL Viewer v1.3.4 release (donvito/jsonl-viewer)](https://github.com/donvito/jsonl-viewer/releases/tag/v1.3.4)** · repo · github.com · free  
  Open-source JSONL file viewer with a traces viewer for agent sessions, including nested Codex subagent traces.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
