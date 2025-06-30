/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export class ProductGetter {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async get(id) {
		try {
			const PRODUCTS = await this.#repository.searchById(id);

			if (!PRODUCTS) {
				throw new Error(`Failed to get product with ID: ${id}`);
			}

			return PRODUCTS;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
