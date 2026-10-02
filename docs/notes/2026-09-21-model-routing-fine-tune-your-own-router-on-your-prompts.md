# Model Routing: Fine-Tune Your Own Router on Your Prompts

Melvin Vivas · X video post · 2026-09-21 · [Open on X](https://x.com/melvindvivas/status/2101867588183830864)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring · **Level:** advanced

## Summary

Melvin Vivas argues that the best way to get model routing right is to fine-tune your own routing model on your own prompts. It then sends each request to the model you want, such as Astra or Luna. He links his earlier post where routing with Jev was not worth it for his workflow: the routed 'team' cost almost as much as Astra alone and hit the time limit.

## Key points

- Generic routers may not fit your workflow: in his test, Jev-based routing cost almost as much as using Astra alone
- The routed multi-model 'team' hit the time limit before it finished the task
- Suggested fix: fine-tune your own routing model on your own prompt history
- The router decides which target model (e.g. Astra, Luna or any other) gets each prompt
- Measure cost and completion time before adopting routing in production

## Resources mentioned

- [ ] **[Jev (TypeSafe AI)](https://typesafe.ai/blog/introducing-system-one-models-and-jev)** · tool · typesafe.ai · free  
  TypeSafe's new post-training algorithm for calibrated, confidence-scored decisions, pitched as a replacement for RLHF.  
  Also in: jev-dev: A UI Tool to Keep Run History When Experimenting with Jev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105347987098755186) · [notes](../notes/2026-10-01-jev-dev-a-ui-tool-to-keep-run-history-when-experimenting.md)), JevDev: Open-Source UI for Experimenting with Jev by Typesafe.ai (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104951800256397330) · [notes](../notes/2026-09-29-jevdev-open-source-ui-for-experimenting-with-jev-by.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 6 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../notes/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../notes/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Building a Jev Session-History Tool with Codex and Astra (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104907917560521090) · [notes](../notes/2026-09-29-building-a-jev-session-history-tool-with-codex-and-astra.md)) and 47 more
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../notes/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), Picking models for orchestrator and subagent roles in Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103678315274133931) · [notes](../notes/2026-09-26-picking-models-for-orchestrator-and-subagent-roles-in-codex.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../notes/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../notes/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)) and 14 more

## Try this

- [ ] Fine-tune your own routing model using your own prompts
- [ ] Start from the linked post on routing with Jev
- [ ] Train a custom prompt router that picks between models (e.g. Astra, Luna) from your own prompt history, and compare its cost and time against a single model
