# Connecting Hermes Agent to the Buzz Agent-First Chat App via the Native Gateway

Melvin Vivas · X video post · 2026-07-30 · 5:21 · 167 views · [Open on X](https://x.com/melvindvivas/status/2082811961239388654)

**Topics:** AI Agents, Tool Use & MCP, AI Dev Tools & Productivity · **Level:** intermediate

## Summary

A short demo of connecting a full Hermes Agent from Nous Research to Buzz, an agent-first chat app that works like Slack. The creator uses the native gateway option, which the docs recommend for full Hermes functionality. He creates the agent in Buzz and picks a Kimi K3 model through Nous Portal. Then he configures the Buzz platform in the Hermes gateway setup, restarts the gateway and chats with the agent next to other bots.

## Key points

- The Hermes Agent docs list three ways to connect to Buzz: through the desktop app's managed runtime, a relay bridge, or the native gateway platform. The native gateway is recommended for full Hermes functionality.
- Update both Hermes Agent and the Buzz app first. Hermes then appears as a built-in runtime under Agents in Buzz, so you don't need to add it.
- Create a new agent in your agent team. With the deeper integration you can now pick from the full model list; the demo uses Nous Portal → Moonshot AI Kimi K3.
- Saving the agent creates a private key that is shown only once. Copy it and keep it secure.
- Windows users who installed Buzz from the .exe must add the Buzz CLI binary to their PATH. You can ask your agent to do this and point it to the official Buzz messaging-platform docs page.
- Run Hermes gateway setup and choose Buzz (option 7 in the list). Enter the community's relay URL and the agent's private key, set the home channel, and choose whether all community members can talk to the agent.
- Restart the gateway so it picks up the changes; it must keep running for the agent to respond in Buzz.
- To check the setup, message the agent in Buzz and ask which agent and model it is running. It should say Hermes Agent with Kimi K3 via Nous Portal.

## Resources mentioned

- [ ] **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** · tool · github.com · free  
  Nous Research's open-source AI agent with CLI, TUI and desktop interfaces. It now supports hands-free activation with a wake word.  
  Also in: Inspecting Coding-Agent Traces Live with JSONL Viewer (Codex, Claude Code) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096783580596989985) · [notes](../notes/2026-09-07-inspecting-coding-agent-traces-live-with-jsonl-viewer-codex.md)), Hermes Agent: each bot is its own profile (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091050200450412860) · [notes](../notes/2026-08-22-hermes-agent-each-bot-is-its-own-profile.md)), An X research bot built with Hermes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2091048347520077994) · [notes](../notes/2026-08-22-an-x-research-bot-built-with-hermes.md)), Run Your Hermes Agent on Free LFM2.5-2.6B via OpenRouter (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090719661159797074) · [notes](../notes/2026-08-21-run-your-hermes-agent-on-free-lfm2-5-2-6b-via-openrouter.md)) and 55 more
- [ ] **[Buzz](https://github.com/block/buzz)** · tool · github.com · free  
  An agent-first chat app that works like Slack, where you can run several AI agents and bots in one workspace.
- [ ] **[Hermes Agent Docs – Buzz Integration (Messaging Platforms)](https://hermes-agent.nousresearch.com/docs/integrations/buzz)** · docs · hermes-agent.nousresearch.com · free  
  Official docs page showing the three ways to connect Hermes Agent to Buzz and the gateway setup steps.
- [ ] **[Buzz CLI](https://github.com/block/buzz/tree/main/crates/buzz-cli)** · tool · github.com · free  
  Buzz command-line binary that Hermes needs access to; on Windows it must be added to PATH.
- [ ] **[Nous Portal](https://portal.nousresearch.com/manage-subscription)** · tool · portal.nousresearch.com · paid  
  Nous Research's model-access portal, where you can sign up and use hosted models such as Hy3.  
  Also in: Alternative Coding Plans for Open Models: OpenCode Go, Ollama Cloud, Nous (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098584712138948906) · [notes](../notes/2026-09-12-alternative-coding-plans-for-open-models-opencode-go-ollama.md)), DeepSeek V4 Flash at 90% Off on Nous Portal (Melvin Vivas on [X](https://x.com/melvindvivas/status/2084839294531997716) · [notes](../notes/2026-08-05-deepseek-v4-flash-at-90-off-on-nous-portal.md)), Hy3 (Tencent Hunyuan) Free on Nous Portal for a Limited Week (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079646892083036312) · [notes](../notes/2026-07-21-hy3-tencent-hunyuan-free-on-nous-portal-for-a-limited-week.md))
- [ ] **[Kimi K3 (Moonshot AI)](https://www.kimi.ai/ai-models/kimi-k3)** · tool · kimi.ai · check price  
  A Moonshot AI large language model, used here as the Hermes agent's model.
- [ ] **[ChatGPT](https://chatgpt.com/#usage)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's updated image generation model in ChatGPT, with faster generation, better fidelity, consistent edits and comment-based editing.  
  Also in: ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../notes/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), Use Your ChatGPT Plus/Pro Subscription to Run Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105133960296898826) · [notes](../notes/2026-09-30-use-your-chatgpt-plus-pro-subscription-to-run-devin.md)) and 21 more
- [ ] **[Claude Opus 5.5](https://claude.ai)** · tool · claude.ai · paid · open in a browser to verify · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's AI assistant, used throughout the guide to tailor resumes, add live roles to the tracker, match connections to target companies and find hiring managers.  
  Also in: Use Sonnet 5.5 instead of Opus 5.5 for faster video-clipping tasks (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105170260903256309) · [notes](../notes/2026-09-30-use-sonnet-5-5-instead-of-opus-5-5-for-faster-video.md)), Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Building a production website with Opus 5.5 and TanStack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104863802441585135) · [notes](../notes/2026-09-29-building-a-production-website-with-opus-5-5-and-tanstack.md)), "The Last Manual Programmer": A Song About Coding With AI Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104630605380219268) · [notes](../notes/2026-09-29-the-last-manual-programmer-a-song-about-coding-with-ai.md)) and 48 more
- [ ] **Tomy's AI Garage (YouTube channel)** · channel · free  
  The creator's YouTube channel with videos on AI and agents, including a beginner's guide to Buzz.

## Try this

- [ ] Update Hermes Agent and the Buzz app to the latest versions.
- [ ] In Buzz, create a new agent with the Hermes runtime, pick a model (e.g. Kimi K3 via Nous Portal), and save the one-time private key somewhere secure.
- [ ] On Windows, add the Buzz CLI binary to your PATH, using the official Buzz messaging-platform docs.
- [ ] Run Hermes gateway setup, choose Buzz, and enter the relay URL, private key, home channel and access settings.
- [ ] Restart the Hermes gateway and keep it running, then message the agent in Buzz to check it works.
- [ ] Set up your own Buzz community with a Hermes agent running next to ChatGPT and Claude bots, so you have a multi-agent team workspace.
