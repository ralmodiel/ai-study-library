# Local Qwen3.5-35B-A3B on a 24GB GPU Builds a Full Game From One Spec

Melvin Vivas · X video post · 2026-03-01 · [Open on X](https://x.com/melvindvivas/status/2028091117120676057)

**Topics:** LLM Fundamentals, AI Dev Tools & Productivity, Industry Trends & Job Market · **Level:** intermediate

## Summary

The creator shares a quoted demo in which Qwen3.5-35B-A3B, running locally on a 24GB VRAM GPU, generated a complete game (10 files, 3,483 lines of code) from a single detailed spec prompt. The takeaway is that mid-size open-weight MoE models now handle sizable coding tasks on consumer hardware such as an RTX 3090.

## Key points

- Qwen3.5-35B-A3B is a Mixture-of-Experts model (35B total parameters, about 3B active), which is why it runs on a single 24GB consumer GPU.
- Hardware in the demo: 24GB VRAM (the creator plans to try it on an RTX 3090).
- One detailed prompt describing the full game architecture produced 10 files and 3,483 lines of code with no follow-up guidance.
- The spec named enemy types, particle systems, procedural audio, power-ups, boss fights and the player ship.
- Lesson: an upfront, detailed architecture spec lets a local model build a multi-file project in a single pass.

## Resources mentioned

- [ ] **[Qwen 3.5 35B](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)** · tool · huggingface.co · free  
  An open-weight Mixture-of-Experts LLM from Alibaba's Qwen team that can run locally on a 24GB GPU.  
  Also in: Running Qwen 3.5 35B Locally in LM Studio for Vision and Prompts (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028127593233600848) · [notes](../../notes/13-ai-tools/2026-03-01-running-qwen-3-5-35b-locally-in-lm-studio-for-vision-and.md))
- [ ] **[sudoingX (X account)](https://x.com/sudoingx)** · person · x.com · free  
  The X user whose quoted post shows the local Qwen3.5 game-building experiment.

## Try this

- [ ] Try running Qwen3.5-35B-A3B locally if you have a GPU with 24GB of VRAM (e.g. an RTX 3090).
- [ ] Write one detailed spec of the full app architecture before prompting the model.
- [ ] Have a local LLM build a complete browser space-shooter game from one spec prompt, with enemy types, particles, procedural audio, power-ups and boss fights.
