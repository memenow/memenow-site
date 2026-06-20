<script lang="ts">
	import { reveal } from '$lib/utils/motion';
	import { cn } from '$lib/utils/cn';

	interface Column {
		key: string;
		label: string;
		highlight?: boolean;
	}

	interface Row {
		feature: string;
		[key: string]: string;
	}

	interface Props {
		columns: Column[];
		rows: Row[];
		caption?: string;
		class?: string;
	}

	let { columns, rows, caption, class: className }: Props = $props();
</script>

<div class={cn('c-comparison', className)} use:reveal>
	<table class="c-comparison__table">
		{#if caption}
			<caption class="c-comparison__caption">{caption}</caption>
		{/if}
		<thead>
			<tr>
				<th scope="col" class="c-comparison__th c-comparison__th--feature"></th>
				{#each columns as col (col.key)}
					<th
						scope="col"
						class="c-comparison__th"
						class:c-comparison__th--highlight={col.highlight}
					>
						{col.label}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row, i (i)}
				<tr>
					<th scope="row" class="c-comparison__feature">{row.feature}</th>
					{#each columns as col (col.key)}
						<td class="c-comparison__td" class:c-comparison__td--highlight={col.highlight}>
							{row[col.key]}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
