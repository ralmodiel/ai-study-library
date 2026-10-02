# Calling Hugging Face Spaces from Claude Code as Agent Tools

Melvin Vivas · X video post · 2026-04-19 · 0:23 · 89 views · [Open on X](https://x.com/melvindvivas/status/2045762590799007841)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

A short demo post (no narration) showing Claude Code calling Hugging Face Spaces directly as tools. The quoted Hugging Face post says the Hub is becoming a platform where agents use and build AI. Agents can now reach about 1M Spaces and use the specialized models hosted there, such as image, audio and vision models, without you writing the integration code.

## Key points

- Hugging Face Spaces (hosted ML demo apps) can be called as tools by a coding agent like Claude Code.
- Per the quoted post, agents can call roughly 1M HF Spaces, which gives them the abilities of the latest specialized models (image generation, speech, OCR, vision and so on).
- Hugging Face presents itself as a platform where agents both use AI and build it, not only a place for humans to browse models.
- Practical effect: instead of wiring up each model API yourself, you let Claude Code find and call a Space that already does the task.
- The video has no speech, and the post doesn't explain the setup. In practice this kind of integration is usually done through Hugging Face's MCP server connected to Claude Code; check the HF docs for the current setup steps.
- Free Spaces can be slow or rate-limited (shared hardware, queues, ZeroGPU quotas), so expect some variance when an agent calls them.

## Resources mentioned

- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Hugging Face Cache Deduplication with Xet in huggingface\_hub v1.32 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100983401818046770) · [notes](../notes/2026-09-19-hugging-face-cache-deduplication-with-xet-in-huggingface.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)) and 34 more
- [ ] **[Hugging Face Spaces](https://huggingface.co/spaces)** · tool · huggingface.co · free  
  Hosted ML apps and demos on the Hugging Face Hub, which agents can call as tools.  
  Also in: Every Hugging Face Space Now Has AGENTS.md for Coding Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2047210633037586848) · [notes](../notes/2026-04-23-every-hugging-face-space-now-has-agents-md-for-coding-agents.md)), Hugging Face Pro Spaces Credits for Image Generation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028185551753695676) · [notes](../notes/2026-03-02-hugging-face-pro-spaces-credits-for-image-generation.md))
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more

## Try this

- [ ] Connect Hugging Face to Claude Code (for example through Hugging Face's MCP server) and try having it call a Space for a task like image generation or transcription.
- [ ] Browse Hugging Face Spaces to find specialized models your agent could use as tools.
- [ ] Build a Claude Code workflow that hands off specialized subtasks (image generation, speech-to-text, OCR) to Hugging Face Spaces and then combines the results.
