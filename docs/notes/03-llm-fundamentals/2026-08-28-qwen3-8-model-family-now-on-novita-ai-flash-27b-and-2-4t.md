# Qwen3.8 Model Family Now on Novita AI: Flash, 27B and 2.4T-A95B

Melvin Vivas · X video post · 2026-08-28 · 0:25 · 348 views · [Open on X](https://x.com/melvindvivas/status/2093341746642186509)

**Topics:** LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

Melvin Vivas shares a quoted post saying three Qwen3.8 models (Qwen3.8-Flash, Qwen3.8-27B and Qwen3.8-2.4T-A95B) are now available on the Novita AI inference platform. The models are aimed at coding, agentic workflows, research and long-context tasks. The post is a model-release announcement, not a tutorial. Its main use is knowing which new model options exist and how their architectures differ.

## Key points

- Three Qwen3.8 models are now available on Novita AI: Qwen3.8-Flash, Qwen3.8-27B and Qwen3.8-2.4T-A95B.
- Stated target uses: coding, agentic workflows, research and long-context tasks.
- Qwen3.8-Flash is a 125B-parameter Mixture-of-Experts (MoE) model with only 6B active parameters, and it accepts text, image and video input.
- Qwen3.8-27B is a dense vision-language model. The rest of its description is cut off in the caption.
- Going by the usual Qwen naming, the name Qwen3.8-2.4T-A95B suggests an MoE model with about 2.4T total parameters and about 95B active per token. The post itself doesn't spell this out.
- MoE vs. dense: an MoE model with few active parameters (like Flash) can be cheaper and faster per token than its total size suggests. A dense model uses all of its parameters for every token.

## Resources mentioned

- [ ] **[Qwen3.8-Flash](https://qwen.ai/blog?id=qwen3.8-flash-next)** · tool · qwen.ai · check price  
  A 125B-parameter MoE model with 6B active parameters that accepts text, image and video input.
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)) and 24 more
- [ ] **[Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** · tool · huggingface.co · free  
  The largest Qwen3.8 model; by its name, about 2.4T total parameters with about 95B active.
- [ ] **[Novita](https://novita.ai)** · tool · novita.ai · check price  
  A cloud platform where you can call open models like the Qwen3.8 family through an API.  
  Also in: Free GLM-5.2 via Hugging Face Inference Providers in coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067678312537915410) · [notes](../../notes/03-llm-fundamentals/2026-06-19-free-glm-5-2-via-hugging-face-inference-providers-in-coding.md))
