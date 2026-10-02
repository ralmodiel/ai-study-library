# Run Codex in the Cloud: Spin Up DigitalOcean Droplets with the Codex Plugin

Melvin Vivas · X video post · 2026-06-26 · 1:35 · 214 views · [Open on X](https://x.com/melvindvivas/status/2070417052180078667)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** beginner

## Summary

A short demo of the DigitalOcean plugin for OpenAI Codex. It lets you create a persistent cloud dev environment (a DigitalOcean Droplet VM) with a single prompt. Codex then runs its agent on that VM, so long or complex tasks keep going after you close your laptop. The video walks through installing the plugin, creating a Droplet, connecting, using the built-in terminal and moving tasks between your local machine and the VM.

## Key points

- Problem: long or complex Codex tasks are limited when they run on your laptop. Moving them to a cloud VM lets them keep running while you're away.
- Step 1: install the DigitalOcean plugin in the Codex app, then sign in with your DigitalOcean account (or create one).
- Step 2: ask Codex in plain language to spin up a new Droplet. A Droplet is DigitalOcean's name for a VM. Setup can take a few minutes.
- Droplets created by the plugin come with common dev tools like Node.js and Python, and the plugin sets up the SSH credentials for you.
- Step 3: sign in with your ChatGPT account on the Droplet so Codex can connect to the VM automatically.
- Once connected, you can ask Codex to set up an existing project or start a new one on the VM. The creator uses this for overnight tasks that run in Goal mode.
- Codex's built-in terminal connects to the Droplet over SSH automatically, so you can run commands, install dependencies or change the VM's configuration.
- If the same project exists on your local machine and on the VM, you can move a task you're working on from one to the other.

## Resources mentioned

- [ ] **[DigitalOcean (@digitalocean) on X](https://x.com/digitalocean)** · website · x.com · free  
  DigitalOcean's official X account, which posts product announcements like the Codex plugin.
- [ ] **[DigitalOcean plugin for Codex](https://www.digitalocean.com/blog/run-codex-in-the-cloud)** · tool · digitalocean.com · paid  
  A Codex plugin that creates and manages DigitalOcean Droplets that run the Codex agent as persistent cloud dev environments.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[DigitalOcean Droplets](https://www.digitalocean.com/products/droplets)** · tool · digitalocean.com · paid  
  DigitalOcean's virtual machines, used here as cloud dev environments for Codex.
- [ ] **[ChatGPT](https://chatgpt.com/)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's AI assistant (web, desktop and mobile apps), used for chat, coding, writing and image generation.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Dots Demo: A Voice AI Agent Handling Travel Booking and Feedback Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105717848928866390) · [notes](../../notes/07-agents/2026-10-01-dots-demo-a-voice-ai-agent-handling-travel-booking-and.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../../notes/13-ai-tools/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../../notes/07-agents/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)) and 23 more
- [ ] **[Codex Goal mode](https://developers.openai.com/codex/use-cases/follow-goals/)** · tool · developers.openai.com · paid  
  A Codex mode for long-running tasks aimed at a goal, which the creator runs on cloud VMs.
- [ ] **[Node.js](https://nodejs.org)** · tool · nodejs.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  A JavaScript runtime that comes preinstalled on Droplets created by the plugin.  
  Also in: Problem Solving Over Keywords: The AI Skill That Never Expires (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1048528874852440) · [notes](../../notes/15-career/2026-09-24-problem-solving-over-keywords-the-ai-skill-that-never.md))
- [ ] **[Python](https://www.python.org)** · tool · python.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  A programming language that comes preinstalled on Droplets created by the plugin.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../../notes/15-career/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md))

## Try this

- [ ] Install the DigitalOcean plugin in the Codex app and sign in with (or create) a DigitalOcean account.
- [ ] Ask Codex to spin up a new Droplet, and wait a few minutes for it to be set up.
- [ ] Sign in with your ChatGPT account so Codex connects to the VM automatically.
- [ ] Ask Codex to set up an existing project on the VM, or start a new one there.
- [ ] Use Codex's built-in terminal to run commands, install dependencies or configure the Droplet.
- [ ] Move a task from your local machine to the VM once the same project exists on both.
- [ ] Give it a try.
- [ ] Set up a persistent cloud dev environment on a DigitalOcean Droplet where Codex runs long tasks in Goal mode overnight, without your laptop.
