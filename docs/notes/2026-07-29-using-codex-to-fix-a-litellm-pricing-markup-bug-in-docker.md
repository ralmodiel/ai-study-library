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
  Also in: Re-authenticate the Pi Agent with the New ChatGPT Sign-In (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105476742412689578) · [notes](../notes/2026-10-01-re-authenticate-the-pi-agent-with-the-new-chatgpt-sign-in.md)), ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), GPT-6.1 Sol in Codex Is Efficient Enough to Downgrade Plans (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105312449813749823) · [notes](../notes/2026-09-30-gpt-6-1-sol-in-codex-is-efficient-enough-to-downgrade-plans.md)), Update Codex to Get GPT-6.1 Sol (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105274065204482501) · [notes](../notes/2026-09-30-update-codex-to-get-gpt-6-1-sol.md)) and 231 more
- [ ] **[LiteLLM](https://github.com/BerriAI/litellm)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  An open-source LLM gateway/proxy that gives one API for many model providers, with cost tracking and pricing features.  
  Also in: 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../notes/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), Codex Finds a Bug in a LiteLLM Feature (Melvin Vivas on [X](https://x.com/melvindvivas/status/2082451730810474926) · [notes](../notes/2026-07-29-codex-finds-a-bug-in-a-litellm-feature.md))
