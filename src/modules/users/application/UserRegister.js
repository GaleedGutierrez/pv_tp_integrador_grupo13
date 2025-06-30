/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export class UserRegister {
	#repository;
	constructor(repository) {
		this.#repository = repository;
	}

	register(user) {
		try {
			const NEW_USER = this.#repository.register(user);

			if (!NEW_USER) {
				throw new Error('Failed to register user');
			}

			return NEW_USER;
		} catch (error) {
			const MY_ERROR =
				error instanceof Error
					? error
					: new Error(
							'Unexpected error occurred during user registration',
						);

			throw MY_ERROR;
		}
	}
}
