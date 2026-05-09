<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';

	let theme = $state<Theme>('light');

	// app.html boot script seeds `data-theme` from localStorage or system pref.
	// We sync once on mount and only update on explicit click — manual choice
	// stays sticky across OS theme changes by design.
	onMount(() => {
		const current = document.documentElement.getAttribute('data-theme');
		theme = current === 'dark' ? 'dark' : 'light';
	});

	function toggle(): void {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		try {
			localStorage.setItem('memenow.theme', theme);
		} catch {
			// Ignore storage failures (private mode, blocked storage).
		}
	}
</script>

<button
	type="button"
	class="c-theme-switch"
	aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
	onclick={toggle}
>
	{#if theme === 'dark'}
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
			<circle cx="8" cy="8" r="3.4" stroke="currentColor" stroke-width="1.25" />
			<path
				d="M8 1.5v1.6M8 12.9v1.6M14.5 8h-1.6M3.1 8H1.5M12.6 3.4l-1.13 1.13M4.53 11.47L3.4 12.6M12.6 12.6l-1.13-1.13M4.53 4.53L3.4 3.4"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linecap="round"
			/>
		</svg>
	{:else}
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
			<path
				d="M13 9a5 5 0 1 1-6-6 4 4 0 0 0 6 6Z"
				stroke="currentColor"
				stroke-width="1.25"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>
