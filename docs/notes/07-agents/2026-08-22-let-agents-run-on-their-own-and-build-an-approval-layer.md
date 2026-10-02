# Let agents run on their own and build an approval layer

Melvin Vivas · X post · 2026-08-22 · [Open on X](https://x.com/melvindvivas/status/2091096990461603910)

**Topics:** AI Agents, Tool Use & MCP, AI System Design & Architecture · **Level:** intermediate

## Summary

The creator argues that for most work tasks, AI agents should run on their own instead of being watched step by step. When a human needs to sign off, build a separate approval step into the system rather than supervising the agent by hand.

## Key points

- Unless a task is critical, let the AI agent finish the work by itself.
- If human sign-off is needed, build it as a separate human-in-the-loop step in the workflow.
- Don't babysit agents. Constant manual supervision turns the agent back into a simple tool.
- The value of agents comes from autonomy, not from being one more tool a person operates.

## Try this

- [ ] Decide which agent tasks are critical and need human approval, and which can run fully on their own.
- [ ] Add a dedicated approval step (e.g., approve/reject requests) to your agent workflow instead of watching it manually.
- [ ] Build a human-in-the-loop approval service that pauses agent actions until someone approves or rejects them.
