# Use the Right Z.ai Endpoint for the GLM 5.2 Coding Plan

Melvin Vivas · X post · 2026-06-21 · [Open on X](https://x.com/melvindvivas/status/2068598664860483677)

**Topics:** LLM Fundamentals, AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

This post shares a tip from Ivan Fioravanti: GLM coding plan users should call the coding-optimized endpoint (api.z.ai/api/coding/paas/v4), not the general one (api.z.ai/api/paas/v4/). Where a tool supports it, use the Anthropic-compatible endpoint (api.z.ai/api/anthropic); Claude Code and OpenCode both do.

## Key points

- Coding plan endpoint: https://api.z.ai/api/coding/paas/v4 (optimized for coding).
- Do not use the general endpoint https://api.z.ai/api/paas/v4/ with the coding plan.
- Anthropic-compatible endpoint: https://api.z.ai/api/anthropic. Use it where supported.
- Claude Code and OpenCode use the Anthropic-compatible endpoint.
- The caption link to the coding endpoint is cut off; the full path ends in /paas/v4.

## Resources mentioned

- [ ] **[Z.ai coding plan API endpoint](https://api.z.ai/api/coding/paa)** · docs · api.z.ai · paid  
  Coding-optimized OpenAI-compatible endpoint for the GLM coding plan; the full path is https://api.z.ai/api/coding/paas/v4.
- [ ] **[Z.ai general API endpoint (paas/v4)](https://api.z.ai/api/paas/v4/)** · docs · api.z.ai · paid · open in a browser to verify  
  General-purpose Z.ai API endpoint, which should not be used with the coding plan.
- [ ] **[Z.ai Anthropic-compatible endpoint](https://api.z.ai/api/anthropic)** · docs · api.z.ai · paid  
  Anthropic-API-compatible endpoint for using GLM models in tools like Claude Code and OpenCode.
- [ ] **[Ivan Fioravanti (@ivanfioravanti) on X](https://x.com/ivanfioravanti)** · person · x.com · free  
  AI practitioner who shares tips on local and open models and coding setups.
- [ ] **[OpenCode](https://x.com/opencode)** · tool · x.com · free  
  Open-source terminal coding agent that can be configured with different model providers, including open models.  
  Also in: T3Code: a better interface for terminal coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099695364345639176) · [notes](../notes/2026-09-15-t3code-a-better-interface-for-terminal-coding-agents.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Trying OpenCode Go After Upgrading OpenCode (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098595863111332145) · [notes](../notes/2026-09-12-trying-opencode-go-after-upgrading-opencode.md)), Orchestrator + Subagents in opencode with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098410568680177970) · [notes](../notes/2026-09-11-orchestrator-subagents-in-opencode-with-open-models.md)) and 10 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more

## Try this

- [ ] Check that your GLM coding plan setup uses https://api.z.ai/api/coding/paas/v4 (OpenAI-style) or https://api.z.ai/api/anthropic (Anthropic-style).
- [ ] Switch away from https://api.z.ai/api/paas/v4/ if you are on the coding plan.
