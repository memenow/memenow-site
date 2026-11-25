import type { MessageSchema } from './zh';

/**
 * American English dictionary — short, concrete, zero-filler copy matching `zh.ts`.
 */

export const en: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'Home',
		products: 'Products',
		company: 'Company',
		contact: 'Contact',
		legal: 'Legal',
		privacy: 'Privacy',
		terms: 'Terms',
		skipToContent: 'Skip to content',
		scrollToContent: 'Scroll down',
		navAriaLabel: 'Primary navigation',
		brandHomeAriaLabel: 'memenow home',
		mastheadCta: 'Open YinYang Agent',
		footerTagline: 'An AI companion that knows you',
		sponsorsLabel: 'Sponsors',
		studioRegion: 'Delaware, USA',
		rightsReserved: '© {year} memenow LLC · All rights reserved',
		theme: {
			switchToDark: 'Switch to dark theme',
			switchToLight: 'Switch to light theme'
		},
		motion: {
			reduce: 'Reduce motion',
			allow: 'Allow motion'
		},
		language: {
			menuLabel: 'Language',
			footerTitle: 'Language'
		}
	},
	catalog: {
		freeLabel: 'Free',
		perMonthSuffix: '/mo',
		disclaimer: 'Final prices appear at checkout.',
		tiers: {
			dailyDecree: {
				badge: 'Daily free',
				title: 'Daily Decree',
				summary: 'Daily note from today’s pillars.',
				features: ['No sign-in', 'Outside monthly quota'],
				cta: 'Today’s decree'
			},
			monthlyFree: {
				badge: 'Free',
				title: 'Monthly Free',
				summary: '2 base readings each month.',
				features: ['Four Pillars & elements in plain text', 'Past-year check', 'Saved to account'],
				cta: 'Read my chart'
			},
			basicCredits: {
				badge: 'Top-up',
				title: 'Basic Credits',
				summary: 'Adds 2 extra base readings.',
				features: ['Never expires, rolls over', 'Used after monthly quota'],
				cta: 'View credits'
			},
			fullReport: {
				badge: 'One-time',
				title: 'Full Report',
				summary: 'Single-chart permanent unlock.',
				features: [
					'Love, Career, Health, Family chapters',
					'10-year cycles, annual forecast & reasoning',
					'Shareable chart card'
				],
				cta: 'Unlock Full Report'
			},
			monthlyMember: {
				badge: 'Monthly',
				title: 'Monthly Member',
				summary: 'Ongoing timing & chart chat.',
				features: [
					'Daily, weekly, monthly & annual cycles',
					'Chart dialogue + topic updates',
					'5 Full Reports per cycle'
				],
				cta: 'View membership'
			}
		},
		platforms: {
			web: {
				statusLabel: 'Live · 7 languages',
				title: 'Web',
				body: 'yinyang.memenow.xyz — open in any browser.'
			},
			ios: {
				statusLabel: 'In development',
				title: 'iPhone app',
				body: 'Native iOS app for daily checks and alerts.'
			},
			mcp: {
				statusLabel: 'Planned',
				title: 'AI links',
				body: 'Connect charts to your daily AI tools.'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — An AI companion that knows you',
			description: 'memenow LLC builds personal AI products, starting with YinYang Agent.',
			ogTitle: 'memenow — An AI companion that knows you',
			ogDescription: 'YinYang Agent: solar-time charts, Full Reports, Timing Cycles, and chat.'
		},
		hero: {
			title: 'An AI companion that knows you',
			primaryCta: 'Explore YinYang Agent',
			secondaryCta: 'Open app'
		},
		approach: {
			title: 'Principles',
			beliefs: [
				{
					num: '01',
					title: 'Long-term memory',
					body: 'Keeps context across sessions.'
				},
				{
					num: '02',
					title: 'Show the work',
					body: 'Reasoning alongside every answer.'
				},
				{
					num: '03',
					title: 'Your data',
					body: 'Private space. Export or delete anytime.'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: 'Four Pillars · Timing Cycles · Chart Dialogue',
			meta: 'yinyang.memenow.xyz · 7 languages',
			pillars: [
				{
					num: '01',
					title: 'Solar-time charts',
					body: 'Birthplace & solar terms, checked on past years.'
				},
				{
					num: '02',
					title: 'Full Report',
					body: 'Love, Career, Health, Family + 10-year cycles.'
				},
				{
					num: '03',
					title: 'Timing Cycles',
					body: 'Daily, weekly, monthly, and annual shifts.'
				},
				{
					num: '04',
					title: 'Chart dialogue',
					body: 'Follow-ups on saved charts + topic updates.'
				}
			],
			cta: 'Read my chart',
			detailLink: 'Details'
		},
		access: {
			title: 'Access',
			items: [
				{
					num: 'Free',
					title: 'Daily & monthly quota',
					body: 'Daily Decree without sign-in; 2 base readings/mo signed in.'
				},
				{
					num: 'Paid',
					title: 'Per chart or monthly',
					body: 'Credits $3.99 · Full Report $5.99 · Member $9.99/mo.'
				},
				{
					num: 'Platforms',
					title: 'Live on web',
					body: '7 languages live; iPhone app and AI links in progress.'
				}
			],
			cta: 'Plans & pricing',
			detailLink: 'YinYang Agent details'
		}
	},
	products: {
		meta: {
			title: 'Products & Plans — memenow',
			description: 'YinYang Agent plans and public pricing.',
			ogTitle: 'Products & Plans — memenow',
			ogDescription: 'Daily Decree, Monthly Free, Basic Credits, Full Report, and Monthly Member.'
		},
		hero: {
			title: 'Products & Plans',
			primaryCta: 'Read my chart',
			secondaryCta: 'Details'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: 'Live · 7 languages',
			summary: 'Four Pillars charts, timing tracking, and chart dialogue.',
			tags: ['Solar-time charts', 'Full Report', 'Timing Cycles', 'Chart dialogue'],
			primaryCta: 'Open app',
			detailLink: 'Method'
		},
		plans: {
			title: 'Plans & Pricing',
			cta: 'Go to pricing',
			libraryLink: 'BaZi Library'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: 'Solar-time charts, dual-school reading, Timing Cycles, and chat.',
			ogTitle: 'YinYang Agent — Timing in motion and stillness',
			ogDescription: 'Solar-time charts, Full Report, Timing Cycles, and chart dialogue.'
		},
		hero: {
			title: 'Timing in motion and stillness',
			lede: 'Solar-time charts, Ziping & Mangpai dual reading, Timing Cycles, and chat.',
			primaryCta: 'Read my chart',
			secondaryCta: 'Plans & pricing'
		},
		reading: {
			title: 'Core Features',
			highlights: [
				{
					num: '01',
					title: 'Chart & reading',
					body: 'Pillars and Ten Gods alongside plain text.'
				},
				{
					num: '02',
					title: 'Four-chapter report',
					body: 'Love, Career, Health, Family + cycles and share card.'
				},
				{
					num: '03',
					title: 'Timing Cycles',
					body: 'Daily to annual tracking across five life areas.'
				},
				{
					num: '04',
					title: 'Dialogue & library',
					body: 'Ask on saved charts; built-in BaZi Library.'
				}
			]
		},
		method: {
			title: 'Method',
			lede: 'Solar-term chart → Ziping & Mangpai dual analysis → past-year check.',
			comparison: {
				caption: 'YinYang Agent vs. generic AI',
				genericLabel: 'Generic AI chat',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: 'Charting',
						generic: 'Misses birthplace time & solar cutoffs',
						yinyang: 'Birthplace solar time + astronomical terms'
					},
					{
						feature: 'Analysis',
						generic: 'One-shot generic copy',
						yinyang: 'Ziping balance + Mangpai structure'
					},
					{
						feature: 'Basis',
						generic: 'Answers without sources',
						yinyang: 'Full reasoning trace + BaZi Library'
					},
					{
						feature: 'Calibration',
						generic: 'Contradicts itself when rephrased',
						yinyang: 'Verifies key past years first'
					},
					{
						feature: 'Continuity',
						generic: 'Resets when the tab closes',
						yinyang: 'Saved charts linked to cycles & chat'
					}
				]
			}
		},
		platforms: {
			title: 'Platforms',
			plansCta: 'Plans & pricing',
			libraryLink: 'BaZi Library'
		}
	},
	company: {
		meta: {
			title: 'Company — memenow',
			description: 'memenow LLC, founded in 2024 in Delaware, builds personal AI products.',
			ogTitle: 'About memenow',
			ogDescription: 'Independent AI company memenow LLC, makers of YinYang Agent.'
		},
		hero: {
			title: 'About memenow',
			lede: 'Independent personal AI products.'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Founded',
				foundedDesc: 'Independent studio.',
				jurisdictionValue: 'Delaware',
				jurisdictionLabel: 'Jurisdiction',
				jurisdictionDesc: 'US LLC.',
				localeCount: '7',
				localeLabel: 'Languages',
				localeDesc: 'ZH, ZH-TW, EN, JA, KO, ES, FR.'
			}
		},
		principles: {
			title: 'Standards',
			items: [
				{
					num: '01',
					title: 'Plain language',
					body: 'Clear writing, no jargon.'
				},
				{
					num: '02',
					title: 'Show the work',
					body: 'Visible reasoning, no black box.'
				},
				{
					num: '03',
					title: 'Quiet UI',
					body: 'No pop-ups; light and dark themes.'
				},
				{
					num: '04',
					title: 'Zero tracking',
					body: 'No site analytics; export or delete app data anytime.'
				}
			]
		},
		work: {
			title: 'Timeline',
			thanks: 'Credits sponsored by Anthropic and Cloudflare.',
			timeline: [
				{
					year: '2024',
					title: 'memenow LLC founded',
					body: 'Formed in Delaware; started personal AI work.'
				},
				{
					year: '2025',
					title: 'YinYang Agent launched',
					body: 'Shipped web app with solar-term charting and dual readings.'
				},
				{
					year: '2026',
					title: '7 languages & new platforms',
					body: '7 languages and public tiers live; iPhone app & AI links underway.'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: 'Privacy — memenow',
			description: 'Privacy notice for memenow.xyz.'
		},
		hero: {
			updated: 'UPDATED 2026-11-24',
			title: 'Privacy Policy',
			lede: 'No ads or analytics—local display settings only.'
		},
		summaryTitle: 'Summary',
		summaryPoints: [
			'No third-party ads or tracking scripts.',
			'Theme and motion stay in your browser.',
			'Email privacy@memenow.xyz to export or delete data.'
		],
		scope: {
			title: 'Scope',
			body: 'Covers public pages on <strong>memenow.xyz</strong> by <strong>memenow LLC</strong>. YinYang Agent has its own in-app privacy policy and data controls.'
		},
		data: {
			title: 'Local settings & logs',
			p1: 'No third-party analytics or ads. Theme and motion (<code class="prose-code">memenow.theme</code>, <code class="prose-code">memenow.motion</code>) stay in local browser storage; language (<code class="prose-code">memenow.locale</code>) uses a first-party cookie to keep your chosen locale.',
			p2: 'Cloudflare logs standard request metadata (IP, user agent, time, path) for security only, never tied to personal identity.'
		},
		email: {
			title: 'Data requests',
			body: 'Privacy or data requests: <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>. General inquiries: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. Emails are used only to reply.'
		}
	},
	terms: {
		meta: {
			title: 'Terms — memenow',
			description: 'Terms of use for memenow.xyz.'
		},
		hero: {
			updated: 'UPDATED 2026-11-24',
			title: 'Terms of Use',
			lede: 'Scope, cultural reference notice, and reading rights.'
		},
		summaryTitle: 'Summary',
		summaryPoints: [
			'BaZi content is cultural reference, not medical, legal, or financial advice.',
			'Your personal readings remain yours to keep and share non-commercially.',
			'Contact hello@memenow.xyz or support@memenow.xyz.'
		],
		scope: {
			title: 'Scope',
			body: 'Covers public pages on <strong>memenow.xyz</strong> by <strong>memenow LLC</strong>. YinYang Agent has separate product terms and refund rules.'
		},
		disclaimer: {
			title: 'Cultural reference & AI',
			p1: 'Four Pillars and Five Elements content draws on traditional culture for personal reflection and <strong>does not replace medical, psychological, legal, or financial advice</strong>.',
			p2: 'Readings combine chart facts with AI writing, make no promises about future events, and leave real-world decisions to you.'
		},
		warranty: {
			title: 'As is',
			body: 'Provided “as is,” without additional express or implied warranties.'
		},
		offer: {
			title: 'No financial offer',
			body: 'Nothing here is an offer of securities or investment advice.'
		},
		ip: {
			title: 'Rights',
			p1: '“memenow” and “YinYang Agent” marks and design belong to memenow LLC.',
			p2: 'Personal readings and Full Reports you generate remain yours to read, save, and share non-commercially.'
		},
		law: {
			title: 'Governing law',
			p1: 'Governed by Delaware law, excluding conflict-of-law rules.',
			p2: 'Legal: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. Product or billing: <a href="mailto:support@memenow.xyz">support@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'Page not found',
		serverErrorTitle: 'Page unavailable',
		notFoundLede: 'This page does not exist or moved.',
		serverErrorLede: 'Temporary loading issue. Try again shortly.',
		returnHome: 'Return home',
		statusLabel: 'Status · {status}',
		notFoundLabel: 'Not found',
		errorLabel: 'Unavailable'
	}
};
