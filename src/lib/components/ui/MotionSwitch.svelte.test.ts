import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';

// Stub Lenis lifecycle so toggling does not boot real smooth-scroll (a leaking
// rAF loop) in the test document. Everything else in motion.ts is pure.
const lenis = vi.hoisted(() => ({ start: vi.fn(), stop: vi.fn() }));
vi.mock('$lib/utils/motion', async (importOriginal) => {
	const actual = await importOriginal();
	return { ...(actual as object), startLenis: lenis.start, stopLenis: lenis.stop };
});

import { createI18nContext } from '$lib/i18n';
import { zh } from '$lib/i18n/dictionaries/zh';
import MotionSwitch from './MotionSwitch.svelte';

const STORAGE_KEY = 'memenow.motion';

// Mounted outside the root layout, so the i18n context is supplied directly —
// with the Chinese dictionary, which is why the asserted aria-labels are Chinese.
const context = createI18nContext({ locale: () => 'zh', messages: () => zh });
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
		const screen = await render(MotionSwitch, { context });
		await expect.element(screen.getByLabelText('允许动效')).toBeInTheDocument();
	});

	it('reduces motion on click, persists the choice, and stops Lenis', async () => {
		const screen = await render(MotionSwitch, { context });
		await screen.getByLabelText('减弱动效').click();
		expect(document.documentElement.getAttribute('data-motion')).toBe('reduced');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('reduced');
		expect(lenis.stop).toHaveBeenCalled();
		await expect.element(screen.getByLabelText('允许动效')).toBeInTheDocument();
	});

	it('re-allows motion on a second click and restarts Lenis', async () => {
		const screen = await render(MotionSwitch, { context });
		await screen.getByLabelText('减弱动效').click();
		await screen.getByLabelText('允许动效').click();
		expect(document.documentElement.getAttribute('data-motion')).toBe('full');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('full');
		expect(lenis.start).toHaveBeenCalled();
	});

	it('notifies MutationObserver subscribers on data-motion changes so WorldScene updates while stationary', async () => {
		const observed: string[] = [];
		const observer = new MutationObserver(() => {
			observed.push(document.documentElement.getAttribute('data-motion') ?? '');
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-motion']
		});
		try {
			const screen = await render(MotionSwitch, { context });
			await screen.getByLabelText('减弱动效').click();
			await Promise.resolve();
			expect(observed).toEqual(['reduced']);
		} finally {
			observer.disconnect();
		}
	});

	it('still flips motion when localStorage.setItem throws', async () => {
		// Simulate Safari private mode / quota-exceeded: the component should
		// swallow the error and keep the in-page motion update intact.
		const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
			throw new DOMException('Quota exceeded', 'QuotaExceededError');
		});
		try {
			const screen = await render(MotionSwitch, { context });
			await screen.getByLabelText('减弱动效').click();
			expect(setItem).toHaveBeenCalledWith(STORAGE_KEY, 'reduced');
			expect(document.documentElement.getAttribute('data-motion')).toBe('reduced');
			await expect.element(screen.getByLabelText('允许动效')).toBeInTheDocument();
		} finally {
			setItem.mockRestore();
		}
	});
});
