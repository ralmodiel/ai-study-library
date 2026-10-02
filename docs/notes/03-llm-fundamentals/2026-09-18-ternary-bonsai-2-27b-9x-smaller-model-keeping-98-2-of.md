# Ternary Bonsai 2 27B: 9x smaller model keeping 98.2% of benchmark scores

Melvin Vivas · X post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100739330218270961)

**Topics:** LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

Ternary Bonsai 2 27B has been released. It is a ternary-quantized model based on Qwen3.8 27B. The quoted announcement says it is 9x smaller than the full-precision original while keeping 98.2% of its aggregate benchmark performance. It shows how heavy quantization can make large open models practical to run locally.

## Key points

- Ternary Bonsai 2 27B is based on Qwen3.8 27B.
- Ternary (very low-bit) weights make it about 9x smaller than the full-precision model.
- It keeps 98.2% of the original's aggregate benchmark performance.
- It came out two months after the first Bonsai 27B, and the main improvement is quality.
- The creator is trying it out, so it's worth testing for local or low-cost inference.

## Resources mentioned

- [ ] **[Ternary Bonsai 2 27B](https://prismml.com/news/bonsai-2-27b)** · tool · prismml.com · free  
  A ternary-quantized 27B model, 9x smaller than full precision, that keeps 98.2% of benchmark performance.
- [ ] **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** · tool · huggingface.co · free  
  A 27B-parameter open-weight model from Alibaba's Qwen family that you can run locally or call through hosted APIs.  
  Also in: Deploying Qwen3.8 27B on Hugging Face Inference Endpoints (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105662886249165009) · [notes](../../notes/09-llmops/2026-10-01-deploying-qwen3-8-27b-on-hugging-face-inference-endpoints.md)), Using Hugging Face credits: Jobs, Inference Endpoints and Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105651655459168673) · [notes](../../notes/09-llmops/2026-10-01-using-hugging-face-credits-jobs-inference-endpoints-and.md)), Running Qwen3.8-27B Locally on an M5 Max MacBook with Inco Splash (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101115697049043177) · [notes](../../notes/09-llmops/2026-09-19-running-qwen3-8-27b-locally-on-an-m5-max-macbook-with-inco.md)), Free Qwen-3.8 27B Model via Infron (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099526082903122391) · [notes](../../notes/03-llm-fundamentals/2026-09-14-free-qwen-3-8-27b-model-via-infron.md)) and 24 more

## Try this

- [ ] Try Ternary Bonsai 2 27B and compare it with the full-precision Qwen3.8 27B.
