# Subagents with mixed models: a strong planner and a fast executor

Melvin Vivas · X post · 2026-09-13 · [Open on X](https://x.com/melvindvivas/status/2098828475868332304)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator shares a post saying fx.sh can now run subagents that use different models and reasoning efforts. The example uses Fable as the planner and Grok as the fast executor. You can set this up in AGENTS.md or in your prompt, and you can steer the agents while they run.

## Key points

- fx.sh can run subagents, each with its own model and reasoning effort.
- Pattern: a strong reasoning model plans and a fast, cheaper model does the work (e.g., Fable plans, Grok executes).
- You can set the model preference in an AGENTS.md file or directly in your prompt.
- You can steer the subagents while they run.

## Resources mentioned

- [ ] **[fx.sh](https://fx.sh/)** · tool · fx.sh · free  
  Coding-agent tool that runs subagents with different models and reasoning efforts.
- [ ] **[AGENTS.md](https://agents.md)** · docs · agents.md · free  
  Instruction file format that gives coding agents project context such as the tech stack, skills and MCP servers.  
  Also in: Claude Code Now Reads AGENTS.md When CLAUDE.md Is Missing (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101108647174750481) · [notes](../../notes/13-ai-tools/2026-09-19-claude-code-now-reads-agents-md-when-claude-md-is-missing.md)), Updating Skills and AGENTS.md for Astra with OpenAI's Guidance (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098607254622838978) · [notes](../../notes/07-agents/2026-09-12-updating-skills-and-agents-md-for-astra-with-openai-s.md)), How to Prompt GPT-6 Astra in Codex: Simpler Instructions, Leaner AGENTS.md (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098593105276739917) · [notes](../../notes/04-prompting/2026-09-12-how-to-prompt-gpt-6-astra-in-codex-simpler-instructions.md)), OpenAI Guide: Rethinking Skills and Prompts for GPT-6 Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098482107983249916) · [notes](../../notes/04-prompting/2026-09-12-openai-guide-rethinking-skills-and-prompts-for-gpt-6-astra.md)) and 5 more
- [ ] **[Fable](https://www.anthropic.com/claude/fable)** · tool · anthropic.com · paid  
  Named as what the creator used with Devin for this build; the post gives no details about what it is.  
  Also in: Demo: One-Shotting a Flappy Bird iPhone App with Devin and Fable 5.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100633836480798746) · [notes](../../notes/13-ai-tools/2026-09-18-demo-one-shotting-a-flappy-bird-iphone-app-with-devin-and.md)), Cognition's SWE-2 Coding Model Now in Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098135543259541847) · [notes](../../notes/13-ai-tools/2026-09-11-cognition-s-swe-2-coding-model-now-in-devin.md)), GPT-6 Astra Access Across Plans vs Fable on Claude Max (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095860011062952272) · [notes](../../notes/16-trends/2026-09-04-gpt-6-astra-access-across-plans-vs-fable-on-claude-max.md)), Cutting AI Coding Costs by Routing Most Work to Commodity Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092966735829995956) · [notes](../../notes/13-ai-tools/2026-08-27-cutting-ai-coding-costs-by-routing-most-work-to-commodity.md)) and 10 more
- [ ] **[Grok](https://x.com/grok)** · tool · x.com · free  
  xAI's AI assistant. Here it is used as a terminal coding agent that also runs with the 'agent' alias.  
  Also in: OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../../notes/07-agents/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Grok Team Bots: Shared AI Teammates in Slack and Grok (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104743446116552838) · [notes](../../notes/07-agents/2026-09-29-grok-team-bots-shared-ai-teammates-in-slack-and-grok.md)), Cue by Manus: A New Rival to the Grok Bot on X (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104635050809807248) · [notes](../../notes/13-ai-tools/2026-09-29-cue-by-manus-a-new-rival-to-the-grok-bot-on-x.md)), How to Grow an X (Twitter) Account: 9 Practical Tips from Melvin Vivas (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103672859919110290) · [notes](../../notes/15-career/2026-09-26-how-to-grow-an-x-twitter-account-9-practical-tips-from.md)) and 14 more

## Try this

- [ ] Try having a strong model plan and a fast model execute in your coding-agent setup.
- [ ] Write your model preferences in AGENTS.md or in your prompt.
