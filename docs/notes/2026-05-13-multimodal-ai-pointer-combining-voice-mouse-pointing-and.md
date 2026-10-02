# Multimodal AI Pointer: Combining Voice, Mouse Pointing and Vision with Gemini

Melvin Vivas · X video post · 2026-05-13 · 0:57 · 86 views · [Open on X](https://x.com/melvindvivas/status/2054614185963888919)

**Topics:** AI Agents, Tool Use & MCP, Industry Trends & Job Market, Prompt & Context Engineering · **Level:** beginner

## Summary

Melvin Vivas shares a Google DeepMind demo of a prototype that puts Gemini behind the mouse pointer. You point at things on screen and speak deictic words like "this", "that", "here" or "there". The model combines your voice, where the pointer is, and what it sees on screen to work out what you mean, then acts across apps. It shows a new kind of multimodal, agent-style interface where the pointer becomes a way to give the model context.

## Key points

- Idea: the mouse pointer is an overlooked input. Putting a model like Gemini behind it lets the computer understand you the way another person would when you point and talk.
- Prototype technique: deictic keywords ('this', 'that', 'here', 'there') in speech are tied to wherever the pointer is when you say them. This settles what the user is referring to.
- Example: 'Could you get those two ingredients and also this one? Add them to my shopping list here?' The system picks out the items you pointed at and adds them to the list you pointed at.
- Layers of input: voice, text and image understanding are combined so the pointer can 'dig through all of the layers of data' on screen.
- Editing in context: pointing at a calendar draft and saying 'Can you make this 8pm?' updates the draft's start time.
- Working across apps: Gemini writes code to carry out what the user wants as they move the pointer between apps, for example getting directions between two locations they pointed at.
- Design lesson for AI engineers: speech says what to do, pointing says which thing, and vision supplies what is on screen. Together they replace long text prompts.

## Resources mentioned

- [ ] **[Google DeepMind (@GoogleDeepMind) on X: AI pointer demo post](https://x.com/GoogleDeepMind/status/2054246119635300451)** · video · x.com · free  
  Google DeepMind's original post with the demo video of a Gemini-powered pointer that combines voice, pointing and visual understanding.
- [ ] **[Gemini](https://gemini.google.com)** · tool · gemini.google.com · free  
  Google's multimodal AI model family. In this prototype it interprets voice, pointer position and on-screen content, and writes code to act on what the user wants.  
  Also in: Why Claude Works Well as a Brainstorming Partner (Melvin Vivas on [X](https://x.com/melvindvivas/status/2045404254375157902) · [notes](../notes/2026-04-18-why-claude-works-well-as-a-brainstorming-partner.md)), Workshop AI: Building Apps with Cloud and Local Agents (GLM 5, Qwen 3.5) (Melvin Vivas on [X](https://x.com/melvindvivas/status/2037540661747142980) · [notes](../notes/2026-03-27-workshop-ai-building-apps-with-cloud-and-local-agents-glm-5.md)), Building a Nano Banana 2 Image-Gen App with Memex Managed AI Connectors (Melvin Vivas on [X](https://x.com/melvindvivas/status/2028132338249634105) · [notes](../notes/2026-03-01-building-a-nano-banana-2-image-gen-app-with-memex-managed.md))

## Try this

- [ ] Watch Google DeepMind's original demo post to see the full voice + pointer + vision interaction.
- [ ] Build a desktop assistant that takes a screenshot plus pointer coordinates whenever you say 'this', 'that', 'here' or 'there', and sends speech, screenshot and coordinates to a multimodal model like Gemini so it can run actions such as adding items to a list or editing a calendar event.
