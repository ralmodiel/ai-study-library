# Using Codex as a Sysadmin to Find a Cloudflare DNS Issue

Melvin Vivas · X post · 2026-08-28 · [Open on X](https://x.com/melvindvivas/status/2093350177038021044)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator used OpenAI Codex to look into a slow website. Codex found that the cause was a DNS configuration problem between Cloudflare and an AWS Application Load Balancer. The example shows coding agents being used for infrastructure troubleshooting, not just writing code.

## Key points

- Symptom: a website was slow to respond.
- Codex traced the cause to a DNS config issue in Cloudflare pointing to an AWS ALB.
- Coding agents can work as sysadmin helpers for diagnosing infrastructure problems.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Cloudflare](https://x.com/Cloudflare)** · tool · x.com · check price  
  Cloud platform listed as a supported BYOS sandbox provider.  
  Also in: OpenAI Agents API with Bring Your Own Sandbox as a backend for a 'software factory' (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098729077163401577) · [notes](../notes/2026-09-12-openai-agents-api-with-bring-your-own-sandbox-as-a-backend.md))
- [ ] **[AWS Application Load Balancer (ALB)](https://aws.amazon.com/elasticloadbalancing/application-load-balancer/)** · tool · aws.amazon.com · paid  
  AWS's managed load balancer for HTTP and HTTPS traffic.
