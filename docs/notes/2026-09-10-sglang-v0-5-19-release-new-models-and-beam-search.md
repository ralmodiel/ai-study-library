# SGLang v0.5.19 release: new models and beam search

Melvin Vivas · X post · 2026-09-10 · [Open on X](https://x.com/melvindvivas/status/2097735828126798040)

**Topics:** LLMOps, Deployment & Monitoring, Industry Trends & Job Market · **Level:** intermediate

## Summary

Announces SGLang v0.5.19, an open-source LLM serving and inference engine. The release has 786 PRs from 214 contributors, 51 of them new. It adds support for several new open models plus LongCat-Image-Edit on SGLang-Diffusion, and the quoted post says beam search has been updated.

## Key points

- SGLang v0.5.19 has 786 PRs from 214 contributors, 51 of them first-time contributors.
- New model support: Qwen3.8 and Qwen3.8-27B, dots3.note, Ling-3.0-flash, Ling-3.0-tiny, Spark2.5 and Granite 4.2.
- SGLang-Diffusion now supports LongCat-Image-Edit for image editing.
- The quoted post says beam search has changed, but the text is cut off before the details.
- SGLang is an option for self-hosting open-weight models in production, like other serving engines.

## Resources mentioned

- [ ] **[SGLang](https://github.com/sgl-project/sglang)** · repo · github.com · free  
  Open-source, high-performance serving engine for running LLMs and multimodal models.
- [ ] **[SGLang-Diffusion](https://docs.sglang.io/docs/sglang-diffusion)** · tool · docs.sglang.io · free  
  SGLang's add-on for serving diffusion and image-generation models.
- [ ] **[Qwen3.8](https://qwen.ai/blog?id=qwen3.8)** · tool · qwen.ai · free  
  Upcoming large Qwen model (2.4T parameters) that Qwen says will be released with open weights.  
  Also in: Qwen3.8-Max on the Frontend Code Arena cost-performance frontier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084174074201416042) · [notes](../notes/2026-08-03-qwen3-8-max-on-the-frontend-code-arena-cost-performance.md)), Qwen3.8-Max announced with open weights for Max and 27B (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084102081972150375) · [notes](../notes/2026-08-03-qwen3-8-max-announced-with-open-weights-for-max-and-27b.md)), Qwen3.8 (2.4T params) Announced as Upcoming Open-Weight Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079123662779875743) · [notes](../notes/2026-07-20-qwen3-8-2-4t-params-announced-as-upcoming-open-weight-model.md)), Qwen3.8 Open-Weight Launch Announcement Reaction (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078763456384434337) · [notes](../notes/2026-07-19-qwen3-8-open-weight-launch-announcement-reaction.md))
- [ ] **[Granite 4.2](https://research.ibm.com/blog/introducing-granite-4-2)** · tool · research.ibm.com · free  
  IBM's open Granite language model.
- [ ] **[Ling-3.0-flash / Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-flash)** · tool · huggingface.co · free  
  Ling 3.0 family of open language models in flash and tiny sizes.
- [ ] **[dots3.note](https://huggingface.co/collections/dots-studio/dots3note)** · tool · huggingface.co · free  
  Open model newly supported in SGLang.
- [ ] **Spark2.5** · tool · check price  
  Model newly supported in SGLang.
- [ ] **[LongCat-Image-Edit](https://github.com/meituan-longcat/LongCat-Image)** · tool · github.com · free  
  Image-editing diffusion model served through SGLang-Diffusion.

## Try this

- [ ] Upgrade to SGLang v0.5.19 to serve the newly supported models.
