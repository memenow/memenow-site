<script lang="ts">
	// Threlte scene — runs inside <Canvas> (descendant of WorldCanvas), the only
	// place the Threlte hooks are valid. Three full-frame ink-wash planes (base /
	// mid / near, sliced by build-world-assets.py) are cover-fit to the viewport
	// in pixel space and parallaxed by scroll: the near plane drifts most, the
	// base least, so the painting gains depth as the page scrolls. A small zoom
	// margin keeps the planes overflowing the viewport, so parallax never bares an
	// edge. renderMode is on-demand: frames render only when scroll or size
	// invalidates, and reduced motion pins the scene at rest (one static frame).
	import { T, useThrelte } from '@threlte/core';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { prefersReducedMotion } from '$lib/utils/motion';

	const { size, invalidate, canvas } = useThrelte();

	// Master pixel dimensions (mirror build-world-assets.py).
	const IMG_W = 1672;
	const IMG_H = 941;
	// Overflow margin so per-layer parallax travel never reveals a plane edge.
	const PARALLAX_ZOOM = 1.12;

	// Layers, back to front. `speed` is the parallax travel as a fraction of
	// viewport height across a full-page scroll; `order` sets the stacking.
	const LAYERS = [
		{ name: 'world-base', speed: 0.012, order: 0 },
		{ name: 'world-mid', speed: 0.034, order: 1 },
		{ name: 'world-near', speed: 0.062, order: 2 }
	];

	let textures = $state<(THREE.Texture | null)[]>([null, null, null]);
	let scroll = $state(0);
	let cam = $state<THREE.OrthographicCamera>();

	function loadTexture(base: string, i: number): void {
		const tex = new THREE.Texture();
		tex.colorSpace = THREE.SRGBColorSpace;
		tex.minFilter = THREE.LinearFilter;
		tex.generateMipmaps = false;
		const img = new Image();
		img.decoding = 'async';
		img.onload = () => {
			tex.image = img;
			tex.needsUpdate = true;
			textures[i] = tex;
			invalidate();
		};
		// AVIF first; fall back to WebP once on the rare browser that can't decode it.
		img.onerror = () => {
			if (img.src.endsWith('.avif')) img.src = `/world/${base}.webp`;
		};
		img.src = `/world/${base}.avif`;
	}

	// Cover-fit scale (pixels) with the parallax overflow margin.
	const coverScale = $derived(Math.max($size.width / IMG_W, $size.height / IMG_H) * PARALLAX_ZOOM);
	const planeW = $derived(IMG_W * coverScale);
	const planeH = $derived(IMG_H * coverScale);

	onMount(() => {
		LAYERS.forEach((l, i) => loadTexture(l.name, i));

		// When the GL context is lost the scene can't paint; the static painted
		// layer behind the (transparent) canvas carries the world until it returns.
		let lost = false;
		let raf = 0;
		const measure = () => {
			raf = 0;
			// Skip work while the tab is backgrounded or the context is gone.
			if (document.hidden || lost) return;
			const v =
				parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--world-scroll')) ||
				0;
			// Honor reduced motion live: pin the scene at rest (no parallax travel).
			const next = prefersReducedMotion() ? 0 : v;
			if (next !== scroll) {
				scroll = next;
				invalidate();
			}
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(measure);
		};
		// Catch the parallax up once the tab is foregrounded again.
		const onVisibility = () => {
			if (!document.hidden) onScroll();
		};
		// Keep the context restorable (preventDefault) and let the static layer
		// stand in while it's lost; re-upload textures and repaint when it returns.
		const onLost = (e: Event) => {
			e.preventDefault();
			lost = true;
		};
		const onRestored = () => {
			lost = false;
			for (const t of textures) if (t) t.needsUpdate = true;
			invalidate();
		};

		measure();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		document.addEventListener('visibilitychange', onVisibility);
		canvas.addEventListener('webglcontextlost', onLost, false);
		canvas.addEventListener('webglcontextrestored', onRestored, false);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			document.removeEventListener('visibilitychange', onVisibility);
			canvas.removeEventListener('webglcontextlost', onLost);
			canvas.removeEventListener('webglcontextrestored', onRestored);
			if (raf) cancelAnimationFrame(raf);
			// Threlte auto-disposes geometries/materials under <T>; textures are ours.
			for (const t of textures) t?.dispose();
		};
	});

	// Keep the orthographic frustum matched to the canvas pixel size.
	$effect(() => {
		if (!cam) return;
		cam.left = -$size.width / 2;
		cam.right = $size.width / 2;
		cam.top = $size.height / 2;
		cam.bottom = -$size.height / 2;
		cam.updateProjectionMatrix();
		invalidate();
	});
</script>

<T.OrthographicCamera bind:ref={cam} makeDefault position.z={10} near={0.1} far={100} />

{#each LAYERS as layer, i (layer.name)}
	{#if textures[i]}
		<T.Mesh
			scale.x={planeW}
			scale.y={planeH}
			position.y={scroll * layer.speed * $size.height}
			renderOrder={layer.order}
		>
			<T.PlaneGeometry />
			<T.MeshBasicMaterial map={textures[i]} transparent depthTest={false} depthWrite={false} />
		</T.Mesh>
	{/if}
{/each}
