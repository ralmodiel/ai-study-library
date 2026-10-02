# Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails

Melvin Vivas · X post · 2026-09-20 · [Open on X](https://x.com/melvindvivas/status/2101342034481312250)

**Topics:** Fine-tuning & Model Customization, AI Safety, Security & Guardrails, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas shares a set of free Google Colab notebooks on his website, mostly about fine-tuning. They cover fine-tuning a ModernBERT binary classifier to route tasks, QLoRA fine-tuning Gemma 4 E2B Instruct to write tweets in your own style, local prompt and response moderation with GliGuard LLMGuardrails-300M, and zero-shot extraction with GLiNER2.5.

## Key points

- Notebook 1: fine-tune a ModernBERT binary classifier that routes tasks between two targets (Luna vs Astra), a small-model approach to model routing.
- Notebook 2: QLoRA fine-tune Gemma 4 E2B Instruct on popular tweets so it writes posts in your style.
- Notebook 3 (AIBackends): run local prompt and response moderation with GliGuard LLMGuardrails-300M.
- Notebook 4 (AIBackends): use GLiNER2.5 for zero-shot entity, attribute and constrained-classification extraction, plus knowledge-graph extraction.
- All notebooks are on donvitocodes.com/notebooks and run in Google Colab.
- Small specialized models (classifiers, guardrails, extractors) can run locally instead of calling a large LLM.

## Resources mentioned

- [ ] **[Colab Notebooks \| DonvitoCodes](https://www.donvitocodes.com/notebooks)** · website · donvitocodes.com · free  
  The creator's collection of Colab notebooks for running local models, starting with chat and tool calling on LFM2.5-2.6B.  
  Also in: Free Colab Notebooks: LFM2.5 2.6B Tool Calling and Benchmarks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090019418680246405) · [notes](../notes/2026-08-19-free-colab-notebooks-lfm2-5-2-6b-tool-calling-and-benchmarks.md)), DonvitoCodes Colab notebooks for running local models (LFM2.5-2.6B) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089069229526114387) · [notes](../notes/2026-08-17-donvitocodes-colab-notebooks-for-running-local-models-lfm2.md))
- [ ] **[Google Colab](https://x.com/GoogleColab)** · tool · x.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../notes/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../notes/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../notes/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more
- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103467817156886893) · [notes](../notes/2026-09-25-train-your-own-llm-model-router-by-fine-tuning-modernbert.md)), Fine-Tune ModernBERT-base as a Task-Routing Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101110603909873800) · [notes](../notes/2026-09-19-fine-tune-modernbert-base-as-a-task-routing-classifier.md)), Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100961076237971918) · [notes](../notes/2026-09-18-train-modernbert-as-a-prompt-router-between-two-models.md)), Fine-tuning ModernBERT-base as a task router (quote post) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100892866876973126) · [notes](../notes/2026-09-18-fine-tuning-modernbert-base-as-a-task-router-quote-post.md)) and 2 more
- [ ] **[Gemma 4 E2B Instruct](https://huggingface.co/google/gemma-4-E2B-it)** · tool · huggingface.co · free  
  Small open-weight instruction-tuned Gemma model, used here as the base for a QLoRA fine-tune.  
  Also in: Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../notes/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)), QLoRA fine-tune Gemma 4 E2B with Unsloth as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101525110196945095) · [notes](../notes/2026-09-20-qlora-fine-tune-gemma-4-e2b-with-unsloth-as-a-model-router.md))
- [ ] **[GliGuard 300M](https://huggingface.co/fastino/gliguard-LLMGuardrails-300M)** · tool · huggingface.co · free  
  Fastino Labs' small guardrail model that runs on CPU and classifies prompts and responses for safety, toxicity, jailbreaks and refusals.  
  Also in: Screening LLM Prompts and Responses on CPU with AIBackends + GliGuard (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091958588193603624) · [notes](../notes/2026-08-25-screening-llm-prompts-and-responses-on-cpu-with-aibackends.md))
- [ ] **[GLiNER2.5](https://fastino.ai/blog/gliner2-5-span-free-information-extraction)** · tool · fastino.ai · free  
  Fastino Labs' models for extraction and classification that run on CPU, with long context and joint information extraction.  
  Also in: Colab Notebook: Entity Extraction with GLiNER2.5 in aibackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093035461552005132) · [notes](../notes/2026-08-28-colab-notebook-entity-extraction-with-gliner2-5-in.md)), AIBackends v0.6.0: Run GLiNER2.5 Extraction on CPU (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092476642329542779) · [notes](../notes/2026-08-26-aibackends-v0-6-0-run-gliner2-5-extraction-on-cpu.md))

## Try this

- [ ] Open the notebooks at donvitocodes.com/notebooks and run them in Colab.
- [ ] Send the creator your own fine-tuning ideas.
- [ ] Fine-tune a ModernBERT classifier to route tasks between two models or agents.
- [ ] QLoRA fine-tune Gemma 4 E2B on your own posts so it writes in your style.
- [ ] Add local prompt and response guardrails with a small moderation model.
- [ ] Build a knowledge graph from text with zero-shot GLiNER extraction.
