<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Pullquote from '$lib/components/editorial/Pullquote.svelte';
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
	<p class="c-chapter__prose">
		Your birth time and place become a chart; the chart becomes a story. Yinyang Agent reads the
		Eight Pillars the way a practiced reader would — identifying the patterns, tracing the
		relationships, and writing it all down in language you don't need a glossary to follow.
	</p>
	<p class="c-chapter__prose">
		The full reading is saved to your account. You can return to it a month later, a year later, and
		find the same words waiting — not a re-rolled horoscope, but a considered document. Weekly Flow
		adds a shorter note about what's currently active, so the reading stays alive without losing its
		original shape.
	</p>
</Chapter>

<Pullquote
	quote="A reading worth keeping is worth a second look — so every one gets one."
	attribution="Why Yinyang Agent takes its time"
/>

<Chapter id="slow" number="02" label="The discipline" headless title="Why it takes its time.">
	<p class="c-chapter__lede">
		Done quickly, Bazi becomes horoscope soup. Done with patience, it becomes a partner — a way to
		ask a question and read the answer in your own time.
	</p>
	<p class="c-chapter__prose">
		Every Yinyang reading is generated, then held for review before it reaches you. Not because the
		model is unreliable, but because a reading worth keeping is worth a second look. The extra time
		is measured in minutes, not days, and it is deliberate.
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
