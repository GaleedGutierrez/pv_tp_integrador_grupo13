import { useEffect, useRef, useState } from 'react';

/**
 * @template T
 * @typedef {object} UseFetchResult
 * @property {T | undefined} data - The fetched data
 * @property {boolean} isLoading - Loading state indicator
 * @property {Error | undefined} error - Error object if fetch failed
 * @property {function(string): Promise<void>} fetchData - Function to manually trigger fetch
 */

/**
 * @typedef {object} FetchOptions
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
 * Custom hook for fetching data with loading and error states
 * @template T
 * @param {string} url - The URL to fetch data from
 * @param {FetchOptions} [options={}] - Fetch options including AbortController
 * @returns {UseFetchResult<T>} Object containing data, loading state, error, and fetchData function
 */
export const useFetch = (url, options = {}) => {
	const { controller, ...fetchOptions } = options;
	const [data, setData] = useState(/** @type {T | undefined} */ (undefined));
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(
		/** @type {Error | undefined} */ (undefined),
	);
	const DID_FETCH_REFERENCE = useRef(false);
	const ABORT_CONTROLLER = controller ?? new AbortController();

	/**
	 * Fetches data from the provided URL
	 * @param {string} fetchUrl - The URL to fetch data from
	 * @returns {Promise<void>} Promise that resolves when fetch is complete
	 */
	const fetchData = async (fetchUrl) => {
		setError(undefined);
		setIsLoading(true);

		try {
			const RESPONSE = await fetch(fetchUrl, {
				signal: ABORT_CONTROLLER.signal,
				...fetchOptions,
			});

			if (!RESPONSE.ok) {
				throw new Error('Error fetching data', {
					cause: {
						status: RESPONSE.status,
						statusText: RESPONSE.statusText,
						url: RESPONSE.url,
						headers: RESPONSE.headers,
						ok: RESPONSE.ok,
					},
				});
			}

			/** @type {T} */
			const JSON_DATA = await RESPONSE.json();

			setData(JSON_DATA);
			DID_FETCH_REFERENCE.current = true;
		} catch (fetchError) {
			if (fetchError instanceof Error) {
				setError(fetchError);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (DID_FETCH_REFERENCE.current) {
			return;
		}

		fetchData(url);

		return () => {
			if (DID_FETCH_REFERENCE.current) {
				ABORT_CONTROLLER.abort();
			}
		};
	}, [url]);

	return { data, isLoading, error, fetchData };
};
