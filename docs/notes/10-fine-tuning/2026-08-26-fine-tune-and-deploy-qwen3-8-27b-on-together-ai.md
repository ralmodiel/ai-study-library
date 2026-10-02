# Fine-tune and Deploy Qwen3.8 27B on Together AI

Melvin Vivas · X video post · 2026-08-26 · [Open on X](https://x.com/melvindvivas/status/2092511327352930654)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

Together AI now supports fine-tuning Qwen3.8 27B and serving it on dedicated inference. You can train the model on your own data and deploy it for production without combining separate training and serving setups. The creator calls this model their favorite local model.

## Key points

- Qwen3.8 27B can now be fine-tuned on Together AI.
- Fine-tuned models can be deployed on Together's Dedicated Model Inference for production.
- One platform handles both training and serving, so you don't need two separate setups.
- The creator calls Qwen3.8 27B their favorite local model.

## Resources mentioned

- [ ] **[Together AI Fine-tuning Overview (docs)](https://docs.together.ai/docs/fine-tuning/overview)** · docs · docs.together.ai · free  
  Together AI's guide to fine-tuning models on your own data and deploying them.
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)) and 24 more
- [ ] **[Together AI](https://x.com/togethercompute)** · tool · x.com · paid  
  Inference platform for hosting and calling open-weights models.  
  Also in: Where to Access GLM 5.2: Inference Providers and Gateways (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069421300364493126) · [notes](../../notes/09-llmops/2026-06-23-where-to-access-glm-5-2-inference-providers-and-gateways.md)), Where to Access GLM-5.2: Provider Roundup (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069157376557752349) · [notes](../../notes/03-llm-fundamentals/2026-06-23-where-to-access-glm-5-2-provider-roundup.md)), Free GLM-5.2 via Hugging Face Inference Providers in coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067678312537915410) · [notes](../../notes/03-llm-fundamentals/2026-06-19-free-glm-5-2-via-hugging-face-inference-providers-in-coding.md))

## Try this

- [ ] Read the Together AI fine-tuning docs and try fine-tuning Qwen3.8 27B on your own data.
- [ ] Fine-tune Qwen3.8 27B on your own dataset and deploy it to a dedicated endpoint.
