import type { Handle } from '@sveltejs/kit';
import { resolveRouteFamily } from '$lib/utils/route-family';

// app.html ships `data-route-family="pending"` as an explicit placeholder so a
// missed substitution is observable (no scene fog) instead of silently locked
// to one family. The client-side `$effect` in `+layout.svelte` is the SPA
// navigation fallback — hooks only run on full document loads.
const ROUTE_FAMILY_PLACEHOLDER = 'data-route-family="pending"';

export const handle: Handle = ({ event, resolve }) => {
	const family = resolveRouteFamily(event.url.pathname);
	const replacement = `data-route-family="${family}"`;
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace(ROUTE_FAMILY_PLACEHOLDER, replacement)
	});
};
