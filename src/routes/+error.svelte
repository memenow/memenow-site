<script lang="ts">
	import { page } from '$app/state';
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';

	const status = $derived(page.status);
	const isNotFound = $derived(status === 404);
	const title = $derived(isNotFound ? 'This path leads nowhere.' : 'A break in the signal.');
	const lede = $derived(
		page.error?.message ??
			(isNotFound
				? 'The page you were looking for has moved, been renamed, or never existed.'
				: 'Something went wrong on our end. Try again in a moment.')
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
	<div class="c-chapter__inner" style="display: flex; justify-content: center;">
		<ArtifactCta href="/" palette="celestial" size="lg">Back to home</ArtifactCta>
	</div>
</section>
