import StarIcon from '@assets/icons/star-yellow.svg?react';
import { useAppSelector } from '@hooks/useAppSelector';
import { useParams } from 'react-router';

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

export const ProductsDetails = () => {
	const PARAMS = useParams();
	const { products } = useAppSelector((state) => state.products);
	const PRODUCT_DETAILS = products.find(
		(product) => product.id === Number(PARAMS.id),
	);

	if (!PRODUCT_DETAILS) {
		return (
			<h1 className="px-4 py-10 text-center">Producto no encontrado</h1>
		);
	}

	const { title, image, description, price, rating, id, category } =
		PRODUCT_DETAILS;

	return (
		<div className="px-4 py-10 lg:grid lg:grid-cols-2 lg:gap-10">
			<div className="rounded-sm rounded-xl bg-gray-100 p-7">
				<img
					alt={title}
					className="lg:max-m-0 max-h-36 justify-self-center mix-blend-multiply lg:max-h-none"
					src={image}
				/>
			</div>
			<div>
				<h1 className="mt-5">{title}</h1>
				<div className="my-3 flex items-center gap-1">
					{renderStars(rating.rate)}
					<p>{rating.rate}/5</p>
				</div>
				<p className="text-2xl font-bold lg:text-3xl">{price}</p>
				<div className="mt-5">
					<p className="text-sm font-thin">ID: {id}</p>
					<p className="text-sm font-thin capitalize">
						Categoría: {category}
					</p>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};
