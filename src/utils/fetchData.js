/**
 * @typedef {object} FetchProperties
 * @property {AbortController} [controller] - Optional AbortController for request cancellation
 * @property {HeadersInit} [headers] - Request headers
 * @property {string} [method] - HTTP method
 * @property {BodyInit} [body] - Request body
 * @property {RequestMode} [mode] - Request mode
 * @property {RequestCredentials} [credentials] - Request credentials
 * @property {RequestCache} [cache] - Request cache
 * @property {RequestRedirect} [redirect] - Request redirect
 * @property {string} [referrer] - Request referrer
 * @property {ReferrerPolicy} [referrerPolicy] - Request referrer policy
 * @property {RequestDestination} [destination] - Request destination
 * @property {string} [integrity] - Request integrity
 * @property {boolean} [keepalive] - Keep connection alive
 * @property {AbortSignal} [signal] - Abort signal
 * @property {RequestPriority} [priority] - Request priority
 */

/**
 * Fetches data from a URL with optional configuration
 * @template T
 * @param {string} url - The URL to fetch data from
 * @param {FetchProperties} [options={}] - Fetch options including AbortController
 * @throws {TypeError} If the fetch fails or the response is not valid
 * @returns {Promise<T | Response | void>} Promise that resolves with the fetched data, void if error or Response if method is DELETE
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

		/** @type {T} */
		const JSON_DATA = await RESPONSE.json();

		return JSON_DATA;
	} catch (error) {
		if (error instanceof Error) {
			throw new TypeError(error.message);
		}
	}
}
