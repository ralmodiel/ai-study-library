# Cursor Cloud Agents: Onboarding, Self-Testing on a Remote Desktop, Video Demos

Melvin Vivas · X video post · 2026-05-13 · 3:11 · 78 views · [Open on X](https://x.com/melvindvivas/status/2054439149982408826)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

Melvin Vivas shares a Cursor demo of agents that onboard to a codebase, set up their own environment, and test their changes on a cloud computer. The agent sends back a video of the working result. The demo uses the open-source whiteboard Excalidraw: the agent adds a table template, CSV-paste-to-table support and LaTeX math rendering, then opens a PR you can review inside Cursor. The main lesson is that coding agents should check their own work before handing it to you, the way a good co-worker tests a PR before asking for review.

## Key points

- Problem: coding agents often hand back untested changes, like a co-worker asking for a PR review without testing it. Cursor's agents can now use a computer to test changes and record video of the result.
- Step 1, onboarding: point Cursor at your repo (cursor.com/onboard). The agent sets up the dev environment and returns a video showing it can run and use the app.
- Step 2, task from an issue: paste a GitHub issue link (e.g. 'add table support'). The agent worked for about 40 minutes, opened the app in a browser on the right local port, and recorded itself inserting the new table template.
- Step 3, follow-ups: a second request (paste CSV data as a table) took about 20 more minutes. The agent wrote CSV data into a new browser tab through a URL so it could copy and paste it, and it tested an edge case on its own: a quoted field containing a comma.
- Take control: you can click into the agent's cloud desktop and use the environment yourself with very low latency for manual testing.
- LaTeX feature: the agent's demo video shows E=mc², the quadratic formula and integrals rendering correctly.
- Review flow: view all diffs in the Cursor agent. The PR is opened automatically, and you can mark it ready and review it without leaving Cursor.
- Habit to adopt: ask agents for proof of work (videos, screenshots, test runs) along with the diff, and let them run long autonomous sessions on real issues.

## Resources mentioned

- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)) and 120 more
- [ ] **[Cursor Onboard (cursor.com/onboard)](https://cursor.com/onboard)** · website · cursor.com · check price  
  Cursor's setup page for connecting a repo so cloud agents can onboard to it and set up its environment.
- [ ] **[Excalidraw](https://github.com/excalidraw/excalidraw)** · repo · github.com · free  
  Popular open-source virtual whiteboard, used here as the demo codebase (the transcript mishears it as 'Excalibur').
- [ ] **[LaTeX](https://www.latex-project.org)** · tool · latex-project.org · free  
  Typesetting system for math notation; the agent added LaTeX equation rendering to Excalidraw.

## Try this

- [ ] Go to cursor.com/onboard and connect a repo so a Cursor agent can set up its environment.
- [ ] Give the agent a GitHub issue link as its task, then send follow-up requests for related issues.
- [ ] Watch the agent's video artifact to check the change works, and take control of the cloud desktop to test it yourself if needed.
- [ ] Review the diffs inside Cursor, then mark the auto-opened PR as ready.
- [ ] Pick an open-source repo (e.g. Excalidraw), choose a few open feature-request issues (table templates, CSV paste to table, LaTeX rendering) and have a coding agent build and test them with video proof.
- [ ] Compare a coding agent's self-tested PRs with untested ones on a small project and note which edge cases the agent tests on its own.
