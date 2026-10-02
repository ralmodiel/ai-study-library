# Jev + WebMCP Solves 100% of Benchmark Tasks at About 112× Lower Cost

Melvin Vivas · X post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100977647719457085)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A quoted benchmark claims that Jev with Mercury 2.5, a fast and low-cost LLM, used WebMCP to solve 100% of tasks at about 112× lower model cost than GPT-6 Astra using computer use with code execution. The point is that structured tool interfaces like WebMCP can let cheap models beat expensive computer-use agents.

## Key points

- WebMCP exposes website actions as structured tools instead of making the agent operate the screen.
- Jev + Mercury 2.5 + WebMCP reportedly solved 100% of the benchmark tasks.
- Model cost was about 112× lower than GPT-6 Astra using computer use with code execution.
- Lesson: a good tool interface can matter more than model size for web agents.

## Resources mentioned

- [ ] **[WebMCP](https://developer.chrome.com/docs/ai/webmcp)** · tool · developer.chrome.com · free  
  A proposed web standard that lets websites expose tools and context to AI agents through the Model Context Protocol in the browser.  
  Also in: WebMCP: Exposing Existing App Features as Agent Tools (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099686544043037023) · [notes](../../notes/07-agents/2026-09-15-webmcp-exposing-existing-app-features-as-agent-tools.md)), Docs7: Serving Agent-Readable Documentation to Coding Agents via MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095862583580659999) · [notes](../../notes/07-agents/2026-09-04-docs7-serving-agent-readable-documentation-to-coding-agents.md))
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../../notes/06-rag/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)) and 12 more
- [ ] **[Mercury 2.5](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5)** · tool · inceptionlabs.ai · paid  
  A very fast language model, reported at about 1,100 tokens/sec with better agentic performance than Mercury 2.  
  Also in: Mercury 2.5 runs at 1,100 tokens/sec (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095127511302885509) · [notes](../../notes/16-trends/2026-09-02-mercury-2-5-runs-at-1-100-tokens-sec.md))
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), Pi Agent Council: Ask Multiple LLMs in Parallel and Compare Their Advice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105645508186570807) · [notes](../../notes/13-ai-tools/2026-10-01-pi-agent-council-ask-multiple-llms-in-parallel-and-compare.md)), Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)) and 49 more

## Try this

- [ ] Compare a cheap LLM using structured WebMCP tools against a frontier model using computer use on the same web tasks, measuring both success rate and cost.
