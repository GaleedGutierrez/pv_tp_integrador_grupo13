/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export class AllProductsGetter {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async get() {
		try {
			const PRODUCTS = await this.#repository.getAll();

			if (!PRODUCTS) {
				throw new Error('Failed to get all products');
			}

			return PRODUCTS;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
