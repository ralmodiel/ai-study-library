# Serving Qwen3.8 27B FP8 on an H100 with Baseten dedicated inference

Melvin Vivas · X post · 2026-08-29 · [Open on X](https://x.com/melvindvivas/status/2093634576199586034)

**Topics:** LLMOps, Deployment & Monitoring, Evaluation (Evals) & Testing · **Level:** intermediate

## Summary

The creator serves Qwen3.8 27B in FP8 on a dedicated NVIDIA H100 through Baseten's dedicated inference. He gives the price as $6.50 per hour ($0.10833 per minute), which is a useful reference point for what it costs to self-host a mid-size open model. He also offers to evaluate the model with other people's agents.

## Key points

- Model: Qwen3.8 27B with FP8 quantization, served on one H100 GPU.
- Hosted on Baseten dedicated inference, not shared per-token APIs.
- Cost: $6.50/hr, or $0.10833 per minute.
- FP8 quantization lets a 27B model run on a single H100.
- With dedicated inference you pay for GPU time whether or not it is used, so plan your evaluation runs to make use of that time.
- The creator offers to run evaluations of this model with your agents.

## Resources mentioned

- [ ] **[Baseten](https://x.com/baseten)** · tool · x.com · paid  
  Model inference platform offering dedicated GPU deployments for serving open models.  
  Also in: Coworker Desktop App Works with Any OpenAI-Compatible Endpoint (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093630644173877432) · [notes](../notes/2026-08-29-coworker-desktop-app-works-with-any-openai-compatible.md)), Running GLM 5.3 Flash on Baseten with the Pi Coding Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093231884054745429) · [notes](../notes/2026-08-28-running-glm-5-3-flash-on-baseten-with-the-pi-coding-agent.md)), GLM 5.3 Flash Now Available on Baseten (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092920843311763465) · [notes](../notes/2026-08-27-glm-5-3-flash-now-available-on-baseten.md)), GLM-5.2 Vision on Baseten: Turning Images into Code (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090894970861580594) · [notes](../notes/2026-08-22-glm-5-2-vision-on-baseten-turning-images-into-code.md)) and 6 more
- [ ] **[Qwen3.8 27B (FP8)](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** · tool · huggingface.co · free  
  Open-weight Qwen language model, 27B parameters, served in FP8 precision.

## Try this

- [ ] Contact the creator if you want this model evaluated with your agents.
