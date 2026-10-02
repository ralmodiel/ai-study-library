# How inference engines work: the full life of an LLM request

Melvin Vivas · X post · 2026-09-12 · [Open on X](https://x.com/melvindvivas/status/2098761893473394861)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** advanced

## Summary

The creator bookmarks a quoted post that shares slides from a talk on how LLM inference engines work. The talk follows a request from start to finish: the engine itself, KV and prefix caching, continuous batching, paged attention, chunked prefill, sampling, and agentic loops seen from inside the engine.

## Key points

- Inference engines manage each request from the moment it arrives until the last token is sent back.
- KV caching reuses attention keys and values that were already computed; prefix caching reuses them across requests that start with the same prompt.
- Continuous batching adds and removes requests from the batch at every step to keep GPU usage high.
- Paged attention stores the KV cache in fixed-size blocks, like memory pages, to cut down on fragmentation.
- Chunked prefill splits long prompts into chunks so prefill work can run alongside decoding.
- Sampling turns the model's output probabilities (logits) into the next token, and agentic loops can be optimized from inside the engine.

## Resources mentioned

- [ ] **[How inference engines actually work (talk slides)](https://x.com/zainhas/status/2098577202287894574)** · pdf · x.com · free  
  Talk slides that follow an LLM request through an inference engine: caching, batching, paged attention, chunked prefill, sampling and agentic loops.

## Try this

- [ ] Study how inference engines work: KV/prefix caching, continuous batching, paged attention, chunked prefill and sampling.
