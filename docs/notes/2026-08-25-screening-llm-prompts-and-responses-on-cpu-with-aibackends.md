# Screening LLM Prompts and Responses on CPU with AIBackends + GliGuard

Melvin Vivas · X post · 2026-08-25 · [Open on X](https://x.com/melvindvivas/status/2091958588193603624)

**Topics:** AI Safety, Security & Guardrails, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

AIBackends v0.5.0, the creator's open-source Python library, adds support for Fastino's GliGuard 300M, a small guardrail model that runs on CPU. You can use it to screen user prompts for safety, toxicity and jailbreaks, and model responses for safety, toxicity and refusals. A Colab notebook shows how it works.

## Key points

- AIBackends v0.5.0 adds guardrails through GliGuard 300M by Fastino Labs
- GliGuard is a 300M-parameter model that runs on CPU, so you don't need a GPU for moderation
- Prompt screening checks for safety, toxicity and jailbreak attempts
- Response screening checks for safety, toxicity and refusals
- Install with: pip install aibackends[guardrails]
- A ready-made Colab notebook (gliguard_moderation_colab.ipynb) demonstrates moderation

## Resources mentioned

- [ ] **[AIBackends](https://aibackends.com/)** · repo · aibackends.com · free  
  Open-source API server runtime for common AI use cases that supports many models and providers (Ollama, LM Studio, OpenRouter, OpenAI, Anthropic).  
  Also in: Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), CamelFlow: open-source visual viewer for Apache Camel routes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104855828822204518) · [notes](../notes/2026-09-29-camelflow-open-source-visual-viewer-for-apache-camel-routes.md)), AI Backends: A Production AI Workflow Engineering Site (Link Share) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104386228233908389) · [notes](../notes/2026-09-28-ai-backends-a-production-ai-workflow-engineering-site-link.md)), Demo: Claude Opus 5.5 Generating a Motion-Graphics Video for AIBackends (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103736813806608535) · [notes](../notes/2026-09-26-demo-claude-opus-5-5-generating-a-motion-graphics-video-for.md)) and 16 more
- [ ] **[aibackends 0.5.0 on PyPI](https://pypi.org/project/aibackends/0.5.0/)** · docs · pypi.org · free  
  The PyPI package page for aibackends version 0.5.0.
- [ ] **[GliGuard Moderation Colab Notebook](https://colab.research.google.com/github/donvito/aibackends/blob/main/examples/notebooks/gliguard_moderation_colab.ipynb)** · pdf · colab.research.google.com · free  
  A Google Colab notebook showing GliGuard moderation of prompts and responses with AIBackends.
- [ ] **[GliGuard 300M](https://huggingface.co/fastino/gliguard-LLMGuardrails-300M)** · tool · huggingface.co · free  
  Fastino Labs' small guardrail model that runs on CPU and classifies prompts and responses for safety, toxicity, jailbreaks and refusals.  
  Also in: Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../notes/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md))
- [ ] **[Fastino Labs (@fastinoAI) on X](https://x.com/fastinoAI)** · person · x.com · free  
  The X account of Fastino Labs, which builds GLiNER decision models and shares demos.  
  Also in: GLiNER decision model demos from Fastino Labs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103525132899946958) · [notes](../notes/2026-09-26-gliner-decision-model-demos-from-fastino-labs.md)), AIBackends v0.8.1 adds GLiNER2.5-Decide local classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103391484640706571) · [notes](../notes/2026-09-25-aibackends-v0-8-1-adds-gliner2-5-decide-local-classification.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../notes/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 2 more

## Try this

- [ ] Install with pip install aibackends\[guardrails\]
- [ ] Try the GliGuard moderation Colab notebook
- [ ] Add a CPU-based guardrail step that screens user prompts and model responses in your LLM app
