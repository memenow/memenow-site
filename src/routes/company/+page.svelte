<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
</script>

<svelte:head>
	<title>Company — memenow</title>
	<meta
		name="description"
		content="memenow is a small studio in Lewes, Delaware, founded in 2024, building AI agents that think alongside us."
	/>
</svelte:head>

<EditorialHero
	eyebrowLeft="Company · Lewes, Delaware"
	eyebrowRight="Est. 2024"
	title="A small studio, on purpose."
	lede="The most useful AI is the kind that sits beside you while you work — not the kind that performs."
	cue="Scroll · 01 The studio"
	image={{
		avif: '/images/company.avif',
		webp: '/images/company.webp',
		png: '/images/company.png',
		alt: ''
	}}
/>

<Chapter id="studio" number="01" label="The studio" headless title="Where we are.">
	<p class="c-chapter__lede">
		Founded 2024 in Lewes, Delaware. A small distributed team across the United States and Greater
		China.
	</p>
</Chapter>

<Chapter id="how" number="02" label="The work" align="left" title="How we work.">
	<p class="c-chapter__lede">
		Pick a question worth asking; make it quietly answerable. Small over flashy, audit-friendly over
		opaque, patient over performative.
	</p>
</Chapter>

<Chapter id="contact" number="03" label="Contact" align="split" title="Get in touch.">
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
