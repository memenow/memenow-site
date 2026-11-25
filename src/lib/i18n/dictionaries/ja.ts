import type { MessageSchema } from './zh';

/**
 * Japanese dictionary — short, concrete, zero-filler copy matching `zh.ts`.
 */

export const ja: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'ホーム',
		products: '製品',
		company: '会社',
		contact: '連絡先',
		legal: '規約',
		privacy: 'プライバシー',
		terms: '利用規約',
		skipToContent: '本文へ',
		scrollToContent: '下へスクロール',
		navAriaLabel: 'メインナビゲーション',
		brandHomeAriaLabel: 'memenow ホーム',
		mastheadCta: 'YinYang Agent を開く',
		footerTagline: 'あなたを理解する AI パートナー',
		sponsorsLabel: 'スポンサー',
		studioRegion: '米国デラウェア州',
		rightsReserved: '© {year} memenow LLC · All rights reserved',
		theme: {
			switchToDark: 'ダークテーマに切替',
			switchToLight: 'ライトテーマに切替'
		},
		motion: {
			reduce: '動きを減らす',
			allow: '動きを許可'
		},
		language: {
			menuLabel: '言語',
			footerTitle: '言語'
		}
	},
	catalog: {
		freeLabel: '無料',
		perMonthSuffix: '/月',
		disclaimer: '決済画面の金額が最終です。',
		tiers: {
			dailyDecree: {
				badge: '毎日無料',
				title: '日めくり籤',
				summary: '当日の干支による目安。',
				features: ['ログイン不要', '月間無料枠とは別'],
				cta: '今日の一籤'
			},
			monthlyFree: {
				badge: '無料',
				title: '月間無料鑑定',
				summary: '毎月2回の基礎排盤。',
				features: ['四柱・五行の平易な解説', '過去の年運照合', 'アカウント保存'],
				cta: '命式を見る'
			},
			basicCredits: {
				badge: '回数追加',
				title: '基本クレジット',
				summary: '基礎鑑定を2回追加。',
				features: ['有効期限なし・繰越可', '無料枠消費後に利用'],
				cta: 'クレジットを見る'
			},
			fullReport: {
				badge: '単発解放',
				title: '完全レポート',
				summary: '命式1件を永続解放。',
				features: ['恋愛・仕事・健康・家庭の4章', '10年大運・年運と推論根拠', '共有用命式カード'],
				cta: '完全レポートを解放'
			},
			monthlyMember: {
				badge: '月額',
				title: '月額メンバー',
				summary: '継続的な時運と対話。',
				features: ['日・週・月・年の時運追跡', '命式対話・定期テーマ更新', '各期5回の完全レポート'],
				cta: '月額プランを見る'
			}
		},
		platforms: {
			web: {
				statusLabel: '公開中 · 7言語',
				title: 'Web版',
				body: 'yinyang.memenow.xyz。ブラウザで即利用。'
			},
			ios: {
				statusLabel: '開発中',
				title: 'iPhoneネイティブ版',
				body: '専用iOSアプリ。日常確認と通知。'
			},
			mcp: {
				statusLabel: '計画中',
				title: 'AIアシスタント連携',
				body: 'お使いのAIツールと接続。'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — あなたを理解する AI パートナー',
			description: '独立してパーソナル AI 製品を開発する memenow LLC。代表作 YinYang Agent。',
			ogTitle: 'memenow — あなたを理解する AI パートナー',
			ogDescription: 'YinYang Agent：真太陽時排盤、完全レポート、時運サイクル、命式対話。'
		},
		hero: {
			title: 'あなたを理解する AI パートナー',
			primaryCta: 'YinYang Agent を見る',
			secondaryCta: '直接開く'
		},
		approach: {
			title: '製品方針',
			beliefs: [
				{
					num: '01',
					title: '文脈の継続',
					body: '前回の続きから話せる。'
				},
				{
					num: '02',
					title: '根拠の提示',
					body: '結論と推論の筋道を併記。'
				},
				{
					num: '03',
					title: 'データ管理',
					body: '私的領域に保存。随時出力・削除。'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: '四柱排盤 · 時運サイクル · 命式対話',
			meta: 'yinyang.memenow.xyz · 7言語',
			pillars: [
				{
					num: '01',
					title: '真太陽時排盤',
					body: '出生地と節気で算出し、過去年運から照合。'
				},
				{
					num: '02',
					title: '4章完全レポート',
					body: '恋愛・仕事・健康・家庭、大運・年運付き。'
				},
				{
					num: '03',
					title: '時運サイクル',
					body: '日・週・月・年のリズムを追跡。'
				},
				{
					num: '04',
					title: '命式対話',
					body: '保存命式で質問、テーマ別定期更新。'
				}
			],
			cta: '命式を見る',
			detailLink: '詳細'
		},
		access: {
			title: '利用方法',
			items: [
				{
					num: '無料',
					title: '日めくり籤と月間枠',
					body: '日めくり籤はログイン不要。ログイン後、毎月2回無料。'
				},
				{
					num: '有料',
					title: '都度または月額',
					body: 'クレジット $3.99 · 完全レポート $5.99 · 月額 $9.99/月。'
				},
				{
					num: '環境',
					title: 'Web版公開中',
					body: '7言語対応。iPhone版とAI連携を開発中。'
				}
			],
			cta: 'プランと料金',
			detailLink: 'YinYang Agent 詳細'
		}
	},
	products: {
		meta: {
			title: '製品とプラン — memenow',
			description: 'YinYang Agent のプランと公開料金。',
			ogTitle: '製品とプラン — memenow',
			ogDescription: '日めくり籤、月間無料鑑定、クレジット、完全レポート、月額メンバー。'
		},
		hero: {
			title: '製品とプラン',
			primaryCta: '命式を見る',
			secondaryCta: '詳細'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: '公開中 · 7言語',
			summary: '四柱排盤、時運追跡、命式対話。',
			tags: ['真太陽時排盤', '完全レポート', '時運サイクル', '命式対話'],
			primaryCta: 'アプリを開く',
			detailLink: '推論方法'
		},
		plans: {
			title: 'プランと料金',
			cta: '料金ページへ',
			libraryLink: '八字資料集'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: '真太陽時排盤、二視点読解、時運サイクル、命式対話。',
			ogTitle: 'YinYang Agent — 動静のあいだに、時がある',
			ogDescription: '真太陽時排盤、完全レポート、時運サイクル、命式対話。'
		},
		hero: {
			title: '動静のあいだに、時がある',
			lede: '真太陽時排盤、子平・盲派の二視点、時運サイクル、命式対話。',
			primaryCta: '命式を見る',
			secondaryCta: 'プランと料金'
		},
		reading: {
			title: '主な機能',
			highlights: [
				{
					num: '01',
					title: '排盤と解説',
					body: '干支・通変星と平易な解説を並置。'
				},
				{
					num: '02',
					title: '4章完全レポート',
					body: '恋愛・仕事・健康・家庭、大運と共有カード。'
				},
				{
					num: '03',
					title: '時運サイクル',
					body: '5領域の流れを日・週・月・年で追跡。'
				},
				{
					num: '04',
					title: '対話と資料集',
					body: '保存命式で質問、内蔵の八字資料集付き。'
				}
			]
		},
		method: {
			title: '推論方法',
			lede: '節気排盤 → 子平・盲派の二視点 → 過去年運の照合。',
			comparison: {
				caption: 'YinYang Agent と汎用 AI の比較',
				genericLabel: '汎用 AI チャット',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: '排盤',
						generic: '時差や節気境界を落としやすい',
						yinyang: '出生地の真太陽時＋天文節気'
					},
					{
						feature: '分析',
						generic: '一度きりの汎用文言',
						yinyang: '子平調候＋盲派格局'
					},
					{
						feature: '根拠',
						generic: '結論のみで出典なし',
						yinyang: '推論過程＋内蔵八字資料集'
					},
					{
						feature: '照合',
						generic: '聞き方で内容がぶれる',
						yinyang: '過去の節目年を先に確認'
					},
					{
						feature: '継続',
						generic: '閉じると最初から',
						yinyang: '命式を保存し時運・対話へ連動'
					}
				]
			}
		},
		platforms: {
			title: '対応環境',
			plansCta: 'プランと料金',
			libraryLink: '八字資料集'
		}
	},
	company: {
		meta: {
			title: '会社情報 — memenow',
			description: '2024年米国デラウェア州設立。パーソナル AI を独立開発する memenow LLC。',
			ogTitle: 'memenow について',
			ogDescription: '独立 AI 製品会社 memenow LLC。代表作 YinYang Agent。'
		},
		hero: {
			title: 'memenow について',
			lede: 'パーソナル AI 製品を独立開発。'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: '設立',
				foundedDesc: '独立運営。',
				jurisdictionValue: 'デラウェア',
				jurisdictionLabel: '登記地',
				jurisdictionDesc: '米国 LLC。',
				localeCount: '7',
				localeLabel: '言語',
				localeDesc: '簡・繁・英・日・韓・西・仏。'
			}
		},
		principles: {
			title: '製品基準',
			items: [
				{
					num: '01',
					title: '明快な言葉',
					body: '専門用語を並べず端的に書く。'
				},
				{
					num: '02',
					title: '根拠を示す',
					body: 'ブラックボックスにしない。'
				},
				{
					num: '03',
					title: '邪魔をしない',
					body: 'ポップアップなし、明暗テーマ対応。'
				},
				{
					num: '04',
					title: '追跡ゼロ',
					body: 'サイト解析なし。アプリデータは随時出力・削除。'
				}
			]
		},
		work: {
			title: '沿革',
			thanks: 'Anthropic・Cloudflare よりクレジット提供。',
			timeline: [
				{
					year: '2024',
					title: 'memenow LLC 設立',
					body: 'デラウェア州登記、パーソナル AI 開発開始。'
				},
				{
					year: '2025',
					title: 'YinYang Agent 公開',
					body: 'Web版リリース。節気排盤と二視点読解。'
				},
				{
					year: '2026',
					title: '7言語とマルチ展開',
					body: '7言語と公開プラン整備。iPhone版・AI連携を開発中。'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: 'プライバシーポリシー — memenow',
			description: 'memenow.xyz のプライバシー方針。'
		},
		hero: {
			updated: '2026-11-24 更新',
			title: 'プライバシーポリシー',
			lede: '広告・解析スクリプトなし。表示設定のみ端末保存。'
		},
		summaryTitle: '要点',
		summaryPoints: [
			'第三者の広告・追跡スクリプトなし。',
			'テーマ・動き設定は端末内のみに保存。',
			'出力・削除は privacy@memenow.xyz へ。'
		],
		scope: {
			title: '適用範囲',
			body: '<strong>memenow LLC</strong> 運営の <strong>memenow.xyz</strong> 公開ページに適用。YinYang Agent は別途アプリ内規定を持ちます。'
		},
		data: {
			title: '端末保存とログ',
			p1: '第三者解析・広告なし。テーマと動き設定（<code class="prose-code">memenow.theme</code>、<code class="prose-code">memenow.motion</code>）はブラウザ内保存、言語（<code class="prose-code">memenow.locale</code>）は表示維持用の第一者Cookieのみ使用。',
			p2: 'Cloudflare は安全確保のため基本アクセス情報（IP、UA、日時、パス）のみ記録し、個人特定には使いません。'
		},
		email: {
			title: 'データ請求',
			body: 'プライバシー・データ請求は <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>、一般連絡は <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a> へ。返信のみに使用。'
		}
	},
	terms: {
		meta: {
			title: '利用規約 — memenow',
			description: 'memenow.xyz の利用規約。'
		},
		hero: {
			updated: '2026-11-24 更新',
			title: '利用規約',
			lede: '適用範囲、文化的参照の位置づけと権利帰属。'
		},
		summaryTitle: '要点',
		summaryPoints: [
			'四柱推命は文化的参考であり、医療・法律・財務助言ではありません。',
			'個人鑑定は永続的に閲覧・保存・非商用共有できます。',
			'連絡先：hello@memenow.xyz / support@memenow.xyz。'
		],
		scope: {
			title: '適用範囲',
			body: '<strong>memenow LLC</strong> 運営の <strong>memenow.xyz</strong> 公開ページに適用。YinYang Agent には個別の規約・返金規定があります。'
		},
		disclaimer: {
			title: '文化的参照とAI支援',
			p1: '四柱推命・五行は伝統文化に基づく自己省察の参考であり、<strong>医療・心理・法律・財務助言に代わるものではありません</strong>。',
			p2: '命式データとAI支援による解釈であり将来を保証しません。現実の判断はご自身の責任です。'
		},
		warranty: {
			title: '現状有姿',
			body: '本サイトは現状有姿で提供し、追加の明示・黙示保証は行いません。'
		},
		offer: {
			title: '金融勧誘の否定',
			body: '有価証券や金融商品の勧誘・投資助言を構成しません。'
		},
		ip: {
			title: '権利帰属',
			p1: '「memenow」「YinYang Agent」の商標・デザインは memenow LLC に帰属します。',
			p2: '生成された個人鑑定・完全レポートは閲覧・保存・非商用共有に永続利用できます。'
		},
		law: {
			title: '準拠法',
			p1: '米国デラウェア州法（抵触法を除く）に準拠します。',
			p2: '規約は <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>、製品・課金は <a href="mailto:support@memenow.xyz">support@memenow.xyz</a> へ。'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'ページが見つかりません',
		serverErrorTitle: '表示できません',
		notFoundLede: 'ページが存在しないか移動しました。',
		serverErrorLede: '一時的な問題が発生しました。後ほどお試しください。',
		returnHome: 'ホームへ戻る',
		statusLabel: 'ステータス · {status}',
		notFoundLabel: '未検出',
		errorLabel: '一時不可'
	}
};
