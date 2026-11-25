<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import TrustedHtml from '$lib/components/ui/TrustedHtml.svelte';
	import { useMessages } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const messages = useMessages();
	const t = $derived(messages().privacy);
	const toc = $derived([
		{ href: '#scope', label: t.scope.title },
		{ href: '#data', label: t.data.title },
		{ href: '#email', label: t.email.title }
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

<section id="overview" class="c-legal-overview" aria-labelledby="privacy-summary-title">
	<div class="c-legal-summary">
		<h2 id="privacy-summary-title" class="c-legal-summary__title">{t.summaryTitle}</h2>
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

<Chapter id="data" align="left" headless title={t.data.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.data.p1} />
	</p>
	<p class="c-chapter__prose">
		<TrustedHtml html={t.data.p2} />
	</p>
</Chapter>

<Chapter id="email" align="left" headless title={t.email.title}>
	<p class="c-chapter__lede">
		<TrustedHtml html={t.email.body} />
	</p>
</Chapter>

<style>
	/* `prose-code` marks the browser-storage keys inside {@html} legal copy;
	   Svelte scoping can't see injected markup, so the rule is global. */
	:global(.prose-code) {
		font-family: var(--font-mono);
		font-size: 0.9em;
		background: var(--accent-soft);
		padding: 0.05em 0.4em;
		border-radius: var(--radius-sm);
	}
</style>
