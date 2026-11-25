/**
 * Lazy-loaded smooth scroll + scroll-triggered reveal helpers.
 *
 * Honors `prefers-reduced-motion: reduce` everywhere — when reduced motion is
 * requested, all helpers no-op, leaving native browser scroll and instant
 * reveals.
 */

let lenisInstance: {
	destroy: () => void;
	stop: () => void;
	start: () => void;
	scrollTo: (target: HTMLElement) => void;
} | null = null;

/**
 * Resolve whether motion should be suppressed. The in-page toggle writes
 * `data-motion` on <html> (app.html boot script + MotionSwitch); when that
 * attribute is present it is the single source of truth and can both honor and
 * override the OS setting. With no attribute (scripting off, or before the boot
 * script runs) we fall back to the `prefers-reduced-motion` media query. This
 * mirrors the CSS precedence in tokens.css exactly: the attribute wins whenever
 * it is present.
 */
export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return false;
	const pref = document.documentElement.getAttribute('data-motion');
	if (pref === 'reduced') return true;
	if (pref === 'full') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * True only while a cross-page View Transition is swapping the DOM. The root
 * layout sets it around `document.startViewTransition`; the `reveal` action
 * reads it at mount — deep inside the transition's update callback — so an
 * entrance flagged `restDuringViewTransition` presents at rest instead of
 * replaying its word-rise underneath the morph. Module-scoped because the action
 * has no other channel to the navigation lifecycle.
 */
let viewTransitionUpdating = false;

export function setViewTransitionUpdating(active: boolean): void {
	viewTransitionUpdating = active;
}

export async function startLenis(): Promise<void> {
	if (typeof window === 'undefined') return;
	if (prefersReducedMotion()) return;
	if (lenisInstance) return;

	const { default: Lenis } = await import('lenis');

	// The dynamic import is async: the user may have toggled reduced motion (or a
	// concurrent caller may have won the race) while it loaded. Re-check before
	// instantiating so a mid-import reduce cannot leave smooth scroll running.
	if (prefersReducedMotion() || lenisInstance) return;

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

	lenisInstance = {
		destroy: () => lenis.destroy(),
		stop: () => lenis.stop(),
		start: () => lenis.start(),
		scrollTo: (target: HTMLElement) => lenis.scrollTo(target)
	};
}

export function stopLenis(): void {
	lenisInstance?.destroy();
	lenisInstance = null;
}

/**
 * Scroll smoothly to an in-page element selector, cooperating with Lenis when
 * active and falling back to native scrollIntoView (honoring reduced motion).
 */
export function scrollToTarget(selector: string): boolean {
	if (typeof document === 'undefined') return false;
	const target = document.querySelector<HTMLElement>(selector);
	if (!target) return false;
	if (lenisInstance && !prefersReducedMotion()) {
		lenisInstance.scrollTo(target);
	} else {
		target.scrollIntoView({
			behavior: prefersReducedMotion() ? 'auto' : 'smooth',
			block: 'start'
		});
	}
	return true;
}

/**
 * Pause / resume Lenis without tearing it down. A cross-page View Transition
 * captures before/after snapshots of the viewport; Lenis runs on native scroll
 * via a rAF loop, so letting it keep writing scroll across the snapshot frames
 * shifts the old vs new capture and causes a jump. The layout pauses Lenis
 * before startViewTransition and resumes it when the transition finishes. Both
 * no-op when Lenis never started (reduced motion / SSR).
 */
export function pauseLenis(): void {
	lenisInstance?.stop();
}

export function resumeLenis(): void {
	lenisInstance?.start();
}

export type RevealOptions = {
	threshold?: number;
	rootMargin?: string;
	splitWords?: boolean;
	/** Present at rest (skip the entrance) while a cross-page View Transition is
	 *  swapping the DOM, so a `view-transition-name` morph target captures real
	 *  content instead of the pre-reveal clipped state. */
	restDuringViewTransition?: boolean;
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
	const {
		threshold = 0.18,
		rootMargin = '0px 0px -10% 0px',
		splitWords = false,
		restDuringViewTransition = false
	} = options;

	// Present at rest — skipping the entrance — when motion is reduced, or when
	// this element is the morph target of an in-flight cross-page View Transition.
	// The transition itself supplies the motion; capturing the pre-reveal clipped
	// state would otherwise morph the title toward an empty box.
	if (prefersReducedMotion() || (restDuringViewTransition && viewTransitionUpdating)) {
		node.dataset.revealed = 'true';
		return { destroy() {} };
	}

	if (splitWords) {
		const text = node.textContent ?? '';
		// Han (incl. Extension A) and Japanese kana. Hangul is excluded on
		// purpose: Korean separates words with spaces, so per-word reveal fits.
		const hasCJK = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(text);
		// DESIGN.md: "Word-by-word English reveals MUST NOT be copied onto Chinese
		// or other unspaced scripts. Use a line or block reveal."
		if (hasCJK) {
			node.classList.add('reveal-fade');
		} else {
			const words = text.trim().split(/\s+/);
			// Build via DOM nodes (not innerHTML) so word content is treated as text.
			// textContent round-trips entity-decoded characters; concatenating into an
			// HTML string would let `<` / `>` parse as markup.
			while (node.firstChild) node.removeChild(node.firstChild);
			words.forEach((word, i) => {
				const outer = document.createElement('span');
				outer.className = 'reveal-word';
				const inner = document.createElement('span');
				inner.className = 'reveal-word-inner';
				inner.style.setProperty('--i', String(i));
				inner.textContent = word;
				if (i < words.length - 1) inner.append(' ');
				outer.appendChild(inner);
				node.appendChild(outer);
			});
		}
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
 *
 * `strength === 0` makes the action a no-op so callers can pass the strength
 * conditionally without branching the template. Reduced motion is honored live
 * in the pointer handler (not snapshotted at mount), so the in-page toggle can
 * disable — or re-enable — the effect at runtime without remounting the element.
 */
export function magnetic(node: HTMLElement, strength = 0.22) {
	if (strength === 0) return { destroy() {} };

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
		// Honor a runtime switch to reduced motion: snap back to rest and stop
		// applying transforms. CSS reduced-motion guards do not cover this inline
		// transform, so the check must live here, read fresh on every move.
		if (prefersReducedMotion()) {
			targetX = targetY = tx = ty = 0;
			if (raf) {
				cancelAnimationFrame(raf);
				raf = 0;
			}
			node.style.transform = '';
			return;
		}
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
