# 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping

Bashiri Smith · Facebook reel · 2026-09-25 · 0:07 · 46,284 views · [Open on Facebook](https://www.facebook.com/reel/1081423530962902)

**Topics:** Start Here: Roadmaps & Strategy, LLMOps, Deployment & Monitoring, Portfolio Projects · **Level:** intermediate

## Summary

This short reel has no speech. In the caption, the creator lists 7 habits for becoming an AI engineer: read serious AI engineering books, learn software fundamentals and product thinking, build real projects with production tools, understand how LLM systems work, read AI research every week, learn deployment, observability and evals, and ship work publicly. His main point is that people get hired for building reliable production systems, not for copying tutorials.

## Key points

- Habit 1: Read real AI engineering books, such as the LLM Engineer's Handbook, Chip Huyen's work and Building Agentic AI.
- Habit 2: Master software fundamentals and product thinking. AI engineering is still software engineering.
- Habit 3: Build projects that solve real problems using production tools: LangGraph (orchestration), LiteLLM (model gateway), Langfuse (tracing), pgvector (vector storage) and Docker (packaging).
- Habit 4: Understand how LLM systems actually work: RAG, embeddings, reranking, evals and context engineering.
- Habit 5: Read AI research weekly on arXiv and Hugging Face Papers, and follow Sebastian Raschka's breakdowns.
- Habit 6: Learn deployment, observability and evals with Vercel, AWS, OpenTelemetry, Grafana and LangSmith.
- Habit 7: Ship projects publicly on GitHub and LinkedIn, with technical write-ups and architecture diagrams.
- Hiring signal: show that you can build reliable production systems, not tutorial copies.

## Resources mentioned

- [ ] **[LLM Engineer's Handbook](https://www.pauliusztin.ai/book)** · book · pauliusztin.ai · paid  
  A book by Paul Iusztin and Maxime Labonne on building production LLM systems from start to finish, including RAG, fine-tuning and LLMOps.
- [ ] **[Chip Huyen](https://huyenchip.com)** · person · huyenchip.com · free  
  An author of widely read books on AI engineering and ML systems design (for example, AI Engineering and Designing Machine Learning Systems).
- [ ] **[Building Agentic AI](https://www.amazon.com/Building-Agentic-Fine-Tuning-Optimization-Deployment/dp/0135489687)** · book · amazon.com · paid  
  A book on designing and building agentic AI systems.
- [ ] **[LangGraph](https://github.com/langchain-ai/langgraph)** · tool · github.com · free  
  Open-source library for building stateful LLM workflows as graphs, with branching, loops and human-in-the-loop pauses.  
  Also in: LangChain vs. LangGraph Explained with One RAG Chatbot (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1394445942341422) · [notes](../notes/2026-09-29-langchain-vs-langgraph-explained-with-one-rag-chatbot.md)), Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../notes/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), AI Engineer Roadmap: Fundamentals, RAG, Agents, Books & Your First AI Service (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2012814779367142) · [notes](../notes/2026-08-28-ai-engineer-roadmap-fundamentals-rag-agents-books-your.md)) and 1 more
- [ ] **[LiteLLM](https://github.com/BerriAI/litellm)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open-source LLM gateway/proxy that gives one API for many model providers, with cost tracking and pricing features.  
  Also in: Using Codex to Fix a LiteLLM Pricing-Markup Bug in Docker (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082462655550525649) · [notes](../notes/2026-07-29-using-codex-to-fix-a-litellm-pricing-markup-bug-in-docker.md)), Codex Finds a Bug in a LiteLLM Feature (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082451730810474926) · [notes](../notes/2026-07-29-codex-finds-a-bug-in-a-litellm-feature.md))
- [ ] **[Langfuse](https://langfuse.com)** · tool · langfuse.com · free  
  Listed under platforms that combine tracing and evaluation.  
  Also in: Taking a RAG App to Production: Evals, Guardrails, Cost and Tracing (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1223253343329020) · [notes](../notes/2026-09-12-taking-a-rag-app-to-production-evals-guardrails-cost-and.md))
- [ ] **[pgvector](https://github.com/pgvector/pgvector)** · tool · github.com · free  
  An open-source Postgres extension for storing embeddings and running vector similarity search.  
  Also in: How RAG Works: Chunking, Embedding, Vector Storage, and Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1639527170837316) · [notes](../notes/2026-09-26-how-rag-works-chunking-embedding-vector-storage-and.md)), How RAG Works Under the Hood: Chunking, Embedding, Storage, Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28850952981168407) · [notes](../notes/2026-09-13-how-rag-works-under-the-hood-chunking-embedding-storage.md))
