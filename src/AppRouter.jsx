import { appRoutes } from '@routes/appRouters';
import { Home } from '@views/Home/index';
import { Layout } from '@views/Layout';
import { BrowserRouter, Route } from 'react-router';

import { Favorites } from './views/Favorites';
import { RoutesWithNotFound } from './views/NotFoundPage';
import { ProductsDetails } from './views/ProductsDetails';

/**
 * Main application router.
 * This component sets up the routing for the application using React Router.
 * It defines the routes and their corresponding components.
 */
function AppRouter() {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route
					element={<Layout />}
					path={appRoutes.home.index}
				>
					<Route
						element={<Home />}
						path={appRoutes.home.index}
					/>
					<Route
						element={<Favorites />}
						path={appRoutes.favorites.list}
					/>
					<Route
						element={<ProductsDetails />}
						path={appRoutes.products.routes.details}
					/>
					{/* <Route
            element={<CreateProduct />}
            path={appRoutes.products.create}
        /> */}
					{/* <Route
        element={<UpdateProduct />}
        path={AppRoutes.products.updateProduct}
    /> */}
				</Route>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
}

export default AppRouter;
