// views/private/PrivateApp.tsx
import { appRoutes } from '@routes/appRouters';
import { Navigate, Route, Routes } from 'react-router';

import { Layout } from '../Layout';
import { CreateProduct } from './CreateProduct';
import { Favorites } from './Favorites';
import { Home } from './Home';
import { ProductsDetails } from './ProductsDetails';
import { UpdateProduct } from './UpdateProduct';

export const PrivateRoutes = () => (
	<Routes>
		<Route element={<Layout />}>
			<Route
				element={<Home />}
				path={appRoutes.private.home}
			/>
			<Route
				element={<Favorites />}
				path={appRoutes.private.favorites.list}
			/>
			<Route
				element={<ProductsDetails />}
				path={appRoutes.private.products.routes.details}
			/>
			<Route
				element={<CreateProduct />}
				path={appRoutes.private.products.routes.create}
			/>
			<Route
				element={<UpdateProduct />}
				path={appRoutes.private.products.routes.update}
			/>

			<Route
				element={<Navigate to={appRoutes.private.home} />}
				path="*"
			/>
		</Route>
	</Routes>
);
