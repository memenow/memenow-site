<script lang="ts">
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import Chapter from '$lib/components/home/Chapter.svelte';
</script>

<svelte:head>
	<title>Privacy — memenow</title>
	<meta name="description" content="memenow.xyz privacy notice." />
	<meta name="robots" content="noindex" />
</svelte:head>

<EditorialHero
	eyebrowLeft="Legal · Privacy"
	eyebrowRight="Updated 2026-05-06"
	title="What we collect. What we don't."
	lede="memenow.xyz collects almost nothing on this site. Here is exactly what — and what stays in your browser."
	cue="Scroll · Read the notice"
/>

<Chapter id="scope" number="01" label="Scope" title="What this notice covers.">
	<p class="c-chapter__lede">
		Public pages on <strong>memenow.xyz</strong>. Products may have their own notices on their own
		surfaces.
	</p>
</Chapter>

<Chapter id="data" number="02" label="Data" title="What we collect.">
	<p class="c-chapter__lede">
		No third-party analytics, no advertising. The site keeps a single browser-local key,
		<code class="prose-code">memenow.theme</code>, for light or dark mode — never sent to us.
	</p>
	<p class="c-chapter__lede">
		Cloudflare records standard request metadata (IP, user agent, timestamp, path) for operations
		and security. We don't link it to any identity.
	</p>
</Chapter>

<Chapter id="email" number="03" label="Email" title="Email and contact.">
	<p class="c-chapter__lede">
		Write to <a href="mailto:hello@memenow.xyz">hello@memenow.xyz</a> and we keep the conversation as
		long as it stays useful, replying only to your address.
	</p>
</Chapter>

<style>
	.prose-code {
		font-family: var(--font-mono);
		font-size: 0.9em;
		background: var(--accent-green-soft);
		padding: 0.05em 0.4em;
		border-radius: var(--radius-sm);
	}
</style>
