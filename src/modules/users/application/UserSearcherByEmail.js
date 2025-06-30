/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export class UserSearcherByEmail {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	searchByEmail(email) {
		try {
			const FOUND_USER = this.#repository.findByEmail(email);

			if (!FOUND_USER) {
				throw new Error(`User with email ${email} not found.`);
			}

			return FOUND_USER;
		} catch (error) {
			const MY_ERROR =
				error instanceof Error
					? error
					: new Error(
							'Unexpected error occurred during user search by email.',
						);

			throw MY_ERROR;
		}
	}
}
