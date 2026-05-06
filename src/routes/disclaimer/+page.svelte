<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
</script>

<svelte:head>
	<title>Disclaimer — memenow</title>
	<meta
		name="description"
		content="memenow investor disclaimer for the Quant Research capability brief."
	/>
	<meta name="robots" content="noindex" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Legal · Disclaimer"
	eyebrowRight="Updated 2026-05-06"
	title="Capability, not an offer."
	lede="Where describing what we build ends and offering an investment begins — written explicitly so neither side can be confused."
	cue="Scroll · Read the disclaimer"
/>

<Chapter id="not-offer" number="01" label="Not an offer" title="Not an offer or solicitation.">
	<p class="c-chapter__lede">
		Information on memenow.xyz, including the
		<a href="/products/quant">Quant Research</a> page, is provided for informational purposes only.
		It is <strong>not an offer</strong> to sell or a solicitation to buy any security, fund interest,
		or financial instrument.
	</p>
</Chapter>

<Chapter id="not-advice" number="02" label="Not advice" title="Not investment advice.">
	<p class="c-chapter__lede">
		Nothing here constitutes investment, legal, tax, or accounting advice. Descriptions of research
		methods are high-level and intentionally avoid specific positions, trades, or returns.
	</p>
</Chapter>

<Chapter
	id="risks"
	number="03"
	label="Past results · Risks"
	title="Past performance, future risks."
>
	<p class="c-chapter__lede">
		Past performance — if and when discussed in private materials — does not indicate future
		results. Markets in crypto and equities are volatile, illiquid, and subject to regulatory or
		policy change.
	</p>
	<p class="c-chapter__lede">
		Investments involve substantial risk, including total loss of capital. Consult licensed advisors
		before acting on anything here.
	</p>
</Chapter>

<Chapter id="qualified" number="04" label="Qualified investors" title="Qualified investors only.">
	<p class="c-chapter__lede">
		Any specific investment product offered by memenow or its affiliates, when and if available, is
		offered <strong>only to qualified investors</strong> and only through compliant private channels under
		applicable U.S. securities laws and the laws of other relevant jurisdictions.
	</p>
</Chapter>

<Chapter id="relationship" number="05" label="No relationship" title="No relationship is formed.">
	<p class="c-chapter__lede">
		Reading this site does not create an investor, advisory, brokerage, or fiduciary relationship
		with memenow. Questions: <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a>.
	</p>
</Chapter>
