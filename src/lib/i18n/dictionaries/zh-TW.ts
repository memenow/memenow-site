import type { MessageSchema } from './zh';

/**
 * Traditional Chinese dictionary — short, concrete, zero-filler copy matching `zh.ts`.
 */

export const zhTW: MessageSchema = {
	common: {
		brand: 'memenow',
		home: '首頁',
		products: '產品',
		company: '關於',
		contact: '聯繫',
		legal: '條款',
		privacy: '隱私政策',
		terms: '使用條款',
		skipToContent: '跳至正文',
		scrollToContent: '向下捲動',
		navAriaLabel: '主導覽',
		brandHomeAriaLabel: 'memenow 首頁',
		mastheadCta: '開啟 YinYang Agent',
		footerTagline: '懂你的 AI 夥伴',
		sponsorsLabel: '贊助商',
		studioRegion: '美國德拉瓦州',
		rightsReserved: '© {year} memenow LLC · 保留所有權利',
		theme: {
			switchToDark: '切換至暗色主題',
			switchToLight: '切換至明亮主題'
		},
		motion: {
			reduce: '減弱動效',
			allow: '允許動效'
		},
		language: {
			menuLabel: '切換語言',
			footerTitle: '語言'
		}
	},
	catalog: {
		freeLabel: '免費',
		perMonthSuffix: '/月',
		disclaimer: '以結帳頁價格為準。',
		tiers: {
			dailyDecree: {
				badge: '每日免費',
				title: '每日籤',
				summary: '當日干支提示。',
				features: ['免登入', '不佔月度額度'],
				cta: '看今日籤'
			},
			monthlyFree: {
				badge: '免費',
				title: '月度免費解讀',
				summary: '每月 2 次基礎排盤。',
				features: ['四柱與五行白話解讀', '核驗過往年份', '雲端存檔'],
				cta: '開始排盤'
			},
			basicCredits: {
				badge: '按次補充',
				title: '基礎積分包',
				summary: '補充 2 次基礎解讀。',
				features: ['永不過期，自動結轉', '免費額度用完後再扣'],
				cta: '查看積分包'
			},
			fullReport: {
				badge: '單次解鎖',
				title: '完整報告',
				summary: '單張命盤一次解鎖。',
				features: ['情感、事業、健康、家庭四章', '十年大運、流年與推演依據', '可分享命盤卡片'],
				cta: '解鎖完整報告'
			},
			monthlyMember: {
				badge: '按月訂閱',
				title: '月度會員',
				summary: '長期時運與對話訂閱。',
				features: ['日、週、月、年時運追蹤', '命盤對話與定期專題更新', '每週期含 5 次完整報告'],
				cta: '查看月度會員'
			}
		},
		platforms: {
			web: {
				statusLabel: '已上線 · 7 語種',
				title: '網頁版',
				body: 'yinyang.memenow.xyz，瀏覽器直開。'
			},
			ios: {
				statusLabel: '開發中',
				title: 'iPhone 原生版',
				body: '獨立 iOS 應用，隨手翻看與提醒。'
			},
			mcp: {
				statusLabel: '規劃中',
				title: 'AI 助手接入',
				body: '接入常用 AI 工具。'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — 懂你的 AI 夥伴',
			description: 'memenow LLC，獨立開發個人 AI 產品，代表作 YinYang Agent。',
			ogTitle: 'memenow — 懂你的 AI 夥伴',
			ogDescription: 'YinYang Agent：真太陽時排盤、完整報告、時運週期與命盤對話。'
		},
		hero: {
			title: '懂你的 AI 夥伴',
			primaryCta: '了解 YinYang Agent',
			secondaryCta: '直接開啟'
		},
		approach: {
			title: '產品原則',
			beliefs: [
				{
					num: '01',
					title: '長期記憶',
					body: '保留上下文，下次接著聊。'
				},
				{
					num: '02',
					title: '有據可查',
					body: '結論與推演依據一併呈現。'
				},
				{
					num: '03',
					title: '資料歸你',
					body: '私人空間保存，隨時匯出或清空。'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: '八字排盤 · 時運週期 · 命盤對話',
			meta: 'yinyang.memenow.xyz · 7 語種',
			pillars: [
				{
					num: '01',
					title: '真太陽時排盤',
					body: '按出生地與節氣定四柱，先對過往流年。'
				},
				{
					num: '02',
					title: '四章完整報告',
					body: '情感、事業、健康、家庭，含大運流年。'
				},
				{
					num: '03',
					title: '時運週期',
					body: '日、週、月、年節奏追蹤。'
				},
				{
					num: '04',
					title: '命盤對話',
					body: '基於已存命盤追問，定期推送專題更新。'
				}
			],
			cta: '開始排盤',
			detailLink: '查看詳情'
		},
		access: {
			title: '使用方式',
			items: [
				{
					num: '免費',
					title: '每日籤與月度額度',
					body: '每日籤免登入；登入後每月 2 次基礎解讀。'
				},
				{
					num: '付費',
					title: '按次或按月',
					body: '積分包 $3.99 · 完整報告 $5.99 · 會員 $9.99/月。'
				},
				{
					num: '平台',
					title: '網頁版已上線',
					body: '7 語種直開；iPhone 版與 AI 接入開發中。'
				}
			],
			cta: '方案與價格',
			detailLink: 'YinYang Agent 詳情'
		}
	},
	products: {
		meta: {
			title: '產品與方案 — memenow',
			description: 'YinYang Agent 方案與公開價格。',
			ogTitle: '產品與方案 — memenow',
			ogDescription: '每日籤、月度免費解讀、積分包、完整報告與月度會員。'
		},
		hero: {
			title: '產品與方案',
			primaryCta: '開始排盤',
			secondaryCta: '產品詳情'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: '已上線 · 7 語種',
			summary: '八字排盤、時運追蹤與命盤對話。',
			tags: ['真太陽時排盤', '完整報告', '時運週期', '命盤對話'],
			primaryCta: '開啟應用',
			detailLink: '推演方法'
		},
		plans: {
			title: '方案與價格',
			cta: '前往定價頁',
			libraryLink: '八字資料庫'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: '真太陽時排盤、雙視角解讀、時運週期與命盤對話。',
			ogTitle: 'YinYang Agent — 動靜之間，皆有時機',
			ogDescription: '真太陽時排盤、完整報告、時運週期與命盤對話。'
		},
		hero: {
			title: '動靜之間，皆有時機',
			lede: '真太陽時排盤、子平與盲派雙視角、時運週期與命盤對話。',
			primaryCta: '開始排盤',
			secondaryCta: '方案與價格'
		},
		reading: {
			title: '核心功能',
			highlights: [
				{
					num: '01',
					title: '排盤與解讀',
					body: '干支、十神與白話對照呈現。'
				},
				{
					num: '02',
					title: '四章完整報告',
					body: '情感、事業、健康、家庭，含大運與分享卡。'
				},
				{
					num: '03',
					title: '時運週期',
					body: '日、週、月、年追蹤事業、財務、關係、健康與家庭。'
				},
				{
					num: '04',
					title: '對話與資料庫',
					body: '承接已存命盤追問，內建八字資料庫。'
				}
			]
		},
		method: {
			title: '推演方法',
			lede: '節氣定盤 → 子平與盲派雙視角 → 過往流年核驗。',
			comparison: {
				caption: 'YinYang Agent 與通用 AI 對比',
				genericLabel: '通用 AI 聊天',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: '排盤',
						generic: '常忽略時差與節氣交界',
						yinyang: '出生地真太陽時 + 天文節氣'
					},
					{
						feature: '分析',
						generic: '單次通用話術',
						yinyang: '子平調候 + 盲派格局'
					},
					{
						feature: '依據',
						generic: '只給結論，無出處',
						yinyang: '完整推演過程 + 八字資料庫'
					},
					{
						feature: '校準',
						generic: '換個問法前後矛盾',
						yinyang: '先核驗過往關鍵年份'
					},
					{
						feature: '延續',
						generic: '關掉視窗從頭開始',
						yinyang: '命盤存檔，關聯時運與對話'
					}
				]
			}
		},
		platforms: {
			title: '支援平台',
			plansCta: '方案與價格',
			libraryLink: '八字資料庫'
		}
	},
	company: {
		meta: {
			title: '關於 — memenow',
			description: 'memenow LLC，2024 年成立於美國德拉瓦州，獨立開發個人 AI 產品。',
			ogTitle: '關於 memenow',
			ogDescription: '獨立 AI 產品公司 memenow LLC，代表作 YinYang Agent。'
		},
		hero: {
			title: '關於 memenow',
			lede: '獨立開發個人 AI 產品。'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: '成立',
				foundedDesc: '獨立營運。',
				jurisdictionValue: '德拉瓦州',
				jurisdictionLabel: '註冊地',
				jurisdictionDesc: '美國 LLC。',
				localeCount: '7',
				localeLabel: '語言',
				localeDesc: '簡、繁、英、日、韓、西、法。'
			}
		},
		principles: {
			title: '產品標準',
			items: [
				{
					num: '01',
					title: '說人話',
					body: '寫清楚，不堆術語。'
				},
				{
					num: '02',
					title: '給依據',
					body: '展示推演，不黑箱。'
				},
				{
					num: '03',
					title: '不打擾',
					body: '無彈窗，明暗雙主題。'
				},
				{
					num: '04',
					title: '零追蹤',
					body: '官網無統計，應用資料可匯出或刪除。'
				}
			]
		},
		work: {
			title: '歷程',
			thanks: 'Anthropic 與 Cloudflare 提供額度贊助。',
			timeline: [
				{
					year: '2024',
					title: '成立 memenow LLC',
					body: '註冊於德拉瓦州，啟動個人 AI 研發。'
				},
				{
					year: '2025',
					title: 'YinYang Agent 上線',
					body: '發布網頁版，上線節氣排盤與雙視角解讀。'
				},
				{
					year: '2026',
					title: '7 語種與多端推進',
					body: '上線 7 語種與公開方案，推進 iPhone 版與 AI 接入。'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: '隱私政策 — memenow',
			description: 'memenow.xyz 隱私聲明。'
		},
		hero: {
			updated: '更新於 2026-11-24',
			title: '隱私政策',
			lede: '無廣告與統計腳本，僅本地保存顯示偏好。'
		},
		summaryTitle: '要點',
		summaryPoints: [
			'無第三方廣告或追蹤腳本。',
			'主題與動效偏好僅存本地，不上傳。',
			'匯出或註銷帳號致信 privacy@memenow.xyz。'
		],
		scope: {
			title: '適用範圍',
			body: '適用於 <strong>memenow LLC</strong> 營運的 <strong>memenow.xyz</strong> 公開頁面。YinYang Agent 另有應用內隱私政策與資料管理。'
		},
		data: {
			title: '本地偏好與日誌',
			p1: '本站無第三方統計或廣告。主題與動效偏好（<code class="prose-code">memenow.theme</code>、<code class="prose-code">memenow.motion</code>）僅存瀏覽器本地；語言偏好（<code class="prose-code">memenow.locale</code>）使用第一方 Cookie 維持當前語種。',
			p2: '託管商 Cloudflare 僅按安全慣例記錄基礎請求日誌（IP、瀏覽器識別、時間與路徑），不關聯個人身分。'
		},
		email: {
			title: '資料請求',
			body: '隱私與資料請求致信 <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>，一般聯繫致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>。來信僅用於回覆。'
		}
	},
	terms: {
		meta: {
			title: '使用條款 — memenow',
			description: 'memenow.xyz 使用條款。'
		},
		hero: {
			updated: '更新於 2026-11-24',
			title: '使用條款',
			lede: '服務邊界、文化參考定位與內容歸屬。'
		},
		summaryTitle: '要點',
		summaryPoints: [
			'八字內容屬文化參考，不替代醫療、心理、法律或財務建議。',
			'個人解讀與報告歸你永久保存及非商業分享。',
			'聯繫 hello@memenow.xyz 或 support@memenow.xyz。'
		],
		scope: {
			title: '適用範圍',
			body: '適用於 <strong>memenow LLC</strong> 營運的 <strong>memenow.xyz</strong> 公開頁面。YinYang Agent 另附產品條款與退款說明。'
		},
		disclaimer: {
			title: '文化參考與 AI 闡釋',
			p1: '四柱八字與五行內容源自傳統文化，僅作反思參考，<strong>不構成亦不替代醫療、心理、法律或財務建議</strong>。',
			p2: '解讀由排盤事實與 AI 輔助生成，不對未來作承諾，現實決策由你自主負責。'
		},
		warranty: {
			title: '按原樣提供',
			body: '本站內容按「原樣」提供，不作額外明示或默示擔保。'
		},
		offer: {
			title: '非金融要約',
			body: '本站內容不構成證券或金融工具要約，亦非投資建議。'
		},
		ip: {
			title: '權益歸屬',
			p1: '「memenow」與「YinYang Agent」商標及設計歸 memenow LLC 所有。',
			p2: '你在 YinYang Agent 產生的個人解讀與報告歸你永久閱讀、保存與非商業分享。'
		},
		law: {
			title: '適用法律',
			p1: '受美國德拉瓦州法律管轄（不含衝突法規則）。',
			p2: '條款諮詢致信 <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>，產品或帳單致信 <a href="mailto:support@memenow.xyz">support@memenow.xyz</a>。'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: '找不到頁面',
		serverErrorTitle: '頁面暫不可用',
		notFoundLede: '頁面不存在或已移動。',
		serverErrorLede: '載入遇到臨時問題，請稍後重試。',
		returnHome: '返回首頁',
		statusLabel: '狀態 · {status}',
		notFoundLabel: '未找到',
		errorLabel: '暫不可用'
	}
};
