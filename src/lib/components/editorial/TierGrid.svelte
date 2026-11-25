<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import { cn } from '$lib/utils/cn';

	export interface TierItem {
		id: string;
		badge: string;
		title: string;
		priceLabel: string;
		summary: string;
		features: readonly string[];
		highlight?: boolean;
		ctaLabel?: string;
		ctaHref?: string;
	}

	interface Props {
		items: readonly TierItem[];
		disclaimer?: string;
		class?: string;
	}

	let { items, disclaimer, class: className }: Props = $props();
</script>

<div class={cn('c-tier-grid', className)}>
	{#each items as item (item.id)}
		<article class={cn('c-tier-card', item.highlight && 'c-tier-card--highlight')} use:reveal>
			<header class="c-tier-card__head">
				<span class="c-tier-card__badge">{item.badge}</span>
				<span class="c-tier-card__price">{item.priceLabel}</span>
			</header>
			<h3 class="c-tier-card__title">{item.title}</h3>
			<p class="c-tier-card__summary">{item.summary}</p>
			<ul class="c-tier-card__features">
				{#each item.features as feature (feature)}
					<li>{feature}</li>
				{/each}
			</ul>
			{#if item.ctaLabel && item.ctaHref}
				<div class="c-tier-card__footer">
					<a
						class="c-tier-card__link"
						href={item.ctaHref}
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.ctaLabel} →
					</a>
				</div>
			{/if}
		</article>
	{/each}
</div>

{#if disclaimer}
	<p class="c-tier-grid__disclaimer">{disclaimer}</p>
{/if}