- [ ] **[Docker](https://www.docker.com)** · tool · docker.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  A container platform for packaging an application and its dependencies so it can be deployed reproducibly.  
  Also in: Deploying AI workflow integrations with Apache Camel in Docker (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104111742288879627) · [notes](../notes/2026-09-27-deploying-ai-workflow-integrations-with-apache-camel-in.md)), Devin's cloud Ubuntu sandbox ships with Docker pre-installed (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103521578600599928) · [notes](../notes/2026-09-26-devin-s-cloud-ubuntu-sandbox-ships-with-docker-pre-installed.md)), 8-Week Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1758231042116375) · [notes](../notes/2026-09-19-8-week-roadmap-to-a-200k-ai-engineering-role.md)), AI Engineer Roadmap for 2026 in 60 Seconds (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1601172415086808) · [notes](../notes/2026-09-11-ai-engineer-roadmap-for-2026-in-60-seconds.md)) and 5 more
- [ ] **[arXiv](https://arXiv.org)** · website · arxiv.org · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  A free archive of research preprints, with daily listings of new papers in fields like Artificial Intelligence, Machine Learning, and Computational Engineering, Finance, and Science.  
  Also in: Generate Job-Worthy AI Project Ideas from Recent Research Papers + ChatGPT (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1972990223365519) · [notes](../notes/2026-09-22-generate-job-worthy-ai-project-ideas-from-recent-research.md)), The complete arXiv corpus as a Hugging Face dataset (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101546732119265499) · [notes](../notes/2026-09-20-the-complete-arxiv-corpus-as-a-hugging-face-dataset.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../notes/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md)), Red Flags That Hurt Your Chances of Landing an AI-Era Coding Job (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2064099227799277) · [notes](../notes/2026-08-30-red-flags-that-hurt-your-chances-of-landing-an-ai-era.md))
- [ ] **[Hugging Face Papers](https://huggingface.co/papers)** · website · huggingface.co · free  
  A daily, community-curated feed of trending AI research papers on Hugging Face.
- [ ] **[Sebastian Raschka](https://sebastianraschka.com)** · person · sebastianraschka.com · free  
  An ML researcher and author known for clear breakdowns of LLM research and architectures (Ahead of AI newsletter, Build a Large Language Model (From Scratch)).
- [ ] **[Vercel](https://x.com/vercel)** · tool · x.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Vercel's unified gateway for many LLM providers; the source of the open vs closed token-volume stats.  
  Also in: OpenAI DevDay 2026 Recap: Dots, Agents API, Codex Cloud & Marketplace (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105173002740695356) · [notes](../notes/2026-09-30-openai-devday-2026-recap-dots-agents-api-codex-cloud.md)), Jev model added to the AIBackends API via Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101199012615561488) · [notes](../notes/2026-09-19-jev-model-added-to-the-aibackends-api-via-vercel-ai-gateway.md)), Open models now dominate token volume on Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101188319703134335) · [notes](../notes/2026-09-19-open-models-now-dominate-token-volume-on-vercel-ai-gateway.md)), Adding Vercel AI Gateway as a provider in AIBackends with Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101160927718781084) · [notes](../notes/2026-09-19-adding-vercel-ai-gateway-as-a-provider-in-aibackends-with.md)) and 7 more
