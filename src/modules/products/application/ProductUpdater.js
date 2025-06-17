export class ProductGetter {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async update(product) {
		try {
			const PRODUCTS = await this.#repository.update(product);

			if (!PRODUCTS) {
				throw new Error(`Failed to get product with ID: ${product.id}`);
			}

			return PRODUCTS;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
