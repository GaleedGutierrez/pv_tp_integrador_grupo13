/* eslint-disable security/detect-object-injection */
import { COLOR_PALETTES } from '@constants/colorPalettes';

/**
 * Generate a random but consistent color palette based on the user's name.
 * @param {string} name - User's name to generate a consistent color palette
 * @returns {string} Color palette name
 */
export const getRandomColorPalette = (name) => {
	// Crear un hash simple del nombre para que sea consistente
	let hash = 0;

	for (let index = 0; index < name.length; index++) {
		const CHARACTER_CODE = name.charCodeAt(index);

		hash = (hash << 5) - hash + CHARACTER_CODE;
		hash = hash >>> 0;
	}

	// Usar el hash para seleccionar un color de manera consistente
	const index = hash % COLOR_PALETTES.length;

	return COLOR_PALETTES[index];
};
