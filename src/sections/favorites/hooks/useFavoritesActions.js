/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useAppDispatch } from '@hooks/useAppDispatch';

import {
	addToFavorite as addFavorite,
	deleteFavoriteById as deleteFavorite,
} from '../slice/favoritesSlice';

export const useFavoritesActions = () => {
	const dispatch = useAppDispatch();
	const addToFavorite = (product) => {
		dispatch(addFavorite(product));
	};
	const deleteFavoriteById = (id) => {
		dispatch(deleteFavorite(id));
	};

	return { addToFavorite, deleteFavoriteById };
};
