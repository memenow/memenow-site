<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	type Variant = 'primary' | 'secondary' | 'ghost' | 'link' | 'on-scrim';
	type Size = 'sm' | 'md' | 'lg';

	let {
		variant = 'secondary',
		size = 'md',
		class: className,
		children,
		...rest
	}: {
		variant?: Variant;
		size?: Size;
		class?: string;
		children: Snippet;
	} & HTMLButtonAttributes = $props();
</script>

<button
	class={cn('c-button', `c-button--${variant}`, size !== 'md' && `c-button--${size}`, className)}
	{...rest}
>
	{@render children()}
</button>
