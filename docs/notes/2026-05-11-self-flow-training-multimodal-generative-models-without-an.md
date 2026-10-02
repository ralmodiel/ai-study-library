# Self-Flow: Training Multimodal Generative Models Without an External Encoder

Melvin Vivas · X video post · 2026-05-11 · 2:12 · 56 views · [Open on X](https://x.com/melvindvivas/status/2053897572536975846)

**Topics:** Industry Trends & Job Market, Fine-tuning & Model Customization · **Level:** advanced

## Summary

This clip comes from a talk Stephen Batifol gave at AI Engineer. He explains Self-Flow, an open research paper on a scalable, self-supervised way to train multimodal generative models (images, video, audio). Usually a model is aligned with a separate pretrained encoder. Self-Flow instead learns representation and generation in a single flow, using a student–teacher setup fed with two different noise levels. Melvin Vivas shares it as a trend to watch: future models will understand worlds, motion and action, not just generate images.

## Key points

- The problem: today's diffusion/flow models are often aligned with an external pretrained representation encoder. Self-Flow removes that dependency.
- Self-Flow is an open research paper, released about 1.5 months before the talk. It describes a scalable, self-supervised method for training multimodal generative models across video, images and audio.
- Standard recipe: add random noise to the input, train the model to remove it, then align its features with an external encoder.
- Self-Flow recipe: add two different random noise levels to the same input. One copy gets a lot of noise and the other gets a little.
- The student model always gets the heavily noised input and learns to denoise it. The teacher is a more stable version of the student (an EMA-style copy) and gets the lightly noised input.
- The student minimizes two losses at once: a generation (denoising) loss and a representation loss that matches the teacher.
- It all happens in one model with nothing external. Scaling the model scales both the student and the teacher, so there's no separate encoder to keep in step.
- The team says it already uses this approach for models it is training now and sees it as the future: getting rid of external encoders.

## Resources mentioned

- [ ] **[Self-Flow (research paper)](https://arxiv.org/abs/2603.06507)** · paper · arxiv.org · free  
  Open research paper on a self-supervised approach to training multimodal generative models that combines representation learning and generation, with no external encoder.
- [ ] **[Stephen Batifol](https://x.com/stephenbtl)** · person · x.com · free  
  The speaker in this clip; he presented where visual intelligence and multimodal generative models are heading at AI Engineer.
- [ ] **[AI Engineer (conference and YouTube channel)](https://www.youtube.com/@aiDotEngineer)** · channel · youtube.com · free  
  AI engineering conference series that posts its talks for free on YouTube, including the full version of this talk.
- [ ] **[Black Forest Labs](https://bfl.ai)** · website · bfl.ai · check price  
  The lab behind the FLUX image models; the speaker's team, which published Self-Flow.  
  Also in: Martin Scorsese Joins Black Forest Labs: Storyboarding with FLUX (Melvin Vivas on [X](https://x.com/melvindvivas/status/2062303526181601770) · [notes](../notes/2026-06-03-martin-scorsese-joins-black-forest-labs-storyboarding-with.md)), Martin Scorsese Storyboards a Scene with Black Forest Labs' FLUX (Melvin Vivas on [X](https://x.com/melvindvivas/status/2061928559405367528) · [notes](../notes/2026-06-02-martin-scorsese-storyboards-a-scene-with-black-forest-labs.md))

## Try this

- [ ] Read the Self-Flow paper; the speaker stresses that it's open.
- [ ] Watch the full talk on the AI Engineer YouTube channel for the rest of the details.
- [ ] Follow progress in multimodal 'world models' that understand motion, interaction and action, not just image generation.
