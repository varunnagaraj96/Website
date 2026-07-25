---
name: crawl4ai
description: Use when a task needs more than a single-page fetch — deep multi-page crawls, JS-rendered/dynamic sites, structured data extraction (CSS/XPath or LLM-driven schemas), or building a scraping/RAG data pipeline. Backed by unclecode/crawl4ai, a Python library and CLI that turns websites into clean, LLM-ready Markdown. Not a Claude Code skill upstream (no SKILL.md in that repo) — this is a custom wrapper. For a single quick page lookup, prefer WebFetch instead; reach for crawl4ai when the site needs a real browser, multiple pages, or structured output.
allowed-tools: Bash, Read, Write
---

# crawl4ai

[Crawl4AI](https://github.com/unclecode/crawl4ai) (Apache 2.0) is a Python library/CLI that
crawls and scrapes the web into clean, structured Markdown or JSON, purpose-built for
LLM/RAG pipelines and agents. It runs a real browser (Playwright under the hood), so it
handles JS-rendered pages, infinite scroll, and dynamic content that a plain HTTP fetch can't.

## When to reach for this vs. WebFetch

- **WebFetch**: one static page, quick lookup, no JS rendering needed.
- **crawl4ai**: multiple pages (deep crawl), JS-heavy/dynamic sites, need structured
  extraction (CSS/XPath schema or LLM-driven), need to preserve a browser session/cookies
  across requests, or building a repeatable scraping pipeline as part of the project.

## Install

```bash
pip install -U crawl4ai
crawl4ai-setup      # post-install: downloads/configures Playwright browsers
crawl4ai-doctor      # verify the install
```

If browser setup fails, install Playwright's Chromium directly:
```bash
python -m playwright install --with-deps chromium
```

## CLI usage (`crwl`)

```bash
# Basic crawl, markdown output
crwl https://example.com -o markdown

# Deep crawl (breadth-first), cap at 10 pages
crwl https://docs.example.com --deep-crawl bfs --max-pages 10

# LLM-driven extraction with a specific question
crwl https://example.com/products -q "Extract all product prices"
```

## Python API

```python
import asyncio
from crawl4ai import AsyncWebCrawler

async def main():
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url="https://example.com")
        print(result.markdown)

asyncio.run(main())
```

For structured extraction, define a CSS/XPath schema or an LLM extraction strategy and pass
it via `CrawlerRunConfig(extraction_strategy=...)` — see the project's docs
(`https://docs.crawl4ai.com`) for schema syntax and available strategies (CSS-based,
XPath-based, LLM-driven, cosine-similarity chunking, BM25 filtering).

## Key capabilities worth knowing about

- **Markdown generation**: clean/"fit" Markdown (noise-filtered via BM25), numbered citation
  links for references.
- **Structured extraction**: CSS/XPath schema-based (fast, no LLM needed) or LLM-driven
  (works with any LLM) for JSON output from repetitive page patterns.
- **Browser control**: persistent profiles with saved auth/cookies, session reuse across a
  multi-step crawl, proxy support, stealth mode, custom headers/user-agents.
- **Deep crawling**: BFS/other strategies with a page cap, crash recovery via `resume_state`.
- **Raw/local input**: can process raw HTML (`raw:`) or local files (`file://`) directly.

## Docker deployment (optional)

Crawl4AI ships a Dockerized FastAPI server for running crawls as a service. As of v0.9.0 it's
secure-by-default: auth is on by default and the server binds to loopback unless given an
explicit token — don't disable that when exposing it beyond localhost. The project has a
documented history of Docker API security fixes (SSRF, RCE, auth bypass in v0.8.7), so always
run the latest version rather than pinning an old tag if you deploy the API server.

## Attribution

Apache 2.0 requires attribution when *using* Crawl4AI in a project (not just referencing it
here). If a project actually ships something built on it, add a line like:
`This project uses Crawl4AI (https://github.com/unclecode/crawl4ai) for web data extraction.`
