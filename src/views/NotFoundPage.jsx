import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Navigate, Route, Routes } from 'react-router';

/**
 * NotFoundPage component.
 * This component renders a simple "not found" page with a title and a message.
 * @returns The rendered component with routes and a not found page.
 * */
const NotFoundPage = () => (
	<>
		<Header />
		<main>
			<h1 className="text-center">Ups! Página no encontrada</h1>
			<h2 className="text-center">Error 404</h2>
		</main>
		<Footer />
	</>
);

/**
 * RoutesWithNotFound component.
 * This component wraps the provided children routes and adds a catch-all route
 * that redirects to a "not found" page if no other routes match.
 * @param children - The child routes to render.
 * @returns The rendered component with routes and a not found page.
 * */
export const RoutesWithNotFound = ({ children }) => (
	<Routes>
		{children}
		<Route
			element={<Navigate to="/404" />}
			path="*"
		/>
		<Route
			element={<NotFoundPage />}
			path="/404"
		/>
	</Routes>
);
