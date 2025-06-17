import { useProductRepository } from '@hooks/useDependencies';

export const useProductDependencies = () => {
	const productRepository = useProductRepository();
	const getAllProducts = async () => {
		try {
			const PRODUCTS = await productRepository.getAll();

			if (!PRODUCTS) {
				throw new Error('Failed to get all products');
			}

			return PRODUCTS;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	};

	return { getAllProducts };
};
