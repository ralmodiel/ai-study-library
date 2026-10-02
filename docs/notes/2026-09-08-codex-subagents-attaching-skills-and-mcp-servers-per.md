# Codex Subagents: Attaching Skills and MCP Servers per Subagent

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097188410414989759)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

In OpenAI Codex's subagent configuration, you can set Skills and MCP servers for each subagent separately, not just globally. The creator is testing a frontend subagent with a design skill to replace a separate design tool (Claude Design), and asks for good design skills to try.

## Key points

- Codex subagent config lets you set Skills per subagent
- MCP servers can also be set per subagent
- Pattern: give a specialized subagent (e.g. frontend) its own domain skill, such as a design skill
- Scoping tools and skills per subagent can stand in for separate specialized products

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)** · tool · anthropic.com · paid  
  Anthropic Labs tool that creates prototypes, slides and one-pagers when you describe them to Claude in chat.  
  Also in: Improving Codex's UI Design Output with Impeccable (npx impeccable install) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099461245502140808) · [notes](../notes/2026-09-14-improving-codex-s-ui-design-output-with-impeccable-npx.md)), AutoDesign: Improving the Harness Around the Model with a Meta-Harness Loop (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089692130348601367) · [notes](../notes/2026-08-18-autodesign-improving-the-harness-around-the-model-with-a.md)), Claude Code's /design Skill: Pick UI Artboards, Then Have Claude Build One (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089542030812909989) · [notes](../notes/2026-08-18-claude-code-s-design-skill-pick-ui-artboards-then-have.md)), Claude Design Is Now in the Claude Desktop App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067515064844988600) · [notes](../notes/2026-06-18-claude-design-is-now-in-the-claude-desktop-app.md)) and 4 more

## Try this

- [ ] Set up a frontend subagent in Codex with a design skill and the MCP servers it needs
- [ ] Build a frontend subagent in Codex with its own design skill and MCP tools
