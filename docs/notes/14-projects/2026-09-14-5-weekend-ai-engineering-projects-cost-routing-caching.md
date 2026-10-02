# 5 Weekend AI Engineering Projects: Cost Routing, Caching, Evals & Observability

Bashiri Smith · Facebook reel · 2026-09-14 · 1:28 · 19,059 views · [Open on Facebook](https://www.facebook.com/reel/1987763505269220)

**Topics:** Portfolio Projects, LLMOps, Deployment & Monitoring, Evaluation (Evals) & Testing · **Level:** intermediate

## Summary

Bashiri Smith suggests five AI projects you could build in a weekend. Each one deals with a real production problem: model cost routing, semantic caching, regression testing against a golden dataset, observability for multi-step pipelines, and documentation that updates itself through a GitHub Action. He says building them teaches more than any course. The video ends by inviting viewers to comment "5" to get a guide with build instructions and an AI engineer community.

## Key points

- LLM cost autopilot: a routing layer in front of several LLM providers. It judges how complex each query is and sends it to the cheapest model that can still answer well.
- Semantic caching layer: middleware that spots requests that mean the same thing as earlier ones and returns the cached answer right away. This cuts latency and API costs.
- Model regression detector: a CI/CD-style pipeline that keeps testing LLM-powered features against a golden dataset. When a system prompt or model change lowers quality, it alerts the team on Slack.
- Failure forensics tool: an observability layer for multi-step AI pipelines. It traces every intermediate step, finds where a failure started, and flags the failure for evaluation.
- Self-healing technical docs: a GitHub Action that watches a codebase, notices code changes that affect the documentation, finds the outdated sections, and updates them.
- The creator's guide has build instructions for all five projects. The counts of extra projects don't match: the caption says 21 more, the spoken version says 10 more.

## Resources mentioned

- [ ] **[Bashiri Smith's AI Projects Guide](https://drive.google.com/drive/folders/1juyW1jEWgVNw12la8twx53PhwMhkrnK3)** · pdf · drive.google.com · free  
  The creator's guide to 27 AI projects, with full architecture, build steps phase by phase, interview talking points, and the stack for each project.  
  Also in: 6-Step Framework for Building AI Projects Target Companies Care About (Bashiri Smith on [Facebook](https://www.facebook.com/reel/4074702829504077) · [notes](../../notes/14-projects/2026-09-23-6-step-framework-for-building-ai-projects-target-companies.md)), Generate Job-Worthy AI Project Ideas from Recent Research Papers + ChatGPT (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1972990223365519) · [notes](../../notes/14-projects/2026-09-22-generate-job-worthy-ai-project-ideas-from-recent-research.md)), 3 AI Portfolio Projects That Get Past the 6-Second Resume Scan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1396616845322191) · [notes](../../notes/14-projects/2026-09-22-3-ai-portfolio-projects-that-get-past-the-6-second-resume.md)), 15 Production-Grade AI Projects to Go from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1722750759026422) · [notes](../../notes/14-projects/2026-09-16-15-production-grade-ai-projects-to-go-from-software.md)) and 3 more
- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Pointer to Bashiri Smith's Complete AI Engineer Roadmap for 2026 (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1771577477300003) · [notes](../../notes/01-roadmap/2026-10-01-pointer-to-bashiri-smith-s-complete-ai-engineer-roadmap-for.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../../notes/06-rag/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)) and 76 more
- [ ] **[Slack](https://slack.com)** · tool · slack.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Team chat app where the user-feedback channel lives and where the agent replies to close the loop.  
  Also in: Dots Demo: A Voice AI Agent Handling Travel Booking and Feedback Triage (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105717848928866390) · [notes](../../notes/07-agents/2026-10-01-dots-demo-a-voice-ai-agent-handling-travel-booking-and.md)), Grok Team Bots: Shared AI Teammates in Slack and Grok (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104743446116552838) · [notes](../../notes/07-agents/2026-09-29-grok-team-bots-shared-ai-teammates-in-slack-and-grok.md)), ChatGPT Voice Update: Plugins, Model Switching and ChatGPT Work (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102848983655956911) · [notes](../../notes/16-trends/2026-09-24-chatgpt-voice-update-plugins-model-switching-and-chatgpt.md)), Devin Gets a Mac VM: AI Agent Builds and Ships iOS Apps (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099894857523454458) · [notes](../../notes/13-ai-tools/2026-09-16-devin-gets-a-mac-vm-ai-agent-builds-and-ships-ios-apps.md)) and 4 more
- [ ] **[GitHub Actions](https://github.com/features/actions)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  GitHub's CI/CD automation platform, used to run the self-healing docs workflow.  
  Also in: Use Claude Code /loop to Watch and Auto-Fix Failing GitHub Actions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2089545024090587357) · [notes](../../notes/13-ai-tools/2026-08-18-use-claude-code-loop-to-watch-and-auto-fix-failing-github.md))

## Try this

- [ ] Pick one of the five projects and build it over a weekend.
- [ ] Comment "5" on the video to get the guide link and the community invite.
- [ ] LLM cost autopilot: a router that scores query complexity and sends each query to the cheapest model that can still answer well
- [ ] Semantic caching middleware for LLM APIs that serves semantically similar requests from a cache
- [ ] Model regression detector: a CI/CD pipeline that tests LLM outputs against a golden dataset and sends Slack alerts
- [ ] Failure forensics / observability tool that traces multi-step AI pipelines and finds where failures start
- [ ] Self-healing technical docs: a GitHub Action that finds outdated docs after code changes and updates them
