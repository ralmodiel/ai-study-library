# Grok Build uploaded whole codebases: privacy fix and /privacy

Melvin Vivas · X post · 2026-07-14 · [Open on X](https://x.com/melvindvivas/status/2076730101686030358)

**Topics:** AI Safety, Security & Guardrails, AI Dev Tools & Productivity · **Level:** beginner

## Summary

The creator quotes an xAI response about Grok Build's coding CLI. The CLI uploaded the full repository, including files it never read, to give the agent more context. After user reports, xAI turned the codebase bundle upload off by default on the server side. Users can run `/privacy` in the CLI to check and control data retention. The lesson: check what an agentic coding tool sends off your machine.

## Key points

- Grok Build uploaded the whole repo bundle, including unread files, to support deep agentic coding.
- Many users saw this as crossing a privacy line.
- xAI disabled the codebase bundle upload on the server side; it is now off by default.
- Run `/privacy` in the Grok Build CLI to check and control data retention.
- Lesson: review the data-sharing defaults of any AI coding agent before pointing it at private code.

## Resources mentioned

- [ ] **[Grok Build](https://x.ai/build)** · tool · x.ai · free  
  xAI's agentic coding CLI; data sharing is on by default and can be turned off with /privacy.  
  Also in: Setting up Grok Bot for coding with Grok Build and Cursor CLI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095164316286947349) · [notes](../../notes/13-ai-tools/2026-09-02-setting-up-grok-bot-for-coding-with-grok-build-and-cursor.md)), Reusable GPU devbox: PyTorch/CUDA plus six coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095138320481390772) · [notes](../../notes/13-ai-tools/2026-09-02-reusable-gpu-devbox-pytorch-cuda-plus-six-coding-agents.md)), Handing off an unfinished Codex session to Grok Build (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088975804789375279) · [notes](../../notes/13-ai-tools/2026-08-16-handing-off-an-unfinished-codex-session-to-grok-build.md)), Grok Build finishes a task Codex left hanging (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088971452880163221) · [notes](../../notes/13-ai-tools/2026-08-16-grok-build-finishes-a-task-codex-left-hanging.md)) and 10 more

## Try this

- [ ] Run \`/privacy\` in the Grok Build CLI to check and control data retention.
- [ ] Check what data your AI coding tools upload before using them on private repos.
