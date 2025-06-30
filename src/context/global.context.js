import { createContext, useContext } from 'react';

export const GlobalContext = createContext({
	productRepository: undefined,
	getAllProducts: undefined,
	addNewProduct: undefined,
	updateProduct: undefined,
	userRepository: undefined,
	userRegister: undefined,
	userSearcherByEmail: undefined,
	userAuthenticator: undefined,
	userSessionManager: undefined,
});
export const useGlobalContext = () => {
	const CONTEXT = useContext(GlobalContext);

	if (
		!CONTEXT.productRepository ||
		!CONTEXT.getAllProducts ||
		!CONTEXT.addNewProduct ||
		!CONTEXT.updateProduct ||
		!CONTEXT.userRepository ||
		!CONTEXT.userRegister ||
		!CONTEXT.userSearcherByEmail ||
		!CONTEXT.userAuthenticator ||
		!CONTEXT.userSessionManager
	) {
		throw new Error(
			'GlobalContext must be used within a GlobalContextProvider',
		);
	}

	return CONTEXT;
};
