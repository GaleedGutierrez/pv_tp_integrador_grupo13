/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { appRoutes } from '@routes/appRouters';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { UserIcon } from '@ui/user';
import { Link } from 'react-router';

import { useAuthContext } from '@/context/auth.context';

export const NavbarDesktop = () => {
	const { auth, authActions } = useAuthContext();
	const { isLoggedIn, user } = auth;
	const { logout: handleLogout } = authActions;

	return (
		<div className="hidden lg:block">
			<nav>
				<ul className="m-0 flex flex-row items-start">
					{isLoggedIn ? (
						<>
							<li>
								<Link
									className="rounded-lg p-2 text-2xl text-base hover:bg-gray-100 active:bg-transparent active:underline"
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
									className="rounded-lg p-2 text-2xl text-base hover:bg-gray-100 active:bg-transparent active:underline"
									to={appRoutes.private.favorites.list}
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
									className="rounded-lg p-2 text-2xl text-base hover:bg-gray-100 active:bg-transparent active:underline"
									to={
										appRoutes.private.products.routes.create
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
											{user?.name && user.lastname
												? `${user.name} ${user.lastname}`
												: user?.email}
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<button
												className="w-full text-start text-base"
												onClick={handleLogout}
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
									className="rounded-lg p-2 text-2xl text-base hover:bg-gray-100 active:bg-transparent active:underline"
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
									className="rounded-lg p-2 text-2xl text-base hover:bg-gray-100 active:bg-transparent active:underline"
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
		</div>
	);
};
