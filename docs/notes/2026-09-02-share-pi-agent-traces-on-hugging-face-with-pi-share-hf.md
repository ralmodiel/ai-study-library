# Share Pi Agent Traces on Hugging Face with pi-share-hf

Melvin Vivas · X post · 2026-09-02 · [Open on X](https://x.com/melvindvivas/status/2095025010876567810)

**Topics:** AI Agents, Tool Use & MCP, Evaluation (Evals) & Testing, AI Safety, Security & Guardrails · **Level:** intermediate

## Summary

pi-share-hf is an open-source tool by Mario Zechner (badlogic). It collects, reviews and uploads session traces from the Pi coding agent to a Hugging Face dataset. It redacts secrets automatically and lets you do a dry run before uploading.

## Key points

- It uploads Pi agent session traces to a Hugging Face dataset.
- Secrets are redacted automatically before upload.
- A dry-run mode lets you check what would be uploaded first.
- Shared traces can be used for analysis, evals or training data.

## Resources mentioned

- [ ] **[pi-share-hf](https://github.com/badlogic/pi-share-hf)** · repo · github.com · free  
  Collect, review, and upload redacted pi session files to a Hugging Face dataset.
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A minimal coding agent harness that works well with local models because of its small system prompt and tool set.  
  Also in: PiG: The Pi Coding Agent Rebuilt in Go as a Single Native Binary (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104361883054813305) · [notes](../notes/2026-09-28-pig-the-pi-coding-agent-rebuilt-in-go-as-a-single-native.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Orchestrator/Subagent Patterns: Astra-Luna Skill vs Fusion and Advisor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102300798768005283) · [notes](../notes/2026-09-22-orchestrator-subagent-patterns-astra-luna-skill-vs-fusion.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../notes/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)) and 33 more
- [ ] **[Mario Zechner (@badlogicgames)](https://x.com/badlogicgames)** · person · x.com · free  
  Developer behind Pi and pi-share-hf.
- [ ] **[Hugging Face](https://x.com/huggingface)** · website · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Platform for hosting and finding ML models, datasets and papers. The quoted post says LocateAnything was trending there.  
  Also in: Unsloth passes 500M model downloads on Hugging Face (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102849447885734173) · [notes](../notes/2026-09-24-unsloth-passes-500m-model-downloads-on-hugging-face.md)), Hugging Face AutoTrain: a no-code fine-tuning tool (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101130571158298990) · [notes](../notes/2026-09-19-hugging-face-autotrain-a-no-code-fine-tuning-tool.md)), Hugging Face Cache Deduplication with Xet in huggingface\_hub v1.32 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100983401818046770) · [notes](../notes/2026-09-19-hugging-face-cache-deduplication-with-xet-in-huggingface.md)), Melvin Vivas's Hugging Face Profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099516694758916332) · [notes](../notes/2026-09-14-melvin-vivas-s-hugging-face-profile.md)) and 34 more

## Try this

- [ ] Use pi-share-hf to upload your Pi agent traces to Hugging Face, and do a dry run first.
