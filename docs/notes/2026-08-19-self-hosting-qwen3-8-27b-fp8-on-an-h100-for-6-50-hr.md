# Self-Hosting Qwen3.8 27B FP8 on an H100 for $6.50/hr

Melvin Vivas · X post · 2026-08-19 · [Open on X](https://x.com/melvindvivas/status/2090094439733870982)

**Topics:** LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

You can run your own copy of Qwen3.8 27B in FP8 on Baseten. It needs a single H100 instance, which costs about $6.50 per hour, a useful number for estimating self-hosting costs.

## Key points

- Qwen3.8 27B quantized to FP8 fits on one H100 GPU.
- An H100 instance on Baseten costs about $6.50/hr.
- FP8 quantization lowers memory needs, so a 27B model can run on a single GPU.

## Resources mentioned

- [ ] **[Baseten](https://x.com/baseten)** · tool · x.com · paid  
  Model inference platform offering dedicated GPU deployments for serving open models.  
  Also in: Serving Qwen3.8 27B FP8 on an H100 with Baseten dedicated inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093634576199586034) · [notes](../notes/2026-08-29-serving-qwen3-8-27b-fp8-on-an-h100-with-baseten-dedicated.md)), Coworker Desktop App Works with Any OpenAI-Compatible Endpoint (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093630644173877432) · [notes](../notes/2026-08-29-coworker-desktop-app-works-with-any-openai-compatible.md)), Running GLM 5.3 Flash on Baseten with the Pi Coding Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093231884054745429) · [notes](../notes/2026-08-28-running-glm-5-3-flash-on-baseten-with-the-pi-coding-agent.md)), GLM 5.3 Flash Now Available on Baseten (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092920843311763465) · [notes](../notes/2026-08-27-glm-5-3-flash-now-available-on-baseten.md)) and 6 more
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../notes/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../notes/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../notes/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)), Qwen3.8-27B Is Free on Infron: 256K-Context Multimodal Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099437312124072202) · [notes](../notes/2026-09-14-qwen3-8-27b-is-free-on-infron-256k-context-multimodal-model.md)) and 22 more
