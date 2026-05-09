<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import { magnetic } from '$lib/utils/motion';

	type Palette = 'celestial' | 'ritual';
	type Size = 'sm' | 'md' | 'lg';

	let {
		href,
		palette = 'celestial',
		size = 'md',
		magnet = true,
		class: className,
		children,
		...rest
	}: {
		href: string;
		palette?: Palette;
		size?: Size;
		magnet?: boolean;
		class?: string;
		children: Snippet;
	} & HTMLAnchorAttributes = $props();
</script>

<a
	{href}
	use:magnetic={magnet ? 0.22 : 0}
	class={cn(
		'c-artifact-cta',
		palette === 'ritual' && 'c-artifact-cta--ritual',
		size !== 'md' && `c-artifact-cta--${size}`,
		className
	)}
	{...rest}
>
	{@render children()}
</a>
