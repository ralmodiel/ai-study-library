# Benchmarking LLM Endpoints with NVIDIA Dynamo AIPerf

Melvin Vivas · X video post · 2026-09-19 · [Open on X](https://x.com/melvindvivas/status/2101117355002904827)

**Topics:** LLMOps, Deployment & Monitoring · **Level:** advanced

## Summary

The creator recommends NVIDIA Dynamo AIPerf for inference engineering. AIPerf measures how an LLM endpoint performs under load, covering time to first token, inter-token latency, overall latency and throughput. It can replay realistic, repeatable traffic patterns.

## Key points

- An endpoint that works may still degrade as traffic increases, so load-test it
- Key metrics: TTFT (time to first token), ITL (inter-token latency), end-to-end latency and throughput
- AIPerf measures these at scale
- Test with realistic traffic patterns you can reliably repeat for comparable benchmarks

## Resources mentioned

- [ ] **[NVIDIA Dynamo AIPerf](https://github.com/ai-dynamo/aiperf)** · tool · github.com · free  
  NVIDIA's benchmarking tool for measuring TTFT, ITL, latency and throughput of LLM endpoints under realistic load.
- [ ] **[NVIDIA blog: Dynamo AIPerf](https://nvda.ws/4hdIeGd)** · article · nvda.ws · free  
  NVIDIA's blog post explaining how to load-test LLM endpoints with AIPerf.

## Try this

- [ ] Read the NVIDIA AIPerf blog
- [ ] Benchmark your LLM endpoint's TTFT, ITL, latency and throughput under realistic traffic
