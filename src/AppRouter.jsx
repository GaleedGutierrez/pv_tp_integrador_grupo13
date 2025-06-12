import { AppRoutes } from '@models/routes/appRouters.model';
import { Home } from '@views/Home';
import { RoutesWithNotFound } from '@views/NotFoundPage';
import { BrowserRouter, Route } from 'react-router';

/**
 * Main application router.
 * This component sets up the routing for the application using React Router.
 * It defines the routes and their corresponding components.
 * @returns {import('react').JSX.Element} The main application router component
 */
function AppRouter() {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route
					element={<Home />}
					path={AppRoutes.home}
				/>
				{/* <Route
					element={<Favorites />}
					path={AppRoutes.favorites}
				/> */}
				{/* <Route
					element={<ProductsDetails />}
					path={AppRoutes.products.productsDetails}
				/> */}
				{/* <Route
						element={<AddNewProduct />}
						path={AppRoutes.products.addNewProduct}
					/> */}
				{/* <Route
					element={<UpdateProduct />}
					path={AppRoutes.products.updateProduct}
				/> */}
			</RoutesWithNotFound>
		</BrowserRouter>
	);
}

export default AppRouter;
