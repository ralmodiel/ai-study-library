# How Amazon's Shopping Assistant Uses RAG: Query Planning, Retrieval, Generation

Bashiri Smith · Facebook reel · 2026-09-15 · 1:06 · 3,087 views · [Open on Facebook](https://www.facebook.com/reel/1057039177213138)

**Topics:** Retrieval-Augmented Generation (RAG), AI System Design & Architecture · **Level:** beginner

## Summary

A real-world case study of how Amazon's shopping assistant answers product questions like "Are these shoes good for hiking in the rain?" using retrieval-augmented generation. The pipeline has three stages: query planning, gathering evidence from the product catalog, reviews and community Q&A, and generation. The main engineering lesson is that different questions need different evidence. Retrieving the right context is the most important step, because the model can still struggle when it gets the wrong context.

## Key points

- RAG is needed because the model must know about specific products, and those details may not be in its training data.
- Step 1 – Query planning: a separate model interprets the shopper's question to improve retrieval.
- Step 2 – Retrieval/evidence gathering: pull relevant data from Amazon's product catalog, customer reviews, and community Q&A.
- Different sources answer different parts of a question: specs say whether shoes are advertised as waterproof, and reviews say whether customers' feet actually stayed dry.
- Step 3 – Generation: the retrieved information becomes context for the LLM, which then answers the question.
- Different questions need different evidence, so route retrieval to the sources that actually answer the user's question.
- Retrieving the right information is the most important step. Even a strong model struggles when given the wrong context.

## Resources mentioned

- [ ] **[The Complete AI Engineer Roadmap for 2026 (Exact Courses + Step-by-Step)](https://www.youtube.com/watch?v=ZSOecQCdea4)** · video · youtube.com · free  
  Bashiri Smith's free YouTube training on upgrading your skills and becoming competitive for AI engineering roles, with specific courses listed step by step.  
  Also in: Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 Free Videos to Move from Software Engineer to AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1615291686990735) · [notes](../notes/2026-09-28-6-free-videos-to-move-from-software-engineer-to-ai-engineer.md)), Wannabe vs $200K+ AI Engineer: RAG, Agents, Context and Fine-Tuning Mistakes (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28509399318713823) · [notes](../notes/2026-09-27-wannabe-vs-200k-ai-engineer-rag-agents-context-and-fine.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../notes/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)) and 15 more
- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more
- [ ] **[Amazon Rufus (AI shopping assistant)](https://www.amazon.science/blog/the-technology-behind-amazons-genai-powered-shopping-assistant-rufus)** · tool · amazon.science · free  
  Amazon Science's write-up of how Rufus, Amazon's AI shopping assistant, uses RAG over the catalog, reviews and community Q&A - a real-world RAG case study.

## Try this

- [ ] When building a RAG system, check that the information you retrieve actually answers the user's question.
- [ ] Match each type of question to the evidence source that answers it (e.g., specs vs. reviews vs. Q&A).
- [ ] Watch the creator's full AI engineering roadmap video.
- [ ] Comment "shoes" on the video to receive the roadmap and community links.
- [ ] Build a product Q&A assistant that uses query planning, then retrieves from product specs, customer reviews and community Q&A before generating an answer.
