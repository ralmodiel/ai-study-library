# Running Qwen3.6-27B Fully in the Browser With WebGPU and wllama

Melvin Vivas · X video post · 2026-05-19 · [Open on X](https://x.com/melvindvivas/status/2056416824192094603)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals, Industry Trends & Job Market · **Level:** advanced

## Summary

Xuan Son Nguyen (@ngxson) of Hugging Face showed Qwen3.6-27B running entirely in a web browser on WebGPU, with no cloud. The model uses a Q2_K_XL GGUF quantization (about 11.2 GB) and is loaded through wllama.

## Key points

- Qwen3.6-27B (27B parameters) runs entirely inside the browser.
- It uses Q2_K_XL GGUF quantization, about 11.2 GB.
- It is loaded with wllama, a WebAssembly/WebGPU build of llama.cpp for browsers.
- 100% local on WebGPU, with no cloud calls.
- Heavy quantization is what makes a 27B model fit in the browser.

## Resources mentioned

- [ ] **[Qwen3.6-27B](https://huggingface.co/collections/Qwen/qwen36)** · tool · huggingface.co · free  
  Dense open-weight Qwen model. The MTP GGUF version runs at about 140 tokens/s.  
  Also in: Meta Muse Glimmer-30B: Open Weights Model That Beats Qwen3.6 37B on Agentic Tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086778584744817009) · [notes](../notes/2026-08-10-meta-muse-glimmer-30b-open-weights-model-that-beats-qwen3-6.md)), Unsloth MTP GGUFs make Qwen3.6 run 1.4x faster locally (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054997812346343505) · [notes](../notes/2026-05-15-unsloth-mtp-ggufs-make-qwen3-6-run-1-4x-faster-locally.md)), Qwen 3.6 27B: An Open Local Model with Benchmarks Near Claude Opus 4.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046992524833955902) · [notes](../notes/2026-04-23-qwen-3-6-27b-an-open-local-model-with-benchmarks-near.md)), Run Qwen3.6-27B Locally in 18GB RAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046986431646896464) · [notes](../notes/2026-04-23-run-qwen3-6-27b-locally-in-18gb-ram-with-unsloth-ggufs.md)) and 1 more
- [ ] **[wllama](https://github.com/ngxson/wllama)** · repo · github.com · free  
  A WebAssembly/WebGPU binding of llama.cpp for running GGUF models in the browser.
- [ ] **[Xuan Son Nguyen (@ngxson)](https://x.com/ngxson)** · person · x.com · free  
  Hugging Face engineer who builds wllama and works on llama.cpp.
- [ ] **[WebGPU](https://github.com/gpuweb/gpuweb)** · tool · github.com · free  
  A browser API for GPU compute that lets machine-learning models run fast on the user's device.  
  Also in: Real-Time Speech Transcription in the Browser with Voxtral and WebGPU (Melvin Vivas on [X](https://x.com/melvindvivas/status/2031930892592300430) · [notes](../notes/2026-03-12-real-time-speech-transcription-in-the-browser-with-voxtral.md))

## Try this

- [ ] Build a fully local in-browser chat app with wllama and a quantized GGUF model.
