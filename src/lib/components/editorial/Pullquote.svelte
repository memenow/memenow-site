<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		quote: string;
		attribution?: string;
		class?: string;
		children?: Snippet;
	}

	let { quote, attribution, class: className, children }: Props = $props();
</script>

<figure class={cn('c-pullquote', className)} use:reveal>
	<blockquote class="c-pullquote__text">{quote}</blockquote>
	{#if attribution}
		<figcaption class="c-pullquote__attr">{attribution}</figcaption>
	{/if}
	{#if children}
		<div class="c-pullquote__body">{@render children()}</div>
	{/if}
</figure>
