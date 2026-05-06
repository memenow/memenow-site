import type { RequestHandler } from './$types';

const BASE = 'https://memenow.xyz';

const ROUTES = [
	'/',
	'/products',
	'/products/yinyang',
	'/products/quant',
	'/company',
	'/privacy',
	'/terms',
	'/disclaimer'
];

export const GET: RequestHandler = () => {
	const today = new Date().toISOString().slice(0, 10);
	const urls = ROUTES.map(
		(path) => `	<url>\n		<loc>${BASE}${path}</loc>\n		<lastmod>${today}</lastmod>\n	</url>`
	).join('\n');
	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
