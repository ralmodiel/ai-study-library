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
  Also in: T3Code: a better interface for terminal coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099695364345639176) · [notes](../../notes/13-ai-tools/2026-09-15-t3code-a-better-interface-for-terminal-coding-agents.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../../notes/13-ai-tools/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Trying OpenCode Go After Upgrading OpenCode (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098595863111332145) · [notes](../../notes/13-ai-tools/2026-09-12-trying-opencode-go-after-upgrading-opencode.md)), Orchestrator + Subagents in opencode with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098410568680177970) · [notes](../../notes/07-agents/2026-09-11-orchestrator-subagents-in-opencode-with-open-models.md)) and 10 more
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] Check that your GLM coding plan setup uses https://api.z.ai/api/coding/paas/v4 (OpenAI-style) or https://api.z.ai/api/anthropic (Anthropic-style).
- [ ] Switch away from https://api.z.ai/api/paas/v4/ if you are on the coding plan.
