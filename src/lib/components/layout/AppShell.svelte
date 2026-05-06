<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import FloatingDock from './FloatingDock.svelte';

	let { children, footer = true }: { children: Snippet; footer?: boolean } = $props();
</script>

<main id="main" class="page-main">
	{@render children()}
</main>

{#if footer}
	<Footer />
{/if}

<FloatingDock />

<style>
	.page-main {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}
</style>
