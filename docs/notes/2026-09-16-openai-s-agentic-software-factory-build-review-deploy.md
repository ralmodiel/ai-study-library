# OpenAI's Agentic Software Factory: Build-Review-Deploy-Observe Loop

Melvin Vivas · X video post · 2026-09-16 · 1:42 · 1,323 views · [Open on X](https://x.com/melvindvivas/status/2100073894011134133)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI System Design & Architecture · **Level:** intermediate

## Summary

Melvin Vivas had Codex turn Gergely Orosz's diagram of OpenAI's "agentic software factory" into a narrated explainer video with no manual edits. The video walks through how OpenAI ships code with agents. A person defines the outcome, and Codex writes the code. The change then goes through build and test, parallel specialist reviews and a risk check, then an agent-run rollout. Agents watch production, and what they find feeds the next cycle. Gergely Orosz's Pragmatic Engineer article has the full details.

## Key points

- A person defines the outcome. Codex then writes and edits code using internal context: source code, docs, tools, skills and data.
- Each change goes through a build-and-test pipeline that includes performance checks.
- Specialist agents review the change in parallel, covering data, infrastructure, cloud and security.
- When checks or reviews find issues, Codex fixes them and repeats the cycle until everything passes.
- Risk classification decides the next step: low-risk changes go ahead, and other changes get extra review from an engineer.
- A deployment agent runs the production rollout, including feature flags, and creates monitoring dashboards for the change.
- In production, agents watch graphs, signals and alerts. 'Perf Factory' looks for latency regressions, filters duplicate alerts and proposes fixes, which go back to Codex. During an outage, 'SevBot' investigates, proposes mitigations and answers questions.
- The whole system is a continuous loop: build, test, review, deploy, observe. People set the goals and review when needed, and agents carry the work through the loop.

## Resources mentioned

- [ ] **[OpenAI's agentic software factory (The Pragmatic Engineer)](https://newsletter.pragmaticengineer.com/p/openai-software-factory)** · article · newsletter.pragmaticengineer.com · check price  
  Gergely Orosz's write-up and diagram of how OpenAI uses Codex and specialist agents to build, review, deploy and monitor code. The caption link is cut off, so search the newsletter for 'OpenAI software factory'.  
  Also in: How OpenAI's Agentic Software Factory Works (Pragmatic Engineer) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100065968869585315) · [notes](../notes/2026-09-16-how-openai-s-agentic-software-factory-works-pragmatic.md))
- [ ] **[Gergely Orosz](https://x.com/GergelyOrosz)** · person · x.com · free  
  Author of The Pragmatic Engineer newsletter. He writes about how big tech companies build software, including OpenAI's agentic workflows.  
  Also in: How OpenAI's Agentic Software Factory Works (Pragmatic Engineer) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100065968869585315) · [notes](../notes/2026-09-16-how-openai-s-agentic-software-factory-works-pragmatic.md))
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[ElevenLabs](https://elevenlabs.io)** · tool · elevenlabs.io · free  
  Voice AI platform for speech synthesis and speech-to-text, used here in a real-time voice sentiment analysis demo.  
  Also in: ElevenLabs Eleven v4 & v4 Turbo: Emotive, Multilingual Text-to-Speech Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104641980634739162) · [notes](../notes/2026-09-29-elevenlabs-eleven-v4-v4-turbo-emotive-multilingual-text-to.md)), A Cheaper Voice Option Than ElevenLabs, Credited to @thorwebdev (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103176794216272104) · [notes](../notes/2026-09-25-a-cheaper-voice-option-than-elevenlabs-credited-to.md)), Demo: Real-Time Voice Sentiment Analysis with Jev and ElevenLabs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102984358621782272) · [notes](../notes/2026-09-24-demo-real-time-voice-sentiment-analysis-with-jev-and.md))
- [ ] **[Astra medium](https://developers.openai.com/api/docs/models/gpt-6-astra)** · tool · developers.openai.com · paid  
  A setting the creator says he used to make the video. The post doesn't say what it is.

## Try this

- [ ] Read Gergely Orosz's Pragmatic Engineer article on OpenAI's software factory for the full details.
- [ ] If you make videos with Codex, try connecting ElevenLabs for a better voice.
- [ ] Have a coding agent (Codex) turn an architecture diagram into a narrated explainer video, with ElevenLabs for the voice.
- [ ] Build a small version of the software factory loop: an agent writes code, CI runs tests, parallel reviewer agents (security, infra), a risk check that routes risky changes to a human, and a monitoring agent that sends production issues back as new tasks.
