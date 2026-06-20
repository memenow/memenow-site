<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import { cn } from '$lib/utils/cn';

	interface TimelineItem {
		year: string;
		title: string;
		body: string;
	}

	interface Props {
		items: TimelineItem[];
		class?: string;
	}

	let { items, class: className }: Props = $props();
</script>

<ol class={cn('c-timeline', className)}>
	{#each items as item, i (i)}
		<li class="c-timeline__item" use:reveal>
			<span class="c-timeline__year">{item.year}</span>
			<div class="c-timeline__content">
				<h3 class="c-timeline__title">{item.title}</h3>
				<p class="c-timeline__body">{item.body}</p>
			</div>
		</li>
	{/each}
</ol>
