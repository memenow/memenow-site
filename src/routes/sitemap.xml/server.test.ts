import { describe, expect, it } from 'vitest';
import { GET } from './+server';
import { SITEMAP_ROUTES as ROUTES } from '$lib/data/sitemap';

describe('GET /sitemap.xml', () => {
	it('returns XML with the correct content-type', async () => {
		const response = await invoke();
		expect(response.headers.get('content-type')).toBe('application/xml; charset=utf-8');
	});

	it('caches for one hour', async () => {
		const response = await invoke();
		expect(response.headers.get('cache-control')).toBe('public, max-age=3600');
	});

	it('lists every public route exactly once', async () => {
		const response = await invoke();
		const body = await response.text();
		for (const [path] of ROUTES) {
			const occurrences = body.split(`<loc>https://memenow.xyz${path}</loc>`).length - 1;
			expect(occurrences, `expected exactly one entry for ${path}`).toBe(1);
		}
	});

	it('emits ISO date stamps for lastmod', async () => {
		const response = await invoke();
		const body = await response.text();
		const lastmods = [...body.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
		expect(lastmods.length).toBe(ROUTES.length);
		for (const value of lastmods) {
			expect(value).toMatch(/^\d{4}-\d{2}-\d{2}$/);
		}
	});

	it('pairs each path with its frozen lastmod from ROUTES', async () => {
		const response = await invoke();
		const body = await response.text();
		for (const [path, lastmod] of ROUTES) {
			expect(body, `expected ${path} to be paired with lastmod=${lastmod}`).toContain(
				`<loc>https://memenow.xyz${path}</loc>\n\t\t<lastmod>${lastmod}</lastmod>`
			);
		}
	});

	it('produces well-formed urlset XML', async () => {
		const response = await invoke();
		const body = await response.text();
		expect(body.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
		expect(body).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
		expect(body.trim().endsWith('</urlset>')).toBe(true);
	});
});

function invoke(): Response | Promise<Response> {
	// SvelteKit's RequestHandler signature is wider than what this handler uses;
	// the sitemap GET ignores its argument so an empty object is sufficient.
	const result = (GET as unknown as () => Response | Promise<Response>)();
	return result;
}
