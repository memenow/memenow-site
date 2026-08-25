import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';

// Stub Lenis lifecycle so toggling does not boot real smooth-scroll (a leaking
// rAF loop) in the test document. Everything else in motion.ts is pure.
const lenis = vi.hoisted(() => ({ start: vi.fn(), stop: vi.fn() }));
vi.mock('$lib/utils/motion', async (importOriginal) => {
	const actual = await importOriginal();
	return { ...(actual as object), startLenis: lenis.start, stopLenis: lenis.stop };
});

import MotionSwitch from './MotionSwitch.svelte';

const STORAGE_KEY = 'memenow.motion';

describe('MotionSwitch', () => {
	beforeEach(() => {
		document.documentElement.setAttribute('data-motion', 'full');
		localStorage.removeItem(STORAGE_KEY);
		lenis.start.mockClear();
		lenis.stop.mockClear();
	});

	afterEach(() => {
		document.documentElement.removeAttribute('data-motion');
		localStorage.removeItem(STORAGE_KEY);
	});

	it('mirrors the document motion state on mount', async () => {
		document.documentElement.setAttribute('data-motion', 'reduced');
		const screen = await render(MotionSwitch);
		await expect.element(screen.getByLabelText('Allow motion')).toBeInTheDocument();
	});

	it('reduces motion on click, persists the choice, and stops Lenis', async () => {
		const screen = await render(MotionSwitch);
		await screen.getByLabelText('Reduce motion').click();
		expect(document.documentElement.getAttribute('data-motion')).toBe('reduced');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('reduced');
		expect(lenis.stop).toHaveBeenCalled();
		await expect.element(screen.getByLabelText('Allow motion')).toBeInTheDocument();
	});

	it('re-allows motion on a second click and restarts Lenis', async () => {
		const screen = await render(MotionSwitch);
		await screen.getByLabelText('Reduce motion').click();
		await screen.getByLabelText('Allow motion').click();
		expect(document.documentElement.getAttribute('data-motion')).toBe('full');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('full');
		expect(lenis.start).toHaveBeenCalled();
	});

	it('still flips motion when localStorage.setItem throws', async () => {
		// Simulate Safari private mode / quota-exceeded: the component should
		// swallow the error and keep the in-page motion update intact.
		const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
			throw new DOMException('Quota exceeded', 'QuotaExceededError');
		});
		try {
			const screen = await render(MotionSwitch);
			await screen.getByLabelText('Reduce motion').click();
			expect(setItem).toHaveBeenCalledWith(STORAGE_KEY, 'reduced');
			expect(document.documentElement.getAttribute('data-motion')).toBe('reduced');
			await expect.element(screen.getByLabelText('Allow motion')).toBeInTheDocument();
		} finally {
			setItem.mockRestore();
		}
	});
});
