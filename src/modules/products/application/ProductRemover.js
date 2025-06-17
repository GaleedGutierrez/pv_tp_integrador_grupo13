export class ProductRemover {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	async remove(id) {
		try {
			await this.#repository.delete(id);
		} catch (error) {
			if (error instanceof Error) {
				throw new TypeError(error.message);
			}
		}
	}
}
