<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
</script>

<svelte:head>
	<title>memenow — Make AI your partner.</title>
	<meta
		name="description"
		content="memenow is a studio building AI agents that think alongside us — for clarity in life, and discipline in markets."
	/>
</svelte:head>

<EditorialHero
	eyebrowLeft="Studio · Lewes, Delaware"
	eyebrowRight="Est. 2024"
	title="Make AI your partner."
	lede="Agents that think alongside us — for clarity in life, and discipline in markets."
	cue="Scroll · 01 The studio"
	image={{
		avif: '/images/home-hero.avif',
		webp: '/images/home-hero.webp',
		png: '/images/home-hero.png',
		alt: ''
	}}
/>

<Chapter
	id="studio"
	number="01"
	label="The studio"
	headless
	title="We don't sell AI — we sit beside you."
>
	<p class="c-chapter__lede">
		Small models, audited methods, patient timelines. Each thing we ship has to keep earning its
		place.
	</p>
</Chapter>

<Chapter
	id="yinyang"
	number="02"
	label="Yinyang Agent"
	align="split"
	title="A Bazi reading you can return to."
	image={{
		avif: '/images/products-yinyang.avif',
		webp: '/images/products-yinyang.webp',
		png: '/images/products-yinyang.png',
		alt: ''
	}}
>
	<p class="c-chapter__lede">
		Birth chart in, narrative reading out. Eight Pillars read the way a thoughtful teacher would —
		slowly, sourced, re-readable on demand.
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

<Chapter
	id="quant"
	number="03"
	label="Quant Research"
	banner
	title="Small models, repeatable edges."
	image={{
		avif: '/images/products-quant.avif',
		webp: '/images/products-quant.webp',
		png: '/images/products-quant.png',
		alt: ''
	}}
>
	<p class="c-chapter__lede">
		Two research tracks — crypto perpetuals and Mainland China A-shares — run as practice, not
		performance. Capability brief, <strong>not an offer</strong>.
	</p>

	{#snippet cta()}
		<ArtifactCta href="/products/quant" palette="ritual" size="lg">Read the brief</ArtifactCta>
	{/snippet}
</Chapter>

<Chapter id="contact" number="04" label="Contact" align="left" title="A studio, distributed.">
	<p class="c-chapter__lede">
		Press, partnerships, and considered investor questions —
		<a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.
	</p>

	{#snippet cta()}
		<ArtifactCta href="mailto:hello@memenow.xyz" palette="celestial" size="lg">
			Email hello@memenow.xyz
		</ArtifactCta>
	{/snippet}
</Chapter>
