// Single source of truth for the public sitemap.
//
// `lastmod` is frozen per route (a hand-bumped ISO date) — search crawlers
// discount the "every URL changed today" pattern, so updating these stamps is a
// deliberate editorial action, not derived from build time.
//
// Lives under `$lib/data` (rather than next to `+server.ts`) because SvelteKit
// only allows a fixed set of named exports from `+server.ts`. Sharing the array
// with the route handler's tests keeps the URL list authoritative in one place.
export const SITEMAP_ROUTES: ReadonlyArray<readonly [path: string, lastmod: string]> = [
	['/', '2026-05-06'],
	['/products', '2026-05-06'],
	['/products/yinyang', '2026-05-06'],
	['/products/quant', '2026-05-06'],
	['/company', '2026-05-06'],
	['/privacy', '2026-05-06'],
	['/terms', '2026-05-06'],
	['/disclaimer', '2026-05-06']
];
