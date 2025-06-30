/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Extracts the numeric value from a formatted price string.
 * @param formattedPrice - Price formatted as a string (e.g., "$19.99", "€15,50", "19.99 USD")
 * @returns Price as a numeric string (e.g., "19.99", "15.50")
 */
export const extractNumericPrice = (formattedPrice) => {
	// Remove currency symbols and any non-numeric characters except for decimal separators
	const numericString = formattedPrice.replaceAll(/[^\d.,]/g, '');

	// Normalize decimal separators
	return numericString.replaceAll(',', '.');
};
