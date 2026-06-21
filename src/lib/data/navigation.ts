// Single source of truth for site navigation. `primaryNav` feeds the
// floating dock; `footerSections` feeds the bottom-of-page navigation.
// Add new top-level routes here, not by editing the components.
export interface NavLink {
	label: string;
	href: string;
	external?: boolean;
	/**
	 * Extra path prefixes that should also mark this link as the current page.
	 * Useful when one nav entry represents a group of routes (e.g. "Legal"
	 * covers /privacy, /terms).
	 */
	match?: string[];
}

export const homeLink: NavLink = { label: 'Home', href: '/' };

export const primaryNav: NavLink[] = [
	{ label: 'Products', href: '/products' },
	{ label: 'Company', href: '/company' },
	{
		label: 'Legal',
		href: '/terms',
		match: ['/privacy', '/terms']
	}
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
			{ label: 'GitHub', href: 'https://github.com/memenow', external: true }
		]
	}
];
