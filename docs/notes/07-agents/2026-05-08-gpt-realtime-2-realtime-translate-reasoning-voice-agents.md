# GPT-Realtime-2 & Realtime-Translate: Reasoning Voice Agents and Live Translation

Melvin Vivas · X video post · 2026-05-08 · 4:03 · 111 views · [Open on X](https://x.com/melvindvivas/status/2052586973563642025)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

Melvin Vivas shares OpenAI's demo of two new realtime audio models in the API, and says live translation now gives Google Translate real competition for travel apps. GPT-Realtime-Translate translates speech live across 70 languages while the speaker is still talking. GPT-Realtime-2 brings GPT-5-class reasoning and parallel tool calling to voice agents. The demo shows a voice assistant that checks a calendar, updates a CRM, and uses "preambles" to tell the user what it is doing while it works.

## Key points

- GPT-Realtime-Translate translates speech to speech live across 70 languages. It starts translating once it hears the key word of a sentence (such as the verb), so it sounds like a natural conversation instead of turn-by-turn.
- The translation model handles a speaker switching languages mid-conversation (French to German and back) and keeps technical terms like GPT, Realtime, OpenAI and computer use intact.
- Suggested uses for live translation: media platforms, customer support, education, and consumer travel apps (the creator's point about competing with Google Translate).
- GPT-Realtime-2 adds GPT-5-class reasoning and parallel tool calling to voice agents. In the demo it reads a calendar, pulls the latest context and updates a CRM entry with a meeting brief and next steps.
- Use preambles: because reasoning and tool calls can take a few seconds, the agent should briefly say what it is about to do (e.g. 'Let me pull the latest context and update your CRM') so the user stays informed.
- Voice agents can keep listening without interrupting. The assistant was told to stay quiet until the phrase 'back to demo', listened to the side conversation, and picked up from there.
- Realtime voice agents can connect to any system through tools: dashboards, the services you already use, and connected devices. OpenAI presents voice as a possible main interface for apps.

## Resources mentioned

- [ ] **[GPT-Realtime-2](https://developers.openai.com/api/docs/models/gpt-realtime-2)** · tool · developers.openai.com · paid  
  OpenAI's realtime speech-to-speech model for voice agents, with GPT-5-class reasoning, parallel tool calling and preambles.  
  Also in: GPT-Realtime-2 & GPT-Realtime-Translate: Reasoning Voice Agents and Live Translation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052447105902596348) · [notes](../../notes/07-agents/2026-05-07-gpt-realtime-2-gpt-realtime-translate-reasoning-voice.md))
- [ ] **[GPT-Realtime-Translate](https://developers.openai.com/api/docs/models/gpt-realtime-translate)** · tool · developers.openai.com · paid  
  OpenAI's realtime model that translates speech live across 70 languages while the speaker is talking.  
  Also in: GPT-Realtime-2 & GPT-Realtime-Translate: Reasoning Voice Agents and Live Translation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052447105902596348) · [notes](../../notes/07-agents/2026-05-07-gpt-realtime-2-gpt-realtime-translate-reasoning-voice.md))
- [ ] **[OpenAI Realtime API](https://platform.openai.com/docs/guides/realtime)** · docs · platform.openai.com · paid  
  OpenAI's developer platform, where the realtime audio models are available for building voice agents and translation apps.  
  Also in: GPT-Realtime-2 & GPT-Realtime-Translate: Reasoning Voice Agents and Live Translation (Melvin Vivas on [X](https://x.com/melvindvivas/status/2052447105902596348) · [notes](../../notes/07-agents/2026-05-07-gpt-realtime-2-gpt-realtime-translate-reasoning-voice.md))
- [ ] **[Google Translate](https://translate.google.com)** · tool · translate.google.com · free  
  Google's free translation app and service, the main incumbent for consumer travel translation.

## Try this

- [ ] Try GPT-Realtime-2 and GPT-Realtime-Translate in the OpenAI API.
- [ ] When building voice agents with reasoning or tool calls, add preambles so the agent tells the user what it is doing while actions run.
- [ ] Connect your voice agent to real systems (calendar, CRM, dashboards, devices) through tool calling.
- [ ] Consumer travel translation app using GPT-Realtime-Translate for live two-way conversation across 70 languages
- [ ] Personal voice assistant that reads your calendar and updates your CRM with meeting briefs and next steps
- [ ] Multilingual customer-support or education voice tool built on realtime translation
