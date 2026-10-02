# Codex Subagents: Astra Orchestrator + Luna Workers, and How to Swap Models

Melvin Vivas · X post · 2026-09-08 · [Open on X](https://x.com/melvindvivas/status/2097174241271812383)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas explains that his Astra Orchestrator + Luna subagents setup for OpenAI Codex doesn't lock you into Luna as the subagent model. He picked Luna to make his usage limits last longer on the Plus plan. On Pro you can switch subagents to Sol, or to Astra on Pro 20x, by changing the standard Codex config and the skill instructions. He suggests setting this up per project rather than globally, because projects differ in complexity.

## Key points

- The repo is a starter setup: Astra (or Sol) is the orchestrator and Luna runs the subagents in Codex. Without it, you'd write the subagent config by hand.
- He chose Luna for subagents because it's the most cost-efficient model, so usage limits last longer on ChatGPT Plus.
- On Pro you can use Sol for subagents, and on Pro 20x even Astra. To switch models, change both the config and the skill instructions that name Luna.
- It's standard Codex config, so you can tweak it, for example by setting a different reasoning level for each subagent model.
- From the quoted post: Luna does cheap work well on simple 'do A, B and C' tasks but sometimes struggles as a subagent when the work needs more reasoning.
- Set the subagent configuration per project, not globally. A global setup forces the same workflow onto every project.
- Planned next step: profiles, meaning preset configs for different subagent/model/reasoning combinations.
- Fork the repo and adapt it. Use the official Codex subagents docs as your reference.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../notes/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../notes/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../notes/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)) and 26 more
- [ ] **[Codex Subagents documentation (Agent Configuration)](https://learn.chatgpt.com/docs/agent-configuration/subagents)** · docs · learn.chatgpt.com · free  
  Official docs on how to configure subagents in Codex.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../notes/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), Picking models for orchestrator and subagent roles in Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103678315274133931) · [notes](../notes/2026-09-26-picking-models-for-orchestrator-and-subagent-roles-in-codex.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../notes/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../notes/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)) and 14 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more

## Try this

- [ ] Fork the codex-astra-luna-orchestrator repo and adapt it to your project.
- [ ] To use a different subagent model (Sol, or Astra on Pro 20x), change both the Codex config and the skill instructions.
- [ ] Adjust the reasoning level for each subagent model if the defaults don't fit your project.
- [ ] Set up the subagent configuration at the project level, not globally.
- [ ] Read the official Codex subagents docs.
- [ ] Build preset Codex profiles for different subagent/model/reasoning combinations and pick one based on how complex the project is.
