---
name: deploy-cf
description: Deploy memenow-site to Cloudflare Workers, or guide the user through preparing a deploy. Use when the user asks to deploy, ship, push to production, publish to Cloudflare, or run wrangler deploy. Side-effects on shared infrastructure — confirm before invoking.
disable-model-invocation: true
---

# Deploy memenow-site to Cloudflare Workers

`memenow-site` is a SvelteKit app deployed to Cloudflare Workers via `@sveltejs/adapter-cloudflare`.
This skill is human-invoked only; never deploy without explicit user confirmation.

## Pre-deploy checklist

Walk through these before running `pnpm deploy`:

1. **Verify the build is healthy**

   ```sh
   pnpm lint && pnpm check && pnpm test
   ```

   Or invoke the `verify` skill.

2. **Confirm `wrangler.jsonc` is up to date**
   - `compatibility_date` should be reasonably current.
   - All bindings (KV, D1, R2, Durable Objects, secrets references) are declared.
   - `assets.directory` points at `.svelte-kit/cloudflare`.
   - `main` points at `.svelte-kit/cloudflare/_worker.js`.

3. **Regenerate Worker types if bindings changed**

   ```sh
   pnpm cf-typegen
   ```

   Commit the updated `src/worker-configuration.d.ts` along with the binding change.

4. **Check authentication**

   ```sh
   wrangler whoami
   ```

   If it fails, ask the user to run `wrangler login` (interactive — they must run this themselves).

5. **Confirm secrets are populated** for any secret references in `wrangler.jsonc` (use
   `wrangler secret list` per environment). Never echo secret values.

## Local smoke test (recommended)

```sh
pnpm preview
```

This builds and runs `wrangler dev` locally so the user can hit the routes against the production
build before pushing. Watch the Wrangler output for compatibility-flag, binding, or asset errors.

## Deploy

After confirmation:

```sh
pnpm deploy
```

This runs `pnpm build` then `wrangler deploy`. Capture the deployment URL from the output and report
it back. Note that the canonical site is `memenow.xyz` (organization homepage); confirm with the
user whether the deploy is going to the production Worker or a staging environment before invoking.

## Rollback

If a deploy regresses production, advise the user to roll back via the Cloudflare dashboard
(`Workers & Pages → memenow-site → Deployments → Rollback`) or:

```sh
wrangler rollback
```

## Arguments

This skill takes no arguments by default. If the user passes `$ARGUMENTS`, treat it as an
environment hint (e.g., `staging`) and ensure the corresponding `[env.<name>]` block exists in
`wrangler.jsonc` before deploying with `wrangler deploy --env <name>`.
