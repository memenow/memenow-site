export type ProductElement = 'green' | 'pink';

export interface Product {
	slug: 'yinyang' | 'quant';
	name: string;
	tagline: string;
	description: string;
	cta: { label: string; href: string; external?: boolean };
	element: ProductElement;
	available: boolean;
}

export const products: Product[] = [
	{
		slug: 'yinyang',
		name: 'Yinyang Agent',
		tagline: 'A Bazi reading you can return to.',
		description:
			'AI-powered Eight-Pillars analysis. Birth chart in, narrative reading out — read once, revisit forever.',
		cta: {
			label: 'Visit yinyang.memenow.xyz',
			href: 'https://yinyang.memenow.xyz',
			external: true
		},
		element: 'green',
		available: true
	},
	{
		slug: 'quant',
		name: 'Quant Research',
		tagline: 'Small models, repeatable edges.',
		description:
			'Two research tracks — crypto perpetuals and Mainland China A-shares — run as discipline, not as marketing.',
		cta: { label: 'Read the brief', href: '/products/quant' },
		element: 'pink',
		available: true
	}
];
