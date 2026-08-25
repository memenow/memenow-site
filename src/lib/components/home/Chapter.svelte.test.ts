import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import Chapter from './Chapter.svelte';

const body = createRawSnippet(() => ({
	render: () => '<p data-testid="body">body copy</p>'
}));

async function mount(props: Record<string, unknown>): Promise<HTMLElement> {
	const screen = await render(Chapter, {
		props: { number: '01', label: 'Test', title: 'Hello world', children: body, ...props }
	});
	const section = (screen.container as HTMLElement).querySelector<HTMLElement>('section.c-chapter');
	if (!section) throw new Error('section.c-chapter not rendered');
	return section;
}

describe('Chapter', () => {
	it('defaults to centered alignment without modifier classes', async () => {
		const section = await mount({});
		expect(section.classList.contains('c-chapter--align-left')).toBe(false);
		expect(section.classList.contains('c-chapter--align-split')).toBe(false);
		expect(section.classList.contains('c-chapter--banner')).toBe(false);
		expect(section.classList.contains('c-chapter--headless')).toBe(false);
	});

	it('applies left alignment modifier', async () => {
		const section = await mount({ align: 'left' });
		expect(section.classList.contains('c-chapter--align-left')).toBe(true);
	});

	it('applies split alignment modifier', async () => {
		const section = await mount({ align: 'split' });
		expect(section.classList.contains('c-chapter--align-split')).toBe(true);
	});

	it('applies the banner modifier', async () => {
		const section = await mount({ banner: true });
		expect(section.classList.contains('c-chapter--banner')).toBe(true);
	});

	it('hides the number/label header when headless', async () => {
		const section = await mount({ headless: true });
		expect(section.classList.contains('c-chapter--headless')).toBe(true);
		expect(section.querySelector('.c-chapter__num')).toBeNull();
	});

	it('renders the number/label header by default', async () => {
		const section = await mount({});
		const num = section.querySelector('.c-chapter__num');
		expect(num).not.toBeNull();
		expect(num?.textContent).toContain('01');
		expect(num?.textContent).toContain('Test');
	});

	it('omits the header when number/label are missing', async () => {
		const section = await mount({ number: undefined, label: undefined });
		expect(section.querySelector('.c-chapter__num')).toBeNull();
	});

	it('passes through the optional id attribute', async () => {
		const section = await mount({ id: 'studio' });
		expect(section.id).toBe('studio');
	});
});
