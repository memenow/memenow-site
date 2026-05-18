<script lang="ts">
	import type { Snippet } from 'svelte';
	import Footer from './Footer.svelte';
	import FloatingDock from './FloatingDock.svelte';

	let { children, footer = true }: { children: Snippet; footer?: boolean } = $props();
</script>

<a class="l-skip-link" href="#main">Skip to main content</a>

<FloatingDock />

<main id="main" class="page-main" tabindex="-1">
	{@render children()}
</main>

{#if footer}
	<Footer />
{/if}

<style>
	.page-main {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	.page-main:focus {
		outline: none;
	}
</style>
