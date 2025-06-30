/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Link } from 'react-router';

import { useAuthContext } from '@/context/auth.context';
import { appRoutes } from '@/routes/appRouters';

import { Navbar } from './Navbar';

/**
 * Header component
 * @returns The rendered header component with the navigation bar.
 */
export const Header = () => {
	const { auth } = useAuthContext();
	const { user } = auth;

	// const menuIconReference = useRef<MenuIconHandle | null>(null);
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	//
	/**
	 * This function checks if the menu is currently open or closed.
	 */
	// const handleMenuToggle = (): void => {
	// 	if (isMenuOpen) {
	// 		menuIconReference.current?.stopAnimation();
	// 	} else {
	// 		menuIconReference.current?.startAnimation();
	// 	}
	// 	setIsMenuOpen(!isMenuOpen);
	// };
	return (
		<header className="z-1 sticky inset-0 flex items-center justify-between gap-4 border-b border-gray-200 bg-white p-5 lg:justify-between lg:gap-10">
			<div className="flex items-center gap-4 lg:justify-between lg:gap-10">
				{/* <button
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="h-7 w-7 lg:hidden"
            onClick={handleMenuToggle}
        >
            <MenuIcon
                ref={menuIconReference}
                className="h-7 w-7"
            />
        </button> */}
				<Link
					className="font-heading text-2xl"
					to={appRoutes.private.home}
				>
					Shop.co
				</Link>
			</div>
			{user && (
				<p className="hidden text-center lg:block">
					Bienvenido,{' '}
					{user.name && user.lastname
						? `${user.name} ${user.lastname}`
						: user.email}
				</p>
			)}
			<Navbar />
			{/* <div className="flex items-center gap-3">
            <SearchIcon className="md:hidden" />
            <CartIcon />
            <UserIcon />
        </div> */}
		</header>
	);
};
