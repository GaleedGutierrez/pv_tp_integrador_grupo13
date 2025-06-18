import { useAppDispatch } from '@hooks/useAppDispatch';

import {
	addToFavorite as addFavorite,
	deleteFavoriteById as deleteFavorite,
} from '../slice/favoritesSlice.js';

/** @import { Product } from '@/modules/products/domain/ProductRepository.js' */

export const useFavoritesActions = () => {
	const dispatch = useAppDispatch();
	/** @param {Product} product - Product to add favorite */
	const addToFavorite = (product) => {
		dispatch(addFavorite(product));
	};
	/** @param {string} id - ID of product to delete from favorites */
	const deleteFavoriteById = (id) => {
		dispatch(deleteFavorite(id));
	};

	return { addToFavorite, deleteFavoriteById };
};
