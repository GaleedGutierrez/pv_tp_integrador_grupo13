/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export class AllProductsCategoriesGetter {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async get() {
		try {
			const CATEGORIES = await this.#repository.getAllCategories();

			if (!CATEGORIES) {
				throw new Error('Failed to get all categories');
			}

			return CATEGORIES;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}

			throw new Error('Unknown error occurred while getting categories');
		}
	}
}
