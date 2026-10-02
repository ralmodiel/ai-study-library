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
  Also in: ElevenLabs Eleven v4 & v4 Turbo: Emotive, Multilingual Text-to-Speech Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104641980634739162) · [notes](../notes/2026-09-29-elevenlabs-eleven-v4-v4-turbo-emotive-multilingual-text-to.md)), A Cheaper Voice Option Than ElevenLabs, Credited to @thorwebdev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103176794216272104) · [notes](../notes/2026-09-25-a-cheaper-voice-option-than-elevenlabs-credited-to.md)), OpenAI's Agentic Software Factory: Build-Review-Deploy-Observe Loop (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100073894011134133) · [notes](../notes/2026-09-16-openai-s-agentic-software-factory-build-review-deploy.md))
- [ ] **[Jev](https://typesafe.ai/)** · tool · typesafe.ai · paid  
  A decision model that makes turn-level forecasts on AI agent conversations using only structural signals (turns, tool calls, workflow stages, timing).  
  Also in: Using Jev as a Reranker to Augment RAG Retrieval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105472378591670420) · [notes](../notes/2026-10-01-using-jev-as-a-reranker-to-augment-rag-retrieval.md)), Using Jev (TypeSafe AI) as a Decision Model for Email Classification (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105248080882987131) · [notes](../notes/2026-09-30-using-jev-typesafe-ai-as-a-decision-model-for-email.md)), Jev Decision Model: Forecasting AI Receptionist Calls from Structure Alone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105149871577792909) · [notes](../notes/2026-09-30-jev-decision-model-forecasting-ai-receptionist-calls-from.md)), Run Laya Decision models locally with Unsloth on 4GB RAM (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104744976089579549) · [notes](../notes/2026-09-29-run-laya-decision-models-locally-with-unsloth-on-4gb-ram.md)) and 10 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more

## Try this

- [ ] Build a real-time call sentiment dashboard: transcribe speech as it streams, classify each phrase's emotion, color the transcript and update per-emotion meters (shown in the demo).
- [ ] Track developer sentiment about Codex usage limits (the creator's joke).
