<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/utils/motion';
	import { useMessages } from '$lib/i18n';
	import ScrollCue from '$lib/components/ui/ScrollCue.svelte';
	import type { SceneImage } from '$lib/types';

	let {
		eyebrowLeft,
		eyebrowRight,
		title,
		lede,
		scrollTarget,
		image,
		cta,
		id = 'editorial-hero'
	}: {
		eyebrowLeft?: string;
		eyebrowRight?: string;
		title: string;
		lede?: string;
		/** Optional in-page anchor (e.g. `#approach`) that enables the silent visual ScrollCue. */
		scrollTarget?: string;
		image?: SceneImage;
		cta?: Snippet;
		/** DOM id base; the section becomes `${id}` and the title `${id}-title`. */
		id?: string;
	} = $props();

	const messages = useMessages();
	const scrollLabel = $derived(messages().common.scrollToContent);
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

	{#if eyebrowLeft || eyebrowRight}
		<div class="c-editorial-hero__top reveal-fade" use:reveal>
			{#if eyebrowLeft}<span>{eyebrowLeft}</span>{/if}
			{#if eyebrowRight}<span>{eyebrowRight}</span>{/if}
		</div>
	{/if}

	<div class="c-editorial-hero__bottom">
		<h1
			id={titleId}
			class="c-editorial-hero__title"
			use:reveal={{ splitWords: true, threshold: 0, restDuringViewTransition: true }}
		>
			{title}
		</h1>
		{#if lede}
			<p class="c-editorial-hero__lede reveal-fade" use:reveal>{lede}</p>
		{/if}
		{#if cta}
			<div class="c-editorial-hero__cta reveal-fade" use:reveal>
				{@render cta()}
			</div>
		{/if}
		{#if scrollTarget}
			<div class="c-editorial-hero__scroll reveal-fade" use:reveal>
				<ScrollCue href={scrollTarget} label={scrollLabel} />
			</div>
		{/if}
	</div>
</section>
