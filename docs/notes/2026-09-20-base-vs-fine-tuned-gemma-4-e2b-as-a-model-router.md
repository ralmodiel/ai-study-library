# Base vs fine-tuned Gemma 4 E2B as a model router

Melvin Vivas · X post · 2026-09-20 · [Open on X](https://x.com/melvindvivas/status/2101538253929406562)

**Topics:** Fine-tuning & Model Customization · **Level:** intermediate

## Summary

Compares the base model with the fine-tuned one for the creator's Gemma 4 E2B model router. The router was QLoRA fine-tuned with Unsloth to send software tasks to Luna or Astra. The quoted post links the Colab notebook repo.

## Key points

- Shows how the base model differs from the fine-tuned model on the routing task.
- The router is Gemma 4 E2B Instruct, QLoRA fine-tuned with Unsloth.
- It labels each software task as needing Luna (cheaper) or Astra (stronger).
- The notebook runs in Google Colab; the repo is donvito/notebooks.

## Resources mentioned

- [ ] **[donvito/notebooks](https://github.com/donvito/notebooks)** · repo · github.com · free  
  The creator's notebooks for fine-tuning and running local models, which you can run in Google Colab, including a GLiNER2.5-Decide intent classification example.  
  Also in: Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../notes/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../notes/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../notes/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 3 more
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), QLoRA fine-tune Gemma 4 E2B with Unsloth as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101525110196945095) · [notes](../notes/2026-09-20-qlora-fine-tune-gemma-4-e2b-with-unsloth-as-a-model-router.md)) and 29 more
- [ ] **[Gemma 4 E2B Instruct](https://huggingface.co/google/gemma-4-E2B-it)** · tool · huggingface.co · free  
  Small open-weight instruction-tuned Gemma model, used here as the base for a QLoRA fine-tune.  
  Also in: QLoRA fine-tune Gemma 4 E2B with Unsloth as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101525110196945095) · [notes](../notes/2026-09-20-qlora-fine-tune-gemma-4-e2b-with-unsloth-as-a-model-router.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../notes/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md))

## Try this

- [ ] Run the notebook and compare the base model's routing answers with the fine-tuned model's.
- [ ] Fine-tune a small model to act as a router that picks a cheap or a strong model for each task.
