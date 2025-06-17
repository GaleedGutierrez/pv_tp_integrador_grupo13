import { createAsyncThunk } from '@reduxjs/toolkit';
import { dependencies } from '@store/store';

/**
 * Async thunk to fetch all products
 * Uses the product repository from dependencies
 */
export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
	const products = await dependencies.productRepository.getAll();

	if (!products) {
		throw new Error('Failed to fetch products');
	}

	return products;
});
/**
 * Async thunk to create a new product
 * @param productData - The product data to create
 */
export const createProduct = createAsyncThunk(
	'products/create',
	async (productData) => {
		const product = await dependencies.productRepository.save(productData);

		if (!product) {
			throw new Error('Failed to create product');
		}

		return product;
	},
);
/**
 * Async thunk to update an existing product
 * @param product - The product to update
 */
export const updateProduct = createAsyncThunk(
	'products/update',
	async (product) => {
		const updatedProduct =
			await dependencies.productRepository.update(product);

		if (!updatedProduct) {
			throw new Error('Failed to update product');
		}

		return updatedProduct;
	},
);
/**
 * Async thunk to delete a product
 * @param id - The ID of the product to delete
 */
export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
	await dependencies.productRepository.delete(id);

	return id;
});
