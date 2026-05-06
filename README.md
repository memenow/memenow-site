# memenow-site

The official website of [memenow](https://memenow.xyz), built with [SvelteKit](https://svelte.dev/)
and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) via
[`@sveltejs/adapter-cloudflare`](https://kit.svelte.dev/docs/adapter-cloudflare).

## Requirements

- Node.js (current LTS) — `engine-strict=true` is set in `.npmrc`.
- [pnpm](https://pnpm.io/) — the only supported package manager for this repo.
- (Optional, for deploys) [`wrangler`](https://developers.cloudflare.com/workers/wrangler/) authenticated
  against the target Cloudflare account.

## Getting started

```sh
pnpm install
pnpm dev
```

## Scripts

| Command           | Purpose                                                   |
| ----------------- | --------------------------------------------------------- |
| `pnpm dev`        | Start the Vite dev server with HMR.                       |
| `pnpm build`      | Produce a production build for Cloudflare Workers.        |
| `pnpm preview`    | Build, then run `wrangler dev` locally.                   |
| `pnpm check`      | Run TypeScript and Svelte diagnostics.                    |
| `pnpm lint`       | Run Prettier and ESLint in check mode.                    |
| `pnpm format`     | Auto-format the repository with Prettier.                 |
| `pnpm test`       | Run unit and component tests once with Vitest.            |
| `pnpm test:unit`  | Run Vitest in interactive watch mode.                     |
| `pnpm deploy`     | Build and deploy to Cloudflare Workers via Wrangler.      |
| `pnpm cf-typegen` | Regenerate `src/worker-configuration.d.ts` from bindings. |

## Project structure

- `src/routes/` — SvelteKit file-based routes; `layout.css` is the Tailwind v4 entrypoint.
- `src/lib/` — shared modules accessible via the `$lib` alias.
- `static/` — assets served verbatim from the Cloudflare asset bundle.
- `wrangler.jsonc` — Cloudflare Workers configuration; declare bindings here and run `pnpm cf-typegen`
  afterwards to refresh `src/worker-configuration.d.ts`.

## Stack notes

- Svelte 5 with **runes mode forced** outside `node_modules` — use `$state`, `$props`, `$derived`,
  `$effect`. Legacy reactive syntax (`$:`, `export let`) is not supported.
- Tailwind CSS v4 — configured in CSS via `@import 'tailwindcss'` and `@plugin '...'`; there is no
  `tailwind.config.{js,ts}`.
- Vitest runs two projects: `client` (browser mode via `@vitest/browser-playwright`, headless
  Chromium) and `server` (Node). Run `pnpm exec playwright install chromium` if browser tests fail
  to launch.

## License

Licensed under the [Apache License, Version 2.0](./LICENSE).
