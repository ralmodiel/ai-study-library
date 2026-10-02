# Seedance 2.0 + Suno: Prompting an AI K-pop Music Video Synced to Audio

Melvin Vivas · X video post · 2026-04-18 · 0:10 · 98 views · [Open on X](https://x.com/melvindvivas/status/2045404616029077822)

**Topics:** AI Dev Tools & Productivity, Prompt & Context Engineering · **Level:** beginner

## Summary

Melvin Vivas shows a 10-second vertical K-pop music video teaser made with ByteDance's Seedance 2.0 video model, using a song generated in Suno as the audio reference. The quoted prompt shows how to write a structured video-generation prompt: format, duration, audio sync, mood and negative constraints. It's a short demo of combining an AI music tool with an AI video tool.

## Key points

- Workflow: make the music track in Suno, then upload it to Seedance 2.0 as an audio reference so the video is synced to the song.
- The prompt opens with format and length: '10s vertical K-pop music video performance teaser'. Specify aspect ratio and duration up front.
- Say explicitly that the video should be 'synced to the uploaded audio track [audio reference]' so the model uses the audio for timing.
- Describe style and energy with dense adjectives ('wild, stylish, high-energy, surreal') and the goal ('built for replay and viral edits').
- Add negative constraints to avoid common artifacts: 'No subtitles, no watermark, no readable text'.
- Then describe the subject in detail (e.g., 'a stunning 5-member K-pop' group with choreography and styling).
- Output is a 10-second clip with sung lyrics ('Hands high, eyes on me, step right...') matching the performance.

## Resources mentioned

- [ ] **[Seedance 2.0](https://fal.ai/seedance-2.0)** · tool · fal.ai · paid  
  ByteDance's multimodal video generation model. It makes videos with synchronized audio from text, image, video and audio inputs.  
  Also in: Opinion: Seedance 2.0 Still Beats Gemini Omni for Video (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056827384800907560) · [notes](../../notes/16-trends/2026-05-20-opinion-seedance-2-0-still-beats-gemini-omni-for-video.md)), Cheap API access to Seedance 2.0 via WaveSpeedAI? (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046667781815652766) · [notes](../../notes/13-ai-tools/2026-04-22-cheap-api-access-to-seedance-2-0-via-wavespeedai.md)), Seedance 2.0 on fal: Strict Content Filters Block Video Generation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2046160846360084525) · [notes](../../notes/13-ai-tools/2026-04-20-seedance-2-0-on-fal-strict-content-filters-block-video.md)), Consistent Characters in Seedance 2.0 Using Seedream 5 Reference Images (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045174244318101660) · [notes](../../notes/13-ai-tools/2026-04-17-consistent-characters-in-seedance-2-0-using-seedream-5.md)) and 8 more
- [ ] **[Suno](https://suno.com)** · tool · suno.com · free  
  An AI music generator that makes full songs with vocals from text prompts.  
  Also in: "The Last Manual Programmer": A Song About Coding With AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104630605380219268) · [notes](../../notes/13-ai-tools/2026-09-29-the-last-manual-programmer-a-song-about-coding-with-ai.md))

## Try this

- [ ] Make a short song in Suno, then upload it to Seedance 2.0 as an audio reference.
- [ ] Write a structured video prompt in this order: format and duration, audio sync, style and mood, negative constraints (no subtitles, watermark or text), then a detailed subject description.
- [ ] Make a 10-second AI music video teaser: generate the track in Suno and the synced visuals in Seedance 2.0.
