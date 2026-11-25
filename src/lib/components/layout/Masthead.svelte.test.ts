import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createI18nContext } from '$lib/i18n';
import { zh } from '$lib/i18n/dictionaries/zh';
import Masthead from './Masthead.svelte';

describe('Masthead', () => {
	it('renders the localized home mark and external YinYang Agent CTA', async () => {
		const screen = await render(Masthead, {
			context: createI18nContext({ locale: () => 'zh', messages: () => zh })
		});

		const homeLink = screen.getByRole('link', { name: zh.common.brandHomeAriaLabel });
		await expect.element(homeLink).toHaveAttribute('href', '/zh');

		const appLink = screen.getByRole('link', { name: new RegExp(zh.common.mastheadCta) });
		await expect.element(appLink).toHaveAttribute('href', 'https://yinyang.memenow.xyz/zh');
		await expect.element(appLink).toHaveAttribute('target', '_blank');
		await expect.element(appLink).toHaveAttribute('rel', 'noopener noreferrer');
	});
});
