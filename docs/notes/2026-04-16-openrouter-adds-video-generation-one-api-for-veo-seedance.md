# OpenRouter Adds Video Generation: One API for Veo, Seedance, Wan and Sora

Melvin Vivas · X video post · 2026-04-16 · 3:27 · 212 views · [Open on X](https://x.com/melvindvivas/status/2044754354297782740)

**Topics:** LLM Fundamentals, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

Melvin Vivas shares OpenRouter's launch video for video generation. One unified API now covers top video models (Seedance 2.0, Veo 3.1, Wan 2.7, Sora 2 Pro), alongside text, image, audio, embedding and reranker models. The OpenRouter team explains why they built it: video generation is fragmented and switching models costs a lot. They also show how to compare pricing, read the docs, use async video jobs, query model capabilities, and pass model-specific parameters through to the provider.

## Key points

- OpenRouter's one API now covers video generation, next to text, images, audio, embeddings and rerankers.
- Launch models: Google Veo 3.1, BytePlus/ByteDance Seedance 2.0, Alibaba Wan 2.7 and OpenAI Sora 2 Pro. The team picked them for both expressiveness and cost efficiency.
- Usage stats: over 1 in 15 OpenRouter requests include images, audio or files as input. Image generation reached 100M generations in a few months and is growing about 50% month over month.
- Why build it: video models each have unique capabilities, but switching between them costs developers a lot. A unified API lowers that cost.
- On the OpenRouter model listing you can filter by output modality (video). Hover over a price to see the cost for each resolution and generation type, which makes models easier to compare.
- Video generation is asynchronous: you submit a job, wait a minute or two, then download the result. This lets you track several generations at once.
- A video models route lets you fetch each model's capabilities in code: supported resolutions (most support at least 1080p), durations and cost per generation.
- You can pass parameters through to the provider's own API, so you don't lose model-specific features by going through OpenRouter.

## Resources mentioned

- [ ] **[OpenRouter](https://openrouter.ai/z-ai/glm-5-tur)** · tool · openrouter.ai · free  
  OpenRouter is a unified API gateway that gives access to many LLMs behind one OpenAI-compatible endpoint; this link is its X account.  
  Also in: The Jev model is now on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103826669324869745) · [notes](../notes/2026-09-26-the-jev-model-is-now-on-openrouter.md)), Kev-4B model, an alternative to Jev, now available on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103655416299466815) · [notes](../notes/2026-09-26-kev-4b-model-an-alternative-to-jev-now-available-on.md)), Space Bunny Alpha: stealth 1M-context flash model on OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102779478737142186) · [notes](../notes/2026-09-23-space-bunny-alpha-stealth-1m-context-flash-model-on.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 41 more
- [ ] **[OpenRouter Documentation](https://openrouter.ai/docs)** · docs · openrouter.ai · free  
  OpenRouter's docs explaining video generation parameters, the async request flow and the video models route.  
  Also in: OpenRouter MCP: Pick, Price, and Test LLMs from Inside Your Coding Agent (Melvin Vivas on [X](https://x.com/melvindvivas/status/2070171878283710858) · [notes](../notes/2026-06-25-openrouter-mcp-pick-price-and-test-llms-from-inside-your.md))
- [ ] **[Veo 3.1](https://deepmind.google/models/veo/)** · tool · deepmind.google · check price  
  Google DeepMind's text-to-video model family. "Veo Omni" is a speculated, unconfirmed new variant of it.  
  Also in: "Veo Omni?": A 10-Second Teaser Clip of a Possible New Google Video Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2053843968472097147) · [notes](../notes/2026-05-11-veo-omni-a-10-second-teaser-clip-of-a-possible-new-google.md))
- [ ] **[Seedance 2.0](https://fal.ai/seedance-2.0)** · tool · fal.ai · paid  
  ByteDance's multimodal video generation model. It makes videos with synchronized audio from text, image, video and audio inputs.  
  Also in: Opinion: Seedance 2.0 Still Beats Gemini Omni for Video (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056827384800907560) · [notes](../notes/2026-05-20-opinion-seedance-2-0-still-beats-gemini-omni-for-video.md)), Cheap API access to Seedance 2.0 via WaveSpeedAI? (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046667781815652766) · [notes](../notes/2026-04-22-cheap-api-access-to-seedance-2-0-via-wavespeedai.md)), Seedance 2.0 on fal: Strict Content Filters Block Video Generation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046160846360084525) · [notes](../notes/2026-04-20-seedance-2-0-on-fal-strict-content-filters-block-video.md)), Seedance 2.0 + Suno: Prompting an AI K-pop Music Video Synced to Audio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045404616029077822) · [notes](../notes/2026-04-18-seedance-2-0-suno-prompting-an-ai-k-pop-music-video-synced.md)) and 8 more
- [ ] **[Wan 2.7](https://www.alibabacloud.com/blog/alibaba-unveils-wan2-7-video-to-elevate-creators-from-executors-to-directors_603009)** · tool · alibabacloud.com · check price  
  Alibaba's video generation model.
- [ ] **[Sora 2 Pro](https://openrouter.ai/openai/sora-2-pro)** · tool · openrouter.ai · paid  
  OpenAI's video generation model.
- [ ] **[OpenRouter Discord](https://discord.com/invite/openrouter)** · community · discord.com · free  
  OpenRouter's community server, where members get early access to and test new features.

## Try this

- [ ] Browse the OpenRouter model listing, filter by video output, and hover over prices to compare costs by resolution.
- [ ] Read the video generation section of the OpenRouter docs and API reference.
- [ ] Use the video models route to check each model's resolutions, durations and pricing in code.
- [ ] Join the OpenRouter Discord for early access to new features.
