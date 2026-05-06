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
  `@tailwindcss/typography`).
- **Cloudflare Workers as the deploy target.** `wrangler.jsonc` points at the SvelteKit adapter
  output (`.svelte-kit/cloudflare/_worker.js`). `compatibility_flags` includes `nodejs_compat` and
  `nodejs_als`. Bindings (KV, D1, R2, etc.) must be added in `wrangler.jsonc` and reflected in
  `src/worker-configuration.d.ts` by running `pnpm run cf-typegen`.
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

- `src/routes/` — SvelteKit file-based routing. `+layout.svelte` imports `layout.css` (Tailwind entrypoint);
  `+page.svelte` is the index route.
- `src/lib/` — code shared via the `$lib` alias.
- `src/lib/assets/` — assets that should be processed by Vite (e.g., `favicon.svg`).
- `src/lib/vitest-examples/` — sample tests scaffolded by `sv create`. Remove or replace these once
  real features land.
- `src/app.html` — SvelteKit document shell. Keep `data-sveltekit-preload-data="hover"` and the
  `text-scale` meta.
- `src/app.d.ts` — global SvelteKit types; do not regenerate by hand.
- `static/` — assets served verbatim. `.assetsignore` excludes `_worker.js` / `_routes.json` from the
  Cloudflare asset bundle.

## Workflow

- Use the **GitHub CLI (`gh`)** for all GitHub interactions (issues, PRs, releases). The default
  branch is `main`. Open PRs against `memenow/memenow-site` from a personal fork.
- Verify changes with `pnpm lint && pnpm check && pnpm test` before pushing. Cloudflare-bound code
  should additionally pass `pnpm preview` smoke-testing if it touches the Worker entrypoint or
  bindings.
- Do not commit secrets. Use Wrangler secrets (`wrangler secret put ...`) and the
  `.dev.vars`/`.env*` patterns already covered by `.gitignore`.

## Ground rules

- This repository is public and licensed under Apache-2.0. Do not introduce additional license
  headers, attribution lines, or AI-generated co-author trailers in commits, PRs, README, or
  documentation.
- Do not edit `src/worker-configuration.d.ts` by hand — regenerate via `pnpm cf-typegen`.
- Do not edit `.svelte-kit/` (build output) — it is gitignored and rewritten by `svelte-kit sync`.
- All public-facing copy and code-level documentation must use standard American English.
