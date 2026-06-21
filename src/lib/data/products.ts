export type ProductElement = 'green' | 'pink';

export interface Product {
	slug: 'yinyang';
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
	}
];
