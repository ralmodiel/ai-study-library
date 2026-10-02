# Google Antigravity 2.0: Multi-Agent Desktop App Walkthrough (Subagents, Scheduled Tasks)

Melvin Vivas · X video post · 2026-05-19 · 16:13 · 151 views · [Open on X](https://x.com/melvindvivas/status/2056815299677290730)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

Melvin Vivas shares Google's official demo of Antigravity 2.0 and recommends its UI as a model for anyone building an agent tool. Antigravity 2.0 is a standalone desktop app for running coding and general agents. The demo uses Gemini 3.5 Flash to build a street-name guessing game called StreetGuessr. Along the way it shows project-based workspaces, comments on plan artifacts, parallel conversations in worktrees, subagent teams, browser self-testing, command permissions and scheduled tasks that run in the background.

## Key points

- Work is organized around a 'project': you add folders or Git repos, and the project is the starting point for your agents. The onboarding page ('Build with Google') installs skills and plugins such as Modern Web Guidance and Chrome DevTools.
- Plan-first workflow: you ask for an implementation plan as an 'artifact' (it can include an architecture diagram), answer the agent's open questions by leaving comments on the artifact, then click Proceed.
- Safety controls: you can accept, reject or whitelist (always allow) each terminal command the agent wants to run. Settings also cover sandboxing and network permissions.
- Parallel work: choosing 'new worktree' copies the code into a new folder so an agent can work in parallel without disturbing your main branch. You can run several conversations at once, for example confetti streaks, trophy image generation and homepage presets.
- Subagents: a main agent can start its own team, for example QA/browser testing, UI/UX and database/API. It sets itself a timer to check on their progress, and the Overview pane lists every subagent and gives one-click approve buttons.
- The /browser command lets the agent test its own app in Chrome (one-time setup: enable remote debugging). In the demo it even plays the game and fixes its own mistake after reading its thought traces.
- Scheduled tasks run a prompt on a schedule, such as every day at 5 a.m. They keep running in the background after you close the window, and a menu-bar icon shows how many agents are active.
- Suggested uses for scheduled tasks: checking PR status, a daily task brief, or a daily random game location.

## Resources mentioned

- [ ] **[Google Antigravity](https://antigravity.google)** · tool · antigravity.google · check price  
  Google's standalone desktop app for running coding agents, with subagents, worktrees, scheduled tasks, voice input and browser testing.  
  Also in: Windsurf Split: Google Antigravity, Cognition's Devin & AI Coding Tools (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103487585112977648) · [notes](../../notes/13-ai-tools/2026-09-25-windsurf-split-google-antigravity-cognition-s-devin-ai.md)), Firebase Studio Shutdown: Move to Google AI Studio or Antigravity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069099874478657679) · [notes](../../notes/13-ai-tools/2026-06-23-firebase-studio-shutdown-move-to-google-ai-studio-or.md))
- [ ] **[Google Antigravity IDE (Agent Manager)](https://antigravity.google/product/antigravity-ide/)** · tool · antigravity.google · free  
  Google's earlier agent-first IDE, which included the Agent Manager GUI; existing users are moved to 2.0 in their next update.
- [ ] **[Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)** · tool · blog.google · free · open in a browser to verify  
  Google's fast Gemini model, used as the agent model throughout the demo.  
  Also in: Gemini 3.5 Flash Released (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056800646091956238) · [notes](../../notes/16-trends/2026-05-20-gemini-3-5-flash-released.md))
- [ ] **[Modern Web Guidance (Antigravity skill)](https://github.com/googlechrome/modern-web-guidance)** · tool · github.com · free  
  An installable skill that helps the agent navigate the web and build good web products.
- [ ] **[Chrome DevTools](https://developer.chrome.com/docs/devtools)** · tool · developer.chrome.com · free  
  Chrome's built-in developer tools, offered as an Antigravity plugin that the agent can use.
- [ ] **[SQLite](https://www.sqlite.org)** · tool · sqlite.org · free  
  A lightweight embedded SQL database stored in a file.  
  Also in: Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../../notes/13-ai-tools/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Running Qwen3.8-27B EXL3 Locally on an RTX 3090 with 220K+ Context (Melvin Vivas on [X](https://x.com/melvindvivas/status/2094737166354293091) · [notes](../../notes/09-llmops/2026-09-01-running-qwen3-8-27b-exl3-locally-on-an-rtx-3090-with-220k.md)), One-Shotting a Slack Clone with Fable 5 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2064807455435956586) · [notes](../../notes/13-ai-tools/2026-06-11-one-shotting-a-slack-clone-with-fable-5.md)), Local Qwen 3.5 Adds an Express API and SQLite to Make an App Full-Stack (Melvin Vivas on [X](https://x.com/melvindvivas/status/2030343979829801360) · [notes](../../notes/13-ai-tools/2026-03-08-local-qwen-3-5-adds-an-express-api-and-sqlite-to-make-an.md))

## Try this

- [ ] Try Antigravity 2.0 at antigravity.google.
- [ ] If you're building an agent tool, use Antigravity 2.0's UI as a reference for your own interface.
- [ ] Ask for an implementation-plan artifact and review it with comments before letting the agent build.
- [ ] Set command permissions (whitelists, sandboxing, network access) in settings.
- [ ] Use worktrees and subagents to run tasks in parallel, and use /browser so the agent tests its own work.
- [ ] Set up scheduled tasks for recurring prompts, such as PR status checks or a daily brief.
- [ ] StreetGuessr: a web game where users choose a city or draw a bounding box on a map and try to name all its streets, with streaks, confetti and tiered trophies.
- [ ] Add a SQLite backend that stores favorite maps, game history and personal high scores.
- [ ] A scheduled agent that picks a random city region every morning, with a historical fact, and gives you a link to play.
- [ ] Build an agent-tool UI modeled on Antigravity: projects, artifact panes, subagent overview and approval buttons.
