export type RouteFamily = 'threshold' | 'legal';

const LEGAL_PREFIXES = ['/privacy', '/terms', '/disclaimer'];

export function resolveRouteFamily(pathname: string): RouteFamily {
	const isLegal = LEGAL_PREFIXES.some(
		(prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
	);
	return isLegal ? 'legal' : 'threshold';
}
