<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import TrustedHtml from '$lib/components/ui/TrustedHtml.svelte';
	import { useMessages } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const messages = useMessages();
	const t = $derived(messages().terms);
	const toc = $derived([
		{ href: '#scope', label: t.scope.title },
		{ href: '#disclaimer', label: t.disclaimer.title },
		{ href: '#warranty', label: t.warranty.title },
		{ href: '#offer', label: t.offer.title },
		{ href: '#ip', label: t.ip.title },
		{ href: '#law', label: t.law.title }
	]);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta name="robots" content="noindex" />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft={t.hero.updated}
	title={t.hero.title}
	lede={t.hero.lede}
	scrollTarget="#overview"
/>

<section id="overview" class="c-legal-overview" aria-labelledby="terms-summary-title">
	<div class="c-legal-summary">
		<h2 id="terms-summary-title" class="c-legal-summary__title">{t.summaryTitle}</h2>
		<ul class="c-legal-summary__points">
			{#each t.summaryPoints as point (point)}
				<li>{point}</li>
			{/each}
		</ul>
		<nav class="c-legal-toc" aria-label={t.summaryTitle}>
			{#each toc as item (item.href)}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>
	</div>
</section>

<Chapter id="scope" align="left" headless title={t.scope.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.scope.body} />
	</p>
</Chapter>

<Chapter id="disclaimer" align="left" headless title={t.disclaimer.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.disclaimer.p1} />
	</p>
	<p class="c-chapter__prose">
		<TrustedHtml html={t.disclaimer.p2} />
	</p>
</Chapter>

<Chapter id="warranty" align="left" headless title={t.warranty.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.warranty.body} />
	</p>
</Chapter>

<Chapter id="offer" align="left" headless title={t.offer.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.offer.body} />
	</p>
</Chapter>

<Chapter id="ip" align="left" headless title={t.ip.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.ip.p1} />
	</p>
	<p class="c-chapter__prose">
		<TrustedHtml html={t.ip.p2} />
	</p>
</Chapter>

<Chapter id="law" align="left" headless title={t.law.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.law.p1} />
	</p>
	<p class="c-chapter__prose">
		<TrustedHtml html={t.law.p2} />
	</p>
</Chapter>
