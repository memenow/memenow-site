<script lang="ts">
	type Variant = 'mark' | 'lockup-vertical' | 'lockup-horizontal' | 'reverse';
	type Size = 'sm' | 'md' | 'lg' | 'xl';

	const heightMap: Record<Size, number> = {
		sm: 24,
		md: 32,
		lg: 64,
		xl: 120
	};

	const baseMap: Record<Variant, string> = {
		mark: '/brand/mark',
		'lockup-vertical': '/brand/lockup-vertical',
		'lockup-horizontal': '/brand/lockup-horizontal',
		reverse: '/brand/reverse-on-coral'
	};

	let {
		variant = 'mark',
		size = 'md',
		class: className,
		alt = 'memenow',
		eager = false
	}: {
		variant?: Variant;
		size?: Size;
		class?: string;
		alt?: string;
		eager?: boolean;
	} = $props();

	const height = $derived(heightMap[size]);
	const base = $derived(baseMap[variant]);
</script>

<picture class={className}>
	<source type="image/avif" srcset="{base}.avif 1x, {base}@2x.avif 2x" />
	<source type="image/webp" srcset="{base}.webp 1x, {base}@2x.webp 2x" />
	<img
		src="{base}.png"
		srcset="{base}@2x.png 2x"
		{alt}
		{height}
		loading={eager ? 'eager' : 'lazy'}
		decoding="async"
	/>
</picture>

<style>
	picture {
		display: inline-flex;
		align-items: center;
	}
	img {
		display: block;
		width: auto;
		max-height: 100%;
	}
</style>
