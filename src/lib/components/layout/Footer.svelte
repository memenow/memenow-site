<script lang="ts">
	import { page } from '$app/state';
	import MemenowMark from '$lib/components/brand/MemenowMark.svelte';
	import { getFooterSections } from '$lib/data/navigation';
	import {
		LOCALE_META,
		SUPPORTED_LOCALES,
		switchLocalePath,
		useLocale,
		useMessages
	} from '$lib/i18n';

	// Official brand icon paths sourced from Simple Icons (`anthropic`, `cloudflare`).
	const SPONSORS = [
		{
			id: 'anthropic',
			name: 'Anthropic',
			href: 'https://www.anthropic.com',
			iconPath:
				'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z'
		},
		{
			id: 'cloudflare',
			name: 'Cloudflare',
			href: 'https://www.cloudflare.com',
			iconPath:
				'M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727'
		}
	] as const;

	const year = new Date().getFullYear();
	const locale = useLocale();
	const messages = useMessages();
	const common = $derived(messages().common);
	const sections = $derived(getFooterSections(locale(), common));
	const legalCopy = $derived(common.rightsReserved.replace('{year}', String(year)));
	// Every language as a plain link: the no-JS path to switch languages and a
	// crawlable list of alternates for the current page.
	const languages = $derived(
		SUPPORTED_LOCALES.map((target) => ({
			locale: target,
			href: switchLocalePath(page.url.pathname, page.url.search, target),
			meta: LOCALE_META[target]
		}))
	);
</script>

<footer class="c-footer">
	<div class="l-content">
		<div class="c-footer__inner">
			<div class="c-footer__col c-footer__col--lead">
				<MemenowMark variant="lockup-horizontal" size="md" />
				<p class="c-footer__tagline">{common.footerTagline}</p>
			</div>
			{#each sections as section (section.title)}
				<div class="c-footer__col">
					<span class="c-footer__title">{section.title}</span>
					{#each section.links as link (link.href)}
						<a
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener noreferrer' : undefined}
						>
							{link.label}
						</a>
					{/each}
				</div>
			{/each}
		</div>

		<div class="c-footer__sponsors" aria-label={common.sponsorsLabel}>
			<span class="c-footer__sponsors-label">{common.sponsorsLabel}</span>
			<ul class="c-footer__sponsors-list">
				{#each SPONSORS as sponsor (sponsor.id)}
					<li>
						<a
							class="c-footer__sponsor-link"
							href={sponsor.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								class="c-footer__sponsor-icon c-footer__sponsor-icon--{sponsor.id}"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d={sponsor.iconPath} />
							</svg>
							<span class="c-footer__sponsor-wordmark">{sponsor.name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<nav class="c-footer__locales" aria-label={common.language.footerTitle}>
			<span class="c-footer__locales-label">{common.language.footerTitle}</span>
			<ul class="c-footer__locales-list">
				{#each languages as language (language.locale)}
					<li>
						<a
							href={language.href}
							hreflang={language.meta.hreflang}
							lang={language.meta.htmlLang}
							aria-current={language.locale === locale() ? 'true' : undefined}
							data-sveltekit-noscroll
						>
							{language.meta.nativeName}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="c-footer__legal">
			<span>{legalCopy}</span>
			<span>{common.studioRegion}</span>
		</div>
	</div>
</footer>
