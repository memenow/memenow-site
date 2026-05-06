<script lang="ts">
	import { page } from '$app/state';
	import { primaryNav } from '$lib/data/navigation';
	import ThemeSwitch from '$lib/components/ui/ThemeSwitch.svelte';

	function isCurrent(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}
</script>

<nav class="c-dock" aria-label="Primary">
	<a class="c-dock__brand" href="/" aria-label="memenow home">
		<picture>
			<source type="image/avif" srcset="/brand/mark.avif 1x, /brand/mark@2x.avif 2x" />
			<source type="image/webp" srcset="/brand/mark.webp 1x, /brand/mark@2x.webp 2x" />
			<img
				src="/brand/mark.png"
				srcset="/brand/mark@2x.png 2x"
				alt="memenow"
				width="24"
				height="24"
				loading="eager"
				decoding="async"
			/>
		</picture>
	</a>

	<span class="c-dock__divider" aria-hidden="true"></span>

	<a class="c-dock__item" href="/" aria-current={isCurrent('/') ? 'page' : undefined}>Home</a>
	{#each primaryNav as link (link.href)}
		<a
			class="c-dock__item"
			href={link.href}
			aria-current={isCurrent(link.href) ? 'page' : undefined}
		>
			{link.label}
		</a>
	{/each}

	<span class="c-dock__divider" aria-hidden="true"></span>

	<ThemeSwitch />
</nav>
