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

	let { children } = $props();

	onMount(() => {
		startLenis();
		return () => stopLenis();
	});

	type RouteFamily = 'threshold' | 'legal' | 'state';

	function resolveFamily(pathname: string): RouteFamily {
		if (
			pathname.startsWith('/privacy') ||
			pathname.startsWith('/terms') ||
			pathname.startsWith('/disclaimer')
		) {
			return 'legal';
		}
		return 'threshold';
	}

	$effect(() => {
		if (typeof document === 'undefined') return;
		const family = resolveFamily(page.url.pathname);
		document.documentElement.setAttribute('data-route-family', family);
	});
</script>

<AppShell>
	{@render children()}
</AppShell>
