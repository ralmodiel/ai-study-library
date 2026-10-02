# GPT-Live-1: OpenAI's Full-Duplex Voice Model for Voice Agents in the API

Melvin Vivas · X video post · 2026-09-11 · 1:16 · 1,938 views · [Open on X](https://x.com/melvindvivas/status/2098299004706820418)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

This is a short launch demo of GPT-Live-1, a full-duplex voice model now in the OpenAI API. It can listen and speak at the same time, copes with background noise and interruptions, and hands tool calls and reasoning to a separate backend model. Melvin Vivas reshares the launch and says he wishes Codex could talk to users this way too.

## Key points

- GPT-Live-1 is a full-duplex model: it listens and speaks at the same time, so users can interrupt it mid-reply.
- It is built for natural, expressive conversation and handles background noise and interruptions smoothly.
- Architecture: GPT-Live-1 is the front-end voice model, paired with a backend model that does the reasoning and tool calls. You can choose the backend model and agent harness.
- In the demo, the voice model hands actions (controlling a robot, updating a display) to the backend model while the conversation keeps going.
- It's described as 'ChatGPT Voice for your app': it brings ChatGPT Voice's natural back-and-forth into your own product.
- Pricing: $0.05 per minute for the front-end model. Backend inference and tool services are billed separately.
- Available in the API now and positioned for production voice agents at scale.

## Resources mentioned

- [ ] **[GPT-Live-1](https://openai.com/index/introducing-gpt-live-1-in-the-api/)** · tool · openai.com · paid  
  OpenAI's full-duplex voice model in the API for real-time voice agents that pair with a backend reasoning/tool model.  
  Also in: GPT-Live-1 Voice Agents in the API, and Charlie Guo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098353668613648877) · [notes](../../notes/07-agents/2026-09-11-gpt-live-1-voice-agents-in-the-api-and-charlie-guo.md))
- [ ] **[OpenAI API](https://platform.openai.com/)** · tool · platform.openai.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's developer platform for calling models like GPT Image 2 from your own apps.  
  Also in: How to Relearn LLMs & RAG in 2026: A 7-Step Roadmap with Free Resources (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2217704205474341) · [notes](../../notes/01-roadmap/2026-09-23-how-to-relearn-llms-rag-in-2026-a-7-step-roadmap-with-free.md)), Livestream: Building a React Native ChatGPT App with Cursor and OpenAI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099388668909850812) · [notes](../../notes/13-ai-tools/2026-09-14-livestream-building-a-react-native-chatgpt-app-with-cursor.md)), The 3 Levels of AI Engineering: LLM Apps → Production → Agentic Systems (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2164893074437351) · [notes](../../notes/01-roadmap/2026-09-05-the-3-levels-of-ai-engineering-llm-apps-production-agentic.md)), GPT Image 2 Adds Transparent Background Support in the OpenAI API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090712735600562200) · [notes](../../notes/03-llm-fundamentals/2026-08-21-gpt-image-2-adds-transparent-background-support-in-the.md)) and 4 more
- [ ] **[ChatGPT Voice](https://help.openai.com/en/articles/8400625-voice-mode-faq)** · tool · help.openai.com · free  
  ChatGPT's voice conversation mode, used as the comparison point for GPT-Live-1's style of conversation.  
  Also in: ChatGPT Voice Update: Plugins, Model Switching and ChatGPT Work (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102848983655956911) · [notes](../../notes/16-trends/2026-09-24-chatgpt-voice-update-plugins-model-switching-and-chatgpt.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Try GPT-Live-1 in the OpenAI API to add conversational voice to your app.
- [ ] Pair GPT-Live-1 with a backend model of your choice for tool calls and reasoning.
- [ ] Plan costs as $0.05 per minute for the voice front end, plus separate backend inference and tool costs.
- [ ] Build a voice agent that hands actions (for example, controlling a robot or updating a display) to a backend model while the conversation keeps going, like the launch demo.
- [ ] Add a voice interface to a coding agent such as Codex (the creator's wish).
