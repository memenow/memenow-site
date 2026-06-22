<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import type { SceneImage } from '$lib/types';

	let {
		eyebrowLeft,
		eyebrowRight,
		title,
		lede,
		cue,
		image,
		id = 'editorial-hero'
	}: {
		eyebrowLeft: string;
		eyebrowRight: string;
		title: string;
		lede: string;
		cue: string;
		image?: SceneImage;
		/** DOM id base; the section becomes `${id}` and the title `${id}-title`. */
		id?: string;
	} = $props();

	const titleId = $derived(`${id}-title`);
</script>

<section
	class="c-editorial-hero"
	data-has-image={image ? 'true' : 'false'}
	{id}
	aria-labelledby={titleId}
>
	{#if image}
		<div class="c-editorial-hero__media" aria-hidden="true">
			<picture>
				{#if image.avif}<source srcset={image.avif} type="image/avif" />{/if}
				{#if image.webp}<source srcset={image.webp} type="image/webp" />{/if}
				<img
					src={image.png}
					alt={image.alt ?? ''}
					width={image.w}
					height={image.h}
					loading="eager"
					decoding="async"
					fetchpriority="high"
				/>
			</picture>
		</div>
	{/if}

	<div class="c-editorial-hero__scrim" aria-hidden="true"></div>

	<div class="c-editorial-hero__top reveal-fade" use:reveal>
		<span>{eyebrowLeft}</span>
		<span>{eyebrowRight}</span>
	</div>

	<div class="c-editorial-hero__bottom">
		<h1
			id={titleId}
			class="c-editorial-hero__title"
			use:reveal={{ splitWords: true, threshold: 0, restDuringViewTransition: true }}
		>
			{title}
		</h1>
		<p class="c-editorial-hero__lede reveal-fade" use:reveal>{lede}</p>
		<span class="c-editorial-hero__cue reveal-fade" use:reveal>{cue}</span>
	</div>
</section>
