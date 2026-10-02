# Pi Agent Council: Ask Multiple LLMs in Parallel and Compare Their Advice

Melvin Vivas · X video post · 2026-10-01 · 0:25 · 1,026 views · [Open on X](https://x.com/melvindvivas/status/2105645508186570807)

**Topics:** AI Dev Tools & Productivity, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Melvin Vivas shows Pi Agent Council, an open-source extension he built for the Pi coding agent (@pidotdev). A single /council command sends one question to several models at the same time and shows their answers side by side, so you can see where they agree and disagree. In the demo he queries Opus 5.5, GPT-6 Astra and GPT-6.1 Sol.

## Key points

- Pi Agent Council is an extension for the Pi coding agent (@pidotdev on X).
- One slash command, /council, sends the same question to several models in parallel.
- The demo uses 3 models: Opus 5.5, GPT-6 Astra and GPT-6.1 Sol.
- Answers appear side by side, and the extension points out where the models agree and disagree.
- Asking several models at once works like a quick ensemble or second opinion: if they agree you can be more confident, and if they disagree you know to look closer.
- The source code is public on GitHub (donvito/pi-agent-council), so you can read it to see how a Pi extension is built.

## Resources mentioned

- [ ] **[Pi Agent Council](https://github.com/donvito/pi-agent-council)** · repo · github.com · free  
  Open-source Pi extension that adds a /council command to ask several models in parallel and compare their advice side by side.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md))
- [ ] **[Pi](https://x.com/pidotdev)** · tool · x.com · free  
  A customizable coding agent that can be extended through its Extensions API and connected to several model providers.  
  Also in: Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Pi reaches v1.0 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105873124176826551) · [notes](../../notes/13-ai-tools/2026-10-02-pi-reaches-v1-0.md)), Claude Code mods: customize behavior and UI with plugins (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105872553818611759) · [notes](../../notes/13-ai-tools/2026-10-02-claude-code-mods-customize-behavior-and-ui-with-plugins.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)) and 39 more
- [ ] **[Opus 5.5](https://www.anthropic.com/claude-opus-5-5)** · tool · anthropic.com · paid  
  Anthropic Claude model, one of the three models asked in the council demo.
- [ ] **[GPT-6 Astra](https://openai.com/index/gpt-6-astra/)** · tool · openai.com · paid  
  The model announced in the quoted launch post, pitched as the developer's most capable model for work, coding, science and cybersecurity, and able to operate a computer.  
  Also in: Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), Use GPT-6.1 Sol by Default, Save Astra for Emergencies (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105295649810047401) · [notes](../../notes/03-llm-fundamentals/2026-09-30-use-gpt-6-1-sol-by-default-save-astra-for-emergencies.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../../notes/07-agents/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), OpenAI DevDay recap: Dots, GPT-6.1 Sol, Codex Cloud, Agents API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105018489794879836) · [notes](../../notes/16-trends/2026-09-30-openai-devday-recap-dots-gpt-6-1-sol-codex-cloud-agents-api.md)) and 49 more
- [ ] **[GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)** · tool · openai.com · paid  
  A new OpenAI model announced at DevDay 2026 (name as written in the machine transcript), offered with Fast and Ultra fast speed tiers.  
  Also in: JevDev: Open-Source UI Tool for Experimenting with Jev (Typesafe.ai) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105945215991488696) · [notes](../../notes/13-ai-tools/2026-10-02-jevdev-open-source-ui-tool-for-experimenting-with-jev.md)), Comparing Coding Models on the Same Task in Devin iOS (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105882889653248435) · [notes](../../notes/13-ai-tools/2026-10-02-comparing-coding-models-on-the-same-task-in-devin-ios.md)), Customizing Your Coding Setup with Pi Coding Agent Extensions (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105871612591714651) · [notes](../../notes/13-ai-tools/2026-10-02-customizing-your-coding-setup-with-pi-coding-agent.md)), GPT-6.1 and Sonnet 5.5 Released the Same Week (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105320549127954629) · [notes](../../notes/16-trends/2026-09-30-gpt-6-1-and-sonnet-5-5-released-the-same-week.md)) and 9 more

## Try this

- [ ] Install the Pi coding agent and add the Pi Agent Council extension from the GitHub repo.
- [ ] Use /council to ask several models the same question, then compare where they agree and disagree.
- [ ] Build your own multi-model 'council' tool or agent extension: send a prompt to several LLMs in parallel and show a side-by-side comparison of where they agree and disagree.
