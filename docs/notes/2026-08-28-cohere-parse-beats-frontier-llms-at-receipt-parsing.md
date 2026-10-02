# Cohere Parse Beats Frontier LLMs at Receipt Parsing

Melvin Vivas · X post · 2026-08-28 · [Open on X](https://x.com/melvindvivas/status/2093031802650996799)

**Topics:** LLM Fundamentals, Evaluation (Evals) & Testing · **Level:** intermediate

## Summary

The creator tested Cohere Parse on a hard receipt with many sub-items. It parsed the receipt with 100% accuracy, which no model had done for him before. He says it has the best price-performance for this use case, ahead of GPT 5.5, Gemini 3.5 Flash and Opus 4.8, and you can try it on a Hugging Face Space.

## Key points

- Receipts with nested sub-items are a hard test for document parsing.
- Cohere Parse parsed his test receipt with 100% accuracy.
- For this use case, he says it has better price-performance than GPT 5.5, Gemini 3.5 Flash and Opus 4.8.
- A specialised parsing model can beat general frontier LLMs on cost and accuracy for document extraction.
- Test parsing models on your own hard documents before choosing one.

## Resources mentioned

- [ ] **[Cohere Parse (Hugging Face Space)](https://huggingface.co/spaces/CohereLabs/cohere-parse)** · tool · huggingface.co · free  
  Cohere's document-parsing model, with a demo you can try on Hugging Face Spaces.
- [ ] **[Cohere](https://x.com/cohere)** · person · x.com · free  
  AI company that builds language, embedding and reranking models, and now the Transcribe speech-recognition model.  
  Also in: Cohere Parse: Pricing vs Parse Bench Score (Melvin Vivas on [X](https://x.com/melvindvivas/status/2093027343061418243) · [notes](../notes/2026-08-28-cohere-parse-pricing-vs-parse-bench-score.md)), Cohere's North Micro Vision: a small open-source vision model for documents (Melvin Vivas on [X](https://x.com/melvindvivas/status/2087769941022069164) · [notes](../notes/2026-08-13-cohere-s-north-micro-vision-a-small-open-source-vision.md)), Local Audio Transcription with Cohere Transcribe on WebGPU (Melvin Vivas on [X](https://x.com/melvindvivas/status/2040138622490615919) · [notes](../notes/2026-04-04-local-audio-transcription-with-cohere-transcribe-on-webgpu.md)), Cohere Transcribe: Cohere's New Open-Source Speech-to-Text Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2037347517495656890) · [notes](../notes/2026-03-27-cohere-transcribe-cohere-s-new-open-source-speech-to-text.md))

## Try this

- [ ] Try Cohere Parse on the Hugging Face Space with your own receipts or documents.
- [ ] Build a receipt-parsing pipeline that extracts line items and sub-items, and compare Cohere Parse with frontier LLMs on accuracy and cost.
