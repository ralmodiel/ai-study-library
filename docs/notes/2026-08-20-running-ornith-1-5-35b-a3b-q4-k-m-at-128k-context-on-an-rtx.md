# Running Ornith-1.5-35B-A3B (Q4_K_M) at 128k Context on an RTX 3090 with llama.cpp

Melvin Vivas · X video post · 2026-08-20 · 1:51 · 439 views · [Open on X](https://x.com/melvindvivas/status/2090381415557021767)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

This is a short local-inference benchmark. It shows how to serve the Ornith-1.5-35B-A3B model, quantized to Q4_K_M GGUF, with llama.cpp's llama-server on a single 24GB RTX 3090. All layers run on the GPU with a 128k context window. The post gives the exact command (flash attention and a q8_0-quantized KV cache) and reports generation speeds by output length and by context size.

## Key points

- Setup: Ornith-1.5-35B-A3B in Q4_K_M GGUF on one RTX 3090, with a 128k context window and every layer on the GPU.
- Command: llama-server -m Ornith-1.5-35B-Q4_K_M.gguf -c 131072 -ngl 99 --port 8080 -fa on -ctk q8_0 -ctv q8_0 -np 1
- Flag meanings: -c 131072 sets a 128k context; -ngl 99 offloads all layers to the GPU; -fa on turns on flash attention; -ctk/-ctv q8_0 quantize the K and V cache to 8-bit to save VRAM; -np 1 allows a single parallel slot; --port 8080 sets the port the server listens on.
- Speed by output length: about 120 tok/s on short replies, 90 tok/s at 4k output tokens, 78 tok/s at 8k, and roughly 50 tok/s on very long answers.
- Speed by context size: 137 tok/s at 16k, 160 tok/s at 64k, and about 120 tok/s at 128k.
- By the usual naming convention, 'A3B' means a mixture-of-experts model with about 3B active parameters out of 35B total. That is why it runs fast on consumer hardware.
- Quantizing the KV cache to q8_0 together with Q4_K_M weights is what lets a 35B model with 128k context fit on a 24GB card.
- The creator said the prompt used for the test was shared in the post's replies.

## Resources mentioned

- [ ] **[Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** · tool · huggingface.co · free  
  An open-weight mixture-of-experts language model (35B total, about 3B active parameters), run here as a Q4\_K\_M GGUF quantization.  
  Also in: Running a Local Ornith Model as the Backend for a Hermes Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090390994168734063) · [notes](../notes/2026-08-20-running-a-local-ornith-model-as-the-backend-for-a-hermes.md)), Serving Ornith-1.5-35B-A3B at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381418136555542) · [notes](../notes/2026-08-20-serving-ornith-1-5-35b-a3b-at-128k-context-on-an-rtx-3090.md))
- [ ] **[Ornith (@ornith\_)](https://x.com/ornith_)** · person · x.com · free  
  The X account of Ornith, the team credited with releasing the Ornith-1.5 model.  
  Also in: Serving Ornith-1.5-35B-A3B at 128k Context on an RTX 3090 with llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090381418136555542) · [notes](../notes/2026-08-20-serving-ornith-1-5-35b-a3b-at-128k-context-on-an-rtx-3090.md))
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../notes/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../notes/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../notes/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../notes/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more
- [ ] **[NVIDIA GeForce RTX 3090](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090/)** · tool · nvidia.com · paid  
  Consumer GPU with 24 GB of VRAM, used here to run a long-context LLM locally.  
  Also in: Portable Computer Now Runs AI Agents and Models Locally on NVIDIA RTX PCs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099558149305024711) · [notes](../notes/2026-09-15-portable-computer-now-runs-ai-agents-and-models-locally-on.md)), Long-Context Local LLM on an RTX 3090: .env Config and ~64 tok/s Benchmark (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095350341999227217) · [notes](../notes/2026-09-03-long-context-local-llm-on-an-rtx-3090-env-config-and-64-tok.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../notes/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax H3 Locally on a Single RTX 3090 (Demo) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085439986699223322) · [notes](../notes/2026-08-06-running-minimax-h3-locally-on-a-single-rtx-3090-demo.md)) and 2 more

## Try this

- [ ] Run the llama-server command shown to serve a quantized MoE model locally on port 8080.
- [ ] Use -fa on together with -ctk q8\_0 -ctv q8\_0 to fit a long (128k) context into 24GB of VRAM.
- [ ] Check the post's replies for the prompt used in the test, and measure tok/s on your own hardware for comparison.
- [ ] Benchmark a local MoE model on your own GPU across different context sizes (16k, 64k, 128k) and output lengths, then chart how tok/s changes.
