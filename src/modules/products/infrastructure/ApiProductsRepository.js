import { Product } from '@modules/products/domain/Product';
import { fetchData } from '@utils/fetchData';
/** @import {TypeProductCategory} from '../domain/ProductCategory' */

/**
 * ApiProduct - Represents a product from the API.
 * @typedef {Object} ApiProduct
 * @property {number} id - Unique identifier for the product
 * @property {string} title - Display name of the product
 * @property {number} price - Price as a number (e.g., 19.99)
 * @property {string} description - Detailed description of the product
 * @property {string} category - Product category from predefined options
 * @property {string} image - URL or path to the product image
 * @property {Object} rating - Optional rating information
 * @property {number} rating.rate - Average rating score
 * @property {number} rating.count - Number of ratings received
 */

/**
 * Implementation of ProductRepository using the Fake Store API
 * This class provides methods to interact with the Fake Store API for product data.
 */
export class ApiProductsRepository {
	/**
	 * Base URL for the Fake Store API
	 * @readonly
	 */
	#URL_BASE = 'https://fakestoreapi.com';

	/**
	 * Searches for all products
	 * @public
	 * @returns {Promise<Product[] | void>} A promise that resolves with an array of products or undefined if not found
	 * @throws {TypeError} If the request fails or the response is not valid
	 */
	async getAll() {
		const ENDPOINT = `${this.#URL_BASE}/products`;

		try {
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to get all products');
			}

			return DATA.map(
				/** @param {ApiProduct} product */
				(product) =>
					new Product({
						id: product.id,
						title: product.title,
						price: product.price,
						description: product.description,
						category: product.category,
						image: product.image,
						rating: {
							rate: product.rating.rate,
							count: product.rating.count,
						},
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
	 * @public
	 * @param {number} id - The ID of the product to search for
	 * @returns {Promise<Product | void>} A promise that resolves with the product or undefined if not found
	 * @throws {TypeError} If the request fails or the response is not valid
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
				rating: {
					rate: DATA.rating.rate,
					count: DATA.rating.count,
				},
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
	 * @param {Omit<Product, 'id'>} product - The product to save
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns {Promise<Product | void>} A promise that resolves with the saved product or undefined if not found.	 */

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
				rating: {
					rate: DATA.rating.rate,
					count: DATA.rating.count,
				},
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
	 * @param {Product} product - The product to update
	 * @throws TypeError If the request fails or the response is not valid
	 * @returns {Promise<Product | void>} A promise that resolves with the updated product or undefined if not found	 */

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
				rating: {
					rate: DATA.rating.rate,
					count: DATA.rating.count,
				},
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
	 * @param {string} id - The ID of the product to delete
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
	 * @param {TypeProductCategory} category - The category to search for products in.
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
				/** @param {ApiProduct} product */
				(product) =>
					new Product({
						id: product.id,
						title: product.title,
						price: product.price,
						description: product.description,
						category: product.category,
						image: product.image,
						rating: {
							rate: product.rating.rate,
							count: product.rating.count,
						},
					}),
			);
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
