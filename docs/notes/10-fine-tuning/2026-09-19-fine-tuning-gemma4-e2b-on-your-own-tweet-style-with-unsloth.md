# Fine-tuning Gemma4-E2B on your own tweet style with Unsloth

Melvin Vivas · X post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2101206363749957741)

**Topics:** Fine-tuning & Model Customization, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

The creator is building a notebook that fine-tunes the small Gemma4-E2B model to write in his own tweet style, using Unsloth. He runs it through a Google Colab plugin inside Devin Desktop. It shows a practical style fine-tune of a small open model on personal data.

## Key points

- Small open models like Gemma4-E2B can be fine-tuned to copy a personal writing style (here, the creator's tweets).
- Unsloth is the fine-tuning library used for the training notebook.
- Training runs in a notebook through a Colab plugin, so it uses cloud GPUs instead of local hardware.
- The notebook was written inside Devin Desktop, an AI coding tool that has a Colab plugin.

## Resources mentioned

- [ ] **[Unsloth](https://x.com/UnslothAI)** · tool · x.com · free  
  Open-source web UI from Unsloth for fine-tuning and running LLMs (text, vision, audio, embedding, GGUF) locally, with dataset creation from documents.  
  Also in: Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../../notes/09-llmops/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../../notes/09-llmops/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 29 more
- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../../notes/07-agents/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../../notes/16-trends/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../../notes/03-llm-fundamentals/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Running Gemma4-E2B tool calling locally on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101204879188594857) · [notes](../../notes/07-agents/2026-09-19-running-gemma4-e2b-tool-calling-locally-on-an-iphone.md)) and 25 more
- [ ] **[Google Colab](https://colab.research.google.com/)** · tool · colab.research.google.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more
- [ ] **[Devin Desktop (@devindesktop)](https://x.com/devindesktop)** · tool · x.com · free · open in a browser to verify  
  Desktop app for the Devin AI coding agent. The linked X profile returned 'not found' when checked.  
  Also in: Devin's SWE-2 model is free on paid plans for a limited time (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104168851374326113) · [notes](../../notes/13-ai-tools/2026-09-27-devin-s-swe-2-model-is-free-on-paid-plans-for-a-limited-time.md)), Devin's kanban view for monitoring running agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104104987127345211) · [notes](../../notes/13-ai-tools/2026-09-27-devin-s-kanban-view-for-monitoring-running-agents.md)), SWE-2 Is Currently Free in Devin Desktop (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100971151044579698) · [notes](../../notes/13-ai-tools/2026-09-18-swe-2-is-currently-free-in-devin-desktop.md)), GLM 5.2 Is Fast and Free in Devin Desktop (Melvin Vivas on [X](https://x.com/melvindvivas/status/2068603475580334367) · [notes](../../notes/13-ai-tools/2026-06-21-glm-5-2-is-fast-and-free-in-devin-desktop.md))

## Try this

- [ ] Fine-tune a small open model (e.g. Gemma4-E2B) with Unsloth on your own tweets or posts so it writes in your style.
