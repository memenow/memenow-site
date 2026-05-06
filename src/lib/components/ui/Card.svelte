<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn';

	type Element = 'green' | 'pink';
	type Variant = 'outlined' | 'elevated';

	let {
		variant,
		element,
		interactive = false,
		href,
		class: className,
		children
	}: {
		variant?: Variant;
		element?: Element;
		interactive?: boolean;
		href?: string;
		class?: string;
		children: Snippet;
	} = $props();

	const klass = $derived(
		cn('c-card', variant && `c-card--${variant}`, interactive && 'c-card--interactive', className)
	);
</script>

{#if href}
	<a class={klass} {href} data-element={element}>
		{@render children()}
	</a>
{:else}
	<div class={klass} data-element={element}>
		{@render children()}
	</div>
{/if}
