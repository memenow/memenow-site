<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/cn';

	type Tone = 'green' | 'pink' | 'default';

	let {
		tone = 'default',
		class: className,
		children
	}: {
		tone?: Tone;
		class?: string;
		children: Snippet;
	} = $props();
</script>

<span class={cn('c-badge', className)} data-tone={tone === 'default' ? undefined : tone}>
	{@render children()}
</span>
