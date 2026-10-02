# Move Non-Coding Work to Local Models (Hermes + llama.cpp)

Melvin Vivas · X post · 2026-08-21 · [Open on X](https://x.com/melvindvivas/status/2090650739672801530)

**Topics:** LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator argues for moving some AI work to local models so you depend less on cloud providers and their changing limits. He plans to start with personal and non-coding tasks, using Hermes connected to a local llama.cpp server, and to keep cloud AI for coding.

## Key points

- Running some work on local models reduces your dependence on cloud AI services and their usage limits.
- Start with non-coding and personal tasks, which are lower stakes and suit local models.
- Connect an agent (Hermes) to a model served locally with llama.cpp.
- Keep your paid cloud AI budget for coding, where stronger models matter most.

## Resources mentioned

- [ ] **[Hermes](https://hermes-agent.nousresearch.com/)** · tool · hermes-agent.nousresearch.com · free  
  The AI agent the creator uses to automate making explainer videos. It is probably Nous Research's Hermes Agent, but the post does not say so.  
  Also in: OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../../notes/16-trends/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)), Coworker: free open-source desktop AI coworker app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103533091117736005) · [notes](../../notes/13-ai-tools/2026-09-26-coworker-free-open-source-desktop-ai-coworker-app.md)), Agent Monitor: see traces, tokens and costs of your coding agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100681194585432373) · [notes](../../notes/09-llmops/2026-09-18-agent-monitor-see-traces-tokens-and-costs-of-your-coding.md)), Coworker: An Open-Source Desktop Agent App for Local and Cloud Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099551050130936120) · [notes](../../notes/07-agents/2026-09-15-coworker-an-open-source-desktop-agent-app-for-local-and.md)) and 13 more
- [ ] **[llama.cpp](https://github.com/ggml-org/llama.cpp)** · repo · github.com · free  
  An open-source C/C++ engine for running GGUF models locally. Its llama-server command provides an OpenAI-compatible HTTP server.  
  Also in: Running LLMs Locally Without an Expensive Rig (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104363353045123168) · [notes](../../notes/03-llm-fundamentals/2026-09-28-running-llms-locally-without-an-expensive-rig.md)), llama.cpp / Llama-macOS v0.5.0 release (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102927420282302776) · [notes](../../notes/09-llmops/2026-09-24-llama-cpp-llama-macos-v0-5-0-release.md)), Run llama.cpp GGUF Checkpoints in Hugging Face Transformers (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102409652449472740) · [notes](../../notes/09-llmops/2026-09-22-run-llama-cpp-gguf-checkpoints-in-hugging-face-transformers.md)), llama.cpp v0.4.1 release announcement (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099579358268760083) · [notes](../../notes/09-llmops/2026-09-15-llama-cpp-v0-4-1-release-announcement.md)) and 28 more

## Try this

- [ ] Set up a local model server with llama.cpp.
- [ ] Connect an agent such as Hermes to it and move personal and non-coding tasks there.
- [ ] Keep cloud AI subscriptions for coding.
- [ ] Build a local personal assistant: an agent framework connected to a llama.cpp server for everyday non-coding tasks.
