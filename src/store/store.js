// @ts-nocheck
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import favoritesReducer from '@sections/favorites/slice/favoritesSlice';
import productsReducer, {
	loadInitialProducts,
} from '@sections/products/slice/productSlice';

import { createDependencies } from './dependencies.js';

const listenerMiddleware = createListenerMiddleware();
const persistenceLocaleStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
};

// Create dependencies instance
export const dependencies = createDependencies();
export const store = configureStore({
	reducer: { products: productsReducer, favorites: favoritesReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// Configure thunk with extra argument if needed
			thunk: {
				extraArgument: dependencies,
			},
		}).concat(
			persistenceLocaleStorageMiddleware,
			listenerMiddleware.middleware,
		),
});

// This ensures that the initial products are loaded when the application starts
void store.dispatch(loadInitialProducts());
