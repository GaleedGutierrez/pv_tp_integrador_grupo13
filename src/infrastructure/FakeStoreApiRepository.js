/** @import { Product } from '@models/domain/Product.model' */
/** @import { ProductFromFakeStoreApi } from '@models/domain/ProductFromFakeStoreApi.model' */
/** @import { ProductRepository } from '@models/domain/FakeStoreApiRepository' */

import { fetchData } from '@utils/fetchData';

/**
 * @class FakeStoreApiRepository - Class for accessing product data from the Fake Store API
 * Implementation of ProductRepository using the Fake Store API
 * @implements {ProductRepository} - Interface for product data access
 * @description This class provides methods to interact with the Fake Store API for product data.
 */
export class FakeStoreApiRepository {
	/**
	 * Base URL for the Fake Store API
	 * @constant {string}
	 */
	#URL_BASE = 'https://fakestoreapi.com';

	/**
	 * Searches for all products
	 * @throws {TypeError} If the request fails or the response is not valid
	 * @returns {Promise<Product[] | void>} A promise that resolves with an array of products or undefined if not found
	 */
	async getAll() {
		const ENDPOINT = `${this.#URL_BASE}/products`;

		try {
			/** @type {ProductFromFakeStoreApi[] | Response| void } */
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to get all products');
			}

			/**
			 * Map the data to the Product type
			 * @type {Product[]}
			 */
			return DATA.map((product) => ({
				id: product.id,
				title: product.title,
				price: product.price,
				description: product.description,
				category: product.category,
				image: product.image,
			}));
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Searches for a product by ID
	 * @param {string} id - The ID of the product to search for
	 * @throws {TypeError} If the request fails or the response is not valid
	 * @returns {Promise<Product | void>} A promise that resolves with the product or undefined if not found
	 */
	async searchById(id) {
		const ENDPOINT = `${this.#URL_BASE}/products/${id}`;

		try {
			/** @type {ProductFromFakeStoreApi | Response| void } */
			const DATA = await fetchData(ENDPOINT);

			if (!DATA || DATA instanceof Response) {
				throw new Error('Failed to get all products');
			}

			/**
			 * Map the data to the Product type
			 * @type {Product}
			 */
			return {
				id: DATA.id,
				title: DATA.title,
				price: DATA.price,
				description: DATA.description,
				category: DATA.category,
				image: DATA.image,
			};
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Creates a new product
	 * @description Sends a POST request to create a new product in the Fake Store API
	 * @param {Omit<Product, 'id'>} product - The product to create
	 * @throws {TypeError} If the request fails or the response is not valid
	 * @returns {Promise<Product | void>} A promise that resolves with the created product or undefined if not found
	 * @description Posted data will not really insert into the database and just return a fake id.
	 * This is a limitation of the Fake Store API, which is intended for testing purposes only.
	 * @see https://github.com/keikaavousi/fake-store-api?tab=readme-ov-file#add-new-product
	 */
	async create(product) {
		const ENDPOINT = `${this.#URL_BASE}/products`;

		try {
			/** @type {ProductFromFakeStoreApi | Response| void } */
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

			/**
			 * Map the data to the Product type
			 * @type {Product}
			 */
			return {
				id: DATA.id,
				title: DATA.title,
				price: DATA.price,
				description: DATA.description,
				category: DATA.category,
				image: DATA.image,
			};
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Updates an existing product
	 * @description Sends a PUT request to update an existing product in the Fake Store API
	 * @param {Product} product - The product to update
	 * @throws {TypeError} If the request fails or the response is not valid
	 * @returns {Promise<Product | void>} A promise that resolves with the updated product or undefined if not found
	 * @description Edited data will not really be updated into the database.
	 * This is a limitation of the Fake Store API, which is intended for testing purposes only.
	 * @see https://github.com/keikaavousi/fake-store-api?tab=readme-ov-file#updating-a-product
	 */
	async update(product) {
		const { id } = product;
		const ENDPOINT = `${this.#URL_BASE}/products/${id}`;

		try {
			/** @type {ProductFromFakeStoreApi | Response | void} */
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

			/**
			 * Map the data to the Product type
			 * @type {Product}
			 */
			return {
				id: DATA.id,
				title: DATA.title,
				price: DATA.price,
				description: DATA.description,
				category: DATA.category,
				image: DATA.image,
			};
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}

	/**
	 * Deletes a product by ID
	 * @description Sends a DELETE request to remove a product from the Fake Store API
	 * @param {string} id - The ID of the product to delete
	 * @throws {TypeError} If the request fails or the response is not valid
	 * @returns {Promise<void>} A promise that resolves when the product is deleted
	 * @description Nothing will delete on the database.
	 * This is a limitation of the Fake Store API, which is intended for testing purposes only.
	 * @see https://github.com/keikaavousi/fake-store-api?tab=readme-ov-file#deleting-a-product
	 */
	async delete(id) {
		const ENDPOINT = `${this.#URL_BASE}/products/${id}`;

		try {
			/** @type {ProductFromFakeStoreApi | Response | void} */
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
}
