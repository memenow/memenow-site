<script lang="ts">
	import { page } from '$app/state';
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'This path leads nowhere.' : 'A break in the signal.');
	// Always render a pre-defined user-facing copy. `page.error?.message` is set
	// by SvelteKit's `error()` helper or by an unhandled server-side throw and
	// can leak implementation details (e.g. database error strings) — server
	// observability is the right place for the original message.
	const lede = $derived(
		isNotFound
			? 'The page you were looking for has moved, been renamed, or never existed.'
			: 'Something went wrong on our end. Try again in a moment.'
	);
</script>

<svelte:head>
	<title>{status} · memenow</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<EditorialHero
	eyebrowLeft={`Status · ${status}`}
	eyebrowRight={isNotFound ? 'Not found' : 'Error'}
	{title}
	{lede}
	cue="Return · Home"
/>

<section class="c-chapter">
	<div class="c-chapter__inner c-chapter__inner--center">
		<ArtifactCta href="/" palette="celestial" size="lg">Back to home</ArtifactCta>
	</div>
</section>
