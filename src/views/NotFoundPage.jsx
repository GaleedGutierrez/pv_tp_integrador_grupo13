import { LayoutBase } from '@components/LayoutBase';
import { Navigate, Route, Routes } from 'react-router';

/**
 * NotFoundPage component.
 * This component renders a simple "not found" page with a title and a message.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
const NotFoundPage = () => (
	<LayoutBase>
		<main>
			<h1 className="text-center">Ups! Página no encontrada</h1>
			<h2 className="text-center">Error 404</h2>
		</main>
	</LayoutBase>
);

/**
 * RoutesWithNotFound component.
 * This component wraps the provided children routes and adds a catch-all route
 * that redirects to a "not found" page if no other routes match.
 * @param {Object} props - The component props.
 * @param {import('react').ReactNode} props.children - The child routes to render.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
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
