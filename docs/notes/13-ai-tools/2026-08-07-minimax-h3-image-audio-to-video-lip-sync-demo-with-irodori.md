# MiniMax H3 Image + Audio-to-Video Lip-Sync Demo (with Irodori-TTS v3)

Melvin Vivas · X video post · 2026-08-07 · 0:10 · 228 views · [Open on X](https://x.com/melvindvivas/status/2085587083633348892)

**Topics:** AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** beginner

## Summary

This is a 10-second post by Melvin Vivas. It shares a demo of MiniMax H3 from kohya_tech's quoted post. The video was made from a starting image plus an audio track that Irodori-TTS v3 generated. MiniMax H3 then produced only the video. Lip-sync matches the audio well, but large body movements still look a bit wrong. The only spoken line is "いい仕事してますね" ("Nice work").

## Key points

- Pipeline: generate speech with a TTS model (Irodori-TTS v3), then give MiniMax H3 a starting image plus that audio to generate the video.
- MiniMax H3 only generates the video. The audio comes from the separate TTS step.
- Lip-sync matched the supplied audio well in this test.
- Limitation: large movements in the clip still look somewhat off.
- The original experiment was posted by kohya_tech (Kohya). Melvin Vivas reshared it as a quote post, so the post has no tutorial or code.

## Resources mentioned

- [ ] **[MiniMax H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** · tool · huggingface.co · free  
  MiniMax video generation model that turns a starting image and an audio track into a lip-synced video.  
  Also in: Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../../notes/13-ai-tools/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax H3 Locally on a Single RTX 3090 (Demo) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085439986699223322) · [notes](../../notes/16-trends/2026-08-06-running-minimax-h3-locally-on-a-single-rtx-3090-demo.md))
- [ ] **[Irodori-TTS v3](https://github.com/Aratako/Irodori-TTS)** · tool · github.com · free  
  Text-to-speech model, used here to make the audio track that drives the video generation.
- [ ] **[kohya\_tech (Kohya)](https://x.com/kohya_tech)** · person · x.com · free  
  Generative-AI developer on X who ran the original MiniMax H3 lip-sync experiment.

## Try this

- [ ] Build a talking-avatar pipeline: generate speech with a TTS model, then feed a portrait image plus that audio to an image + audio-to-video model such as MiniMax H3, and check lip-sync quality against how well it handles large movements.
