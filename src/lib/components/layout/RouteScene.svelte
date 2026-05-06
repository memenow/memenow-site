<script lang="ts">
	import type { Snippet } from 'svelte';

	type SceneImage = {
		avif?: string;
		webp?: string;
		png: string;
		alt?: string;
	};

	let {
		image,
		alt = '',
		variant = 'default',
		children
	}: {
		image?: SceneImage;
		alt?: string;
		variant?: 'default' | 'centered';
		children: Snippet;
	} = $props();
</script>

<section class="c-route-scene {variant === 'centered' ? 'c-route-scene--centered' : ''}">
	<div class="c-route-scene__media" aria-hidden="true">
		{#if image}
			<picture>
				{#if image.avif}<source srcset={image.avif} type="image/avif" />{/if}
				{#if image.webp}<source srcset={image.webp} type="image/webp" />{/if}
				<img src={image.png} alt={image.alt ?? alt} />
			</picture>
		{:else}
			<div class="c-route-scene__placeholder"></div>
		{/if}
	</div>
	<div class="c-route-scene__scrim"></div>
	<div class="c-route-scene__content">
		{@render children()}
	</div>
</section>
