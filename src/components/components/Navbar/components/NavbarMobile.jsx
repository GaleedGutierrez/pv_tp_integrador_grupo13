/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useAuthContext } from '@context/auth.context';
import { appRoutes } from '@routes/appRouters';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { MenuIcon } from '@ui/menu';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@ui/sheet';
import { UserIcon } from '@ui/user';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

export const NavbarMobile = () => {
	const { auth, authActions } = useAuthContext();
	const { isLoggedIn, user } = auth;
	const { logout: handleLogout } = authActions;
	const menuIconReference = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	/**
	 * This function checks if the menu is currently open or closed.
	 */
	const handleMenuToggle = () => {
		if (isMenuOpen) {
			menuIconReference.current?.stopAnimation();
		} else {
			menuIconReference.current?.startAnimation();
		}

		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const mediaQuery = globalThis.matchMedia('(min-width: 1024px)');
		const handleScreenChange = (event) => {
			if (event.matches && isMenuOpen) {
				// Si la pantalla es >= lg y el menú está abierto, cerrarlo
				setIsMenuOpen(false);
				menuIconReference.current?.stopAnimation();
			}
		};

		// Listener para cambios de media query
		mediaQuery.addEventListener('change', handleScreenChange);

		// Cleanup al desmontar
		return () => {
			mediaQuery.removeEventListener('change', handleScreenChange);
		};
	}, [isMenuOpen]);

	return (
		<div className="lg:hidden">
			<Sheet
				open={isMenuOpen}
				onOpenChange={handleMenuToggle}
			>
				<SheetTrigger>
					<MenuIcon
						ref={menuIconReference}
						className="h-7 w-7"
					/>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle className="sr-only">
							Menú de navegación
						</SheetTitle>
					</SheetHeader>
					<SheetDescription className="sr-only">
						Elije una opción
					</SheetDescription>
					<div className="py-10">
						<nav>
							<ul className="m-auto flex flex-col items-center justify-center gap-2">
								{isLoggedIn ? (
									<>
										<li>
											<Link
												className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline"
												to={appRoutes.private.home}
												onClick={() => {
													globalThis.scrollTo({
														top: 0,
													});
												}}
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline"
												to={
													appRoutes.private.favorites
														.list
												}
												onClick={() => {
													globalThis.scrollTo({
														top: 0,
													});
												}}
											>
												Favoritos
											</Link>
										</li>
										<li>
											<Link
												className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline"
												to={
													appRoutes.private.products
														.routes.create
												}
												onClick={() => {
													globalThis.scrollTo({
														top: 0,
													});
												}}
											>
												+ Añadir Producto
											</Link>
										</li>
										<li>
											<DropdownMenu>
												<DropdownMenuTrigger title="Mi cuenta">
													<UserIcon size={20} />
												</DropdownMenuTrigger>
												<DropdownMenuContent
													collisionPadding={{
														right: 16,
													}}
												>
													<DropdownMenuLabel className="text-base">
														{user?.name &&
														user.lastname
															? `${user.name} ${user.lastname}`
															: user?.email}
													</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuItem>
														<button
															className="w-full text-start text-base"
															onClick={
																handleLogout
															}
														>
															Cerrar sesión
														</button>
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</li>
									</>
								) : (
									<>
										<li>
											<Link
												className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline"
												to={appRoutes.public.login}
												onClick={() => {
													globalThis.scrollTo({
														top: 0,
													});
												}}
											>
												Iniciar sesión
											</Link>
										</li>
										<li>
											<Link
												className="rounded-lg p-2 text-2xl hover:bg-gray-100 active:bg-transparent active:underline"
												to={appRoutes.public.register}
												onClick={() => {
													globalThis.scrollTo({
														top: 0,
													});
												}}
											>
												Registrarse
											</Link>
										</li>
									</>
								)}
							</ul>
						</nav>
						{isLoggedIn && (
							<div className="mt-8 text-center">
								Bienvenido,{' '}
								{user?.name && user.lastname
									? `${user.name} ${user.lastname}`
									: user?.email}
							</div>
						)}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
