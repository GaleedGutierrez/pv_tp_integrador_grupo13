// @ts-nocheck
import { useAppDispatch } from '@hooks/useAppDispatch';

// import { useProductDependencies } from '../hooks/useProductDependencies.jsx';
import {
	// addAllProducts as addAllOfProducts,
	deleteProductById,
} from '../slice/productSlice.js';

// const { getAllProducts } = useProductDependencies();
export const useProductActions = () => {
	const dispatch = useAppDispatch();
	const deleteProduct = (id) => {
		dispatch(deleteProductById(id));
	};

	// const allAllProducts = async (): Promise<void> => {
	// 	try {
	// 		const PRODUCTS = await getAllProducts();
	// 		if (!PRODUCTS) {
	// 			throw new Error('Failed to fetch products');
	// 		}
	// 		dispatch(addAllOfProducts(PRODUCTS));
	// 	} catch (error) {
	// 		if (error instanceof Error) {
	// 			throw new TypeError(error.message);
	// 		}
	// 	}
	// };
	return { deleteProduct /*addAllProducts: allAllProducts*/ };
};
