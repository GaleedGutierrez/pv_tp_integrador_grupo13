/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { keysLocalStorage } from '@constants/keysLocalStorage';
import { AllProductsGetter } from '@modules/products/application/AllProductsGetter';
import { productToPlainObject } from '@modules/products/application/ProductToPlainObject';
import { ApiProductsRepository } from '@modules/products/infrastructure/ApiProductsRepository';
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const productRepository = new ApiProductsRepository();
const getAllProducts = new AllProductsGetter(productRepository);
const DEFAULT_STATE = [];

// Create async thunk for loading initial products
export const loadInitialProducts = createAsyncThunk(
	'products/loadInitial',
	async () => {
		const PRODUCTS = await getAllProducts.get();

		if (!PRODUCTS) {
			throw new Error('Failed to load products from API');
		}

		return PRODUCTS.map((product) => productToPlainObject(product));
	},
	{
		// ✅ Condition to check if products are already loaded
		condition: (_argument, { getState }) => {
			const STATE = getState();

			// If products are already loaded, skip the action
			if (STATE.products.items.length > 0) {
				return false;
			}

			// Check localStorage for persisted state
			const PERSISTED_STATE = localStorage.getItem(
				keysLocalStorage.redux.globalState,
			);

			if (PERSISTED_STATE) {
				try {
					const PARSED_STATE = JSON.parse(PERSISTED_STATE);

					if (
						PARSED_STATE.products?.items &&
						Array.isArray(PARSED_STATE.products.items) &&
						PARSED_STATE.products.items.length > 0
					) {
						return false;
					}
				} catch (error) {
					console.error('Error parsing localStorage:', error);
				}
			}

			return true;
		},
	},
);

const getInitialState = () => {
	const PERSISTED_STATE = localStorage.getItem(
		keysLocalStorage.redux.globalState,
	);

	if (PERSISTED_STATE) {
		try {
			const PARSED_STATE = JSON.parse(PERSISTED_STATE);

			if (
				PARSED_STATE.products?.items &&
				Array.isArray(PARSED_STATE.products.items)
			) {
				return PARSED_STATE.products.items;
			}
		} catch (error) {
			console.error('Error parsing persisted state:', error);
		}
	}

	return DEFAULT_STATE;
};
const initialState = {
	items: getInitialState(),
	loading: false,
	error: undefined,
};
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const CURRENT_PRODUCTS = current(state.items);
			const LAST_PRODUCT = CURRENT_PRODUCTS.findLast(
				(product) => product.id,
			);
			const NEW_PRODUCT_ID = LAST_PRODUCT ? LAST_PRODUCT.id + 1 : 1;
			const { id: _ignored, ...payloadWithoutId } = action.payload;
			const NEW_PRODUCT = {
				id: NEW_PRODUCT_ID,
				...payloadWithoutId,
			};

			state.items = [...state.items, NEW_PRODUCT];
		},
		deleteProductById: (state, action) => {
			state.items = state.items.filter(
				(product) => product.id !== action.payload,
			);
		},
		updateProduct: (state, action) => {
			const INDEX_FOUND_PRODUCT = state.items.findIndex(
				(product) => product.id === action.payload.id,
			);

			if (INDEX_FOUND_PRODUCT !== -1) {
				state.items[INDEX_FOUND_PRODUCT] = action.payload;
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
				state.items = action.payload;
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
