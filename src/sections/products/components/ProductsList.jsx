/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { ProductCard } from './ProductCard';

export const ProductsList = ({ products, className }) => (
	<>
		{products.map((product) => (
			<article
				key={product.id}
				className={className}
			>
				<ProductCard product={product} />
			</article>
		))}
	</>
);
