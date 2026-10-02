# Agents Aren't Cloud Native Because They Rely on Filesystems

Melvin Vivas · X post · 2026-08-11 · [Open on X](https://x.com/melvindvivas/status/2087141744857211207)

**Topics:** AI Agents, Tool Use & MCP, AI System Design & Architecture · **Level:** advanced

## Summary

The creator points out a design limit of today's AI agents: they depend on a local filesystem, so they are not cloud native. He suggests solving this could be a good opportunity. A prompt to think about where agent state and workspaces should live.

## Key points

- Many current agents keep their state, memory and work on a local filesystem.
- Relying on a filesystem makes agents hard to run in stateless, scalable cloud setups.
- Agent workspaces could be moved to cloud storage, databases or sandboxed virtual filesystems.
- The creator frames this as an open problem worth building for.

## Try this

- [ ] Build a cloud-native agent runtime that swaps the local filesystem for a storage-backed virtual filesystem (e.g., object storage or a database).
