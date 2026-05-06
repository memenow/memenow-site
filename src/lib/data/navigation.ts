export interface NavLink {
	label: string;
	href: string;
	external?: boolean;
}

export const primaryNav: NavLink[] = [
	{ label: 'Products', href: '/products' },
	{ label: 'Company', href: '/company' }
];

export interface FooterSection {
	title: string;
	links: NavLink[];
}

export const footerSections: FooterSection[] = [
	{
		title: 'Memenow',
		links: [
			{ label: 'Products', href: '/products' },
			{ label: 'Company', href: '/company' }
		]
	},
	{
		title: 'Legal',
		links: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' },
			{ label: 'Disclaimer', href: '/disclaimer' },
			{ label: 'GitHub', href: 'https://github.com/memenow', external: true }
		]
	}
];
