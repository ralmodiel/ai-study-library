# Run LFM2.5-2.6B locally with llama-cpp-python in Colab

Melvin Vivas · X post · 2026-08-16 · [Open on X](https://x.com/melvindvivas/status/2088912347964608946)

**Topics:** LLM Fundamentals, AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator shares a Colab notebook that runs the small LFM2.5-2.6B model with llama-cpp-python. It includes a sample inference and a tool-calling example. He also posts quick benchmarks from a free T4 GPU using Q4_K_M quantization.

## Key points

- The notebook runs LFM2.5-2.6B through llama-cpp-python (GGUF / llama.cpp backend).
- It includes a basic inference example and a tool-calling example.
- Benchmarks were run on a T4 GPU in Google Colab.
- Quantization was Q4_K_M.
- Average latency was 1.40 s.
- Average end-to-end throughput was 91.55 tokens/s.
- The repo collects notebooks for fine-tuning and running local models in Colab.

## Resources mentioned

- [ ] **[donvito/notebooks](https://github.com/donvito/notebooks)** · repo · github.com · free  
  The creator's notebooks for fine-tuning and running local models, which you can run in Google Colab, including a GLiNER2.5-Decide intent classification example.  
  Also in: Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../../notes/03-llm-fundamentals/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 3 more
- [ ] **[LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** · tool · huggingface.co · free  
  Liquid AI's small language model, which can be paired with the LFM2.5-VL-3B vision model.  
  Also in: Coworker: Open-Source Work Agent That Runs on Small Local Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093317984358219810) · [notes](../../notes/07-agents/2026-08-28-coworker-open-source-work-agent-that-runs-on-small-local.md)), Coworker with Liquid AI LFM2.5-2.6B via LM Studio on a Mac (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092602149440196867) · [notes](../../notes/07-agents/2026-08-26-coworker-with-liquid-ai-lfm2-5-2-6b-via-lm-studio-on-a-mac.md)), Zero-Cost Coworker Setup: OpenRouter Free Models + Local LFM2.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092562143443034155) · [notes](../../notes/07-agents/2026-08-26-zero-cost-coworker-setup-openrouter-free-models-local-lfm2-5.md)), Coworker: A Subscription-Free AI Agent on Local LFM2.5-2.6B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092525819084386315) · [notes](../../notes/07-agents/2026-08-26-coworker-a-subscription-free-ai-agent-on-local-lfm2-5-2-6b.md)) and 9 more
- [ ] **[llama-cpp-python](https://github.com/abetlen/llama-cpp-python)** · tool · github.com · free  
  Python bindings for llama.cpp for running quantized GGUF models locally.
- [ ] **[Google Colab](https://colab.research.google.com/)** · tool · colab.research.google.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more

## Try this

- [ ] Open the donvito/notebooks repo and run the LFM2.5-2.6B notebook on a Colab T4 GPU.
- [ ] Try the tool-calling example with a small local model.
- [ ] Benchmark different quantizations (e.g., Q4\_K\_M vs Q8\_0) of a small model on a Colab T4 and compare latency and throughput.
- [ ] Build a local tool-calling agent on top of a small quantized model with llama-cpp-python.
