/**
 * @function loadFonts
 * @description Generic function to load multiple fonts
 * @param {string[]} fonts - Array of font descriptors
 * @returns {Promise<FontFace[][]>} Promise that resolves with loaded fonts
 */
const loadMultipleFonts = (fonts) => {
	if (!('fonts' in document)) {
		return Promise.reject(new Error('Font Loading API not supported'));
	}

	const FONT_PROMISES = fonts.map((font) => document.fonts.load(font));

	return Promise.all(FONT_PROMISES);
};

/**
 * @function loadFonts
 * @description Loads custom fonts and adds a class to the document element when loaded.
 * @param {string[]} fonts - The fonts to load.
 * @returns {void}
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
