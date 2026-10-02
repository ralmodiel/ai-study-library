# Fixing RAG Ranking Problems with a Cross-Encoder Re-ranker

Bashiri Smith · Facebook reel · 2026-09-16 · 1:10 · 3,982 views · [Open on Facebook](https://www.facebook.com/reel/1787903299006514)

**Topics:** Retrieval-Augmented Generation (RAG), Resume, Job Search & Interviews · **Level:** intermediate

## Summary

This short is set up as a mock interview question: how do you fix a RAG app when the right chunk ranks below irrelevant ones? The video says retrieving more chunks and leaving the LLM to sort them out is the wrong answer, because it adds context without fixing the ranking. The better answer is to retrieve a larger candidate set first, then score each question–chunk pair with a cross-encoder re-ranker and send only the top few chunks to the LLM. It also warns that a re-ranker can't help if retrieval never found the right chunk in the first place.

## Key points

- Wrong interview answer: retrieve more chunks and let the LLM find the right context. That adds context but doesn't fix the ranking.
- Fix: add a re-ranking step between retrieval and the LLM.
- Step 1: retrieve a wide set of candidates first (the example uses 50).
- Step 2: pass each chunk together with the question into a cross-encoder model, which gives each pair a relevance score.
- Vector search (bi-encoder) embeds the question and the chunks separately and compares their vectors. A cross-encoder reads the question and the chunk together, so it can see how the words relate.
- Step 3: reorder the chunks by score and send only the top few to the LLM.
- Division of labor: the first search finds candidates, and the re-ranker decides which ones make the cut.
- Limitation: if the right chunk never makes it into the candidate set, the re-ranker can't rescue it. In that case you have to fix retrieval itself.

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer) (Bashiri Smith on [Facebook](https://www.facebook.com/reel/915452468082856) · [notes](../notes/2026-09-30-how-to-evaluate-a-rag-pipeline-retrieval-vs-generation.md)), 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)) and 66 more

## Try this

- [ ] To fix poor chunk ranking in a RAG app, add a cross-encoder re-ranker before the LLM instead of just retrieving more chunks.
- [ ] Retrieve about 50 candidates, re-rank them with a cross-encoder, and pass only the top few to the LLM.
- [ ] If the correct chunk isn't in the candidate set, fix retrieval rather than relying on the re-ranker.
- [ ] Comment "AI" to get the link to the creator's community.
