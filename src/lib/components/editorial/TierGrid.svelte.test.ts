import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import TierGrid, { type TierItem } from './TierGrid.svelte';

const SAMPLE_ITEMS: TierItem[] = [
	{
		id: 'dailyDecree',
		badge: '每日公开',
		title: '每日签',
		priceLabel: '免费',
		summary: '取自今日干支的时机信号，无需登录。',
		features: ['不消耗每月免费解读次数', '随时对照当下节奏'],
		ctaLabel: '查看今日信号',
		ctaHref: 'https://yinyang.memenow.xyz/zh'
	},
	{
		id: 'fullReport',
		badge: '单次解锁',
		title: '完整报告',
		priceLabel: '$5.99',
		summary: '针对单张命盘的一次性解锁，附完整推理链。',
		features: ['四大生活领域完整章节', '深读与可分享命盘画像卡'],
		highlight: true,
		ctaLabel: '解锁完整报告',
		ctaHref: 'https://yinyang.memenow.xyz/zh/pricing'
	}
];

describe('TierGrid', () => {
	it('renders every tier with price, features, highlight marker, and ledger disclaimer', async () => {
		const screen = await render(TierGrid, {
			props: {
				items: SAMPLE_ITEMS,
				disclaimer: '展示价格仅供参考，最终金额以支付时为准。'
			}
		});

		await expect.element(screen.getByRole('heading', { name: '每日签' })).toBeInTheDocument();
		await expect.element(screen.getByRole('heading', { name: '完整报告' })).toBeInTheDocument();
		await expect.element(screen.getByText('$5.99')).toBeInTheDocument();
		await expect.element(screen.getByText('四大生活领域完整章节')).toBeInTheDocument();
		await expect
			.element(screen.getByText('展示价格仅供参考，最终金额以支付时为准。'))
			.toBeInTheDocument();

		const highlighted = document.querySelectorAll('.c-tier-card--highlight');
		expect(highlighted).toHaveLength(1);
	});
});
