import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createI18nContext, SUPPORTED_LOCALES } from '$lib/i18n';
import { zh } from '$lib/i18n/dictionaries/zh';
import Footer from './Footer.svelte';

vi.mock('$app/state', () => ({
	page: {
		url: new URL('https://memenow.xyz/zh/company')
	}
}));

describe('Footer', () => {
	it('renders studio tagline, direct email, Anthropic and Cloudflare credit sponsors, and all 7 locales', async () => {
		const screen = await render(Footer, {
			context: createI18nContext({ locale: () => 'zh', messages: () => zh })
		});

		await expect.element(screen.getByText(zh.common.footerTagline)).toBeInTheDocument();
		await expect.element(screen.getByText(zh.common.sponsorsLabel)).toBeInTheDocument();
		await expect.element(screen.getByText(zh.common.studioRegion)).toBeInTheDocument();
		await expect.element(screen.getByText(/memenow LLC/)).toBeInTheDocument();

		const emailLink = screen.getByRole('link', { name: 'hello@memenow.xyz' });
		await expect.element(emailLink).toHaveAttribute('href', 'mailto:hello@memenow.xyz');

		const cols = [...(screen.container as HTMLElement).querySelectorAll('.c-footer__col')];
		const colMap = new Map(
			cols
				.filter((col) => col.querySelector('.c-footer__title'))
				.map((col) => [
					col.querySelector('.c-footer__title')?.textContent?.trim(),
					[...col.querySelectorAll('a')].map((a) => a.textContent?.trim())
				])
		);
		expect(colMap.get(zh.common.brand)).toEqual([
			zh.common.home,
			zh.common.products,
			'YinYang Agent',
			zh.common.company
		]);
		expect(colMap.get(zh.common.contact)).toEqual([
			'hello@memenow.xyz',
			'support@memenow.xyz',
			'privacy@memenow.xyz',
			'GitHub'
		]);
		expect(colMap.get(zh.common.legal)).toEqual([zh.common.privacy, zh.common.terms]);

		const anthropic = screen.getByRole('link', { name: 'Anthropic' });
		await expect.element(anthropic).toHaveAttribute('href', 'https://www.anthropic.com');
		await expect.element(anthropic).toHaveAttribute('target', '_blank');
		await expect.element(anthropic).toHaveAttribute('rel', 'noopener noreferrer');

		const cloudflare = screen.getByRole('link', { name: 'Cloudflare' });
		await expect.element(cloudflare).toHaveAttribute('href', 'https://www.cloudflare.com');
		await expect.element(cloudflare).toHaveAttribute('target', '_blank');
		await expect.element(cloudflare).toHaveAttribute('rel', 'noopener noreferrer');

		const sponsorIcons = [
			...(screen.container as HTMLElement).querySelectorAll('.c-footer__sponsor-icon path')
		];
		expect(sponsorIcons).toHaveLength(2);

		const langLinks = [...(screen.container as HTMLElement).querySelectorAll('a[hreflang]')];
		expect(langLinks).toHaveLength(SUPPORTED_LOCALES.length);
		expect(langLinks.map((a) => a.getAttribute('href'))).toEqual(
			SUPPORTED_LOCALES.map((loc) => `/${loc}/company`)
		);
		const currentLangs = langLinks.filter((a) => a.getAttribute('aria-current') === 'true');
		expect(currentLangs).toHaveLength(1);
		expect(currentLangs[0].getAttribute('href')).toBe('/zh/company');
	});
});
