# Fine-tuning ModernBERT-base as a task router (quote post)

Melvin Vivas · X post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100892866876973126)

**Topics:** Fine-tuning & Model Customization, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator adds 'awesome' to his own post about fine-tuning ModernBERT-base. The quoted post describes training a classifier that decides whether a task goes to Astra or Luna. The idea is a small encoder model used as a router between models or agents.

## Key points

- ModernBERT-base is a small encoder model that can be fine-tuned for sequence classification.
- Training goal: classify incoming tasks and delegate each one to either Astra or Luna.
- A cheap classifier in front of larger models can act as a model/agent router.

## Resources mentioned

- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103467817156886893) · [notes](../notes/2026-09-25-train-your-own-llm-model-router-by-fine-tuning-modernbert.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../notes/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Fine-Tune ModernBERT-base as a Task-Routing Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101110603909873800) · [notes](../notes/2026-09-19-fine-tune-modernbert-base-as-a-task-routing-classifier.md)), Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100961076237971918) · [notes](../notes/2026-09-18-train-modernbert-as-a-prompt-router-between-two-models.md)) and 2 more

## Try this

- [ ] Fine-tune ModernBERT-base to classify tasks and route each one to one of two models or agents.
