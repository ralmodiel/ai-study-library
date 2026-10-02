# Prime Agent: A Self-Improving RLM Coding Harness That Calls Tools in Code

Melvin Vivas · X video post · 2026-08-06 · 0:44 · 79 views · [Open on X](https://x.com/melvindvivas/status/2085171156454416686)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** advanced

## Summary

Melvin Vivas shares a launch post for Prime Agent, a general-purpose harness for coding and long-running autonomous tasks built on the recursive language model (RLM) idea. Tools and recursive sub-agents run as code, context is held as a variable, agents send messages to each other in code, and the harness can change its own state. The announcement says it scored 95.5% on the ARC-AGI-3 benchmark, beating the human baseline and earlier native coding harnesses. That number comes from the launch post and hasn't been independently checked.

## Key points

- Prime Agent is described as a self-improving RLM (recursive language model) harness for coding and long-running autonomous tasks.
- Programmatic tool calling: all tools and recursive sub-agents run in code, not as one JSON tool call at a time. This aims to save tokens while staying expressive.
- 'Context as a variable': the agent works with its context through code, so it doesn't have to load everything into the prompt.
- Multi-agent messaging: agents talk to each other in code.
- Self-modifiable harness state: the harness can modify and improve itself.
- The launch claims a 95.5% score on ARC-AGI-3, a benchmark the harness wasn't built for. That would beat the human baseline and all earlier native coding harnesses. The claim comes from the announcement itself and hasn't been independently verified.
- Main lesson: the harness design (how tools, context and sub-agents are organized) can matter as much as the model for agent performance.

## Resources mentioned

- [ ] **[Prime Agent](https://www.primeintellect.ai/blog/prime-agent)** · tool · primeintellect.ai · free  
  A self-improving RLM harness for coding and autonomous tasks, with programmatic tool calling, context held as a variable, multi-agent messaging and a harness that can modify itself.  
  Also in: Prime Agent: A Self-Improving RLM Coding Harness with Code-Based Tool Calls (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085591693332713955) · [notes](../../notes/07-agents/2026-08-07-prime-agent-a-self-improving-rlm-coding-harness-with-code.md))
- [ ] **[ARC-AGI-3](https://arcprize.org)** · dataset · arcprize.org · free  
  A benchmark from the ARC Prize that tests an AI agent's general reasoning and adaptation in interactive tasks.  
  Also in: Prime Agent: A Self-Improving RLM Coding Harness with Code-Based Tool Calls (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085591693332713955) · [notes](../../notes/07-agents/2026-08-07-prime-agent-a-self-improving-rlm-coding-harness-with-code.md))

## Try this

- [ ] Try Prime Agent (the video ends with 'Try it out').
- [ ] Compare its programmatic tool calling and 'context as a variable' approach with the standard JSON tool-calling agent loop.
