import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ScrollCue from './ScrollCue.svelte';

describe('ScrollCue', () => {
	afterEach(() => {
		document.getElementById('approach')?.remove();
		document.documentElement.removeAttribute('data-motion');
		window.history.replaceState(null, '', window.location.pathname);
	});

	it('renders a silent visual anchor with accessible label and zero visible text', async () => {
		const screen = await render(ScrollCue, {
			href: '#approach',
			label: 'Scroll to content'
		});

		const link = screen.getByRole('link', { name: 'Scroll to content' });
		await expect.element(link).toBeInTheDocument();
		await expect.element(link).toHaveAttribute('href', '#approach');
		expect(link.element().textContent?.trim()).toBe('');
		expect(link.element().querySelector('svg')).not.toBeNull();
	});

	it('scrolls to the target section on click and honors reduced motion', async () => {
		const target = document.createElement('section');
		target.id = 'approach';
		const scrollIntoView = vi.fn();
		target.scrollIntoView = scrollIntoView;
		document.body.appendChild(target);
		document.documentElement.setAttribute('data-motion', 'reduced');

		const screen = await render(ScrollCue, {
			href: '#approach',
			label: 'Scroll to content'
		});

		await screen.getByRole('link', { name: 'Scroll to content' }).click();

		expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto', block: 'start' });
		expect(window.location.hash).toBe('#approach');
	});
});
