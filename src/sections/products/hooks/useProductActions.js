/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useAppDispatch } from '@hooks/useAppDispatch';

import {
	addProduct,
	deleteProductById,
	updateProduct as updateProductSlice,
} from '../slices/productSlice';

export const useProductActions = () => {
	const dispatch = useAppDispatch();
	const addNewProduct = (product) => {
		dispatch(addProduct(product));
	};
	const updateProduct = (product) => {
		dispatch(updateProductSlice(product));
	};
	const deleteProduct = (id) => {
		dispatch(deleteProductById(id));
	};

	return { deleteProduct, addNewProduct, updateProduct };
};
