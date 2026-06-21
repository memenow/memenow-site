<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import Timeline from '$lib/components/editorial/Timeline.svelte';
	import StatCard from '$lib/components/editorial/StatCard.svelte';
</script>

<svelte:head>
	<title>Company — memenow</title>
	<meta
		name="description"
		content="memenow is a small studio in Lewes, Delaware, founded in 2024, building AI you can audit and return to."
	/>
	<meta property="og:title" content="Company — memenow" />
	<meta
		property="og:description"
		content="A small studio in Lewes, Delaware. Founded 2024. AI you can audit and return to."
	/>
	<meta property="og:image" content="/og/og-company.jpeg" />
	<meta name="twitter:image" content="/og/og-company.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Company · Lewes, Delaware"
	eyebrowRight="Est. 2024"
	title="A small studio."
	lede="Founded 2024 in Lewes, Delaware. We build AI you can audit and return to, and we ship slowly because the work is meant to last."
	cue="Scroll · 01 The studio"
/>

<Chapter
	id="studio"
	number="01"
	label="The studio"
	headless
	title="Where we are."
	image={{
		avif: '/images/company.avif',
		webp: '/images/company.webp',
		png: '/images/company.png',
		alt: '',
		w: 1672,
		h: 941
	}}
>
	<p class="c-chapter__lede">
		Founded 2024 in Lewes, Delaware. A small distributed team across the United States and Greater
		China.
	</p>
	<p class="c-chapter__prose">
		Lewes is where the paperwork lives. The people are spread across time zones — some in the United
		States, some in Greater China — connected by a shared preference for quiet work over loud
		announcements.
	</p>
	<div class="c-stat-grid">
		<StatCard value="2024" label="Founded" description="Incorporated in Lewes, Delaware." />
		<StatCard
			value="1"
			label="Live product"
			description="Yinyang Agent — a Bazi reading you can return to."
		/>
		<StatCard
			value="US · CN"
			label="Distributed"
			description="A small team across the United States and Greater China."
		/>
	</div>
</Chapter>

<Chapter id="how" number="02" label="The work" align="left" title="How we work.">
	<p class="c-chapter__lede">
		Pick a question worth asking, then make it quietly answerable — small, auditable, and patient.
	</p>
	<p class="c-chapter__prose">
		We choose problems where AI can be a genuine partner — where the output is something you keep
		and revisit, not something you scroll past. A Bazi reading you save and reread. Each product
		earns its place by being useful a month after the first click, not just the first minute.
	</p>
	<p class="c-chapter__prose">
		When we don't know something, we say so. When a model stops working, we stop it. When a timeline
		needs to be longer, we extend it. None of this is heroic — it's just the discipline that makes
		the work worth trusting.
	</p>
	<Timeline
		items={[
			{
				year: '2024',
				title: 'Studio founded',
				body: 'memenow incorporated in Lewes, Delaware. First principles written down before the first line of code.'
			},
			{
				year: '2024',
				title: 'Yinyang Agent',
				body: 'First product shipped — Bazi readings as narrative, saved to your account, with Weekly Flow updates.'
			}
		]}
	/>
</Chapter>

<Chapter id="contact" number="03" label="Contact" align="split" title="Get in touch.">
	<p class="c-chapter__lede">
		Press, partnerships, and considered investor questions —
		<a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.
	</p>
	<p class="c-chapter__prose">
		We read every message and answer it ourselves — no auto-responders, no form letters.
	</p>

	{#snippet cta()}
		<ArtifactCta href="mailto:hello@memenow.xyz" palette="celestial" size="lg">
			Email hello@memenow.xyz
		</ArtifactCta>
	{/snippet}
</Chapter>
