/**
 * WebGL availability probe.
 *
 * Gates the Threlte ink-wash world: when WebGL is unavailable, three.js is never
 * imported and the static painted atmosphere shows instead. The canonical check
 * is "try to acquire a context" (MDN); the try/catch covers browsers that throw
 * when the GPU is blocked or the live-context budget is exhausted.
 */
export function detectWebGL(): boolean {
	if (typeof window === 'undefined' || typeof document === 'undefined') return false;
	try {
		const canvas = document.createElement('canvas');
		return !!(
			window.WebGLRenderingContext &&
			(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
		);
	} catch {
		return false;
	}
}
