import { describe, expect, it } from 'vitest';
import { resolveRetiredRedirect } from './redirects';

describe('resolveRetiredRedirect', () => {
	it('redirects retired /products/quant to /products', () => {
		expect(resolveRetiredRedirect('/products/quant')).toBe('/products');
	});

	it('redirects retired /disclaimer to /terms', () => {
		expect(resolveRetiredRedirect('/disclaimer')).toBe('/terms');
	});

	it('ignores a trailing slash on a retired path', () => {
		expect(resolveRetiredRedirect('/disclaimer/')).toBe('/terms');
	});

	it('leaves live routes alone', () => {
		expect(resolveRetiredRedirect('/')).toBeNull();
		expect(resolveRetiredRedirect('/products')).toBeNull();
		expect(resolveRetiredRedirect('/products/yinyang')).toBeNull();
		expect(resolveRetiredRedirect('/terms')).toBeNull();
	});

	it('does not loosely match prefixes of retired paths', () => {
		expect(resolveRetiredRedirect('/disclaimer-archive')).toBeNull();
		expect(resolveRetiredRedirect('/products/quantum')).toBeNull();
	});
});
