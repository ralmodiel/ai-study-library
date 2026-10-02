# Serve GLM-5.2 NVFP4 with vLLM on NVIDIA Blackwell

Melvin Vivas · X post · 2026-06-27 · [Open on X](https://x.com/melvindvivas/status/2070716408745574749)

**Topics:** LLMOps, Deployment & Monitoring, Fine-tuning & Model Customization · **Level:** advanced

## Summary

vLLM now supports NVIDIA's official NVFP4-quantized checkpoint of GLM-5.2. On Blackwell GPUs it uses less memory than FP8 while matching FP8 accuracy on reasoning, coding and long-context benchmarks. You can serve it with one command.

## Key points

- NVIDIA released an official NVFP4 (4-bit floating point) checkpoint of GLM-5.2.
- It targets Blackwell GPUs and uses less memory than FP8.
- It is reported to match FP8 accuracy on reasoning, coding and long-context benchmarks.
- Serve command: `vllm serve nvidia/GLM-5.2-NVFP4`.

## Resources mentioned

- [ ] **[vLLM](https://github.com/vllm-project/vllm)** · repo · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source, high-throughput LLM inference and serving engine with continuous batching and efficient KV-cache management (PagedAttention).  
  Also in: Ollama vs vLLM: From Local AI Demo to Production Inference Serving (Bashiri Smith on [Facebook](https://www.facebook.com/reel/924011213633345) · [notes](../notes/2026-09-01-ollama-vs-vllm-from-local-ai-demo-to-production-inference.md)), Gemma 4 Gets Up to 3x Faster with MTP Drafters (Melvin Vivas on [X](https://x.com/melvindvivas/status/2051722037857771972) · [notes](../notes/2026-05-06-gemma-4-gets-up-to-3x-faster-with-mtp-drafters.md))
- [ ] **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** · tool · huggingface.co · free  
  NVIDIA's NVFP4-quantized release of the open GLM-5.2 model, with its model card on Hugging Face.  
  Also in: Model card: NVIDIA's NVFP4-quantized GLM-5.2 on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2070508033013415959) · [notes](../notes/2026-06-26-model-card-nvidia-s-nvfp4-quantized-glm-5-2-on-hugging-face.md))

## Try this

- [ ] Serve the model with \`vllm serve nvidia/GLM-5.2-NVFP4\` on Blackwell hardware.
