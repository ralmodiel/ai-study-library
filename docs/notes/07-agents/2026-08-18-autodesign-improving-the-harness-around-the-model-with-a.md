# AutoDesign: Improving the Harness Around the Model with a Meta-Harness Loop

Melvin Vivas · X post · 2026-08-18 · [Open on X](https://x.com/melvindvivas/status/2089692130348601367)

**Topics:** AI Agents, Tool Use & MCP, Industry Trends & Job Market · **Level:** advanced

## Summary

The creator shares the AutoDesign paper, which reports surpassing Claude Design. AutoDesign has agents improve the system around the model (the harness) instead of the model weights. It uses two loops: an inner loop that fixes the current design artifact, and an outer meta-harness loop that learns across runs.

## Key points

- AutoDesign optimizes the agent harness, not the model weights.
- Inner loop: fixes the current artifact the agent is designing.
- Outer meta-harness loop: learns from earlier runs to improve the harness itself.
- It targets long-horizon agentic design tasks.
- It is described as self-learning and as surpassing Claude Design.

## Resources mentioned

- [ ] **[AutoDesign (automated e-commerce poster design)](https://arxiv.org/abs/2608.13560)** · paper · arxiv.org · free  
  A paper on improving an agent's harness through an inner fix loop and an outer meta-harness learning loop, applied to long-horizon design.  
  Also in: Paperscrolling: Browse Trending AI Research Papers Like a Social Feed (alphaXiv) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090100050982777186) · [notes](../../notes/16-trends/2026-08-19-paperscrolling-browse-trending-ai-research-papers-like-a.md))
- [ ] **[Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)** · tool · anthropic.com · paid  
  Anthropic Labs tool that creates prototypes, slides and one-pagers when you describe them to Claude in chat.  
  Also in: Improving Codex's UI Design Output with Impeccable (npx impeccable install) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099461245502140808) · [notes](../../notes/13-ai-tools/2026-09-14-improving-codex-s-ui-design-output-with-impeccable-npx.md)), Codex Subagents: Attaching Skills and MCP Servers per Subagent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097188410414989759) · [notes](../../notes/07-agents/2026-09-08-codex-subagents-attaching-skills-and-mcp-servers-per.md)), Claude Code's /design Skill: Pick UI Artboards, Then Have Claude Build One (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089542030812909989) · [notes](../../notes/13-ai-tools/2026-08-18-claude-code-s-design-skill-pick-ui-artboards-then-have.md)), Claude Design Is Now in the Claude Desktop App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067515064844988600) · [notes](../../notes/13-ai-tools/2026-06-18-claude-design-is-now-in-the-claude-desktop-app.md)) and 4 more

## Try this

- [ ] Look up and read the AutoDesign meta-harness paper.
- [ ] Build an agent with an inner loop that fixes its output and an outer loop that tunes its own prompts and tools across runs.
