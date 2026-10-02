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
  Also in: WebMCP: Exposing Existing App Features as Agent Tools (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099686544043037023) · [notes](../notes/2026-09-15-webmcp-exposing-existing-app-features-as-agent-tools.md)), Docs7: Serving Agent-Readable Documentation to Coding Agents via MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095862583580659999) · [notes](../notes/2026-09-04-docs7-serving-agent-readable-documentation-to-coding-agents.md))
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)) and 10 more
- [ ] **[Mercury 2.5](https://www.inceptionlabs.ai/blog/introducing-mercury-2-5)** · tool · inceptionlabs.ai · paid  
  A very fast language model, reported at about 1,100 tokens/sec with better agentic performance than Mercury 2.  
  Also in: Mercury 2.5 runs at 1,100 tokens/sec (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095127511302885509) · [notes](../notes/2026-09-02-mercury-2-5-runs-at-1-100-tokens-sec.md))
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more

## Try this

- [ ] Compare a cheap LLM using structured WebMCP tools against a frontier model using computer use on the same web tasks, measuring both success rate and cost.
