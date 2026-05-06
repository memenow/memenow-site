<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	type Variant = 'primary' | 'secondary' | 'ghost' | 'link' | 'on-scrim';
	type Size = 'sm' | 'md' | 'lg';

	let {
		href,
		variant = 'secondary',
		size = 'md',
		class: className,
		children,
		...rest
	}: {
		href: string;
		variant?: Variant;
		size?: Size;
		class?: string;
		children: Snippet;
	} & HTMLAnchorAttributes = $props();
</script>

<a
	{href}
	class={cn('c-button', `c-button--${variant}`, size !== 'md' && `c-button--${size}`, className)}
	{...rest}
>
	{@render children()}
</a>
