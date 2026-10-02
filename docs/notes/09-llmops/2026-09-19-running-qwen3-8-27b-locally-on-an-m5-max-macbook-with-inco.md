# Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash

Melvin Vivas · X video post · 2026-09-19 · 0:26 · 4,827 views · [Open on X](https://x.com/melvindvivas/status/2101115697049043177)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

This short post reacts to a quoted announcement of Inco Splash, an open-source inference engine built for Qwen models on Apple silicon. The announcement says it runs Qwen3.8-27B at 144 tokens/s on an M5 Max MacBook Pro. It also says Inco Splash decodes faster than Ollama and oMLX, especially when an agent splits work across sub-agents. The point for learners is that the inference engine you choose can change local LLM speed a lot on the same hardware.

## Key points

- Claimed result: Qwen3.8-27B runs at 144 tokens/s on an M5 Max MacBook Pro.
- Inco Splash is an open-source inference engine tuned for one model family (Qwen) and for Apple silicon.
- Claimed decode speed is up to 3x Ollama's and 2x oMLX's.
- The speedup is said to reach almost 4x when an agent fans out into sub-agents, so parallel agent workloads gain the most.
- Lesson: on the same hardware, the inference engine can matter as much as the model. Benchmark engines yourself before you commit to a local stack.
- The numbers are vendor claims from the quoted post, not independent benchmarks.

## Resources mentioned

- [ ] **[Inco Splash](https://github.com/incoai/splash)** · tool · github.com · free  
  Open-source LLM inference engine built for Qwen models on Apple silicon, aimed at fast local decoding.
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100739330218270961) · [notes](../../notes/03-llm-fundamentals/2026-09-18-ternary-bonsai-2-27b-9x-smaller-model-keeping-98-2-of.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../../notes/03-llm-fundamentals/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)) and 24 more
- [ ] **[Ollama](https://x.com/ollama)** · tool · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source tool for downloading and running LLMs on your own machine with minimal setup.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../../notes/09-llmops/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)), AIBackends: An API Layer Between Your App and AI Models (Now with Jev) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100848362648195307) · [notes](../../notes/12-system-design/2026-09-18-aibackends-an-api-layer-between-your-app-and-ai-models-now.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../../notes/07-agents/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 12 more
- [ ] **[oMLX](https://github.com/jundot/omlx)** · tool · github.com · free  
  An MLX-based tool for running local models on Apple silicon.  
  Also in: Claude support for Apple's Foundation Models framework (Melvin Vivas on [X](https://x.com/melvindvivas/status/2064807988297154876) · [notes](../../notes/03-llm-fundamentals/2026-06-11-claude-support-for-apple-s-foundation-models-framework.md))
- [ ] **[M5 Max MacBook Pro](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)** · other · apple.com · paid  
  Apple laptop with M5 Max chip, used as the hardware for the local inference benchmark.
