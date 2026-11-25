<!--
@component
ArtifactCta is the project's single narrative-pivot CTA primitive. It is an
anchor (`<a>`) with a warm accent diamond mark (`::after`), a magnetic hover
action, and two variants aligned with `DESIGN.md` — `outline` (`action-primary`,
hairline ink on paper) and `filled` (`action-secondary`, filled ink inverting on
hover).
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';
	import { magnetic } from '$lib/utils/motion';

	type Variant = 'outline' | 'filled';
	type Size = 'sm' | 'md' | 'lg';

	let {
		href,
		variant = 'outline',
		size = 'md',
		magnet = true,
		class: className,
		children,
		...rest
	}: {
		href: string;
		variant?: Variant;
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
		variant === 'filled' && 'c-artifact-cta--filled',
		size !== 'md' && `c-artifact-cta--${size}`,
		className
	)}
	{...rest}
>
	{@render children()}
</a>
