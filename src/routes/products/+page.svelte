<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
</script>

<svelte:head>
	<title>Products — memenow</title>
	<meta name="description" content="memenow's products: Yinyang Agent and Quant Research." />
</svelte:head>

<EditorialHero
	eyebrowLeft="Products"
	eyebrowRight="Updated 2026"
	title="One reading. One discipline."
	lede="Two products, one studio. A Bazi agent that reads with you, and a quant practice held to the same patience."
	cue="Scroll · 01 Yinyang Agent"
	image={{
		avif: '/images/home-hero.avif',
		webp: '/images/home-hero.webp',
		png: '/images/home-hero.png',
		alt: ''
	}}
/>

<Chapter
	id="yinyang"
	number="01"
	label="Yinyang Agent"
	banner
	title="A Bazi reading you can return to."
	image={{
		avif: '/images/products-yinyang.avif',
		webp: '/images/products-yinyang.webp',
		png: '/images/products-yinyang.png',
		alt: ''
	}}
>
	<p class="c-chapter__lede">AI-powered Eight-Pillars analysis. Read once, revisit forever.</p>

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

<Chapter
	id="quant"
	number="02"
	label="Quant Research"
	align="split"
	title="Small models, repeatable edges."
	image={{
		avif: '/images/products-quant.avif',
		webp: '/images/products-quant.webp',
		png: '/images/products-quant.png',
		alt: ''
	}}
>
	<p class="c-chapter__lede">
		Crypto perpetuals and Mainland China A-shares, run as discipline. Capability brief, not an
		offer.
	</p>

	{#snippet cta()}
		<ArtifactCta href="/products/quant" palette="ritual" size="lg">Read the brief</ArtifactCta>
	{/snippet}
</Chapter>
