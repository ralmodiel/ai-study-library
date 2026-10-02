# Parallel Coding Agents with Git Worktrees and Playwright MCP

Melvin Vivas · X post · 2026-05-20 · [Open on X](https://x.com/melvindvivas/status/2056973572007174290)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

The creator now does all his work in git worktrees, so several coding-agent tasks can run in parallel in separate, clean checkouts. A script sets up each new worktree for startup and testing. Playwright MCP is installed so the coding agent can test UI changes in a browser by itself.

## Key points

- Git worktrees let you check out several branches at once in separate folders, which keeps parallel work isolated
- Run one coding agent per worktree so tasks proceed in parallel without conflicts
- Automate worktree setup with a script that installs dependencies, sets up the environment, and gets the app ready to start and test
- Install Playwright MCP so the agent can drive a browser and check UI changes on its own
- Together this gives a cleaner workflow than switching branches in one checkout

## Resources mentioned

- [ ] **[Git worktree](https://git-scm.com/docs/git-worktree)** · docs · git-scm.com · free  
  Git command for keeping several working trees (checked-out branches) from one repository at the same time.
- [ ] **[Playwright MCP](https://github.com/microsoft/playwright-mcp)** · repo · github.com · free  
  Microsoft's MCP server that lets AI agents control a browser through Playwright for UI testing and automation.  
  Also in: Building and Deploying a Full App with the Codex App, MCP Servers and Skills (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028108822850773077) · [notes](../../notes/13-ai-tools/2026-03-01-building-and-deploying-a-full-app-with-the-codex-app-mcp.md))

## Try this

- [ ] Use git worktrees to run several coding-agent tasks in parallel
- [ ] Write a script that prepares a fresh worktree for startup and testing
- [ ] Install Playwright MCP so your coding agent can check UI changes by itself
- [ ] Build a worktree bootstrap script that creates a worktree, installs dependencies, copies env files, and starts the app for agent testing
