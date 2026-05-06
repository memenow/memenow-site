<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
</script>

<svelte:head>
	<title>Yinyang Agent — memenow</title>
	<meta name="description" content="Yinyang Agent: AI-powered Bazi readings you can return to." />
	<meta property="og:title" content="Yinyang Agent — memenow" />
	<meta
		property="og:description"
		content="An AI-powered Bazi reading you can return to. Read once, revisit forever."
	/>
	<meta property="og:image" content="/og/og-yinyang.jpeg" />
	<meta name="twitter:image" content="/og/og-yinyang.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Product · Yinyang Agent"
	eyebrowRight="Live"
	title="A Bazi reading you can return to."
	lede="Eight Pillars, read the way a thoughtful teacher would — slowly, sourced, re-readable on demand."
	cue="Scroll · 01 The reading"
	image={{
		avif: '/images/products-yinyang.avif',
		webp: '/images/products-yinyang.webp',
		png: '/images/products-yinyang.png',
		alt: ''
	}}
/>

<Chapter
	id="reading"
	number="01"
	label="The reading"
	align="left"
	title="Read once, revisit forever."
>
	<p class="c-chapter__lede">
		Long-form reading from your birth time and place. Four pillars, five elements — written as
		narrative, not a dashboard. Saved, with Weekly Flow updating what moves.
	</p>
</Chapter>

<Chapter id="slow" number="02" label="The discipline" headless title="Why slow on purpose.">
	<p class="c-chapter__lede">
		Done quickly, Bazi becomes horoscope soup. Done with patience, it becomes a partner — a way to
		ask a question and read the answer in your own time.
	</p>

	{#snippet cta()}
		<ArtifactCta
			href="https://yinyang.memenow.xyz"
			palette="celestial"
			size="lg"
			rel="noopener noreferrer"
			target="_blank"
		>
			Visit yinyang.memenow.xyz
		</ArtifactCta>
	{/snippet}
</Chapter>
