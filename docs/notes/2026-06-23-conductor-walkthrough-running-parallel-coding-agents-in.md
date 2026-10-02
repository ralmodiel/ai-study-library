# Conductor Walkthrough: Running Parallel Coding Agents in Isolated Git Worktrees

Melvin Vivas · X video post · 2026-06-23 · 14:10 · 194 views · [Open on X](https://x.com/melvindvivas/status/2069521472742404424)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas shares a full walkthrough of Conductor, presented by Matt from the Conductor team. Conductor is a desktop UI for running many coding-agent harnesses (Claude Code, Codex, Cursor) side by side, using the subscriptions you already have. Each agent works in its own Git worktree. The video covers setup and run scripts, forking context between agents, cloud workspaces, the PR/CI/review loop, and team workflows built on branches and Linear issues.

## Key points

- Conductor puts the Claude Code, Codex and Cursor harnesses in one UI and uses your existing subscriptions. You need some basic Git and GitHub knowledge to use it.
- Each 'workspace' is its own Git worktree (named after a city by default), so agents never touch your main folder or each other's work.
- Fresh worktrees don't have installed packages, so you set a setup script, a run script, an archive script (runs when a workspace is deleted) and a run mode in a Conductor settings TOML file.
- You can open several agent tabs in one workspace, pull in the transcript from another session, and fork a message's context into a new tab or a new workspace.
- Cloud workspaces snapshot the repo and run the agents remotely. Long tasks keep going with your laptop closed and don't use your CPU or battery.
- PR loop inside Conductor: create a PR (the agent gets PR instructions), see CI jobs and checks, add Greptile or teammate review comments to the chat to have them fixed, use 'Fix errors' to send the CI context to a model, then merge from inside the app.
- Press Cmd+K to create a workspace from a pull request, a branch or a Linear issue (the prompt is pre-filled). This makes it easy to pull a teammate's branch, run it, and keep building on it.
- Suggested flow: new isolated feature workspace → run agents → get reviews from CI, Git and Greptile → fold the fixes back in → open the PR → merge.

## Resources mentioned

- [ ] **[Conductor](https://x.com/conductor_build)** · tool · x.com · check price  
  Desktop app for running multiple coding agents (Claude Code, Codex, Cursor) in parallel in isolated Git worktrees or in the cloud.  
  Also in: Conductor: run Claude Code, Codex, Cursor and OpenCode on one project (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069730172534927366) · [notes](../notes/2026-06-24-conductor-run-claude-code-codex-cursor-and-opencode-on-one.md)), Conductor detects Claude Code/Codex and merges PRs from the app (Melvin Vivas on [X](https://x.com/melvindvivas/status/2069698166874939393) · [notes](../notes/2026-06-24-conductor-detects-claude-code-codex-and-merges-prs-from-the.md))
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[Cursor](https://x.com/cursor_ai)** · tool · x.com · free  
  Cursor's official X account, which posts product announcements such as cloud agents running in configured dev environments.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)) and 120 more
- [ ] **[GPT 5.5](https://openai.com/index/introducing-gpt-5-5/)** · tool · openai.com · paid  
  OpenAI models the creator used as the coding model inside Cursor.  
  Also in: Models That Work With the Hermes Agent for Personal Productivity (Melvin Vivas on [X](https://x.com/melvindvivas/status/2079895506806030617) · [notes](../notes/2026-07-22-models-that-work-with-the-hermes-agent-for-personal.md)), Running GPT-5.5 via Codex as Hermes's Main Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2073394924549267576) · [notes](../notes/2026-07-04-running-gpt-5-5-via-codex-as-hermes-s-main-model.md)), Composer 2.5 as the Default Coding Model in Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2056633730996060252) · [notes](../notes/2026-05-19-composer-2-5-as-the-default-coding-model-in-cursor.md)), Which AI coding model to use for which task (Melvin Vivas on [X](https://x.com/melvindvivas/status/2054966217698672859) · [notes](../notes/2026-05-15-which-ai-coding-model-to-use-for-which-task.md)) and 2 more
- [ ] **[Fable](https://www.anthropic.com/claude/fable)** · tool · anthropic.com · paid  
  Named as what the creator used with Devin for this build; the post gives no details about what it is.  
  Also in: Demo: One-Shotting a Flappy Bird iPhone App with Devin and Fable 5.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2100633836480798746) · [notes](../notes/2026-09-18-demo-one-shotting-a-flappy-bird-iphone-app-with-devin-and.md)), Subagents with mixed models: a strong planner and a fast executor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098828475868332304) · [notes](../notes/2026-09-13-subagents-with-mixed-models-a-strong-planner-and-a-fast.md)), Cognition's SWE-2 Coding Model Now in Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098135543259541847) · [notes](../notes/2026-09-11-cognition-s-swe-2-coding-model-now-in-devin.md)), GPT-6 Astra Access Across Plans vs Fable on Claude Max (Melvin Vivas on [X](https://x.com/melvindvivas/status/2095860011062952272) · [notes](../notes/2026-09-04-gpt-6-astra-access-across-plans-vs-fable-on-claude-max.md)) and 10 more
- [ ] **[Git](https://git-scm.com)** · tool · git-scm.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Version control system. Conductor uses its worktree feature to give each agent an isolated copy of the repo.  
  Also in: AI Engineer Roadmap for 2026 in 60 Seconds (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1601172415086808) · [notes](../notes/2026-09-11-ai-engineer-roadmap-for-2026-in-60-seconds.md))
- [ ] **[GitHub](https://github.com)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Code hosting platform whose CI runs and pull requests the Cursor agents monitor and open.  
  Also in: Grok Bot Can Now Hand Off Coding Tasks to Cursor (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105468023352279408) · [notes](../notes/2026-10-01-grok-bot-can-now-hand-off-coding-tasks-to-cursor.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), Grok Bot Templates: Sharing, Publishing and Safely Installing Bots (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103697947640918283) · [notes](../notes/2026-09-26-grok-bot-templates-sharing-publishing-and-safely-installing.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../notes/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)) and 9 more
- [ ] **[Greptile](https://www.greptile.com)** · tool · greptile.com · check price  
  AI code-review bot that comments on pull requests.
- [ ] **[Linear](https://linear.app)** · tool · linear.app · free  
  Issue tracker with a first-party integration in Conductor.  
  Also in: Theo's YouTube Packaging Masterclass: Thumbnails, Titles and the Algorithm (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099731305567322378) · [notes](../notes/2026-09-15-theo-s-youtube-packaging-masterclass-thumbnails-titles-and.md))
- [ ] **[Tauri](https://tauri.app)** · tool · tauri.app · free  
  Framework for building desktop apps, which Conductor itself is built with.
- [ ] **[VS Code](https://code.visualstudio.com)** · tool · code.visualstudio.com · free  
  Microsoft's code editor.

## Try this

- [ ] Get comfortable with Git and GitHub before using Conductor.
- [ ] Add a project (a local folder or one from GitHub) and see how each workspace becomes an isolated Git worktree.
- [ ] Set setup, run and archive scripts in the Conductor settings TOML file so new worktrees install dependencies and run right away.
- [ ] Run parallel features in separate workspaces, and fork context to new tabs or workspaces when needed.
- [ ] Use cloud workspaces for long, ambitious tasks so they keep running with your laptop closed.
- [ ] Handle the PR loop inside Conductor: add review and CI comments to the chat, use 'Fix errors', then merge.
- [ ] Use Cmd+K to create workspaces from PRs, branches or Linear issues so you can work alongside teammates.
- [ ] Add a large background counter of dispatched trains to the Conductor Quickstart train demo.
- [ ] Add a dark mode to the Quickstart app using a second agent.
- [ ] Migrate the Quickstart project to TypeScript in a parallel isolated worktree, or rebuild it as a full-featured TypeScript app in a cloud workspace.
