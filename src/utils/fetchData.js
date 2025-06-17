/**
 * Fetches data from a URL with optional configuration
 * @param url - The URL to fetch data from
 * @param options - Fetch options including AbortController
 * @throws TypeError if the fetch fails or the response is not valid
 * @returns Promise that resolves with the fetched data, void if error or Response if method is DELETE
 */
export async function fetchData(url, options = {}) {
	const CONTROLLER = options.controller ?? new AbortController();

	try {
		const RESPONSE = await fetch(url, {
			signal: CONTROLLER.signal,
			...options,
		});

		if (!RESPONSE.ok) {
			throw new Error(`Failed to fetch ${RESPONSE.url}`);
		}

		if (options.method === 'DELETE') {
			return RESPONSE;
		}

		const JSON_DATA = await RESPONSE.json();

		return JSON_DATA;
	} catch (error) {
		if (error instanceof Error) {
			throw new TypeError(error.message);
		}
	}
}
