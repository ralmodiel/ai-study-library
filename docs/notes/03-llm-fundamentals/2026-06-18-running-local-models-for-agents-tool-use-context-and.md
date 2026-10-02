# Running Local Models for Agents: Tool Use, Context and Quantization

Melvin Vivas · X video post · 2026-06-18 · 1:45 · 73 views · [Open on X](https://x.com/melvindvivas/status/2067585799252836556)

**Topics:** LLM Fundamentals, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas explains why leaderboard scores don't tell you whether a self-hosted model can work inside an agent workflow like OpenClaw. He covers the three things that matter most: reliable tool calling, enough context window (16k tokens at the very least), and how far you can quantize before quality drops. The main lesson is to plan the whole setup together: model size, quantization level, VRAM, and the context you have left once the model is loaded.

## Key points

- Leaderboard scores don't matter if a model can't work inside an agent workflow. Test it in your actual agent loop.
- Tool use comes first: the model has to call the right tool at the right time with the right arguments, then understand the result. Weaker models fail here right away.
- Agents use up context fast. Instructions, tool schemas, past messages, file contents, command outputs and errors all pile up before the actual task is added.
- For OpenClaw, treat a 16k-token context window as the absolute minimum, not an ideal. More is better.
- Quantization compresses model weights by storing them with fewer bits. That uses less VRAM and lets the model run on cheaper hardware.
- If you quantize too aggressively, the model gets worse at following instructions, using tools and staying coherent over long tasks. In an agent, that can break the whole workflow: wrong tool calls, missed instructions, lost context, or confidently going down the wrong path.
- Size your setup as a whole: model size + quantization level + available VRAM + context you can still allocate after the model is loaded. It all has to fit in GPU memory.
- A Mac Mini running a local model won't simply replace Claude or OpenAI. Being useful in practice takes more than the size of the weights.

## Resources mentioned

- [ ] **[OpenClaw](https://github.com/openclaw/openclaw)** · tool · github.com · free  
  An open-source, self-hostable personal AI agent that can run on local or hosted LLMs.  
  Also in: Run Muse Glimmer 30B Locally on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087923865813193027) · [notes](../../notes/09-llmops/2026-08-13-run-muse-glimmer-30b-locally-on-an-rtx-3090-with-llama-cpp.md)), Running Muse Glimmer 30B Locally with llama.cpp and the Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087041258766413927) · [notes](../../notes/09-llmops/2026-08-11-running-muse-glimmer-30b-locally-with-llama-cpp-and-the.md)), Run Muse Glimmer 30B Locally with llama.cpp and Connect It to Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087038764136972499) · [notes](../../notes/09-llmops/2026-08-11-run-muse-glimmer-30b-locally-with-llama-cpp-and-connect-it.md)), Ollama Is Now an Official Provider for OpenClaw (Melvin Vivas on [X](https://x.com/melvindvivas/status/2033504191252177046) · [notes](../../notes/07-agents/2026-03-16-ollama-is-now-an-official-provider-for-openclaw.md)) and 2 more
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), Comparing Coding Models on the Same Task in Devin iOS (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105882889653248435) · [notes](../../notes/13-ai-tools/2026-10-02-comparing-coding-models-on-the-same-task-in-devin-ios.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), LLM Council Agent in Pi Using Codex and Claude Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105623208875761959) · [notes](../../notes/07-agents/2026-10-01-llm-council-agent-in-pi-using-codex-and-claude-models.md)) and 52 more
- [ ] **[OpenAI](https://x.com/OpenAI)** · tool · x.com · free  
  An AI model provider whose models can be used through managed connectors.  
  Also in: Creator's favorite OpenAI DevDay announcements (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105021153379275030) · [notes](../../notes/16-trends/2026-09-30-creator-s-favorite-openai-devday-announcements.md)), OpenAI Agents API with Bring Your Own Sandbox as a backend for a 'software factory' (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098729077163401577) · [notes](../../notes/07-agents/2026-09-12-openai-agents-api-with-bring-your-own-sandbox-as-a-backend.md)), Building Software Factories on the OpenAI Agents API (Codex-Powered) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098405420855660963) · [notes](../../notes/07-agents/2026-09-11-building-software-factories-on-the-openai-agents-api-codex.md)), Coworker: Free Local-First Desktop App for Running AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093548227039830065) · [notes](../../notes/07-agents/2026-08-29-coworker-free-local-first-desktop-app-for-running-ai-agents.md)) and 11 more
- [ ] **[Mac Mini](https://www.apple.com/mac-mini/)** · tool · apple.com · paid  
  Apple desktop computer popular as always-on local hardware for personal AI agents.  
  Also in: Hosting a Personal AI Agent: Local Mac Mini vs Cloud VM Privacy Trade-off (Melvin Vivas on [X](https://x.com/melvindvivas/status/2074386107995963853) · [notes](../../notes/09-llmops/2026-07-07-hosting-a-personal-ai-agent-local-mac-mini-vs-cloud-vm.md))

## Try this

- [ ] Judge local models on how they perform inside your agent workflow, not on leaderboard scores.
- [ ] Test whether the model calls the right tools with correct arguments and understands what the tools return.
- [ ] Use a context window of at least 16k tokens for OpenClaw-style agents, and more if you can.
- [ ] Pick a quantization level that doesn't hurt instruction-following and tool use. Avoid compressing too aggressively.
- [ ] Plan model size, quantization, VRAM and leftover context together so everything fits in GPU memory.
