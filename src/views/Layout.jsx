import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Toaster } from '@ui/sonner';
import { Outlet } from 'react-router';

/**
 * This component serves as a base layout for the application, including a header and a main content area.
 * @returns The rendered layout component with a header and main content.
 */
export const Layout = () => (
	<div className="flex min-h-screen flex-col justify-between">
		<Header />
		<main>
			<Outlet />
		</main>
		<Footer />
		<Toaster
			toastOptions={{
				classNames: {
					title: '!text-base',
					actionButton: '!text-base',
				},
			}}
		/>
	</div>
);
