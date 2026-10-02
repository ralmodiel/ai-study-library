# Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier

Melvin Vivas · X video post · 2026-09-25 · 1:00 · 521 views · [Open on X](https://x.com/melvindvivas/status/2103467817156886893)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Melvin Vivas shows how to build a model router. He fine-tunes ModernBERT-base as a text classifier on your own prompts or traces, so each request goes to the right model tier. In his demo, small tasks go to a model labeled "Luna" and others go to one labeled "Astra". He shares a Colab notebook and points out that a correct prediction with low confidence (56%) still means the router needs more work.

## Key points

- A model router is a classifier that decides which LLM should handle each prompt. Cheap or small models take minor tasks, and stronger models take harder ones.
- You can train the router on your own prompts or production traces, so it learns from your real traffic.
- ModernBERT-base (answerdotai) is used as the base encoder and fine-tuned for sequence classification.
- First, define which kinds of tasks should go to each target model (here 'Luna' vs 'Astra'). Then label your examples to match.
- Check the training graphs (loss/accuracy curves) to see how training is going.
- Example: 'please clean up the docs and correct a spelling mistake' was routed to Luna because it's a minor task.
- Look at the confidence score, not just the label. A correct route at 56% confidence isn't good enough, so keep improving the data or training until predictions are confident and accurate.

## Resources mentioned

- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../notes/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Fine-Tune ModernBERT-base as a Task-Routing Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101110603909873800) · [notes](../notes/2026-09-19-fine-tune-modernbert-base-as-a-task-routing-classifier.md)), Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100961076237971918) · [notes](../notes/2026-09-18-train-modernbert-as-a-prompt-router-between-two-models.md)), Fine-tuning ModernBERT-base as a task router (quote post) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100892866876973126) · [notes](../notes/2026-09-18-fine-tuning-modernbert-base-as-a-task-router-quote-post.md)) and 2 more
- [ ] **[ModernBERT\_train\_classify.ipynb (donvito/notebooks)](https://github.com/donvito/notebooks/blob/main/colab/ModernBERT_train_classify.ipynb)** · repo · github.com · free  
  Colab notebook that fine-tunes ModernBERT to classify prompts, used here to build a model router.

## Try this

- [ ] Download the ModernBERT\_train\_classify Colab notebook.
- [ ] Collect your own prompts or traces and label which model each should be routed to.
- [ ] Fine-tune ModernBERT-base as a classifier and review the training graphs.
- [ ] Test predictions and check confidence scores. Keep iterating if confidence is low (e.g., around 56%).
- [ ] Build a custom LLM router that sends minor tasks (e.g., doc cleanup, spelling fixes) to a cheaper model and harder tasks to a stronger model, using a fine-tuned ModernBERT classifier trained on your own traces.
