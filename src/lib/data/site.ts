import { LOCALE_META, type Locale } from '$lib/i18n/locale-registry';

/** Canonical production origin. Used to build absolute URLs for canonical,
 * hreflang, and og: tags (crawlers require absolute og:image). */
export const SITE_ORIGIN = 'https://memenow.xyz';

/** Origin of the YinYang Agent web app (a separate deployment). */
export const YINYANG_APP_ORIGIN = 'https://yinyang.memenow.xyz';

/** Official contact routing for memenow LLC. */
export const SITE_EMAILS = {
	hello: 'hello@memenow.xyz',
	support: 'support@memenow.xyz',
	privacy: 'privacy@memenow.xyz'
} as const;

/**
 * Deep link into the YinYang Agent app in the visitor's language, so the
 * product opens in the same locale the visitor was reading here. The app
 * serves English at its root and every other locale under `/<locale>`.
 *
 * Optional `subpath` (e.g. `'/analyze'`, `'/pricing'`, `'/method'`, `'/library'`)
 * is normalized and appended cleanly after the locale prefix.
 */
export function yinyangAppHref(locale: Locale, subpath = ''): string {
	const localeBase = LOCALE_META[locale].yinyangPath;
	const cleanSubpath = subpath.trim().replace(/^\/+|\/+$/g, '');
	if (!cleanSubpath) {
		return localeBase === '/' ? YINYANG_APP_ORIGIN : `${YINYANG_APP_ORIGIN}${localeBase}`;
	}
	return localeBase === '/'
		? `${YINYANG_APP_ORIGIN}/${cleanSubpath}`
		: `${YINYANG_APP_ORIGIN}${localeBase}/${cleanSubpath}`;
}
