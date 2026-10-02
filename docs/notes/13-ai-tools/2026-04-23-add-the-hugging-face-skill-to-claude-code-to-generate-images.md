# Add the Hugging Face Skill to Claude Code to Generate Images

Melvin Vivas · X post · 2026-04-23 · [Open on X](https://x.com/melvindvivas/status/2046999026898457009)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

Installing the Hugging Face skills lets Claude Code generate images. The post gives the one-line hf CLI command that installs the skills into Claude Code globally.

## Key points

- Install command: hf skills add --claude --global
- The --claude flag installs the skills into Claude Code; --global makes them available in all projects.
- Once installed, Claude Code can generate images through Hugging Face.

## Resources mentioned

- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)) and 38 more
- [ ] **[Hugging Face CLI (hf) skills](https://github.com/huggingface/skills)** · tool · github.com · free  
  The hf command-line tool, which can install Hugging Face skills into Claude Code.  
  Also in: Hugging Face hf CLI Skill in Claude Code for Pushing Datasets (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046952007576240494) · [notes](../../notes/13-ai-tools/2026-04-22-hugging-face-hf-cli-skill-in-claude-code-for-pushing.md))
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Create Claude Code Plugins with /plugin-authoring (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105911321875411254) · [notes](../../notes/13-ai-tools/2026-10-02-create-claude-code-plugins-with-plugin-authoring.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), SkillsBento: Free Plugin Marketplace for Codex and Claude Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105560043395707354) · [notes](../../notes/13-ai-tools/2026-10-01-skillsbento-free-plugin-marketplace-for-codex-and-claude.md)), Countering AI Sycophancy with a Devil's Advocate Plugin for Codex & Claude (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105534628715270332) · [notes](../../notes/13-ai-tools/2026-10-01-countering-ai-sycophancy-with-a-devil-s-advocate-plugin-for.md)) and 100 more

## Try this

- [ ] Run 'hf skills add --claude --global' to add the Hugging Face skills to Claude Code.
