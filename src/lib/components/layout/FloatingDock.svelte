<script lang="ts">
	import { page } from '$app/state';
	import { homeLink, primaryNav, type NavLink } from '$lib/data/navigation';
	import ThemeSwitch from '$lib/components/ui/ThemeSwitch.svelte';

	function matches(path: string, pathname: string): boolean {
		if (path === '/') return pathname === '/';
		return pathname === path || pathname.startsWith(`${path}/`);
	}

	function isCurrent(link: NavLink): boolean {
		const candidates = link.match ?? [link.href];
		return candidates.some((p) => matches(p, page.url.pathname));
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
				alt=""
				width="24"
				height="24"
				loading="eager"
				decoding="async"
			/>
		</picture>
	</a>

	<span class="c-dock__divider" aria-hidden="true"></span>

	<a
		class="c-dock__item"
		href={homeLink.href}
		aria-current={isCurrent(homeLink) ? 'page' : undefined}
	>
		{homeLink.label}
	</a>
	{#each primaryNav as link (link.href)}
		<a class="c-dock__item" href={link.href} aria-current={isCurrent(link) ? 'page' : undefined}>
			{link.label}
		</a>
	{/each}

	<span class="c-dock__divider" aria-hidden="true"></span>

	<ThemeSwitch />
</nav>
