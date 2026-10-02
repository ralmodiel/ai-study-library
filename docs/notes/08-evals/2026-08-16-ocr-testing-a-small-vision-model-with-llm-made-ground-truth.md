# OCR Testing a Small Vision Model with LLM-Made Ground Truth

Melvin Vivas · X post · 2026-08-16 · [Open on X](https://x.com/melvindvivas/status/2088677363798413510)

**Topics:** Evaluation (Evals) & Testing, LLM Fundamentals · **Level:** intermediate

## Summary

Melvin Vivas tests the OCR quality of Liquid AI's small LFM2.5-VL-3B vision-language model. He has a stronger model (GPT 5.6 Luna) write the ground-truth transcriptions, then has Codex check the small model's outputs against them. This is a cheap way to evaluate a small local model when you don't have hand-labeled data.

## Key points

- Model under test: LFM2.5-VL-3B, a 3B-parameter vision-language model, used for OCR.
- Ground truth comes from a stronger frontier model (GPT 5.6 Luna) instead of manual labeling.
- A coding agent (Codex) compares the small model's outputs with the ground truth.
- Pattern: strong model labels, small model predicts, agent or LLM checks the results.
- Ground truth made by an LLM can contain errors, so spot-check a sample by hand.

## Resources mentioned

- [ ] **[LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)** · tool · huggingface.co · free  
  Liquid AI's lightweight vision-language model for screen and document understanding, grounding and tool calling.  
  Also in: AIBackends 0.4.0: Liquid AI LFM2.5 Models on llama.cpp and Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088665588189311348) · [notes](../../notes/09-llmops/2026-08-16-aibackends-0-4-0-liquid-ai-lfm2-5-models-on-llama-cpp-and.md)), AIBackends Adds Support for LFM2.5-VL-3B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088564446138638560) · [notes](../../notes/09-llmops/2026-08-15-aibackends-adds-support-for-lfm2-5-vl-3b.md)), Using LFM2.5-VL-3B's Vision Capabilities (Liquid AI Guide) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088111916128575849) · [notes](../../notes/03-llm-fundamentals/2026-08-14-using-lfm2-5-vl-3b-s-vision-capabilities-liquid-ai-guide.md)), Quick test of Liquid AI's LFM2.5-VL-3B vision model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087594748500750826) · [notes](../../notes/03-llm-fundamentals/2026-08-13-quick-test-of-liquid-ai-s-lfm2-5-vl-3b-vision-model.md)) and 1 more
- [ ] **[GPT 5.6 Luna](https://openai.com/index/gpt-5-6/)** · tool · openai.com · paid  
  The OpenAI model used inside Codex for the demo. The transcript gives the variant name as 'Soul', which is unclear.  
  Also in: Set Codex subagent model and reasoning to save usage limits (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103466507531665428) · [notes](../../notes/13-ai-tools/2026-09-25-set-codex-subagent-model-and-reasoning-to-save-usage-limits.md)), Use GPT-5.6 Luna in Codex for Terminal Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099454377509687314) · [notes](../../notes/13-ai-tools/2026-09-14-use-gpt-5-6-luna-in-codex-for-terminal-tasks.md)), Match Reasoning Effort to Task Length in Codex (Astra/Sol) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098351646191628754) · [notes](../../notes/13-ai-tools/2026-09-11-match-reasoning-effort-to-task-length-in-codex-astra-sol.md)), Run Coworker desktop agents cheaply with GPT-5.6 Luna on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098270299745832989) · [notes](../../notes/07-agents/2026-09-11-run-coworker-desktop-agents-cheaply-with-gpt-5-6-luna-on.md)) and 24 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Build an OCR evaluation harness: a frontier model creates the ground truth, a small local VLM makes predictions, and an agent or script scores the differences.
