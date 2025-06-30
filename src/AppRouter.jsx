import { useAuthContext } from '@context/auth.context';
import { PrivateApp } from '@views/private/PrivateApp';
import { PublicApp } from '@views/public/PublicApp';
import { LoaderIcon } from 'lucide-react';
import { BrowserRouter } from 'react-router';

/**
 * Main application router.
 * This component sets up the routing for the application using React Router.
 * It defines the routes and their corresponding components.
 */
function AppRouter() {
	const { auth } = useAuthContext();
	const { isLoggedIn, isLoading } = auth;

	if (isLoading) {
		return (
			<section className="my-8 flex flex-col items-center justify-center gap-4">
				<h1>Cargando...</h1>
				<LoaderIcon
					className="animate-spin"
					size={80}
				/>
			</section>
		);
	}

	return (
		<BrowserRouter>
			{isLoggedIn ? <PrivateApp /> : <PublicApp />}
		</BrowserRouter>
	);
}

export default AppRouter;
