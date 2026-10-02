# Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook)

Melvin Vivas · X post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100961076237971918)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring, AI System Design & Architecture · **Level:** intermediate

## Summary

The creator shares a Colab notebook that fine-tunes a ModernBERT classifier on prompts. The classifier decides whether a task should go to a cheaper model (Luna) or a stronger one (Astra). It shows that a small encoder model can do model routing without calling an LLM. He notes that real use needs a much larger and more diverse dataset.

## Key points

- Model routing: a small classifier predicts which LLM should handle each prompt.
- Fine-tune ModernBERT for sequence classification with two labels: Luna and Astra.
- Training data is prompts labeled with the model that should handle them.
- The example is small. Production routing needs a much larger and more diverse dataset to give reliable predictions.
- The idea was inspired by Jev: you don't need an LLM for every task.
- The notebook opens directly in Google Colab.

## Resources mentioned

- [ ] **[donvito/notebooks](https://github.com/donvito/notebooks)** · repo · github.com · free  
  The creator's notebooks for fine-tuning and running local models, which you can run in Google Colab, including a GLiNER2.5-Decide intent classification example.  
  Also in: Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../../notes/03-llm-fundamentals/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 3 more
- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103467817156886893) · [notes](../../notes/10-fine-tuning/2026-09-25-train-your-own-llm-model-router-by-fine-tuning-modernbert.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../../notes/10-fine-tuning/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Fine-Tune ModernBERT-base as a Task-Routing Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101110603909873800) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tune-modernbert-base-as-a-task-routing-classifier.md)), Fine-tuning ModernBERT-base as a task router (quote post) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100892866876973126) · [notes](../../notes/10-fine-tuning/2026-09-18-fine-tuning-modernbert-base-as-a-task-router-quote-post.md)) and 2 more
- [ ] **[Google Colab](https://colab.research.google.com/)** · tool · colab.research.google.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more

## Try this

- [ ] Open the notebook in Colab and run the ModernBERT router training.
- [ ] Build a larger and more diverse labeled prompt dataset before using a router like this for real.
- [ ] Build a cost-saving LLM router: fine-tune ModernBERT to send each prompt to a cheap or a strong model, then measure cost savings and quality.
