/**
 * Represents the rating information for a product.
 * @typedef {Object} Rating
 * @property {number} rate - Average rating score
 * @property {number} count - Number of ratings received
 */

/**
 * API Product data from external source (before transformation)
 * @typedef {Object} ApiProduct
 * @property {number} id - Unique identifier for the product
 * @property {string} title - Display name of the product
 * @property {number} price - Price as number (will be formatted to string)
 * @property {string} description - Detailed description of the product
 * @property {string} category - Product category string
 * @property {string} image - URL or path to the product image
 * @property {Rating} rating - Rating information for the product
 */

/**
 * Creates a new Product instance
 * @returns {Product} The created product
 */
export class Product {
	/** @type {number} Unique identifier for the product */
	id;
	/** @type {string} Display name of the product */
	title;
	/** @type {string} Price as a string (e.g., "$19.99") */
	price;
	/** @type {string} Detailed description of the product */
	description;
	/** @type {string} Product category from predefined options */
	category;
	/** @type {string} URL or path to the product image */
	image;
	/** @type {Rating} Represents the rating information for a product. */
	rating;

	/**
	 * Creates a new Product instance.
	 * @param {ApiProduct} parameters - The parameters to initialize the product.
	 */
	constructor(parameters) {
		const { id, title, price, description, category, image, rating } =
			parameters;

		this.id = id;
		this.title = title;
		this.price = new Intl.NumberFormat(globalThis.navigator.language, {
			style: 'currency',
			currency: 'USD',
		}).format(price);
		this.description = description;
		this.category = category;
		this.image = image;
		this.rating = rating;
	}
}
