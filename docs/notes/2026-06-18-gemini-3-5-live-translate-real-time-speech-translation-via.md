# Gemini 3.5 Live Translate: Real-Time Speech Translation via the Live API

Melvin Vivas · X video post · 2026-06-18 · 1:40 · 171 views · [Open on X](https://x.com/melvindvivas/status/2067704848620060928)

**Topics:** LLM Fundamentals, Industry Trends & Job Market · **Level:** beginner

## Summary

This is an announcement and demo of Gemini 3.5 Live Translate, which is now available in the Gemini Live API and Google AI Studio. In the demo, a speaker's microphone audio is translated live for audience members, who each listen in their own language. The model notices when the speaker switches language and handles it without any setup. It supports more than 70 languages.

## Key points

- Gemini 3.5 Live Translate is available to developers through the Gemini Live API and can be tried in Google AI Studio.
- It translates speech in real time across more than 70 languages.
- Demo setup: the speaker creates a session and captures audio from their microphone. The app then gives a URL or QR code that attendees scan on their phones to join.
- Each attendee picks their preferred language. When a listener starts a new language, the app opens a new Live API session for that language.
- Several languages can run at once from the same source audio. The demo showed Japanese, Spanish, French and Mandarin.
- The model detects language switches automatically. In the demo the speaker moved from English to German and to Sinhala, and the translation kept working with no configuration.
- Example use cases are global meetings and presentations to international audiences.

## Resources mentioned

- [ ] **[Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/)** · tool · blog.google · paid · open in a browser to verify  
  Google's real-time speech translation model that detects language switches automatically and supports more than 70 languages.  
  Also in: Gemini 3.5 Live Translate: Real-Time Speech Translation via the Gemini Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2066768467878187352) · [notes](../notes/2026-06-16-gemini-3-5-live-translate-real-time-speech-translation-via.md))
- [ ] **[Gemini Live API](https://ai.google.dev/gemini-api/docs/live)** · docs · ai.google.dev · check price  
  Google's API for real-time, streaming audio sessions with Gemini models, used here for live translation.  
  Also in: Gemini 3.5 Live Translate: Real-Time Speech Translation via the Gemini Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2066768467878187352) · [notes](../notes/2026-06-16-gemini-3-5-live-translate-real-time-speech-translation-via.md))
- [ ] **[Gemini API](https://ai.google.dev)** · docs · ai.google.dev · free  
  Google's developer API and docs for calling Gemini and Gemma models.  
  Also in: Gemma 4 Now Available Through the Gemini API (Dev Use Only) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045783418458497401) · [notes](../notes/2026-04-19-gemma-4-now-available-through-the-gemini-api-dev-use-only.md)), Using Gemma 4 via the Gemini API and Google AI Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2041699943883395367) · [notes](../notes/2026-04-08-using-gemma-4-via-the-gemini-api-and-google-ai-studio.md))
- [ ] **[Google AI Studio](https://aistudio.google.com)** · tool · aistudio.google.com · free  
  Google's web tool for prompting Gemini models and vibe-coding full apps, including real-time multiplayer apps, with a built-in coding agent.  
  Also in: Firebase Studio Shutdown: Move to Google AI Studio or Antigravity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069099874478657679) · [notes](../notes/2026-06-23-firebase-studio-shutdown-move-to-google-ai-studio-or.md)), Gemini 3.5 Live Translate: Real-Time Speech Translation via the Gemini Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2066768467878187352) · [notes](../notes/2026-06-16-gemini-3-5-live-translate-real-time-speech-translation-via.md)), Vibe-Coding Real-Time Multiplayer Apps in Google AI Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054615804646469791) · [notes](../notes/2026-05-13-vibe-coding-real-time-multiplayer-apps-in-google-ai-studio.md)), Google AI Pro/Ultra Subscriptions Now Work in Google AI Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046450231748018345) · [notes](../notes/2026-04-21-google-ai-pro-ultra-subscriptions-now-work-in-google-ai.md)) and 1 more

## Try this

- [ ] Try Gemini 3.5 Live Translate in Google AI Studio.
- [ ] Build something with the model through the Gemini Live API.
- [ ] A live translation app for presentations: the speaker shares a URL or QR code, and attendees join on their phones to hear the talk in their chosen language (one Live API session per language).
- [ ] A translator for multilingual meetings that follows speakers automatically when they switch languages.
