# Gemma 4 E4B: A Local Agentic Edge Model in 6GB RAM

Melvin Vivas · X video post · 2026-04-04 · [Open on X](https://x.com/melvindvivas/status/2040291351615697159)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

Google DeepMind's Gemma 4 E4B, a small edge model quantized to 4-bit, completed a full repo audit by running Bash commands and tool calls locally. It needed only about 6GB of RAM, which shows that small open models can now run agent workflows on-device.

## Key points

- Gemma 4 E4B is an edge-sized model from Google DeepMind.
- At 4-bit quantization it runs in about 6GB of RAM.
- It handled an agent task end to end: a full repository audit.
- The task used local Bash execution and tool calls, with no cloud API.
- Small quantized models are becoming practical for local coding agents.

## Resources mentioned

- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../notes/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../notes/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../notes/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../notes/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more
- [ ] **[Google DeepMind (@GoogleDeepMind) on X](https://x.com/GoogleDeepMind)** · person · x.com · free  
  Google DeepMind's official X account, which posts research and model releases such as Gemma.  
  Also in: Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2048445624148992148) · [notes](../notes/2026-04-26-running-ai-locally-rebuilding-aibackends-as-a-python.md)), Gemma 4 and Google DeepMind's Open-Source Push (Melvin Vivas on [X](https://x.com/melvindvivas/status/2040392891231817956) · [notes](../notes/2026-04-04-gemma-4-and-google-deepmind-s-open-source-push.md))

## Try this

- [ ] Run Gemma 4 E4B (4-bit) locally and test it on agent tasks that use tool calls.
- [ ] Build a local repo-audit agent that runs a small quantized model and executes Bash tool calls.
