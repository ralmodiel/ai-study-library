# Prime Agent: A Self-Improving RLM Coding Harness with Code-Based Tool Calls

Melvin Vivas · X video post · 2026-08-07 · 0:44 · 211 views · [Open on X](https://x.com/melvindvivas/status/2085591693332713955)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity, Evaluation (Evals) & Testing · **Level:** advanced

## Summary

Melvin Vivas shares the launch video for Prime Agent and says he'd like ThePrimeagen to endorse it. Prime Agent is a general-purpose harness for coding and long-running autonomous tasks, built on recursive language model (RLM) ideas. All tools and recursive sub-agents run as code, context is held in a variable, agents message each other in code, and the harness can change itself. Its makers say it scored 95.5% on ARC-AGI-3, beating the human baseline. This score comes only from the launch video and has not been independently checked.

## Key points

- Prime Agent is described as a self-improving RLM (recursive language model) harness for coding and long-running autonomous tasks.
- Programmatic tool calling: every tool call and every recursive sub-agent runs as code, not as separate one-at-a-time tool-call messages. The goal is to use fewer tokens while staying expressive.
- Context as a variable: the agent keeps context in a variable it works with through code, instead of putting all of it into the prompt.
- Multi-agent messaging: agents talk to each other in code.
- Self-modifiable harness state: the harness can change and improve its own setup.
- Its makers say it was run on ARC-AGI-3, a benchmark it was not built for, and scored 95.5%. They say this beats the human baseline and all earlier native coding harnesses. Treat this as a launch claim, not a verified result.
- Design lesson: putting tool calls, sub-agents and context handling into code is a growing way to save tokens in agent harnesses.

## Resources mentioned

- [ ] **[Prime Agent](https://www.primeintellect.ai/blog/prime-agent)** · tool · primeintellect.ai · free  
  A self-improving RLM harness for coding and autonomous tasks, with programmatic tool calling, context held as a variable, multi-agent messaging and a harness that can modify itself.  
  Also in: Prime Agent: A Self-Improving RLM Coding Harness That Calls Tools in Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085171156454416686) · [notes](../../notes/07-agents/2026-08-06-prime-agent-a-self-improving-rlm-coding-harness-that-calls.md))
- [ ] **[ARC-AGI-3](https://arcprize.org)** · dataset · arcprize.org · free  
  A benchmark from the ARC Prize that tests an AI agent's general reasoning and adaptation in interactive tasks.  
  Also in: Prime Agent: A Self-Improving RLM Coding Harness That Calls Tools in Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085171156454416686) · [notes](../../notes/07-agents/2026-08-06-prime-agent-a-self-improving-rlm-coding-harness-that-calls.md))
- [ ] **[ThePrimeagen (@ThePrimeagen) on X](https://x.com/ThePrimeagen)** · person · x.com · free  
  A popular developer and streamer who talks about programming and developer tools.

## Try this

- [ ] Try Prime Agent, as the launch video suggests.
- [ ] Look up how programmatic tool calling and context-as-a-variable (RLM-style) harnesses work.
- [ ] Check ARC-AGI-3 on the ARC Prize site to see what the benchmark measures, and verify the claimed score.
