/**
 * Permanent redirects for once-public routes that have been retired. Both
 * `/products/quant` and `/disclaimer` were live sitemap and navigation targets
 * before their route files were removed, so `hooks.server.ts` answers them with
 * a 301 to the nearest surviving page rather than stranding shared links on a
 * bare 404.
 */

const RETIRED_REDIRECTS: Readonly<Record<string, string>> = {
	'/products/quant': '/products',
	'/disclaimer': '/terms'
};

/**
 * Resolve a retired pathname to its permanent replacement, or `null` when the
 * path is still live. A trailing slash is ignored so `/disclaimer/` redirects
 * the same as `/disclaimer`.
 */
export function resolveRetiredRedirect(pathname: string): string | null {
	const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
	return RETIRED_REDIRECTS[normalized] ?? null;
}
