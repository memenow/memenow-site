/**
 * Simplified Chinese dictionary — the schema owner. Every other locale is
 * annotated as `MessageSchema`, so a missing or extra key in any dictionary
 * fails typechecking. No `as const`: literal widening to `string` is what makes
 * the locales mutually assignable.
 *
 * Style contract: short, concrete, plain human copy — facts over filler,
 * zero self-praise, zero patronizing cues, zero LLM clichés, zero jargon,
 * zero exclamation marks, zero fatalism. Brand `memenow` and flagship
 * `YinYang Agent` are never translated.
 *
 * Legal strings contain intentional inline markup (`strong`, `code`, `a`)
 * consumed via `TrustedHtml` — trusted, static, authored here, never user input.
 */

export const zh = {
	common: {
		brand: 'memenow',
		home: '首页',
		products: '产品',
		company: '关于',
		contact: '联系',
		legal: '条款',
		privacy: '隐私政策',
		terms: '使用条款',
		skipToContent: '跳至正文',
		scrollToContent: '向下滚动',
		navAriaLabel: '主导航',
		brandHomeAriaLabel: 'memenow 首页',
		mastheadCta: '打开 YinYang Agent',
		footerTagline: '懂你的 AI 伙伴',
		sponsorsLabel: '赞助商',
		studioRegion: '美国特拉华州',
		rightsReserved: '© {year} memenow LLC · 保留所有权利',
		theme: {
			switchToDark: '切换至暗色主题',
			switchToLight: '切换至明亮主题'
		},
		motion: {
			reduce: '减弱动效',
			allow: '允许动效'
		},
		language: {
			menuLabel: '切换语言',
			footerTitle: '语言'
		}
	},
	catalog: {
		freeLabel: '免费',
		perMonthSuffix: '/月',
		disclaimer: '以结算页价格为准。',
		tiers: {
			dailyDecree: {
				badge: '每日免费',
				title: '每日签',
				summary: '当日干支提示。',
				features: ['免登录', '不占月度额度'],
				cta: '看今日签'
			},
			monthlyFree: {
				badge: '免费',
				title: '月度免费解读',
				summary: '每月 2 次基础排盘。',
				features: ['四柱与五行白话解读', '核验过往年份', '云端存档'],
				cta: '开始排盘'
			},
			basicCredits: {
				badge: '按次补充',
				title: '基础积分包',
				summary: '补充 2 次基础解读。',
				features: ['永不过期，自动结转', '免费额度用完后再扣'],
				cta: '查看积分包'
			},
			fullReport: {
				badge: '单次解锁',
				title: '完整报告',
				summary: '单张命盘一次解锁。',
				features: ['情感、事业、健康、家庭四章', '十年大运、流年与推演依据', '可分享命盘卡片'],
				cta: '解锁完整报告'
			},
			monthlyMember: {
				badge: '按月订阅',
				title: '月度会员',
				summary: '长期时运与对话订阅。',
				features: ['日、周、月、年时运追踪', '命盘对话与定期专题更新', '每周期含 5 次完整报告'],
				cta: '查看月度会员'
			}
		},
		platforms: {
			web: {
				statusLabel: '已上线 · 7 语种',
				title: '网页版',
				body: 'yinyang.memenow.xyz，浏览器直开。'
			},
			ios: {
				statusLabel: '开发中',
				title: 'iPhone 原生版',
				body: '独立 iOS 应用，随手翻看与提醒。'
			},
			mcp: {
				statusLabel: '规划中',
				title: 'AI 助手接入',
				body: '接入常用 AI 工具。'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — 懂你的 AI 伙伴',
			description: 'memenow LLC，独立开发个人 AI 产品，代表作 YinYang Agent。',
			ogTitle: 'memenow — 懂你的 AI 伙伴',
			ogDescription: 'YinYang Agent：真太阳时排盘、完整报告、时运周期与命盘对话。'
		},
		hero: {
			title: '懂你的 AI 伙伴',
			primaryCta: '了解 YinYang Agent',
			secondaryCta: '直接打开'
		},
		approach: {
			title: '产品原则',
			beliefs: [
				{
					num: '01',
					title: '长期记忆',
					body: '保留上下文，下次接着聊。'
				},
				{
					num: '02',
					title: '有据可查',
					body: '结论与推演依据一并呈现。'
				},
				{
					num: '03',
					title: '数据归你',
					body: '私人空间保存，随时导出或清空。'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: '八字排盘 · 时运周期 · 命盘对话',
			meta: 'yinyang.memenow.xyz · 7 语种',
			pillars: [
				{
					num: '01',
					title: '真太阳时排盘',
					body: '按出生地与节气定四柱，先对过往流年。'
				},
				{
					num: '02',
					title: '四章完整报告',
					body: '情感、事业、健康、家庭，含大运流年。'
				},
				{
					num: '03',
					title: '时运周期',
					body: '日、周、月、年节奏追踪。'
				},
				{
					num: '04',
					title: '命盘对话',
					body: '基于已存命盘追问，定期推送专题更新。'
				}
			],
			cta: '开始排盘',
			detailLink: '查看详情'
		},
		access: {
			title: '使用方式',
			items: [
				{
					num: '免费',
					title: '每日签与月度额度',
					body: '每日签免登录；登录后每月 2 次基础解读。'
				},
				{
					num: '付费',
					title: '按次或按月',
					body: '积分包 $3.99 · 完整报告 $5.99 · 会员 $9.99/月。'
				},
				{
					num: '平台',
					title: '网页版已上线',
					body: '7 语种直开；iPhone 版与 AI 接入开发中。'
				}
			],
			cta: '方案与价格',
			detailLink: 'YinYang Agent 详情'
		}
	},
	products: {
		meta: {
			title: '产品与方案 — memenow',
			description: 'YinYang Agent 方案与公开价格。',
			ogTitle: '产品与方案 — memenow',
			ogDescription: '每日签、月度免费解读、积分包、完整报告与月度会员。'
		},
		hero: {
			title: '产品与方案',
			primaryCta: '开始排盘',
			secondaryCta: '产品详情'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: '已上线 · 7 语种',
			summary: '八字排盘、时运追踪与命盘对话。',
			tags: ['真太阳时排盘', '完整报告', '时运周期', '命盘对话'],
			primaryCta: '打开应用',
			detailLink: '推演方法'
		},
		plans: {
			title: '方案与价格',
			cta: '前往定价页',
			libraryLink: '八字资料库'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: '真太阳时排盘、双视角解读、时运周期与命盘对话。',
			ogTitle: 'YinYang Agent — 动静之间，皆有时机',
			ogDescription: '真太阳时排盘、完整报告、时运周期与命盘对话。'
		},
		hero: {
			title: '动静之间，皆有时机',
			lede: '真太阳时排盘、子平与盲派双视角、时运周期与命盘对话。',
			primaryCta: '开始排盘',
			secondaryCta: '方案与价格'
		},
		reading: {
			title: '核心功能',
			highlights: [
				{
					num: '01',
					title: '排盘与解读',
					body: '干支、十神与白话对照呈现。'
				},
				{
					num: '02',
					title: '四章完整报告',
					body: '情感、事业、健康、家庭，含大运与分享卡。'
				},
				{
					num: '03',
					title: '时运周期',
					body: '日、周、月、年追踪事业、财务、关系、健康与家庭。'
				},
				{
					num: '04',
					title: '对话与资料库',
					body: '承接已存命盘追问，内置八字资料库。'
				}
			]
		},
		method: {
			title: '推演方法',
			lede: '节气定盘 → 子平与盲派双视角 → 过往流年核验。',
			comparison: {
				caption: 'YinYang Agent 与通用 AI 对比',
				genericLabel: '通用 AI 聊天',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: '排盘',
						generic: '常忽略时差与节气交界',
						yinyang: '出生地真太阳时 + 天文节气'
					},
					{
						feature: '分析',
						generic: '单次通用话术',
						yinyang: '子平调候 + 盲派格局'
					},
					{
						feature: '依据',
						generic: '只给结论，无出处',
						yinyang: '完整推演过程 + 八字资料库'
					},
					{
						feature: '校准',
						generic: '换个问法前后矛盾',
						yinyang: '先核验过往关键年份'
					},
					{
						feature: '延续',
						generic: '关掉窗口从头开始',
						yinyang: '命盘存档，关联时运与对话'
					}
				]
			}
		},
		platforms: {
			title: '支持平台',
			plansCta: '方案与价格',
			libraryLink: '八字资料库'
		}
	},
	company: {
		meta: {
			title: '关于 — memenow',
			description: 'memenow LLC，2024 年成立于美国特拉华州，独立开发个人 AI 产品。',
			ogTitle: '关于 memenow',
			ogDescription: '独立 AI 产品公司 memenow LLC，代表作 YinYang Agent。'
		},
		hero: {
			title: '关于 memenow',
			lede: '独立开发个人 AI 产品。'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: '成立',
				foundedDesc: '独立运营。',
				jurisdictionValue: '特拉华州',
				jurisdictionLabel: '注册地',
				jurisdictionDesc: '美国 LLC。',
				localeCount: '7',
				localeLabel: '语言',
				localeDesc: '简、繁、英、日、韩、西、法。'
			}
		},
		principles: {
			title: '产品标准',
			items: [
				{
					num: '01',
					title: '说人话',
					body: '写清楚，不堆术语。'
				},
				{
					num: '02',
					title: '给依据',
					body: '展示推演，不黑箱。'
				},
				{
					num: '03',
					title: '不打扰',
					body: '无弹窗，明暗双主题。'
				},
				{
					num: '04',
					title: '零追踪',
					body: '官网无统计，应用数据可导出或删除。'
				}
			]
		},
		work: {
			title: '历程',
			thanks: 'Anthropic 与 Cloudflare 提供额度赞助。',
			timeline: [
				{
					year: '2024',
					title: '成立 memenow LLC',
					body: '注册于特拉华州，启动个人 AI 研发。'
				},
				{
					year: '2025',
					title: 'YinYang Agent 上线',
					body: '发布网页版，上线节气排盘与双视角解读。'
				},
				{
					year: '2026',
					title: '7 语种与多端推进',
					body: '上线 7 语种与公开方案，推进 iPhone 版与 AI 接入。'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: '隐私政策 — memenow',
			description: 'memenow.xyz 隐私声明。'
		},
		hero: {
			updated: '更新于 2026-11-24',
			title: '隐私政策',
			lede: '无广告与统计脚本，仅本地保存显示偏好。'
		},
		summaryTitle: '要点',
		summaryPoints: [
			'无第三方广告或追踪脚本。',
			'主题与动效偏好仅存本地，不上传。',
			'导出或注销账号致信 privacy@memenow.xyz。'
		],
		scope: {
			title: '适用范围',
			body: '适用于 <strong>memenow LLC</strong> 运营的 <strong>memenow.xyz</strong> 公开页面。YinYang Agent 另有应用内隐私政策与数据管理。'
		},
		data: {
			title: '本地偏好与日志',
			p1: '本站无第三方统计或广告。主题与动效偏好（<code class="prose-code">memenow.theme</code>、<code class="prose-code">memenow.motion</code>）仅存浏览器本地；语言偏好（<code class="prose-code">memenow.locale</code>）使用第一方 Cookie 维持当前语种。',
			p2: '托管商 Cloudflare 仅按安全惯例记录基础请求日志（IP、浏览器标识、时间与路径），不关联个人身份。'
		},
		email: {
			title: '数据请求',
			body: '隐私与数据请求致信 <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>，一般联系致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>。来信仅用于回复。'
		}
	},
	terms: {
		meta: {
			title: '使用条款 — memenow',
			description: 'memenow.xyz 使用条款。'
		},
		hero: {
			updated: '更新于 2026-11-24',
			title: '使用条款',
			lede: '服务边界、文化参考定位与内容归属。'
		},
		summaryTitle: '要点',
		summaryPoints: [
			'八字内容属文化参考，不替代医疗、心理、法律或财务建议。',
			'个人解读与报告归你永久保存及非商业分享。',
			'联系 hello@memenow.xyz 或 support@memenow.xyz。'
		],
		scope: {
			title: '适用范围',
			body: '适用于 <strong>memenow LLC</strong> 运营的 <strong>memenow.xyz</strong> 公开页面。YinYang Agent 另附产品条款与退款说明。'
		},
		disclaimer: {
			title: '文化参考与 AI 阐释',
			p1: '四柱八字与五行内容源自传统文化，仅作反思参考，<strong>不构成亦不替代医疗、心理、法律或财务建议</strong>。',
			p2: '解读由排盘事实与 AI 辅助生成，不对未来作承诺，现实决策由你自主负责。'
		},
		warranty: {
			title: '按原样提供',
			body: '本站内容按「原样」提供，不作额外明示或默示担保。'
		},
		offer: {
			title: '非金融要约',
			body: '本站内容不构成证券或金融工具要约，亦非投资建议。'
		},
		ip: {
			title: '权益归属',
			p1: '「memenow」与「YinYang Agent」商标及设计归 memenow LLC 所有。',
			p2: '你在 YinYang Agent 生成的个人解读与报告归你永久阅读、保存与非商业分享。'
		},
		law: {
			title: '适用法律',
			p1: '受美国特拉华州法律管辖（不含冲突法规则）。',
			p2: '条款咨询致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>，产品或账单致信 <a href="mailto:support@memenow.xyz">support@memenow.xyz</a>。'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: '页面未找到',
		serverErrorTitle: '页面暂不可用',
		notFoundLede: '页面不存在或已移动。',
		serverErrorLede: '加载遇到临时问题，请稍后重试。',
		returnHome: '返回首页',
		statusLabel: '状态 · {status}',
		notFoundLabel: '未找到',
		errorLabel: '暂不可用'
	}
};

export type MessageSchema = typeof zh;
