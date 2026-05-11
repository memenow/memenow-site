/**
 * Map a URL pathname to the narrative family that drives `data-route-family`
 * on `<html>`. Editorial routes ('threshold') get the celestial fog; the
 * privacy / terms / disclaimer trio ('legal') get a quieter, near-flat veil.
 *
 * Used by `hooks.server.ts` for SSR and by the root layout's `$effect` for
 * SPA navigations — the two paths must produce identical results.
 */

export type RouteFamily = 'threshold' | 'legal';

const LEGAL_PREFIXES = ['/privacy', '/terms', '/disclaimer'];

export function resolveRouteFamily(pathname: string): RouteFamily {
	const isLegal = LEGAL_PREFIXES.some(
		// Equality + segment boundary; bare `startsWith` would mis-classify
		// `/privacy-mode` etc. (covered by route-family.test.ts).
		(prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
	);
	return isLegal ? 'legal' : 'threshold';
}
