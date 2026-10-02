# Fine-Tune ModernBERT-base as a Task-Routing Classifier

Melvin Vivas · X post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2101110603909873800)

**Topics:** Fine-tuning & Model Customization, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator is experimenting with fine-tuning ModernBERT-base to classify incoming tasks and send each one to one of two agents (Astra or Luna). The point: a small encoder classifier you train yourself can replace an LLM call for routing.

## Key points

- Model: ModernBERT-base, an encoder model that suits classification.
- Goal: classify each task and route it to one of two agents/workers.
- A small fine-tuned classifier is cheaper and faster than asking an LLM to do the routing.
- Message: train your own classification model for routing decisions.

## Resources mentioned

- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103467817156886893) · [notes](../../notes/10-fine-tuning/2026-09-25-train-your-own-llm-model-router-by-fine-tuning-modernbert.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../../notes/10-fine-tuning/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100961076237971918) · [notes](../../notes/10-fine-tuning/2026-09-18-train-modernbert-as-a-prompt-router-between-two-models.md)), Fine-tuning ModernBERT-base as a task router (quote post) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100892866876973126) · [notes](../../notes/10-fine-tuning/2026-09-18-fine-tuning-modernbert-base-as-a-task-router-quote-post.md)) and 2 more

## Try this

- [ ] Train your own classification model instead of using an LLM for routing.
- [ ] Fine-tune ModernBERT-base as a router that sends tasks to different agents.
