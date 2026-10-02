# Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents

Melvin Vivas · X post · 2026-09-23 · [Open on X](https://x.com/melvindvivas/status/2102622261295661558)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas shares v0.2.1 of his open-source Codex orchestrator setup. In this setup a stronger GPT-6 model (Astra or Sol) acts as the orchestrator and hands work to GPT-6 Luna subagents. He invites people to fork the repo and adapt it into their own multi-agent coding setup.

## Key points

- Version 0.2.1 adds 2 new GPT-6 profiles that use Sol as the orchestrator.
- All subagents were upgraded to GPT-6 Luna.
- Pattern: a capable model plans and delegates, while subagents run on a different model (Luna) to do the work.
- The setup runs inside OpenAI Codex using profiles and subagents.
- The repo is open to fork so you can build your own orchestrator and subagent setup.

## Resources mentioned

- [ ] **[donvito/codex-astra-luna-orchestrator](https://github.com/donvito/codex-astra-luna-orchestrator)** · repo · github.com · free  
  The creator's Codex skill for an orchestrator-plus-subagents setup (Astra orchestrator, Luna subagents), configured through config.toml.  
  Also in: Open-source Codex skill: Astra/Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103661831214846312) · [notes](../notes/2026-09-26-open-source-codex-skill-astra-sol-orchestrator-with-luna.md)), Cost-Efficient Codex Subagents: Astra/Sol Orchestrator + Luna Workers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103516418117718313) · [notes](../notes/2026-09-26-cost-efficient-codex-subagents-astra-sol-orchestrator-luna.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Codex orchestrator + subagents setup with configurable profiles (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100098330407936019) · [notes](../notes/2026-09-16-codex-orchestrator-subagents-setup-with-configurable.md)) and 26 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../notes/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), Picking models for orchestrator and subagent roles in Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103678315274133931) · [notes](../notes/2026-09-26-picking-models-for-orchestrator-and-subagent-roles-in-codex.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../notes/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../notes/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)) and 14 more
- [ ] **[GPT-6 Luna](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925)** · tool · community.openai.com · paid  
  An OpenAI model aimed at fast, high-volume classification and routing.  
  Also in: DigitalOcean Serverless Inference Now Serves OpenAI GPT-6 Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102970848785363330) · [notes](../notes/2026-09-24-digitalocean-serverless-inference-now-serves-openai-gpt-6.md)), DeepSWE results: GPT-6 Sol slightly below GPT-5.6 Sol, but cheaper (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102570691870753159) · [notes](../notes/2026-09-23-deepswe-results-gpt-6-sol-slightly-below-gpt-5-6-sol-but.md)), OpenAI Releases GPT-6 Sol and GPT-6 Luna (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102463755343077670) · [notes](../notes/2026-09-23-openai-releases-gpt-6-sol-and-gpt-6-luna.md))

## Try this

- [ ] Fork the codex-astra-luna-orchestrator repo and adapt it into your own orchestrator and subagent setup.
- [ ] Build a Codex multi-agent setup where one strong model orchestrates and cheaper or faster subagent models do the work.
