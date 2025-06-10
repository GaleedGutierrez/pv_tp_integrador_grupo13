/** @import { Product } from './Product.model' */

/**
 * @typedef {object} ProductRepository - Interface for product data access
 * @property {function(): Promise<void | Product[]>} getAll - Searches for all products
 * @property {function(string): Promise<void | Product>} searchById - Searches for a product by ID
 * @property {function(Omit<Product, 'id'>): Promise<void | Product>} create - Creates a new product
 * @property {function(Product): Promise<void | Product>} update - Updates an existing product
 * @property {function(string): Promise<void>} delete - Deletes a product by ID
 */

// Empty export to ensure this file is treated as a module
export {};
