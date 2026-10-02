# The 3 Levels of AI Engineering: LLM Apps → Production → Agentic Systems

Bashiri Smith · Facebook reel · 2026-09-05 · 1:13 · 10,059 views · [Open on Facebook](https://www.facebook.com/reel/2164893074437351)

**Topics:** Start Here: Roadmaps & Strategy, Retrieval-Augmented Generation (RAG), AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

Bashiri Smith splits AI engineering into three levels. Level 1 is building with LLMs: API calls, prompting, embeddings, tokens and basic RAG. Level 2 is production AI engineering: hybrid search, reranking, evaluations, guardrails, observability, latency and cost. Level 3 is agentic AI engineering: multi-step systems that use tools, keep state and check their own output, backed by production-grade evals and guardrails. His main point is that most people stop at level 1. They can build an app, but not one that thousands of users can trust in production.

## Key points

- Level 1 (Building with LLMs): call the OpenAI or Anthropic APIs, write prompts, and understand embeddings, context windows and tokens. Build simple RAG. Most people stop here.
- At level 1 you can build apps, but they aren't ready for production.
- Level 2 (Production AI Engineering): plan for thousands of users hitting your system at once.
- Use hybrid search plus reranking instead of plain semantic search.
- Production work means evaluating retrieval quality, tracing failures, handling hallucinations, adding guardrails, and managing latency and cost.
- The question changes from 'can I build an AI app?' to 'can I build it so it's trustworthy in production?'
- Level 3 (Agentic AI Engineering): systems that reason through multiple steps, use tools, keep state, evaluate their own output and decide what to do next.
- Agentic systems still need evals and guardrails to be production-grade.

## Resources mentioned

- [ ] **[The Complete AI Engineer Roadmap for 2026 (Exact Courses + Step-by-Step)](https://www.youtube.com/watch?v=ZSOecQCdea4)** · video · youtube.com · free  
  Bashiri Smith's free YouTube training on upgrading your skills and becoming competitive for AI engineering roles, with specific courses listed step by step.  
  Also in: Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 Free Videos to Move from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1615291686990735) · [notes](../notes/2026-09-28-6-free-videos-to-move-from-software-engineer-to-ai-engineer.md)), Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../notes/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)) and 15 more
- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more
- [ ] **[OpenAI API](https://platform.openai.com/)** · tool · platform.openai.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's developer platform for calling models like GPT Image 2 from your own apps.  
  Also in: How to Relearn LLMs & RAG in 2026: A 7-Step Roadmap with Free Resources (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2217704205474341) · [notes](../notes/2026-09-23-how-to-relearn-llms-rag-in-2026-a-7-step-roadmap-with-free.md)), Livestream: Building a React Native ChatGPT App with Cursor and OpenAI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099388668909850812) · [notes](../notes/2026-09-14-livestream-building-a-react-native-chatgpt-app-with-cursor.md)), GPT-Live-1: OpenAI's Full-Duplex Voice Model for Voice Agents in the API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098299004706820418) · [notes](../notes/2026-09-11-gpt-live-1-openai-s-full-duplex-voice-model-for-voice.md)), GPT Image 2 Adds Transparent Background Support in the OpenAI API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2090712735600562200) · [notes](../notes/2026-08-21-gpt-image-2-adds-transparent-background-support-in-the.md)) and 4 more
- [ ] **[Anthropic API](https://www.anthropic.com/api)** · tool · anthropic.com · paid  
  Anthropic's API for calling Claude models from your own applications.

## Try this

- [ ] Work out which of the three levels you're at now.
- [ ] Get past basic RAG: learn hybrid search, reranking, retrieval evaluation, tracing, guardrails, and latency and cost management.
- [ ] Once you build agentic systems, add evals and guardrails so they hold up in production.
- [ ] Watch the full AI Engineer roadmap video linked in the caption.
- [ ] Optional: comment 'levels' to get the creator's training and the community link.
