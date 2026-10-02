# Using Gemma 4 via the Gemini API and Google AI Studio

Melvin Vivas · X post · 2026-04-08 · [Open on X](https://x.com/melvindvivas/status/2041699943883395367)

**Topics:** LLM Fundamentals, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

Gemma 4 is now available through the official Gemini API and Google AI Studio. You call it with the same google-genai SDK used for Gemini. The quoted announcement names the model IDs and lists example use cases: text generation, system instructions with function calling, and image understanding.

## Key points

- Gemma 4 is available in the Gemini API and Google AI Studio.
- Model IDs: `gemma-4-26b-a4b-it` and `gemma-4-31b-it`.
- Use the same `google-genai` SDK as for Gemini; just swap the model name.
- Text generation uses `generate_content`.
- Supports system instructions and function calling.
- Supports image understanding (multimodal input).

## Resources mentioned

- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../../notes/07-agents/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../../notes/16-trends/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../../notes/03-llm-fundamentals/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more
- [ ] **[Google AI Studio](https://aistudio.google.com)** · tool · aistudio.google.com · free  
  Google's web tool for prompting Gemini models and vibe-coding full apps, including real-time multiplayer apps, with a built-in coding agent.  
  Also in: Firebase Studio Shutdown: Move to Google AI Studio or Antigravity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069099874478657679) · [notes](../../notes/13-ai-tools/2026-06-23-firebase-studio-shutdown-move-to-google-ai-studio-or.md)), Gemini 3.5 Live Translate: Real-Time Speech Translation via the Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067704848620060928) · [notes](../../notes/03-llm-fundamentals/2026-06-18-gemini-3-5-live-translate-real-time-speech-translation-via.md)), Gemini 3.5 Live Translate: Real-Time Speech Translation via the Gemini Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2066768467878187352) · [notes](../../notes/03-llm-fundamentals/2026-06-16-gemini-3-5-live-translate-real-time-speech-translation-via.md)), Vibe-Coding Real-Time Multiplayer Apps in Google AI Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054615804646469791) · [notes](../../notes/13-ai-tools/2026-05-13-vibe-coding-real-time-multiplayer-apps-in-google-ai-studio.md)) and 1 more
- [ ] **[Gemini API](https://ai.google.dev)** · docs · ai.google.dev · free  
  Google's developer API and docs for calling Gemini and Gemma models.  
  Also in: Gemini 3.5 Live Translate: Real-Time Speech Translation via the Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067704848620060928) · [notes](../../notes/03-llm-fundamentals/2026-06-18-gemini-3-5-live-translate-real-time-speech-translation-via.md)), Gemma 4 Now Available Through the Gemini API (Dev Use Only) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045783418458497401) · [notes](../../notes/03-llm-fundamentals/2026-04-19-gemma-4-now-available-through-the-gemini-api-dev-use-only.md))
- [ ] **[google-genai SDK](https://github.com/googleapis/python-genai)** · repo · github.com · free  
  Google Gen AI Python SDK used to call Gemini and Gemma models (generate\_content, function calling, images).

## Try this

- [ ] Get an API key in Google AI Studio and call \`gemma-4-31b-it\` or \`gemma-4-26b-a4b-it\` with the google-genai SDK.
- [ ] Try text generation with generate\_content, a system instruction with function calling, and image understanding.
- [ ] Build a small tool-calling assistant on Gemma 4 using system instructions and function calling through the google-genai SDK.
