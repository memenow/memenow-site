<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
</script>

<svelte:head>
	<title>Products — memenow</title>
	<meta
		name="description"
		content="memenow's products. The first is Yinyang Agent — a Bazi reading you can return to."
	/>
	<meta property="og:title" content="Products — memenow" />
	<meta
		property="og:description"
		content="One studio, one live product so far: Yinyang Agent, a Bazi reading you can audit and return to."
	/>
	<meta property="og:image" content="/og/og-home.jpeg" />
	<meta name="twitter:image" content="/og/og-home.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Products"
	eyebrowRight="Updated 2026"
	title="What we've shipped."
	lede="One studio, one live product so far — held to a standard the next will share. This one is Yinyang."
	cue="Scroll · 01 Yinyang Agent"
/>

<Chapter
	id="yinyang"
	number="01"
	label="Yinyang Agent"
	align="left"
	title="A Bazi reading you can return to."
>
	<p class="c-chapter__lede">
		AI-powered Eight Pillars analysis. Birth time in, a long-form reading out — sourced, saved, and
		yours to revisit.
	</p>

	{#snippet cta()}
		<ArtifactCta
			href="https://yinyang.memenow.xyz"
			palette="celestial"
			size="lg"
			rel="noopener noreferrer"
			target="_blank"
		>
			Open Yinyang
		</ArtifactCta>
	{/snippet}
</Chapter>
