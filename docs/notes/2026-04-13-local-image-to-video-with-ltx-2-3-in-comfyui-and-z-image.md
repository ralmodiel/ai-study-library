# Local Image-to-Video with LTX 2.3 in ComfyUI and Z-Image

Melvin Vivas · X video post · 2026-04-13 · 0:05 · 207 views · [Open on X](https://x.com/melvindvivas/status/2043730974056608192)

**Topics:** AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** intermediate

## Summary

This is a 5-second demo clip from Melvin Vivas with no narration. It shows a fully local generative-media pipeline: he made a still image on his own machine with the Z-Image model, then animated it with the LTX 2.3 image-to-video model running in ComfyUI. It shows that open models can now handle both image and video generation on local hardware, without cloud APIs.

## Key points

- The pipeline has two stages: text-to-image with Z-Image, then image-to-video with LTX 2.3.
- Both stages run locally on the creator's own machine, with no cloud service involved.
- ComfyUI, a node-based workflow tool, is used to run the LTX 2.3 image-to-video model.
- LTX 2.3 is a video model from Lightricks, the company behind LTX Studio. It can animate a single still image into a short clip.
- The post includes no workflow file, settings or hardware details. You'd need to find ComfyUI's LTX workflow templates on your own to reproduce it.

## Resources mentioned

- [ ] **[ComfyUI](https://x.com/ComfyUI)** · tool · x.com · free  
  The official X account for ComfyUI, the node-based tool for generative AI workflows, which announces things like ComfyUI Agent.  
  Also in: ComfyUI Agent: early access announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104054198065414166) · [notes](../notes/2026-09-27-comfyui-agent-early-access-announcement.md)), Comfy Router: One API for Image, Video, 3D and Audio Model Providers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102847542648254650) · [notes](../notes/2026-09-24-comfy-router-one-api-for-image-video-3d-and-audio-model.md)), Generating AI Video Locally with MiniMax H3 in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085553403846078669) · [notes](../notes/2026-08-07-generating-ai-video-locally-with-minimax-h3-in-comfyui-on.md)), Running MiniMax M3 Locally in ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2085423372423614896) · [notes](../notes/2026-08-07-running-minimax-m3-locally-in-comfyui-on-an-rtx-3090.md)) and 23 more
- [ ] **[LTX 2.3 (Lightricks LTX video model)](https://github.com/Lightricks/LTX-2)** · tool · github.com · free  
  Lightricks' open video generation model that supports image-to-video and can run locally.
- [ ] **[LTX Studio](https://ltx.studio)** · tool · ltx.studio · check price  
  A browser-based AI video production platform that now runs on LTX-2.3 and covers the creative workflow from first frame to final delivery.  
  Also in: Seedance 2.0 Video Model Now Available in LTX Studio (1080p) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2047730189980012647) · [notes](../notes/2026-04-24-seedance-2-0-video-model-now-available-in-ltx-studio-1080p.md)), Running the LTX 2.3 Open Video Model Locally with ComfyUI on an RTX 3090 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2043736995198111994) · [notes](../notes/2026-04-13-running-the-ltx-2-3-open-video-model-locally-with-comfyui.md)), LTX-2.3 Launch: Fast Native 4K AI Video Generation in LTX Studio (Melvin Vivas on [X](https://x.com/melvindvivas/status/2029779774273651074) · [notes](../notes/2026-03-06-ltx-2-3-launch-fast-native-4k-ai-video-generation-in-ltx.md))
- [ ] **[Z-Image](https://github.com/Tongyi-MAI/Z-Image)** · tool · github.com · free  
  Open text-to-image model that can run on local hardware.

## Try this

- [ ] Build a fully local generative-media pipeline: generate an image with Z-Image, then animate it with LTX 2.3 in ComfyUI.
