import type { RequestHandler } from './$types';
import { SITEMAP_ROUTES } from '$lib/data/sitemap';

const BASE = 'https://memenow.xyz';

export const GET: RequestHandler = () => {
	const urls = SITEMAP_ROUTES.map(
		([path, lastmod]) => `	<url>\n		<loc>${BASE}${path}</loc>\n		<lastmod>${lastmod}</lastmod>\n	</url>`
	).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};

export const prerender = true;
