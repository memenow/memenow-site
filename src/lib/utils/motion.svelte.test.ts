import { afterEach, describe, expect, it, vi } from 'vitest';
import { reveal } from './motion';

describe('reveal action — splitWords', () => {
	let host: HTMLElement | null = null;

	afterEach(() => {
		host?.remove();
		host = null;
	});

	function mount(initialText: string): HTMLElement {
		const node = document.createElement('h1');
		node.textContent = initialText;
		document.body.appendChild(node);
		host = node;
		return node;
	}

	it('treats raw HTML in the title as text, not markup (XSS regression)', () => {
		const node = mount('<img src=x onerror=alert(1)>');
		reveal(node, { splitWords: true });

		// No <img>, no script execution surface — the angle brackets are inert text.
		expect(node.querySelector('img')).toBeNull();
		expect(node.querySelector('script')).toBeNull();
		// Word spans carry the raw characters as text content.
		const innerSpans = node.querySelectorAll<HTMLElement>('.reveal-word-inner');
		expect(innerSpans.length).toBeGreaterThan(0);
		const rejoined = Array.from(innerSpans, (s) => s.textContent ?? '')
			.join('')
			.replace(/\s+/g, ' ')
			.trim();
		expect(rejoined).toBe('<img src=x onerror=alert(1)>');
	});

	it('wraps each word in nested .reveal-word / .reveal-word-inner spans', () => {
		const node = mount('Hello brave new world');
		reveal(node, { splitWords: true });

		const outers = node.querySelectorAll('.reveal-word');
		const inners = node.querySelectorAll('.reveal-word-inner');
		expect(outers.length).toBe(4);
		expect(inners.length).toBe(4);
		// Each outer span contains exactly one inner span.
		outers.forEach((outer) => {
			expect(outer.querySelectorAll('.reveal-word-inner').length).toBe(1);
		});
	});

	it('assigns staggered --i values via inline style', () => {
		const node = mount('one two three');
		reveal(node, { splitWords: true });

		const inners = node.querySelectorAll<HTMLElement>('.reveal-word-inner');
		expect(inners[0]?.style.getPropertyValue('--i')).toBe('0');
		expect(inners[1]?.style.getPropertyValue('--i')).toBe('1');
		expect(inners[2]?.style.getPropertyValue('--i')).toBe('2');
	});

	it('marks the node as un-revealed pending intersection', () => {
		const node = mount('Hello world');
		reveal(node, { splitWords: true });
		expect(node.dataset.revealed).toBe('false');
	});
});

describe('reveal action — non-splitting path', () => {
	let host: HTMLElement | null = null;

	afterEach(() => {
		host?.remove();
		host = null;
	});

	it('leaves existing children intact when splitWords is false', () => {
		const node = document.createElement('h1');
		const em = document.createElement('em');
		em.textContent = 'Hello';
		const strong = document.createElement('strong');
		strong.textContent = 'world';
		node.appendChild(em);
		node.appendChild(document.createTextNode(' '));
		node.appendChild(strong);
		document.body.appendChild(node);
		host = node;

		reveal(node);

		// No word-splitting occurred and the original element subtree is preserved.
		expect(node.querySelectorAll('.reveal-word').length).toBe(0);
		expect(node.querySelector('em')?.textContent).toBe('Hello');
		expect(node.querySelector('strong')?.textContent).toBe('world');
		expect(node.dataset.revealed).toBe('false');
	});
});

describe('reveal action — prefers-reduced-motion', () => {
	let host: HTMLElement | null = null;
	let originalMatchMedia: typeof window.matchMedia;

	afterEach(() => {
		host?.remove();
		host = null;
		if (originalMatchMedia) window.matchMedia = originalMatchMedia;
	});

	function stubReducedMotion(matches: boolean) {
		originalMatchMedia = window.matchMedia;
		window.matchMedia = vi.fn(
			(query: string) =>
				({
					matches: matches && /reduce/.test(query),
					media: query,
					onchange: null,
					addListener: () => {},
					removeListener: () => {},
					addEventListener: () => {},
					removeEventListener: () => {},
					dispatchEvent: () => false
				}) as MediaQueryList
		) as typeof window.matchMedia;
	}

	it('reveals immediately and skips the splitWords transform under reduced motion', () => {
		stubReducedMotion(true);

		const node = document.createElement('h1');
		node.textContent = 'Hello world';
		document.body.appendChild(node);
		host = node;

		reveal(node, { splitWords: true });

		// Immediate reveal, no intersection observer wiring, no DOM rewrite.
		expect(node.dataset.revealed).toBe('true');
		expect(node.querySelectorAll('.reveal-word').length).toBe(0);
		expect(node.textContent).toBe('Hello world');
	});
});
