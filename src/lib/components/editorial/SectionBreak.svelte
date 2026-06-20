<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		label?: string;
		class?: string;
	}

	let { label, class: className }: Props = $props();
</script>

<div class={cn('c-section-break', className)} aria-hidden="true">
	<span class="c-section-break__line"></span>
	{#if label}
		<span class="c-section-break__label">{label}</span>
	{/if}
	<span class="c-section-break__line"></span>
</div>
