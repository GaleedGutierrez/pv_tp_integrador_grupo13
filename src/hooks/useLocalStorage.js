import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue = []) {
	function getStoredValue() {
		try {
			const STORED_DATA = localStorage.getItem(key);

			return STORED_DATA ? JSON.parse(STORED_DATA) : initialValue;
		} catch (error) {
			console.error(`Error parsing localStorage key "${key}":`, error);

			return initialValue;
		}
	}

	const [items, setItems] = useState(getStoredValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(items));
	}, [key, items]);

	const updateItems = (newItems) => {
		setItems(newItems);
	};

	return [items, updateItems];
}
