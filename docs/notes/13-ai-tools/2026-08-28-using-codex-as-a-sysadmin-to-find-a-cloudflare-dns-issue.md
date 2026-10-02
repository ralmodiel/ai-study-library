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
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Cloudflare](https://x.com/Cloudflare)** · tool · x.com · check price  
  Cloud platform listed as a supported BYOS sandbox provider.  
  Also in: OpenAI Agents API with Bring Your Own Sandbox as a backend for a 'software factory' (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098729077163401577) · [notes](../../notes/07-agents/2026-09-12-openai-agents-api-with-bring-your-own-sandbox-as-a-backend.md))
- [ ] **[AWS Application Load Balancer (ALB)](https://aws.amazon.com/elasticloadbalancing/application-load-balancer/)** · tool · aws.amazon.com · paid  
  AWS's managed load balancer for HTTP and HTTPS traffic.
