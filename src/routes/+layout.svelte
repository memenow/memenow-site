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

	const SITE_ORIGIN = 'https://memenow.xyz';

	let { children } = $props();

	// Absolute canonical URL for the current path (pathname only — query and hash
	// are never canonical here). Also feeds og:url so shared cards resolve back to
	// the page. noindex routes still get a canonical, which is valid.
	const canonical = $derived(new URL(page.url.pathname, SITE_ORIGIN).href);

	let scrollProgress = $state(0);

	onMount(() => {
		startLenis();

		// Reading-progress hairline. rAF-throttled so Lenis's per-frame scroll
		// updates don't thrash; reads real document scrollTop so it works with or
		// without Lenis (reduced-motion users get native scroll).
		let raf = 0;
		const measure = () => {
			raf = 0;
			const el = document.documentElement;
			const max = el.scrollHeight - el.clientHeight;
			scrollProgress = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
			// Drive the persistent world layer's parallax drift on the same tick;
			// world-layer.css reads --world-scroll and reduced motion ignores it.
			el.style.setProperty('--world-scroll', scrollProgress.toFixed(4));
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(measure);
		};
		measure();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		return () => {
			stopLenis();
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	});

	$effect(() => {
		if (typeof document === 'undefined') return;
		// SSR seeds this attribute via hooks.server.ts; this effect is the SPA
		// navigation fallback (hooks don't run on client-side transitions).
		const family = resolveRouteFamily(page.url.pathname);
		document.documentElement.setAttribute('data-route-family', family);
	});
</script>

<svelte:head>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
</svelte:head>

<!-- Reading-progress hairline: informational wayfinding, hidden from assistive
     tech. Its width transition collapses to instant under reduced motion via the
     global motion reset. -->
<div class="c-progress" aria-hidden="true">
	<div class="c-progress__bar" style="width: {scrollProgress * 100}%"></div>
</div>

<AppShell>
	{@render children()}
</AppShell>
