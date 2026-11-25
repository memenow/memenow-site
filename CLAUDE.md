# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`memenow-site` is the official website of the **memenow** organization. The canonical repository is
[memenow/memenow-site](https://github.com/memenow/memenow-site); contributors typically work on a
personal fork (e.g., `BillDuke13/memenow-site`) and open PRs to `memenow/memenow-site`. The site is a
SvelteKit application deployed to Cloudflare Workers via `@sveltejs/adapter-cloudflare`.

## Tech stack and non-obvious constraints

- **Svelte 5 in forced runes mode.** `svelte.config.js` sets `compilerOptions.runes` to `true` for all
  files outside `node_modules`. Use `$state`, `$props`, `$derived`, `$effect` — do not use Svelte 4
  reactive syntax (`$:`, `export let`).
- **Tailwind CSS v4.** Tailwind is loaded via `@tailwindcss/vite` and configured in CSS, not in
  `tailwind.config.{js,ts}`. The single stylesheet `src/routes/layout.css` pulls in the framework
  with `@import 'tailwindcss'`, then imports the local design layers (`tokens`, `scene`, `layout`,
  `components`, `editorial`, `world-layer`) and declares the `dark` custom variant. No Tailwind plugins are
  currently registered. Components in this repo are primarily `.c-*` BEM primitives consuming design
  tokens from `lib/styles/tokens.css`, not raw Tailwind utility soup.
- **Seven-locale URLs (`/zh`, `/zh-TW`, `/en`, `/ja`, `/ko`, `/es`, `/fr`).** The locale list and
  per-locale metadata (hreflang, `og:locale`, `<html lang>`, Yinyang app path) live in
  `src/lib/i18n/locale-registry.ts` — never hard-code a locale list. Every content URL carries its locale under the
  `[locale=locale]` route segment (matcher: `src/params/locale.ts`). All copy lives in the
  per-locale dictionaries in `src/lib/i18n/dictionaries/` (zh owns `MessageSchema`). The aggregate
  `messages.server.ts` is server-only: `+layout.server.ts` sends just the active dictionary, and
  components read it through `useMessages()` / `useLocale()` (component-tree context getters
  provided by the root layout — never
  module-level state, which would leak across SSR requests). `hooks.server.ts` owns the
  redirect policy: retired URLs 301, legacy unprefixed page URLs 302 to the negotiated
  locale (cookie `memenow.locale`, else the first Accept-Language tag). `src/lib/i18n/locale-path.ts`
  holds the pure URL/redirect functions; keep the policy there and unit-tested, not inline
  in the hook.
- **Theme + route-family attributes.** `<html>` carries `data-theme` (light/dark) and
  `data-route-family` (`legal` for /privacy, /terms; `threshold` everywhere else).
  Both are double-driven: `app.html` ships an inline boot script for theme, `hooks.server.ts`
  rewrites the route-family placeholder and `lang` for SSR, and the root layout's `$effect`
  mirrors them on client navigations. Per-route fog and scrim styles in `lib/styles/scene.css`
  and `world-layer.css` read these attributes via `:where([data-route-family='legal'])` etc.
- **Motion respects `prefers-reduced-motion: reduce` everywhere.** `lib/utils/motion.ts` (`startLenis`,
  `reveal` action, `magnetic` action) returns no-op early when reduced motion is requested. The
  matching CSS in `components.css` strips transforms/clip-paths under the same media query. New
  motion code must follow this pattern.
- **Cloudflare Workers as the deploy target.** `wrangler.jsonc` points at the SvelteKit adapter
  output (`.svelte-kit/cloudflare/_worker.js`). `compatibility_date` is `2026-05-06`,
  `compatibility_flags` includes `nodejs_compat` and `nodejs_als`, `observability` and
  `upload_source_maps` are both on. Bindings (KV, D1, R2, etc.) must be added in `wrangler.jsonc`
  and reflected in `src/worker-configuration.d.ts` by running `pnpm cf-typegen`.
- **TypeScript is strict and checks `.js` too** (`checkJs: true`, `strict: true`). The platform
  surface is typed in `src/app.d.ts` via the SvelteKit `App.Platform` interface backed by Cloudflare
  `Env`/`CfProperties`/`ExecutionContext` from `worker-configuration.d.ts`.
- **pnpm only.** `.npmrc` enforces `engine-strict=true` and `pnpm-workspace.yaml` whitelists the
  binary builds for `@tailwindcss/oxide` and `esbuild`. Do not introduce `npm` or `yarn` lockfiles.

## Commands

| Goal                      | Command           | Notes                                                          |
| ------------------------- | ----------------- | -------------------------------------------------------------- |
| Dev server                | `pnpm dev`        | Vite dev server with HMR.                                      |
| Type / Svelte diagnostics | `pnpm check`      | Runs `svelte-kit sync` then `svelte-check`.                    |
| Lint                      | `pnpm lint`       | `prettier --check` then `eslint`.                              |
| Format                    | `pnpm format`     | `prettier --write` over the repo.                              |
| Unit & component tests    | `pnpm test`       | One-shot Vitest. `pnpm test:unit` is interactive.              |
| Production build          | `pnpm build`      | Outputs to `.svelte-kit/cloudflare/`.                          |
| Local Worker preview      | `pnpm preview`    | Builds, then runs `wrangler dev` against the Worker.           |
| Deploy                    | `pnpm deploy`     | Builds, then `wrangler deploy`. Requires `wrangler login`.     |
| Regenerate Worker types   | `pnpm cf-typegen` | Refreshes `src/worker-configuration.d.ts` after binding edits. |

Always prefer `pnpm test` (one-shot) over `pnpm test:unit` (watch mode) in non-interactive contexts.
Vitest runs two projects defined in `vite.config.ts`: a `client` project that uses the
`@vitest/browser-playwright` provider with headless Chromium for `*.svelte.{test,spec}.{js,ts}` files,
and a `server` project that runs the remaining specs in Node. Browser tests will fail if Playwright's
Chromium is not installed (`pnpm exec playwright install chromium`).

## Code style

- Use **tabs**, single quotes, no trailing commas, `printWidth: 100` — enforced by Prettier
  (`.prettierrc`). Run `pnpm format` before committing.
- Prettier orchestrates `prettier-plugin-svelte` and `prettier-plugin-tailwindcss`; class lists are
  auto-sorted, so do not hand-order Tailwind classes.
- ESLint uses the flat config (`eslint.config.js`) and pulls `js`, `typescript-eslint`, and
  `eslint-plugin-svelte` recommended rules plus `eslint-config-prettier`. The Svelte language server
  uses the configured TS parser via `parserOptions.projectService`.
- `no-undef` is intentionally disabled for TypeScript files — rely on `tsc` / `svelte-check`.

## Project layout

- `src/routes/` — SvelteKit file-based routing.
  - `layout.css` — Tailwind v4 entrypoint; imports `lib/styles/{tokens,scene,layout,chrome,components,editorial,world-layer}.css`.
  - `+layout.server.ts` — exposes `locale` and the active dictionary; it must read `params.locale` (that read is the
    load-invalidation contract that re-runs the layout on cross-language SPA navigations).
  - `+layout.svelte` — boots Lenis (smooth scroll) on mount, drives the reading-progress hairline and the world layer's `--world-scroll` parallax, mirrors `lang`/`data-route-family` on SPA navigations, and emits hreflang/`og:locale` head tags.
  - `[locale=locale]/` — every content page (home, products, products/yinyang, company, privacy, terms).
  - `sitemap.xml/+server.ts` — prerendered sitemap (all locales, hreflang alternates); URL list lives in `lib/data/sitemap.ts`.
  - `+error.svelte` — localized 404 / 500 fallback (`noindex`); reuses `EditorialHero` so errors stay in the continuous scene.
- `src/params/locale.ts` — param matcher accepting all 7 locales declared in `src/lib/i18n/locale-registry.ts` (`zh`, `zh-TW`, `en`, `ja`, `ko`, `es`, `fr`).
- `src/hooks.server.ts` — SSR `Handle`: locale redirect policy (see above), `memenow.locale`
  cookie persistence (skipped for data requests so hover prefetch can't rewrite the
  preference), plus the `data-route-family="pending"` and `lang` placeholder rewrites.
- `src/app.html` — SvelteKit document shell. Keep:
  - `data-sveltekit-preload-data="hover"` and the `text-scale` meta.
  - `data-theme` / `data-motion` boot scripts that read `localStorage` and fall back to
    `prefers-color-scheme` / `prefers-reduced-motion`. Removing them reintroduces a
    light-flash (and a motion flash) on first paint.
  - `data-route-family="pending"` on `<html>` — replaced by `hooks.server.ts` on SSR.
  - Static `lang="en"` is a placeholder only — `hooks.server.ts` rewrites it per request,
    and there is deliberately no locale boot script (the URL is the locale's source of truth).
- `src/app.d.ts` — global SvelteKit types backed by Cloudflare runtime types; do not regenerate by hand.
- `src/worker-configuration.d.ts` — generated by `pnpm cf-typegen`; never edit by hand.
- `src/lib/` — code shared via the `$lib` alias.
  - `components/brand/` — `MemenowMark.svelte` (`<picture>` with avif/webp/png at @1x/@2x).
  - `components/editorial/` — long-form scene & data primitives (`.c-*` BEM, reduced-motion-aware
    `reveal`): `Timeline`, `ComparisonTable`, `StatCard`, `TierGrid`.
  - `components/home/` — `EditorialHero.svelte`, `Chapter.svelte` (narrative scroll primitives).
  - `components/layout/` — `AppShell.svelte`, `Masthead.svelte`, `WorldLayer.svelte`, `WorldCanvas.svelte`, `WorldScene.svelte` (persistent continuous-world underlay), `Footer.svelte` (including Anthropic & Cloudflare credit sponsors strip and horizontal 7-locale bar), `FloatingDock.svelte`.
  - `components/ui/` — `ThemeSwitch`, `MotionSwitch`, `LocaleSwitch`, `ArtifactCta` (`variant: 'outline' | 'filled'`), `ScrollCue`, `TrustedHtml`.
  - `data/` — `navigation.ts` (primary nav + footer), `sitemap.ts` (URL × lastmod), `site.ts` (canonical origin, official emails, `yinyangAppHref`), `yinyang.ts` (5-tier catalog facts + platform readiness + `buildTierItems`).
  - `i18n/` — `locale-registry.ts` (locale list + metadata), `dictionaries/` (one typed file per
    locale; zh owns `MessageSchema`, guarded by `dictionaries.test.ts` warm consumer-register & terminology rules), `messages.server.ts` (server-only aggregate), `locale.svelte.ts`
    (`provideI18n`/`useLocale`/`useMessages` context), `locale-path.ts` (prefix stripping, negotiation,
    redirect decisions — pure and unit-tested).
  - `styles/` — `tokens.css` (Indigo Nocturne palette, type, spacing, motion), `scene.css` (per-route fog), `layout.css`
    (`.l-*` utilities), `chrome.css` (masthead, floating dock, CTAs, switches, footer, progress bar `.c-*` primitives), `components.css` (narrative hero, chapter, stack grid `.c-*` primitives), `editorial.css` (showcase, legal summary, stat, timeline, comparison, tier, platform `.c-*` primitives), `world-layer.css` (persistent 3-plane underlay + per-route fog carrier).
  - `utils/` — `cn.ts` (plain `clsx` wrapper, no `tailwind-merge`), `motion.ts` (Lenis lifecycle +
    `reveal` / `magnetic` Svelte actions, all reduced-motion aware), `route-family.ts` (URL → `legal | threshold`), `redirects.ts`, `webgl.ts`.
  - `types.ts` — shared `SceneImage` type for hero / chapter imagery.
- `static/` — assets served verbatim. `.assetsignore` excludes `_worker.js` / `_routes.json` from the
  Cloudflare asset bundle.
  - `brand/` — multi-format / multi-density logo system + `site.webmanifest` + app icons.
  - `brand/originals/` — PNG masters consumed by `scripts/build-brand-assets.py`.
  - `world/` — three-plane ink-wash layers (`world-base`, `world-mid`, `world-near` in avif/webp) plus master in `world/originals/`.
  - `og/` — Open Graph share images (`og-home.jpeg`, `og-yinyang.jpeg`, `og-company.jpeg`).
- `scripts/build-brand-assets.py` — derives every brand variant. Re-run after replacing a master.
- `DESIGN.md` — company visual contract (`mmn-scroll-v1`): native chapter cascade,
  paper-and-ink metrics, and adapter notes for this site and other memenow fronts.
  Product motifs (Tai Chi world, five-element color, diamond mark) stay assets;
  do not promote them into language primitives.
- `docs/` — HTML documentation for humans. The Markdown files at the repo root (this file,
  `AGENTS.md`, `README.md`) are for tooling and contributors; deeper architectural / design notes
  belong under `docs/` in HTML.

## Workflow

- Use the **GitHub CLI (`gh`)** for all GitHub interactions (issues, PRs, releases). The default
  branch is `main`. Open PRs against `memenow/memenow-site` from a personal fork.
- Verify changes with `pnpm lint && pnpm check && pnpm test` before pushing (or invoke the
  `/verify` skill). Cloudflare-bound code should additionally pass `pnpm preview` smoke-testing if
  it touches the Worker entrypoint or bindings.
- Update the matching `lastmod` entry in `src/lib/data/sitemap.ts` when you publish meaningful
  content changes — the value is hand-bumped, not derived from build time.
- Re-run `python3 scripts/build-brand-assets.py` after replacing any source PNG in
  `static/brand/originals/`; commit the regenerated derivatives alongside the master.
- Do not commit secrets. Use Wrangler secrets (`wrangler secret put ...`) and the
  `.dev.vars`/`.env*` patterns already covered by `.gitignore`.

## Ground rules

- This repository is public and licensed under Apache-2.0. Do not introduce additional license
  headers, attribution lines, or AI-generated co-author trailers in commits, PRs, README, or
  documentation.
- Do not edit `src/worker-configuration.d.ts` by hand — regenerate via `pnpm cf-typegen`.
- Do not edit `.svelte-kit/` (build output) — it is gitignored and rewritten by `svelte-kit sync`.
- Do not hand-edit the `<!-- gitnexus:start --> ... <!-- gitnexus:end -->` block in this file or in
  `AGENTS.md`. It is regenerated by `npx gitnexus analyze`. Stat updates (symbol/edge counts) will
  reappear unless the index is refreshed.
- Documentation conventions:
  - Files at the repo root (`README.md`, `CLAUDE.md`, `AGENTS.md`) and skill files under `.claude/`
    are Markdown — they are read by tooling and contributors.
  - Human-readable architectural / product / operations notes go under `docs/` and are authored as
    HTML so they can be opened directly in a browser.
- All public-facing copy and code-level documentation must use standard American English.

<!-- prettier-ignore-start -->
<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **memenow-site** (4727 symbols, 6057 relationships, 8 execution flows).

> Index stale? Run `node .gitnexus/run.cjs analyze --index-only` from the project root — it auto-selects an available runner. No `.gitnexus/run.cjs` yet? Bootstrap with `npx`, `bunx`, or `pnpm dlx` — e.g. `bunx gitnexus@latest analyze` (npm 11 npx crash; #1939).

## Always Do

- **MUST run impact before editing.** Use `impact({target: "symbolName", direction: "upstream"})` or `node .gitnexus/run.cjs impact "symbolName" --direction upstream --repo .`; report callers, processes, and risk. Never substitute grep for graph analysis.
- **MUST analyze graph changes before committing.** Use `detect_changes({scope: "all"})` (MCP) or `node .gitnexus/run.cjs detect-changes --scope all --repo .` (CLI fallback). `partial: true` or `truncated: true` is not a clean check — a zero means unseen, not unaffected; re-run it. For regression review: `detect_changes({scope: "compare", base_ref: "main"})` or `node .gitnexus/run.cjs detect-changes --scope compare --base-ref "main" --repo .`.
- MUST warn on HIGH/CRITICAL `risk` pre-edit; never use `riskSharedAxes` to waive a HIGH/CRITICAL `risk` warning. Compare File/symbol: MCP File omits axes; Graph-RAG expands File.
- **MUST treat `risk: UNKNOWN` as unresolved, not as low.** An empty caller set is not evidence the symbol is unused — it can also mean the callers are not resolvable by the index (plain-object property access, dynamic dispatch, cross-language calls). `impact` pairs `UNKNOWN` with a `riskNote` saying so. Confirm with a text search before treating the symbol as safe to change or delete; do not proceed on the strength of a zero.
- **MUST use `query({search_query: "concept"})` for concepts/flows, `context({name: "symbolName"})` for a named symbol, or `impact` for blast radius, on read-only callers, dependencies, imports, or execution flow.** Graph first; text search only for empty/`UNKNOWN`/literals.
- For security review, `explain({target: "fileOrSymbol"})` lists taint findings (source→sink flows; needs `analyze --pdg`).

## Never Do

- NEVER edit a function, class, or method before MCP/CLI impact analysis.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis, and never read `UNKNOWN` as an all-clear — it means the walk could not answer, which is the one verdict that requires confirming by other means.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit before MCP/CLI graph change analysis.

## Resources

| Resource | Use for |
| --- | --- |
| `gitnexus://repo/memenow-site/context` | Codebase overview, check index freshness |
| `gitnexus://repo/memenow-site/clusters` | All functional areas |
| `gitnexus://repo/memenow-site/processes` | All execution flows |
| `gitnexus://repo/memenow-site/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
| --- | --- |
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
<!-- prettier-ignore-end -->
