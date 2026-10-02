# AEvo: Splitting the Agent Self-Improvement Loop in Two

Melvin Vivas · X post · 2026-05-15 · [Open on X](https://x.com/melvindvivas/status/2055029548153278510)

**Topics:** AI Agents, Tool Use & MCP · **Level:** advanced

## Summary

The post covers AEvo ("Harnessing Agentic Evolution"), which splits an iterative agentic search and self-improvement loop into two roles. One agent proposes the next candidate. The other watches what worked and what failed, then edits the procedure itself. It is relevant if you build iterative agentic search loops.

## Key points

- Role 1: a proposer generates the next candidate solution
- Role 2: a meta-agent reviews successes and failures and rewrites the search procedure
- Separating proposing from procedure-editing helps iterative search loops improve themselves
- Useful for anyone running iterative agentic search or optimization loops

## Resources mentioned

- [ ] **[Harnessing Agentic Evolution (AEvo)](https://arxiv.org/abs/2605.13821)** · paper · arxiv.org · free  
  Framework that splits agent self-improvement into a candidate proposer and a procedure-editing observer.

## Try this

- [ ] Bookmark and read the AEvo work if you build iterative agentic search loops
- [ ] Build a two-agent loop: one agent proposes solutions, the other reviews results and rewrites the proposer's procedure
