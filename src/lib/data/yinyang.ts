import type { Locale, MessageSchema } from '$lib/i18n';
import type { TierItem } from '$lib/components/editorial/TierGrid.svelte';
import { yinyangAppHref } from './site';

/**
 * Structured product facts for YinYang Agent, aligned with the server-owned
 * payment catalog in `yinyang-core` (`payment-catalog.ts`) and the 5-tier
 * value ladder in `yinyang-agent-ui`. Pure data — safe for client and SSR
 * bundles; all user-facing prose lives in `$lib/i18n/dictionaries/`.
 */

export const YINYANG_FREE_MONTHLY_READINGS = 2;
export const YINYANG_BASIC_CREDITS_UNITS = 2;
export const YINYANG_MEMBER_INCLUDED_UNLOCKS = 5;

export type YinyangTierId =
	'dailyDecree' | 'monthlyFree' | 'basicCredits' | 'fullReport' | 'monthlyMember';

export interface YinyangCatalogTier {
	readonly id: YinyangTierId;
	/** Catalog USD price (`null` for free tiers). Final pricing is confirmed at payment. */
	readonly priceUsd: string | null;
	readonly billingInterval: 'month' | null;
	/** Target subpath inside `yinyang.memenow.xyz` for this tier's CTA. */
	readonly appSubpath: string;
	readonly highlight?: boolean;
}

export const YINYANG_TIERS: ReadonlyArray<YinyangCatalogTier> = [
	{
		id: 'dailyDecree',
		priceUsd: null,
		billingInterval: null,
		appSubpath: '/'
	},
	{
		id: 'monthlyFree',
		priceUsd: null,
		billingInterval: null,
		appSubpath: '/analyze'
	},
	{
		id: 'basicCredits',
		priceUsd: '$3.99',
		billingInterval: null,
		appSubpath: '/pricing'
	},
	{
		id: 'fullReport',
		priceUsd: '$5.99',
		billingInterval: null,
		appSubpath: '/pricing',
		highlight: true
	},
	{
		id: 'monthlyMember',
		priceUsd: '$9.99',
		billingInterval: 'month',
		appSubpath: '/pricing'
	}
];

export type YinyangPlatformId = 'web' | 'ios' | 'mcp';
export type YinyangPlatformStatus = 'live' | 'preparing' | 'staged';

export interface YinyangPlatform {
	readonly id: YinyangPlatformId;
	readonly status: YinyangPlatformStatus;
}

export const YINYANG_PLATFORMS: ReadonlyArray<YinyangPlatform> = [
	{ id: 'web', status: 'live' },
	{ id: 'ios', status: 'preparing' },
	{ id: 'mcp', status: 'staged' }
];

/** Combine catalog price/routing facts with localized copy for `TierGrid`. */
export function buildTierItems(locale: Locale, catalog: MessageSchema['catalog']): TierItem[] {
	return YINYANG_TIERS.map((tier) => {
		const copy = catalog.tiers[tier.id];
		const priceLabel =
			tier.priceUsd === null
				? catalog.freeLabel
				: tier.billingInterval === 'month'
					? `${tier.priceUsd}${catalog.perMonthSuffix}`
					: tier.priceUsd;
		return {
			id: tier.id,
			badge: copy.badge,
			title: copy.title,
			priceLabel,
			summary: copy.summary,
			features: copy.features,
			highlight: tier.highlight,
			ctaLabel: copy.cta,
			ctaHref: yinyangAppHref(locale, tier.appSubpath)
		};
	});
}
