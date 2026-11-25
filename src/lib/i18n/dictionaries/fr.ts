import type { MessageSchema } from './zh';

/**
 * French dictionary — short, concrete, zero-filler copy matching `zh.ts`.
 */

export const fr: MessageSchema = {
	common: {
		brand: 'memenow',
		home: 'Accueil',
		products: 'Produits',
		company: 'Société',
		contact: 'Contact',
		legal: 'Légal',
		privacy: 'Confidentialité',
		terms: 'Conditions',
		skipToContent: 'Aller au contenu',
		scrollToContent: 'Défiler vers le bas',
		navAriaLabel: 'Navigation principale',
		brandHomeAriaLabel: 'Accueil memenow',
		mastheadCta: 'Ouvrir YinYang Agent',
		footerTagline: 'Un compagnon d’IA qui vous connaît',
		sponsorsLabel: 'Sponsors',
		studioRegion: 'Delaware, États-Unis',
		rightsReserved: '© {year} memenow LLC · Tous droits réservés',
		theme: {
			switchToDark: 'Passer au thème sombre',
			switchToLight: 'Passer au thème clair'
		},
		motion: {
			reduce: 'Réduire les animations',
			allow: 'Autoriser les animations'
		},
		language: {
			menuLabel: 'Langue',
			footerTitle: 'Langue'
		}
	},
	catalog: {
		freeLabel: 'Gratuit',
		perMonthSuffix: '/mois',
		disclaimer: 'Le prix final s’affiche au paiement.',
		tiers: {
			dailyDecree: {
				badge: 'Gratuit / jour',
				title: 'Décret du jour',
				summary: 'Note issue des piliers du jour.',
				features: ['Sans compte', 'Hors quota mensuel'],
				cta: 'Décret du jour'
			},
			monthlyFree: {
				badge: 'Gratuit',
				title: 'Gratuit mensuel',
				summary: '2 lectures de base par mois.',
				features: [
					'Quatre Piliers en texte clair',
					'Vérification du passé',
					'Sauvegardé en compte'
				],
				cta: 'Lire mon thème'
			},
			basicCredits: {
				badge: 'Recharge',
				title: 'Crédits de base',
				summary: 'Ajoute 2 lectures de base.',
				features: ['Sans expiration, reportables', 'Utilisés après le quota mensuel'],
				cta: 'Voir les crédits'
			},
			fullReport: {
				badge: 'Paiement unique',
				title: 'Rapport complet',
				summary: 'Déblocage permanent par thème.',
				features: [
					'Amour, Carrière, Santé, Famille',
					'Cycles 10 ans, prévision et bases',
					'Carte partageable'
				],
				cta: 'Débloquer le rapport'
			},
			monthlyMember: {
				badge: 'Mensuel',
				title: 'Membre mensuel',
				summary: 'Cycles et dialogue continus.',
				features: [
					'Cycles quotidiens, hebdo, mensuels et annuels',
					'Dialogue + suivis thématiques',
					'5 Rapports complets par cycle'
				],
				cta: 'Voir l’abonnement'
			}
		},
		platforms: {
			web: {
				statusLabel: 'En ligne · 7 langues',
				title: 'Web',
				body: 'yinyang.memenow.xyz — direct sur navigateur.'
			},
			ios: {
				statusLabel: 'En développement',
				title: 'App iPhone',
				body: 'App native iOS pour le suivi quotidien et rappels.'
			},
			mcp: {
				statusLabel: 'Prévu',
				title: 'Liens IA',
				body: 'Reliez votre thème à vos outils IA.'
			}
		}
	},
	home: {
		meta: {
			title: 'memenow — Un compagnon d’IA qui vous connaît',
			description: 'memenow LLC développe des produits d’IA personnelle, dont YinYang Agent.',
			ogTitle: 'memenow — Un compagnon d’IA qui vous connaît',
			ogDescription: 'YinYang Agent : thème solaire, Rapport complet, Cycles de temps et dialogue.'
		},
		hero: {
			title: 'Un compagnon d’IA qui vous connaît',
			primaryCta: 'Découvrir YinYang Agent',
			secondaryCta: 'Ouvrir l’app'
		},
		approach: {
			title: 'Principes',
			beliefs: [
				{
					num: '01',
					title: 'Mémoire longue',
					body: 'Garde le contexte d’une session à l’autre.'
				},
				{
					num: '02',
					title: 'Montrer la base',
					body: 'Le raisonnement accompagne chaque réponse.'
				},
				{
					num: '03',
					title: 'Vos données',
					body: 'Espace privé. Export ou suppression à tout moment.'
				}
			]
		},
		flagship: {
			title: 'YinYang Agent',
			kicker: 'Quatre Piliers · Cycles de temps · Dialogue',
			meta: 'yinyang.memenow.xyz · 7 langues',
			pillars: [
				{
					num: '01',
					title: 'Thème solaire',
					body: 'Lieu de naissance et termes solaires, vérifié sur le passé.'
				},
				{
					num: '02',
					title: 'Rapport complet',
					body: 'Amour, Carrière, Santé, Famille + cycles de 10 ans.'
				},
				{
					num: '03',
					title: 'Cycles de temps',
					body: 'Suivi quotidien, hebdomadaire, mensuel et annuel.'
				},
				{
					num: '04',
					title: 'Dialogue sur thème',
					body: 'Questions sur thèmes enregistrés + suivis réguliers.'
				}
			],
			cta: 'Lire mon thème',
			detailLink: 'Détails'
		},
		access: {
			title: 'Accès',
			items: [
				{
					num: 'Gratuit',
					title: 'Quota quotidien et mensuel',
					body: 'Décret sans compte ; 2 lectures de base/mois connecté.'
				},
				{
					num: 'Payant',
					title: 'À l’acte ou mensuel',
					body: 'Crédits $3.99 · Rapport $5.99 · Membre $9.99/mois.'
				},
				{
					num: 'Plateformes',
					title: 'Web en ligne',
					body: '7 langues actives ; app iPhone et liens IA en cours.'
				}
			],
			cta: 'Offres et tarifs',
			detailLink: 'Détails YinYang Agent'
		}
	},
	products: {
		meta: {
			title: 'Produits et offres — memenow',
			description: 'Offres et tarifs publics de YinYang Agent.',
			ogTitle: 'Produits et offres — memenow',
			ogDescription: 'Décret du jour, Gratuit mensuel, Crédits, Rapport complet et Membre.'
		},
		hero: {
			title: 'Produits et offres',
			primaryCta: 'Lire mon thème',
			secondaryCta: 'Détails'
		},
		yinyang: {
			title: 'YinYang Agent',
			status: 'En ligne · 7 langues',
			summary: 'Quatre Piliers, cycles de temps et dialogue.',
			tags: ['Heure solaire', 'Rapport complet', 'Cycles de temps', 'Dialogue'],
			primaryCta: 'Ouvrir l’app',
			detailLink: 'Méthode'
		},
		plans: {
			title: 'Offres et tarifs',
			cta: 'Voir les tarifs',
			libraryLink: 'Bibliothèque BaZi'
		}
	},
	productYinyang: {
		meta: {
			title: 'YinYang Agent — memenow',
			description: 'Thème solaire, double lecture, cycles et dialogue.',
			ogTitle: 'YinYang Agent — Entre calme et élan, le juste tempo',
			ogDescription: 'Thème solaire, Rapport complet, cycles et dialogue.'
		},
		hero: {
			title: 'Entre calme et élan, le juste tempo',
			lede: 'Thème solaire, double lecture Ziping & Mangpai, cycles et dialogue.',
			primaryCta: 'Lire mon thème',
			secondaryCta: 'Offres et tarifs'
		},
		reading: {
			title: 'Fonctions',
			highlights: [
				{
					num: '01',
					title: 'Thème et lecture',
					body: 'Piliers et Dix Dieux face à un texte clair.'
				},
				{
					num: '02',
					title: 'Rapport 4 chapitres',
					body: 'Amour, Carrière, Santé, Famille + cycles et carte.'
				},
				{
					num: '03',
					title: 'Cycles de temps',
					body: 'Suivi du jour à l’année sur cinq domaines.'
				},
				{
					num: '04',
					title: 'Dialogue et bibliothèque',
					body: 'Questions sur thèmes archivés + Bibliothèque BaZi.'
				}
			]
		},
		method: {
			title: 'Méthode',
			lede: 'Termes solaires → double analyse Ziping & Mangpai → vérification du passé.',
			comparison: {
				caption: 'YinYang Agent vs IA générique',
				genericLabel: 'Chat IA générique',
				yinyangLabel: 'YinYang Agent',
				rows: [
					{
						feature: 'Thème',
						generic: 'Omet l’heure solaire et les termes',
						yinyang: 'Heure solaire locale + termes astronomiques'
					},
					{
						feature: 'Analyse',
						generic: 'Réponse générique en un jet',
						yinyang: 'Équilibre Ziping + structure Mangpai'
					},
					{
						feature: 'Bases',
						generic: 'Conclusions sans source',
						yinyang: 'Trace complète + Bibliothèque BaZi'
					},
					{
						feature: 'Calibrage',
						generic: 'Se contredit si reformulé',
						yinyang: 'Vérifie d’abord les années clés passées'
					},
					{
						feature: 'Continuité',
						generic: 'Repart à zéro à la fermeture',
						yinyang: 'Thèmes archivés liés aux cycles et au chat'
					}
				]
			}
		},
		platforms: {
			title: 'Plateformes',
			plansCta: 'Offres et tarifs',
			libraryLink: 'Bibliothèque BaZi'
		}
	},
	company: {
		meta: {
			title: 'Société — memenow',
			description: 'memenow LLC, fondée en 2024 au Delaware, crée des produits d’IA personnelle.',
			ogTitle: 'À propos de memenow',
			ogDescription: 'Société indépendante d’IA memenow LLC, créateurs de YinYang Agent.'
		},
		hero: {
			title: 'À propos de memenow',
			lede: 'Produits indépendants d’IA personnelle.'
		},
		studio: {
			title: 'memenow LLC',
			stats: {
				foundedYear: '2024',
				foundedLabel: 'Création',
				foundedDesc: 'Studio indépendant.',
				jurisdictionValue: 'Delaware',
				jurisdictionLabel: 'Enregistrement',
				jurisdictionDesc: 'LLC américaine.',
				localeCount: '7',
				localeLabel: 'Langues',
				localeDesc: 'ZH, ZH-TW, EN, JA, KO, ES, FR.'
			}
		},
		principles: {
			title: 'Standards',
			items: [
				{
					num: '01',
					title: 'Texte direct',
					body: 'Clair, sans jargon.'
				},
				{
					num: '02',
					title: 'Pas de boîte noire',
					body: 'Raisonnement visible sur chaque réponse.'
				},
				{
					num: '03',
					title: 'Sans distraction',
					body: 'Zéro pop-up ; thèmes clair et sombre.'
				},
				{
					num: '04',
					title: 'Zéro suivi',
					body: 'Aucune mesure ici ; export et suppression dans l’app.'
				}
			]
		},
		work: {
			title: 'Parcours',
			thanks: 'Crédits parrainés par Anthropic et Cloudflare.',
			timeline: [
				{
					year: '2024',
					title: 'Création de memenow LLC',
					body: 'Enregistrée au Delaware ; début sur l’IA personnelle.'
				},
				{
					year: '2025',
					title: 'Lancement de YinYang Agent',
					body: 'Web en ligne avec thème solaire et double lecture.'
				},
				{
					year: '2026',
					title: '7 langues et nouvelles plateformes',
					body: '7 langues et tarifs publics ; app iPhone et liens IA en cours.'
				}
			]
		}
	},
	privacy: {
		meta: {
			title: 'Confidentialité — memenow',
			description: 'Politique de confidentialité de memenow.xyz.'
		},
		hero: {
			updated: 'MIS À JOUR LE 2026-11-24',
			title: 'Politique de confidentialité',
			lede: 'Sans pub ni mesure tierce : réglages locaux uniquement.'
		},
		summaryTitle: 'L’essentiel',
		summaryPoints: [
			'Aucune pub ni script de suivi.',
			'Thème et animations restent dans votre navigateur.',
			'Écrivez à privacy@memenow.xyz pour exporter ou supprimer vos données.'
		],
		scope: {
			title: 'Champ d’application',
			body: 'Couvre <strong>memenow.xyz</strong> de <strong>memenow LLC</strong>. YinYang Agent dispose de sa propre politique et gestion des données.'
		},
		data: {
			title: 'Réglages locaux et journaux',
			p1: 'Sans mesure tierce ni pub. Thème et animations (<code class="prose-code">memenow.theme</code>, <code class="prose-code">memenow.motion</code>) restent en stockage local ; la langue (<code class="prose-code">memenow.locale</code>) utilise un cookie interne pour conserver votre choix.',
			p2: 'Cloudflare consigne des métadonnées techniques (IP, navigateur, date, chemin) uniquement pour la sécurité, sans lien d’identité.'
		},
		email: {
			title: 'Demandes',
			body: 'Confidentialité ou données : <a href="mailto:privacy@memenow.xyz">privacy@memenow.xyz</a>. Questions générales : <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. Uniquement pour répondre.'
		}
	},
	terms: {
		meta: {
			title: 'Conditions — memenow',
			description: 'Conditions d’utilisation de memenow.xyz.'
		},
		hero: {
			updated: 'MIS À JOUR LE 2026-11-24',
			title: 'Conditions d’utilisation',
			lede: 'Champ d’application, référence culturelle et droits sur vos lectures.'
		},
		summaryTitle: 'L’essentiel',
		summaryPoints: [
			'Référence culturelle ; ne remplace jamais un avis médical, juridique ou financier.',
			'Vos lectures vous appartiennent pour sauvegarde et partage non commercial.',
			'Contact : hello@memenow.xyz ou support@memenow.xyz.'
		],
		scope: {
			title: 'Champ d’application',
			body: 'Couvre <strong>memenow.xyz</strong> de <strong>memenow LLC</strong>. YinYang Agent possède ses propres conditions et règles de remboursement.'
		},
		disclaimer: {
			title: 'Référence culturelle et IA',
			p1: 'Quatre Piliers et Cinq Éléments relèvent de la tradition culturelle à fin de réflexion et <strong>ne remplacent pas un conseil médical, psychologique, juridique ou financier</strong>.',
			p2: 'Ils associent données du thème et rédaction assistée par IA, sans promesse sur l’avenir ; vos décisions vous appartiennent.'
		},
		warranty: {
			title: 'En l’état',
			body: 'Fourni « en l’état », sans garantie supplémentaire expresse ou implicite.'
		},
		offer: {
			title: 'Ni offre financière',
			body: 'Ne constitue ni offre de titres ni conseil en investissement.'
		},
		ip: {
			title: 'Droits',
			p1: 'Les marques et le design « memenow » et « YinYang Agent » appartiennent à memenow LLC.',
			p2: 'Vos lectures et Rapports complets restent vôtres pour lecture, sauvegarde et partage non commercial.'
		},
		law: {
			title: 'Droit applicable',
			p1: 'Régi par le droit du Delaware, hors règles de conflit.',
			p2: 'Juridique : <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>. Produit ou facturation : <a href="mailto:support@memenow.xyz">support@memenow.xyz</a>.'
		}
	},
	error: {
		meta: {
			title: '{status} · memenow'
		},
		notFoundTitle: 'Page introuvable',
		serverErrorTitle: 'Indisponible',
		notFoundLede: 'Introuvable ou déplacée.',
		serverErrorLede: 'Incident temporaire. Réessayez bientôt.',
		returnHome: 'Retour accueil',
		statusLabel: 'Statut · {status}',
		notFoundLabel: 'Introuvable',
		errorLabel: 'Indisponible'
	}
};
