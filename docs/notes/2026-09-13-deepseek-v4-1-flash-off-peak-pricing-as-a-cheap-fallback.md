# DeepSeek V4.1 Flash Off-Peak Pricing as a Cheap Fallback Model

Melvin Vivas · X post · 2026-09-13 · [Open on X](https://x.com/melvindvivas/status/2098992854890942598)

**Topics:** LLMOps, Deployment & Monitoring, LLM Fundamentals · **Level:** beginner

## Summary

The creator calls DeepSeek V4.1 Flash good and very cheap, and suggests it as a fallback when other usage limits run out. The quoted post gives off-peak per-token prices, a speed of about 299 tokens/s, and the off-peak hours in Singapore time.

## Key points

- Off-peak prices: $0.003 per 1M cached input tokens, $0.15 per 1M uncached input tokens, $0.60 per 1M output tokens.
- Average speed of about 299 tokens/s.
- Cached input is about 50x cheaper than uncached, so reuse prompt prefixes.
- Off-peak hours (Singapore time): before 9AM, 12–2PM and after 6PM on weekdays, plus all day Saturday and Sunday.
- Use it as a fallback model when your main tool's limits run out.

## Resources mentioned

- [ ] **[DeepSeek V4.1 Flash](https://api-docs.deepseek.com/news/news260910/)** · tool · api-docs.deepseek.com · paid  
  A fast DeepSeek language model available through DeepSeek's official API.  
  Also in: DeepSeek 4.1 Flash speed on the official API: about 325 tokens/s (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099351690545869251) · [notes](../notes/2026-09-14-deepseek-4-1-flash-speed-on-the-official-api-about-325.md)), One-Shot Agent Management UI with DeepSeek Harness for $0.19 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099097522631557365) · [notes](../notes/2026-09-13-one-shot-agent-management-ui-with-deepseek-harness-for-0-19.md)), DeepSeek Harness: Open-Source, Browser-Based Agent for DeepSeek V4.1 (Melvin Vivas on [X](https://x.com/melvindvivas/status/2099001661515813214) · [notes](../notes/2026-09-13-deepseek-harness-open-source-browser-based-agent-for.md)), DeepSeek-V4.1-Flash Released: Smallest, Faster DeepSeek Model (Melvin Vivas on [X](https://x.com/melvindvivas/status/2097973178786275418) · [notes](../notes/2026-09-10-deepseek-v4-1-flash-released-smallest-faster-deepseek-model.md))

## Try this

- [ ] Schedule heavy DeepSeek API workloads during off-peak hours.
- [ ] Design prompts to get cache hits on input tokens.