- [ ] **[AWS](https://aws.amazon.com)** · tool · aws.amazon.com · free  
  Amazon Web Services cloud platform for deploying and scaling applications, with a free tier.
- [ ] **[OpenTelemetry](https://opentelemetry.io)** · tool · opentelemetry.io · free  
  An open-source observability standard and toolkit for collecting traces, metrics and logs.
- [ ] **[Grafana](https://grafana.com)** · tool · grafana.com · free  
  An open-source dashboarding and monitoring platform for visualizing metrics, logs and traces.
- [ ] **[LangSmith](https://www.langchain.com/langsmith)** · tool · langchain.com · free  
  Listed under platforms that combine tracing and evaluation.
- [ ] **[GitHub](https://github.com)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Code hosting platform whose CI runs and pull requests the Cursor agents monitor and open.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../notes/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), Cursor Projects: Long-Lived Agents That Manage Fleets of Coding Agents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098411199478296673) · [notes](../notes/2026-09-11-cursor-projects-long-lived-agents-that-manage-fleets-of.md)) and 9 more
- [ ] **[LinkedIn](https://www.linkedin.com)** · website · linkedin.com · free  
  Professional network, used here to find warm-lead connections and the names of contacts for cold outreach.  
  Also in: 6 Steps to Build a Resume Project That Lands an AI Engineering Job (Bashiri Smith on [Facebook](https://www.facebook.com/reel/961750610321136) · [notes](../notes/2026-09-24-6-steps-to-build-a-resume-project-that-lands-an-ai.md)), 6-Step Framework for Building AI Projects Target Companies Care About (Bashiri Smith on [Facebook](https://www.facebook.com/reel/4074702829504077) · [notes](../notes/2026-09-23-6-step-framework-for-building-ai-projects-target-companies.md)), Beat the Hiring "Signal Problem": Referrals, Targeting, and Volume (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2182954155974409) · [notes](../notes/2026-09-21-beat-the-hiring-signal-problem-referrals-targeting-and.md)), 90-Day AI Engineering Job Search: Targeted Companies, Outreach & Loom Pitches (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1429406039343568) · [notes](../notes/2026-09-21-90-day-ai-engineering-job-search-targeted-companies.md)) and 2 more
- [ ] **[The Complete AI Engineer Roadmap for 2026 (Exact Courses + Step-by-Step)](https://www.youtube.com/watch?v=ZSOecQCdea4)** · video · youtube.com · free  
  Bashiri Smith's free YouTube training on upgrading your skills and becoming competitive for AI engineering roles, with specific courses listed step by step.  
  Also in: Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 Free Videos to Move from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1615291686990735) · [notes](../notes/2026-09-28-6-free-videos-to-move-from-software-engineer-to-ai-engineer.md)), Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), AI Engineer Roadmap: 5 Skill Areas, a 24-Week Study Order & Interview Strategy (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1773952177150793) · [notes](../notes/2026-09-18-ai-engineer-roadmap-5-skill-areas-a-24-week-study-order.md)) and 15 more

## Try this

- [ ] Read real AI engineering books: LLM Engineer's Handbook, Chip Huyen's books and Building Agentic AI.
- [ ] Strengthen your software fundamentals and product thinking.
- [ ] Build projects that solve real problems using LangGraph, LiteLLM, Langfuse, pgvector and Docker.
- [ ] Study how LLM systems work: RAG, embeddings, reranking, evals and context engineering.
- [ ] Read AI research every week on arXiv and Hugging Face Papers, and follow Sebastian Raschka's breakdowns.
- [ ] Learn deployment, observability and evals with Vercel, AWS, OpenTelemetry, Grafana and LangSmith.
- [ ] Ship projects publicly on GitHub and LinkedIn, with technical write-ups and architecture diagrams.
- [ ] Comment "STEPS" on the reel to get the creator's full roadmap.
- [ ] Build a production-style LLM app that solves a real problem: LangGraph orchestration, LiteLLM model gateway, pgvector retrieval, Langfuse tracing, all containerized with Docker.
- [ ] Add a RAG pipeline with reranking and evals, deploy it to Vercel or AWS, and monitor it with OpenTelemetry, Grafana or LangSmith.
- [ ] Publish the project on GitHub with an architecture diagram and a technical write-up on LinkedIn.
