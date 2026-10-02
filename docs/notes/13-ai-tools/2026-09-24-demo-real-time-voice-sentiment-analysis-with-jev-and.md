# Demo: Real-Time Voice Sentiment Analysis with Jev and ElevenLabs

Melvin Vivas · X video post · 2026-09-24 · 0:27 · 641 views · [Open on X](https://x.com/melvindvivas/status/2102984358621782272)

**Topics:** AI Dev Tools & Productivity, Portfolio Projects · **Level:** beginner

## Summary

This short demo quotes a post showing real-time sentiment analysis on a customer-support call, built with Jev and ElevenLabs. As the caller speaks, each phrase is colored by the emotion it carries, and six meters on the right track the mood of the call. The creator jokes that the same setup could track how people feel about Codex usage limits. There's no tutorial or build steps, only the demo.

## Key points

- What it does: real-time sentiment analysis on live speech. Each phrase is colored by its emotion while the caller is still talking, so you don't wait for the call to end.
- Six emotion meters track the overall mood of the call as it goes.
- Built with Jev together with ElevenLabs (voice AI). The demo doesn't say how the two are connected.
- The sample call moves through several emotions: warm praise, frustration about being charged twice for the third time this month, a calm request for a fix, then relief and thanks after an instant refund.
- This shows why sentiment has to be scored phrase by phrase: one call can hold mixed and changing emotions, and a single overall label would hide that.
- Possible uses mentioned or implied: monitoring support calls, and (as a joke) tracking how developers feel about Codex rate limits.

## Resources mentioned

- [ ] **[ElevenLabs](https://elevenlabs.io)** · tool · elevenlabs.io · free  
  Voice AI platform for speech synthesis and speech-to-text, used here in a real-time voice sentiment analysis demo.  
  Also in: ElevenLabs Eleven v4 & v4 Turbo: Emotive, Multilingual Text-to-Speech Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104641980634739162) · [notes](../../notes/16-trends/2026-09-29-elevenlabs-eleven-v4-v4-turbo-emotive-multilingual-text-to.md)), A Cheaper Voice Option Than ElevenLabs, Credited to @thorwebdev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103176794216272104) · [notes](../../notes/13-ai-tools/2026-09-25-a-cheaper-voice-option-than-elevenlabs-credited-to.md)), OpenAI's Agentic Software Factory: Build-Review-Deploy-Observe Loop (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100073894011134133) · [notes](../../notes/07-agents/2026-09-16-openai-s-agentic-software-factory-build-review-deploy.md))
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Generating a Repo Promo Video with a Claude Skill on Sonnet 5.5 vs Opus 5.5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105947598104449202) · [notes](../../notes/13-ai-tools/2026-10-02-generating-a-repo-promo-video-with-a-claude-skill-on-sonnet.md)), GLiDE by Fastino Labs: A Post-Trainable Reasoning Decision Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105892783018135826) · [notes](../../notes/03-llm-fundamentals/2026-10-02-glide-by-fastino-labs-a-post-trainable-reasoning-decision.md)), Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../../notes/06-rag/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../../notes/07-agents/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)) and 12 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more

## Try this

- [ ] Build a real-time call sentiment dashboard: transcribe speech as it streams, classify each phrase's emotion, color the transcript and update per-emotion meters (shown in the demo).
- [ ] Track developer sentiment about Codex usage limits (the creator's joke).
