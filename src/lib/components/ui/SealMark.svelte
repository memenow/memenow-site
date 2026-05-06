<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Size = 'sm' | 'md' | 'lg';

	let { size = 'md', class: className }: { size?: Size; class?: string } = $props();
</script>

<span
	class={cn('c-seal', size === 'sm' && 'c-seal--sm', size === 'lg' && 'c-seal--lg', className)}
	aria-hidden="true"
></span>
