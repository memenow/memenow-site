<script lang="ts">
	// The Threlte canvas (and all of three.js) is imported lazily and client-only,
	// so three never enters the SSR / Workers bundle. SSR, no-WebGL browsers, and
	// the first paint before the chunk loads all fall back to the static painted
	// layer below (the same base plane the canvas renders, so the swap is seamless).
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { detectWebGL } from '$lib/utils/webgl';

	let WorldCanvas = $state<typeof import('./WorldCanvas.svelte').default | null>(null);

	onMount(async () => {
		if (!detectWebGL()) return;
		WorldCanvas = (await import('./WorldCanvas.svelte')).default;
	});
</script>

<!--
	Persistent ink-wash world behind every route: a static painted fallback, an
	optional WebGL parallax canvas (client-only), and a static film grain that
	gives flat surfaces a printed tooth. Decorative and non-interactive — hidden
	from assistive tech. Mounted once in AppShell so the whole site reads as one
	continuous world; the root layout drives the canvas parallax through the
	--world-scroll custom property (reduced motion pins it at rest). The grain is
	static and sits below all text.
-->
<div class="world-layer" aria-hidden="true">
	<div class="world-layer__static"></div>
	{#if browser && WorldCanvas}
		<div class="world-layer__canvas">
			<WorldCanvas />
		</div>
	{/if}
	<div class="world-layer__grain"></div>
</div>
