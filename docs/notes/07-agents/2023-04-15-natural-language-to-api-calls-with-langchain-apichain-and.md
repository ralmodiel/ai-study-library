# Natural Language to API Calls with LangChain APIChain and OpenAI

Melvin Vivas · melvinvivas.com article · 2023-04-15 · [Open on melvinvivas.com](https://www.melvinvivas.com/chatgpt-openai-natural-language-to-api-call)

**Topics:** AI Agents, Tool Use & MCP, LLM Fundamentals · **Level:** beginner

## Summary

This 2023 post shows how LangChain's APIChain turns a plain-English question into an HTTP API call, using an OpenAI chat model. The worked example asks Singapore's public OneMap search API for the address and postal code of "Our Tampines Hub". The LLM reads a hand-written API spec, builds the request URL, then turns the JSON response into a natural-language answer. The code uses an old LangChain API (langchain.chains.APIChain), and the original docs link now redirects to the general LangChain overview, so treat it as a lesson in the pattern rather than current syntax.

## Key points

- APIChain (LangChain) takes a user question plus API docs, has the LLM build the API URL and call it, then has the LLM summarize the JSON response in natural language.
- Setup: ChatOpenAI(temperature=0, model_name='gpt-3.5-turbo', max_tokens=256). Temperature 0 keeps URL generation predictable.
- The API spec is a hand-written text block listing the base URL, endpoint, an example call, a parameter table (searchVal, returnGeom=N, getAddrDetails=Y) and 'INSTRUCTIONS FOR RESPONDING'.
- Put response rules inside the spec, e.g. 'reply with the first ADDRESS result; if data is empty, say no results and apologize'.
- Build the chain with APIChain.from_llm_and_api_docs(llm, apiSpec, verbose=True), then call chain.run('What is the postal code of Our Tampines Hub?').
- For APIs that need auth, pass headers={'Authorization': 'Bearer <token>'} to from_llm_and_api_docs.
- The OneMap search API returns JSON with fields such as ADDRESS, POSTAL, BLK_NO and ROAD_NAME. The example answers '1 TAMPINES WALK ... SINGAPORE 528523'.
- Suggested use cases: e-commerce product search, stock price questions, travel search, healthcare information and education. All of them replace complex filter UIs with natural language.

## Resources mentioned

- [ ] **[LangChain](https://github.com/hwchase17/langchain)** · tool · github.com · free · **recommended by both** Bashiri Smith & Melvin Vivas  
  Open-source framework with ready-made integrations and common interfaces for connecting LLMs, embedding models, vector stores and tools.  
  Also in: Basic RAG Pipeline in 60 Seconds: From Documents to Grounded Answers (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1893190305357331) · [notes](../../notes/06-rag/2026-10-01-basic-rag-pipeline-in-60-seconds-from-documents-to-grounded.md)), Step-by-Step Roadmap to a $200K+ AI Engineering Role (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1054905907373537) · [notes](../../notes/01-roadmap/2026-10-01-step-by-step-roadmap-to-a-200k-ai-engineering-role.md)), LangChain vs. LangGraph Explained with One RAG Chatbot (Bashiri Smith on [Facebook](https://www.facebook.com/reel/1394445942341422) · [notes](../../notes/06-rag/2026-09-29-langchain-vs-langgraph-explained-with-one-rag-chatbot.md)), How to Relearn LLMs & RAG in 2026: A 7-Step Roadmap with Free Resources (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2217704205474341) · [notes](../../notes/01-roadmap/2026-09-23-how-to-relearn-llms-rag-in-2026-a-7-step-roadmap-with-free.md)) and 2 more
- [ ] **[LangChain API Chain Documentation](https://python.langchain.com/en/latest/modules/chains/examples/api.html)** · docs · python.langchain.com · free  
  LangChain docs page for APIChain. The old URL now redirects to the LangChain overview docs.
- [ ] **[OpenAI API](https://platform.openai.com/)** · tool · platform.openai.com · paid · **recommended by both** Bashiri Smith & Melvin Vivas  
  OpenAI's developer platform for calling models like GPT Image 2 from your own apps.  
  Also in: How to Relearn LLMs & RAG in 2026: A 7-Step Roadmap with Free Resources (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2217704205474341) · [notes](../../notes/01-roadmap/2026-09-23-how-to-relearn-llms-rag-in-2026-a-7-step-roadmap-with-free.md)), Livestream: Building a React Native ChatGPT App with Cursor and OpenAI (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099388668909850812) · [notes](../../notes/13-ai-tools/2026-09-14-livestream-building-a-react-native-chatgpt-app-with-cursor.md)), GPT-Live-1: OpenAI's Full-Duplex Voice Model for Voice Agents in the API (Melvin Vivas on [X](https://x.com/melvindvivas/status/2098299004706820418) · [notes](../../notes/07-agents/2026-09-11-gpt-live-1-openai-s-full-duplex-voice-model-for-voice.md)), The 3 Levels of AI Engineering: LLM Apps → Production → Agentic Systems (Bashiri Smith on [Facebook](https://www.facebook.com/reel/2164893074437351) · [notes](../../notes/01-roadmap/2026-09-05-the-3-levels-of-ai-engineering-llm-apps-production-agentic.md)) and 4 more
- [ ] **[gpt-3.5-turbo](https://platform.openai.com/docs/models/gpt-3.5-turbo)** · tool · platform.openai.com · paid  
  OpenAI chat model; a cheaper alternative to text-davinci-003.  
  Also in: Q&A Over Your Own PDFs with LlamaIndex, OpenAI and Python (2023) (Melvin Vivas on [melvinvivas.com](https://www.melvinvivas.com/chatgpt-openai-langchain-llama-index-generative-text-ai) · [notes](../../notes/06-rag/2023-04-08-q-a-over-your-own-pdfs-with-llamaindex-openai-and-python.md))
- [ ] **[OneMap API Documentation](https://www.onemap.gov.sg/docs)** · docs · onemap.gov.sg · free  
  Docs for Singapore's public OneMap API, including address and postal code search.
- [ ] **[OneMap Common API search endpoint](https://www.onemap.gov.sg/apidocs/)** · tool · onemap.gov.sg · free  
  The search endpoint called in the example. The link looked broken when checked.
- [ ] **[api\_chain\_one\_map\_api\_example (GitHub Gist)](https://gist.github.com/donvito/cb67bc5a497fd4bb02b5715c6096c0c0)** · repo · gist.github.com · free  
  Melvin Vivas's full Python code for the APIChain plus OneMap example.
- [ ] **[donvito (GitHub)](https://github.com/donvito)** · repo · github.com · free  
  Melvin Vivas's GitHub profile listing the AI projects he is working on.  
  Also in: Melvin Vivas's GitHub Profile of AI Projects (Melvin Vivas on [X](https://x.com/melvindvivas/status/2105330769996726404) · [notes](../../notes/14-projects/2026-10-01-melvin-vivas-s-github-profile-of-ai-projects.md)), Q&A Over Your Own PDFs with LlamaIndex, OpenAI and Python (2023) (Melvin Vivas on [melvinvivas.com](https://www.melvinvivas.com/chatgpt-openai-langchain-llama-index-generative-text-ai) · [notes](../../notes/06-rag/2023-04-08-q-a-over-your-own-pdfs-with-llamaindex-openai-and-python.md))

## Try this

- [ ] Copy the Gist code, set OPENAI\_API\_KEY and run the APIChain example against the OneMap API.
- [ ] Write a plain-text API spec (base URL, endpoint, example call, parameter table, response instructions) for an API you want the LLM to call.
- [ ] If the API needs auth, pass an Authorization header to APIChain.from\_llm\_and\_api\_docs.
- [ ] Read the LangChain APIChain docs. Check the current LangChain docs too, since the old page has moved.
- [ ] Natural-language address and postal code lookup over Singapore's OneMap API.
- [ ] E-commerce search that turns natural-language queries into product API calls instead of filter UIs (for example, on a classified ads site).
- [ ] Finance assistant that answers questions like 'What is the current stock price of Amazon?' through a financial API.
- [ ] Travel assistant that searches flights and hotels through travel APIs.
- [ ] Healthcare information bot that pulls from healthcare APIs.
- [ ] Education assistant that answers student questions in real time through educational APIs.
