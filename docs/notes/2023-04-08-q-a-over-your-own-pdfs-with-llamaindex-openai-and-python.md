# Q&A Over Your Own PDFs with LlamaIndex, OpenAI and Python (2023)

Melvin Vivas · Blog article · 2023-04-08 · [Open on Blog](https://www.melvinvivas.com/chatgpt-openai-langchain-llama-index-generative-text-ai)

**Topics:** Retrieval-Augmented Generation (RAG), Embeddings & Vector Databases, LLM Fundamentals · **Level:** beginner

## Summary

Melvin Vivas introduces generative text AI, the OpenAI API, LangChain and LlamaIndex (formerly GPT Index). He then walks through a basic Python RAG example in Google Colab. It indexes PDFs (his LinkedIn resume) from a /data folder, saves the vector index to disk and queries it in natural language. It also shows how to swap the default text-davinci-003 for the cheaper gpt-3.5-turbo. The code uses the early 2023 llama_index API (GPTSimpleVectorIndex, LLMPredictor), which has since been removed, so treat it as a lesson in concepts rather than code to copy.

## Key points

- LlamaIndex (formerly GPT Index) is a simple interface that connects LLMs to your own external data. It used LangChain internally at the time.
- Basic flow: set OPENAI_API_KEY → SimpleDirectoryReader('data').load_data() → GPTSimpleVectorIndex.from_documents() → save_to_disk('index.json') → load_from_disk → index.query('Question?').
- The defaults were text-davinci-003 as the LLM and OpenAI Ada for embeddings. The embedding model could not be swapped for a cheaper one at the time.
- To cut costs, wrap ChatOpenAI(model_name='gpt-3.5-turbo', temperature=0, max_tokens=256) in an LLMPredictor and pass it through ServiceContext.from_defaults. The author says this is about 10x cheaper than davinci.
- PromptHelper settings: max_input_size=4096, num_output=256, max_chunk_overlap=20. Temperature 0 gives more conservative answers; higher values give more creative ones.
- Build the index once and reload it from disk so you don't pay for embedding API calls again. Only rebuild when your documents change.
- llm_predictor.last_token_usage prints the tokens used by a query, which helps you track cost.
- This code uses the deprecated 2023 llama_index API. Current LlamaIndex uses VectorStoreIndex and Settings instead, so check today's docs before running it.

## Resources mentioned

- [ ] **[OpenAI API (announcement)](https://openai.com/blog/openai-api)** · article · openai.com · free  
  OpenAI's blog post introducing public API access to its models.
- [ ] **[OpenAI API](https://platform.openai.com/)** · tool · platform.openai.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's developer platform for calling models like GPT Image 2 from your own apps.  
  Also in: How to Relearn LLMs & RAG in 2026: A 7-Step Roadmap with Free Resources (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2217704205474341) · [notes](../notes/2026-09-23-how-to-relearn-llms-rag-in-2026-a-7-step-roadmap-with-free.md)), Livestream: Building a React Native ChatGPT App with Cursor and OpenAI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099388668909850812) · [notes](../notes/2026-09-14-livestream-building-a-react-native-chatgpt-app-with-cursor.md)), GPT-Live-1: OpenAI's Full-Duplex Voice Model for Voice Agents in the API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098299004706820418) · [notes](../notes/2026-09-11-gpt-live-1-openai-s-full-duplex-voice-model-for-voice.md)), The 3 Levels of AI Engineering: LLM Apps → Production → Agentic Systems (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2164893074437351) · [notes](../notes/2026-09-05-the-3-levels-of-ai-engineering-llm-apps-production-agentic.md)) and 4 more
- [ ] **[GPT-3 powers the next generation of apps](https://openai.com/blog/gpt-3-apps)** · article · openai.com · free  
  OpenAI blog post showcasing products built on GPT-3.
- [ ] **[OpenAI GPT-3 Models (docs)](https://developers.openai.com/api/docs/models/all)** · docs · developers.openai.com · free  
  OpenAI docs page on the GPT-3 model family; the link now appears broken.
- [ ] **[OpenAI Models (docs)](https://platform.openai.com/docs/models)** · docs · platform.openai.com · free  
  OpenAI documentation listing the available models and what they can do.
- [ ] **[OpenAI Pricing](https://openai.com/pricing/)** · website · openai.com · free  
  OpenAI model pricing page (now redirects to ChatGPT pricing).
- [ ] **[LangChain](https://github.com/hwchase17/langchain)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source framework with ready-made integrations and common interfaces for connecting LLMs, embedding models, vector stores and tools.  
  Also in: LangChain vs. LangGraph Explained with One RAG Chatbot (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1394445942341422) · [notes](../notes/2026-09-29-langchain-vs-langgraph-explained-with-one-rag-chatbot.md)), How to Relearn LLMs & RAG in 2026: A 7-Step Roadmap with Free Resources (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2217704205474341) · [notes](../notes/2026-09-23-how-to-relearn-llms-rag-in-2026-a-7-step-roadmap-with-free.md)), Software Engineer to AI Engineer: Job Boards, Stack, Projects and Learning Sites (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1650742066760603) · [notes](../notes/2026-09-14-software-engineer-to-ai-engineer-job-boards-stack-projects.md)), Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))
