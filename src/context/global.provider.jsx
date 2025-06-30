/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { keysLocalStorage } from '@constants/keysLocalStorage';
import { AllProductsGetter } from '@modules/products/application/AllProductsGetter';
import { ProductCreator } from '@modules/products/application/ProductCreator';
import { ProductUpdater } from '@modules/products/application/ProductUpdater';
import { ApiProductsRepository } from '@modules/products/infrastructure/ApiProductsRepository';
import { UserAuthenticator } from '@modules/users/application/UserAuthenticator';
import { UserRegister } from '@modules/users/application/UserRegister';
import { UserSearcherByEmail } from '@modules/users/application/UserSearcherByEmail';
import { UserSessionManager } from '@modules/users/application/UserSessionManager';
import { ApiUserRepository } from '@modules/users/infrastructure/ApiUserRepository';
import { useMemo } from 'react';

import { GlobalContext } from './global.context';

const GlobalProvider = ({ children }) => {
	const productRepository = useMemo(() => new ApiProductsRepository(), []);
	const userRepository = useMemo(() => new ApiUserRepository(), []);
	const getAllProducts = useMemo(
		() => new AllProductsGetter(productRepository),
		[productRepository],
	);
	const addNewProduct = useMemo(
		() => new ProductCreator(productRepository),
		[productRepository],
	);
	const updateProduct = useMemo(
		() => new ProductUpdater(productRepository),
		[productRepository],
	);
	const userRegister = useMemo(
		() => new UserRegister(userRepository),
		[userRepository],
	);
	const userSearcherByEmail = useMemo(
		() => new UserSearcherByEmail(userRepository),
		[userRepository],
	);
	const userAuthenticator = useMemo(
		() => new UserAuthenticator(userRepository),
		[userRepository],
	);
	const userSessionManager = useMemo(
		() => new UserSessionManager(keysLocalStorage.sessionUser),
		[],
	);
	const CONTEXT_VALUE = useMemo(
		() => ({
			productRepository,
			userRepository,
			getAllProducts,
			addNewProduct,
			updateProduct,
			userRegister,
			userSearcherByEmail,
			userAuthenticator,
			userSessionManager,
		}),
		[
			productRepository,
			userRepository,
			getAllProducts,
			addNewProduct,
			updateProduct,
			userRegister,
			userSearcherByEmail,
			userAuthenticator,
			userSessionManager,
		],
	);

	return (
		<GlobalContext.Provider value={CONTEXT_VALUE}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
