/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import StarIcon from '@assets/icons/star-yellow.svg?react';
import { HeartIcon } from '@components/ui/heart';
import { SquareArrowUpIcon } from '@components/ui/square-arrow-up';
import { useAppSelector } from '@hooks/useAppSelector';
import { appRoutes } from '@routes/appRouters';
import { useFavoritesActions } from '@sections/favorites/hooks/useFavoritesActions';
import { DeleteIcon } from '@ui/delete';
import { SquarePenIcon } from '@ui/square-pen';
import { useState } from 'react';
import { Link } from 'react-router';
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
					className="relative h-4 w-4"
				>
					<div
						className="absolute inset-0 overflow-hidden"
						style={{ width: `${FILL_PERCENT}%` }}
					>
						<StarIcon className="h-4 w-4" />
					</div>
				</div>,
			);
		}
	}

	return STARS;
};

/**
 * This component displays a product card with an image, title, category, ID, description, and price.
 * @returns The rendered ProductCard component.
 * */
export const ProductCard = ({ product }) => {
	const { deleteProduct } = useProductActions();
	const { addToFavorite, deleteFavoriteById } = useFavoritesActions();
	const { id, title, price, image, rating } = product;
	const FAVORITES_PRODUCTS = useAppSelector((state) => state.favorites);
	const [isFavorite, setIsFavorite] = useState(
		FAVORITES_PRODUCTS.some((product) => product.id === id),
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

	return (
		<div className="relative">
			<div className="rounded-sm rounded-xl bg-gray-100 p-7">
				<img
					alt={title}
					className="max-m-36 max-h-36 justify-self-center mix-blend-multiply"
					src={image}
				/>
			</div>
			<h1 className="font-primary line-clamp-1 text-lg font-bold lg:text-xl">
				{title}
			</h1>
			{rating && (
				<div className="flex items-center gap-1">
					{renderStars(rating.rate)}
					<p className="text-sm">{rating.rate}/5</p>
				</div>
			)}
			<div className="flex items-center justify-between gap-2">
				<p className="text-lg font-bold lg:text-xl">{price}</p>
				<div className="flex items-center">
					<Link
						className="flex h-6 w-6 items-center justify-center"
						title="Ver producto"
						to={appRoutes.private.products.buildUrl.details(id)}
					>
						<SquareArrowUpIcon
							className="flex items-center justify-center text-green-700"
							size={22}
						/>
					</Link>
					<Link
						className="flex h-6 w-6 items-center justify-center"
						title="Editar producto"
						to={appRoutes.private.products.buildUrl.update(id)}
					>
						<SquarePenIcon
							className="flex items-center justify-center text-yellow-700"
							size={22}
						/>
					</Link>
					<button
						className="flex h-6 w-6 items-center justify-center"
						title="Borrar producto"
						onClick={() => {
							deleteProduct(id);
							deleteFavoriteById(id);
							toast.success('Producto eliminado correctamente.');
						}}
					>
						<DeleteIcon
							className="flex items-center justify-center text-red-700"
							size={22}
						/>
					</button>
				</div>
				<button
					className="absolute inset-y-2 end-2 h-6 w-6"
					title={
						isFavorite
							? 'Quitar de favoritos'
							: 'Agregar a favoritos'
					}
					onClick={() => {
						handleFavoriteToggle(product);
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
		</div>
	);
};
