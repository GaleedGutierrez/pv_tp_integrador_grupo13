/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export class ProductsByCategoryGetter {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async get(category) {
		try {
			const PRODUCTS = await this.#repository.getByCategory(category);

			if (!PRODUCTS) {
				throw new Error(`No products found for category: ${category}`);
			}

			return PRODUCTS;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}

			throw new Error(
				'Unknown error occurred while getting products by category',
			);
		}
	}
}
