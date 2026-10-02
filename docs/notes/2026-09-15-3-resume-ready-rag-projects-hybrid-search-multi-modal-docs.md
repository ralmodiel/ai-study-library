# 3 Resume-Ready RAG Projects: Hybrid Search, Multi-Modal Docs and Agentic RAG

Bashiri Smith · Facebook reel · 2026-09-15 · 0:05 · 40,911 views · [Open on Facebook](https://www.facebook.com/reel/2361560687584584)

**Topics:** Retrieval-Augmented Generation (RAG), Portfolio Projects, Resume, Job Search & Interviews · **Level:** intermediate

## Summary

The video suggests three RAG portfolio projects you can build in a few hours, each with a resume bullet you can adapt. The projects are: (1) hybrid-search RAG with cross-encoder reranking and citation checks, (2) a multi-modal document pipeline for messy PDFs, tables and scanned files, with a human review step, and (3) agentic RAG with a retrieval router that can correct itself. Each one targets a quality or real-world gap that most simple RAG demos leave out.

## Key points

- Project 1, hybrid-search RAG: combine dense vector search with BM25 keyword search, then rerank results with a cross-encoder.
- Add a citation-verification pass that checks whether each citation actually supports the claim it is attached to. The creator calls this the quality layer most RAG demos skip.
- Project 2, multi-modal document RAG: use OCR plus LLM extraction on messy PDFs, tables and scanned documents. The creator says this is what real enterprise data looks like, unlike clean markdown.
- Add a validation layer and a confidence-gated human review queue for low-confidence extractions.
- Project 3, agentic RAG: a retrieval router decides what to fetch and when, rewrites weak queries, and retries when the first pass returns too little instead of hallucinating an answer.
- The creator calls agentic RAG 'where the field is heading'.
- Frame each project as a resume bullet with a measurable result, for example 'cut retrieval errors and eliminated unsourced answers' or 'self-corrected on low-confidence results before generating an answer'.

## Resources mentioned

- [ ] **[How to become an expert in RAG (BASWE AI Engineer Field Guide)](https://drive.google.com/file/d/1Thj1wcILRDxniC231RaDx0wyuc81f2M5/view)** · pdf · drive.google.com · free  
  A one-page field guide from BASWE that lays out a 5-stage path to mastering retrieval-augmented generation.  
  Also in: How RAG Works: Chunking, Embedding, Vector Storage, and Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1639527170837316) · [notes](../notes/2026-09-26-how-rag-works-chunking-embedding-vector-storage-and.md)), How RAG Works Under the Hood: Chunking, Embedding, Storage, Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28850952981168407) · [notes](../notes/2026-09-13-how-rag-works-under-the-hood-chunking-embedding-storage.md))

## Try this

- [ ] Build at least one of the three RAG projects and add the matching resume bullet to your resume.
- [ ] Add a citation-verification step to your RAG pipeline so it gives no unsourced answers.
- [ ] Test your pipeline on messy real-world documents such as scanned PDFs and tables, not clean markdown.
- [ ] Comment 'RAG' on the post to get the creator's build guides.
- [ ] Hybrid-search RAG combining dense vectors and BM25, with cross-encoder reranking and a pass that checks each citation supports its claim.
- [ ] Multi-modal document RAG: OCR plus LLM extraction from PDFs, tables and scanned documents, with a validation layer and a confidence-gated human review queue.
- [ ] Agentic RAG with a retrieval router that decides what to fetch, rewrites weak queries and retries when results are thin before answering.
