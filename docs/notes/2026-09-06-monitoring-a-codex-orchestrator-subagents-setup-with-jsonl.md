# Monitoring a Codex orchestrator + subagents setup with JSONL traces

Melvin Vivas · X post · 2026-09-06 · [Open on X](https://x.com/melvindvivas/status/2096278206546673880)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator is testing a Codex setup where GPT-6 Astra orchestrates and Luna models run as subagents. He uses his jsonl-viewer, which supports traces, to watch what the agents are doing. The lesson: in multi-agent setups, check the trace logs to see what each agent is doing.

## Key points

- Setup: a strong model (Astra) as orchestrator and a cheaper model (Luna) for subagents in Codex.
- Look at trace logs (JSONL) to follow what the orchestrator and subagents are doing.
- jsonl-viewer's traces support is useful for this kind of monitoring.

## Resources mentioned

- [ ] **[donvito/jsonl-viewer](https://github.com/donvito/jsonl-viewer)** · repo · github.com · free  
  Open-source tool for viewing and editing .jsonl files (fine-tuning datasets) and agent traces from Codex, Claude Code, Pi and Hermes.  
  Also in: jsonl-viewer: Live Traces for Codex Orchestrator and Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099753117504172186) · [notes](../notes/2026-09-15-jsonl-viewer-live-traces-for-codex-orchestrator-and.md)), See live Codex traces with the jsonl-viewer tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099750877653618700) · [notes](../notes/2026-09-15-see-live-codex-traces-with-the-jsonl-viewer-tool.md)), Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../notes/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), Analyzing Codex Traces with jsonl-viewer (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097582799448580323) · [notes](../notes/2026-09-09-analyzing-codex-traces-with-jsonl-viewer.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Use a JSONL trace viewer to inspect multi-agent runs.
