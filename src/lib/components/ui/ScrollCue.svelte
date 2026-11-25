<script lang="ts">
	import { scrollToTarget } from '$lib/utils/motion';

	let { href, label }: { href: string; label: string } = $props();

	function handleClick(event: MouseEvent) {
		if (!href.startsWith('#')) return;
		if (scrollToTarget(href)) {
			event.preventDefault();
			window.history.replaceState(null, '', href);
		}
	}
</script>

<a class="c-scroll-cue" {href} aria-label={label} onclick={handleClick}>
	<svg
		class="c-scroll-cue__icon"
		viewBox="0 0 24 32"
		width="20"
		height="26"
		fill="none"
		aria-hidden="true"
	>
		<line
			class="c-scroll-cue__stem"
			x1="12"
			y1="2"
			x2="12"
			y2="24"
			stroke="currentColor"
			stroke-width="1.25"
			stroke-linecap="round"
		/>
		<path
			class="c-scroll-cue__chevron"
			d="M6.5 19.5 12 25l5.5-5.5"
			stroke="currentColor"
			stroke-width="1.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</a>
