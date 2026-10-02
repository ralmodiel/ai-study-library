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
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[pi-ai](https://github.com/badlogic/pi-mono/blob/main/packages/ai/README.md)** · tool · github.com · free · open in a browser to verify  
  A library from Pi that gives one interface to many LLM providers.
- [ ] **[AI SDK (Vercel)](https://ai-sdk.dev)** · tool · ai-sdk.dev · free  
  Vercel's TypeScript toolkit for calling LLM providers and building AI apps.
