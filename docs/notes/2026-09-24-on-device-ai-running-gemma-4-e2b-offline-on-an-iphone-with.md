# On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT

Melvin Vivas · X video post · 2026-09-24 · 0:44 · 2,046 views · [Open on X](https://x.com/melvindvivas/status/2102981288370278873)

**Topics:** Industry Trends & Job Market, LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

Melvin Vivas shows an iPhone app that runs Google's open model Gemma 4 E2B entirely on the phone, with no internet connection. He built the app using Devin's Mac cloud environment. The app downloads the model, loads it with Google's LiteRT runtime, and then answers questions offline. He calls on-device AI one of the most exciting directions in AI.

## Key points

- Small open models like Gemma 4 E2B are small enough to run locally on a phone.
- How the app works: download the model once, load it with the LiteRT on-device runtime, then run inference on the phone.
- Once the model is loaded, the phone needs no internet to answer questions. The demo asks 'what is AI?' with the phone offline.
- The app was built with Devin, an AI coding agent, using its Mac cloud environment, which is useful for iOS builds.
- The creator presents on-device AI as an important trend: a 'ChatGPT-like' model running locally on your phone.

## Resources mentioned

- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../notes/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../notes/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../notes/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)), Running Gemma4-E2B tool calling locally on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101204879188594857) · [notes](../notes/2026-09-19-running-gemma4-e2b-tool-calling-locally-on-an-iphone.md)) and 25 more
- [ ] **[LiteRT](https://ai.google.dev/edge/litert)** · tool · ai.google.dev · free  
  Google's on-device runtime (formerly TensorFlow Lite) for running ML models and LLMs on mobile and edge devices.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../notes/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), LiteRT: Google's on-device AI runtime (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101161503617651166) · [notes](../notes/2026-09-19-litert-google-s-on-device-ai-runtime.md))
- [ ] **[Devin](https://x.com/DevinAI)** · tool · x.com · paid  
  A desktop app from the makers of the Devin coding agent for planning, delegating, reviewing and shipping work across fleets of local and cloud coding agents.  
  Also in: Use Your ChatGPT Plus/Pro Subscription to Run Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105133960296898826) · [notes](../notes/2026-09-30-use-your-chatgpt-plus-pro-subscription-to-run-devin.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Devin price cuts and top score on FrontierCode 1.1 Extended (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104637875396735214) · [notes](../notes/2026-09-29-devin-price-cuts-and-top-score-on-frontiercode-1-1-extended.md)), Devin Mobile Beta: Cognition's AI Coding Agent Is Now on Mobile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104606293856325658) · [notes](../notes/2026-09-29-devin-mobile-beta-cognition-s-ai-coding-agent-is-now-on.md)) and 43 more

## Try this

- [ ] Watch the on-device AI space ('Watch out for on-device AI').
- [ ] Build an iPhone app that downloads a small open model (e.g., Gemma 4 E2B) and runs it offline with LiteRT as a local chat assistant.
