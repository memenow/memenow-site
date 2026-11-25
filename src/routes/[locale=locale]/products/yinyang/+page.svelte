<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import ComparisonTable from '$lib/components/editorial/ComparisonTable.svelte';
	import { useLocale, useMessages } from '$lib/i18n';
	import { SITE_ORIGIN, yinyangAppHref } from '$lib/data/site';
	import { YINYANG_PLATFORMS } from '$lib/data/yinyang';

	const locale = useLocale();
	const messages = useMessages();
	const t = $derived(messages().productYinyang);
	const catalog = $derived(messages().catalog);
	const platforms = $derived(
		YINYANG_PLATFORMS.map((platform) => ({
			...platform,
			...catalog.platforms[platform.id]
		}))
	);
	const comparisonColumns = $derived([
		{ key: 'generic', label: t.method.comparison.genericLabel },
		{ key: 'yinyang', label: t.method.comparison.yinyangLabel, highlight: true }
	]);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-yinyang.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-yinyang.jpeg" />
</svelte:head>

<EditorialHero title={t.hero.title} lede={t.hero.lede} scrollTarget="#reading">
	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta
				href={yinyangAppHref(locale())}
				variant="outline"
				size="lg"
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.hero.primaryCta}
			</ArtifactCta>
			<a class="c-chapter__more-link" href={`/${locale()}/products#plans`}>
				{t.hero.secondaryCta} →
			</a>
		</div>
	{/snippet}
</EditorialHero>

<Chapter id="reading" align="left" headless title={t.reading.title}>
	<div class="c-stack-grid">
		{#each t.reading.highlights as item (item.num)}
			<div class="c-stack-grid__item">
				<span class="c-stack-grid__num">{item.num}</span>
				<h3 class="c-stack-grid__title">{item.title}</h3>
				<p class="c-stack-grid__body">{item.body}</p>
			</div>
		{/each}
	</div>
</Chapter>

<Chapter id="method" align="left" headless title={t.method.title}>
	<p class="c-chapter__lede">{t.method.lede}</p>

	<ComparisonTable
		caption={t.method.comparison.caption}
		columns={comparisonColumns}
		rows={t.method.comparison.rows}
	/>
</Chapter>

<Chapter id="platforms" align="left" headless title={t.platforms.title}>
	<div class="c-platform-grid">
		{#each platforms as platform (platform.id)}
			<div class="c-platform-card">
				<span
					class="c-platform-card__status"
					class:c-platform-card__status--live={platform.status === 'live'}
				>
					{platform.statusLabel}
				</span>
				<h3 class="c-platform-card__title">{platform.title}</h3>
				<p class="c-platform-card__body">{platform.body}</p>
			</div>
		{/each}
	</div>

	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta href={`/${locale()}/products#plans`} variant="outline" size="lg">
				{t.platforms.plansCta}
			</ArtifactCta>
			<a
				class="c-chapter__more-link"
				href={yinyangAppHref(locale(), '/library')}
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.platforms.libraryLink} →
			</a>
		</div>
	{/snippet}
</Chapter>
