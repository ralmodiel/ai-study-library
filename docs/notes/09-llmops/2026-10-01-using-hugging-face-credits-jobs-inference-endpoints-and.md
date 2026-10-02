# Using Hugging Face credits: Jobs, Inference Endpoints and Open Models

Melvin Vivas · X post · 2026-10-01 · [Open on X](https://x.com/melvindvivas/status/2105651655459168673)

**Topics:** LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator thanks Victor Mustar of Hugging Face for a credit giveaway and plans to use the credits to deploy Qwen3.8 27B on an Inference Endpoint. The quoted post lists things you can try with HF credits: having agents launch HF Jobs, running DeepSeek V4.1 Flash, deploying dedicated endpoints, and running agents with Blender on a GPU.

## Key points

- Victor Mustar gave away $1,000 in HF credits ($10 each to 100 people).
- Things to try with the credits: have an agent launch hundreds of HF Jobs, run about 33M tokens of DeepSeek V4.1 Flash, and deploy a dedicated Qwen3.8 27B endpoint.
- The creator plans to deploy Qwen3.8 27B on an Inference Endpoint.

## Resources mentioned

- [ ] **[Victor M (@victormustar) on X](https://x.com/victormustar)** · person · x.com · free  
  Hugging Face team member who posts about HF products, open models and agent workflows.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Using an ML agent to train an open-source TTS model on your voice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105946723692707961) · [notes](../../notes/10-fine-tuning/2026-10-02-using-an-ml-agent-to-train-an-open-source-tts-model-on-your.md)), Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../../notes/16-trends/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)) and 38 more
- [ ] **[Hugging Face Inference Endpoints](https://endpoints.huggingface.co/)** · tool · endpoints.huggingface.co · paid  
  Managed service for deploying models from the Hugging Face Hub on dedicated infrastructure.  
  Also in: Deploy Open-Source Models with Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105897373000155331) · [notes](../../notes/09-llmops/2026-10-02-deploy-open-source-models-with-hugging-face-inference.md)), Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md))
- [ ] **[Hugging Face Jobs](https://huggingface.co/docs/hub/en/jobs-overview)** · tool · huggingface.co · paid  
  Hugging Face service for running compute jobs on HF infrastructure, and agents can launch them.
- [ ] **[DeepSeek V4.1 Flash](https://api-docs.deepseek.com/news/news260910/)** · tool · api-docs.deepseek.com · paid  
  A fast DeepSeek language model available through DeepSeek's official API.  
  Also in: DeepSeek 4.1 Flash speed on the official API: about 325 tokens/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099351690545869251) · [notes](../../notes/03-llm-fundamentals/2026-09-14-deepseek-4-1-flash-speed-on-the-official-api-about-325.md)), One-Shot Agent Management UI with DeepSeek Harness for $0.19 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099097522631557365) · [notes](../../notes/07-agents/2026-09-13-one-shot-agent-management-ui-with-deepseek-harness-for-0-19.md)), DeepSeek Harness: Open-Source, Browser-Based Agent for DeepSeek V4.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099001661515813214) · [notes](../../notes/13-ai-tools/2026-09-13-deepseek-harness-open-source-browser-based-agent-for.md)), DeepSeek V4.1 Flash Off-Peak Pricing as a Cheap Fallback Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098992854890942598) · [notes](../../notes/09-llmops/2026-09-13-deepseek-v4-1-flash-off-peak-pricing-as-a-cheap-fallback.md)) and 1 more
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../../notes/03-llm-fundamentals/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)) and 24 more

## Try this

- [ ] Have an agent launch Hugging Face Jobs to run batch workloads automatically.
