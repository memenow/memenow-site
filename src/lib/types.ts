/**
 * Shared shape for editorial scene imagery.
 *
 * `w` / `h` are the intrinsic source dimensions of the PNG master. They must
 * be supplied so the renderer can reserve box geometry before the bitmap
 * decodes — required to keep Cumulative Layout Shift at zero. AVIF / WebP
 * sources are optional progressive enhancements.
 */
export interface SceneImage {
	/** Optional AVIF source, served first when supported. */
	avif?: string;
	/** Optional WebP source, second-choice fallback before PNG. */
	webp?: string;
	/** PNG master — always present, the `<img>` `src`. */
	png: string;
	/** Accessible alt text. Empty string for decorative usage. */
	alt?: string;
	/** Intrinsic pixel width of the source asset. */
	w: number;
	/** Intrinsic pixel height of the source asset. */
	h: number;
}
