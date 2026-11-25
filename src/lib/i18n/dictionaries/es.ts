import type { MessageSchema } from './zh';

/**
 * Spanish dictionary — short, concrete, zero-filler copy matching `zh.ts`.
 */

export const es: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'Inicio',
		products: 'Productos',
		company: 'Empresa',
		contact: 'Contacto',
		legal: 'Legal',
		privacy: 'Privacidad',
		terms: 'Términos',
		skipToContent: 'Ir al contenido',
		scrollToContent: 'Desplazar abajo',
		navAriaLabel: 'Navegación principal',
		brandHomeAriaLabel: 'Inicio de memenow',
		mastheadCta: 'Abrir YinYang Agent',
		footerTagline: 'Un compañero de IA que te conoce',
		sponsorsLabel: 'Patrocinadores',
		studioRegion: 'Delaware, EE. UU.',
		rightsReserved: '© {year} memenow LLC · Todos los derechos reservados',
		theme: {
			switchToDark: 'Cambiar a tema oscuro',
			switchToLight: 'Cambiar a tema claro'
		},
		motion: {
			reduce: 'Reducir movimiento',
			allow: 'Permitir movimiento'
		},
		language: {
			menuLabel: 'Idioma',
			footerTitle: 'Idioma'
		}
	},
	catalog: {
		freeLabel: 'Gratis',
		perMonthSuffix: '/mes',
		disclaimer: 'El importe final aparece al pagar.',
		tiers: {
			dailyDecree: {
				badge: 'Gratis diario',
				title: 'Decreto diario',
				summary: 'Nota según los pilares del día.',
				features: ['Sin cuenta', 'Fuera del cupo mensual'],
				cta: 'Ver decreto'
			},
			monthlyFree: {
				badge: 'Gratis',
				title: 'Gratis mensual',
				summary: '2 lecturas base al mes.',
				features: [
					'Cuatro Pilares en lenguaje claro',
					'Contraste con el pasado',
					'Guardado en cuenta'
				],
				cta: 'Ver mi carta'
			},
			basicCredits: {
				badge: 'Recarga',
				title: 'Créditos básicos',
				summary: 'Suma 2 lecturas base.',
				features: ['Sin caducidad, acumulables', 'Se usan tras el cupo mensual'],
				cta: 'Ver créditos'
			},
			fullReport: {
				badge: 'Pago único',
				title: 'Informe completo',
				summary: 'Desbloqueo permanente por carta.',
				features: [
					'Amor, Carrera, Salud y Familia',
					'Ciclos de 10 años, previsión y base',
					'Tarjeta compartible'
				],
				cta: 'Desbloquear informe'
			},
			monthlyMember: {
				badge: 'Mensual',
				title: 'Membresía mensual',
				summary: 'Ciclos y diálogo continuo.',
				features: [
					'Ciclos diarios, semanales, mensuales y anuales',
					'Diálogo + actualizaciones temáticas',
					'5 Informes completos por ciclo'
				],
				cta: 'Ver membresía'
			}
		},
		platforms: {
			web: {
				statusLabel: 'Activo · 7 idiomas',
				title: 'Web',
				body: 'yinyang.memenow.xyz — directo en navegador.'
			},
			ios: {
				statusLabel: 'En desarrollo',
				title: 'App iPhone',
				body: 'App nativa iOS con consulta diaria y avisos.'
			},
			mcp: {
				statusLabel: 'Previsto',
				title: 'Enlaces IA',
				body: 'Conecta tu carta a tus herramientas de IA.'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — Un compañero de IA que te conoce',
			description: 'memenow LLC crea productos de IA personal, empezando por YinYang Agent.',
			ogTitle: 'memenow — Un compañero de IA que te conoce',
			ogDescription: 'YinYang Agent: carta solar, Informe completo, Ciclos de tiempo y diálogo.'
		},
		hero: {
			title: 'Un compañero de IA que te conoce',
			primaryCta: 'Conocer YinYang Agent',
			secondaryCta: 'Abrir app'
		},
		approach: {
			title: 'Principios',
			beliefs: [
				{
					num: '01',
					title: 'Memoria continua',
					body: 'Mantiene el contexto entre sesiones.'
				},
				{
					num: '02',
					title: 'Mostrar la base',
					body: 'Razonamiento junto a cada respuesta.'
				},
				{
					num: '03',
					title: 'Tus datos',
					body: 'Espacio privado. Exporta o borra cuando quieras.'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: 'Cuatro Pilares · Ciclos de tiempo · Diálogo',
			meta: 'yinyang.memenow.xyz · 7 idiomas',
			pillars: [
				{
					num: '01',
					title: 'Carta solar',
					body: 'Lugar de nacimiento y términos solares, verificada con el pasado.'
				},
				{
					num: '02',
					title: 'Informe completo',
					body: 'Amor, Carrera, Salud, Familia + ciclos de 10 años.'
				},
				{
					num: '03',
					title: 'Ciclos de tiempo',
					body: 'Seguimiento diario, semanal, mensual y anual.'
				},
				{
					num: '04',
					title: 'Diálogo con carta',
					body: 'Preguntas sobre cartas guardadas + actualizaciones.'
				}
			],
			cta: 'Ver mi carta',
			detailLink: 'Detalles'
		},
		access: {
			title: 'Acceso',
			items: [
				{
					num: 'Gratis',
					title: 'Cupo diario y mensual',
					body: 'Decreto sin registro; 2 lecturas base/mes con cuenta.'
				},
				{
					num: 'Pago',
					title: 'Por carta o mensual',
					body: 'Créditos $3.99 · Informe $5.99 · Membresía $9.99/mes.'
				},
				{
					num: 'Plataformas',
					title: 'Web activa',
					body: '7 idiomas en línea; app iPhone y enlaces IA en marcha.'
				}
			],
			cta: 'Planes y precios',
			detailLink: 'Detalles de YinYang Agent'
		}
	},
	products: {
		meta: {
			title: 'Productos y planes — memenow',
			description: 'Planes y precios públicos de YinYang Agent.',
			ogTitle: 'Productos y planes — memenow',
			ogDescription: 'Decreto diario, Gratis mensual, Créditos, Informe completo y Membresía.'
		},
		hero: {
			title: 'Productos y planes',
			primaryCta: 'Ver mi carta',
			secondaryCta: 'Detalles'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: 'Activo · 7 idiomas',
			summary: 'Cuatro Pilares, ciclos de tiempo y diálogo.',
			tags: ['Hora solar', 'Informe completo', 'Ciclos de tiempo', 'Diálogo'],
			primaryCta: 'Abrir app',
			detailLink: 'Método'
		},
		plans: {
			title: 'Planes y precios',
			cta: 'Ir a precios',
			libraryLink: 'Biblioteca BaZi'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: 'Carta solar, lectura dual, ciclos y diálogo.',
			ogTitle: 'YinYang Agent — Entre quietud y paso, hay momento',
			ogDescription: 'Carta solar, Informe completo, ciclos y diálogo.'
		},
		hero: {
			title: 'Entre quietud y paso, hay momento',
			lede: 'Carta solar, lectura dual Ziping y Mangpai, ciclos y diálogo.',
			primaryCta: 'Ver mi carta',
			secondaryCta: 'Planes y precios'
		},
		reading: {
			title: 'Funciones',
			highlights: [
				{
					num: '01',
					title: 'Carta y lectura',
					body: 'Pilares y Diez Dioses junto a texto claro.'
				},
				{
					num: '02',
					title: 'Informe en 4 capítulos',
					body: 'Amor, Carrera, Salud, Familia + ciclos y tarjeta.'
				},
				{
					num: '03',
					title: 'Ciclos de tiempo',
					body: 'Seguimiento diario a anual en cinco áreas.'
				},
				{
					num: '04',
					title: 'Diálogo y biblioteca',
					body: 'Consulta sobre cartas guardadas + Biblioteca BaZi.'
				}
			]
		},
		method: {
			title: 'Método',
			lede: 'Términos solares → análisis Ziping y Mangpai → contraste pasado.',
			comparison: {
				caption: 'YinYang Agent vs. IA genérica',
				genericLabel: 'Chat de IA genérico',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: 'Carta',
						generic: 'Omite hora solar y cambio de término',
						yinyang: 'Hora solar local + términos astronómicos'
					},
					{
						feature: 'Análisis',
						generic: 'Texto genérico en una pasada',
						yinyang: 'Equilibrio Ziping + estructura Mangpai'
					},
					{
						feature: 'Base',
						generic: 'Conclusiones sin fuente',
						yinyang: 'Traza completa + Biblioteca BaZi'
					},
					{
						feature: 'Calibración',
						generic: 'Se contradice al reformular',
						yinyang: 'Contrasta primero años clave pasados'
					},
					{
						feature: 'Continuidad',
						generic: 'Se reinicia al cerrar',
						yinyang: 'Cartas guardadas enlazadas a ciclos y chat'
					}
				]
			}
		},
		platforms: {
			title: 'Plataformas',
			plansCta: 'Planes y precios',
			libraryLink: 'Biblioteca BaZi'
		}
	},
	company: {
		meta: {
			title: 'Empresa — memenow',
			description: 'memenow LLC, fundada en 2024 en Delaware, crea productos de IA personal.',
			ogTitle: 'Sobre memenow',
			ogDescription: 'Empresa independiente de IA personal memenow LLC, creadores de YinYang Agent.'
		},
		hero: {
			title: 'Sobre memenow',
			lede: 'Productos independientes de IA personal.'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Fundación',
				foundedDesc: 'Estudio independiente.',
				jurisdictionValue: 'Delaware',
				jurisdictionLabel: 'Registro',
				jurisdictionDesc: 'LLC en EE. UU.',
				localeCount: '7',
				localeLabel: 'Idiomas',
				localeDesc: 'ZH, ZH-TW, EN, JA, KO, ES, FR.'
			}
		},
		principles: {
			title: 'Estándares',
			items: [
				{
					num: '01',
					title: 'Texto directo',
					body: 'Claro y sin tecnicismos.'
				},
				{
					num: '02',
					title: 'Sin caja negra',
					body: 'Razonamiento visible en cada respuesta.'
				},
				{
					num: '03',
					title: 'Sin distracciones',
					body: 'Sin ventanas emergentes; tema claro y oscuro.'
				},
				{
					num: '04',
					title: 'Sin rastreo',
					body: 'Sin analítica aquí; exporta o borra datos en la app.'
				}
			]
		},
		work: {
			title: 'Trayectoria',
			thanks: 'Créditos patrocinados por Anthropic y Cloudflare.',
			timeline: [
				{
					year: '2024',
					title: 'Fundación de memenow LLC',
					body: 'Constituida en Delaware; inicio en IA personal.'
				},
				{
					year: '2025',
					title: 'Lanzamiento de YinYang Agent',
					body: 'Web activa con carta solar y lectura dual.'
				},
				{
					year: '2026',
					title: '7 idiomas y nuevas plataformas',
					body: '7 idiomas y planes públicos; app iPhone y enlaces IA en marcha.'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: 'Privacidad — memenow',
			description: 'Aviso de privacidad de memenow.xyz.'
		},
		hero: {
			updated: 'ACTUALIZADO 2026-11-24',
			title: 'Política de privacidad',
			lede: 'Sin anuncios ni analítica: solo preferencias locales.'
		},
		summaryTitle: 'Resumen',
		summaryPoints: [
			'Sin anuncios ni scripts de rastreo.',
			'Tema y movimiento quedan solo en tu navegador.',
			'Escribe a privacy@memenow.xyz para exportar o borrar datos.'
		],
		scope: {
			title: 'Alcance',
			body: 'Aplica a <strong>memenow.xyz</strong> de <strong>memenow LLC</strong>. YinYang Agent tiene su propia política y control de datos.'
		},
		data: {
			title: 'Preferencias y registros',
			p1: 'Sin analítica ni anuncios. Tema y movimiento (<code class="prose-code">memenow.theme</code>, <code class="prose-code">memenow.motion</code>) quedan en almacenamiento local; idioma (<code class="prose-code">memenow.locale</code>) usa una cookie propia solo para mantener el idioma.',
			p2: 'Cloudflare registra metadatos estándar (IP, navegador, hora, ruta) solo por seguridad, sin vincular identidad.'
		},
		email: {
			title: 'Solicitudes',
			body: 'Privacidad o datos: <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>. Consultas generales: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. Solo para responder.'
		}
	},
	terms: {
		meta: {
			title: 'Términos — memenow',
			description: 'Términos de uso de memenow.xyz.'
		},
		hero: {
			updated: 'ACTUALIZADO 2026-11-24',
			title: 'Términos de uso',
			lede: 'Alcance, referencia cultural y derechos sobre tus lecturas.'
		},
		summaryTitle: 'Resumen',
		summaryPoints: [
			'Contenido cultural de reflexión; no sustituye asesoría médica, legal ni financiera.',
			'Tus lecturas son tuyas para guardar y compartir sin fines comerciales.',
			'Contacto: hello@memenow.xyz o support@memenow.xyz.'
		],
		scope: {
			title: 'Alcance',
			body: 'Aplica a <strong>memenow.xyz</strong> de <strong>memenow LLC</strong>. YinYang Agent dispone de términos y reembolsos propios.'
		},
		disclaimer: {
			title: 'Referencia cultural e IA',
			p1: 'Cuatro Pilares y Cinco Elementos son referencia cultural para reflexión personal y <strong>no sustituyen asesoría médica, psicológica, legal ni financiera</strong>.',
			p2: 'Combinan datos de carta y redacción asistida por IA, sin promesas futuras; tus decisiones dependen solo de ti.'
		},
		warranty: {
			title: 'Tal cual',
			body: 'Ofrecido «tal cual», sin garantías adicionales expresas ni implícitas.'
		},
		offer: {
			title: 'No es oferta financiera',
			body: 'Nada aquí constituye oferta de valores ni asesoría de inversión.'
		},
		ip: {
			title: 'Derechos',
			p1: 'Las marcas y diseño «memenow» y «YinYang Agent» pertenecen a memenow LLC.',
			p2: 'Tus lecturas e Informes completos son tuyos para leer, guardar y compartir sin fines comerciales.'
		},
		law: {
			title: 'Ley aplicable',
			p1: 'Regido por la ley de Delaware, sin normas de conflicto.',
			p2: 'Legal: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. Producto o pagos: <a href="mailto:support@memenow.xyz">support@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'Página no encontrada',
		serverErrorTitle: 'No disponible',
		notFoundLede: 'No existe o se ha movido.',
		serverErrorLede: 'Error temporal. Inténtalo en unos momentos.',
		returnHome: 'Volver al inicio',
		statusLabel: 'Estado · {status}',
		notFoundLabel: 'No encontrada',
		errorLabel: 'No disponible'
	}
};
