import { dependencies } from '@store/store';

/**
 * Hook to access application dependencies
 * This provides a clean way to access repositories in components and thunks
 */
export const useDependencies = () => dependencies;
/**
 * Hook to access the product repository specifically
 * Convenience hook for the most commonly used repository
 */
export const useProductRepository = () => dependencies.productRepository;
