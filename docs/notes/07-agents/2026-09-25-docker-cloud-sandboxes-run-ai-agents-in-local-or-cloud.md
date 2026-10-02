# Docker Cloud Sandboxes: Run AI Agents in Local or Cloud microVMs

Melvin Vivas · X video post · 2026-09-25 · 1:04 · 3,363 views · [Open on X](https://x.com/melvindvivas/status/2103310977878073835)

**Topics:** AI Agents, Tool Use & MCP, LLMOps, Deployment & Monitoring, AI Safety, Security & Guardrails · **Level:** intermediate

## Summary

Melvin Vivas shares Docker's announcement of Cloud Sandboxes, a hosted version of Docker Sandboxes for running AI agents. Cloud Sandboxes use the same microVM isolation, CLI and trust model as local Docker Sandboxes, so you can start an agent on your laptop for free and move it to Docker-managed compute with one command. The agent keeps running after you close your laptop.

## Key points

- Docker Cloud Sandboxes give you the same microVM isolation as local Docker Sandboxes, but on always-on compute that Docker manages.
- The clip names the CLI 'SBX' (probably the sbx command of Docker Sandboxes). It's the same CLI, developer experience (DX), kits and trust model locally and in the cloud.
- You can start locally for free, move to the cloud, scale out, and bring the sandbox back to your laptop at any time, all with one command.
- Sandboxes boot in hundreds of milliseconds and are billed by the second.
- Secrets, policies, networks, agent config and Cloud MCP gateways are built in.
- You can close your laptop and the agent keeps running in the cloud. This addresses the 'capacity and reproducibility' needs of agent workloads.
- New accounts get $250 in free credits.

## Resources mentioned

- [ ] **[Docker Cloud Sandboxes](https://www.docker.com/blog/introducing-cloud-sandboxes-start-on-your-laptop-finish-in-the-cloud/)** · tool · docker.com · paid  
  Docker-managed cloud compute that runs AI agents in isolated microVMs, with billing by the second and built-in secrets, policies and MCP gateways.
- [ ] **[Docker Sandboxes](https://www.docker.com/products/docker-sandboxes/)** · tool · docker.com · free  
  Local microVM-isolated sandboxes for safely running AI coding agents on your laptop.  
  Also in: Docker Sandboxes for Running Coding Agents Locally (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105612765323055169) · [notes](../../notes/07-agents/2026-10-01-docker-sandboxes-for-running-coding-agents-locally.md)), Docker Sandboxes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093363509405044767) · [notes](../../notes/13-ai-tools/2026-08-28-docker-sandboxes.md)), Docker Sandboxes Include an Interactive Dashboard (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093337808656339425) · [notes](../../notes/13-ai-tools/2026-08-28-docker-sandboxes-include-an-interactive-dashboard.md)), Run Codex and Claude in YOLO Mode Safely with Docker Sandboxes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093335392015794596) · [notes](../../notes/13-ai-tools/2026-08-28-run-codex-and-claude-in-yolo-mode-safely-with-docker.md)) and 1 more
- [ ] **[sbx CLI (Docker Sandboxes CLI)](https://docs.docker.com/reference/cli/sbx/)** · tool · docs.docker.com · free  
  Command-line tool for creating and managing Docker Sandboxes, locally or in the cloud.
- [ ] **[Docker MCP Gateway](https://github.com/docker/mcp-gateway)** · tool · github.com · free  
  Docker's gateway for connecting agents to MCP servers; it is built into Cloud Sandboxes.

## Try this

- [ ] Try Docker Sandboxes locally for free to run an AI agent in an isolated microVM.
- [ ] Sign up for Docker Cloud Sandboxes to get the $250 in free credits for new accounts, then move a local sandbox to the cloud.
