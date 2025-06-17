import { useEffect, useRef, useState } from 'react';

const useFetch = (url, options = {}) => {
	const { controller } = options;
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const DID_FETCH_REF = useRef(false);
	const CONTROLLER = controller ?? new AbortController();
	const fetchData = async (url) => {
		setError(undefined);
		setIsLoading(true);

		try {
			const RESPONSE = await fetch(url, {
				signal: CONTROLLER.signal,
				...options,
			});

			if (!RESPONSE.ok) {
				throw new Error('Error fetching data');
			}

			const JSON_DATA = await RESPONSE.json();

			setData(JSON_DATA);
			DID_FETCH_REF.current = true;
		} catch (error) {
			if (error instanceof Error) {
				setError(error);
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (DID_FETCH_REF.current) {
			return;
		}

		void fetchData(url);

		return () => {
			if (DID_FETCH_REF.current) {
				CONTROLLER.abort();
			}
		};
	}, [url]);

	return { data, isLoading, error, fetchData };
};

export default useFetch;
