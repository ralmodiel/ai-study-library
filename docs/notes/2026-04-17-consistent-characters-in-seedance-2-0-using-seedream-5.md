# Consistent Characters in Seedance 2.0 Using Seedream 5 Reference Images

Melvin Vivas · X video post · 2026-04-17 · 0:33 · 62 views · [Open on X](https://x.com/melvindvivas/status/2045174244318101660)

**Topics:** AI Dev Tools & Productivity · **Level:** intermediate

## Summary

This short post with a demo video (no speech) shows a two-step workflow for keeping a character consistent in AI-generated video. First you generate character images with the Seedream 5 (Lite) image model and request BytePlus-hosted URLs. Then you pass those URLs as reference images or init images to Seedance 2.0 or Seedance 2.0 (Fast), so the same character appears across clips.

## Key points

- Seedance 2.0 now supports consistent characters across generated videos.
- Step 1: Generate character images with Seedream 5 (Lite).
- When generating, set the parameter return_byteplus_urls=true so the images come back as BytePlus-hosted URLs.
- Step 2: Pass those image URLs to Seedance 2.0 or Seedance 2.0 (Fast) as reference images or init images.
- Reference images guide what the character looks like. Init images set the starting frame of the video.
- Seedance 2.0 (Fast) is a faster variant that takes the same character-reference inputs.
- The post doesn't name the API or platform that exposes the return_byteplus_urls parameter, so check the docs of the provider you use.

## Resources mentioned

- [ ] **[Seedance 2.0](https://fal.ai/seedance-2.0)** · tool · fal.ai · paid  
  ByteDance's multimodal video generation model. It makes videos with synchronized audio from text, image, video and audio inputs.  
  Also in: Opinion: Seedance 2.0 Still Beats Gemini Omni for Video (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056827384800907560) · [notes](../notes/2026-05-20-opinion-seedance-2-0-still-beats-gemini-omni-for-video.md)), Cheap API access to Seedance 2.0 via WaveSpeedAI? (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046667781815652766) · [notes](../notes/2026-04-22-cheap-api-access-to-seedance-2-0-via-wavespeedai.md)), Seedance 2.0 on fal: Strict Content Filters Block Video Generation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046160846360084525) · [notes](../notes/2026-04-20-seedance-2-0-on-fal-strict-content-filters-block-video.md)), Seedance 2.0 + Suno: Prompting an AI K-pop Music Video Synced to Audio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045404616029077822) · [notes](../notes/2026-04-18-seedance-2-0-suno-prompting-an-ai-k-pop-music-video-synced.md)) and 8 more
- [ ] **[Seedance 2.0 (Fast)](https://openrouter.ai/bytedance/seedance-2.0-fast)** · tool · openrouter.ai · paid  
  A faster variant of the Seedance 2.0 video generation model that also accepts reference or init images.
- [ ] **[Seedream 5 (Lite)](https://seed.bytedance.com/en/blog/deeper-thinking-more-accurate-generation-introducing-seedream-5-0-lite)** · tool · seed.bytedance.com · paid  
  ByteDance's image generation model, used here to create the character images.
- [ ] **[BytePlus](https://www.byteplus.com)** · tool · byteplus.com · check price  
  ByteDance's cloud platform, which hosts the generated image URLs that Seedance consumes.

## Try this

- [ ] Generate character images with Seedream 5 (Lite) and set return\_byteplus\_urls=true.
- [ ] Use the returned image URLs as reference images or init images in Seedance 2.0 or Seedance 2.0 (Fast).
