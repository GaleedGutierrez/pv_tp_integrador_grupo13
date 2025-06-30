/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/**
 * Generic function to load multiple fonts
 * @param fonts - Array of font descriptors
 * @returns Promise that resolves with loaded fonts
 */
const loadMultipleFonts = (fonts) => {
	if (!('fonts' in document)) {
		return Promise.reject(new Error('Font Loading API not supported'));
	}

	const FONT_PROMISES = fonts.map((font) => document.fonts.load(font));

	return Promise.all(FONT_PROMISES);
};

/**
 * Loads custom fonts and adds a class to the document element when loaded.
 * @param fonts - The fonts to load.
 * @throws Error If the Font Loading API is not supported or if loading fails.
 * @example
 * loadFonts(['12px "CustomFont"', '16px "AnotherFont"']);
 */
export const loadFonts = (fonts) => {
	if (sessionStorage.fontsLoaded) {
		document.body.classList.add('fonts-loaded');

		return;
	}

	loadMultipleFonts(fonts)
		.then(() => {
			document.body.classList.add('fonts-loaded');
			sessionStorage.fontsLoaded = true;
		})
		.catch((error) => {
			console.error('Error loading fonts:', error);
		});
};
