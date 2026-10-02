# Running a 28.9M-Parameter LLM on an $8 ESP32 Microcontroller

Melvin Vivas · X post · 2026-08-02 · [Open on X](https://x.com/melvindvivas/status/2083934049345884248)

**Topics:** LLM Fundamentals, Industry Trends & Job Market · **Level:** intermediate

## Summary

A developer used a trick borrowed from Google's Gemma models to fit a 28.9M-parameter language model on an $8 ESP32 microcontroller. It shows that very small LLMs can run on very cheap hardware at the edge. The linked Hackster.io article has the details.

## Key points

- A 28.9M-parameter LLM was made to run on an ESP32 chip that costs about $8.
- The approach borrows a technique from Google's Gemma model family.
- Tiny LLMs can run on microcontrollers, without a GPU or the cloud.
- Read the Hackster.io write-up for how it was done.

## Resources mentioned

- [ ] **[Running a 28.9M Parameter LLM on an $8 Microcontroller (Hackster.io)](https://hackster.io/news/running-a-28-9m-parameter-llm-on-an-8-microcontroller-173f1f370708)** · article · hackster.io · free  
  Hackster.io news article about fitting a 28.9M-parameter LLM onto an ESP32 using a trick from Gemma.
- [ ] **[ESP32](https://www.espressif.com/en/products/socs/esp32)** · tool · espressif.com · paid  
  A low-cost microcontroller from Espressif, used here to run a tiny LLM.
- [ ] **[Gemma 4](https://ai.google.dev/gemma)** · tool · ai.google.dev · free  
  Google's family of open-weight models in several sizes, built to run on devices and offline, with multimodal and agentic abilities, and open to fine-tuning.  
  Also in: Gemma 4 Runs Locally On-Device in the Antigravity SDK (Melvin Vivas on [X](https://x.com/melvindvivas/status/2103308712920367350) · [notes](../notes/2026-09-25-gemma-4-runs-locally-on-device-in-the-antigravity-sdk.md)), On-Device AI: Running Gemma 4 E2B Offline on an iPhone with LiteRT (Melvin Vivas on [X](https://x.com/melvindvivas/status/2102981288370278873) · [notes](../notes/2026-09-24-on-device-ai-running-gemma-4-e2b-offline-on-an-iphone-with.md)), Running Gemma 4 Models Offline on an iPhone (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101502813251805361) · [notes](../notes/2026-09-20-running-gemma-4-models-offline-on-an-iphone.md)), Fine-tuning Gemma4-E2B on your own tweet style with Unsloth (Melvin Vivas on [X](https://x.com/melvindvivas/status/2101206363749957741) · [notes](../notes/2026-09-19-fine-tuning-gemma4-e2b-on-your-own-tweet-style-with-unsloth.md)) and 25 more

## Try this

- [ ] Read the Hackster.io article to learn the technique used.
- [ ] Run a tiny language model on a cheap microcontroller such as an ESP32.
