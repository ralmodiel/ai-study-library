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
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more
- [ ] **[Hugging Face Spaces](https://huggingface.co/spaces)** · tool · huggingface.co · free  
  Hosted ML apps and demos on the Hugging Face Hub, which agents can call as tools.  
  Also in: Every Hugging Face Space Now Has AGENTS.md for Coding Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2047210633037586848) · [notes](../../notes/07-agents/2026-04-23-every-hugging-face-space-now-has-agents-md-for-coding-agents.md)), Hugging Face Pro Spaces Credits for Image Generation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028185551753695676) · [notes](../../notes/13-ai-tools/2026-03-02-hugging-face-pro-spaces-credits-for-image-generation.md))
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] Connect Hugging Face to Claude Code (for example through Hugging Face's MCP server) and try having it call a Space for a task like image generation or transcription.
- [ ] Browse Hugging Face Spaces to find specialized models your agent could use as tools.
- [ ] Build a Claude Code workflow that hands off specialized subtasks (image generation, speech-to-text, OCR) to Hugging Face Spaces and then combines the results.
