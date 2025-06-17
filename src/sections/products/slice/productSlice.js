/* eslint-disable security/detect-object-injection */
import { keysLocalStorage } from '@constants/keysLocalStorage';
import { AllProductsGetter } from '@modules/products/application/AllProductsGetter.js';
import { ApiProductsRepository } from '@modules/products/infrastructure/ApiProductsRepository.js';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const productRepository = new ApiProductsRepository();
const getAllProducts = new AllProductsGetter(productRepository);
const DEFAULT_STATE = [];

// Create async thunk for loading initial products
export const loadInitialProducts = createAsyncThunk(
	'products/loadInitial',
	async () => {
		const PERSISTED_STATE = localStorage.getItem(
			keysLocalStorage.redux.globalState,
		);

		if (PERSISTED_STATE) {
			try {
				const PARSED_STATE = JSON.parse(PERSISTED_STATE);

				if (
					PARSED_STATE.products &&
					Array.isArray(PARSED_STATE.products) &&
					PARSED_STATE.products.length > 0
				) {
					return PARSED_STATE.products;
				}
			} catch (error) {
				console.error('Error parsing persisted state:', error);
			}
		}

		// If no valid persisted state, fetch from API
		const PRODUCTS = await getAllProducts.get();

		if (!PRODUCTS) {
			throw new Error('Failed to load products from API');
		}

		// Map products to transform plain objects to Product type
		// Redux don't support class instances in state
		return PRODUCTS.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: product.image,
			rating: {
				rate: product.rating.rate,
				count: product.rating.count,
			},
		}));
	},
);

const getInitialState = () => {
	const PERSISTED_STATE = localStorage.getItem(
		keysLocalStorage.redux.globalState,
	);

	if (PERSISTED_STATE) {
		try {
			const PARSED_STATE = JSON.parse(PERSISTED_STATE);

			if (PARSED_STATE.products && Array.isArray(PARSED_STATE.products)) {
				return PARSED_STATE.products;
			}
		} catch (error) {
			console.error('Error parsing persisted state:', error);
		}
	}

	return DEFAULT_STATE;
};
const initialState = {
	products: getInitialState(),
	loading: false,
	error: undefined,
};
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		deleteProductById: (state, action) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload,
			);
		},
		updateProduct: (state, action) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id,
			);

			if (index !== -1) {
				state.products[index] = action.payload;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadInitialProducts.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(loadInitialProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(loadInitialProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to load products';
			});
	},
});

export const { addProduct, deleteProductById, updateProduct } =
	productsSlice.actions;
export default productsSlice.reducer;
