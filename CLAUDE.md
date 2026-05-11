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
  `tailwind.config.{js,ts}`. The single stylesheet `src/routes/layout.css` declares plugins via the
  v4 `@import 'tailwindcss'` and `@plugin '...'` syntax (`@tailwindcss/forms`,
  `@tailwindcss/typography`). Components in this repo are primarily `.c-*` BEM primitives consuming
  design tokens from `lib/styles/tokens.css`, not raw Tailwind utility soup.
- **Theme + route-family attributes.** `<html>` carries `data-theme` (light/dark) and
  `data-route-family` (`legal` for /privacy, /terms, /disclaimer; `threshold` everywhere else).
  Both are double-driven: `app.html` ships an inline boot script for theme, `hooks.server.ts`
  rewrites the route-family placeholder for SSR, and the root layout's `$effect` mirrors them on
  client navigations. Per-route fog and scrim styles in `lib/styles/scene.css` and `world-layer.css`
  read these attributes via `:where([data-route-family='legal'])` etc.
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
  - `layout.css` — Tailwind v4 entrypoint; imports `lib/styles/{tokens,scene,layout,components,world-layer}.css`.
  - `+layout.svelte` — boots Lenis (smooth scroll) on mount and mirrors `data-route-family` on SPA navigations.
  - `+page.svelte` — home (editorial hero + four chapters).
  - `products/`, `products/yinyang/`, `products/quant/`, `company/`, `privacy/`, `terms/`, `disclaimer/` — content routes.
  - `sitemap.xml/+server.ts` — prerendered sitemap; URL list lives in `lib/data/sitemap.ts`.
- `src/hooks.server.ts` — SSR `Handle` that replaces the `data-route-family="pending"` placeholder in
  `app.html` with `legal` or `threshold` so per-route fog is correct on the first paint.
- `src/app.html` — SvelteKit document shell. Keep:
  - `data-sveltekit-preload-data="hover"` and the `text-scale` meta.
  - `data-theme` boot script that reads `localStorage.memenow.theme` and falls back to
    `prefers-color-scheme`. Removing it reintroduces a light-flash on dark systems.
  - `data-route-family="pending"` on `<html>` — replaced by `hooks.server.ts` on SSR.
- `src/app.d.ts` — global SvelteKit types backed by Cloudflare runtime types; do not regenerate by hand.
- `src/worker-configuration.d.ts` — generated by `pnpm cf-typegen`; never edit by hand.
- `src/lib/` — code shared via the `$lib` alias.
  - `components/brand/` — `MemenowMark.svelte` (`<picture>` with avif/webp/png at @1x/@2x).
  - `components/home/` — `EditorialHero.svelte`, `Chapter.svelte` (narrative scroll primitives).
  - `components/layout/` — `AppShell.svelte`, `Footer.svelte`, `FloatingDock.svelte`, `RouteScene.svelte`.
  - `components/ui/` — `Button`, `ButtonLink`, `Card`, `Badge`, `SealMark`, `ThemeSwitch`, `ArtifactCta`.
  - `data/` — `navigation.ts` (primary nav + footer), `products.ts`, `sitemap.ts` (URL × lastmod).
  - `styles/` — `tokens.css` (palette, type, spacing, motion), `scene.css` (per-route fog), `layout.css`
    (`.l-*` utilities), `components.css` (`.c-*` primitives), `world-layer.css` (Tai Chi underlay + hero scene).
  - `utils/` — `cn.ts` (plain `clsx` wrapper, no `tailwind-merge`), `motion.ts` (Lenis lifecycle +
    `reveal` / `magnetic` Svelte actions, all reduced-motion aware), `route-family.ts` (URL → `legal | threshold`).
- `static/` — assets served verbatim. `.assetsignore` excludes `_worker.js` / `_routes.json` from the
  Cloudflare asset bundle.
  - `brand/` — multi-format / multi-density logo system + `site.webmanifest` + app icons.
  - `brand/originals/` — PNG masters consumed by `scripts/build-brand-assets.py`.
  - `images/` — hero and chapter imagery (avif/webp/png).
  - `og/` — Open Graph share images.
- `scripts/build-brand-assets.py` — derives every brand variant. Re-run after replacing a master.
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

This project is indexed by GitNexus as **memenow-site** (232 symbols, 271 relationships, 4 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/memenow-site/context` | Codebase overview, check index freshness |
| `gitnexus://repo/memenow-site/clusters` | All functional areas |
| `gitnexus://repo/memenow-site/processes` | All execution flows |
| `gitnexus://repo/memenow-site/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
<!-- prettier-ignore-end -->
