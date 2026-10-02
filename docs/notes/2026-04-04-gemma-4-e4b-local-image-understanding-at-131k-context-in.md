# Gemma 4 E4B: Local Image Understanding at 131K Context in 6GB VRAM

Melvin Vivas · X post · 2026-04-04 · [Open on X](https://x.com/melvindvivas/status/2040353586098704865)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** beginner

## Summary

The creator reports running Google's Gemma 4 E4B model locally for image understanding. He set the context window to its maximum of 131K tokens with full GPU offload, and it used only about 6GB of VRAM. That suggests small multimodal open models can run on consumer GPUs.

## Key points

- Gemma 4 E4B is a small Gemma 4 variant that can understand images (multimodal).
- Context window can be set to its maximum of about 131K tokens.
- With every layer offloaded to the GPU, VRAM use was about 6GB.
- Consumer GPUs with around 8GB of VRAM can probably run it locally.

## Resources mentioned

- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../notes/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../notes/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../notes/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../notes/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more

## Try this

- [ ] Try running Gemma 4 E4B locally on an image-understanding task and check how much VRAM it uses at long context.
