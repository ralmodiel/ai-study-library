# How to Evaluate a RAG Pipeline: Retrieval vs. Generation (Interview Answer)

Bashiri Smith · Facebook reel · 2026-09-30 · 2:23 · 10,451 views · [Open on Facebook](https://www.facebook.com/reel/915452468082856)

**Topics:** Retrieval-Augmented Generation (RAG), Evaluation (Evals) & Testing, Resume, Job Search & Interviews · **Level:** intermediate

## Summary

The video walks through a standard RAG pipeline: ingest documents, split them into chunks, create embeddings, store them in a vector database, run similarity search on the user's question, and pass the retrieved context to the LLM. It then shows how to answer the common AI engineering interview question "How would you evaluate a RAG pipeline?" Split the evaluation into retrieval (precision, recall) and generation (faithfulness, relevance, correctness). For each metric, it explains how to find where a failure comes from and how to fix it.

## Key points

- Pipeline overview: ingest and clean data, split it into chunks, create embeddings, and store them in a vector database. At query time, the question is embedded and compared to the stored embeddings by similarity search. The top chunks, the question and your instructions are sent to the LLM.
- Evaluate two parts separately: retrieval (did the system find the right information?) and generation (did the model use that information correctly?).
- Retrieval precision: what share of the retrieved chunks is relevant, and are the most useful ones near the top? Fixes: add a reranker or adjust top-K.
- Retrieval recall: did you get all the information needed? Fixes: check that the information actually made it into the database, retrieve more chunks, or combine keyword search with vector search (hybrid search).
- Generation faithfulness: is the answer supported by the retrieved context, or is the model making things up? Check the exact context the model received, make sure it wasn't cut off, write clear instructions, and tell the model to say when it lacks enough information.
- Generation relevance: does the answer address the user's question? Make sure the original question is passed to the model, write a clear prompt, and test removing distracting context or conflicting instructions.
- Generation correctness: does the answer agree with the verified answer in your test case? The facts must match, but the wording doesn't have to. If it's wrong, check for outdated or incorrect sources, or a model that misunderstood them.
- Going deeper on ingestion: did it lose a page or break a table? Did chunking split the answer away from the context needed to understand it? Are the document and query embeddings compatible?

## Resources mentioned

- [ ] **[BASWE.Ai Engineer (Skool community)](https://www.skool.com/baswe-ai/about)** · community · skool.com · paid  
  The creator's paid community and program, with an AI learning roadmap (including the full ops and evaluation track), daily calls with engineers and recruiters, resume and portfolio help, and a job-search pipeline.  
  Also in: 5 Things AI Engineers Must Evaluate: RAG, Agents, Models, Data, Guardrails (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2589891101436330) · [notes](../notes/2026-09-30-5-things-ai-engineers-must-evaluate-rag-agents-models-data.md)), Software Engineer to AI Engineer Before 2027: A 5-Step Career Plan (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1433622515329300) · [notes](../notes/2026-09-30-software-engineer-to-ai-engineer-before-2027-a-5-step.md)), 6 AI Career Paths for Software Engineers and What Each One Focuses On (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1986269588714726) · [notes](../notes/2026-09-29-6-ai-career-paths-for-software-engineers-and-what-each-one.md)), LangChain vs. LangGraph Explained with One RAG Chatbot (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1394445942341422) · [notes](../notes/2026-09-29-langchain-vs-langgraph-explained-with-one-rag-chatbot.md)) and 66 more

## Try this

- [ ] Structure your interview answer in two parts: retrieval (precision, recall) and generation (faithfulness, relevance, correctness).
- [ ] Practice explaining what you'd measure, where a failure could come from, and how you'd test a fix.
- [ ] If information is missing, check ingestion, chunking, the embedding model and search settings.
- [ ] If the right information was found but the answer is still bad, look at the actual prompt, check whether context got cut off, and review your instructions.
- [ ] Build test cases with verified answers so you can check correctness.
- [ ] Build a RAG evaluation harness that scores retrieval precision and recall plus answer faithfulness, relevance and correctness against a test set with verified answers, then compare fixes such as adding a reranker, changing top-K, or using hybrid search.
