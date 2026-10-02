# AIBackends v0.8.1 adds GLiNER2.5-Decide local classification

Melvin Vivas · X post · 2026-09-25 · [Open on X](https://x.com/melvindvivas/status/2103391484640706571)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Release v0.8.1 of the creator's open-source library AIBackends adds support for Fastino's GLiNER2.5-Decide model. With it you can classify intent, routing, sentiment and policy in one local pass. You install it with the extraction extra.

## Key points

- AIBackends v0.8.1 supports GLiNER2.5-Decide by Fastino Labs.
- GLiNER2.5-Decide handles intent, routing, sentiment and policy classification in one local pass.
- It runs locally, so no hosted LLM API is needed for these classification tasks.
- Install or upgrade: pip install -U "aibackends[extraction]".

## Resources mentioned

- [ ] **[Releases · donvito/aibackends](https://github.com/donvito/aibackends/releases)** · repo · github.com · free  
  Release notes for AIBackends, the creator's open-source Python library for running local AI backends.
- [ ] **[GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** · tool · huggingface.co · free  
  A 340M-parameter open-weight encoder model that answers user-defined typed questions and rules for fast, deterministic classification.  
  Also in: Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../notes/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)), GLiNER2.5-Decide: A 340M Encoder Model for Deterministic Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103198915776610651) · [notes](../notes/2026-09-25-gliner2-5-decide-a-340m-encoder-model-for-deterministic.md))
- [ ] **[Fastino Labs (@fastinoAI) on X](https://x.com/fastinoAI)** · person · x.com · free  
  The X account of Fastino Labs, which builds GLiNER decision models and shares demos.  
  Also in: GLiNER decision model demos from Fastino Labs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103525132899946958) · [notes](../notes/2026-09-26-gliner-decision-model-demos-from-fastino-labs.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../notes/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)), Colab Notebook: Entity Extraction with GLiNER2.5 in aibackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093035461552005132) · [notes](../notes/2026-08-28-colab-notebook-entity-extraction-with-gliner2-5-in.md)) and 2 more

## Try this

- [ ] Run pip install -U "aibackends\[extraction\]" to try GLiNER2.5-Decide classification.
- [ ] Build a local router that classifies incoming requests by intent and sentiment, and checks them against a policy, before sending them to the right handler.
