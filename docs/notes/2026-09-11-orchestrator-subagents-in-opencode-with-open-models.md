# Orchestrator + Subagents in opencode with Open Models

Melvin Vivas · X post · 2026-09-11 · [Open on X](https://x.com/melvindvivas/status/2098410568680177970)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas is testing opencode to recreate the orchestrator-and-subagents pattern with open models such as DeepSeek, Qwen, GLM and Kimi. In his hybrid setup, cloud models do the orchestration and smaller local models run as subagents.

## Key points

- The orchestrator-plus-subagents pattern can be built in opencode, not only in proprietary coding agents.
- Open models to try: DeepSeek, Qwen, GLM and Kimi.
- Hybrid design: a stronger cloud model orchestrates while locally running models act as subagents.
- Running subagents locally can cut API cost and keep some work on your own machine.

## Resources mentioned

- [ ] **[OpenCode](https://x.com/opencode)** · tool · x.com · free  
  Open-source terminal coding agent that can be configured with different model providers, including open models.  
  Also in: T3Code: a better interface for terminal coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099695364345639176) · [notes](../notes/2026-09-15-t3code-a-better-interface-for-terminal-coding-agents.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Trying OpenCode Go After Upgrading OpenCode (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098595863111332145) · [notes](../notes/2026-09-12-trying-opencode-go-after-upgrading-opencode.md)), Try Muse Spark 1.3 for Free in OpenCode (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095685031608066172) · [notes](../notes/2026-09-04-try-muse-spark-1-3-for-free-in-opencode.md)) and 10 more
- [ ] **[DeepSeek](https://www.deepseek.com)** · tool · deepseek.com · free  
  Open-weight large language models from DeepSeek, known for strong reasoning and coding at low cost.  
  Also in: Open models now dominate token volume on Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101188319703134335) · [notes](../notes/2026-09-19-open-models-now-dominate-token-volume-on-vercel-ai-gateway.md)), jina-ocr-v1: Turning PDFs, Scans and Tables into Markdown (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100627054849065081) · [notes](../notes/2026-09-18-jina-ocr-v1-turning-pdfs-scans-and-tables-into-markdown.md)), Bolt.new Adds Open Models (GLM, DeepSeek, Kimi) via Bolt Forge (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099557234707726844) · [notes](../notes/2026-09-15-bolt-new-adds-open-models-glm-deepseek-kimi-via-bolt-forge.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)) and 4 more
- [ ] **[Qwen](https://qwen.ai/)** · tool · qwen.ai · free  
  Alibaba's family of open-weight LLMs.  
  Also in: OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Why Chinese AI Models Are Mostly Open Source (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079119057413115995) · [notes](../notes/2026-07-20-why-chinese-ai-models-are-mostly-open-source.md))
- [ ] **[GLM](https://github.com/zai-org)** · tool · github.com · free  
  Chinese open-weight LLM family from Zhipu AI.  
  Also in: OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Why Chinese AI Models Are Mostly Open Source (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079119057413115995) · [notes](../notes/2026-07-20-why-chinese-ai-models-are-mostly-open-source.md))
- [ ] **[Kimi](https://github.com/moonshotai)** · tool · github.com · free  
  Open-weight large language models from Moonshot AI, aimed at agent and coding tasks.  
  Also in: Bolt.new Adds Open Models (GLM, DeepSeek, Kimi) via Bolt Forge (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099557234707726844) · [notes](../notes/2026-09-15-bolt-new-adds-open-models-glm-deepseek-kimi-via-bolt-forge.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../notes/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Why Chinese AI Models Are Mostly Open Source (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079119057413115995) · [notes](../notes/2026-07-20-why-chinese-ai-models-are-mostly-open-source.md))

## Try this

- [ ] Set up opencode with a cloud orchestrator model and local open models (e.g. Qwen) as subagents.
