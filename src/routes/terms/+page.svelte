<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
</script>

<svelte:head>
	<title>Terms — memenow</title>
	<meta name="description" content="memenow.xyz terms of use." />
	<meta name="robots" content="noindex" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Legal · Terms"
	eyebrowRight="Updated 2026-05-06"
	title="Plain terms, short."
	lede="The conditions under which we publish memenow.xyz."
	cue="Scroll · Read the terms"
/>

<Chapter id="scope" number="01" label="Scope" title="What these terms cover.">
	<p class="c-chapter__lede">
		Public pages on <strong>memenow.xyz</strong>. Specific products may have their own terms on
		their own surfaces.
	</p>
</Chapter>

<Chapter id="warranty" number="02" label="No warranty" title="Provided as is.">
	<p class="c-chapter__lede">
		The site is provided on an "as is" basis. We work to keep it accurate and online but make no
		warranty as to fitness, completeness, or currency.
	</p>
</Chapter>

<Chapter id="offer" number="03" label="No offer" title="Nothing here is a financial offer.">
	<p class="c-chapter__lede">
		Nothing on this site is an offer to sell, a solicitation to buy, or a recommendation regarding
		any security, fund interest, or financial instrument. See our
		<a href="/disclaimer">disclaimer</a>.
	</p>
</Chapter>

<Chapter id="law" number="04" label="Governing law" title="Delaware, United States.">
	<p class="c-chapter__lede">
		Governed by Delaware law, without regard to conflict-of-laws principles. "memenow" and the
		memenow mark are trademarks of memenow; other marks belong to their respective owners. Site text
		and design © memenow.
	</p>
	<p class="c-chapter__lede">
		We may update these terms; the "Updated" date in the header reflects the most recent revision.
		Questions: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.
	</p>
</Chapter>
