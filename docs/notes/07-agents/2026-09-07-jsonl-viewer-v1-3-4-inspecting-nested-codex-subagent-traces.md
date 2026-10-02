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
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
