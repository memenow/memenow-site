<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import { cn } from '$lib/utils/cn';
	import type { SceneImage } from '$lib/types';

	interface Props {
		left: SceneImage;
		right: SceneImage;
		leftCaption?: string;
		rightCaption?: string;
		class?: string;
	}

	let { left, right, leftCaption, rightCaption, class: className }: Props = $props();
</script>

<div class={cn('c-image-pair', className)}>
	<figure class="c-image-pair__item" use:reveal>
		<picture>
			{#if left.avif}
				<source srcset={left.avif} type="image/avif" />
			{/if}
			{#if left.webp}
				<source srcset={left.webp} type="image/webp" />
			{/if}
			<img src={left.png} alt={left.alt ?? ''} width={left.w} height={left.h} loading="lazy" />
		</picture>
		{#if leftCaption}
			<figcaption class="c-image-pair__caption">{leftCaption}</figcaption>
		{/if}
	</figure>
	<figure class="c-image-pair__item" use:reveal>
		<picture>
			{#if right.avif}
				<source srcset={right.avif} type="image/avif" />
			{/if}
			{#if right.webp}
				<source srcset={right.webp} type="image/webp" />
			{/if}
			<img src={right.png} alt={right.alt ?? ''} width={right.w} height={right.h} loading="lazy" />
		</picture>
		{#if rightCaption}
			<figcaption class="c-image-pair__caption">{rightCaption}</figcaption>
		{/if}
	</figure>
</div>
