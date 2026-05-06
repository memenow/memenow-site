<script lang="ts">
	import MemenowMark from '$lib/components/brand/MemenowMark.svelte';
	import { footerSections } from '$lib/data/navigation';

	const year = new Date().getFullYear();
</script>

<footer class="c-footer">
	<div class="l-content">
		<div class="c-footer__inner">
			<div class="c-footer__col c-footer__col--lead">
				<MemenowMark variant="lockup-horizontal" size="md" />
			</div>
			{#each footerSections as section (section.title)}
				<div class="c-footer__col">
					<span class="c-footer__title">{section.title}</span>
					{#each section.links as link (link.href)}
						<a
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener noreferrer' : undefined}
						>
							{link.label}
						</a>
					{/each}
				</div>
			{/each}
		</div>
		<div class="c-footer__legal">
			<span>© {year} memenow</span>
			<a href="/disclaimer">Investor disclaimer</a>
		</div>
	</div>
</footer>
