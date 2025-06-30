/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { keysLocalStorage } from '@/constants/keysLocalStorage';

import { AuthContext } from './auth.context';
import { useGlobalContext } from './global.context';

const AuthProvider = ({ children }) => {
	// Auth state
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const userReference = useRef(undefined);
	const isInitialized = useRef(false);
	const { userSessionManager, userAuthenticator } = useGlobalContext();
	/**
	 * Check session status.
	 */
	const checkSession = useCallback(() => {
		try {
			const SESSION = userSessionManager?.getSession();

			if (!SESSION?.user) {
				setUser(undefined);
				setIsLoggedIn(false);

				return;
			}

			userReference.current = SESSION.user;
			setUser(SESSION.user);
			setIsLoggedIn(true);
		} catch (error) {
			console.error('Error checking session:', error);
			setUser(undefined);
			setIsLoggedIn(false);
		} finally {
			setIsLoading(false);
		}
	}, [userSessionManager]);
	/**
	 * Log in with email and password.
	 */
	const login = useCallback(
		(email, password) => {
			try {
				setIsLoading(true);

				const AUTHENTICATED_USER = userAuthenticator?.authenticate(
					email,
					password,
				);

				if (!AUTHENTICATED_USER) {
					return {
						success: false,
						error: 'Credenciales inválidas',
					};
				}

				userSessionManager?.createSession(AUTHENTICATED_USER);
				setUser(AUTHENTICATED_USER);
				setIsLoggedIn(true);

				return {
					success: true,
					user: AUTHENTICATED_USER,
				};
			} catch (error) {
				const ERROR_MESSAGE =
					error instanceof Error
						? error.message
						: 'Error de autenticación';

				setIsLoggedIn(false);
				setUser(undefined);

				return {
					success: false,
					error: ERROR_MESSAGE,
				};
			} finally {
				setIsLoading(false);
			}
		},
		[userAuthenticator, userSessionManager],
	);
	/**
	 * Logout function
	 */
	const logout = useCallback(() => {
		try {
			userSessionManager?.destroySession();
			setUser(undefined);
			setIsLoggedIn(false);
		} catch (error) {
			console.error('Error during logout:', error);
		}
	}, [userSessionManager]);
	/**
	 * Refresh session function
	 */
	const refreshSession = useCallback(() => {
		try {
			if (!user?.id) {
				return;
			}

			const VALID_USER = userAuthenticator?.validateSession(user.id);

			if (VALID_USER) {
				userSessionManager?.createSession(VALID_USER);
				setUser(VALID_USER);
			} else {
				logout();
			}
		} catch (error) {
			console.error('Error refreshing session:', error);
			logout();
		}
	}, [userAuthenticator, userSessionManager, user?.id, logout]);

	// Initialize session on mount
	useEffect(() => {
		if (!isInitialized.current) {
			isInitialized.current = true;
			checkSession();
		}
	}, [checkSession]);
	// Listen for storage changes
	useEffect(() => {
		const handleStorageChange = (event) => {
			if (event.key === keysLocalStorage.sessionUser) {
				checkSession();
			}
		};

		globalThis.addEventListener('storage', handleStorageChange);

		return () => {
			globalThis.removeEventListener('storage', handleStorageChange);
		};
	}, [checkSession]);

	const CONTEXT_VALUE = useMemo(
		() => ({
			auth: {
				isLoggedIn,
				user,
				isLoading,
			},
			authActions: {
				login,
				logout,
				checkSession,
				refreshSession,
			},
		}),
		[
			isLoggedIn,
			user,
			isLoading,
			login,
			logout,
			checkSession,
			refreshSession,
		],
	);

	return (
		<AuthContext.Provider value={CONTEXT_VALUE}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
