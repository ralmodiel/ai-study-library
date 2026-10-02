# Gemini 3.5 Live Translate: Real-Time Speech Translation via the Gemini Live API

Melvin Vivas · X video post · 2026-06-16 · 1:40 · 125 views · [Open on X](https://x.com/melvindvivas/status/2066768467878187352)

**Topics:** LLM Fundamentals, Industry Trends & Job Market · **Level:** beginner

## Summary

Melvin Vivas says he used Google's live translation to follow a wedding ceremony in Switzerland. He quotes Google's announcement that Gemini 3.5 Live Translate is now in the Gemini Live API. The demo video shows a speaker sending one microphone stream to listeners, who each hear it in their own language. The model notices when the speaker changes language, with no setup needed. The model works with more than 70 languages and is available in the Gemini API and Google AI Studio.

## Key points

- Gemini 3.5 Live Translate is available through the Gemini Live API and supports more than 70 languages.
- Demo flow: the speaker starts a session and captures microphone audio. Attendees get a URL or QR code, join on their phones and pick a listening language.
- Each time a listener picks a new language, the app starts a new Live API session. Every translation uses the same microphone audio.
- Several target languages run at once in the demo, including Japanese, Spanish, Tamil and Mandarin.
- The model notices language switches by itself (for example English to German, or Sinhala to English) with no configuration.
- Some translations in the machine transcript are garbled or repeated, so test quality for your language pairs before relying on it.
- The creator used it in real life to follow a live wedding ceremony in Switzerland.

## Resources mentioned

- [ ] **[Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/)** · tool · blog.google · paid · open in a browser to verify  
  Google's real-time speech translation model that detects language switches automatically and supports more than 70 languages.  
  Also in: Gemini 3.5 Live Translate: Real-Time Speech Translation via the Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067704848620060928) · [notes](../notes/2026-06-18-gemini-3-5-live-translate-real-time-speech-translation-via.md))
- [ ] **[Gemini Live API](https://ai.google.dev/gemini-api/docs/live)** · docs · ai.google.dev · check price  
  Google's API for real-time, streaming audio sessions with Gemini models, used here for live translation.  
  Also in: Gemini 3.5 Live Translate: Real-Time Speech Translation via the Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067704848620060928) · [notes](../notes/2026-06-18-gemini-3-5-live-translate-real-time-speech-translation-via.md))
- [ ] **[Google AI Studio](https://aistudio.google.com)** · tool · aistudio.google.com · free  
  Google's web tool for prompting Gemini models and vibe-coding full apps, including real-time multiplayer apps, with a built-in coding agent.  
  Also in: Firebase Studio Shutdown: Move to Google AI Studio or Antigravity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069099874478657679) · [notes](../notes/2026-06-23-firebase-studio-shutdown-move-to-google-ai-studio-or.md)), Gemini 3.5 Live Translate: Real-Time Speech Translation via the Live API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2067704848620060928) · [notes](../notes/2026-06-18-gemini-3-5-live-translate-real-time-speech-translation-via.md)), Vibe-Coding Real-Time Multiplayer Apps in Google AI Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054615804646469791) · [notes](../notes/2026-05-13-vibe-coding-real-time-multiplayer-apps-in-google-ai-studio.md)), Google AI Pro/Ultra Subscriptions Now Work in Google AI Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046450231748018345) · [notes](../notes/2026-04-21-google-ai-pro-ultra-subscriptions-now-work-in-google-ai.md)) and 1 more
- [ ] **[Google Live Translate](https://blog.google/products-and-platforms/products/translate/live-translate-with-headphones/)** · tool · blog.google · free · open in a browser to verify  
  Google's live translation feature that the creator used himself.

## Try this

- [ ] Try Gemini 3.5 Live Translate in Google AI Studio.
- [ ] Build something with the Gemini Live API ("We can't wait to hear what you built").
- [ ] A multilingual live-presentation app: the speaker shares mic audio, attendees join by URL or QR code, and each listens in their own language through Gemini Live API sessions.
- [ ] A real-time translation companion for live events such as ceremonies or meetings, where speakers switch between languages.
