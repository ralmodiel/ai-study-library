# Run Codex and Claude in YOLO Mode Safely with Docker Sandboxes

Melvin Vivas · X post · 2026-08-28 · [Open on X](https://x.com/melvindvivas/status/2093335392015794596)

**Topics:** AI Dev Tools & Productivity, AI Safety, Security & Guardrails, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

The creator tries Docker Sandboxes (the sbx CLI) to run coding agents in YOLO mode, meaning without permission prompts, inside an isolated sandbox. The post gives install commands for Mac and Windows and the commands to launch Codex or Claude.

## Key points

- Docker Sandboxes lets you run agents in YOLO mode (no approval prompts) safely isolated from your machine.
- Mac install: brew trust docker/tap && brew install docker/tap/sbx
- Windows install: winget install Docker.sbx
- Run Codex: sbx run codex
- Run Claude: sbx run claude

## Resources mentioned

- [ ] **[Docker Sandboxes](https://www.docker.com/products/docker-sandboxes/)** · tool · docker.com · free  
  Local microVM-isolated sandboxes for safely running AI coding agents on your laptop.  
  Also in: Docker Cloud Sandboxes: Run AI Agents in Local or Cloud microVMs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103310977878073835) · [notes](../notes/2026-09-25-docker-cloud-sandboxes-run-ai-agents-in-local-or-cloud.md)), Docker Sandboxes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093363509405044767) · [notes](../notes/2026-08-28-docker-sandboxes.md)), Docker Sandboxes Include an Interactive Dashboard (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093337808656339425) · [notes](../notes/2026-08-28-docker-sandboxes-include-an-interactive-dashboard.md)), Docker Sandboxes: Disposable Isolated Sandboxes for AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093332445617885437) · [notes](../notes/2026-08-28-docker-sandboxes-disposable-isolated-sandboxes-for-ai-agents.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more

## Try this

- [ ] Install sbx: brew trust docker/tap && brew install docker/tap/sbx (Mac) or winget install Docker.sbx (Windows).
- [ ] Start an agent in YOLO mode with 'sbx run codex' or 'sbx run claude'.
