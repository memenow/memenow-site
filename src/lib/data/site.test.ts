import { describe, expect, it } from 'vitest';
import { SUPPORTED_LOCALES } from '$lib/i18n/locale-registry';
import { en } from '$lib/i18n/dictionaries/en';
import { zh } from '$lib/i18n/dictionaries/zh';
import { SITE_EMAILS, SITE_ORIGIN, YINYANG_APP_ORIGIN, yinyangAppHref } from './site';
import {
	YINYANG_BASIC_CREDITS_UNITS,
	YINYANG_FREE_MONTHLY_READINGS,
	YINYANG_MEMBER_INCLUDED_UNLOCKS,
	YINYANG_PLATFORMS,
	YINYANG_TIERS,
	buildTierItems
} from './yinyang';

describe('site helpers', () => {
	it('builds locale-aware YinYang Agent root URLs', () => {
		expect(yinyangAppHref('en')).toBe(YINYANG_APP_ORIGIN);
		expect(yinyangAppHref('zh')).toBe(`${YINYANG_APP_ORIGIN}/zh`);
		expect(yinyangAppHref('zh-TW')).toBe(`${YINYANG_APP_ORIGIN}/zh-TW`);
		expect(yinyangAppHref('ja')).toBe(`${YINYANG_APP_ORIGIN}/ja`);
	});

	it('appends and normalizes optional subpaths for every locale', () => {
		expect(yinyangAppHref('en', '/pricing')).toBe(`${YINYANG_APP_ORIGIN}/pricing`);
		expect(yinyangAppHref('en', '///method/')).toBe(`${YINYANG_APP_ORIGIN}/method`);
		expect(yinyangAppHref('zh', '/analyze')).toBe(`${YINYANG_APP_ORIGIN}/zh/analyze`);
		expect(yinyangAppHref('ko', 'library/')).toBe(`${YINYANG_APP_ORIGIN}/ko/library`);
		expect(yinyangAppHref('fr', ' / ')).toBe(`${YINYANG_APP_ORIGIN}/fr`);
		for (const locale of SUPPORTED_LOCALES) {
			expect(yinyangAppHref(locale, '/pricing')).toMatch(/^https:\/\/yinyang\.memenow\.xyz\//);
		}
	});

	it('keeps official origins and emails on memenow.xyz', () => {
		expect(SITE_ORIGIN).toBe('https://memenow.xyz');
		expect(SITE_EMAILS.hello).toBe('hello@memenow.xyz');
		expect(SITE_EMAILS.support).toBe('support@memenow.xyz');
		expect(SITE_EMAILS.privacy).toBe('privacy@memenow.xyz');
	});
});

describe('YinYang catalog facts', () => {
	it('matches the 5-tier value ladder and server payment catalog constants', () => {
		expect(YINYANG_FREE_MONTHLY_READINGS).toBe(2);
		expect(YINYANG_BASIC_CREDITS_UNITS).toBe(2);
		expect(YINYANG_MEMBER_INCLUDED_UNLOCKS).toBe(5);
		expect(YINYANG_TIERS.map((t) => [t.id, t.priceUsd, t.billingInterval])).toEqual([
			['dailyDecree', null, null],
			['monthlyFree', null, null],
			['basicCredits', '$3.99', null],
			['fullReport', '$5.99', null],
			['monthlyMember', '$9.99', 'month']
		]);
	});

	it('lists the web, iOS, and MCP platform surfaces with honest readiness states', () => {
		expect(YINYANG_PLATFORMS).toEqual([
			{ id: 'web', status: 'live' },
			{ id: 'ios', status: 'preparing' },
			{ id: 'mcp', status: 'staged' }
		]);
	});

	it('maps catalog tiers into localized TierItems with locale-prefixed app links', () => {
		const zhItems = buildTierItems('zh', zh.catalog);
		expect(zhItems).toHaveLength(5);
		expect(zhItems[0].priceLabel).toBe('免费');
		expect(zhItems[0].ctaHref).toBe('https://yinyang.memenow.xyz/zh');
		expect(zhItems[3].priceLabel).toBe('$5.99');
		expect(zhItems[3].highlight).toBe(true);
		expect(zhItems[4].priceLabel).toBe('$9.99/月');
		expect(zhItems[4].ctaHref).toBe('https://yinyang.memenow.xyz/zh/pricing');

		const enItems = buildTierItems('en', en.catalog);
		expect(enItems[1].ctaHref).toBe('https://yinyang.memenow.xyz/analyze');
		expect(enItems[4].priceLabel).toBe('$9.99/mo');
	});
});
