import { clsx, type ClassValue } from 'clsx';

// Plain `clsx` wrapper, no `tailwind-merge`. Components in this codebase are
// `.c-*` BEM, not raw Tailwind utilities; conflicting utility classes are not
// expected. Add `tailwind-merge` here if that contract changes.
export function cn(...inputs: ClassValue[]): string {
	return clsx(inputs);
}
