# Model Routing Fine-Tuned on Your Agent Harness Traces

Melvin Vivas · X post · 2026-08-27 · [Open on X](https://x.com/melvindvivas/status/2092917641421996433)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring, AI Agents, Tool Use & MCP · **Level:** advanced

## Summary

An example of how model routing can work: fine-tune Liquid AI's LFM2.5 Encoder on traces from your agent harness, which record each prompt and the model used for it. The router then learns which model you would normally pick for a given prompt. This assumes you already choose different models for different tasks.

## Key points

- Log your agent harness traces as (prompt, model chosen) pairs.
- Fine-tune the small LFM2.5 Encoder on those traces to predict the right model.
- The router then copies your own past model choices for each kind of prompt.
- This only works if you already use different models for different tasks.

## Resources mentioned

- [ ] **[LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** · tool · huggingface.co · free  
  A 350M-parameter encoder model from Liquid AI that does zero-shot prompt classification and routing against categories you supply at runtime.  
  Also in: Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103886593413247485) · [notes](../../notes/09-llmops/2026-09-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), AIBackends v0.7.0: Prompt Routing with Liquid AI's LFM2.5 Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092949343510958223) · [notes](../../notes/09-llmops/2026-08-27-aibackends-v0-7-0-prompt-routing-with-liquid-ai-s-lfm2-5.md)), Zero-Shot Prompt Routing with Liquid AI's LFM 2.5-Encoder-350M (Melvin Vivas on [X](https://x.com/melvindvivas/status/2092904020239421888) · [notes](../../notes/09-llmops/2026-08-27-zero-shot-prompt-routing-with-liquid-ai-s-lfm-2-5-encoder.md)), Zero-Shot Prompt Routing by Task Complexity with LFM2.5-Encoder (Melvin Vivas on [X](https://x.com/melvindvivas/status/2086292950125040027) · [notes](../../notes/09-llmops/2026-08-09-zero-shot-prompt-routing-by-task-complexity-with-lfm2-5.md))

## Try this

- [ ] Collect prompt and model-choice traces from your agent harness.
- [ ] Fine-tune LFM2.5 Encoder on your own agent traces to build a personalized model router.
