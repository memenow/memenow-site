<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import { cn } from '$lib/utils/cn';

	interface Props {
		value: string;
		label: string;
		description?: string;
		class?: string;
	}

	let { value, label, description, class: className }: Props = $props();
</script>

<div class={cn('c-stat-card', className)} use:reveal>
	<span class="c-stat-card__value">{value}</span>
	<span class="c-stat-card__label">{label}</span>
	{#if description}
		<p class="c-stat-card__desc">{description}</p>
	{/if}
</div>
