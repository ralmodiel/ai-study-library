# HyperFrames: Let Coding Agents Turn HTML into MP4 Videos

Melvin Vivas · X video post · 2026-04-17 · 0:49 · 96 views · [Open on X](https://x.com/melvindvivas/status/2044973138887532613)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** beginner

## Summary

Melvin Vivas shares HeyGen's launch video for HyperFrames, an open-source framework built for AI agents. The agent writes HTML, CSS, and JS compositions and HyperFrames renders them to MP4. HeyGen says they made the launch video itself in Claude Code. You install HyperFrames as an agent skill with one command, describe the video you want, and the agent writes the code that builds it.

## Key points

- HyperFrames is an open-source framework from HeyGen built for agents: the agent writes HTML and HyperFrames renders it to MP4.
- Install it as an agent skill with: npx skills add heygen-com/hyperframes
- HeyGen says its launch video was made with Claude Code plus HyperFrames.
- Anything a browser can render can be a frame: CSS animations, GSAP, Lottie, shaders, Three.js.
- You can add music, sound effects, and footage, and they are combined in code.
- Rendering is deterministic and pixel-perfect, so the same code gives the same video every time.
- Workflow: give the agent the skill, tell it what to make, and watch it build.

## Resources mentioned

- [ ] **[HyperFrames](https://github.com/heygen-com/hyperframes)** · tool · github.com · free  
  HeyGen's open-source framework built for agents that renders HTML/CSS/JS compositions to MP4 video frame by frame.  
  Also in: Codex Astra Making a Demo Video with HyperFrames (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097991207444222137) · [notes](../notes/2026-09-10-codex-astra-making-a-demo-video-with-hyperframes.md)), Hermes Agent + HyperFrames: Turning a Web Page into a Video (Melvin Vivas on [X](https://x.com/melvindvivas/status/2083063910400504226) · [notes](../notes/2026-07-31-hermes-agent-hyperframes-turning-a-web-page-into-a-video.md)), Codex + Hyperframes: AI-Made Explainer Videos (Example: Personal AI) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078762099824906332) · [notes](../notes/2026-07-19-codex-hyperframes-ai-made-explainer-videos-example-personal.md)), Agent-Made Video in 10 Minutes: Hermes Agent + Grok 4.5 + Hyperframes (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078761137001443365) · [notes](../notes/2026-07-19-agent-made-video-in-10-minutes-hermes-agent-grok-4-5.md)) and 1 more
- [ ] **[HeyGen](https://x.com/HeyGen)** · tool · x.com · check price  
  AI video-generation platform for avatar and generative video, which now offers the Seedance 2.0 model.  
  Also in: Making AI Avatar Videos with Claude Code and HeyGen Skills (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045181643196121418) · [notes](../notes/2026-04-17-making-ai-avatar-videos-with-claude-code-and-heygen-skills.md)), Seedance 2.0 Video Model Now Available Inside HeyGen (Demo Clip) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045008868758159604) · [notes](../notes/2026-04-17-seedance-2-0-video-model-now-available-inside-heygen-demo.md)), Making an AI Avatar YouTube Video with HeyGen (Melvin Vivas on [X](https://x.com/melvindvivas/status/2044425290072608889) · [notes](../notes/2026-04-15-making-an-ai-avatar-youtube-video-with-heygen.md))
- [ ] **[Claude Code](https://github.com/anthropics/claude-code)** · tool · github.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  Anthropic's agentic coding tool that edits files and runs commands in your terminal; it now has an 'auto mode' for permission decisions.  
  Also in: Advisor/Executor setup in Claude Code: Opus 5.5 plans, Sonnet 5.5 runs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105168803428802821) · [notes](../notes/2026-09-30-advisor-executor-setup-in-claude-code-opus-5-5-plans-sonnet.md)), Why Plan Mode Still Matters in AI Coding Assistants (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104239715520250187) · [notes](../notes/2026-09-28-why-plan-mode-still-matters-in-ai-coding-assistants-codex.md)), Why Plan Mode Still Matters in AI Coding Agents (Codex, Claude, Cursor) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104223654678839637) · [notes](../notes/2026-09-27-why-plan-mode-still-matters-in-ai-coding-agents-codex.md)), Using Claude Code (Opus 5.5) to cut clips from livestreams (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104206093740306675) · [notes](../notes/2026-09-27-using-claude-code-opus-5-5-to-cut-clips-from-livestreams.md)) and 96 more
- [ ] **[skills CLI (npx skills)](https://www.skills.sh/docs/cli)** · tool · skills.sh · free  
  Command-line tool for installing agent skills, used here to add the HyperFrames skill to your agent.
- [ ] **[GSAP](https://gsap.com)** · tool · gsap.com · free  
  JavaScript animation library that can drive animations inside HyperFrames videos.
- [ ] **[Lottie](https://airbnb.io/lottie/)** · tool · airbnb.io · free  
  Format and library for vector animations that can be used inside HyperFrames compositions.
- [ ] **[Three.js](https://x.com/threejs)** · tool · x.com · free  
  JavaScript 3D graphics library whose browser-rendered scenes can become video frames.  
  Also in: Building a 3D Flight Scene with Sonnet in Cursor, three.js and 3D Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2096641826015027485) · [notes](../notes/2026-09-07-building-a-3d-flight-scene-with-sonnet-in-cursor-three-js.md)), Vibe-Coding a 3D Human Anatomy App with Three.js and GPT 5.6 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2083936762351735263) · [notes](../notes/2026-08-02-vibe-coding-a-3d-human-anatomy-app-with-three-js-and-gpt-5-6.md)), Building a Three.js Scene with Claude Opus 5 in Claude Desktop (Melvin Vivas on [X](https://x.com/melvindvivas/status/2083837258520813929) · [notes](../notes/2026-08-02-building-a-three-js-scene-with-claude-opus-5-in-claude.md)), GLM-5.1 vs Claude Code (Opus 4.6): One-Shot Three.js Racing Game Eval (Melvin Vivas on [X](https://x.com/melvindvivas/status/2043623690332705231) · [notes](../notes/2026-04-13-glm-5-1-vs-claude-code-opus-4-6-one-shot-three-js-racing.md))

## Try this

- [ ] Install the skill: npx skills add heygen-com/hyperframes
- [ ] Give your coding agent (e.g. Claude Code) the skill and describe the video you want.
- [ ] Ask the agent to add CSS animations, GSAP, Lottie, shaders, or Three.js, plus music, sound effects, and footage.
- [ ] Optional: retweet and comment "HyperFrames" on the original post to get the launch video's source code (you must follow the account).
- [ ] Use an AI coding agent and HyperFrames to make a product launch or demo video from HTML/CSS/JS.
- [ ] Build animated explainer videos with GSAP, Lottie, or Three.js scenes, add music, and render them to MP4.
