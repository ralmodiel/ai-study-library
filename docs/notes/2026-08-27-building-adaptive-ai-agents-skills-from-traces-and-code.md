# Building Adaptive AI Agents: Skills from Traces and Code Knowledge Graphs

Melvin Vivas · X video post · 2026-08-27 · 2:07 · 109 views · [Open on X](https://x.com/melvindvivas/status/2092968683140489349)

**Topics:** AI Agents, Tool Use & MCP, Retrieval-Augmented Generation (RAG), Prompt & Context Engineering · **Level:** intermediate

## Summary

Melvin Vivas shares the trailer for "Building Adaptive AI Agents," a course built with Oracle and introduced by Andrew Ng. It covers two ways a coding agent can improve between sessions. Behavioral adaptation turns the agent's own traces into reusable skills that a human approves. Knowledge adaptation builds a code knowledge graph that updates as the code changes and finds relevant context that keyword search misses.

## Key points

- The problem: agents forget between sessions. A coding agent that spends minutes fixing an environment issue today may repeat the whole process tomorrow, which wastes tokens and time and repeats mistakes.
- Behavioral adaptation: turn the agent's traces (conversations, tool calls, errors and fixes) into reusable 'enhanced skills'.
- A human approves new skills before the agent uses them the next time it meets the same task.
- Knowledge adaptation: build a code knowledge graph that links files through imports, function calls, past changes and co-edits in the repo.
- The agent follows relationships in the graph instead of relying only on keyword search, so it finds the right context more efficiently.
- The graph updates whenever code changes or a new function or file is added, so it is ready for the next retrieval.
- Context Hub, an open-source package from Andrew Ng and collaborators, solves another kind of adaptation problem by letting different agents learn from each other.

## Resources mentioned

- [ ] **[Building Adaptive AI Agents](https://www.deeplearning.ai/courses/building-adaptive-ai-agents)** · course · deeplearning.ai · free  
  A course on agents that learn from experience: turning their traces into reusable skills and building a code knowledge graph for retrieval.
- [ ] **[Context Hub](https://github.com/andrewyng/context-hub)** · repo · github.com · free  
  An open-source package from Andrew Ng and collaborators that lets different agents learn from each other.
- [ ] **[Andrew Ng](https://x.com/AndrewYNg)** · person · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  A leading AI researcher and educator whose view is that more people should learn to code as AI tools improve.  
  Also in: Andrew Ng Says Keep Learning to Code, but Learn the Modern Way (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1753855412528762) · [notes](../notes/2026-09-14-andrew-ng-says-keep-learning-to-code-but-learn-the-modern.md)), Andrew Ng's AI Engineering Skills Map (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091396934225592476) · [notes](../notes/2026-08-23-andrew-ng-s-ai-engineering-skills-map.md)), Andrew Ng on how anyone can become an AI Engineer (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091396929771204880) · [notes](../notes/2026-08-23-andrew-ng-on-how-anyone-can-become-an-ai-engineer.md))
- [ ] **[Nacho Matinas](https://www.linkedin.com/in/jasperan/)** · person · linkedin.com · free · open in a browser to verify  
  Co-instructor of Building Adaptive AI Agents (name as it appears in the machine transcript).
- [ ] **[Cassius Lee](https://blogs.oracle.com/authors/casiuslee/)** · person · blogs.oracle.com · free · open in a browser to verify  
  Co-instructor of Building Adaptive AI Agents (name as it appears in the machine transcript).

## Try this

- [ ] Look up the Building Adaptive AI Agents course and add it to your watchlist.
- [ ] Look up the open-source Context Hub package to see how agents can share what they learn.
- [ ] Build a pipeline that turns a coding agent's traces (tool calls, errors, fixes) into reusable skills that a human approves before reuse.
- [ ] Build a code knowledge graph of a repository (imports, function calls, change history, co-edits) that updates automatically, and use it for agent context retrieval instead of keyword search.
