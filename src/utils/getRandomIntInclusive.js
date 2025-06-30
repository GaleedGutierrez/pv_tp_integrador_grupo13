/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export function getRandomIntInclusive(min, max) {
	const MIN_CEILED = Math.ceil(min);
	const MAX_FLOORED = Math.floor(max);

	return Math.floor(
		Math.random() * (MAX_FLOORED - MIN_CEILED + 1) + MIN_CEILED,
	); // The maximum is inclusive and the minimum is inclusive
}
