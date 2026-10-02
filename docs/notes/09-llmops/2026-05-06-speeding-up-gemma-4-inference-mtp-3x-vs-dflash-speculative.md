# Speeding Up Gemma 4 Inference: MTP (3x) vs. DFlash Speculative Decoding (6x)

Melvin Vivas · X video post · 2026-05-06 · 0:05 · 182 views · [Open on X](https://x.com/melvindvivas/status/2052014299351261402)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

Melvin Vivas shares a quick inference-speed update: Gemma 4 ran about 3x faster with Multi-Token Prediction (MTP), which now ships natively in Gemma 4, and up to 6x faster with DFlash. DFlash is an open-source speculative decoding method from z-lab that uses block diffusion to draft tokens. The quoted post says it keeps the same output quality while giving more speed. The video is 5 seconds long with no speech, so all the lesson content comes from the caption.

## Key points

- Multi-Token Prediction (MTP) is now built into Gemma 4. The creator reports about a 3x speedup from it.
- DFlash pushes Gemma 4 to as much as 6x faster, roughly double what MTP alone gives.
- DFlash means 'Block Diffusion for Flash Speculative Decoding'. A block-diffusion drafter proposes several tokens at once, and the target model then verifies them.
- The DFlash authors say it keeps the same output quality. With speculative decoding, the target model's verification keeps the output the same as normal decoding.
- DFlash is open source and available at github.com/z-lab/dflash.
- Speculative decoding methods like MTP and DFlash are a practical way to cut latency when you serve open-weight LLMs yourself, without changing model quality.

## Resources mentioned

- [ ] **[dflash2](https://github.com/z-lab/dflash)** · repo · github.com · free  
  Open-source speculative decoding method that uses a block-diffusion drafter to speed up LLM inference, with support for Gemma 4.  
  Also in: Serving Qwen3.8-27B (EXL3) with 262K Context on a 24GB RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094687609910128781) · [notes](../../notes/09-llmops/2026-09-01-serving-qwen3-8-27b-exl3-with-262k-context-on-a-24gb-rtx.md))
- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../../notes/07-agents/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../../notes/16-trends/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../../notes/03-llm-fundamentals/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more

## Try this

- [ ] Try DFlash on Gemma 4 for more speed than MTP alone gives (github.com/z-lab/dflash).
- [ ] Benchmark Gemma 4 inference three ways: no speculation, native MTP, and DFlash. Measure tokens per second and check that outputs stay the same.
