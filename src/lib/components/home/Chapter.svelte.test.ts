import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import Chapter from './Chapter.svelte';

const body = createRawSnippet(() => ({
	render: () => '<p data-testid="body">body copy</p>'
}));

function mount(props: Record<string, unknown>): HTMLElement {
	const screen = render(Chapter, {
		props: { number: '01', label: 'Test', title: 'Hello world', children: body, ...props }
	});
	const section = (screen.container as HTMLElement).querySelector<HTMLElement>('section.c-chapter');
	if (!section) throw new Error('section.c-chapter not rendered');
	return section;
}

describe('Chapter', () => {
	it('defaults to centered alignment without modifier classes', () => {
		const section = mount({});
		expect(section.classList.contains('c-chapter--align-left')).toBe(false);
		expect(section.classList.contains('c-chapter--align-split')).toBe(false);
		expect(section.classList.contains('c-chapter--banner')).toBe(false);
		expect(section.classList.contains('c-chapter--headless')).toBe(false);
	});

	it('applies left alignment modifier', () => {
		const section = mount({ align: 'left' });
		expect(section.classList.contains('c-chapter--align-left')).toBe(true);
	});

	it('applies split alignment modifier', () => {
		const section = mount({ align: 'split' });
		expect(section.classList.contains('c-chapter--align-split')).toBe(true);
	});

	it('applies the banner modifier', () => {
		const section = mount({ banner: true });
		expect(section.classList.contains('c-chapter--banner')).toBe(true);
	});

	it('hides the number/label header when headless', () => {
		const section = mount({ headless: true });
		expect(section.classList.contains('c-chapter--headless')).toBe(true);
		expect(section.querySelector('.c-chapter__num')).toBeNull();
	});

	it('renders the number/label header by default', () => {
		const section = mount({});
		const num = section.querySelector('.c-chapter__num');
		expect(num).not.toBeNull();
		expect(num?.textContent).toContain('01');
		expect(num?.textContent).toContain('Test');
	});

	it('omits the header when number/label are missing', () => {
		const section = mount({ number: undefined, label: undefined });
		expect(section.querySelector('.c-chapter__num')).toBeNull();
	});

	it('passes through the optional id attribute', () => {
		const section = mount({ id: 'studio' });
		expect(section.id).toBe('studio');
	});
});
