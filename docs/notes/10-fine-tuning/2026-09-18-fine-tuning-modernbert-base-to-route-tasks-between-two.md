# Fine-tuning ModernBERT-base to route tasks between two models

Melvin Vivas · X post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100889107237061076)

**Topics:** Fine-tuning & Model Customization, AI Agents, Tool Use & MCP, AI System Design & Architecture · **Level:** intermediate

## Summary

The creator is experimenting with fine-tuning ModernBERT-base as a task classifier. The classifier decides whether each task should be delegated to Astra or Luna. This shows a lightweight learned router placed in front of more expensive models or agents.

## Key points

- Base model: ModernBERT-base, an encoder well suited to classification fine-tuning.
- Training goal: label each incoming task so it can be delegated to Astra or Luna.
- A small fine-tuned classifier is a cheap, fast way to route work between models or agents.
- The creator asks the audience whether they would use such a router.

## Resources mentioned

- [ ] **[ModernBERT-base](https://huggingface.co/answerdotai/ModernBERT-base)** · tool · huggingface.co · free  
  An open-source modernized BERT encoder model. The quoted post uses it as the speed baseline for LFM2.5-Encoder.  
  Also in: Train Your Own LLM Model Router by Fine-Tuning ModernBERT as a Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103467817156886893) · [notes](../../notes/10-fine-tuning/2026-09-25-train-your-own-llm-model-router-by-fine-tuning-modernbert.md)), Free Colab Notebooks: ModernBERT, Gemma QLoRA, GLiNER & Guardrails (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101342034481312250) · [notes](../../notes/10-fine-tuning/2026-09-20-free-colab-notebooks-modernbert-gemma-qlora-gliner.md)), Fine-Tune ModernBERT-base as a Task-Routing Classifier (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101110603909873800) · [notes](../../notes/10-fine-tuning/2026-09-19-fine-tune-modernbert-base-as-a-task-routing-classifier.md)), Train ModernBERT as a Prompt Router Between Two Models (Colab Notebook) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100961076237971918) · [notes](../../notes/10-fine-tuning/2026-09-18-train-modernbert-as-a-prompt-router-between-two-models.md)) and 2 more
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), Pi Agent Council: Ask Multiple LLMs in Parallel and Compare Their Advice (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105645508186570807) · [notes](../../notes/13-ai-tools/2026-10-01-pi-agent-council-ask-multiple-llms-in-parallel-and-compare.md)), Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)) and 49 more
- [ ] **[Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)** · tool · openai.com · paid  
  The other model/agent the classifier routes tasks to; the post doesn't describe it further.  
  Also in: GPT-6.1 Sol May Beat Luna for Subagents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105292050233180203) · [notes](../../notes/07-agents/2026-09-30-gpt-6-1-sol-may-beat-luna-for-subagents.md)), Picking models for orchestrator and subagent roles in Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103678315274133931) · [notes](../../notes/07-agents/2026-09-26-picking-models-for-orchestrator-and-subagent-roles-in-codex.md)), GPT-6 Sol Ultra Subagents Use Up Limits Fast (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103142314655052150) · [notes](../../notes/07-agents/2026-09-24-gpt-6-sol-ultra-subagents-use-up-limits-fast.md)), GPT-6 Sol vs Opus 5.5 in a Livestream Comparison (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103138946977018340) · [notes](../../notes/03-llm-fundamentals/2026-09-24-gpt-6-sol-vs-opus-5-5-in-a-livestream-comparison.md)) and 14 more

## Try this

- [ ] Build a task router: fine-tune ModernBERT-base on labeled tasks to choose which of two models or agents handles each one.
