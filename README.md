# marcuscaporaso.com

Marcus Caporaso's GrowthOS consulting site plus client-deliverable pages (OSW at `/osw`,
Biosymm at `/biosymm`), built with Next.js 16 + React 19 + Tailwind v4.

**LLMs / agents: start at [AGENTS.md](AGENTS.md)** — repo map, workstreams, and rules.

## Develop

```bash
bun install
bun run dev     # http://localhost:3000
```

## Deploy

Docker multi-stage build (`Dockerfile`, Next standalone output), deployed via Coolify at
`marcuscaporaso.cepathosting.com`. Env vars are documented in `.env.example`.
