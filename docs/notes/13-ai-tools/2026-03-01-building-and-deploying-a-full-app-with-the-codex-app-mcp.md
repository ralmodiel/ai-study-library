# Building and Deploying a Full App with the Codex App, MCP Servers and Skills

Melvin Vivas · X video post · 2026-03-01 · 3:53 · 199 views · [Open on X](https://x.com/melvindvivas/status/2028108822850773077)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

The video shows a full Codex workflow. It starts from the default Next.js template with an AGENTS.md file and ends with a photo booth app deployed on Vercel in under 30 minutes. Along the way it uses MCP servers (OpenAI Docs, Playwright) and Codex skills (ImageGen, Vercel). It runs a feature as a cloud task while the UI is changed locally, and it switches models depending on the task. The video was reposted by Melvin Vivas from Katia Gil Guzman's X post.

## Key points

- Start from a minimal template (default Next.js) and add an AGENTS.md file that tells Codex the tech stack and which skills and MCP servers to use.
- Give one large, detailed first prompt: the feature (capture or upload a photo, then generate 3 stylized images with the image API) plus the look (vintage pixel art, purple/pink/blue palette).
- The OpenAI Developer Docs MCP lets Codex pull current image API docs so the integration works the first time.
- The Playwright MCP lets Codex open the app, check its own work and test the mobile UI.
- Work in parallel: send a bigger feature (share + explore gallery) to a Codex cloud task while you change the UI locally. Codex asks follow-up questions and builds a plan before starting.
- Pick the model for the job: GPT-5.3 Codex with extra-high reasoning to get it right the first time, and the faster Spark model for quick UI changes.
- Look at cloud task results in Codex Web, compare the versions, and apply the best one to your local code.
- Deploy to Vercel with the Vercel skill. The whole thing went from nothing to a live app in under 30 minutes.

## Resources mentioned

- [ ] **[Katia Gil Guzman (@kagigz) on X – Codex workflow post](https://x.com/kagigz/status/2027444590895063313)** · video · x.com · free  
  The original X post with the video showing how to build and deploy an app with the Codex app.
- [ ] **[Katia Gil Guzman](https://x.com/kagigz)** · person · x.com · free  
  The person who made the original Codex workflow video, worth following for Codex tips.
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Next.js](https://nextjs.org)** · tool · nextjs.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source React framework for building full-stack web apps.  
  Also in: Problem Solving Over Keywords: The AI Skill That Never Expires (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1048528874852440) · [notes](../../notes/15-career/2026-09-24-problem-solving-over-keywords-the-ai-skill-that-never.md)), Is Indie Hacking Dead? How AI Coding Changes the Micro-SaaS Playbook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082811111192367241) · [notes](../../notes/16-trends/2026-07-30-is-indie-hacking-dead-how-ai-coding-changes-the-micro-saas.md))
- [ ] **[AGENTS.md](https://agents.md)** · docs · agents.md · free  
  Instruction file format that gives coding agents project context such as the tech stack, skills and MCP servers.  
  Also in: Claude Code Now Reads AGENTS.md When CLAUDE.md Is Missing (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101108647174750481) · [notes](../../notes/13-ai-tools/2026-09-19-claude-code-now-reads-agents-md-when-claude-md-is-missing.md)), Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../../notes/07-agents/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Updating Skills and AGENTS.md for Astra with OpenAI's Guidance (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098607254622838978) · [notes](../../notes/07-agents/2026-09-12-updating-skills-and-agents-md-for-astra-with-openai-s.md)), How to Prompt GPT-6 Astra in Codex: Simpler Instructions, Leaner AGENTS.md (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098593105276739917) · [notes](../../notes/04-prompting/2026-09-12-how-to-prompt-gpt-6-astra-in-codex-simpler-instructions.md)) and 5 more
- [ ] **[OpenAI Developer Docs MCP server](https://developers.openai.com/learn/docs-mcp)** · tool · developers.openai.com · free  
  MCP server that gives agents access to OpenAI's developer documentation.
- [ ] **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** · repo · github.com · free  
  Microsoft's MCP server that lets AI agents control a browser through Playwright for UI testing and automation.  
  Also in: Parallel Coding Agents with Git Worktrees and Playwright MCP (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056973572007174290) · [notes](../../notes/13-ai-tools/2026-05-20-parallel-coding-agents-with-git-worktrees-and-playwright-mcp.md))
- [ ] **[OpenAI Image API](https://developers.openai.com/api/docs/guides/image-generation)** · tool · developers.openai.com · paid  
  OpenAI's image generation and editing API.
- [ ] **[GPT-5.3 Codex](https://openai.com/index/introducing-gpt-5-3-codex/)** · tool · openai.com · paid  
  OpenAI coding model used here with extra-high reasoning.
- [ ] **[Codex Spark model](https://openai.com/index/introducing-gpt-5-3-codex-spark/)** · tool · openai.com · paid  
  OpenAI model in Codex that the creator finds useful for testing and small changes.  
  Also in: Use Codex GPT-5.3 Spark for Testing and Small Changes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098106498333524274) · [notes](../../notes/13-ai-tools/2026-09-11-use-codex-gpt-5-3-spark-for-testing-and-small-changes.md))
- [ ] **[Codex Web (cloud tasks)](https://chatgpt.com/codex)** · tool · chatgpt.com · check price  
  Web interface for running Codex cloud tasks and previewing their results.
- [ ] **[Vercel](https://x.com/vercel)** · tool · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Vercel's unified gateway for many LLM providers; the source of the open vs closed token-volume stats.  
  Also in: OpenAI DevDay 2026 Recap: Dots, Agents API, Codex Cloud & Marketplace (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105173002740695356) · [notes](../../notes/16-trends/2026-09-30-openai-devday-2026-recap-dots-agents-api-codex-cloud.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), Jev model added to the AIBackends API via Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101199012615561488) · [notes](../../notes/09-llmops/2026-09-19-jev-model-added-to-the-aibackends-api-via-vercel-ai-gateway.md)), Open models now dominate token volume on Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101188319703134335) · [notes](../../notes/16-trends/2026-09-19-open-models-now-dominate-token-volume-on-vercel-ai-gateway.md)) and 7 more
- [ ] **[Codex ImageGen skill](https://github.com/openai/skills/tree/main/skills/.system/imagegen)** · tool · github.com · free  
  Codex skill for image generation work.
- [ ] **[Codex Vercel skill](https://github.com/openai/skills/blob/main/skills/.curated/vercel-deploy/SKILL.md)** · tool · github.com · free  
  Codex skill for deploying apps to Vercel.

## Try this

- [ ] Add an AGENTS.md file to your project that lists the tech stack, skills and MCP servers Codex should use.
- [ ] Connect the OpenAI Docs and Playwright MCP servers so Codex can look things up and test its own UI.
- [ ] Send larger features to Codex cloud tasks while you make UI changes locally.
- [ ] Use a high-reasoning model for the first build and a fast model (Spark) for small UI changes.
- [ ] Deploy with the Vercel skill.
- [ ] An AI photo booth: capture or upload a photo, generate 3 stylized versions with the OpenAI image API in a vintage pixel art style, add download/share, and an explore gallery of shared photos with nicknames.
