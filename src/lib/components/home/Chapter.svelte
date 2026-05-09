<script lang="ts">
	import type { Snippet } from 'svelte';
	import { reveal } from '$lib/utils/motion';

	type SceneImage = {
		avif?: string;
		webp?: string;
		png: string;
		alt?: string;
	};

	type Align = 'center' | 'left' | 'split';

	let {
		id,
		number,
		label,
		title,
		image,
		align = 'center',
		banner = false,
		headless = false,
		children,
		cta
	}: {
		id?: string;
		// Required when the chapter renders a header (default). Optional when
		// `headless` hides the number/label row entirely.
		number?: string;
		label?: string;
		title: string;
		image?: SceneImage;
		align?: Align;
		banner?: boolean;
		headless?: boolean;
		children: Snippet;
		cta?: Snippet;
	} = $props();
</script>

<section
	class="c-chapter"
	class:c-chapter--align-left={align === 'left'}
	class:c-chapter--align-split={align === 'split'}
	class:c-chapter--banner={banner}
	class:c-chapter--headless={headless}
	{id}
>
	<div class="c-chapter__inner">
		<header class="c-chapter__head">
			{#if !headless && number && label}
				<span class="c-chapter__num reveal-fade" use:reveal>
					<span>{number}</span>
					<span class="c-chapter__num-label">— {label}</span>
				</span>
			{/if}
			<h2 class="c-chapter__title" use:reveal={{ splitWords: true }}>{title}</h2>
		</header>

		<div class="c-chapter__body">
			{@render children()}
		</div>

		{#if image}
			<figure class="c-chapter__media reveal-clip" use:reveal>
				<picture>
					{#if image.avif}<source srcset={image.avif} type="image/avif" />{/if}
					{#if image.webp}<source srcset={image.webp} type="image/webp" />{/if}
					<img src={image.png} alt={image.alt ?? ''} loading="lazy" decoding="async" />
				</picture>
			</figure>
		{/if}

		{#if cta}
			<div class="c-chapter__cta">{@render cta()}</div>
		{/if}
	</div>
</section>
