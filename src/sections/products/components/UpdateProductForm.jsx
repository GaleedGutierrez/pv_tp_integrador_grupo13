/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useAppSelector } from '@hooks/useAppSelector';
import { extractNumericPrice } from '@utils/extractNumericPrice';
import { LoaderIcon } from 'lucide-react';
import { useParams } from 'react-router';

import { ProductForm } from './ProductForm';

export const UpdateProductForm = () => {
	const { id } = useParams();
	const FOUND_PRODUCT = useAppSelector((state) =>
		state.products.items.find((product) => product.id === Number(id)),
	);

	if (!FOUND_PRODUCT) {
		return (
			<section className="my-8 flex flex-col items-center justify-center gap-4">
				<h1>Editar producto</h1>
				<LoaderIcon
					className="animate-spin"
					size={80}
				/>
			</section>
		);
	}

	const PRODUCT = {
		id: FOUND_PRODUCT.id,
		title: FOUND_PRODUCT.title,
		description: FOUND_PRODUCT.description,
		price: extractNumericPrice(FOUND_PRODUCT.price),
		category: FOUND_PRODUCT.category,
		image: FOUND_PRODUCT.image,
	};

	return (
		<ProductForm
			initialData={PRODUCT}
			modeForm="update"
			productId={PRODUCT.id}
		/>
	);
};
