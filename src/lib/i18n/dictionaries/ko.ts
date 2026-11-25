import type { MessageSchema } from './zh';

/**
 * Korean dictionary — short, concrete, zero-filler copy matching `zh.ts`.
 */

export const ko: MessageSchema = {
	common: {
		brand: 'memenow',
		home: '홈',
		products: '제품',
		company: '소개',
		contact: '연락처',
		legal: '약관',
		privacy: '개인정보',
		terms: '이용약관',
		skipToContent: '본문으로',
		scrollToContent: '아래로 스크롤',
		navAriaLabel: '주요 내비게이션',
		brandHomeAriaLabel: 'memenow 홈',
		mastheadCta: 'YinYang Agent 열기',
		footerTagline: '당신을 이해하는 AI 동반자',
		sponsorsLabel: '스폰서',
		studioRegion: '미국 델라웨어주',
		rightsReserved: '© {year} memenow LLC · All rights reserved',
		theme: {
			switchToDark: '다크 테마로 전환',
			switchToLight: '라이트 테마로 전환'
		},
		motion: {
			reduce: '모션 줄이기',
			allow: '모션 허용'
		},
		language: {
			menuLabel: '언어',
			footerTitle: '언어'
		}
	},
	catalog: {
		freeLabel: '무료',
		perMonthSuffix: '/월',
		disclaimer: '결제 화면 금액이 최종입니다.',
		tiers: {
			dailyDecree: {
				badge: '매일 무료',
				title: '오늘의 첨',
				summary: '오늘 간지 기반 한 줄 안내.',
				features: ['로그인 없음', '월간 무료 횟수 별도'],
				cta: '오늘의 첨'
			},
			monthlyFree: {
				badge: '무료',
				title: '월간 무료 해석',
				summary: '매월 2회 기초 배반.',
				features: ['사주·오행 쉬운 풀이', '과거 연도 대조', '계정 보관'],
				cta: '명식 보기'
			},
			basicCredits: {
				badge: '횟수 추가',
				title: '기본 크레딧',
				summary: '기초 해석 2회 추가.',
				features: ['유효기간 없음·이월', '무료 소진 후 차감'],
				cta: '크레딧 보기'
			},
			fullReport: {
				badge: '단건 해제',
				title: '전체 리포트',
				summary: '명식 1건 영구 해제.',
				features: ['애정·커리어·건강·가족 4장', '10년 대운·세운과 추론 근거', '공유용 명식 카드'],
				cta: '전체 리포트 해제'
			},
			monthlyMember: {
				badge: '월간 구독',
				title: '월간 멤버',
				summary: '시운 추적과 명식 대화.',
				features: [
					'일·주·월·연 시운 추적',
					'명식 대화·정기 주제 업데이트',
					'주기당 전체 리포트 5회'
				],
				cta: '월간 멤버 보기'
			}
		},
		platforms: {
			web: {
				statusLabel: '운영 중 · 7개 언어',
				title: '웹 버전',
				body: 'yinyang.memenow.xyz. 브라우저 즉시 실행.'
			},
			ios: {
				statusLabel: '개발 중',
				title: 'iPhone 네이티브 앱',
				body: '전용 iOS 앱. 일상 확인과 알림.'
			},
			mcp: {
				statusLabel: '계획 중',
				title: 'AI 어시스턴트 연결',
				body: '자주 쓰는 AI 도구와 연동.'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — 당신을 이해하는 AI 동반자',
			description: '개인 AI 제품을 독립 개발하는 memenow LLC. 대표작 YinYang Agent.',
			ogTitle: 'memenow — 당신을 이해하는 AI 동반자',
			ogDescription: 'YinYang Agent: 진태양시 배반, 전체 리포트, 시운 주기, 명식 대화.'
		},
		hero: {
			title: '당신을 이해하는 AI 동반자',
			primaryCta: 'YinYang Agent 보기',
			secondaryCta: '바로 열기'
		},
		approach: {
			title: '제품 원칙',
			beliefs: [
				{
					num: '01',
					title: '맥락 유지',
					body: '이전 대화에서 바로 이어갑니다.'
				},
				{
					num: '02',
					title: '근거 공개',
					body: '결론과 추론 과정을 함께 표시.'
				},
				{
					num: '03',
					title: '데이터 자율권',
					body: '개인 공간 보관, 언제든 내보내기·삭제.'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: '사주 배반 · 시운 주기 · 명식 대화',
			meta: 'yinyang.memenow.xyz · 7개 언어',
			pillars: [
				{
					num: '01',
					title: '진태양시 배반',
					body: '출생지·절기 정밀 계산, 과거 연도부터 확인.'
				},
				{
					num: '02',
					title: '4장 전체 리포트',
					body: '애정·커리어·건강·가족, 대운·세운 포함.'
				},
				{
					num: '03',
					title: '시운 주기',
					body: '일·주·월·연 흐름 추적.'
				},
				{
					num: '04',
					title: '명식 대화',
					body: '저장 명식으로 질문, 정기 주제 업데이트.'
				}
			],
			cta: '명식 보기',
			detailLink: '상세'
		},
		access: {
			title: '이용 방식',
			items: [
				{
					num: '무료',
					title: '오늘의 첨 & 월간 무료',
					body: '오늘의 첨 무로그인, 로그인 시 매월 2회 무료.'
				},
				{
					num: '유료',
					title: '단건 또는 월간',
					body: '크레딧 $3.99 · 전체 리포트 $5.99 · 멤버 $9.99/월.'
				},
				{
					num: '플랫폼',
					title: '웹 운영 중',
					body: '7개 언어 지원. iPhone 앱·AI 연결 개발 중.'
				}
			],
			cta: '플랜 및 요금',
			detailLink: 'YinYang Agent 상세'
		}
	},
	products: {
		meta: {
			title: '제품 및 플랜 — memenow',
			description: 'YinYang Agent 플랜 및 공개 요금.',
			ogTitle: '제품 및 플랜 — memenow',
			ogDescription: '오늘의 첨, 월간 무료, 크레딧, 전체 리포트, 월간 멤버.'
		},
		hero: {
			title: '제품 및 플랜',
			primaryCta: '명식 보기',
			secondaryCta: '제품 상세'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: '운영 중 · 7개 언어',
			summary: '사주 배반, 시운 추적, 명식 대화.',
			tags: ['진태양시 배반', '전체 리포트', '시운 주기', '명식 대화'],
			primaryCta: '앱 열기',
			detailLink: '해석 방법'
		},
		plans: {
			title: '플랜 및 요금',
			cta: '요금 페이지로',
			libraryLink: '명리 자료실'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: '진태양시 배반, 이중 해석, 시운 주기, 명식 대화.',
			ogTitle: 'YinYang Agent — 움직임과 멈춤 사이, 때가 있다',
			ogDescription: '진태양시 배반, 전체 리포트, 시운 주기, 명식 대화.'
		},
		hero: {
			title: '움직임과 멈춤 사이, 때가 있다',
			lede: '진태양시 배반, 자평·맹파 이중 관점, 시운 주기, 명식 대화.',
			primaryCta: '명식 보기',
			secondaryCta: '플랜 및 요금'
		},
		reading: {
			title: '핵심 기능',
			highlights: [
				{
					num: '01',
					title: '배반과 해석',
					body: '간지·십신과 쉬운 풀이를 나란히 표시.'
				},
				{
					num: '02',
					title: '4장 전체 리포트',
					body: '애정·커리어·건강·가족, 대운과 공유 카드.'
				},
				{
					num: '03',
					title: '시운 주기',
					body: '5개 영역을 일·주·월·연으로 추적.'
				},
				{
					num: '04',
					title: '대화와 자료실',
					body: '저장 명식으로 질문, 내장 명리 자료실.'
				}
			]
		},
		method: {
			title: '해석 방법',
			lede: '절기 배반 → 자평·맹파 이중 분석 → 과거 연도 대조.',
			comparison: {
				caption: 'YinYang Agent vs 일반 AI',
				genericLabel: '일반 AI 채팅',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: '배반',
						generic: '시차·절기 경계 누락 잦음',
						yinyang: '출생지 진태양시 + 천문 절기'
					},
					{
						feature: '분석',
						generic: '단발성 일반 문구',
						yinyang: '자평 조후 + 맹파 격국'
					},
					{
						feature: '근거',
						generic: '결론만 있고 출처 없음',
						yinyang: '추론 과정 + 내장 자료실'
					},
					{
						feature: '검증',
						generic: '질문 바꾸면 앞뒤 모순',
						yinyang: '과거 주요 연도 먼저 대조'
					},
					{
						feature: '연속성',
						generic: '창 닫으면 처음부터',
						yinyang: '명식 저장·시운·대화 연동'
					}
				]
			}
		},
		platforms: {
			title: '지원 플랫폼',
			plansCta: '플랜 및 요금',
			libraryLink: '명리 자료실'
		}
	},
	company: {
		meta: {
			title: '소개 — memenow',
			description: '2024년 델라웨어 설립. 개인 AI 제품을 독립 개발하는 memenow LLC.',
			ogTitle: 'memenow 소개',
			ogDescription: '독립 AI 회사 memenow LLC. 대표작 YinYang Agent.'
		},
		hero: {
			title: 'memenow 소개',
			lede: '개인 AI 제품을 독립 개발합니다.'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: '설립',
				foundedDesc: '독립 운영.',
				jurisdictionValue: '델라웨어',
				jurisdictionLabel: '등록지',
				jurisdictionDesc: '미국 LLC.',
				localeCount: '7',
				localeLabel: '언어',
				localeDesc: '간·번·영·일·한·스·프.'
			}
		},
		principles: {
			title: '제품 기준',
			items: [
				{
					num: '01',
					title: '쉬운 문장',
					body: '용어 남발 없이 핵심만.'
				},
				{
					num: '02',
					title: '근거 제시',
					body: '블랙박스 없이 추론 공개.'
				},
				{
					num: '03',
					title: '방해 없음',
					body: '팝업 없음, 라이트·다크 지원.'
				},
				{
					num: '04',
					title: '추적 제로',
					body: '사이트 통계 없음, 앱 데이터 내보내기·삭제.'
				}
			]
		},
		work: {
			title: '연혁',
			thanks: 'Anthropic·Cloudflare 크레딧 후원.',
			timeline: [
				{
					year: '2024',
					title: 'memenow LLC 설립',
					body: '델라웨어 등록, 개인 AI 개발 착수.'
				},
				{
					year: '2025',
					title: 'YinYang Agent 출시',
					body: '웹 버전 공개, 절기 배반·이중 해석.'
				},
				{
					year: '2026',
					title: '7개 언어 & 멀티 플랫폼',
					body: '7개 언어·공개 플랜, iPhone 앱·AI 연결 진행.'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: '개인정보 처리방침 — memenow',
			description: 'memenow.xyz 개인정보 처리방침.'
		},
		hero: {
			updated: '2026-11-24 업데이트',
			title: '개인정보 처리방침',
			lede: '광고·추적 없음. 화면 설정만 로컬 저장.'
		},
		summaryTitle: '요약',
		summaryPoints: [
			'제3자 광고·추적 스크립트 없음.',
			'테마·모션 설정은 브라우저에만 보관.',
			'내보내기·삭제: privacy@memenow.xyz.'
		],
		scope: {
			title: '적용 범위',
			body: '<strong>memenow LLC</strong> 운영 <strong>memenow.xyz</strong> 공개 페이지에 적용. YinYang Agent는 앱 내 별도 정책을 따릅니다.'
		},
		data: {
			title: '로컬 설정 및 로그',
			p1: '제3자 분석·광고 없음. 테마·모션(<code class="prose-code">memenow.theme</code>, <code class="prose-code">memenow.motion</code>)은 브라우저 저장, 언어(<code class="prose-code">memenow.locale</code>)는 표시용 1차 쿠키만 사용.',
			p2: 'Cloudflare는 보안용 기본 요청 메타데이터(IP, UA, 시각, 경로)만 기록하며 신원과 결합하지 않습니다.'
		},
		email: {
			title: '데이터 요청',
			body: '개인정보·데이터 요청: <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>, 일반 문의: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. 회신에만 사용.'
		}
	},
	terms: {
		meta: {
			title: '이용약관 — memenow',
			description: 'memenow.xyz 이용약관.'
		},
		hero: {
			updated: '2026-11-24 업데이트',
			title: '이용약관',
			lede: '적용 범위, 문화적 참고 기준 및 권리.'
		},
		summaryTitle: '요약',
		summaryPoints: [
			'사주 콘텐츠는 문화 참고용이며 의료·법률·재무 자문이 아닙니다.',
			'개인 해석과 리포트는 영구 보관·비상업 공유 가능.',
			'문의: hello@memenow.xyz / support@memenow.xyz.'
		],
		scope: {
			title: '적용 범위',
			body: '<strong>memenow LLC</strong> 운영 <strong>memenow.xyz</strong> 공개 페이지에 적용. YinYang Agent는 별도 약관과 환불 규정을 따릅니다.'
		},
		disclaimer: {
			title: '문화적 참고 및 AI',
			p1: '사주·오행은 전통 문화 기반 성찰 참고 자료이며 <strong>의료·심리·법률·재무 자문을 대체하지 않습니다</strong>.',
			p2: '명식 사실과 AI 작문을 결합한 해석으로 미래를 보장하지 않으며 결정 책임은 본인에게 있습니다.'
		},
		warranty: {
			title: '있는 그대로 제공',
			body: '‘있는 그대로’ 제공하며 추가 명시적·묵시적 보증은 없습니다.'
		},
		offer: {
			title: '금융 권유 아님',
			body: '증권·금융상품 매도 제안이나 투자 자문이 아닙니다.'
		},
		ip: {
			title: '권리',
			p1: '‘memenow’·‘YinYang Agent’ 상표와 디자인은 memenow LLC 소유입니다.',
			p2: '생성된 개인 해석과 리포트는 영구 열람·보관·비상업 공유할 수 있습니다.'
		},
		law: {
			title: '준거법',
			p1: '미국 델라웨어주 법(국제사법 제외)을 따릅니다.',
			p2: '약관: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>, 제품·결제: <a href="mailto:support@memenow.xyz">support@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: '페이지를 찾을 수 없습니다',
		serverErrorTitle: '일시 이용 불가',
		notFoundLede: '페이지가 없거나 이동했습니다.',
		serverErrorLede: '일시 오류가 발생했습니다. 잠시 후 다시 시도하세요.',
		returnHome: '홈으로',
		statusLabel: '상태 · {status}',
		notFoundLabel: '없음',
		errorLabel: '일시 불가'
	}
};
