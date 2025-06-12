import { AppRoutes } from '@models/routes/appRouters.model';
import { Link } from 'react-router';

/**
 * This component renders a navigation bar with links to different sections of the application.
 * @param {Object} props - The component props.
 * @param {boolean} props.isMenuOpen - A flag indicating whether the menu is open or not.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
export const Navbar = ({ isMenuOpen }) => (
	// <nav className={`flex flex-col gap-2 p-5 ${isOpenMenu ? 'block' : 'hidden'} md:flex md:flex-row md:gap-4`}>
	<nav
		className={`${isMenuOpen ? 'block' : 'hidden'} z-1 top-18 fixed inset-x-0 w-full bg-white p-5 lg:static lg:block lg:w-fit lg:p-0`}
	>
		<ul className="m-auto flex flex-col items-center gap-2 lg:m-0 lg:flex-row lg:items-start">
			<li>
				<Link
					className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline lg:text-base"
					to={AppRoutes.home}
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline lg:text-base"
					to={AppRoutes.favorites}
				>
					Favoritos
				</Link>
			</li>
			<li>
				<Link
					className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline lg:text-base"
					to={AppRoutes.products.addNewProduct}
				>
					+Añadir Producto
				</Link>
			</li>
		</ul>
	</nav>
);
