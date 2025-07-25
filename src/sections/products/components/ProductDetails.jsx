/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import StarIcon from '@assets/icons/star-yellow.svg?react';
import { useAppSelector } from '@hooks/useAppSelector';
import { appRoutes } from '@routes/appRouters';
import { useFavoritesActions } from '@sections/favorites/hooks/useFavoritesActions';
import { Button } from '@ui/button';
import { DeleteIcon } from '@ui/delete';
import { HeartIcon } from '@ui/heart';
import { SquarePenIcon } from '@ui/square-pen';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';

import { useProductActions } from '../hooks/useProductActions';

/**
 * Renders star rating with CSS-based half stars using Tailwind
 * @param rating - The rating value (0-5)
 * @returns Array of star components
 */
const renderStars = (rating) => {
	const STARS = [];
	const TOTAL_STARS = 5;

	for (let index = 1; index <= TOTAL_STARS; index++) {
		const STAR_VALUE = rating - (index - 1); // How many ratings belong to this star
		const FILL_PERCENTAGE = Math.min(Math.max(STAR_VALUE, 0), 1); // Between 0 and 1
		const FILL_PERCENT = Math.round(FILL_PERCENTAGE * 100); // Change to percentage

		if (FILL_PERCENT > 0) {
			STARS.push(
				<div
					key={index}
					className="relative h-5 w-5"
				>
					<div
						className="absolute inset-0 overflow-hidden"
						style={{ width: `${FILL_PERCENT}%` }}
					>
						<StarIcon className="h-5 w-5" />
					</div>
				</div>,
			);
		}
	}

	return STARS;
};

export const ProductDetails = () => {
	const PARAMS = useParams();
	const navigate = useNavigate();
	const { deleteProduct } = useProductActions();
	const { addToFavorite, deleteFavoriteById } = useFavoritesActions();
	const { items: products } = useAppSelector((state) => state.products);
	const FAVORITES_PRODUCTS = useAppSelector((state) => state.favorites);
	const [isFavorite, setIsFavorite] = useState(
		FAVORITES_PRODUCTS.some((product) => product.id === Number(PARAMS.id)),
	);
	const PRODUCT_DETAILS = products.find(
		(product) => product.id === Number(PARAMS.id),
	);
	const handleFavoriteToggle = (product) => {
		if (isFavorite) {
			setIsFavorite(false);
			deleteFavoriteById(product.id);
		} else {
			setIsFavorite(true);
			addToFavorite(product);
		}
	};

	if (!PRODUCT_DETAILS) {
		return (
			<h1 className="px-4 py-10 text-center">Producto no encontrado</h1>
		);
	}

	const { title, image, description, price, rating, id, category } =
		PRODUCT_DETAILS;

	return (
		<div className="px-4 py-10 md:grid md:grid-cols-2 md:gap-10 lg:m-auto lg:max-w-5xl">
			<div className="relative flex items-center justify-center rounded-sm rounded-xl bg-gray-100 p-7">
				<img
					alt={title}
					className="md:max-m-0 max-h-36 justify-self-center mix-blend-multiply md:max-h-none"
					src={image}
				/>
				<button
					className="absolute inset-y-2 end-2 h-6 w-6"
					title={
						isFavorite
							? 'Quitar de favoritos'
							: 'Agregar a favoritos'
					}
					onClick={() => {
						handleFavoriteToggle(PRODUCT_DETAILS);
						toast.success(
							`Producto ${isFavorite ? 'quitado de favoritos.' : 'agregado a favoritos.'}`,
						);
					}}
				>
					<HeartIcon
						className="text-rose-400"
						fill={isFavorite ? 'currentColor' : 'none'}
						size={22}
					/>
				</button>
			</div>
			<div>
				<h1 className="mb-3 mt-5">{title}</h1>
				{rating && (
					<div className="mb-3 flex items-center gap-1">
						{renderStars(rating.rate)}
						<p>{rating.rate}/5</p>
					</div>
				)}
				<p className="text-2xl font-bold lg:text-3xl">{price}</p>
				<div className="mt-5">
					<p className="text-sm font-thin">ID: {id}</p>
					<p className="text-sm font-thin capitalize">
						Categoría: {category}
					</p>
					<p>{description}</p>
				</div>
				<div className="mt-6 grid gap-3 border-t border-gray-300 pt-6 md:grid-cols-2">
					<Button
						className="w-full text-base"
						variant="destructive"
						onClick={async () => {
							deleteProduct(id);
							deleteFavoriteById(id);
							toast.success('Producto eliminado correctamente.');
							await navigate(appRoutes.private.home);
						}}
					>
						<DeleteIcon
							className="flex items-center justify-center text-white"
							size={22}
						/>
						Eliminar
					</Button>
					<Button
						asChild
						className="col-span-1 w-full text-base"
					>
						<Link
							title="Editar producto"
							to={appRoutes.private.products.buildUrl.update(id)}
						>
							<SquarePenIcon
								className="flex items-center justify-center text-white"
								size={22}
							/>
							Editar
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
