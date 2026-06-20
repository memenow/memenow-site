<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Pullquote from '$lib/components/editorial/Pullquote.svelte';
</script>

<svelte:head>
	<title>memenow — Make AI your partner.</title>
	<meta
		name="description"
		content="memenow is a studio building AI agents that think alongside us — for clarity in life, and discipline in markets."
	/>
	<meta property="og:title" content="memenow — Make AI your partner." />
	<meta
		property="og:description"
		content="A studio in Lewes, Delaware building AI agents for clarity in life and discipline in markets."
	/>
	<meta property="og:image" content="/og/og-home.jpeg" />
	<meta name="twitter:image" content="/og/og-home.jpeg" />
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
		alt: '',
		w: 1672,
		h: 941
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
	<p class="c-chapter__prose">
		We started memenow in 2024 because the loudest AI companies were scaling up ambition and
		shipping down patience. We wanted the opposite: a studio where the model is small enough to
		understand, the method is clear enough to audit, and the timeline is long enough to be right.
	</p>
	<p class="c-chapter__prose">
		Two products carry that posture today — Yinyang Agent for personal clarity, Quant Research for
		market discipline. Neither pretends to be more than it is. Both are built to be returned to, not
		just consumed.
	</p>
</Chapter>

<Pullquote
	quote="The most useful AI is the kind that sits beside you while you work — not the kind that performs."
	attribution="memenow studio principle"
/>

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
		alt: '',
		w: 1672,
		h: 941
	}}
>
	<p class="c-chapter__lede">
		Birth chart in, narrative reading out. Eight Pillars read the way a thoughtful teacher would —
		slowly, sourced, re-readable on demand.
	</p>
	<p class="c-chapter__prose">
		Yinyang Agent takes your birth time and place and writes a Bazi reading in plain language — not
		a chart of symbols you have to decode, but a narrative you can sit with. Four Pillars, Five
		Elements, the ten-year cycles and the yearly pulses, all rendered as prose.
	</p>
	<p class="c-chapter__prose">
		The reading is saved. Weekly Flow updates what's moving. You return to it the way you return to
		a letter from someone who knows you — not for a prediction, but for a perspective.
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
	align="left"
	title="Small models, repeatable edges."
	image={{
		avif: '/images/products-quant.avif',
		webp: '/images/products-quant.webp',
		png: '/images/products-quant.png',
		alt: '',
		w: 1672,
		h: 941
	}}
>
	<p class="c-chapter__lede">
		Two research tracks — crypto perpetuals and Mainland China A-shares — run as practice, not
		performance. Capability brief, <strong>not an offer</strong>.
	</p>
	<p class="c-chapter__prose">
		We build small models — the kind you can hold in your head and audit line by line. Funding-rate
		structure in crypto, fundamental factors in A-shares: each track has a thesis, a regime filter,
		and a stop. No black boxes, no promised alphas.
	</p>
	<p class="c-chapter__prose">
		What we publish is a capability brief, not a track record. When and if a product is available,
		it goes to qualified investors through compliant channels — and the assumptions behind it are
		versioned, not hidden.
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
	<p class="c-chapter__prose">
		We read every message. We don't promise a fast reply, but we do promise a real one — from a
		person, not an auto-responder.
	</p>

	{#snippet cta()}
		<ArtifactCta href="mailto:hello@memenow.xyz" palette="celestial" size="lg">
			Email hello@memenow.xyz
		</ArtifactCta>
	{/snippet}
</Chapter>
