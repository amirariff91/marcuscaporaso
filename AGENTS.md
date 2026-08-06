<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# What this repo is

Marcus Caporaso's **GrowthOS** consulting monorepo: one Next.js app serving
marcuscaporaso.com plus client-deliverable pages on subpaths, alongside untracked
per-client working files in `docs/` (gitignored — memos, audits, deliverables).

## The 5 workstreams

| Workstream | App code | Working files |
|---|---|---|
| GrowthOS homepage (marcuscaporaso.com) | `src/app/page.tsx` + `src/components/` | `docs/growthos/` |
| OSW / OSWA (Obesity Surgery WA rebuild) | `src/app/osw/**` + `content-briefs/` | `docs/oswa/` (incl. product brief) |
| Biosymm (physio/occupational health) | `src/app/biosymm/**` | `docs/biosymm/` |
| ErgoEquip (WooCommerce store, Ads/GA4/GTM) | **none** — managed externally via MCP/APIs | `docs/ergoequip/` |
| ErgoWorks Consulting (ergonomics consultancy — **not** ErgoEquip) | `src/app/ergoworks/**` (gated plan pack, campaign plan, LP mockup) + `src/proxy.ts` gate | `docs/ergoworks-consulting/` |

Before working on a client, read `docs/<client>/CONTEXT.md` — it has current status,
account IDs, and the folder map. Index: `docs/README.md`.

## Repo map

- `src/app/` — routes (homepage, `/osw`, `/biosymm`, `/api/subscribe`)
- `src/components/` — homepage sections; `src/components/osw/ContentPageTemplate.tsx` — OSW page template
- `src/lib/site.ts` — site config
- `content-briefs/` — 23 OSW content briefs, **read at runtime** via `process.cwd()`
  (`src/app/osw/content-briefs/[slug]/page.tsx`) — do not move or rename this folder
- `data/subscribers.json` — runtime email-capture store — do not delete
- `public/` — logos, portraits, svgs
- `docs/` — untracked client working files (see table above); secrets only in `docs/secrets/`
- `.impeccable.md` — homepage design context (brand, aesthetic) — read before visual changes

## OSW content pipeline

`content-briefs/<slug>.md` (brief) → rendered live at `/osw/content-briefs/[slug]` →
built page authored at `src/app/osw/content/<slug>/page.tsx` using `ContentPageTemplate`.
Brief slugs match content-page routes.

## Build / deploy

- **Bun** is the package manager: `bun install`, `bun run dev`, `bun run build`.
  `bun.lock` is the only lockfile — keep it in sync (Docker builds with `--frozen-lockfile`).
- Docker multi-stage (bun builder → node runner, Next `output: "standalone"`), deployed
  via Coolify at `marcuscaporaso.cepathosting.com`. Env vars documented in `.env.example`.
- `.mcp.json` (gitignored) wires analytics-mcp (GA4, SA key in `docs/secrets/`) and
  pipeboard-google-ads MCP servers.

## Rules

- **Never commit anything under `docs/`** — it holds client data, chat records, and
  credentials, and is gitignored for a reason (`git mv` into it will silently re-track files).
- Secrets (keys, tokens, cookies) live only in `docs/secrets/`.
- ErgoEquip work never touches `src/` — it happens in the client's WordPress/GTM/Ads
  accounts via MCP tools; its context lives entirely in `docs/ergoequip/`.
