# Use HTML for LLM Outputs, Markdown for Context

Melvin Vivas · X post · 2026-05-09 · [Open on X](https://x.com/melvindvivas/status/2052980756016951351)

**Topics:** Prompt & Context Engineering · **Level:** intermediate

## Summary

A short take on output formats: have the model produce HTML when you need richer output, but don't feed HTML into the context. Markdown usually takes fewer tokens, so it's the better choice for input context. The post also points out that the article's author works at Anthropic, so token cost doesn't matter much to him.

## Key points

- Markdown usually uses fewer tokens than HTML.
- HTML can express more (layout, styling, structure), which is useful for final outputs.
- Use HTML for outputs only, not as context you put in the prompt.
- Think about token cost when you copy advice from people who don't pay for tokens.

## Try this

- [ ] Write the context you give the model in Markdown, and ask for HTML only when you need the richer output.
