---
name: verify
description: Run the full local verification pipeline for memenow-site (lint, type/Svelte diagnostics, unit + component tests). Use whenever the user asks to verify, validate, sanity-check, or pre-flight changes before pushing or opening a PR.
---

# Verify memenow-site

Run the project's standard pre-push checks in order. Stop at the first failure and report which step
broke. All commands assume the repo root as the working directory and use `pnpm` (do not substitute
`npm`/`yarn` — see CLAUDE.md).

## Steps

1. **Lint** — formatting + ESLint

   ```sh
   pnpm lint
   ```

   This runs `prettier --check .` then `eslint .`. If Prettier fails, suggest `pnpm format` to
   auto-fix.

2. **Type and Svelte diagnostics**

   ```sh
   pnpm check
   ```

   Runs `svelte-kit sync` then `svelte-check` against `tsconfig.json`. Resolve any
   TypeScript or Svelte errors before continuing.

3. **Unit and component tests** (one-shot)
   ```sh
   pnpm test
   ```
   Vitest runs two projects: `client` (browser-mode, headless Chromium via
   `@vitest/browser-playwright`) and `server` (Node). If the `client` project fails to launch
   Chromium, advise `pnpm exec playwright install chromium`.

## Optional follow-ups

- **Worker smoke test** when the change touches `src/routes/+server.*`, hooks, or bindings:

  ```sh
  pnpm preview
  ```

  This builds and runs `wrangler dev` locally. Hit the routes that changed.

- **Regenerate Worker types** after editing `wrangler.jsonc` bindings:
  ```sh
  pnpm cf-typegen
  ```

## Reporting

Summarize results as: ✅ / ❌ per step plus the first failing command's error excerpt. Do not paste
multi-thousand-line logs — surface the first 30–50 lines of the failing output.
