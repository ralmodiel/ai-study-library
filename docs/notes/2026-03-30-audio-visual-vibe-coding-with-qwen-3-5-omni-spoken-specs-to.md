# Audio-Visual Vibe Coding with Qwen 3.5 Omni: Spoken Specs to Web App

Melvin Vivas · X video post · 2026-03-30 · 2:47 · 108 views · [Open on X](https://x.com/melvindvivas/status/2038678318787317959)

**Topics:** AI Dev Tools & Productivity, LLM Fundamentals, Industry Trends & Job Market · **Level:** beginner

## Summary

This is a reshared demo from Alibaba's Qwen team. A user talks to the Qwen 3.5 Omni model and points at parts of a layout to describe a product and scenery showcase webpage, and the model generates the HTML. The user then asks out loud for refinements, such as detail pages, a buy button and a like button. The demo shows how a multimodal model can turn spoken, visually grounded instructions into working front-end code.

## Key points

- Qwen 3.5 Omni takes audio and visual input together. The user speaks while pointing at areas of a layout ('in this section... display an airplane'), and the model maps each instruction to the right region.
- First prompt: build an HTML page with two toggle buttons, Product and Scenery. Each one swaps the image grid between product photos and high-resolution landscape photos.
- The spec asks for unlimited images, real image URLs and a 'professional, high-end' layout, which shows how much one spoken prompt can cover.
- Second round: clicking a product image opens a detail page with a large hero image, the name, the price and a Buy button. The Buy button triggers a 'purchase successful' notification. The page also lists specs such as size, dimensions and origin.
- Clicking a landscape image opens a different detail page with the place name, city, elevation, a red heart 'like' button with a visual effect and a like-count notification, plus a description.
- Pattern: build in rounds. Start with a basic layout, then add interactions and different detail pages for each content type in follow-up spoken prompts.

## Resources mentioned

- [ ] **[Qwen 3.5 Omni](https://qwen.ai/blog?id=qwen3.5-omni)** · tool · qwen.ai · free  
  Alibaba's omni-modal Qwen model that accepts audio and video input and can generate code from spoken, visually grounded instructions.
- [ ] **[Qwen (@Alibaba\_Qwen) on X](https://x.com/Alibaba_Qwen)** · person · x.com · free  
  Official X account of Alibaba's Qwen team, which posts model releases and demos.  
  Also in: Qwen-Audio-3.1: Alibaba's Five-Model Audio Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102726628048810098) · [notes](../notes/2026-09-23-qwen-audio-3-1-alibaba-s-five-model-audio-stack.md)), Demo: Qwen3.8-27B Running Locally with Pi and llama.cpp (Melvin Vivas on [X](https://x.com/melvindvivas/status/2088292028329378131) · [notes](../notes/2026-08-14-demo-qwen3-8-27b-running-locally-with-pi-and-llama-cpp.md)), Running AI Locally: Rebuilding AIBackends as a Python Library with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2048445624148992148) · [notes](../notes/2026-04-26-running-ai-locally-rebuilding-aibackends-as-a-python.md))

## Try this

- [ ] Build a product/scenery showcase webpage by voice: two toggle buttons that switch image grids, with clickable detail pages (product: price, Buy button, success popup, specs; landscape: city, elevation, like button with counter).
