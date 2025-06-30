/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export class User {
	/** Unique identifier for the user. */
	id;
	/** Email address of the account. It is unique */
	email;
	/** Password for the user account. */
	password;
	/** Username is a unique identifier for the user, optional. */
	username;
	/** Name of the user, optional. */
	name;
	lastname;
	/** Phone number of the user, optional. */
	phone;
	/**
	 * Creates a new User instance.
	 * @param parameters - The parameters to initialize the user.
	 */
	constructor(parameters) {
		const { id, email, password, username, name, phone, lastname } =
			parameters;

		this.id = id;
		this.email = email;
		this.password = password;
		this.username = username;
		this.name = name;
		this.lastname = lastname;
		this.phone = phone;
	}
}
