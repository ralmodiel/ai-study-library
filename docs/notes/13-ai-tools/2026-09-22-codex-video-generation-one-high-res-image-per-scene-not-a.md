# Codex Video Generation: One High-Res Image Per Scene, Not a Cropped Grid

Melvin Vivas · X video post · 2026-09-22 · 0:13 · 1,183 views · [Open on X](https://x.com/melvindvivas/status/2102302119495885150)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** beginner

## Summary

This is a 13-second X post with no speech. Melvin Vivas reflects on a video he made with OpenAI's Codex. Codex made one grid image and cut each scene out of it, so every scene came out low-resolution. His lesson is to make one high-res image per scene, and to put that in your instructions instead of trusting the agent (he names "Astra ultra") to work it out.

## Key points

- When an AI coding agent like Codex builds a multi-scene video, cutting scenes out of one grid image makes each scene low-resolution.
- Better: generate a separate high-res image for each scene.
- Even a strong model or setting (the creator names 'Astra ultra') may not choose the better approach by itself. State the image-generation strategy in your prompt.
- The creator plans to rework the video once his usage limits reset, so expect to iterate on agent output.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[Astra ultra](https://openai.com/index/gpt-6-astra-next-generation-work/)** · tool · openai.com · free  
  The AI assistant or model ("Ultra" tier or mode) the creator prompted to build the interface. The post doesn't say exactly what it is.  
  Also in: Read the GPT-6 Astra launch article to learn what the model can do (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098766037890318842) · [notes](../../notes/03-llm-fundamentals/2026-09-12-read-the-gpt-6-astra-launch-article-to-learn-what-the-model.md)), OpenAI Agents API with Bring Your Own Sandbox as a backend for a 'software factory' (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098729077163401577) · [notes](../../notes/07-agents/2026-09-12-openai-agents-api-with-bring-your-own-sandbox-as-a-backend.md)), Demo: AI Coding Agent Generates a "Software Factory" UI (Frontend Only) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098693326820286944) · [notes](../../notes/13-ai-tools/2026-09-12-demo-ai-coding-agent-generates-a-software-factory-ui.md))

## Try this

- [ ] When you ask an agent to make multi-scene visuals, tell it to generate one high-res image per scene instead of cropping scenes from a grid.
- [ ] Have Codex build a short multi-scene video, with one high-res image generated for each scene.
