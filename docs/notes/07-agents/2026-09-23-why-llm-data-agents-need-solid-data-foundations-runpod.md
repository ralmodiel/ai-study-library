# Why LLM data agents need solid data foundations (Runpod)

Melvin Vivas · X post · 2026-09-23 · [Open on X](https://x.com/melvindvivas/status/2102442716420600068)

**Topics:** AI Agents, Tool Use & MCP, AI System Design & Architecture, Retrieval-Augmented Generation (RAG) · **Level:** intermediate

## Summary

The creator adds to his reading list a write-up by Charlotte Daniels, Runpod's Head of Data, about building an internal AI data-analyst agent. Its main claim is that putting a cutting-edge LLM on top of a typical corporate data warehouse doesn't make it a good analyst. Without clean, well-documented data foundations it becomes a 'confident idiot'.

## Key points

- Dropping a frontier LLM onto a typical corporate data warehouse does not make it a capable data analyst.
- Without good data foundations the agent gives confident but wrong answers.
- Runpod learned this while building an internal AI agent for data analysis.
- Data quality, structure and context come before agent capability.

## Resources mentioned

- [ ] **[Runpod: Building an internal AI agent and the data foundations it needs (Charlotte Daniels)](https://www.infoworld.com/article/4222975/stop-tuning-your-models-and-fix-your-data.html)** · article · infoworld.com · free  
  Runpod's Head of Data on what building an internal AI data agent taught them about data foundations.
- [ ] **[Charlotte Daniels](https://www.runpod.io/blog-post-author/charlotte-daniels)** · person · runpod.io · free  
  Head of Data at Runpod and author of the article on data foundations for AI agents.
- [ ] **[Runpod](https://x.com/runpod)** · tool · x.com · paid  
  GPU cloud platform for running, training and serving AI models; Flash deploys workloads to it.  
  Also in: AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../../notes/13-ai-tools/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Docker image with coding agents pre-installed on a CUDA + PyTorch base (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099758058876649922) · [notes](../../notes/13-ai-tools/2026-09-15-docker-image-with-coding-agents-pre-installed-on-a-cuda.md)), GPU devbox Docker image with coding agents on Runpod (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095503029437190181) · [notes](../../notes/13-ai-tools/2026-09-03-gpu-devbox-docker-image-with-coding-agents-on-runpod.md)), GPU-Ready AI Devbox Docker Image on Runpod (PyTorch 2.8 + CUDA 12.8) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095486635349880962) · [notes](../../notes/13-ai-tools/2026-09-03-gpu-ready-ai-devbox-docker-image-on-runpod-pytorch-2-8-cuda.md)) and 5 more

## Try this

- [ ] Read the Runpod article on data foundations for AI agents.
- [ ] Build an internal text-to-SQL data-analyst agent, and first document and clean the warehouse schema it will query.
