import { appRoutes } from '@routes/appRouters';
import { Link } from 'react-router';

/**
 * This component renders a navigation bar with links to different sections of the application.
 * @returns The rendered component with routes and a not found page.
 * */
export const Navbar = ({ isMenuOpen }) => (
	// <nav className={`flex flex-col gap-2 p-5 ${isOpenMenu ? 'block' : 'hidden'} md:flex md:flex-row md:gap-4`}>
	<nav
		className={`${isMenuOpen ? 'block' : 'hidden'} top-18 inset-x-0 border-gray-200 bg-white p-5 lg:static lg:block lg:w-fit lg:p-0 fixed z-1 w-full border-b`}
	>
		<ul className="gap-2 lg:m-0 lg:flex-row lg:items-start m-auto flex flex-col items-center">
			<li>
				<Link
					className="rounded-lg p-2 text-2xl hover:bg-gray-100 lg:text-base active:bg-transparent active:underline"
					to={appRoutes.home.index}
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					className="rounded-lg p-2 text-2xl hover:bg-gray-100 lg:text-base active:bg-transparent active:underline"
					to={appRoutes.favorites.list}
				>
					Favoritos
				</Link>
			</li>
			{/* <li>
        <Link
            className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline lg:text-base"
            to={appRoutes.products.create}
        >
            +Añadir Producto
        </Link>
    </li> */}
		</ul>
	</nav>
);
