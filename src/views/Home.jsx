import { Hero } from '@components/Hero';
import { LayoutBase } from '@components/LayoutBase';

/**
 * Home component that serves as the main entry point of the application.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
export const Home = () => (
	<LayoutBase>
		<main>
			<Hero />
		</main>
	</LayoutBase>
);
