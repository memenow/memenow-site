<script lang="ts">
	import MemenowMark from '$lib/components/brand/MemenowMark.svelte';
	import { yinyangAppHref } from '$lib/data/site';
	import { useLocale, useMessages } from '$lib/i18n';

	const locale = useLocale();
	const messages = useMessages();
	const common = $derived(messages().common);
</script>

<header class="c-masthead">
	<div class="c-masthead__inner">
		<a class="c-masthead__brand" href={`/${locale()}`} aria-label={common.brandHomeAriaLabel}>
			<MemenowMark variant="lockup-horizontal" size="sm" eager />
		</a>
		<a
			class="c-masthead__action"
			href={yinyangAppHref(locale())}
			target="_blank"
			rel="noopener noreferrer"
		>
			{common.mastheadCta} ↗
		</a>
	</div>
</header>
