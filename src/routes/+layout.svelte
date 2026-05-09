<script lang="ts">
	import '@fontsource-variable/manrope/wght.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import './layout.css';
	import AppShell from '$lib/components/layout/AppShell.svelte';
	import { startLenis, stopLenis } from '$lib/utils/motion';
	import { resolveRouteFamily } from '$lib/utils/route-family';

	let { children } = $props();

	onMount(() => {
		startLenis();
		return () => stopLenis();
	});

	$effect(() => {
		if (typeof document === 'undefined') return;
		// SSR seeds this attribute via hooks.server.ts; this effect is the SPA
		// navigation fallback (hooks don't run on client-side transitions).
		const family = resolveRouteFamily(page.url.pathname);
		document.documentElement.setAttribute('data-route-family', family);
	});
</script>

<AppShell>
	{@render children()}
</AppShell>
