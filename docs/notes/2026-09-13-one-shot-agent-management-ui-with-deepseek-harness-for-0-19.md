# One-Shot Agent Management UI with DeepSeek Harness for $0.19

Melvin Vivas · X post · 2026-09-13 · [Open on X](https://x.com/melvindvivas/status/2099097522631557365)

**Topics:** AI Agents, Tool Use & MCP, Prompt & Context Engineering, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator shares the exact prompt he used in DeepSeek Harness with DeepSeek V4.1 Flash (High) to build a 'software factory' UI for managing agents. The run used 231 tool calls and 27.4M tokens and cost only $0.19. The prompt asks for a UI-first approach with React Flow, mock APIs and no database, starting from a list of MVP features.

## Key points

- Model: DeepSeek V4.1 Flash (High) in DeepSeek Harness.
- Run stats: 231 tool calls, 27.4M tokens, $0.19 total cost via the DeepSeek API.
- Prompt strategy: build the UI first, mock the APIs, and add no database yet so you can refine the UI quickly.
- Ask the agent to list the features needed for the initial MVP before building.
- Use React Flow for node/graph-based UIs such as agent workflows.
- The app idea: manage agents that connect to sandboxes (a 'software factory').

## Resources mentioned

- [ ] **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** · repo · github.com · free  
  Open-source (MIT) agent harness with plugins, a trajectory/event-stream view and support for any model.  
  Also in: Getting Started with DeepSeek Harness and the DeepSeek API Platform (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099095411898396688) · [notes](../notes/2026-09-13-getting-started-with-deepseek-harness-and-the-deepseek-api.md)), DeepSeek Harness: Open-Source, Browser-Based Agent for DeepSeek V4.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099001661515813214) · [notes](../notes/2026-09-13-deepseek-harness-open-source-browser-based-agent-for.md)), DeepSeek harness: open-source agent with an inspectable trajectory view (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089963201198964760) · [notes](../notes/2026-08-19-deepseek-harness-open-source-agent-with-an-inspectable.md))
- [ ] **[DeepSeek V4.1 Flash](https://api-docs.deepseek.com/news/news260910/)** · tool · api-docs.deepseek.com · paid  
  A fast DeepSeek language model available through DeepSeek's official API.  
  Also in: DeepSeek 4.1 Flash speed on the official API: about 325 tokens/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099351690545869251) · [notes](../notes/2026-09-14-deepseek-4-1-flash-speed-on-the-official-api-about-325.md)), DeepSeek Harness: Open-Source, Browser-Based Agent for DeepSeek V4.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099001661515813214) · [notes](../notes/2026-09-13-deepseek-harness-open-source-browser-based-agent-for.md)), DeepSeek V4.1 Flash Off-Peak Pricing as a Cheap Fallback Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098992854890942598) · [notes](../notes/2026-09-13-deepseek-v4-1-flash-off-peak-pricing-as-a-cheap-fallback.md)), DeepSeek-V4.1-Flash Released: Smallest, Faster DeepSeek Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097973178786275418) · [notes](../notes/2026-09-10-deepseek-v4-1-flash-released-smallest-faster-deepseek-model.md))
- [ ] **[React Flow](https://reactflow.dev)** · tool · reactflow.dev · free  
  React library for building node-based graph and workflow UIs.

## Try this

- [ ] Use a UI-first prompt with mock APIs and no database to iterate quickly on an MVP.
- [ ] Have the agent list MVP features before it starts building.
- [ ] Build a 'software factory' UI with React Flow that lets teams manage coding agents connected to sandboxes, starting with mock APIs.
