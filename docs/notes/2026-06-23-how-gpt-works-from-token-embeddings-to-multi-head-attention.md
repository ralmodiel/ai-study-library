# How GPT Works: From Token Embeddings to Multi-Head Attention

Melvin Vivas · X video post · 2026-06-23 · 15:11 · 76 views · [Open on X](https://x.com/melvindvivas/status/2069518118783992178)

**Topics:** LLM Fundamentals, Programming & ML Foundations · **Level:** intermediate

## Summary

This video walks through how a decoder-only GPT is put together, using a Galton board as the analogy for predicting the next token. It covers batching the training data, token and positional embeddings, scaled dot-product self-attention with Q/K/V, multi-head attention, feed-forward layers, layer normalization, stacked blocks and residual connections. It ends by explaining why AI labs tune each part of this architecture: agentic apps want faster, smarter models with longer context, and hardware sets limits.

## Key points

- Analogy: GPT replaces the random mechanics of a Galton board. Each 'ball drop' is a next-token prediction based on the tokens so far.
- Data is split into batches of blocks. The example uses 4 parallel batches × 8 tokens = 32 tokens sampled per step.
- A token ID alone carries no meaning. A token embedding table (example: 128 ASCII characters × 32 dimensions) gives each token room to learn what it represents.
- Self-attention uses three learned projections: Q (what a token looks for), K (how a token is labeled) and V (the content it passes on). The scores are Q·Kᵀ divided by √head_size (√32 ≈ 5.66). Future tokens are masked to -inf because this is a decoder-only model. Softmax turns the scores into probabilities, which are then multiplied by V.
- Positional embeddings are added to token embeddings so the model knows word order ('love your job' ≠ 'job your love').
- Multi-head attention splits Q/K/V into several heads, so the model looks at the same text from different angles (for example grammar, short-range and long-range relationships).
- Each block is attention followed by a feed-forward network, with layer normalization to keep values stable and residual (skip) connections so each layer adds a change on top of its input instead of replacing it. Blocks are stacked, and a final projection predicts the next token.
- The architecture alone does nothing useful until it is trained on billions or trillions of tokens with SGD/optimizers. Labs tune every part of it to balance context length, speed, intelligence and hardware cost.

## Resources mentioned

- [ ] **[Attention Is All You Need](https://arxiv.org/abs/1706.03762)** · paper · arxiv.org · free  
  The 2017 Google paper that introduced the Transformer and scaled dot-product / multi-head attention.
- [ ] **[Improving Language Understanding by Generative Pre-Training (original GPT paper)](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)** · paper · cdn.openai.com · free  
  OpenAI's 2018 paper introducing GPT, a decoder-only Transformer pretrained generatively and then fine-tuned.

## Try this

- [ ] Learn the scaled dot-product attention formula softmax(QKᵀ/√d)·V and follow its matrix shapes (8×8 scores for an 8-token block).
- [ ] Draw the GPT block diagram yourself: embeddings + positional encoding → \[LayerNorm → multi-head attention → residual → LayerNorm → FFN → residual\] × N → projection to vocabulary.
- [ ] Go further on training methods (stochastic gradient descent, optimizers).
- [ ] Train a small character-level GPT on your own text (for example your video scripts) so it writes in your style. Use the video's settings: batch 4, block size 8, 32-dim embeddings, ASCII vocabulary.
