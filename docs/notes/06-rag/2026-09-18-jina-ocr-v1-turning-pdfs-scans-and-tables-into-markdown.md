# jina-ocr-v1: Turning PDFs, Scans and Tables into Markdown

Melvin Vivas · X video post · 2026-09-18 · [Open on X](https://x.com/melvindvivas/status/2100627054849065081)

**Topics:** Retrieval-Augmented Generation (RAG) · **Level:** intermediate

## Summary

Jina AI released jina-ocr-v1, a visual document parser post-trained on DeepSeek. It has 3.4B total and 570M active parameters with built-in speculative decoding. It turns PDFs, scans, tables, charts and invoices into clean markdown, which makes it useful for document-ingestion pipelines.

## Key points

- jina-ocr-v1 is post-trained on DeepSeek
- 3.4B total parameters, 570M active, with built-in speculative decoding
- Input: PDFs, scans, tables, charts, invoices; output: clean markdown
- Available through Jina Reader via the `x-respond-with` header
- Useful for parsing visual documents before RAG ingestion

## Resources mentioned

- [ ] **[jina-ocr-v1](https://huggingface.co/jinaai/jina-ocr-v1)** · tool · huggingface.co · free  
  Jina AI's visual document parser that turns PDFs, scans, tables, charts and invoices into markdown.
- [ ] **[Jina Reader](https://jina.ai/reader/)** · tool · jina.ai · free  
  Jina AI's API that converts URLs and documents to LLM-friendly text; it exposes jina-ocr-v1 via \`x-respond-with\`.
- [ ] **[DeepSeek](https://www.deepseek.com)** · tool · deepseek.com · free  
  Open-weight large language models from DeepSeek, known for strong reasoning and coding at low cost.  
  Also in: Open models now dominate token volume on Vercel AI Gateway (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101188319703134335) · [notes](../../notes/16-trends/2026-09-19-open-models-now-dominate-token-volume-on-vercel-ai-gateway.md)), Bolt.new Adds Open Models (GLM, DeepSeek, Kimi) via Bolt Forge (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099557234707726844) · [notes](../../notes/13-ai-tools/2026-09-15-bolt-new-adds-open-models-glm-deepseek-kimi-via-bolt-forge.md)), OpenCode Go: Open Coding Models (DeepSeek, Qwen, Kimi, GLM) for $10/mo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099099181327814984) · [notes](../../notes/13-ai-tools/2026-09-13-opencode-go-open-coding-models-deepseek-qwen-kimi-glm-for.md)), Orchestrator + Subagents in opencode with Open Models (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098410568680177970) · [notes](../../notes/07-agents/2026-09-11-orchestrator-subagents-in-opencode-with-open-models.md)) and 4 more

## Try this

- [ ] Use jina-ocr-v1 to convert invoices or scanned PDFs to markdown as the ingestion step of a RAG pipeline
