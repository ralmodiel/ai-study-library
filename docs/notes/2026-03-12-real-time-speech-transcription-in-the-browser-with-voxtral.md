# Real-Time Speech Transcription in the Browser with Voxtral and WebGPU

Melvin Vivas · X video post · 2026-03-12 · 0:39 · 230 views · [Open on X](https://x.com/melvindvivas/status/2031930892592300430)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

A short demo of real-time speech-to-text running entirely in the browser. It uses Mistral AI's Voxtral-Mini-4B (Voxtral Realtime) streaming ASR model through Transformers.js on WebGPU. It shows that on-device inference can give low-latency, multilingual transcription that keeps audio private and costs nothing to serve.

## Key points

- Voxtral WebGPU runs Mistral AI's Voxtral-Mini-4B streaming ASR model 100% locally in the browser.
- The browser inference is powered by Transformers.js on top of WebGPU.
- The model supports 13 languages and can reach under 500 ms latency.
- The architecture supports streaming natively and uses a custom causal audio encoder to keep transcription accurate and low-latency.
- All audio processing and model inference happen on the device, so no audio leaves the machine. This makes it a good fit for privacy-sensitive use cases.
- Running on the client means zero server or inference cost for the developer.

## Resources mentioned

- [ ] **[Voxtral WebGPU (demo)](https://huggingface.co/spaces/mistralai/Voxtral-Realtime-WebGPU)** · tool · huggingface.co · free  
  A browser demo that transcribes speech in real time on your own device using Voxtral-Mini-4B on WebGPU.
- [ ] **[Voxtral-Mini-4B (Voxtral Realtime)](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602)** · tool · huggingface.co · free  
  Mistral AI's streaming speech-recognition (ASR) model with a custom causal audio encoder, supporting 13 languages.
- [ ] **[Transformers.js](https://huggingface.co/docs/transformers.js)** · tool · huggingface.co · free  
  Hugging Face's JavaScript library for running transformer models directly in the browser or in Node.js.
- [ ] **[WebGPU](https://github.com/gpuweb/gpuweb)** · tool · github.com · free  
  A browser API for GPU compute that lets machine-learning models run fast on the user's device.  
  Also in: Running Qwen3.6-27B Fully in the Browser With WebGPU and wllama (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056416824192094603) · [notes](../notes/2026-05-19-running-qwen3-6-27b-fully-in-the-browser-with-webgpu-and.md))
- [ ] **[Mistral AI](https://mistral.ai)** · website · mistral.ai · check price  
  The AI company that builds the Voxtral speech models.

## Try this

- [ ] Try the Voxtral WebGPU demo yourself in the browser.
- [ ] Build a privacy-preserving speech transcription web app that runs Voxtral fully on-device with Transformers.js and WebGPU.
