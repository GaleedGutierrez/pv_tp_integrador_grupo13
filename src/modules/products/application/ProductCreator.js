export class ProductCreator {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async create(product) {
		try {
			const PRODUCTS = await this.#repository.save(product);

			if (!PRODUCTS) {
				throw new Error(`Failed to create product: ${product.title}`);
			}

			return PRODUCTS;
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
