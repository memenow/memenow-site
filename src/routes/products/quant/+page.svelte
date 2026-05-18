<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
</script>

<svelte:head>
	<title>Quant Research — memenow</title>
	<meta
		name="description"
		content="memenow quant research: crypto perpetuals and Mainland China A-shares. Capability brief, not an offer."
	/>
	<meta property="og:title" content="Quant Research — memenow" />
	<meta
		property="og:description"
		content="Two research tracks — crypto perpetuals and Mainland China A-shares."
	/>
	<meta property="og:image" content="/og/og-quant.jpeg" />
	<meta name="twitter:image" content="/og/og-quant.jpeg" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Product · Quant Research"
	eyebrowRight="Capability brief"
	title="Small models, repeatable edges."
	lede="Discipline beats cleverness. The model you can audit beats the model you can't."
	cue="Scroll · Disclaimer"
	image={{
		avif: '/images/products-quant.avif',
		webp: '/images/products-quant.webp',
		png: '/images/products-quant.png',
		alt: '',
		w: 1672,
		h: 941
	}}
/>

<section class="c-chapter" id="disclaimer">
	<div class="c-chapter__inner">
		<aside class="c-disclaimer-banner">
			<p class="c-disclaimer-banner__title">
				<span class="c-seal" aria-hidden="true"></span>
				Capability brief, not an offer.
			</p>
			<p class="c-disclaimer-banner__body">
				This page describes research and engineering capabilities. It is
				<strong>not an offer to sell</strong> or a solicitation to buy any security, fund interest,
				or financial instrument, and it is <strong>not investment advice</strong>. Specific
				products, when and if available, are offered only to qualified investors through compliant
				channels.
				<a href="/disclaimer">Read the full disclaimer</a>.
			</p>
		</aside>
	</div>
</section>

<Chapter
	id="crypto"
	number="01"
	label="Crypto perpetuals"
	align="split"
	title="A market that never sleeps deserves a model that does."
>
	<p class="c-chapter__lede">
		Funding-rate structure, basis, microstructure. Position limits, drawdown stops, and
		out-of-sample testing treated as gates — not commentary.
	</p>
</Chapter>

<Chapter
	id="ashares"
	number="02"
	label="A-shares"
	align="left"
	title="Mainland China, with eyes open."
>
	<p class="c-chapter__lede">
		Fundamental factors and sector flows from public disclosures. We publish assumptions, version
		data, and stop regimes that no longer hold.
	</p>
</Chapter>
