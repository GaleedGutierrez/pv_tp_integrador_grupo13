/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Product } from '@modules/products/domain/Product';
import { fetchData } from '@utils/fetchData';

/**
 * Implementation of ProductRepository using the Fake Store API
 * This class provides methods to interact with the Fake Store API for product data.
 */
export class ApiProductsRepository {
	/**
	 * Base URL for the Fake Store API
	 */
	#URL_BASE = 'https://fakestoreapi.com';
	/**
	 * Searches for all products
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns A promise that resolves with an array of products or undefined if not found
	 */
	async getAll() {
		const ENDPOINT = `${this.#URL_BASE}/products`;

		try {
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to get all products');
			}

			return DATA.map(
				(product) =>
					new Product({
						id: product.id,
						title: product.title,
						price: product.price,
						description: product.description,
						category: product.category,
						image: product.image,
						rating: product.rating
							? {
									rate: product.rating.rate,
									count: product.rating.count,
								}
							: undefined,
					}),
			);
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Searches for a product by ID
	 * @param id - The ID of the product to search for
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns A promise that resolves with the product or undefined if not found
	 */
	async searchById(id) {
		const ENDPOINT = `${this.#URL_BASE}/products/${id}`;

		try {
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error(`Failed to get product with ID: ${id}`);
			}

			return new Product({
				id: DATA.id,
				title: DATA.title,
				price: DATA.price,
				description: DATA.description,
				category: DATA.category,
				image: DATA.image,
				rating: DATA.rating
					? {
							rate: DATA.rating.rate,
							count: DATA.rating.count,
						}
					: undefined,
			});
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Save a new product
	 * Sends a POST request to save a new product in the Fake Store API
	 * Posted data will not really insert into the database and just return a fake id.
	 * This is a limitation of the Fake Store API, which is intended for testing purposes only.
	 * @see https://github.com/keikaavousi/fake-store-api?tab=readme-ov-file#add-new-product
	 * @param product - The product to save
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns A promise that resolves with the saved product or undefined if not found.
	 */
	async save(product) {
		const ENDPOINT = `${this.#URL_BASE}/products`;

		try {
			const DATA = await fetchData(ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			});

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to create product');
			}

			return new Product({
				id: DATA.id,
				title: DATA.title,
				price: DATA.price,
				description: DATA.description,
				category: DATA.category,
				image: DATA.image,
			});
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Updates an existing product
	 * Sends a PUT request to update an existing product in the Fake Store API
	 * Edited data will not really be updated into the database.
	 * This is a limitation of the Fake Store API, which is intended for testing purposes only.
	 * @see https://github.com/keikaavousi/fake-store-api?tab=readme-ov-file#updating-a-product
	 * @param product - The product to update
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns A promise that resolves with the updated product or undefined if not found
	 */
	async update(product) {
		const { id } = product;
		const ENDPOINT = `${this.#URL_BASE}/products/${id}`;

		try {
			const DATA = await fetchData(ENDPOINT, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(product),
			});

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to create product');
			}

			return new Product({
				id: DATA.id,
				title: DATA.title,
				price: DATA.price,
				description: DATA.description,
				category: DATA.category,
				image: DATA.image,
				rating: DATA.rating
					? {
							rate: DATA.rating.rate,
							count: DATA.rating.count,
						}
					: undefined,
			});
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Deletes a product by ID
	 * Sends a DELETE request to remove a product from the Fake Store API
	 * Nothing will delete on the database.
	 * This is a limitation of the Fake Store API, which is intended for testing purposes only.
	 * @see https://github.com/keikaavousi/fake-store-api?tab=readme-ov-file#deleting-a-product
	 * @param id - The ID of the product to delete
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns A promise that resolves when the product is deleted
	 */
	async delete(id) {
		const ENDPOINT = `${this.#URL_BASE}/products/${id}`;

		try {
			const RESPONSE = await fetchData(ENDPOINT, {
				method: 'DELETE',
			});

			if (!(RESPONSE instanceof Response) || !RESPONSE.ok) {
				throw new Error('Failed to delete product');
			}
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Searches for products by category
	 * Sends a GET request to search for products by category
	 * @returns A promise that resolves with an array of products in the specified category or undefined if not found
	 * @throws TypeError If the request fails or the response is not valid
	 */
	async getAllCategories() {
		const ENDPOINT = `${this.#URL_BASE}/products/categories`;

		try {
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to create product');
			}

			return DATA;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Searches for all products in a specific category.
	 * @param category - The category to search for products in.
	 * @returns A promise that resolves with an array of products in the specified category or undefined if not found.
	 * @throws TypeError If the request fails or the response is not valid.
	 */
	async getByCategory(category) {
		const ENDPOINT = `${this.#URL_BASE}/products/category/${category}`;

		try {
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error(
					`Failed to get products in category: ${category}`,
				);
			}

			return DATA.map(
				(product) =>
					new Product({
						id: product.id,
						title: product.title,
						price: product.price,
						description: product.description,
						category: product.category,
						image: product.image,
						rating: product.rating
							? {
									rate: product.rating.rate,
									count: product.rating.count,
								}
							: undefined,
					}),
			);
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
