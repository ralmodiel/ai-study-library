# Building a Nano Banana 2 Image-Gen App with Memex Managed AI Connectors

Melvin Vivas · X video post · 2026-03-01 · 4:51 · 197 views · [Open on X](https://x.com/melvindvivas/status/2028132338249634105)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals, Portfolio Projects · **Level:** beginner

## Summary

This is a product demo. In under five minutes, the presenter prompts Memex (the app builder behind @WorkshopAI; the caption and the video use different names) to build and publish an album-cover generator app that uses Google's Nano Banana 2 image model. The main idea is "managed AI connectors": the platform takes care of API keys, billing and rate limits for Gemini, OpenAI and Anthropic models, so the generated app has AI built in. The presenter also describes an earlier demo where several models worked together to turn a topic into a blog post with images.

## Key points

- Nano Banana 2 is Google's new image generation model. Google describes it as having Gemini Pro-level performance at Flash speed, and in the demo an image came back within seconds.
- App spec given to Memex: the user types a fake band name, picks a genre from a drop-down, and the app generates an album cover.
- The Gemini managed connector means users don't need their own Google/Gemini API keys or accounts, and don't manage billing or rate limits themselves.
- Managed connectors cover models from Gemini, OpenAI and Anthropic, and one app can use more than one provider.
- Memex built a simple working frontend in about a minute. Generated covers can be downloaded, and the app can be published to a public link.
- Example of a multi-model pipeline: topic → blog copy written with OpenAI models, using brand guidelines from Google Drive → image prompts generated automatically → images generated with Gemini, all in the brand's tone and voice.

## Resources mentioned

- [ ] **[Workshop AI (@WorkshopAI) on X](https://x.com/workshopai)** · website · x.com · free  
  The X account of Workshop AI, the AI app-building platform that offers Managed AI Connectors, including Nano Banana 2.
- [ ] **[Memex](https://memex.tech)** · tool · memex.tech · check price  
  An AI app builder that generates and publishes apps from a prompt, with managed connectors for Gemini, OpenAI and Anthropic models.
- [ ] **[Nano Banana 2.0](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/)** · tool · blog.google · free  
  Google's Gemini image generation model, described as having Pro-level performance at Flash speed.  
  Also in: Run Qwen-Image-2.1 locally on 12GB VRAM with Unsloth GGUFs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102440958164115529) · [notes](../notes/2026-09-23-run-qwen-image-2-1-locally-on-12gb-vram-with-unsloth-ggufs.md))
- [ ] **[Gemini](https://gemini.google.com)** · tool · gemini.google.com · free  
  Google's multimodal AI model family. In this prototype it interprets voice, pointer position and on-screen content, and writes code to act on what the user wants.  
  Also in: Multimodal AI Pointer: Combining Voice, Mouse Pointing and Vision with Gemini (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054614185963888919) · [notes](../notes/2026-05-13-multimodal-ai-pointer-combining-voice-mouse-pointing-and.md)), Why Claude Works Well as a Brainstorming Partner (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045404254375157902) · [notes](../notes/2026-04-18-why-claude-works-well-as-a-brainstorming-partner.md)), Workshop AI: Building Apps with Cloud and Local Agents (GLM 5, Qwen 3.5) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2037540661747142980) · [notes](../notes/2026-03-27-workshop-ai-building-apps-with-cloud-and-local-agents-glm-5.md))
- [ ] **[OpenAI](https://x.com/OpenAI)** · tool · x.com · free  
  An AI model provider whose models can be used through managed connectors.  
  Also in: Creator's favorite OpenAI DevDay announcements (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105021153379275030) · [notes](../notes/2026-09-30-creator-s-favorite-openai-devday-announcements.md)), OpenAI Agents API with Bring Your Own Sandbox as a backend for a 'software factory' (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098729077163401577) · [notes](../notes/2026-09-12-openai-agents-api-with-bring-your-own-sandbox-as-a-backend.md)), Building Software Factories on the OpenAI Agents API (Codex-Powered) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098405420855660963) · [notes](../notes/2026-09-11-building-software-factories-on-the-openai-agents-api-codex.md)), Coworker: Free Local-First Desktop App for Running AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093548227039830065) · [notes](../notes/2026-08-29-coworker-free-local-first-desktop-app-for-running-ai-agents.md)) and 11 more
- [ ] **[Anthropic](https://www.anthropic.com)** · tool · anthropic.com · check price  
  An AI model provider (Claude models) whose models are available through managed connectors.
- [ ] **[Google Drive](https://www.google.com/drive/)** · tool · google.com · free  
  A cloud file storage service, used as a knowledge-base connector.

## Try this

- [ ] Try the published album cover generator app (link in the original post) and share the covers you generate.
- [ ] Build an app with Nano Banana 2 in Workshop AI / Memex using its managed Gemini connector.
- [ ] An album cover generator: the user enters a fake band name and picks a genre from a drop-down, and Nano Banana 2 generates the cover, which can be downloaded and published.
- [ ] A multi-model blog/social content generator: from a topic plus brand guidelines in Google Drive, write blog copy with OpenAI models, generate image prompts automatically, and create the images with Gemini.
