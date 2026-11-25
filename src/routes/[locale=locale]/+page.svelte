<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import { useLocale, useMessages } from '$lib/i18n';
	import { SITE_ORIGIN, yinyangAppHref } from '$lib/data/site';

	const locale = useLocale();
	const messages = useMessages();
	const t = $derived(messages().home);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-home.jpeg" />
</svelte:head>

<EditorialHero title={t.hero.title} scrollTarget="#approach">
	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta href={`/${locale()}/products/yinyang`} variant="outline" size="lg">
				{t.hero.primaryCta}
			</ArtifactCta>
			<a
				class="c-chapter__more-link"
				href={yinyangAppHref(locale())}
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.hero.secondaryCta} →
			</a>
		</div>
	{/snippet}
</EditorialHero>

<Chapter id="approach" align="split" headless title={t.approach.title}>
	<div class="c-platform-grid c-platform-grid--stack">
		{#each t.approach.beliefs as belief (belief.num)}
			<div class="c-platform-card">
				<span class="c-platform-card__status c-platform-card__status--live">{belief.num}</span>
				<h3 class="c-platform-card__title">{belief.title}</h3>
				<p class="c-platform-card__body">{belief.body}</p>
			</div>
		{/each}
	</div>
</Chapter>

<Chapter id="flagship" align="left" headless title={t.flagship.title}>
	<div class="c-showcase">
		<div class="c-showcase__head">
			<span class="c-showcase__kicker">{t.flagship.kicker}</span>
			<span class="c-showcase__meta">{t.flagship.meta}</span>
		</div>

		<div class="c-stack-grid">
			{#each t.flagship.pillars as pillar (pillar.num)}
				<div class="c-stack-grid__item">
					<span class="c-stack-grid__num">{pillar.num}</span>
					<h3 class="c-stack-grid__title">{pillar.title}</h3>
					<p class="c-stack-grid__body">{pillar.body}</p>
				</div>
			{/each}
		</div>

		<div class="c-chapter__actions">
			<ArtifactCta
				href={yinyangAppHref(locale())}
				variant="outline"
				size="lg"
				rel="noopener noreferrer"
				target="_blank"
			>
				{t.flagship.cta}
			</ArtifactCta>
			<a class="c-chapter__more-link" href={`/${locale()}/products/yinyang`}>
				{t.flagship.detailLink} →
			</a>
		</div>
	</div>
</Chapter>

<Chapter id="access" align="left" headless title={t.access.title}>
	<div class="c-platform-grid">
		{#each t.access.items as item (item.num)}
			<div class="c-platform-card">
				<span class="c-platform-card__status c-platform-card__status--live">{item.num}</span>
				<h3 class="c-platform-card__title">{item.title}</h3>
				<p class="c-platform-card__body">{item.body}</p>
			</div>
		{/each}
	</div>

	{#snippet cta()}
		<div class="c-chapter__actions">
			<ArtifactCta href={`/${locale()}/products#plans`} variant="outline" size="lg">
				{t.access.cta}
			</ArtifactCta>
			<a class="c-chapter__more-link" href={`/${locale()}/products/yinyang`}>
				{t.access.detailLink} →
			</a>
		</div>
	{/snippet}
</Chapter>
