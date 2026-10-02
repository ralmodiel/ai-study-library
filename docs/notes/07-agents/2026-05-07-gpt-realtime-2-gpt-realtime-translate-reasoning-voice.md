# GPT-Realtime-2 & GPT-Realtime-Translate: Reasoning Voice Agents and Live Translation

Melvin Vivas · X video post · 2026-05-07 · 4:03 · 58 views · [Open on X](https://x.com/melvindvivas/status/2052447105902596348)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

Melvin Vivas shares OpenAI's demo of two new realtime audio models in the API. GPT-Realtime-Translate translates speech live across 70 languages while the speaker is still talking. GPT-Realtime-2 adds GPT-5-class reasoning and parallel tool calling to voice agents. The demo also shows how "preambles" keep users informed while the agent reasons or calls tools, and how an agent can keep listening without interrupting until it is called back.

## Key points

- OpenAI added two realtime audio models to its API: GPT-Realtime-Translate for live speech translation and GPT-Realtime-2 for voice agents that reason and take actions.
- GPT-Realtime-Translate handles 70 languages and translates while the speaker is still talking. It waits for a key word, such as the verb, before starting, so the result sounds like a natural conversation.
- The translator can switch between languages in the middle of a conversation (French to German in the demo) and keeps technical terms like 'GPT', 'OpenAI' and 'computer use' intact.
- GPT-Realtime-2 brings GPT-5-class reasoning and parallel tool calling to voice agents. In the demo it reads a calendar and updates a CRM with a meeting brief and next steps.
- Use preambles: because reasoning and tool calls can take a few seconds, the agent should say what it is doing (e.g. 'Let me pull the latest context and update your CRM') so the user stays informed.
- The agent stays in the conversation: you can tell it to stay quiet until a phrase like 'back to demo'. It keeps listening and keeps context without interrupting.
- Voice agents can be connected to any system, such as dashboards, SaaS services or connected devices, which makes voice a possible primary interface.
- Suggested use cases for live translation: media platforms, customer support and education.

## Resources mentioned

- [ ] **[GPT-Realtime-2](https://developers.openai.com/api/docs/models/gpt-realtime-2)** · tool · developers.openai.com · paid  
  OpenAI's realtime speech-to-speech model for voice agents, with GPT-5-class reasoning, parallel tool calling and preambles.  
  Also in: GPT-Realtime-2 & Realtime-Translate: Reasoning Voice Agents and Live Translation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052586973563642025) · [notes](../../notes/07-agents/2026-05-08-gpt-realtime-2-realtime-translate-reasoning-voice-agents.md))
- [ ] **[GPT-Realtime-Translate](https://developers.openai.com/api/docs/models/gpt-realtime-translate)** · tool · developers.openai.com · paid  
  OpenAI's realtime model that translates speech live across 70 languages while the speaker is talking.  
  Also in: GPT-Realtime-2 & Realtime-Translate: Reasoning Voice Agents and Live Translation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052586973563642025) · [notes](../../notes/07-agents/2026-05-08-gpt-realtime-2-realtime-translate-reasoning-voice-agents.md))
- [ ] **[OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime)** · docs · platform.openai.com · paid  
  OpenAI's developer platform, where the realtime audio models are available for building voice agents and translation apps.  
  Also in: GPT-Realtime-2 & Realtime-Translate: Reasoning Voice Agents and Live Translation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052586973563642025) · [notes](../../notes/07-agents/2026-05-08-gpt-realtime-2-realtime-translate-reasoning-voice-agents.md))

## Try this

- [ ] Try GPT-Realtime-2 and GPT-Realtime-Translate in the OpenAI API.
- [ ] Add preambles to your voice agents so they tell the user what they are doing during reasoning and tool calls.
- [ ] Connect your voice agent to the tools and systems you already use, such as your calendar, CRM, dashboards or devices.
- [ ] A personal voice assistant that reads your calendar, briefs you before meetings and updates your CRM with notes and next steps.
- [ ] A live speech-translation tool for presentations, customer support or education across many languages.
- [ ] A voice interface for dashboards or connected devices, built on parallel tool calling.
