<script lang="ts">
	// Client-only Threlte canvas. This module (and all of three.js) is reached
	// solely via a dynamic import() in WorldLayer, so three never enters the SSR /
	// Workers bundle — it is code-split into an async client chunk.
	import { Canvas } from '@threlte/core';
	import { WebGLRenderer, NoToneMapping } from 'three';
	import WorldScene from './WorldScene.svelte';

	// powerPreference 'default' avoids forcing a discrete-GPU switch for chrome that
	// sits behind text (and sidesteps the WebGL-spec rule that 'high-performance' is
	// ignored unless both context-loss listeners exist). alpha keeps the canvas
	// transparent so the per-route fog shows through the painted layers.
	function createRenderer(canvas: HTMLCanvasElement) {
		return new WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			powerPreference: 'default'
		});
	}
</script>

<!-- NoToneMapping renders the curated painting with its authored colors (the AgX
     default would shift the indigo + warm moon). -->
<Canvas {createRenderer} renderMode="on-demand" dpr={[1, 2]} toneMapping={NoToneMapping}>
	<WorldScene />
</Canvas>
