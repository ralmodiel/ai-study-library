# DigitalOcean Serverless Inference Now Serves OpenAI GPT-6 Models

Melvin Vivas · X video post · 2026-09-24 · [Open on X](https://x.com/melvindvivas/status/2102970848785363330)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** intermediate

## Summary

DigitalOcean now offers OpenAI models through its Serverless Inference product. The post suggests GPT-6 Luna for high-volume classification and routing, and GPT-6 Sol for multi-step reasoning and coding. Billing is combined with the agents that call the models.

## Key points

- DigitalOcean now works as an AI model provider through Serverless Inference.
- GPT-6 Luna: meant for classification and routing at high volume.
- GPT-6 Sol: meant for multi-step reasoning and coding.
- Model usage goes on the same bill as the agents that call the models.
- The models can be tried in DigitalOcean's Inference Engine and Model Library.
- Model routing pattern: send cheap, high-volume tasks to a small model and hard reasoning to a stronger one.

## Resources mentioned

- [ ] **[DigitalOcean Model Library](https://www.digitalocean.com/products/model-library)** · website · digitalocean.com · check price  
  DigitalOcean's catalog for comparing and using large language models available through its inference service.
- [ ] **[DigitalOcean Serverless Inference](https://www.digitalocean.com/products/inference-engine)** · tool · digitalocean.com · paid  
  DigitalOcean's managed serverless API for calling hosted LLMs.
- [ ] **[GPT-6 Luna](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925)** · tool · community.openai.com · paid  
  An OpenAI model aimed at fast, high-volume classification and routing.  
  Also in: Codex Orchestrator v0.2.1: GPT-6 Sol orchestrator with Luna subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102622261295661558) · [notes](../notes/2026-09-23-codex-orchestrator-v0-2-1-gpt-6-sol-orchestrator-with-luna.md)), DeepSWE results: GPT-6 Sol slightly below GPT-5.6 Sol, but cheaper (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102570691870753159) · [notes](../notes/2026-09-23-deepswe-results-gpt-6-sol-slightly-below-gpt-5-6-sol-but.md)), OpenAI Releases GPT-6 Sol and GPT-6 Luna (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102463755343077670) · [notes](../notes/2026-09-23-openai-releases-gpt-6-sol-and-gpt-6-luna.md))
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../notes/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), Picking models for orchestrator and subagent roles in Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103678315274133931) · [notes](../notes/2026-09-26-picking-models-for-orchestrator-and-subagent-roles-in-codex.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../notes/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../notes/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)) and 14 more

## Try this

- [ ] Try GPT-6 Luna and Sol in DigitalOcean's Inference Engine.
- [ ] Build a router that sends simple classification jobs to GPT-6 Luna and complex reasoning jobs to GPT-6 Sol.
