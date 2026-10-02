# Google Colab CLI and Agent Skills: Cloud GPUs From Your Terminal

Melvin Vivas · X video post · 2026-06-09 · [Open on X](https://x.com/melvindvivas/status/2064310591246782875)

**Topics:** AI Dev Tools & Productivity, Fine-tuning & Model Customization, AI Agents, Tool Use & MCP · **Level:** intermediate

## Summary

Google released a Colab CLI and agent Skills that give you full Colab runtimes from the terminal. You can request GPUs or TPUs, run scripts remotely and open an interactive console. A built-in agent skill lets a coding agent do jobs like fine-tuning Gemma 3 1B on a dataset.

## Key points

- Request GPU/TPU hardware from the terminal, e.g. `colab --gpu A100`.
- Run scripts remotely with `colab exec`.
- Interactive console/REPL access to Colab runtimes.
- Comes with a built-in agent skill, so coding agents can drive Colab for you.
- Example task: tell your agent "fine-tune Gemma 3 1B on this dataset".

## Resources mentioned

- [ ] **[Google Colab CLI](https://github.com/googlecolab/google-colab-cli)** · tool · github.com · free  
  A command-line tool for creating Colab GPU/TPU runtimes and running code on them from your terminal.
- [ ] **[Google Colab](https://colab.research.google.com/)** · tool · colab.research.google.com · free  
  Browser-based Jupyter notebook service from Google with free GPU access (T4) for running ML notebooks.  
  Also in: Run Notebooks on a Free GPU with Google Colab (T4, 15GB VRAM) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2104526931538616773) · [notes](../../notes/02-foundations/2026-09-28-run-notebooks-on-a-free-gpu-with-google-colab-t4-15gb-vram.md)), Run Local Models on a Free GPU with Google Colab (T4) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103502126865658236) · [notes](../../notes/10-fine-tuning/2026-09-25-run-local-models-on-a-free-gpu-with-google-colab-t4.md)), Free Colab Notebooks for Local Model Fine-Tuning and Inference (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103489519815442882) · [notes](../../notes/10-fine-tuning/2026-09-25-free-colab-notebooks-for-local-model-fine-tuning-and.md)), Intent classification for support using GLiNER2.5-Decide notebook (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103372920605331589) · [notes](../../notes/03-llm-fundamentals/2026-09-25-intent-classification-for-support-using-gliner2-5-decide.md)) and 12 more
- [ ] **[Gemma 3 1B](https://huggingface.co/google/gemma-3-1b-it)** · tool · huggingface.co · free  
  A small open Gemma 3 model that is practical to fine-tune.

## Try this

- [ ] Try provisioning a Colab GPU from the terminal with \`colab --gpu A100\` and running a script with \`colab exec\`.
- [ ] Have a coding agent fine-tune Gemma 3 1B on your own dataset through the Colab CLI skill.
