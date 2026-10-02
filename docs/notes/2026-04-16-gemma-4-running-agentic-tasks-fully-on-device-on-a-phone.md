# Gemma 4 Running Agentic Tasks Fully On-Device on a Phone

Melvin Vivas · X video post · 2026-04-16 · 2:44 · 57 views · [Open on X](https://x.com/melvindvivas/status/2044840112593555838)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, Industry Trends & Job Market · **Level:** beginner

## Summary

Melvin Vivas reshares a demo of Google's Gemma 4 running entirely on a phone. In the demo, a voice assistant built on Gemma 4 handles a chain of everyday agentic tasks: it logs a mood-journal entry, analyzes a 7-day mood trend, reads the calendar, shows a place on a map, looks up the 2026 Oscars on Wikipedia, and picks music to match a photo. The point is that small open models can now call tools and handle multimodal input locally, with no cloud round-trip.

## Key points

- Gemma 4 is Google's open model family. The demo runs it entirely on-device, on a phone.
- The assistant uses tools to write structured data: it logs a mood-journal entry with a score (9) and a comment.
- It reasons over the user's local data, for example by analyzing the mood trend over the last 7 days.
- It connects to phone apps: it reads the day's calendar and returns a bullet list, and shows a location (Westfield Valley Fair) on a map.
- It retrieves outside knowledge: it searches Wikipedia for current information (the 2026 Oscars) and answers follow-up questions like Best Picture and most nominations.
- It handles multimodal input: from a breakfast photo, it picks music that matches the mood.
- The creator's takeaway: 'The future of AI is in our phones.' On-device agents bring privacy, lower latency and offline use.

## Resources mentioned

- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../notes/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../notes/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../notes/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../notes/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more
- [ ] **[Wikipedia](https://www.wikipedia.org)** · website · wikipedia.org · free  
  Free online encyclopedia that the on-device agent uses as a tool to look up current facts.

## Try this

- [ ] Build an on-device personal assistant with Gemma 4 that logs mood-journal entries and analyzes the trend over the last 7 days.
- [ ] Build a local agent that connects a small model to calendar, maps and Wikipedia tools.
- [ ] Build a multimodal app that takes a photo and suggests music to match its mood.
