<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import TierGrid from '$lib/components/editorial/TierGrid.svelte';
	import { useLocale, useMessages } from '$lib/i18n';
	import { SITE_ORIGIN, yinyangAppHref } from '$lib/data/site';
	import { buildTierItems } from '$lib/data/yinyang';

	const locale = useLocale();
	const messages = useMessages();
	const t = $derived(messages().products);
	const catalog = $derived(messages().catalog);
	const tiers = $derived(buildTierItems(locale(), catalog));
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
</svelte:head>

<EditorialHero title={t.hero.title} scrollTarget="#yinyang">
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
			<a class="c-chapter__more-link" href={`/${locale()}/products/yinyang`}>
				{t.hero.secondaryCta} →
			</a>
		</div>
	{/snippet}
</EditorialHero>

<Chapter id="yinyang" align="left" headless title={t.yinyang.title}>
	<div class="c-showcase">
		<div class="c-showcase__head">
			<span class="c-showcase__kicker">{t.yinyang.status}</span>
			<span class="c-showcase__meta">yinyang.memenow.xyz</span>
		</div>

		<p class="c-chapter__lede">{t.yinyang.summary}</p>

		<ul class="c-showcase__tags">
			{#each t.yinyang.tags as tag (tag)}
				<li>{tag}</li>
			{/each}
		</ul>

		<div class="c-chapter__actions">
			<ArtifactCta
				href={yinyangAppHref(locale())}
				variant="outline"
				size="lg"
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.yinyang.primaryCta}
			</ArtifactCta>
			<a class="c-chapter__more-link" href={`/${locale()}/products/yinyang`}>
				{t.yinyang.detailLink} →
			</a>
		</div>
	</div>
</Chapter>

<Chapter id="plans" align="left" headless title={t.plans.title}>
	<TierGrid items={tiers} disclaimer={catalog.disclaimer} />

	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta
				href={yinyangAppHref(locale(), '/pricing')}
				variant="outline"
				size="lg"
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.plans.cta}
			</ArtifactCta>
			<a
				class="c-chapter__more-link"
				href={yinyangAppHref(locale(), '/library')}
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.plans.libraryLink} →
			</a>
		</div>
	{/snippet}
</Chapter>
