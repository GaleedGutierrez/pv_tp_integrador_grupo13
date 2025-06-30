import { createContext, useContext } from 'react';

export const AuthContext = createContext({
	auth: {
		isLoggedIn: false,
		user: undefined,
		isLoading: true,
	},
	authActions: {
		login: () => ({ success: false, error: 'Context not initialized' }),
		logout: () => {
			// Default implementation - to be overridden by provider
		},
		checkSession: () => {
			// Default implementation - to be overridden by provider
		},
		refreshSession: () => {
			// Default implementation - to be overridden by provider
		},
	},
});
export const useAuthContext = () => {
	const CONTEXT = useContext(AuthContext);

	return CONTEXT;
};
