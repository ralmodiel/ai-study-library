# Cheap TTS serving: Qwen3-TTS on vLLM-Omni at $3 per 1M characters

Melvin Vivas · X post · 2026-05-15 · [Open on X](https://x.com/melvindvivas/status/2054979576510681578)

**Topics:** LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A provider reports serving the open Qwen3-TTS model on vLLM-Omni for $3 per 1M characters. They say this is about 90% cheaper than comparable closed-source TTS APIs. They got there by optimizing a single-replica serving stack, which shows how self-hosting open models can cut costs.

## Key points

- Qwen3-TTS served on vLLM-Omni costs $3 per 1M characters.
- That is about 90% cheaper than comparable closed-source TTS APIs.
- The savings came from optimizing a single-replica serving stack.
- Measure cost per concurrent stream when you size TTS serving.

## Resources mentioned

- [ ] **[Qwen3-TTS](https://github.com/QwenLM/Qwen3-TTS)** · tool · github.com · free  
  Open text-to-speech model from the Qwen family.
- [ ] **[vLLM-Omni](https://github.com/vllm-project/vllm-omni)** · tool · github.com · free  
  Version of the vLLM inference engine for serving omni-modal models such as TTS.
