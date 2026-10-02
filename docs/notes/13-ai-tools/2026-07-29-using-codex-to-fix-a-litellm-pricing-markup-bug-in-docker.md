# Using Codex to Fix a LiteLLM Pricing-Markup Bug in Docker

Melvin Vivas · X post · 2026-07-29 · [Open on X](https://x.com/melvindvivas/status/2082462655550525649)

**Topics:** AI Dev Tools & Productivity, LLMOps, Deployment & Monitoring · **Level:** intermediate

## Summary

The creator used the Codex coding agent to fix a pricing-markup bug in LiteLLM by editing the code inside the Docker container where LiteLLM was running. It's a real example of a coding agent patching a third-party LLM gateway in place.

## Key points

- LiteLLM's pricing-markup feature had a bug that the creator needed fixed.
- Codex first found the bug, then patched the code inside the running Docker container.
- Coding agents can debug and patch open-source infrastructure you depend on, not just your own code.
- Patching code inside a container is a quick fix; you would still need to rebuild the image or send the fix upstream so it isn't lost.

## Resources mentioned

- [ ] **[OpenAI Codex](https://openai.com/codex)** · tool · openai.com · paid  
  OpenAI's coding agent. In the diagram it writes code, fixes review findings and drives the build loop. The creator also used it to make this video.  
  Also in: An agent bot that installs and drives Codex on its own (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105963336097837160) · [notes](../../notes/07-agents/2026-10-02-an-agent-bot-that-installs-and-drives-codex-on-its-own.md)), Asking a Coder bot to install Codex (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105961766471754199) · [notes](../../notes/07-agents/2026-10-02-asking-a-coder-bot-to-install-codex.md)), Sign in with ChatGPT: Setting Usage Limits for Each App (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105933855802929153) · [notes](../../notes/13-ai-tools/2026-10-02-sign-in-with-chatgpt-setting-usage-limits-for-each-app.md)), Codex Cloud Environments Must Be Saved & Published Before Use (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105908190697472042) · [notes](../../notes/13-ai-tools/2026-10-02-codex-cloud-environments-must-be-saved-published-before-use.md)) and 240 more
- [ ] **[LiteLLM](https://github.com/BerriAI/litellm)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open-source LLM gateway/proxy that gives one API for many model providers, with cost tracking and pricing features.  
  Also in: 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), Codex Finds a Bug in a LiteLLM Feature (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082451730810474926) · [notes](../../notes/13-ai-tools/2026-07-29-codex-finds-a-bug-in-a-litellm-feature.md))
