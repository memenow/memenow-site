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
		content="memenow is a studio building AI you can audit and return to. The first is Yinyang — a Bazi reading you can actually reread."
	/>
	<meta property="og:title" content="memenow — Make AI your partner." />
	<meta
		property="og:description"
		content="A studio in Lewes, Delaware building AI you can audit and return to — starting with Yinyang, a Bazi reading you can reread."
	/>
	<meta property="og:image" content="/og/og-home.jpeg" />
	<meta name="twitter:image" content="/og/og-home.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Studio · Lewes, Delaware"
	eyebrowRight="Est. 2024"
	title="Make AI your partner."
	lede="A partner you can audit and return to — AI that shows its work and is still there when you come back. The first is Yinyang, a Bazi reading you can actually reread."
	cue="Scroll · 01 The studio"
/>

<Chapter
	id="studio"
	number="01"
	label="The studio"
	headless
	title="We build the AI we'd want to keep."
>
	<p class="c-chapter__lede">
		Models small enough to understand, methods clear enough to check, timelines long enough to get
		right.
	</p>
	<p class="c-chapter__prose">
		We started memenow in 2024 because the loudest AI companies kept scaling ambition while shipping
		away patience. We wanted the reverse: a studio where the model is small enough to hold in your
		head, the method is open enough to audit, and the timeline is long enough to be right.
	</p>
	<p class="c-chapter__prose">
		One product lives by that standard today — Yinyang Agent, a Bazi reading you can return to. It
		won't be the last, but each thing we build has to earn its place the same way: still useful a
		month after the first click.
	</p>
</Chapter>

<Pullquote
	quote="A partner shows its work — and is still there when you come back."
	attribution="memenow studio principle"
/>

<Chapter
	id="yinyang"
	number="02"
	label="Yinyang Agent"
	align="left"
	title="A Bazi reading you can return to."
>
	<p class="c-chapter__lede">
		Your birth time in; a long-form Eight Pillars reading out — written like a thoughtful teacher,
		in plain language, sourced and saved to revisit.
	</p>
	<p class="c-chapter__prose">
		Yinyang Agent takes your birth time and place and writes a Bazi reading you can actually read —
		not a chart of symbols to decode, but a narrative you can sit with. Four Pillars, Five Elements,
		the ten-year cycles and the yearly pulses, all rendered as prose.
	</p>
	<p class="c-chapter__prose">
		The reading is saved to your account, and Weekly Flow adds a short note on what's currently
		moving. You return to it the way you return to a letter you kept — for the perspective it gives,
		read in your own time.
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

<Chapter id="contact" number="03" label="Contact" align="left" title="A studio, distributed.">
	<p class="c-chapter__lede">
		Press, partnerships, and considered investor questions —
		<a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.
	</p>
	<p class="c-chapter__prose">
		We read every message and answer it ourselves. No promise of a fast reply — but a real one, from
		a person rather than an auto-responder.
	</p>

	{#snippet cta()}
		<ArtifactCta href="mailto:hello@memenow.xyz" palette="celestial" size="lg">
			Email hello@memenow.xyz
		</ArtifactCta>
	{/snippet}
</Chapter>
