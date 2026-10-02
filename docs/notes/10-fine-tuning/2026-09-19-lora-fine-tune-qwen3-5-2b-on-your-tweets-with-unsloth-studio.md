# LoRA Fine-Tune Qwen3.5-2B on Your Tweets with Unsloth Studio

Melvin Vivas · X post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2101111328714993970)

**Topics:** Fine-tuning & Model Customization, Portfolio Projects · **Level:** intermediate

## Summary

The creator fine-tuned Qwen3.5-2B with LoRA in Unsloth Studio, using his own popular tweets as the dataset. The model turns a topic or brief into an X post in his style. He shared it as a GGUF model on Hugging Face so you can run it locally in LM Studio.

## Key points

- Base model: Qwen3.5-2B, a small model you can fine-tune on modest hardware.
- Dataset: the creator's own popular tweets, paired with topics/briefs as input and posts as output.
- Method: LoRA fine-tuning done in Unsloth Studio.
- Exported as GGUF so it runs locally in LM Studio.
- Use case: style transfer, turning topics and briefs into posts in one person's voice.
- Model repo: melvindave/qwen3.5-2b-melvin-posts-v1-GGUF on Hugging Face (the caption's link is cut off and returns a 404).

## Resources mentioned

- [ ] **[qwen3.5-2b-melvin-posts-v1-GGUF (Hugging Face model)](https://huggingface.co/melvindave/qwe)** · repo · huggingface.co · free · open in a browser to verify  
  The creator's LoRA fine-tune of Qwen3.5-2B in GGUF format, which writes X posts in his style.
- [ ] **[Qwen3.5-2B](https://huggingface.co/Qwen/Qwen3.5-2B)** · tool · huggingface.co · free  
  Small open-weight Qwen language model, used here as the base for fine-tuning.  
  Also in: Post-training Qwen3.5-2B on your own X posts with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099679217839677724) · [notes](../../notes/10-fine-tuning/2026-09-15-post-training-qwen3-5-2b-on-your-own-x-posts-with-unsloth.md)), Fine-Tuned Qwen3.5-2B LoRA Model That Writes X Posts in Your Style (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099510090613272921) · [notes](../../notes/10-fine-tuning/2026-09-14-fine-tuned-qwen3-5-2b-lora-model-that-writes-x-posts-in.md)), First LoRA Run on Qwen3.5-2B with Codex as Training Companion (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099492923771658328) · [notes](../../notes/10-fine-tuning/2026-09-14-first-lora-run-on-qwen3-5-2b-with-codex-as-training.md))
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../../notes/09-llmops/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../../notes/09-llmops/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[LM Studio](https://x.com/lmstudio)** · tool · x.com · free  
  Desktop app for downloading and running LLMs locally, with a developer mode that serves models through an API.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)), Post-training Qwen3.5-2B on your own X posts with Unsloth Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099679217839677724) · [notes](../../notes/10-fine-tuning/2026-09-15-post-training-qwen3-5-2b-on-your-own-x-posts-with-unsloth.md)) and 31 more

## Try this

- [ ] Download the GGUF model from Hugging Face and run it in LM Studio.
- [ ] Fine-tune a small model (e.g. Qwen3.5-2B) with LoRA on your own posts so it writes in your voice.
