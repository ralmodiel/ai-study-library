# Measure Your Own Codex Token Burn: Orchestrator+Subagents vs Single Agent

Melvin Vivas · X post · 2026-09-10 · [Open on X](https://x.com/melvindvivas/status/2097968112612306986)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas logged his Codex usage and asked ChatGPT to analyze it. For him, an Astra orchestrator with Luna subagents was cheaper than a single Astra agent at high/xhigh. His main lesson is to take your own measurements, because the two setups were used on different projects.

## Key points

- Log your own token usage and burn rate, then have an LLM such as ChatGPT analyze it.
- For him, Astra (orchestrator) + Luna (subagents) was cheaper.
- The comparison isn't apples to apples: the orchestrator setup was a greenfield build (local-evals), while Astra high/xhigh was used to add features to an existing app (Coworker).
- Pick the workflow that your own measurements support; it's your tokens.

## Resources mentioned

- [ ] **[donvito/local-evals](https://github.com/donvito/local-evals)** · repo · github.com · free  
  Eval app that runs locally and tests local models or any OpenAI-compatible API on JSON extraction and tool calling.  
  Also in: Melvin Vivas's open-source AI tools, built with Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099223578558538050) · [notes](../notes/2026-09-14-melvin-vivas-s-open-source-ai-tools-built-with-codex.md)), local-evals: A Local LLM Eval App Built by Codex Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097980517589393770) · [notes](../notes/2026-09-10-local-evals-a-local-llm-eval-app-built-by-codex-subagents.md)), Local Evals: Open-Source App for Evaluating Local or OpenAI-Compatible Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097278690023415841) · [notes](../notes/2026-09-08-local-evals-open-source-app-for-evaluating-local-or-openai.md))
- [ ] **[Coworker (donvito/coworker)](https://github.com/donvito/coworker)** · repo · github.com · free  
  The creator's local-first desktop app where you pick an AI coworker and have it produce work such as invoices as finished PDFs.  
  Also in: Claude Opus 5.5 for Video Making: Creator's Showcase Thread (Coworker) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386225612415297) · [notes](../notes/2026-09-28-claude-opus-5-5-for-video-making-creator-s-showcase-thread.md)), Coworker: free open-source desktop AI coworker app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103533091117736005) · [notes](../notes/2026-09-26-coworker-free-open-source-desktop-ai-coworker-app.md)), Coworker: Open-Source Desktop App for AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101347063820955903) · [notes](../notes/2026-09-20-coworker-open-source-desktop-app-for-ai-agents.md)), Using Devin AI to Test the Coworker Desktop App on Windows (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100651879219044800) · [notes](../notes/2026-09-18-using-devin-ai-to-test-the-coworker-desktop-app-on-windows.md)) and 38 more
- [ ] **[ChatGPT](https://chatgpt.com/#usage)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's updated image generation model in ChatGPT, with faster generation, better fidelity, consistent edits and comment-based editing.  
  Also in: ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../notes/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), Use Your ChatGPT Plus/Pro Subscription to Run Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105133960296898826) · [notes](../notes/2026-09-30-use-your-chatgpt-plus-pro-subscription-to-run-devin.md)) and 21 more

## Try this

- [ ] Log your Codex usage (burn rate) for each setup and compare them yourself before picking a workflow.
