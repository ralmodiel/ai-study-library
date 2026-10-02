# Quantization-Aware Distillation (QAD) for Better 4-bit GGUF Models

Melvin Vivas · X post · 2026-08-20 · [Open on X](https://x.com/melvindvivas/status/2090245874576490839)

**Topics:** Fine-tuning & Model Customization, LLMOps, Deployment & Monitoring · **Level:** advanced

## Summary

Liquid AI released new 4-bit checkpoints trained with Quantization-Aware Distillation (QAD). In QAD, a high-precision teacher model is distilled into a quantized student model. This recovers most of the accuracy normally lost when quantizing. The new checkpoints help developers who run Q4_0 or Q4_K_M GGUF models locally.

## Key points

- Quantizing a model to 4 bits usually costs some accuracy.
- QAD distills a high-precision teacher model into a quantized student model.
- The new 4-bit checkpoints recover most of the accuracy lost to quantization.
- They are aimed at users of Q4_0 and Q4_K_M GGUF quantizations (common for local inference).

## Resources mentioned

- [ ] **[Liquid AI 4-bit QAD checkpoints](https://www.liquid.ai/blog/qad)** · tool · liquid.ai · free  
  4-bit GGUF model checkpoints from Liquid AI, trained with Quantization-Aware Distillation to recover accuracy lost to quantization.

## Try this

- [ ] If you run Q4 GGUF models, try the new QAD checkpoints instead of plain post-training quantization.
- [ ] Compare a regular Q4 GGUF quantization with a QAD 4-bit checkpoint on the same eval set.
