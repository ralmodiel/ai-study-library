# Run Local Models on a Free GPU with Google Colab (T4)

Melvin Vivas · X video post · 2026-09-25 · 0:54 · 637 views · [Open on X](https://x.com/melvindvivas/status/2103502126865658236)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring, AI Dev Tools & Productivity · **Level:** beginner

## Summary

Melvin Vivas shows how to use Google Colab to run open, local-style models on a free GPU, without buying hardware. You log in with a Google account, open any Jupyter notebook (.ipynb), choose the free T4 GPU, and check it with nvidia-smi. He suggests starting with inference before moving on to fine-tuning, and shares his own Colab notebooks for both.

## Key points

- Google Colab (colab.research.google.com) gives you a free GPU, so you don't need to buy one to start running models.
- Log in with your Gmail/Google account. Colab can open any Jupyter notebook (.ipynb file).
- The free GPU is an NVIDIA T4 with about 15 GB of VRAM.
- Run `nvidia-smi` in a notebook cell (`!nvidia-smi`) to confirm a GPU is attached and see how much VRAM you have.
- Suggested order: get inference working first, then try fine-tuning.
- The creator's donvito/notebooks repo has fine-tuning and inference notebooks for local models that run in Colab.

## Resources mentioned

- [ ] **[Google Colab](https://colab.research.google.com/)** · tool · colab.research.google.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../../notes/03-llm-fundamentals/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)) and 12 more
- [ ] **[donvito/notebooks](https://github.com/donvito/notebooks)** · repo · github.com · free  
  The creator's notebooks for fine-tuning and running local models, which you can run in Google Colab, including a GLiNER2.5-Decide intent classification example.  
  Also in: Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)), Getting started with GLiNER2.5-Decide in a Colab notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103358381050503368) · [notes](../../notes/03-llm-fundamentals/2026-09-25-getting-started-with-gliner2-5-decide-in-a-colab-notebook.md)), Base vs fine-tuned Gemma 4 E2B as a model router (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101538253929406562) · [notes](../../notes/10-fine-tuning/2026-09-20-base-vs-fine-tuned-gemma-4-e2b-as-a-model-router.md)) and 3 more
- [ ] **[Jupyter Notebook](https://jupyter.org/)** · tool · jupyter.org · free  
  An interactive notebook format (.ipynb) that mixes code and output. Colab can open these files.  
  Also in: AI DevBox v1.3.0: a GPU-ready Docker image with coding-agent CLIs (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103720219491619025) · [notes](../../notes/13-ai-tools/2026-09-26-ai-devbox-v1-3-0-a-gpu-ready-docker-image-with-coding-agent.md)), Q&A Over Your Own PDFs with LlamaIndex, OpenAI and Python (2023) (Melvin Vivas on [melvinvivas.com](https://www.melvinvivas.com/chatgpt-openai-langchain-llama-index-generative-text-ai) · [notes](../../notes/06-rag/2023-04-08-q-a-over-your-own-pdfs-with-llamaindex-openai-and-python.md))
- [ ] **[nvidia-smi](https://developer.nvidia.com/system-management-interface)** · tool · developer.nvidia.com · free  
  An NVIDIA command-line tool that shows the attached GPU, its VRAM and how much is in use.  
  Also in: Monitor GPU Usage With nvtop Instead of nvidia-smi (Melvin Vivas on [X](https://x.com/melvindvivas/status/2078412668726378563) · [notes](../../notes/09-llmops/2026-07-18-monitor-gpu-usage-with-nvtop-instead-of-nvidia-smi.md))
- [ ] **[NVIDIA T4 GPU](https://www.nvidia.com/content/dam/en-zz/Solutions/Data-Center/tesla-t4/t4-tensor-core-datasheet-951643.pdf)** · tool · nvidia.com · free  
  The data-center GPU (about 15 GB of VRAM) that Colab offers on its free tier.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md))

## Try this

- [ ] Go to colab.research.google.com and log in with your Google/Gmail account.
- [ ] Switch the runtime to the free T4 GPU and run \`!nvidia-smi\` to check the available VRAM.
- [ ] Open a Jupyter notebook (.ipynb) in Colab and run model inference first.
- [ ] After inference works, try the fine-tuning notebooks in github.com/donvito/notebooks.
- [ ] Run inference with a small open-weight model on Colab's free T4, then fine-tune it with one of the creator's notebooks.
