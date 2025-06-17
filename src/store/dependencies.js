import { ApiProductsRepository } from '@modules/products/infrastructure/ApiProductsRepository';

/**
 * Create production dependencies
 * All real implementations are instantiated here
 */
export const createDependencies = () => ({
	productRepository: new ApiProductsRepository(),
});
// /**
//  * Global dependencies instance
//  * This can be overridden in tests with mock implementations
//  */
// export let dependencies: Dependencies = createDependencies();
// /**
//  * Override dependencies (useful for testing)
//  * @param newDependencies - The new dependencies to use
//  */
// export const setDependencies = (newDependencies: Dependencies): void => {
// 	dependencies = newDependencies;
// };
