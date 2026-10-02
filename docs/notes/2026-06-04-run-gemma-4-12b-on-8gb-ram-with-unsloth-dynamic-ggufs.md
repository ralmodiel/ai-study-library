# Run Gemma 4 12B on 8GB RAM with Unsloth Dynamic GGUFs

Melvin Vivas · X post · 2026-06-04 · [Open on X](https://x.com/melvindvivas/status/2062487479618253275)

**Topics:** LLM Fundamentals, Fine-tuning & Model Customization, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Unsloth's Dynamic GGUF quantizations let Gemma 4 12B run locally on only 8GB of RAM. The model supports image and audio input and a 256K context window, and Unsloth Studio can both run and fine-tune it.

## Key points

- Gemma 4 12B can run locally on just 8GB RAM using Unsloth Dynamic GGUF quantizations.
- Gemma 4 12B Unified is multimodal and supports image and audio input.
- It has a 256K-token context window.
- Unsloth Studio can run and train (fine-tune) the model.
- GGUF weights are on Hugging Face under the unsloth org, and Unsloth's docs have a Gemma 4 guide.

## Resources mentioned

- [ ] **[Unsloth Gemma 4 12B IT GGUF (Hugging Face)](https://huggingface.co/unsloth/gemma-)** · tool · huggingface.co · free · open in a browser to verify  
  Quantized Dynamic GGUF weights of Gemma 4 12B instruct for low-RAM local inference.
- [ ] **[Unsloth Documentation - Gemma 4 guide](https://unsloth.ai/docs/models/gemma-4)** · docs · unsloth.ai · free  
  Unsloth's guide to running and fine-tuning Gemma 4 models.
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/)** · tool · blog.google · free · open in a browser to verify  
  Google's open-weight, encoder-free multimodal model under Apache 2.0 for on-device use.  
  Also in: Run Gemma 4 12B locally with LM Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2062488301001466187) · [notes](../notes/2026-06-04-run-gemma-4-12b-locally-with-lm-studio.md)), Gemma 4 12B: encoder-free multimodal model for laptops (Melvin Vivas on [X](https://x.com/melvindvivas/status/2062487171135647961) · [notes](../notes/2026-06-04-gemma-4-12b-encoder-free-multimodal-model-for-laptops.md))

## Try this

- [ ] Download the Unsloth Gemma 4 12B GGUF and run it locally on an 8GB RAM machine.
- [ ] Follow the Unsloth Gemma 4 guide to fine-tune the model.
- [ ] Fine-tune Gemma 4 12B on your own dataset with Unsloth Studio and run it locally.
