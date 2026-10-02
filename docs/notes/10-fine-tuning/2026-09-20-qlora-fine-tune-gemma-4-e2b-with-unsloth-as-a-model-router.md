# QLoRA fine-tune Gemma 4 E2B with Unsloth as a model router

Melvin Vivas · X post · 2026-09-20 · [Open on X](https://x.com/melvindvivas/status/2101525110196945095)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator QLoRA fine-tuned Gemma 4 E2B Instruct with Unsloth to classify software tasks and send each one to Luna (cheaper) or Astra (stronger). The notebook runs in Google Colab and is shared in his donvito/notebooks repo. He hasn't plugged it into Codex yet and asks others to try.

## Key points

- Model routing: a small classifier model decides which larger model should handle each task.
- Base model: Gemma 4 E2B Instruct, small enough to fine-tune cheaply.
- Method: QLoRA (LoRA adapters on a quantized model) with Unsloth.
- Labels: software tasks are routed to luna or astra.
- Runs in Google Colab; the notebook is in github.com/donvito/notebooks.
- Not yet integrated with Codex, so wiring it up is left open.

## Resources mentioned

- [ ] **[donvito/notebooks](https://github.com/donvito/notebooks)** · repo · github.com · free  
  The creator's notebooks for fine-tuning and running local models, which you can run in Google Colab, including a GLiNER2.5-Decide intent classification example.  
  Also in: Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../../notes/03-llm-fundamentals/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 3 more
- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../../notes/09-llmops/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../../notes/09-llmops/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Gemma 4 E2B Instruct](https://huggingface.co/google/gemma-4-E2B-it)** · tool · huggingface.co · free  
  Small open-weight instruction-tuned Gemma model, used here as the base for a QLoRA fine-tune.  
  Also in: Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../../notes/10-fine-tuning/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md))
- [ ] **[Google Colab](https://colab.research.google.com/)** · tool · colab.research.google.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Open the Colab notebook in donvito/notebooks and run the QLoRA fine-tune.
- [ ] Try wiring the router into Codex and share the results with the creator.
- [ ] Build a cost-saving model router: a fine-tuned small model that sends each coding task to a cheap or a strong model, connected to Codex.
