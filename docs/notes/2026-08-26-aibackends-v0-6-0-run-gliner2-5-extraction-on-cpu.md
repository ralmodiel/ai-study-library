# AIBackends v0.6.0: Run GLiNER2.5 Extraction on CPU

Melvin Vivas · X post · 2026-08-26 · [Open on X](https://x.com/melvindvivas/status/2092476642329542779)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals · **Level:** intermediate

## Summary

Melvin Vivas released v0.6.0 of AIBackends, his open-source Python library for running AI tasks locally. This version supports Fastino Labs' GLiNER2.5 models, which run on CPU. The quoted Fastino post lists what GLiNER2.5 can do: long-context extraction and classification, unlimited span length, span attributes, constrained classification and joint information extraction.

## Key points

- AIBackends is a Python library for running AI tasks locally. It is available on PyPI, and this release is version 0.6.0.
- v0.6.0 adds support for GLiNER2.5 from Fastino Labs, and it runs on CPU, so you don't need a GPU.
- GLiNER2.5 supports long-context extraction and classification with unlimited span length.
- It can extract span attributes and do constrained classification.
- It supports joint information extraction, meaning several extraction tasks in one pass.
- A Colab notebook in the repo shows how to do GLiNER2.5 extraction step by step.
- Fastino reported over 1,000 downloads of the GLiNER2.5 models in 24 hours.

## Resources mentioned

- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../notes/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../notes/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../notes/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[aibackends 0.6.0 on PyPI](https://pypi.org/project/aibackends/0.6.0/)** · tool · pypi.org · free  
  The PyPI release of the AIBackends Python package, version 0.6.0.
- [ ] **[GLiNER2.5 Extraction Colab Notebook](https://github.com/donvito/aibackends/blob/main/examples/notebooks/gliner25_extraction_colab.ipynb)** · repo · github.com · free  
  An example notebook that runs GLiNER2.5 information extraction with AIBackends in Colab.  
  Also in: Colab Notebook: Entity Extraction with GLiNER2.5 in aibackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093035461552005132) · [notes](../notes/2026-08-28-colab-notebook-entity-extraction-with-gliner2-5-in.md))
- [ ] **[GLiNER2.5](https://fastino.ai/blog/gliner2-5-span-free-information-extraction)** · tool · fastino.ai · free  
  Fastino Labs' models for extraction and classification that run on CPU, with long context and joint information extraction.  
  Also in: Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../notes/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Colab Notebook: Entity Extraction with GLiNER2.5 in aibackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093035461552005132) · [notes](../notes/2026-08-28-colab-notebook-entity-extraction-with-gliner2-5-in.md))
- [ ] **[Fastino Labs (@fastinoAI) on X](https://x.com/fastinoAI)** · person · x.com · free  
  The X account of Fastino Labs, which builds GLiNER decision models and shares demos.  
  Also in: GLiNER decision model demos from Fastino Labs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103525132899946958) · [notes](../notes/2026-09-26-gliner-decision-model-demos-from-fastino-labs.md)), AIBackends v0.8.1 adds GLiNER2.5-Decide local classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103391484640706571) · [notes](../notes/2026-09-25-aibackends-v0-8-1-adds-gliner2-5-decide-local-classification.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../notes/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 2 more

## Try this

- [ ] Install aibackends 0.6.0 from PyPI.
- [ ] Run the GLiNER2.5 extraction Colab notebook.
- [ ] Build a pipeline that extracts entities and their attributes from documents on CPU only, using GLiNER2.5 through AIBackends.
