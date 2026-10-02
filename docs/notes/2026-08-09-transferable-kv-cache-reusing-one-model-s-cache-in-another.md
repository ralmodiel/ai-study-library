# Transferable KV Cache: Reusing One Model's Cache in Another

Melvin Vivas · X video post · 2026-08-09 · [Open on X](https://x.com/melvindvivas/status/2086304514563539342)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** advanced

## Summary

Melvin highlights NVIDIA research, shared by Avi Chawla, showing that a KV cache can be moved from one model to another. The target model skips prefill entirely, and converting the cache is 2.7–25x faster than reprocessing the context. This could cut latency and cost when switching models over long contexts.

## Key points

- The KV cache (stored attention keys/values from prefill) can be reused by a different model.
- The target model skips the prefill step entirely.
- Converting the cache is 2.7x to 25x faster than processing the context again.
- This matters for long-context and multi-model pipelines, where repeated prefill is costly.
- The research is from NVIDIA.

## Resources mentioned

- [ ] **[Avi Chawla](https://x.com/_avichawla)** · person · x.com · free  
  AI educator who posts explanations of ML and LLM research; author of the quoted thread.
