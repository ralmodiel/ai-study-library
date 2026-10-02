# Swapping AI SDK for pi-ai as the LLM provider layer

Melvin Vivas · X post · 2026-08-16 · [Open on X](https://x.com/melvindvivas/status/2088682790032486904)

**Topics:** LLM Fundamentals, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator replaced the AI SDK in his own AI library, which connects to multiple AI providers, with pi-ai from Pi (@pidotdev). It's an example of choosing a provider-abstraction layer for calling different LLM APIs through one interface.

## Key points

- Use one library to talk to many LLM providers instead of coding against each API
- The creator moved his library from AI SDK to pi-ai
- He found pi-ai the best fit for interfacing with AI providers

## Resources mentioned

- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[pi-ai](https://github.com/badlogic/pi-mono/blob/main/packages/ai/README.md)** · tool · github.com · free · open in a browser to verify  
  A library from Pi that gives one interface to many LLM providers.
- [ ] **[AI SDK (Vercel)](https://ai-sdk.dev)** · tool · ai-sdk.dev · free  
  Vercel's TypeScript toolkit for calling LLM providers and building AI apps.
