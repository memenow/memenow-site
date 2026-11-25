<script lang="ts">
	import { page } from '$app/state';
	import EditorialHero from '$lib/components/home/EditorialHero.svelte';
	import ArtifactCta from '$lib/components/ui/ArtifactCta.svelte';
	import { useLocale, useMessages } from '$lib/i18n';

	// `status` must be the HTTP status from `page`, not the deprecated global
	// `window.status` (an empty string) that an undeclared `status` would resolve to.
	const status = $derived(page.status);
	const isNotFound = $derived(page.status === 404);
	const locale = useLocale();
	const messages = useMessages();
	const t = $derived(messages().error);

	const title = $derived(isNotFound ? t.notFoundTitle : t.serverErrorTitle);
	// Always render pre-defined user-facing copy. `page.error?.message` can leak
	// implementation details (e.g. database error strings) — server observability
	// is the right place for the original message.
	const lede = $derived(isNotFound ? t.notFoundLede : t.serverErrorLede);
	const eyebrowRight = $derived(isNotFound ? t.notFoundLabel : t.errorLabel);
	const eyebrowLeft = $derived(t.statusLabel.replace('{status}', String(status)));
	const homeHref = $derived(`/${locale()}/`);
</script>

<svelte:head>
	<title>{t.meta.title.replace('{status}', String(status))}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<EditorialHero {eyebrowLeft} {eyebrowRight} {title} {lede}>
	{#snippet cta()}
		<ArtifactCta href={homeHref} variant="outline" size="lg">{t.returnHome}</ArtifactCta>
	{/snippet}
</EditorialHero>