- [ ] **[LlamaIndex (llama\_index)](https://github.com/jerryjliu/llama_index)** · repo · github.com · free  
  Open-source data framework that connects LLMs to external data for indexing and question answering.
- [ ] **[LlamaIndex Custom LLMs guide](https://docs.llamaindex.ai/en/stable/module_guides/models/llms/usage_custom/)** · docs · docs.llamaindex.ai · free  
  LlamaIndex how-to on customizing the LLMPredictor/LLM; the link now appears broken.
- [ ] **[Prompt Engineering with LlamaIndex and OpenAI GPT-3](https://sausheong.com/prompt-engineering-with-llamaindex-and-openai-gpt-3-f52114aba8b7)** · article · sausheong.com · free · open in a browser to verify  
  Sau Sheong's article on using LlamaIndex with GPT-3 to query your own documents.
- [ ] **[Sau Sheong](https://sausheong.com/)** · person · sausheong.com · free · open in a browser to verify  
  Engineer and writer who blogs about LLMs and software engineering.
- [ ] **[llama\_index.ipynb (Colab notebook gist)](https://gist.github.com/donvito/bf3575f7d8d87d39e15301da9ee3e9eb)** · repo · gist.github.com · free  
  The author's full Colab notebook source for the LlamaIndex + gpt-3.5-turbo example.
- [ ] **[ChatGPT](https://chatgpt.com/#usage)** · tool · chatgpt.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's updated image generation model in ChatGPT, with faster generation, better fidelity, consistent edits and comment-based editing.  
  Also in: ChatGPT Can Commit Code Directly to Your GitHub Repo (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105329595725791357) · [notes](../notes/2026-10-01-chatgpt-can-commit-code-directly-to-your-github-repo.md)), OpenAI Dots: Agents Inside ChatGPT That Debug, Fix, and Open PRs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105232287231324526) · [notes](../notes/2026-09-30-openai-dots-agents-inside-chatgpt-that-debug-fix-and-open.md)), Dots in ChatGPT: always-on AI agents that you hand responsibilities to (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105209775156076624) · [notes](../notes/2026-09-30-dots-in-chatgpt-always-on-ai-agents-that-you-hand.md)), Use Your ChatGPT Plus/Pro Subscription to Run Devin (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105133960296898826) · [notes](../notes/2026-09-30-use-your-chatgpt-plus-pro-subscription-to-run-devin.md)) and 21 more
- [ ] **[gpt-3.5-turbo](https://platform.openai.com/docs/models/gpt-3.5-turbo)** · tool · platform.openai.com · paid  
  OpenAI chat model; a cheaper alternative to text-davinci-003.  
  Also in: Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))
- [ ] **[text-davinci-003](https://platform.openai.com/docs/deprecations)** · tool · platform.openai.com · paid  
  OpenAI GPT-3 completion model; the default LLM in llama\_index at the time (now deprecated).
- [ ] **[OpenAI Ada embeddings](https://platform.openai.com/docs/models/text-embedding-ada-002)** · tool · platform.openai.com · paid  
  OpenAI embedding model used by llama\_index by default.
- [ ] **[Google Colab](https://x.com/GoogleColab)** · tool · x.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../notes/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../notes/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../notes/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../notes/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more
- [ ] **[Jupyter Notebook](https://jupyter.org/)** · tool · jupyter.org · free  
  An interactive notebook format (.ipynb) that mixes code and output. Colab can open these files.  
  Also in: AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../notes/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../notes/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md))
- [ ] **[Buy Me a Coffee (melvindave)](https://www.buymeacoffee.com/melvindave)** · website · buymeacoffee.com · free · link looked broken  
  The creator's tip page. The link looked broken when checked.  
  Also in: Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))
- [ ] **[donvitocodes (Twitch)](https://twitch.tv/donvitocodes)** · community · twitch.tv · free  
  The author's Twitch channel for live coding streams.  
  Also in: Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))
- [ ] **[Melvin Vivas (@donvito) on X/Twitter](https://twitter.com/donvito)** · person · twitter.com · free  
  The creator's X/Twitter account.  
  Also in: Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))
- [ ] **[Melvin Vivas on LinkedIn](https://www.linkedin.com/in/melvinvivas/)** · person · linkedin.com · free · open in a browser to verify  
  The creator's LinkedIn profile.  
  Also in: Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))
- [ ] **[donvito (GitHub)](https://github.com/donvito)** · repo · github.com · free  
  Melvin Vivas's GitHub profile listing the AI projects he is working on.  
  Also in: Melvin Vivas's GitHub Profile of AI Projects (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105330769996726404) · [notes](../notes/2026-10-01-melvin-vivas-s-github-profile-of-ai-projects.md)), Natural Language to API Calls with LangChain APIChain and OpenAI (Melvin Vivas on [Blog](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call) · [notes](../notes/2023-04-15-natural-language-to-api-calls-with-langchain-apichain-and.md))

## Try this

- [ ] Get an OpenAI API key from the OpenAI Platform and set it as the OPENAI\_API\_KEY environment variable.
- [ ] Run the example in Google Colab, a Jupyter Notebook, or as a local Python script.
- [ ] Upload the PDFs you want to search into a /data folder.
- [ ] Build the index once, save it to disk, and reload it so you don't pay for embedding calls again.
- [ ] Use gpt-3.5-turbo instead of text-davinci-003 to cut costs, and check OpenAI's pricing page.
- [ ] Print last\_token\_usage to keep track of token cost per query.
- [ ] Open the author's Colab notebook gist to see the full code.
- [ ] Ask questions about your own resume: index your LinkedIn resume PDF and ask things like 'What is X's current role?'
- [ ] A customer Q&A bot that answers questions about a company's services and products from its own documents
- [ ] Natural-language querying over a company's unstructured data for customers and prospects
