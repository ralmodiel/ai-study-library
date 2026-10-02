# Running Pi Coding Agent with a Local Qwen 3.6 Model

Melvin Vivas · X post · 2026-05-01 · [Open on X](https://x.com/melvindvivas/status/2050068308180009332)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator shares a report from r/LocalLLaMA about running the lightweight Pi coding agent with a local Qwen 3.6 (35B) model. The quoted post says local models work much better when the agent keeps the prefix cache intact and avoids a huge set of tools and a massive system prompt.

## Key points

- You can run a coding agent fully locally by pairing the Pi coding agent with a local Qwen 3.6 35B model.
- Agents that keep invalidating the prefix (KV) cache run slowly on local hardware.
- Keep the system prompt short and the prompt prefix stable so the cache can be reused between turns.
- A small tool set works better for local models than a huge one.
- Lean agent harnesses suit local LLMs better than heavy ones built for cloud models.

## Resources mentioned

- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[Qwen 3.6 35B (MTP)](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** · tool · huggingface.co · free  
  Qwen 3.6 mixture-of-experts model (35B total, about 3B active parameters) with multi-token prediction for local inference.  
  Also in: Use a Local Model for Confidential Data with Your Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085345530251735193) · [notes](../../notes/11-safety/2026-08-06-use-a-local-model-for-confidential-data-with-your-agent.md)), Running Qwen 3.6 35B locally on an RTX 3090 for agent tool calling (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084140795653976196) · [notes](../../notes/07-agents/2026-08-03-running-qwen-3-6-35b-locally-on-an-rtx-3090-for-agent-tool.md)), Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../../notes/07-agents/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Run Hermes Agent locally with Qwen 3.6 35B MTP in LM Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079169631802314881) · [notes](../../notes/07-agents/2026-07-20-run-hermes-agent-locally-with-qwen-3-6-35b-mtp-in-lm-studio.md)) and 4 more
- [ ] **[r/LocalLLaMA – Been using Pi coding agent with local Qwen 3.6 35B](https://reddit.com/r/LocalLLaMA/c)** · community · reddit.com · free  
  Reddit thread in the local-LLM community about using the Pi agent with a local Qwen 3.6 model.

## Try this

- [ ] Try running the Pi coding agent with a local Qwen 3.6 model.
- [ ] Keep system prompts small and stable and limit tools when using local models.
- [ ] Set up a fully local coding agent (Pi + Qwen 3.6 35B) and compare speed with and without prefix-cache reuse.
