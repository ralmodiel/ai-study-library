# How RAG Works: Chunking, Embedding, Vector Storage, and Retrieval

Bashiri Smith · Facebook reel · 2026-09-26 · 1:12 · 11,915 views · [Open on Facebook](https://www.facebook.com/reel/1639527170837316)

**Topics:** Retrieval-Augmented Generation (RAG), Embeddings & Vector Databases · **Level:** beginner

## Summary

Bashiri Smith calls RAG one of the most important skills for AI engineers right now. The caption says nearly 40% of AI engineer job postings ask for it. The video explains the basic RAG pipeline in four steps: chunk documents at semantic boundaries, turn the chunks into embeddings, store the vectors in a vector database, then retrieve the closest chunks and pass them to an LLM as context. It ends by pointing out that production RAG is much deeper and points viewers to the creator's free RAG resource guide.

## Key points

- The caption says RAG is explicitly requested in nearly 40% of AI engineer job postings.
- Step 1, chunking: split your sources (PDFs, internal wikis, webpages, Slack messages) at semantic boundaries such as paragraphs, sections and headers, not at random.
- Leave some overlap between chunks so a retrieved chunk keeps its surrounding context.
- Step 2, embedding: run each chunk through an embedding model, which turns the text into a high-dimensional vector (a list of numbers that represents its meaning). Chunks with similar meaning end up close together.
- Step 3, storage: store the vectors in a vector database such as Pinecone, Weaviate or pgvector.
- Step 4, retrieval and generation: embed the user's question the same way as the chunks, find the closest vectors, pull the original text of those chunks and give it to the LLM as context.
- The LLM can then answer from relevant context instead of relying only on its training data.
- Basic RAG is fairly simple, but production-level RAG is a completely different beast and goes much deeper.

## Resources mentioned

- [ ] **[Pinecone](https://www.pinecone.io)** · tool · pinecone.io · free  
  A managed vector database used to store embeddings and run similarity search in RAG systems.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How RAG Works Under the Hood: Chunking, Embedding, Storage, Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28850952981168407) · [notes](../../notes/06-rag/2026-09-13-how-rag-works-under-the-hood-chunking-embedding-storage.md)), Why RAG Alone Won't Make You a Lasting AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1049907277809709) · [notes](../../notes/01-roadmap/2026-08-30-why-rag-alone-won-t-make-you-a-lasting-ai-engineer.md))
- [ ] **[Weaviate](https://weaviate.io)** · tool · weaviate.io · free  
  An open-source vector database for storing embeddings and running semantic and hybrid search.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), How RAG Works Under the Hood: Chunking, Embedding, Storage, Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28850952981168407) · [notes](../../notes/06-rag/2026-09-13-how-rag-works-under-the-hood-chunking-embedding-storage.md)), Why RAG Alone Won't Make You a Lasting AI Engineer (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1049907277809709) · [notes](../../notes/01-roadmap/2026-08-30-why-rag-alone-won-t-make-you-a-lasting-ai-engineer.md))
- [ ] **[pgvector](https://github.com/pgvector/pgvector)** · tool · github.com · free  
  An open-source Postgres extension for storing embeddings and running vector similarity search.  
  Also in: Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), 7 Habits to Become an AI Engineer: Books, Tooling, Research & Shipping (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1081423530962902) · [notes](../../notes/01-roadmap/2026-09-25-7-habits-to-become-an-ai-engineer-books-tooling-research.md)), How RAG Works Under the Hood: Chunking, Embedding, Storage, Retrieval (Bashiri Smith on [Facebook](https://www.facebook.com/reel/28850952981168407) · [notes](../../notes/06-rag/2026-09-13-how-rag-works-under-the-hood-chunking-embedding-storage.md))

## From the PDF shared here: How to become an expert in RAG (BASWE AI Engineer Field Guide)

[Open the original](https://drive.google.com/file/d/1Thj1wcILRDxniC231RaDx0wyuc81f2M5/view) · 1 pages

A one-page field guide from BASWE that lays out a 5-stage path to mastering retrieval-augmented generation. The stages are: get the mental model, build a base pipeline (chunking, embeddings, vector DB, retrieval), upgrade retrieval (hybrid search, reranking, RAG-Fusion, HyDE), ship it to production (evals, latency/cost, guardrails, monitoring), and explore advanced methods (agentic, knowledge-graph and multimodal RAG, RAPTOR, ColBERT, corrective RAG). It lists free courses and YouTube videos for each step and ends with a pitch for the creator's paid Skool community. Treat the stages as a checklist and, as the guide says, ship one real project at every stage.

- [ ] **[Class Central: 12 best RAG courses](https://www.classcentral.com/report/best-rag-courses/)** · article · classcentral.com · free  
  Ranked and tested list of RAG courses; the fastest way to find the Boot.dev, Weights & Biases RAG++, Duke and Google Cloud picks.
- [ ] **[Complete RAG tutorial 2026, with free labs](https://www.youtube.com/watch?v=vT-DpLvf29Q)** · video · youtube.com · free  
  A full code-along crash course that goes from setup to a working RAG system.
- [ ] **[DeepLearning.AI: Retrieval Augmented Generation](https://learn.deeplearning.ai/courses/retrieval-augmented-generation/information)** · course · learn.deeplearning.ai · free  
  Course taught by Zain Hasan with five hands-on modules, free to audit; the same site hosts free short courses on agentic, knowledge-graph and multimodal RAG.
- [ ] **[LangChain: RAG From Scratch (YouTube playlist)](https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x)** · video · youtube.com · free  
  Short-video series by Lance Martin that goes from indexing basics up to advanced routing and reranking; the guide calls it the gold standard.
- [ ] **[Learn Retrieval Augmented Generation (Boot.dev)](https://www.boot.dev/courses/learn-retrieval-augmented-generation)** · course · boot.dev · paid  
  Boot.dev's RAG course (one of Class Central's picks): lessons are free to read, interactive exercises and certificates need a paid membership.
- [ ] **[RAG explained in 20 minutes](https://www.youtube.com/watch?v=RosLeHGBLoY)** · video · youtube.com · free  
  A fast, clear intro with a hands-on project; the quickest way to see the full RAG loop in action.
- [ ] **[RAG++: From POC to Production (Weights & Biases)](https://wandb.ai/site/courses/rag/)** · course · wandb.ai · free  
  RAG course from Weights & Biases named in the Class Central roundup of the best RAG courses.
- [ ] **[Turing Post: 10 RAG Courses in 2026 (Free, Trial, and Paid Options)](https://www.turingpost.com/p/7-free-courses-to-master-rag)** · article · turingpost.com · free  
  Agentic, multimodal and knowledge-graph RAG learning paths gathered in one place.

## Try this

- [ ] Learn RAG, since it is in high demand in AI engineer job postings.
- [ ] Check out the free RAG resources in the creator's guide (RAG-Expert-Guide-BASWE).
- [ ] Comment 'search' on the video to get the links.
- [ ] Practice chunking at semantic boundaries with overlap, then embed, store and retrieve the chunks.
