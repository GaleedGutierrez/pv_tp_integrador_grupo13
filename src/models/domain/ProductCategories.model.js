/**
 * @readonly
 * @enum {string}
 */
export const PRODUCT_CATEGORIES = Object.freeze({
	electronics: 'electronics',
	jewelry: 'jewelery',
	mensClothing: "men's clothing",
	womenClothing: "women's clothing",
});

/**
 * @typedef {typeof PRODUCT_CATEGORIES[keyof typeof PRODUCT_CATEGORIES]} ProductCategory
 */
