# Bits&Bytes Noida: technical specification

Setup, architecture, and development docs for the Noida fork website.

---

## What this repo powers

- Next.js App Router website for community pages, events, projects, join, and contact
- AI assistant API with SSE streaming responses and tool-calling flows
- Semantic search (RAG) over selected site content using embeddings
- Supabase-backed forms and chat session persistence
- Production-oriented frontend with 3D/interactive UI components

## Tech stack

- Framework: Next.js 15, React 19, TypeScript 5
- Styling/UI: Tailwind CSS 4, Radix UI, custom animated components
- Data: Supabase (PostgreSQL)
- AI: OpenAI SDK against Hack Club proxy endpoints
- Deployment: Vercel
- Package manager: pnpm

## Getting started

### Prerequisites

- Node.js 20+
- pnpm 9+
- A Supabase project
- A Hack Club proxy API key for AI endpoints

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
HACKCLUB_PROXY_API_KEY=...
GOOGLE_SITE_VERIFICATION=...
```

Optional:

```env
NVIDIA_KEY=        # only needed for Stable Diffusion image generation
```

### Run locally

```bash
pnpm dev
```

App runs at `http://localhost:3000`.

## Available scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Run development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project structure

```
.
├── app/                    # Next.js App Router pages and API routes
│   ├── api/
│   │   ├── assistant/      # AI assistant, feedback, image, voice
│   │   ├── join/           # Join form ingestion
│   │   └── discord/        # Discord-related endpoints
│   └── about/ contact/ events/ impact/ join/ projects/ faq/ ...
├── components/             # Shared and UI components
├── lib/                    # RAG, Supabase, rate limit, sentiment, team logic
├── public/                 # Static assets (images, llms.txt, sitemap, etc.)
├── scripts/
│   └── embed-site.ts       # Embeds selected docs into site_embeddings table
└── types/
```

## API overview

### POST /api/assistant

Main AI assistant endpoint.

- Input: user message history, current pathname, session ID
- Output: `text/event-stream` (SSE) with token streaming and final action payload
- Rate limited to 10 requests/min/IP
- Includes intent bypass, tool-calling loop, model fallback, and optional semantic response cache

### POST /api/join

Stores join requests in Supabase `join_requests`.

Required: `name`, `email`, `message`
Optional: `school`, `experience`, `interests[]`

### POST /api/assistant/feedback

Appends per-message feedback into `chat_sessions.feedback` in Supabase.

### POST /api/assistant/image

Image generation used by assistant tools. Uses NVIDIA endpoint (`NVIDIA_KEY`) or Hack Club proxy (`HACKCLUB_PROXY_API_KEY`).

## Database (Supabase)

Tables expected:

- `join_requests`
- `chat_sessions`
- `site_embeddings` (with vector search support for RAG)
- `contacts`
- `sponsor_leads`

## Embedding site content for RAG

The script `scripts/embed-site.ts` reads `public/llms.txt` and `agents.md`, generates embeddings, and inserts chunks into `site_embeddings`.

```bash
pnpm tsx scripts/embed-site.ts
```

A Husky `pre-push` hook runs the embedding step automatically when tracked source paths change. See `.husky/pre-push` for `EMBED_PATHS`.

To add more content to the index, update `scripts/embed-site.ts` `filePaths` and the `.husky/pre-push` `EMBED_PATHS` variable.

## Deployment

Configured for Vercel via `vercel.json`.

- Install: `pnpm install`
- Build: `pnpm run build`
- Framework: Next.js

Git metadata is injected at build time via `next.config.mjs`.

## Known issues

- `next.config.mjs` has `typescript.ignoreBuildErrors: true`: type errors won't block builds but can hide production issues. Fix in progress.
- Rate limiting in `lib/rate-limit.ts` is in-memory and resets on each deployment. Not suitable for multi-instance production. Should move to Redis or an edge-compatible store.

## Contributing

1. Create a feature branch
2. Make focused changes
3. Run `pnpm lint` and `pnpm build` locally
4. Open a PR with context and screenshots for any UI work
