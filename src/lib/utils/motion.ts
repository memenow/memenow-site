/**
 * Lazy-loaded smooth scroll + scroll-triggered reveal helpers.
 *
 * Honors `prefers-reduced-motion: reduce` everywhere — when reduced motion is
 * requested, all helpers no-op, leaving native browser scroll and instant
 * reveals.
 */

let lenisInstance: { destroy: () => void; raf: (t: number) => void } | null = null;

export async function startLenis(): Promise<void> {
	if (typeof window === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	if (lenisInstance) return;

	const { default: Lenis } = await import('lenis');

	const lenis = new Lenis({
		duration: 1.05,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true
	});

	function raf(time: number) {
		lenis.raf(time);
		if (lenisInstance) requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	lenisInstance = { destroy: () => lenis.destroy(), raf: (t) => lenis.raf(t) };
}

export function stopLenis(): void {
	lenisInstance?.destroy();
	lenisInstance = null;
}

export type RevealOptions = {
	threshold?: number;
	rootMargin?: string;
	splitWords?: boolean;
};

/**
 * Svelte action that reveals an element on scroll.
 *
 * Adds `data-revealed="true"` once the element crosses the viewport threshold.
 * If `splitWords` is true, wraps each word in `<span class="reveal-word">
 * <span class="reveal-word-inner">…</span></span>` so per-word transitions can
 * stagger via the `--i` custom property.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { threshold = 0.18, rootMargin = '0px 0px -10% 0px', splitWords = false } = options;

	const reduced =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduced) {
		node.dataset.revealed = 'true';
		return { destroy() {} };
	}

	if (splitWords) {
		const text = node.textContent ?? '';
		const words = text.trim().split(/\s+/);
		node.innerHTML = words
			.map((w, i) => {
				const space = i < words.length - 1 ? '&nbsp;' : '';
				return `<span class="reveal-word"><span class="reveal-word-inner" style="--i:${i}">${w}${space}</span></span>`;
			})
			.join('');
	}

	node.dataset.revealed = 'false';

	const io = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.dataset.revealed = 'true';
				io.disconnect();
			}
		},
		{ threshold, rootMargin }
	);

	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}

/**
 * Svelte action that gives an element a magnetic hover — translate it toward
 * the cursor by a small fraction of the offset, with smooth release.
 */
export function magnetic(node: HTMLElement, strength = 0.22) {
	const reduced =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduced) return { destroy() {} };

	let raf = 0;
	let tx = 0;
	let ty = 0;
	let targetX = 0;
	let targetY = 0;

	function loop() {
		tx += (targetX - tx) * 0.18;
		ty += (targetY - ty) * 0.18;
		node.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
		if (Math.abs(targetX - tx) > 0.05 || Math.abs(targetY - ty) > 0.05) {
			raf = requestAnimationFrame(loop);
		} else {
			raf = 0;
		}
	}

	function onMove(e: PointerEvent) {
		const rect = node.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		targetX = (e.clientX - cx) * strength;
		targetY = (e.clientY - cy) * strength;
		if (!raf) raf = requestAnimationFrame(loop);
	}

	function onLeave() {
		targetX = 0;
		targetY = 0;
		if (!raf) raf = requestAnimationFrame(loop);
	}

	node.addEventListener('pointermove', onMove);
	node.addEventListener('pointerleave', onLeave);

	return {
		destroy() {
			node.removeEventListener('pointermove', onMove);
			node.removeEventListener('pointerleave', onLeave);
			if (raf) cancelAnimationFrame(raf);
			node.style.transform = '';
		}
	};
}
