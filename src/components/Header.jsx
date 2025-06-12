import { MenuIcon } from '@app/components/ui/menu';
import { AppRoutes } from '@models/routes/appRouters.model';
import { useRef, useState } from 'react';
import { Link } from 'react-router';

import { Navbar } from './Navbar';
/** @import { IconAnimation } from '@models/domain/IconAnimation.model' */

/**
 * Header component
 * @returns {import('react').JSX.Element} The rendered header component with the navigation bar.
 */
export const Header = () => {
	/** @type {import('react').RefObject<IconAnimation | null>} */
	const menuIconReference = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	/**
	 * @description This function checks if the menu is currently open or closed.
	 * @returns {void}
	 */
	const handleMenuToggle = () => {
		if (isMenuOpen) {
			menuIconReference.current?.stopAnimation();
		} else {
			menuIconReference.current?.startAnimation();
		}

		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="z-1 sticky inset-0 flex items-center justify-between gap-4 bg-white p-5 lg:justify-between lg:gap-10 lg:p-7">
			<div className="flex items-center gap-4 lg:justify-between lg:gap-10">
				<button
					aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
					className="h-7 w-7 lg:hidden"
					onClick={handleMenuToggle}
				>
					<MenuIcon
						ref={menuIconReference}
						className="h-7 w-7"
					/>
				</button>
				<Link
					className="font-heading text-2xl"
					to={AppRoutes.home}
				>
					Shop.co
				</Link>
			</div>
			<Navbar isMenuOpen={isMenuOpen} />
			{/* <div className="flex items-center gap-3">
				<SearchIcon className="md:hidden" />
				<CartIcon />
				<UserIcon />
			</div> */}
		</header>
	);
};
