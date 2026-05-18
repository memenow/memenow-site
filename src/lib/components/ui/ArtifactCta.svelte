<!--
@component
ArtifactCta is the project's single narrative-pivot CTA primitive. It is an
anchor (`<a>`) with the diamond seal mark (`::after`), a magnetic hover
action, and two palettes — `celestial` (outlined, accent green) for outbound
references and `ritual` (filled, accent green) for in-flow conversions.

Use it for every page-level call-to-action. The project intentionally has no
`Card` component; if you need a non-interactive container, use a `<section>`
with chapter / layout primitives (`.c-chapter__inner`, `.l-stack`, etc.) and
let `ArtifactCta` be the only branded "click here" surface.
-->
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
