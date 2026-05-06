<script lang="ts">
	import { reveal } from '$lib/utils/motion';

	type SceneImage = {
		avif?: string;
		webp?: string;
		png: string;
		alt?: string;
	};

	let {
		eyebrowLeft,
		eyebrowRight,
		title,
		lede,
		cue,
		image
	}: {
		eyebrowLeft: string;
		eyebrowRight: string;
		title: string;
		lede: string;
		cue: string;
		image?: SceneImage;
	} = $props();
</script>

<section class="c-editorial-hero" data-has-image={image ? 'true' : 'false'}>
	{#if image}
		<div class="c-editorial-hero__media" aria-hidden="true">
			<picture>
				{#if image.avif}<source srcset={image.avif} type="image/avif" />{/if}
				{#if image.webp}<source srcset={image.webp} type="image/webp" />{/if}
				<img src={image.png} alt={image.alt ?? ''} />
			</picture>
		</div>
		<div class="c-editorial-hero__scrim" aria-hidden="true"></div>
	{/if}

	<div class="c-editorial-hero__top">
		<span>{eyebrowLeft}</span>
		<span>{eyebrowRight}</span>
	</div>

	<div class="c-editorial-hero__bottom">
		<h1 class="c-editorial-hero__title" use:reveal={{ splitWords: true, threshold: 0 }}>
			{title}
		</h1>
		<p class="c-editorial-hero__lede reveal-fade" use:reveal>{lede}</p>
		<span class="c-editorial-hero__cue reveal-fade" use:reveal>{cue}</span>
	</div>
</section>
