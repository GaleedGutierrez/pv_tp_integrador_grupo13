// @ts-nocheck
/**
 * @typedef {Object} Product
 * @property {number} id - Identificador único del producto
 * @property {string} title - Nombre del producto
 * @property {number} price - Precio en USD
 * @property {string} description - Descripción detallada
 * @property {ProductCategory} category - Categoría del producto
 * @property {string} image - URL de la imagen
 * @property {ProductRating} rating - Información de valoración
 */

/**
 * @typedef {Object} ProductRating
 * @property {number} rate - Valoración promedio (1-5)
 * @property {number} count - Número total de valoraciones
 */

/**
 * Creates a new Product instance
 * @returns The created product
 */
export class Product {
	/** Unique identifier for the product */
	id;
	/** Display name of the product */
	title;
	/** Price as a string (e.g., "$19.99") */
	price;
	/** Detailed description of the product */
	description;
	/** Product category from predefined options */
	category;
	/** URL or path to the product image */
	image;
	/** Represents the rating information for a product. */
	rating;
	/**
	 * Creates a new Product instance.
	 * @param parameters - The parameters to initialize the product.
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
