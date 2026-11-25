<script lang="ts">
	/**
	 * Renders trusted HTML strings as inline markup. The ONLY legitimate input
	 * is repo-authored copy from `$lib/i18n/dictionaries/` (legal paragraphs that
	 * need inline <strong>/<code>/<a>). Never feed request- or user-derived
	 * data through this component.
	 */
	let { html }: { html: string } = $props();
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -- trusted, repo-authored copy only -->
{@html html}
