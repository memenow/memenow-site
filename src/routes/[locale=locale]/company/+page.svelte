<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import Timeline from '$lib/components/editorial/Timeline.svelte';
	import StatCard from '$lib/components/editorial/StatCard.svelte';
	import { useMessages } from '$lib/i18n';
	import { SITE_ORIGIN } from '$lib/data/site';

	const messages = useMessages();
	const t = $derived(messages().company);
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.ogTitle} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:image" content="{SITE_ORIGIN}/og/og-company.jpeg" />
	<meta name="twitter:image" content="{SITE_ORIGIN}/og/og-company.jpeg" />
</svelte:head>

<EditorialHero title={t.hero.title} lede={t.hero.lede} scrollTarget="#studio" />

<Chapter id="studio" align="left" headless title={t.studio.title}>
	<div class="c-stat-grid">
		<StatCard
			value={t.studio.stats.foundedYear}
			label={t.studio.stats.foundedLabel}
			description={t.studio.stats.foundedDesc}
		/>
		<StatCard
			value={t.studio.stats.jurisdictionValue}
			label={t.studio.stats.jurisdictionLabel}
			description={t.studio.stats.jurisdictionDesc}
		/>
		<StatCard
			value={t.studio.stats.localeCount}
			label={t.studio.stats.localeLabel}
			description={t.studio.stats.localeDesc}
		/>
	</div>
</Chapter>

<Chapter id="principles" align="split" headless title={t.principles.title}>
	<div class="c-stack-grid">
		{#each t.principles.items as item (item.num)}
			<div class="c-stack-grid__item">
				<span class="c-stack-grid__num">{item.num}</span>
				<h3 class="c-stack-grid__title">{item.title}</h3>
				<p class="c-stack-grid__body">{item.body}</p>
			</div>
		{/each}
	</div>
</Chapter>

<Chapter id="timeline" align="left" headless title={t.work.title}>
	<Timeline items={t.work.timeline} />
	<p class="c-chapter__prose">{t.work.thanks}</p>
</Chapter>
